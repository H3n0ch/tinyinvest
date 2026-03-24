"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getBrowserClient } from "@/app/lib/supabase";

export default function CallbackClient() {
  const router       = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"loading" | "error">("loading");
  const [msg, setMsg]       = useState("");

  useEffect(() => {
    const run = async () => {
      const supabase = getBrowserClient();

      // Strategy 1: PKCE code exchange (magic link / OAuth)
      const code = searchParams.get("code");
      if (code) {
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        if (!error) { router.replace("/investor"); return; }
        setMsg(error.message);
        setStatus("error");
        return;
      }

      // Strategy 2: Implicit token (hash-based, some Supabase configs)
      // Supabase JS v2 automatically handles hash tokens on getSession()
      const { data } = await supabase.auth.getSession();
      if (data.session) { router.replace("/investor"); return; }

      // Nothing worked
      setMsg("Kein Auth-Code gefunden. Bitte erneut versuchen.");
      setStatus("error");
    };

    run();
  }, [router, searchParams]);

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-4 animate-pulse">🔑</div>
          <p className="text-white font-semibold">Anmeldung wird verarbeitet…</p>
          <p className="text-gray-400 text-sm mt-2">Bitte warte einen Moment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-5xl mb-4">⚠️</div>
        <h2 className="text-white font-bold text-xl mb-2">Anmeldung fehlgeschlagen</h2>
        <p className="text-gray-400 text-sm mb-6">{msg}</p>
        <a
          href="/investor/login"
          className="bg-green-700 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-all inline-block"
        >
          Zurück zum Login
        </a>
      </div>
    </div>
  );
}
