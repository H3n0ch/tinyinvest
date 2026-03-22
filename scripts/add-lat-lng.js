/* eslint-disable @typescript-eslint/no-require-imports */
// scripts/add-lat-lng.js — adds lat/lng columns via direct PostgreSQL connection
const { Client } = require("pg");

const DATABASE_URL =
  "postgresql://postgres:8exng8sfQ2EGee5Y@db.qtssdcytplgputcvdrhe.supabase.co:5432/postgres";

async function run() {
  const client = new Client({ connectionString: DATABASE_URL, ssl: { rejectUnauthorized: false } });
  await client.connect();
  console.log("✓ Connected to Supabase PostgreSQL");

  await client.query(`
    ALTER TABLE listings
      ADD COLUMN IF NOT EXISTS lat DOUBLE PRECISION,
      ADD COLUMN IF NOT EXISTS lng DOUBLE PRECISION;
  `);
  console.log("✓ lat + lng columns added (or already existed)");

  const res = await client.query("SELECT id, asset_id, lat, lng FROM listings LIMIT 3;");
  console.log("✓ Verification — sample rows:");
  res.rows.forEach((r) =>
    console.log(`  #${r.id} ${r.asset_id}  lat=${r.lat}  lng=${r.lng}`)
  );

  await client.end();
  console.log("✓ Done.");
}

run().catch((err) => {
  console.error("✗ Migration failed:", err.message);
  process.exit(1);
});
