/* eslint-disable @typescript-eslint/no-require-imports */
// scripts/fix-hero-image.js
// Fixes the hero_image setting from the wrong Escape1.jpg to the correct ESCAPE1.webp

const { Client } = require("pg");

const client = new Client({
  connectionString: "postgresql://postgres:8exng8sfQ2EGee5Y@db.qtssdcytplgputcvdrhe.supabase.co:5432/postgres",
  ssl: { rejectUnauthorized: false },
});

async function main() {
  await client.connect();
  console.log("✅ Connected to Supabase Postgres");

  const result = await client.query(`
    UPDATE settings
    SET value = '/images/outside/ESCAPE1.webp', updated_at = now()
    WHERE key = 'hero_image'
    RETURNING value;
  `);

  if (result.rowCount > 0) {
    console.log("✅ hero_image updated to:", result.rows[0].value);
  } else {
    // Row didn't exist – insert it
    await client.query(`
      INSERT INTO settings (key, value)
      VALUES ('hero_image', '/images/outside/ESCAPE1.webp')
      ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value, updated_at = now();
    `);
    console.log("✅ hero_image inserted as /images/outside/ESCAPE1.webp");
  }

  await client.end();
  console.log("✅ Done!");
}

main().catch((err) => {
  console.error("❌ Error:", err.message);
  process.exit(1);
});
