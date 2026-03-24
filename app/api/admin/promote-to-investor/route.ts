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

/**
 * POST /api/admin/promote-to-investor
 *
 * Converts a lead into an investor account:
 * 1. Creates a Supabase Auth user (email_confirm: true — no email sent)
 * 2. Upserts into investor_pending table
 * 3. Updates lead status to "abgeschlossen"
 *
 * Body: { lead_id, email, full_name }
 */
export async function POST(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { lead_id, email, full_name } = await req.json();

  if (!email) return NextResponse.json({ error: "email required" }, { status: 400 });

  const admin = getAdmin();

  // 1. Check if auth user already exists for this email
  const { data: existingUsers } = await admin.auth.admin.listUsers();
  const existingUser = existingUsers?.users?.find((u) => u.email === email);

  let userId: string;

  if (existingUser) {
    // Already has an auth account — reuse it
    userId = existingUser.id;
  } else {
    // Create new auth user with email confirmed but no password / no email sent
    const { data: newUser, error: createErr } = await admin.auth.admin.createUser({
      email,
      email_confirm: true,   // marks email as verified, skips confirmation email
      user_metadata: { full_name: full_name ?? "" },
    });

    if (createErr || !newUser?.user) {
      return NextResponse.json(
        { error: createErr?.message ?? "Failed to create auth user" },
        { status: 500 }
      );
    }

    userId = newUser.user.id;
  }

  // 2. Upsert into investor_pending so admin can see & assign them
  const { error: pendingErr } = await admin
    .from("investor_pending")
    .upsert(
      { user_id: userId, email, full_name: full_name ?? "" },
      { onConflict: "user_id", ignoreDuplicates: false }
    );

  if (pendingErr) {
    return NextResponse.json({ error: pendingErr.message }, { status: 500 });
  }

  // 3. Mark lead as "abgeschlossen" if lead_id provided
  if (lead_id) {
    await admin
      .from("leads")
      .update({ status: "abgeschlossen" })
      .eq("id", lead_id);
  }

  return NextResponse.json({ success: true, user_id: userId });
}
