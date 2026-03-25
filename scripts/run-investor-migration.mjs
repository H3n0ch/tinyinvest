// Migration: Create investor_assets table in Supabase
// Uses pg (PostgreSQL client) to connect directly

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const DATABASE_URL = 'postgresql://postgres:8exng8sfQ2EGee5Y@db.qtssdcytplgputcvdrhe.supabase.co:5432/postgres';

let Client;
try {
  ({ Client } = require('pg'));
} catch {
  console.error('pg not found in node_modules. Installing...');
  // Will be handled by the calling script
  process.exit(2);
}

const client = new Client({
  connectionString: DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const SQL = `
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

ALTER TABLE investor_assets ENABLE ROW LEVEL SECURITY;

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

INSERT INTO investor_assets
  (user_id, listing_id, mgmt_fee_pct, host_pct, kaufvertrag_url, escapes_escape_id)
SELECT
  owner_id, id,
  COALESCE(mgmt_fee_pct, 15),
  COALESCE(host_pct, 45),
  kaufvertrag_url,
  escapes_escape_id
FROM listings
WHERE owner_id IS NOT NULL
ON CONFLICT (user_id, listing_id) DO NOTHING;
`;

async function run() {
  try {
    await client.connect();
    console.log('✅ Connected to Supabase');

    await client.query(SQL);
    console.log('✅ investor_assets table created (or already exists)');

    // Verify
    const res = await client.query("SELECT COUNT(*) FROM investor_assets");
    console.log(`✅ investor_assets rows: ${res.rows[0].count}`);

    await client.end();
    console.log('🎉 Migration complete!');
  } catch (err) {
    console.error('❌ Migration failed:', err.message);
    await client.end().catch(() => {});
    process.exit(1);
  }
}

run();
