import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "tinyinvest2026";

function getAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false, autoRefreshToken: false } }
  );
}

// Step-by-step migration using the Supabase JS client
// Each step uses available Supabase features
export async function POST(req: NextRequest) {
  if (req.headers.get("x-admin-password") !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const admin = getAdmin();
  const results: string[] = [];

  // ── Step 1: Check if investor_assets table already exists ──
  const { data: existingRows, error: checkError } = await admin
    .from("investor_assets")
    .select("id")
    .limit(1);

  if (!checkError) {
    // Table already exists
    results.push("✅ investor_assets table already exists – skipping DDL");

    // Still run the data migration (idempotent)
    const { data: listings } = await admin
      .from("listings")
      .select("id, owner_id, mgmt_fee_pct, host_pct, kaufvertrag_url, escapes_escape_id")
      .not("owner_id", "is", null);

    let migrated = 0;
    for (const l of listings ?? []) {
      const { error } = await admin
        .from("investor_assets")
        .upsert(
          {
            user_id:           l.owner_id,
            listing_id:        l.id,
            mgmt_fee_pct:      l.mgmt_fee_pct ?? 15,
            host_pct:          l.host_pct ?? 45,
            kaufvertrag_url:   l.kaufvertrag_url ?? null,
            escapes_escape_id: l.escapes_escape_id ?? null,
          },
          { onConflict: "user_id,listing_id", ignoreDuplicates: true }
        );
      if (!error) migrated++;
    }
    results.push(`✅ Data migration: ${migrated} listings migrated (idempotent)`);

    return NextResponse.json({ ok: true, results });
  }

  // ── Table does NOT exist → We cannot create it via JS client ──
  // Return instructions with the exact SQL to run
  const sql = `
-- Run this in Supabase Dashboard → SQL Editor
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

CREATE POLICY "investor_assets_self_select" ON investor_assets
  FOR SELECT USING (auth.uid() = user_id);

-- Migrate existing owner_id data:
INSERT INTO investor_assets
  (user_id, listing_id, mgmt_fee_pct, host_pct, kaufvertrag_url, escapes_escape_id)
SELECT
  owner_id, id,
  COALESCE(mgmt_fee_pct, 15), COALESCE(host_pct, 45),
  kaufvertrag_url, escapes_escape_id
FROM listings
WHERE owner_id IS NOT NULL
ON CONFLICT (user_id, listing_id) DO NOTHING;
  `.trim();

  return NextResponse.json(
    {
      ok: false,
      message: "⚠️ Table investor_assets does not exist yet. Copy & run the SQL below in Supabase Dashboard → SQL Editor.",
      sql,
      error: checkError.message,
    },
    { status: 422 }
  );
}
