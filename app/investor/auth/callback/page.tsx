import { Suspense } from "react";
import CallbackClient from "./_CallbackClient";

export default function InvestorCallbackPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-green-950 to-gray-900 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-8 h-8 border-2 border-green-400 border-t-transparent rounded-full animate-spin" />
            <p className="text-white/60 text-sm">Anmeldung wird verarbeitet…</p>
          </div>
        </div>
      }
    >
      <CallbackClient />
    </Suspense>
  );
}
