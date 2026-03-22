/* eslint-disable @typescript-eslint/no-require-imports */
const { Client } = require("pg");

const client = new Client({
  connectionString:
    "postgresql://postgres:8exng8sfQ2EGee5Y@db.qtssdcytplgputcvdrhe.supabase.co:5432/postgres",
  ssl: { rejectUnauthorized: false },
});

async function migrate() {
  await client.connect();
  console.log("✅ Connected to Supabase PostgreSQL");

  await client.query(`
    CREATE TABLE IF NOT EXISTS leads (
      id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
      created_at timestamptz DEFAULT now(),
      vorname text,
      nachname text,
      email text,
      telefon text,
      interesse text,
      budget text,
      nachricht text,
      status text DEFAULT 'neu'
    );
  `);

  console.log("✅ Table 'leads' created (or already exists)");
  await client.end();
}

migrate().catch((err) => {
  console.error("❌ Migration failed:", err.message);
  process.exit(1);
});
