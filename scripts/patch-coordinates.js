/* eslint-disable @typescript-eslint/no-require-imports */
// scripts/patch-coordinates.js
// Run: node scripts/patch-coordinates.js
// Patches lat/lng coordinates for all 6 existing listings via direct Postgres connection.

const { Client } = require("pg");

const client = new Client({
  connectionString: "postgresql://postgres:8exng8sfQ2EGee5Y@db.qtssdcytplgputcvdrhe.supabase.co:5432/postgres",
  ssl: { rejectUnauthorized: false },
});

const coordinates = [
  { asset_id: "TE-2026-01", lat: 51.7566, lng: 10.5514, note: "Harz" },
  { asset_id: "TE-2026-02", lat: 48.2690, lng: 8.1670,  note: "Schwarzwald" },
  { asset_id: "TE-2026-03", lat: 51.1657, lng: 10.4515, note: "Deutschland Mitte (wählbar)" },
  { asset_id: "TE-2026-04", lat: 54.3204, lng: 12.3790, note: "Ostseeküste" },
  { asset_id: "TE-2026-05", lat: 52.8432, lng: 13.4884, note: "Brandenburg" },
  { asset_id: "TE-2026-06", lat: 47.7456, lng: 10.3080, note: "Allgäu" },
];

async function main() {
  await client.connect();
  console.log("✅ Connected to Supabase Postgres");

  // Make sure lat/lng columns exist (safe to run even if they already do)
  await client.query(`
    ALTER TABLE listings
      ADD COLUMN IF NOT EXISTS lat double precision,
      ADD COLUMN IF NOT EXISTS lng double precision;
  `);
  console.log("✅ lat/lng columns ensured");

  for (const c of coordinates) {
    const res = await client.query(
      `UPDATE listings SET lat = $1, lng = $2 WHERE asset_id = $3 RETURNING id, asset_id`,
      [c.lat, c.lng, c.asset_id]
    );
    if (res.rowCount > 0) {
      console.log(`  ✅ ${c.asset_id} → (${c.lat}, ${c.lng}) — ${c.note}`);
    } else {
      console.log(`  ⚠️  ${c.asset_id} not found`);
    }
  }

  console.log("✅ All coordinates patched");
  await client.end();
}

main().catch((err) => {
  console.error("❌ Error:", err.message);
  process.exit(1);
});
