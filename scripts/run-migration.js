const { Client } = require("pg");

const client = new Client({
  connectionString: "postgresql://postgres:8exng8sfQ2EGee5Y@db.qtssdcytplgputcvdrhe.supabase.co:5432/postgres",
  ssl: { rejectUnauthorized: false },
});

const sql = `
ALTER TABLE public.listings
  ADD COLUMN IF NOT EXISTS escapes_escape_id uuid;
`;

(async () => {
  try {
    await client.connect();
    await client.query(sql);
    console.log("✅ Added escapes_escape_id (uuid) to listings table!");
  } catch (err) {
    console.error("❌", err.message);
  } finally {
    await client.end();
  }
})();
