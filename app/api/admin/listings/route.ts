import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "tinyinvest2026";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

function checkAuth(req: NextRequest) {
  const pw = req.headers.get("x-admin-password");
  return pw === ADMIN_PASSWORD;
}

// GET — return all listings
export async function GET(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data, error } = await supabaseAdmin
    .from("listings")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

// POST — create a new listing
export async function POST(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();

  const row: Record<string, unknown> = {
    asset_id:     body.asset_id     ?? "",
    category:     body.category     ?? "Ferienimmobilie",
    title:        body.title        ?? "Neues Projekt",
    location:     body.location     ?? "",
    description:  body.description  ?? "",
    preis:        body.preis        ?? "",
    irr:          body.irr          ?? "",
    npv:          body.npv          ?? "",
    occ:          body.occ          ?? "",
    occ_note:     body.occ_note     ?? "",
    img:          body.img          ?? "/images/outside/fog.jpg",
    reserved:     Number(body.reserved ?? 0),
    total:        Number(body.total   ?? 1),
    status:       body.status       ?? "planning",
    status_label: body.status_label ?? "In Planung",
    badge:        body.badge        ?? "Phase 2",
    badge_color:  body.badge_color  ?? "bg-indigo-100 text-indigo-700",
    sort_order:   Number(body.sort_order ?? 99),
    active:       body.active       ?? false,
  };

  const { data, error } = await supabaseAdmin
    .from("listings")
    .insert(row)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data, { status: 201 });
}

// PATCH — update any fields on a listing
export async function PATCH(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { id, ...rest } = body;

  if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });

  // Allowed updatable fields
  const allowed = [
    "asset_id","category","title","location","description",
    "preis","irr","npv","occ","occ_note","img",
    "reserved","total","status","status_label",
    "badge","badge_color","sort_order","active",
    "lat","lng",
  ];

  const updates: Record<string, unknown> = {};
  for (const key of allowed) {
    if (rest[key] !== undefined) {
      if (key === "reserved" || key === "total" || key === "sort_order") {
        updates[key] = Number(rest[key]);
      } else if (key === "lat" || key === "lng") {
        updates[key] = rest[key] === "" || rest[key] === null ? null : Number(rest[key]);
      } else {
        updates[key] = rest[key];
      }
    }
  }

  // Auto-sync status_label if status changed but status_label not explicitly provided
  if (updates.status && !updates.status_label) {
    const labels: Record<string, string> = {
      available: "Verfügbar",
      reserved:  "Reserviert",
      sold:      "Sold Out",
      planning:  "In Planung",
    };
    updates.status_label = labels[updates.status as string] ?? String(updates.status);
  }

  const { data, error } = await supabaseAdmin
    .from("listings")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

// DELETE — delete a listing by id
export async function DELETE(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });

  const { error } = await supabaseAdmin
    .from("listings")
    .delete()
    .eq("id", Number(id));

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
