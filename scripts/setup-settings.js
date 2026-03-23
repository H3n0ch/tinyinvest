/* eslint-disable @typescript-eslint/no-require-imports */
// scripts/setup-settings.js
// Run: node scripts/setup-settings.js
// Creates the `settings` table and seeds the default hero_image row.

const { Client } = require("pg");

const client = new Client({
  connectionString: "postgresql://postgres:8exng8sfQ2EGee5Y@db.qtssdcytplgputcvdrhe.supabase.co:5432/postgres",
  ssl: { rejectUnauthorized: false },
});

async function main() {
  await client.connect();
  console.log("✅ Connected to Supabase Postgres");

  // Create settings table
  await client.query(`
    CREATE TABLE IF NOT EXISTS settings (
      key        text PRIMARY KEY,
      value      text NOT NULL,
      updated_at timestamptz NOT NULL DEFAULT now()
    );
  `);
  console.log("✅ Table 'settings' created (or already exists)");

  // Enable RLS
  await client.query(`ALTER TABLE settings ENABLE ROW LEVEL SECURITY;`);
  await client.query(`
    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1 FROM pg_policies WHERE tablename = 'settings' AND policyname = 'public_read'
      ) THEN
        EXECUTE 'CREATE POLICY public_read ON settings FOR SELECT USING (true)';
      END IF;
    END
    $$;
  `);
  console.log("✅ RLS: public read policy ensured");

  // Seed default hero image
  await client.query(`
    INSERT INTO settings (key, value)
    VALUES ('hero_image', '/images/outside/ESCAPE3.webp')
    ON CONFLICT (key) DO NOTHING;
  `);
  console.log("✅ Default hero_image seeded");

  await client.end();
  console.log("✅ Done!");
}

main().catch((err) => {
  console.error("❌ Error:", err.message);
  process.exit(1);
});
