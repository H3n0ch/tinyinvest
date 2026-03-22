"use client";
import { useState } from "react";

const platformStats = [
  { value: "200+", label: "Registrierte Investoren", icon: "💼" },
  { value: "12+",  label: "Kooperierende Hosts",     icon: "🤝" },
  { value: "4",    label: "Aktive Länder (EU)",       icon: "🌍" },
  { value: "1,2 Mio. €", label: "Vermittlungsvolumen", icon: "📊" },
];

const steuersatzOptions = [
  { label: "32 %", value: 0.32 },
  { label: "42 %", value: 0.42 },
  { label: "45 %", value: 0.45 },
];

function calcResults(kaufpreis: number, steuersatz: number) {
  const iab        = kaufpreis * 0.5 * steuersatz;
  const sonderAfa  = kaufpreis * 0.4 * steuersatz;
  const degAfa     = kaufpreis * 0.3 * steuersatz;
  const total      = iab + sonderAfa + (degAfa * 0.5); // conservative blended
  return { iab, sonderAfa, total };
}

function fmt(n: number) {
  return new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
}

export default function Hero() {
  const [kaufpreis, setKaufpreis]     = useState(79000);
  const [steuersatzIdx, setSteuersatzIdx] = useState(1); // 42%

  const steuersatz = steuersatzOptions[steuersatzIdx].value;
  const { iab, sonderAfa, total } = calcResults(kaufpreis, steuersatz);

  return (
    <section id="hero" className="min-h-screen bg-white flex flex-col justify-center pt-20 pb-10 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Platform badge */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-[11px] font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Mobile Asset Platform · Betrieben mit tiny Escapes · §7g EStG-fähig
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT: Headline + stats */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-5">
              Die smarte Alternative
              <br />
              zur klassischen Immobilie.
              <br />
              <span className="text-green-600">§7g-optimiert. Renditegesichert.</span>
            </h1>

            <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg">
              TinyInvest strukturiert den Kauf &amp; die §7g-Steueroptimierung.{" "}
              <a href="https://www.tiny.rentals" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:underline">
                tiny Escapes
              </a>{" "}
              bewirtschaftet das Asset professionell – Standort, Gäste, Abrechnung. Vollautomatisch.
            </p>

            {/* Platform stats grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {platformStats.map((s) => (
                <div key={s.label} className="bg-gray-50 border border-gray-100 rounded-2xl p-4 flex items-center gap-3">
                  <span className="text-xl">{s.icon}</span>
                  <div>
                    <p className="font-data text-lg font-black text-gray-900 leading-none">{s.value}</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#modelle"
                className="bg-green-700 hover:bg-green-800 text-white font-bold px-6 py-3 rounded-full text-sm transition-all shadow-sm"
              >
                Marktplatz ansehen →
              </a>
              <a
                href="#kontakt"
                className="border border-gray-200 text-gray-700 hover:border-green-300 hover:text-green-700 font-semibold px-6 py-3 rounded-full text-sm transition-all bg-white"
              >
                🔐 Investor-Memorandum
              </a>
            </div>

            {/* Trust line */}
            <p className="mt-5 text-[11px] text-gray-400 font-data">
              IAB + Sonder-AfA + deg. AfA · 70 % im Kaufjahr absetzbar · EU-weit · 100 % Full-Service
            </p>
          </div>

          {/* RIGHT: Inline §7g Calculator */}
          <div className="bg-white border border-gray-200 rounded-3xl shadow-lg p-8">

            {/* Calculator header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="font-black text-gray-900 text-base">Steuer-Vorteil berechnen</p>
                <p className="text-[12px] text-gray-400 mt-0.5">Sofortige Schätzung auf Basis §7g EStG</p>
              </div>
              <span className="text-2xl">🧮</span>
            </div>

            {/* Input: Kaufpreis */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <label className="flex items-center gap-2 text-[12px] font-semibold text-gray-600 uppercase tracking-wider">
                  <span>💰</span> Kaufpreis (Asset)
                </label>
                <span className="font-data text-sm font-black text-gray-900">{fmt(kaufpreis)}</span>
              </div>
              <input
                type="range"
                min={60000}
                max={95000}
                step={1000}
                value={kaufpreis}
                onChange={(e) => setKaufpreis(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-[10px] text-gray-400 mt-1 font-data">
                <span>60.000 € (Comfort)</span>
                <span>95.000 € (Elite)</span>
              </div>
            </div>

            {/* Input: Steuersatz */}
            <div className="mb-6">
              <label className="flex items-center gap-2 text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-2">
                <span>📊</span> Grenzsteuersatz
              </label>
              <div className="flex gap-2">
                {steuersatzOptions.map((opt, idx) => (
                  <button
                    key={opt.label}
                    onClick={() => setSteuersatzIdx(idx)}
                    className={`flex-1 py-2 rounded-xl text-sm font-bold border transition-all ${
                      steuersatzIdx === idx
                        ? "bg-green-700 text-white border-green-700"
                        : "bg-white text-gray-600 border-gray-200 hover:border-green-300"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100 mb-5" />

            {/* Results */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
                <div>
                  <p className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider">IAB-Erstattung</p>
                  <p className="text-[10px] text-gray-400">50 % vorab · §7g Abs. 1</p>
                </div>
                <span className="font-data text-base font-black text-gray-800">{fmt(iab)}</span>
              </div>
              <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
                <div>
                  <p className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider">Sonder-AfA</p>
                  <p className="text-[10px] text-gray-400">40 % · §7g Abs. 5</p>
                </div>
                <span className="font-data text-base font-black text-gray-800">{fmt(sonderAfa)}</span>
              </div>
              <div className="flex items-center justify-between bg-green-600 rounded-xl px-4 py-4">
                <div>
                  <p className="text-[11px] text-green-200 font-semibold uppercase tracking-wider flex items-center gap-1">
                    <span>🎯</span> Steuer-Vorteil Jahr 1
                  </p>
                  <p className="text-[10px] text-green-300">Konservative Schätzung</p>
                </div>
                <span className="font-data text-xl font-black text-white">{fmt(total)}</span>
              </div>
            </div>

            <a
              href="#kontakt"
              className="block w-full text-center bg-gray-900 hover:bg-gray-800 text-white font-bold py-3.5 rounded-2xl text-sm transition-all"
            >
              Persönliche Berechnung anfordern →
            </a>
            <p className="text-center text-[10px] text-gray-400 mt-2.5">
              * Schätzung · Abhängig von individueller Steuersituation · Bitte Steuerberater konsultieren
            </p>
          </div>
        </div>

        {/* Bottom trust bar */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Partner &amp; Zertifikate</span>
            {[
              { label: "Vlemmix Trailer", sub: "Zertifizierter Hersteller" },
              { label: "Clansana", sub: "Off-Grid Systeme" },
              { label: "tiny Escapes", sub: "Betriebspartner", href: "https://www.tiny.rentals" },
              { label: "§7g EStG", sub: "Steuerkonform" },
              { label: "EU-weit", sub: "Mobiles Wirtschaftsgut" },
            ].map((b) =>
              b.href ? (
                <a key={b.label} href={b.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                  <span className="text-[12px] font-bold text-gray-600 group-hover:text-green-700 transition-colors">{b.label}</span>
                  <span className="text-[10px] text-gray-400">{b.sub}</span>
                </a>
              ) : (
                <div key={b.label} className="flex flex-col items-center">
                  <span className="text-[12px] font-bold text-gray-600">{b.label}</span>
                  <span className="text-[10px] text-gray-400">{b.sub}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
