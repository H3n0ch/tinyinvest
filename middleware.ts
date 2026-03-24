import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Passthrough middleware – auth is handled client-side on /investor/* pages.
export function middleware(_req: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [], // no routes intercepted
};
