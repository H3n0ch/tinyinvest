-- ============================================================
-- Migration: Multi-Asset Portfolio (investor_assets table)
-- Run once in Supabase SQL editor
-- ============================================================

BEGIN;

-- 1. Create the table
CREATE TABLE IF NOT EXISTS investor_assets (
  id                 UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id            UUID NOT NULL,
  listing_id         INTEGER NOT NULL REFERENCES listings(id) ON DELETE CASCADE,
  mgmt_fee_pct       NUMERIC(5,2) DEFAULT 15,
  host_pct           NUMERIC(5,2) DEFAULT 45,
  kaufvertrag_url    TEXT,
  escapes_escape_id  UUID,
  created_at         TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT uq_investor_asset UNIQUE(user_id, listing_id)
);

-- 2. Enable Row-Level Security
ALTER TABLE investor_assets ENABLE ROW LEVEL SECURITY;

-- 3. RLS: each investor can only read their OWN rows
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'investor_assets' AND policyname = 'investor_assets_self_select'
  ) THEN
    CREATE POLICY "investor_assets_self_select" ON investor_assets
      FOR SELECT USING (auth.uid() = user_id);
  END IF;
END$$;

-- 4. Migrate existing owner_id assignments → investor_assets (idempotent)
INSERT INTO investor_assets
  (user_id, listing_id, mgmt_fee_pct, host_pct, kaufvertrag_url, escapes_escape_id)
SELECT
  owner_id,
  id,
  COALESCE(mgmt_fee_pct, 15),
  COALESCE(host_pct, 45),
  kaufvertrag_url,
  escapes_escape_id
FROM listings
WHERE owner_id IS NOT NULL
ON CONFLICT (user_id, listing_id) DO NOTHING;

COMMIT;
