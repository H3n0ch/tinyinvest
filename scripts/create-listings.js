// scripts/create-listings.js
// Run: node scripts/create-listings.js
// Creates the `listings` table in Supabase and seeds the 6 initial asset cards.

const { Client } = require("pg");

const client = new Client({
  connectionString: "postgresql://postgres:8exng8sfQ2EGee5Y@db.qtssdcytplgputcvdrhe.supabase.co:5432/postgres",
  ssl: { rejectUnauthorized: false },
});

async function main() {
  await client.connect();
  console.log("✅ Connected to Supabase Postgres");

  // ── 1. Create table ────────────────────────────────────
  await client.query(`
    CREATE TABLE IF NOT EXISTS listings (
      id           serial PRIMARY KEY,
      asset_id     text NOT NULL,
      img          text NOT NULL,
      category     text NOT NULL,
      title        text NOT NULL,
      location     text NOT NULL,
      description  text NOT NULL,
      preis        text NOT NULL,
      irr          text NOT NULL,
      npv          text NOT NULL,
      occ          text NOT NULL,
      occ_note     text NOT NULL,
      reserved     int NOT NULL DEFAULT 0,
      total        int NOT NULL DEFAULT 0,
      status       text NOT NULL DEFAULT 'available',
      status_label text NOT NULL,
      badge        text NOT NULL,
      badge_color  text NOT NULL,
      sort_order   int NOT NULL DEFAULT 0,
      active       boolean NOT NULL DEFAULT true,
      created_at   timestamptz NOT NULL DEFAULT now()
    );
  `);
  console.log("✅ Table `listings` created (or already exists)");

  // ── 2. Enable Row Level Security (read-only public) ────
  await client.query(`ALTER TABLE listings ENABLE ROW LEVEL SECURITY;`);
  await client.query(`
    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1 FROM pg_policies WHERE tablename = 'listings' AND policyname = 'public_read'
      ) THEN
        EXECUTE 'CREATE POLICY public_read ON listings FOR SELECT USING (true)';
      END IF;
    END
    $$;
  `);
  console.log("✅ RLS: public read policy ensured");

  // ── 3. Seed data (upsert on asset_id) ─────────────────
  const listings = [
    {
      asset_id: "TE-2026-01",
      img: "/images/outside/ESCAPE3.webp",
      category: "On-Grid · Einstieg",
      title: "TinyInvest Comfort",
      location: "@ tiny Escapes Harz",
      description: "Vlemmix Trailer, netzgebunden. Ideal für Ferienparks mit Strom- und Wasseranschluss.",
      preis: "60.000 €",
      irr: "10–12 %",
      npv: "+18.400 €",
      occ: "55 %",
      occ_note: "Ø Belegung, Harz-Standort.",
      reserved: 1,
      total: 3,
      status: "available",
      status_label: "Verfügbar",
      badge: "Günstigster Einstieg",
      badge_color: "bg-blue-100 text-blue-800",
      sort_order: 1,
      active: true,
    },
    {
      asset_id: "TE-2026-02",
      img: "/images/outside/ESCAPE1.webp",
      category: "Off-Grid · Standard",
      title: "TinyInvest Escape",
      location: "@ tiny Escapes Schwarzwald",
      description: "Vollautark: Solar, Wassertanks, Clansana-Komposttoilette. Keine Infrastruktur nötig.",
      preis: "79.000 €",
      irr: "12–14 %",
      npv: "+26.800 €",
      occ: "60 %",
      occ_note: "Ø Belegung, Schwarzwald-Standort.",
      reserved: 2,
      total: 3,
      status: "reserved",
      status_label: "2× Reserviert",
      badge: "Bestseller",
      badge_color: "bg-green-100 text-green-800",
      sort_order: 2,
      active: true,
    },
    {
      asset_id: "TE-2026-03",
      img: "/images/outside/ESCAPE2.webp",
      category: "Off-Grid · Premium",
      title: "TinyInvest Elite",
      location: "@ tiny Escapes (Standort wählbar)",
      description: "Hotel-Standard: Loop-Duschsystem, Cinderella-Toilette, Schafwoll-Dämmung.",
      preis: "95.000 €",
      irr: "13–15 %",
      npv: "+33.200 €",
      occ: "55–60 %",
      occ_note: "Projiziert, tiny Escapes Netzwerk.",
      reserved: 0,
      total: 2,
      status: "available",
      status_label: "Verfügbar",
      badge: "Maximum IAB-Hebel",
      badge_color: "bg-amber-100 text-amber-800",
      sort_order: 3,
      active: true,
    },
    {
      asset_id: "TE-2026-04",
      img: "/images/outside/fog.jpg",
      category: "On-Grid · Einstieg",
      title: "TinyInvest Comfort",
      location: "@ tiny Escapes Ostseeküste",
      description: "Phase-2-Standort. Ostsee-Ferienpark mit direkter Wassernähe und hoher Saisonauslastung.",
      preis: "60.000 €",
      irr: "10–12 %",
      npv: "+18.400 €",
      occ: "—",
      occ_note: "Belegungsdaten nach Standortfreigabe.",
      reserved: 0,
      total: 3,
      status: "planning",
      status_label: "In Planung",
      badge: "Phase 2 · 2026",
      badge_color: "bg-indigo-100 text-indigo-800",
      sort_order: 4,
      active: true,
    },
    {
      asset_id: "TE-2026-05",
      img: "/images/outside/winter.webp",
      category: "Off-Grid · Standard",
      title: "TinyInvest Escape",
      location: "@ tiny Escapes Brandenburg",
      description: "Phase-2-Standort. Naturnahes Seengebiet, vollautark, ganzjährig betreibbar.",
      preis: "79.000 €",
      irr: "12–14 %",
      npv: "+26.800 €",
      occ: "—",
      occ_note: "Belegungsdaten nach Standortfreigabe.",
      reserved: 0,
      total: 3,
      status: "planning",
      status_label: "In Planung",
      badge: "Phase 2 · 2026",
      badge_color: "bg-indigo-100 text-indigo-800",
      sort_order: 5,
      active: true,
    },
    {
      asset_id: "TE-2026-06",
      img: "/images/outside/green.webp",
      category: "Off-Grid · Premium",
      title: "TinyInvest Elite",
      location: "@ tiny Escapes Allgäu",
      description: "Phase-2-Standort. Premium-Bergregion, höchste Nachtrate erwartet, begrenzte Units.",
      preis: "95.000 €",
      irr: "13–15 %",
      npv: "+33.200 €",
      occ: "—",
      occ_note: "Belegungsdaten nach Standortfreigabe.",
      reserved: 0,
      total: 2,
      status: "planning",
      status_label: "Bald verfügbar",
      badge: "Vormerken",
      badge_color: "bg-purple-100 text-purple-800",
      sort_order: 6,
      active: true,
    },
  ];

  for (const l of listings) {
    await client.query(
      `INSERT INTO listings
        (asset_id, img, category, title, location, description, preis, irr, npv,
         occ, occ_note, reserved, total, status, status_label, badge, badge_color, sort_order, active)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19)
       ON CONFLICT DO NOTHING`,
      [
        l.asset_id, l.img, l.category, l.title, l.location, l.description,
        l.preis, l.irr, l.npv, l.occ, l.occ_note,
        l.reserved, l.total, l.status, l.status_label, l.badge, l.badge_color,
        l.sort_order, l.active,
      ]
    );
    console.log(`  ↳ Inserted ${l.asset_id}`);
  }

  console.log("✅ All 6 listings seeded");
  await client.end();
}

main().catch((err) => {
  console.error("❌ Error:", err.message);
  process.exit(1);
});
