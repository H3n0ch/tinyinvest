"use client";
import { useState } from "react";
import { useModal } from "./ModalContext";

const platformStats = [
  { value: "200+", label: "Registrierte Investoren", icon: "💼" },
  { value: "50+",  label: "Kooperierende Hosts",     icon: "🤝" },
  { value: "10",    label: "Aktive Länder",       icon: "🌍" },
  { value: "2,2 Mio. €", label: "Vermittlungsvolumen", icon: "📊" },
];

const steuersatzOptions = [
  { label: "32 %", value: 0.32 },
  { label: "42 %", value: 0.42 },
  { label: "45 %", value: 0.45 },
];

function calcResults(kaufpreis: number, steuersatz: number) {
  const iab       = kaufpreis * 0.5 * steuersatz;
  const sonderAfa = kaufpreis * 0.4 * steuersatz;
  const degAfa    = kaufpreis * 0.3 * steuersatz;
  const total     = iab + sonderAfa + degAfa * 0.5;
  return { iab, sonderAfa, total };
}

function fmt(n: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function Hero({ heroImage }: { heroImage: string }) {
  const { openModal } = useModal();
  const [kaufpreis, setKaufpreis]         = useState(79000);
  const [steuersatzIdx, setSteuersatzIdx] = useState(1); // 42 %

  const steuersatz = steuersatzOptions[steuersatzIdx].value;
  const { iab, sonderAfa, total } = calcResults(kaufpreis, steuersatz);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-20 pb-10 overflow-hidden">

      {/* ── Full-bleed background image ────────────────── */}
      <img
        src={heroImage}
        alt="TinyInvest Escape – tiny Escapes Netzwerk"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* ── Gradient overlay ───────────────────────────── */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />
      {/* Extra bottom fade for trust bar */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-0 bg-gradient-to-t from-black/60 to-transparent" />

      {/* ── Content ────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Platform badge */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/25 text-white text-[11px] font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Mobile Asset Platform · Betrieben mit tiny Escapes · §7g EStG-fähig
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT ───────────────────────────────────── */}
          <div>
            {/* Location pill */}
            <div className="flex items-center gap-2 mb-5">
              <span className="bg-white/15 backdrop-blur-sm text-white/90 text-[11px] font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/20">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                @ tiny Escapes · Schwarzwald
              </span>
              <span className="font-data bg-black/40 backdrop-blur-sm text-white text-[9px] font-semibold px-2 py-0.5 rounded-md border border-white/10">
                #TE-2026-02
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-5">
              Die smarte Alternative
              <br />
              zur klassischen PV-Anlage.
              <br />
              <span className="text-green-400">§7g-optimiert. Renditegesichert.</span>
            </h1>

            <p className="text-white/75 text-base leading-relaxed mb-7 max-w-lg">
              TinyInvest strukturiert den Kauf &amp; die §7g-Steueroptimierung.{" "}
              <a
                href="https://www.tiny.rentals"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 font-semibold hover:text-green-300 transition-colors"
              >
                tiny Escapes
              </a>{" "}
              bewirtschaftet das Asset professionell – Standort, Gäste, Abrechnung. Vollautomatisch.
            </p>

            {/* Platform stats grid */}
            <div className="grid grid-cols-2 gap-3 mb-7">
              {platformStats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3"
                >
                  <span className="text-xl">{s.icon}</span>
                  <div>
                    <p className="font-data text-lg font-black text-white leading-none">{s.value}</p>
                    <p className="text-[11px] text-white/60 mt-0.5">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#modelle"
                className="bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-full text-sm transition-all shadow-lg"
              >
                Marktplatz ansehen →
              </a>
              <button
                type="button"
                onClick={openModal}
                className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold px-6 py-3 rounded-full text-sm transition-all backdrop-blur-sm"
              >
                🔐 Investitionsunterlagen
              </button>
            </div>

            {/* Trust line */}
            <p className="mt-5 text-[11px] text-white/45 font-data">
              IAB + Sonder-AfA + deg. AfA · 70 % im Kaufjahr absetzbar · EU-weit · 100 % Full-Service
            </p>
          </div>

          {/* ── RIGHT: Calculator ──────────────────────── */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">

            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="font-black text-gray-900 text-base">Steuer-Vorteil berechnen</p>
                <p className="text-[12px] text-gray-400 mt-0.5">Sofortige Schätzung auf Basis §7g EStG</p>
              </div>
              <span className="text-2xl"></span>
            </div>

            {/* Kaufpreis slider */}
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

            {/* Steuersatz */}
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

            <button
              type="button"
              onClick={openModal}
              className="block w-full text-center bg-gray-900 hover:bg-gray-800 text-white font-bold py-3.5 rounded-2xl text-sm transition-all cursor-pointer"
            >
              Persönliche Berechnung anfordern →
            </button>
            <p className="text-center text-[10px] text-gray-400 mt-2.5">
              * Schätzung · Abhängig von Steuersituation · Steuerberater konsultieren
            </p>
          </div>
        </div>

        {/* Bottom trust bar */}
        <div className="mt-12 pt-6 border-t border-white/15">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold">Partner &amp; Zertifikate</span>
            {[
              { label: "Vlemmix Trailer", sub: "Zertifizierter Hersteller" },
              { label: "Clansana", sub: "Off-Grid Systeme" },
              { label: "tiny Escapes", sub: "Betriebspartner", href: "https://www.tiny.rentals" },
              { label: "§7g EStG", sub: "Steuerkonform" },
              { label: "EU-weit", sub: "Mobiles Wirtschaftsgut" },
            ].map((b) =>
              b.href ? (
                <a key={b.label} href={b.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                  <span className="text-[12px] font-bold text-white/70 group-hover:text-green-400 transition-colors">{b.label}</span>
                  <span className="text-[10px] text-white/35">{b.sub}</span>
                </a>
              ) : (
                <div key={b.label} className="flex flex-col items-center">
                  <span className="text-[12px] font-bold text-white/70">{b.label}</span>
                  <span className="text-[10px] text-white/35">{b.sub}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
