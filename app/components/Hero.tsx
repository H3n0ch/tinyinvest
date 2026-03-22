import Image from "next/image";
import { stats } from "./data";

const trustBadges = [
  { label: "Vlemmix Trailer", sub: "Zertifizierter Hersteller" },
  { label: "Clansana", sub: "Off-Grid Systeme" },
  { label: "tiny Escapes", sub: "Betriebspartner", href: "https://www.tiny.rentals" },
  { label: "§7g EStG", sub: "Steuerkonform" },
  { label: "EU-weit", sub: "Mobiles Wirtschaftsgut" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/escape.webp"
          alt="TinyInvest Mobile Asset Platform – Tiny House in der Natur"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Live-stats overlay — top right */}
      <div className="absolute top-24 right-4 sm:right-8 z-20 hidden md:block">
        <div className="bg-black/60 backdrop-blur-md border border-white/15 rounded-2xl p-4 w-56">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[11px] font-semibold text-white/60 uppercase tracking-widest">Live · tiny Escapes</span>
          </div>
          <div className="space-y-2.5">
            {[
              { label: "Ø Belegung", value: "50–60 %" },
              { label: "Ø Nachtrate", value: "120–180 €" },
              { label: "Aktive Assets", value: "laufend ↑" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span className="text-[11px] text-white/50">{item.label}</span>
                <span className="font-data text-[12px] font-semibold text-green-300">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-white/10">
            <a
              href="https://www.tiny.rentals"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-white/40 hover:text-green-400 transition-colors"
            >
              tiny.rentals →
            </a>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto pt-24">
        {/* Platform badge */}
        <span className="inline-flex items-center gap-2 bg-green-600/70 backdrop-blur-sm text-white text-[12px] font-semibold px-4 py-2 rounded-full mb-6 animate-fadeIn border border-green-400/30">
          <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
          Mobile Asset Platform · §7g-optimiert · Betrieben von tiny Escapes
        </span>

        {/* Institutional headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-tight mb-5 animate-fadeInUp tracking-tight">
          Die smarte Alternative
          <br />
          zur klassischen Immobilie.
          <br />
          <span className="text-green-400">Steueroptimiert. Renditegesichert.</span>
        </h1>

        <p className="text-base sm:text-lg text-white/75 max-w-3xl mx-auto mb-3 leading-relaxed animate-fadeInUp">
          TinyInvest strukturiert den Kauf &amp; die Steueroptimierung (§7g EStG).{" "}
          <strong className="text-white">tiny Escapes</strong> bewirtschaftet das Asset professionell –
          Standort, Gäste, Abrechnung. Vollautomatisch.
        </p>
        <p className="text-white/45 text-sm mb-10 animate-fadeInUp font-data">
          IAB + Sonder-AfA + degressive AfA · 70 % im Kaufjahr absetzbar · EU-weit einsetzbar · 100 % Full-Service
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fadeInUp flex-wrap">
          <a
            href="#steuer"
            className="bg-green-600 hover:bg-green-500 text-white font-bold px-7 py-3.5 rounded-full text-sm transition-all shadow-lg hover:shadow-green-500/30"
          >
            Steuer-Vorteil berechnen →
          </a>
          <a
            href="#modelle"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-7 py-3.5 rounded-full text-sm border border-white/25 transition-all"
          >
            Asset-Listings ansehen
          </a>
          <a
            href="#kontakt"
            className="bg-amber-500 hover:bg-amber-400 text-white font-bold px-7 py-3.5 rounded-full text-sm transition-all shadow-lg"
          >
            Projektunterlagen anfragen
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-md border-t border-white/15">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/15">
            {stats.map((s) => (
              <div key={s.label} className="py-4 px-4 text-center text-white">
                <div className="font-data text-xl md:text-2xl font-black text-green-400 tracking-tight">{s.value}</div>
                <div className="text-[11px] md:text-xs text-white/55 mt-0.5 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust badges bar */}
      <div className="absolute bottom-[72px] left-0 right-0 hidden sm:block">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-center gap-6 flex-wrap py-2">
            <span className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Partner &amp; Zertifikate</span>
            {trustBadges.map((b) =>
              b.href ? (
                <a
                  key={b.label}
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group"
                >
                  <span className="text-[12px] font-bold text-white/70 group-hover:text-green-300 transition-colors">{b.label}</span>
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
