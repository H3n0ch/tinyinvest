import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// German short-month labels
const DE_MONTHS = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];

/** Returns last 6 calendar months (including current) as { key: "YYYY-MM", label: "Mär" } */
function getLast6MonthKeys(): { key: string; label: string }[] {
  const result = [];
  const now = new Date();
  for (let i = 5; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    result.push({
      key:   `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`,
      label: DE_MONTHS[d.getMonth()],
    });
  }
  return result;
}

function currentMonthKey(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email");
  if (!email) return NextResponse.json({ error: "email required" }, { status: 400 });

  // ── Verify JWT ──────────────────────────────────────────
  const authHeader  = req.headers.get("authorization") ?? "";
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

  // ── 1. Find investor by e-mail ──────────────────────────
  const { data: pending, error: pendingErr } = await admin
    .from("investor_pending")
    .select("user_id, email, full_name, registered_at")
    .ilike("email", email)
    .maybeSingle();

  if (pendingErr) return NextResponse.json({ error: pendingErr.message }, { status: 500 });
  if (!pending)   return NextResponse.json(null);

  // ── 2. Get investor_assets rows ─────────────────────────
  const { data: iaRows } = await admin
    .from("investor_assets")
    .select("id, listing_id, mgmt_fee_pct, host_pct, kaufvertrag_url, escapes_escape_id")
    .eq("user_id", pending.user_id)
    .order("created_at", { ascending: true });

  // Backwards-compat fallback: old owner_id on listings
  let assetRows = iaRows ?? [];
  if (assetRows.length === 0) {
    const { data: oldListing } = await admin
      .from("listings")
      .select("id, mgmt_fee_pct, host_pct, kaufvertrag_url, escapes_escape_id")
      .eq("owner_id", pending.user_id)
      .maybeSingle();
    if (oldListing) {
      assetRows = [{
        id:                null,
        listing_id:        oldListing.id,
        mgmt_fee_pct:      oldListing.mgmt_fee_pct,
        host_pct:          oldListing.host_pct,
        kaufvertrag_url:   oldListing.kaufvertrag_url,
        escapes_escape_id: oldListing.escapes_escape_id,
      }];
    }
  }

  // No assets yet → return minimal payload so dashboard shows "coming soon"
  if (assetRows.length === 0) {
    return NextResponse.json({
      email:         pending.email,
      full_name:     pending.full_name ?? null,
      registered_at: pending.registered_at,
      assets:        [],
      portfolio:     { total_bookings: 0, total_nights: 0, total_revenue: 0, investor_revenue: 0, current_month_revenue: 0 },
    });
  }

  // ── 3. Load listing details for all assets ──────────────
  const listingIds = assetRows.map((a) => a.listing_id);
  const { data: listings } = await admin
    .from("listings")
    .select("id, asset_id, title, location, img, preis, irr")
    .in("id", listingIds);
  const listingMap: Record<number, typeof listings extends (infer T)[] | null ? T : never> =
    Object.fromEntries((listings ?? []).map((l) => [l.id, l]));

  // ── 4. For each asset: compute booking stats ────────────
  const last6         = getLast6MonthKeys();
  const thisMonthKey  = currentMonthKey();

  const assets = await Promise.all(
    assetRows.map(async (ia) => {
      const listing    = listingMap[ia.listing_id as number] ?? null;
      const mgmtFee    = Number(ia.mgmt_fee_pct ?? 15);
      const hostPct    = Number(ia.host_pct ?? 45);
      const investorPct = Math.max(0, 100 - mgmtFee - hostPct);

      let stats = null;

      if (ia.escapes_escape_id) {
        const { data: bookings } = await admin
          .from("bookings")
          .select("check_in, check_out, total_price, status")
          .eq("escape_id", ia.escapes_escape_id)
          .eq("status", "confirmed");

        if (bookings && bookings.length > 0) {
          let totalNights  = 0;
          let totalRevenue = 0;
          let currentMonthRevenue = 0;

          // Monthly buckets
          const monthBuckets: Record<string, number> = {};
          last6.forEach((m) => { monthBuckets[m.key] = 0; });

          for (const b of bookings) {
            const nights  = Math.max(0, Math.round(
              (new Date(b.check_out).getTime() - new Date(b.check_in).getTime()) / (1000 * 60 * 60 * 24)
            ));
            const revenue = parseFloat(b.total_price) || 0;
            totalNights  += nights;
            totalRevenue += revenue;

            const monthKey = (b.check_in as string).slice(0, 7);
            if (monthKey in monthBuckets) {
              monthBuckets[monthKey] += revenue * (investorPct / 100);
            }
            if (monthKey === thisMonthKey) {
              currentMonthRevenue += revenue * (investorPct / 100);
            }
          }

          const investorRevenue = totalRevenue * (investorPct / 100);

          // 6-month chart
          const monthChart = last6.map((m) => ({
            month:            m.label,
            investor_revenue: Math.round(monthBuckets[m.key] * 100) / 100,
          }));

          // Last 10 bookings
          const recent = bookings
            .sort((a, b) => new Date(b.check_in).getTime() - new Date(a.check_in).getTime())
            .slice(0, 10)
            .map((b) => {
              const nights  = Math.max(0, Math.round(
                (new Date(b.check_out).getTime() - new Date(b.check_in).getTime()) / (1000 * 60 * 60 * 24)
              ));
              const revenue = parseFloat(b.total_price) || 0;
              return {
                check_in:  b.check_in,
                check_out: b.check_out,
                nights,
                revenue,
                your_cut: Math.round(revenue * (investorPct / 100) * 100) / 100,
              };
            });

          stats = {
            total_bookings:        bookings.length,
            total_nights:          totalNights,
            total_revenue:         Math.round(totalRevenue * 100) / 100,
            investor_revenue:      Math.round(investorRevenue * 100) / 100,
            investor_pct:          investorPct,
            current_month_revenue: Math.round(currentMonthRevenue * 100) / 100,
            month_chart:           monthChart,
            recent,
          };
        }
      }

      return {
        investor_asset_id: ia.id,
        listing_id:        ia.listing_id,
        mgmt_fee_pct:      mgmtFee,
        host_pct:          hostPct,
        investor_pct:      investorPct,
        kaufvertrag_url:   ia.kaufvertrag_url ?? null,
        // From listing
        asset_id:  (listing as { asset_id?: string } | null)?.asset_id  ?? "",
        title:     (listing as { title?: string }    | null)?.title     ?? "Unbekannt",
        location:  (listing as { location?: string } | null)?.location  ?? "",
        img:       (listing as { img?: string }      | null)?.img       ?? "",
        preis:     (listing as { preis?: string }    | null)?.preis     ?? "",
        irr:       (listing as { irr?: string }      | null)?.irr       ?? "",
        stats,
      };
    })
  );

  // ── 5. Portfolio totals ─────────────────────────────────
  const portfolio = assets.reduce(
    (acc, a) => ({
      total_bookings:        acc.total_bookings        + (a.stats?.total_bookings        ?? 0),
      total_nights:          acc.total_nights          + (a.stats?.total_nights          ?? 0),
      total_revenue:         acc.total_revenue         + (a.stats?.total_revenue         ?? 0),
      investor_revenue:      acc.investor_revenue      + (a.stats?.investor_revenue      ?? 0),
      current_month_revenue: acc.current_month_revenue + (a.stats?.current_month_revenue ?? 0),
    }),
    { total_bookings: 0, total_nights: 0, total_revenue: 0, investor_revenue: 0, current_month_revenue: 0 }
  );

  return NextResponse.json({
    email:         pending.email,
    full_name:     pending.full_name ?? null,
    registered_at: pending.registered_at,
    assets,
    portfolio: {
      ...portfolio,
      investor_revenue:      Math.round(portfolio.investor_revenue      * 100) / 100,
      current_month_revenue: Math.round(portfolio.current_month_revenue * 100) / 100,
    },
  });
}
