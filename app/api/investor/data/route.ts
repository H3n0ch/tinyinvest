import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email");
  if (!email) return NextResponse.json({ error: "email required" }, { status: 400 });

  // Verify JWT
  const authHeader = req.headers.get("authorization") ?? "";
  const bearerToken = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;

  const anonClient = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  if (bearerToken) {
    const { data: { user }, error } = await anonClient.auth.getUser(bearerToken);
    if (error || !user) return NextResponse.json({ error: "Nicht autorisiert" }, { status: 401 });
    if (user.email?.toLowerCase() !== email.toLowerCase()) {
      return NextResponse.json({ error: "Nicht autorisiert" }, { status: 403 });
    }
  }

  const admin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  );

  // 1. Find investor_pending by email
  const { data: pending, error: pendingErr } = await admin
    .from("investor_pending")
    .select("user_id, email, full_name, registered_at")
    .ilike("email", email)
    .maybeSingle();

  if (pendingErr) return NextResponse.json({ error: pendingErr.message }, { status: 500 });
  if (!pending) return NextResponse.json(null);

  // 2. Find linked listing
  const { data: listing } = await admin
    .from("listings")
    .select("asset_id, title, location, img, preis, irr, mgmt_fee_pct, host_pct, kaufvertrag_url, escapes_escape_id")
    .eq("owner_id", pending.user_id)
    .maybeSingle();

  // 3. Fetch booking stats if listing has an escape linked
  let bookingStats = null;
  if (listing?.escapes_escape_id) {
    const { data: bookings } = await admin
      .from("bookings")
      .select("check_in, check_out, total_price, status")
      .eq("escape_id", listing.escapes_escape_id)
      .eq("status", "confirmed");

    if (bookings && bookings.length > 0) {
      let totalNights = 0;
      let totalRevenue = 0;

      for (const b of bookings) {
        const checkIn  = new Date(b.check_in);
        const checkOut = new Date(b.check_out);
        const nights   = Math.round((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
        totalNights  += Math.max(0, nights);
        totalRevenue += parseFloat(b.total_price) || 0;
      }

      const mgmtFee   = listing.mgmt_fee_pct ?? 15;
      const hostPct   = listing.host_pct ?? 45;
      const investPct = Math.max(0, 100 - mgmtFee - hostPct);

      bookingStats = {
        total_bookings:   bookings.length,
        total_nights:     totalNights,
        total_revenue:    Math.round(totalRevenue * 100) / 100,
        investor_revenue: Math.round(totalRevenue * (investPct / 100) * 100) / 100,
        investor_pct:     investPct,
        // Recent bookings (last 5)
        recent: bookings
          .sort((a, b) => new Date(b.check_in).getTime() - new Date(a.check_in).getTime())
          .slice(0, 5)
          .map((b) => {
            const checkIn  = new Date(b.check_in);
            const checkOut = new Date(b.check_out);
            const nights   = Math.round((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
            return {
              check_in:  b.check_in,
              check_out: b.check_out,
              nights:    Math.max(0, nights),
              revenue:   parseFloat(b.total_price) || 0,
              your_cut:  Math.round((parseFloat(b.total_price) || 0) * (investPct / 100) * 100) / 100,
            };
          }),
      };
    }
  }

  return NextResponse.json({
    email:        pending.email,
    full_name:    pending.full_name ?? null,
    registered_at: pending.registered_at,
    asset:        listing
      ? {
          asset_id:          listing.asset_id,
          title:             listing.title,
          location:          listing.location,
          img:               listing.img,
          preis:             listing.preis,
          irr:               listing.irr,
          mgmt_fee_pct:      listing.mgmt_fee_pct ?? 15,
          host_pct:          listing.host_pct ?? 45,
          kaufvertrag_url:   listing.kaufvertrag_url ?? null,
          escapes_escape_id: listing.escapes_escape_id ?? null,
        }
      : null,
    bookings: bookingStats,
  });
}
