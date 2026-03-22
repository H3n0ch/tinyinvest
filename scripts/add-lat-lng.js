// scripts/add-lat-lng.js
// Adds lat + lng nullable float columns to the listings table
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function run() {
  const { error } = await supabase.rpc("exec_sql", {
    sql: `
      ALTER TABLE listings
        ADD COLUMN IF NOT EXISTS lat DOUBLE PRECISION,
        ADD COLUMN IF NOT EXISTS lng DOUBLE PRECISION;
    `,
  });

  if (error) {
    // rpc exec_sql may not exist — try direct query approach
    console.log("rpc failed, trying direct query:", error.message);
    // Use REST API to run raw SQL via the pg endpoint
    const res = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/rpc/exec_sql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": process.env.SUPABASE_SERVICE_ROLE_KEY,
        "Authorization": `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
      },
      body: JSON.stringify({ sql: "ALTER TABLE listings ADD COLUMN IF NOT EXISTS lat DOUBLE PRECISION, ADD COLUMN IF NOT EXISTS lng DOUBLE PRECISION;" }),
    });
    const text = await res.text();
    console.log("Response:", res.status, text);
  } else {
    console.log("✓ lat + lng columns added (or already exist).");
  }

  // Verify
  const { data, error: e2 } = await supabase.from("listings").select("id, lat, lng").limit(1);
  if (e2) {
    console.log("✗ Verification failed:", e2.message);
    console.log("\nPlease run this SQL manually in Supabase SQL Editor:\n");
    console.log("  ALTER TABLE listings");
    console.log("    ADD COLUMN IF NOT EXISTS lat DOUBLE PRECISION,");
    console.log("    ADD COLUMN IF NOT EXISTS lng DOUBLE PRECISION;");
  } else {
    console.log("✓ Verified! Sample row:", data);
  }
}

run().catch(console.error);
