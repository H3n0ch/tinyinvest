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

export async function GET(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const admin = getAdmin();

  const [pendingRes, listingsRes, escapesRes] = await Promise.all([
    admin.from("investor_pending").select("*").order("registered_at", { ascending: false }),
    admin.from("listings").select("id, asset_id, title, owner_id, mgmt_fee_pct, host_pct, kaufvertrag_url, escapes_escape_id").order("sort_order", { ascending: true }),
    admin.from("escapes").select("id, name, location").order("name", { ascending: true }),
  ]);

  if (pendingRes.error) return NextResponse.json({ error: pendingRes.error.message }, { status: 500 });
  if (listingsRes.error) return NextResponse.json({ error: listingsRes.error.message }, { status: 500 });

  return NextResponse.json({
    pending:  pendingRes.data  ?? [],
    listings: listingsRes.data ?? [],
    escapes:  escapesRes.data  ?? [],
  });
}
