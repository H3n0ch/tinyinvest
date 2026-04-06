import { NextResponse } from "next/server";
import { supabase } from "../../lib/supabase";

// Public read-only endpoint — returns active listings for the homepage carousel.
// Cached at the CDN edge for 5 minutes; revalidated in the background.
export const revalidate = 300;

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("listings")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error) throw error;

    return NextResponse.json(data ?? [], {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (err) {
    console.error("[/api/listings]", err);
    return NextResponse.json([], { status: 200 });
  }
}
