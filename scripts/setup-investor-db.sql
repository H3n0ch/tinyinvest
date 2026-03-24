-- ============================================================
-- TinyInvest – Investor Dashboard: Phase 1 Migration
-- Ausführen im Supabase SQL Editor (einmalig)
-- ============================================================

-- 1. listings erweitern
ALTER TABLE listings ADD COLUMN IF NOT EXISTS owner_id UUID REFERENCES auth.users(id) ON DELETE SET NULL;
ALTER TABLE listings ADD COLUMN IF NOT EXISTS kaufvertrag_url TEXT;
ALTER TABLE listings ADD COLUMN IF NOT EXISTS mgmt_fee_pct NUMERIC(5,2) NOT NULL DEFAULT 15.00;
ALTER TABLE listings ADD COLUMN IF NOT EXISTS host_pct NUMERIC(5,2) NOT NULL DEFAULT 45.00;

-- 2. investor_pending Tabelle – damit du weißt, wer sich eingeloggt hat
--    und noch keinem Asset zugewiesen ist
CREATE TABLE IF NOT EXISTS investor_pending (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  registered_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id)
);

-- 3. investor_performance_view (OHNE Gastdaten – DSGVO-konform)
CREATE OR REPLACE VIEW investor_performance_view AS
SELECT
  l.id                          AS listing_id,
  l.owner_id,
  l.title,
  l.img,
  l.location,
  l.asset_id,
  l.kaufvertrag_url,
  l.mgmt_fee_pct,
  l.host_pct,
  -- Umsatz laufender Monat (Brutto)
  COALESCE(
    SUM(CASE
      WHEN DATE_TRUNC('month', b.check_in) = DATE_TRUNC('month', NOW())
      THEN b.revenue_gross
    END), 0
  )                             AS umsatz_brutto_monat,
  -- Investor-Netto (Brutto minus Management-Fee)
  ROUND(
    COALESCE(
      SUM(CASE
        WHEN DATE_TRUNC('month', b.check_in) = DATE_TRUNC('month', NOW())
        THEN b.revenue_gross
      END), 0
    ) * (1 - l.mgmt_fee_pct / 100.0), 2
  )                             AS investor_netto_monat,
  -- Belegte Nächte laufender Monat
  COALESCE(
    SUM(CASE
      WHEN DATE_TRUNC('month', b.check_in) = DATE_TRUNC('month', NOW())
      THEN (b.check_out - b.check_in)
    END), 0
  )                             AS naechte_monat,
  -- Nächste Anreise (kein Gastname!)
  MIN(CASE
    WHEN b.check_in >= CURRENT_DATE AND b.status = 'confirmed'
    THEN b.check_in
  END)                          AS naechste_anreise,
  -- Gesamtumsatz aller Zeiten
  COALESCE(SUM(b.revenue_gross), 0) AS umsatz_gesamt_brutto
FROM listings l
LEFT JOIN bookings b
  ON b.listing_id = l.id
  AND b.status = 'confirmed'
WHERE l.owner_id IS NOT NULL
GROUP BY
  l.id, l.owner_id, l.title, l.img, l.location,
  l.asset_id, l.kaufvertrag_url, l.mgmt_fee_pct, l.host_pct;

-- 4. RLS aktivieren
ALTER TABLE listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE investor_pending ENABLE ROW LEVEL SECURITY;

-- 5. RLS Policies für listings
-- Investor sieht NUR sein eigenes Asset
DROP POLICY IF EXISTS "investor_own_listing_select" ON listings;
CREATE POLICY "investor_own_listing_select" ON listings
  FOR SELECT
  USING (auth.uid() = owner_id);

-- Admin (service role) kann alles (kein Policy nötig – service role bypasses RLS)

-- 6. RLS für bookings: Investor darf bookings NICHT direkt lesen
--    (nur über den View, der keine Gastdaten enthält)
DROP POLICY IF EXISTS "no_investor_booking_access" ON bookings;
CREATE POLICY "no_investor_booking_access" ON bookings
  FOR SELECT
  USING (false);

-- 7. RLS für investor_pending
-- Investor sieht nur seinen eigenen Eintrag
DROP POLICY IF EXISTS "investor_own_pending" ON investor_pending;
CREATE POLICY "investor_own_pending" ON investor_pending
  FOR SELECT
  USING (auth.uid() = user_id);

-- Investor kann sich selbst eintragen (beim ersten Login)
DROP POLICY IF EXISTS "investor_pending_insert" ON investor_pending;
CREATE POLICY "investor_pending_insert" ON investor_pending
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- 8. Sicherstellen dass guest_accounts für Investoren gesperrt bleibt
--    (Falls noch kein RLS auf guest_accounts aktiv ist)
ALTER TABLE guest_accounts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "only_tiny_escapes_access" ON guest_accounts;
CREATE POLICY "only_tiny_escapes_access" ON guest_accounts
  FOR ALL
  USING (false);  -- Nur Service Role (TinyEscapes Backend) hat Zugriff

-- ============================================================
-- HINWEIS: Nach dem Ausführen in Supabase:
-- 1. Gehe zu Authentication > Providers > Email und aktiviere "Magic Link"
-- 2. Setze die Redirect-URL: https://tinyhouse.investments/investor/auth/callback
-- ============================================================
