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

function checkAuth(req: NextRequest) {
  return req.headers.get("x-admin-password") === ADMIN_PASSWORD;
}

// GET /api/admin/investor-assets?user_id=<uuid>
export async function GET(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const userId = req.nextUrl.searchParams.get("user_id");
  const admin  = getAdmin();

  let query = admin
    .from("investor_assets")
    .select("id, user_id, listing_id, mgmt_fee_pct, host_pct, kaufvertrag_url, escapes_escape_id, created_at")
    .order("created_at", { ascending: true });

  if (userId) query = query.eq("user_id", userId);

  const { data, error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data ?? []);
}

// POST /api/admin/investor-assets  → add (or upsert) an asset to an investor
export async function POST(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const {
    user_id,
    listing_id,
    mgmt_fee_pct       = 15,
    host_pct           = 45,
    kaufvertrag_url    = null,
    escapes_escape_id  = null,
  } = body;

  if (!user_id || !listing_id) {
    return NextResponse.json({ error: "user_id and listing_id required" }, { status: 400 });
  }

  const admin = getAdmin();
  const { data, error } = await admin
    .from("investor_assets")
    .upsert(
      {
        user_id,
        listing_id,
        mgmt_fee_pct,
        host_pct,
        kaufvertrag_url:   kaufvertrag_url   || null,
        escapes_escape_id: escapes_escape_id || null,
      },
      { onConflict: "user_id,listing_id" }
    )
    .select()
    .maybeSingle();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data, { status: 201 });
}

// PATCH /api/admin/investor-assets  → update fees / kaufvertrag / escape for a row
export async function PATCH(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { id, ...updates } = body;
  if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });

  // Sanitise empty strings to null
  if ("kaufvertrag_url"   in updates && !updates.kaufvertrag_url)   updates.kaufvertrag_url   = null;
  if ("escapes_escape_id" in updates && !updates.escapes_escape_id) updates.escapes_escape_id = null;

  const admin = getAdmin();
  const { data, error } = await admin
    .from("investor_assets")
    .update(updates)
    .eq("id", id)
    .select()
    .maybeSingle();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

// DELETE /api/admin/investor-assets?id=<uuid>
export async function DELETE(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const id = req.nextUrl.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });

  const admin = getAdmin();
  const { error } = await admin.from("investor_assets").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
