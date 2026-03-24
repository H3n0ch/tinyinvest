import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl     = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// ── Server-side anon client ───────────────────────────────────────────────────
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ── Admin / service-role client (server-side only, bypasses RLS) ──────────────
// IMPORTANT: exported as a FUNCTION so it is never evaluated in the browser.
// `SUPABASE_SERVICE_ROLE_KEY` is a server-only env-var (no NEXT_PUBLIC_ prefix).
// Calling createClient() at module level would crash the browser bundle.
export function getAdminClient() {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceRoleKey) {
    console.warn("[getAdminClient] SUPABASE_SERVICE_ROLE_KEY not set — falling back to anon key.");
    return createClient(supabaseUrl, supabaseAnonKey);
  }
  return createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}


// ── Browser singleton (client components) ────────────────────────────────────
// Keeps exactly ONE SupabaseClient alive per browser tab to avoid PKCE lock
// contention ("Lock broken by another request").
let _browserClient: SupabaseClient | null = null;

export function getBrowserClient(): SupabaseClient {
  // SSR guard — during server-side rendering window is undefined
  if (typeof window === "undefined") {
    return createClient(supabaseUrl, supabaseAnonKey);
  }
  if (!_browserClient) {
    _browserClient = createClient(supabaseUrl, supabaseAnonKey);
  }
  return _browserClient;
}
