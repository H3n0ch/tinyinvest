"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay so banner animates in after page load
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = (type: "all" | "necessary") => {
    localStorage.setItem("cookie-consent", type);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6 animate-fadeInUp"
      role="dialog"
      aria-label="Cookie-Einwilligung"
    >
      <div className="max-w-4xl mx-auto bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Icon + Text */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🍪</span>
              <p className="font-bold text-white text-sm">Datenschutz & Cookies</p>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Diese Website verwendet ausschließlich{" "}
              <strong className="text-gray-300">technisch notwendige Cookies</strong>, um den sicheren Betrieb zu gewährleisten.
              Für die interaktiven Rechner werden keine personenbezogenen Daten gespeichert.
              Weitere Informationen findest du in unserer{" "}
              <Link
                href="/datenschutz"
                className="text-green-400 hover:text-green-300 underline transition-colors"
              >
                Datenschutzerklärung
              </Link>
              .
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-row sm:flex-col gap-2 flex-shrink-0 w-full sm:w-auto">
            <button
              onClick={() => accept("all")}
              className="flex-1 sm:flex-none bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors whitespace-nowrap"
            >
              Alles akzeptieren
            </button>
            <button
              onClick={() => accept("necessary")}
              className="flex-1 sm:flex-none bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors whitespace-nowrap"
            >
              Nur notwendige
            </button>
          </div>
        </div>

        {/* Legal badge */}
        <p className="text-gray-600 text-xs mt-3 pt-3 border-t border-gray-800">
          🛡️ DSGVO-konform · Kein Tracking · Kein Analytics · Stand: März 2026
        </p>
      </div>
    </div>
  );
}
