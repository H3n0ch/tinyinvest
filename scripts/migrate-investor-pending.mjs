import { createClient } from "@supabase/supabase-js";

const URL = "https://qtssdcytplgputcvdrhe.supabase.co";
const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0c3NkY3l0cGxncHV0Y3ZkcmhlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3Mjk3MjY3NCwiZXhwIjoyMDg4NTQ4Njc0fQ.tUxtwMCW4V_62F4PvyMNhu3PN-vT1BC00bn7IvnBYSc";

const admin = createClient(URL, KEY, { auth: { persistSession: false } });

// Execute SQL via Supabase Management API (pg_net not available here,
// so we use the REST /rest/v1/rpc if a helper exists, otherwise
// we hit the REST SQL endpoint directly via fetch)
const body = {
  query: `
    CREATE TABLE IF NOT EXISTS public.investor_pending (
      id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id       uuid UNIQUE NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
      email         text NOT NULL,
      full_name     text,
      registered_at timestamptz DEFAULT now()
    );

    DO $do$
    BEGIN
      IF NOT EXISTS (
        SELECT FROM information_schema.tables
        WHERE table_schema = 'public' AND table_name = 'investor_pending'
      ) THEN
        RAISE NOTICE 'created investor_pending';
      ELSE
        RAISE NOTICE 'investor_pending already exists - skipping CREATE';
      END IF;
    END
    $do$;

    ALTER TABLE public.investor_pending ENABLE ROW LEVEL SECURITY;

    DO $p1$
    BEGIN
      IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE tablename = 'investor_pending'
          AND policyname = 'investor_pending: owner read'
      ) THEN
        EXECUTE 'CREATE POLICY "investor_pending: owner read"
          ON public.investor_pending FOR SELECT
          USING (auth.uid() = user_id)';
      END IF;
    END
    $p1$;

    DO $p2$
    BEGIN
      IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE tablename = 'investor_pending'
          AND policyname = 'investor_pending: service all'
      ) THEN
        EXECUTE 'CREATE POLICY "investor_pending: service all"
          ON public.investor_pending FOR ALL
          TO service_role USING (true) WITH CHECK (true)';
      END IF;
    END
    $p2$;

    SELECT 'investor_pending migration complete' AS result;
  `
};

const res = await fetch(`${URL}/rest/v1/rpc/query`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "apikey": KEY,
    "Authorization": `Bearer ${KEY}`,
  },
  body: JSON.stringify(body),
});

if (!res.ok) {
  // REST RPC doesn't expose raw SQL; use the Postgres REST endpoint
  console.log("rpc/query not available, trying via Supabase DB REST...");

  // Try creating the table by inserting a dummy that will fail with a
  // "relation does not exist" vs a "duplicate key" error
  const probe = await admin.from("investor_pending").select("id").limit(1);
  if (probe.error && probe.error.message.includes("does not exist")) {
    console.error("Table does not exist and cannot be created automatically.");
    console.log("\n⚠️  Please run the following SQL in your Supabase SQL Editor:\n");
    console.log(`
CREATE TABLE IF NOT EXISTS public.investor_pending (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       uuid UNIQUE NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  email         text NOT NULL,
  full_name     text,
  registered_at timestamptz DEFAULT now()
);
ALTER TABLE public.investor_pending ENABLE ROW LEVEL SECURITY;
CREATE POLICY "investor_pending: owner read"
  ON public.investor_pending FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "investor_pending: service all"
  ON public.investor_pending FOR ALL TO service_role USING (true) WITH CHECK (true);
    `);
  } else if (!probe.error) {
    console.log("✅ Table investor_pending already exists and is accessible!");
  } else {
    console.log("Probe error:", probe.error.message);
  }
} else {
  const data = await res.json();
  console.log("✅ Migration result:", data);
}
