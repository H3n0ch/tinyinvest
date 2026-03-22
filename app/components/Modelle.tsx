const listings = [
  // ── Active / Available ──────────────────────────────────────────
  {
    id: "TE-2026-01",
    img: "/images/outside/ESCAPE3.webp",
    category: "On-Grid · Einstieg",
    title: "TinyInvest Comfort",
    location: "@ tiny Escapes Harz",
    desc: "Vlemmix Trailer, netzgebunden. Ideal für Ferienparks mit Strom- und Wasseranschluss.",
    preis: "60.000 €",
    irr: "10–12 %",
    npv: "+18.400 €",
    occ: "55 %",
    occNote: "Ø Belegung, Harz-Standort.",
    reserved: 1,
    total: 3,
    status: "available" as const,
    statusLabel: "Verfügbar",
    badge: "Günstigster Einstieg",
    badgeColor: "bg-blue-100 text-blue-800",
  },
  {
    id: "TE-2026-02",
    img: "/images/outside/ESCAPE1.webp",
    category: "Off-Grid · Standard",
    title: "TinyInvest Escape",
    location: "@ tiny Escapes Schwarzwald",
    desc: "Vollautark: Solar, Wassertanks, Clansana-Komposttoilette. Keine Infrastruktur nötig.",
    preis: "79.000 €",
    irr: "12–14 %",
    npv: "+26.800 €",
    occ: "60 %",
    occNote: "Ø Belegung, Schwarzwald-Standort.",
    reserved: 2,
    total: 3,
    status: "reserved" as const,
    statusLabel: "2× Reserviert",
    badge: "Bestseller",
    badgeColor: "bg-green-100 text-green-800",
  },
  {
    id: "TE-2026-03",
    img: "/images/outside/ESCAPE2.webp",
    category: "Off-Grid · Premium",
    title: "TinyInvest Elite",
    location: "@ tiny Escapes (Standort wählbar)",
    desc: "Hotel-Standard: Loop-Duschsystem, Cinderella-Toilette, Schafwoll-Dämmung.",
    preis: "95.000 €",
    irr: "13–15 %",
    npv: "+33.200 €",
    occ: "55–60 %",
    occNote: "Projiziert, tiny Escapes Netzwerk.",
    reserved: 0,
    total: 2,
    status: "available" as const,
    statusLabel: "Verfügbar",
    badge: "Maximum IAB-Hebel",
    badgeColor: "bg-amber-100 text-amber-800",
  },
  // ── Phase 2 – Planning ─────────────────────────────────────────
  {
    id: "TE-2026-04",
    img: "/images/outside/fog.jpg",
    category: "On-Grid · Einstieg",
    title: "TinyInvest Comfort",
    location: "@ tiny Escapes Ostseeküste",
    desc: "Phase-2-Standort. Ostsee-Ferienpark mit direkter Wassernähe und hoher Saisonauslastung.",
    preis: "60.000 €",
    irr: "10–12 %",
    npv: "+18.400 €",
    occ: "—",
    occNote: "Belegungsdaten nach Standortfreigabe.",
    reserved: 0,
    total: 3,
    status: "planning" as const,
    statusLabel: "In Planung",
    badge: "Phase 2 · 2026",
    badgeColor: "bg-indigo-100 text-indigo-800",
  },
  {
    id: "TE-2026-05",
    img: "/images/outside/winter.webp",
    category: "Off-Grid · Standard",
    title: "TinyInvest Escape",
    location: "@ tiny Escapes Brandenburg",
    desc: "Phase-2-Standort. Naturnahes Seengebiet, vollautark, ganzjährig betreibbar.",
    preis: "79.000 €",
    irr: "12–14 %",
    npv: "+26.800 €",
    occ: "—",
    occNote: "Belegungsdaten nach Standortfreigabe.",
    reserved: 0,
    total: 3,
    status: "planning" as const,
    statusLabel: "In Planung",
    badge: "Phase 2 · 2026",
    badgeColor: "bg-indigo-100 text-indigo-800",
  },
  {
    id: "TE-2026-06",
    img: "/images/outside/green.webp",
    category: "Off-Grid · Premium",
    title: "TinyInvest Elite",
    location: "@ tiny Escapes Allgäu",
    desc: "Phase-2-Standort. Premium-Bergregion, höchste Nachtrate erwartet, begrenzte Units.",
    preis: "95.000 €",
    irr: "13–15 %",
    npv: "+33.200 €",
    occ: "—",
    occNote: "Belegungsdaten nach Standortfreigabe.",
    reserved: 0,
    total: 2,
    status: "planning" as const,
    statusLabel: "Bald verfügbar",
    badge: "Vormerken",
    badgeColor: "bg-purple-100 text-purple-800",
  },
];

const statusCfg = {
  available: { bar: "bg-green-500", track: "bg-green-100", badge: "badge-available", opacity: "" },
  reserved:  { bar: "bg-amber-400", track: "bg-amber-100", badge: "badge-reserved",  opacity: "" },
  sold:      { bar: "bg-red-400",   track: "bg-red-100",   badge: "badge-sold",      opacity: "" },
  planning:  { bar: "bg-indigo-300",track: "bg-indigo-50", badge: "badge-planning",  opacity: "opacity-70" },
};

export default function Modelle() {
  return (
    <section id="modelle" className="py-20 bg-platform border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Marktplatz · Asset-Listings 2026</span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2 mb-3 tracking-tight">
            Aktuelle Investment-Projekte
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Jedes Asset ist §7g-fähig, auf Vlemmix Trailer zertifiziert und wird durch{" "}
            <a href="https://www.tiny.rentals" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:underline">
              tiny Escapes
            </a>{" "}
            bewirtschaftet. Direktkauf beim Hersteller — kein Kapital an TinyInvest.
          </p>
        </div>

        {/* 3-column grid → 6 cards total */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {listings.map((item) => {
            const cfg = statusCfg[item.status];
            const pct = item.total > 0 ? Math.round((item.reserved / item.total) * 100) : 0;
            const isPlanning = item.status === "planning";

            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col hover:shadow-md transition-shadow duration-200 ${cfg.opacity}`}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className={`w-full h-full object-cover ${isPlanning ? "grayscale-[30%]" : ""}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="font-data bg-black/60 backdrop-blur-sm text-white text-[9px] font-semibold px-2 py-0.5 rounded-md">
                      #{item.id}
                    </span>
                  </div>
                  <div className="absolute top-2.5 right-2.5">
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${cfg.badge}`}>
                      {item.statusLabel}
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5">
                    <p className="text-[9px] text-white/70 mb-0.5">{item.category}</p>
                    <p className="text-[11px] text-white font-semibold leading-tight">{item.location}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="font-black text-gray-900 text-sm leading-tight">{item.title}</h3>
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0 ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <p className="text-gray-500 text-[12px] leading-relaxed mb-3">{item.desc}</p>

                  {/* Reservation bar */}
                  {!isPlanning && (
                    <div className="mb-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] text-gray-400">Listing-Auslastung</span>
                        <span className="font-data text-[10px] font-semibold text-gray-600">{item.reserved}/{item.total}</span>
                      </div>
                      <div className={`w-full h-1 rounded-full ${cfg.track}`}>
                        <div className={`h-1 rounded-full ${cfg.bar}`} style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  )}

                  {/* Data row */}
                  <div className="mt-auto">
                    <div className="grid grid-cols-3 gap-1.5 mb-1">
                      <div className="bg-gray-50 rounded-lg p-2 text-center">
                        <p className="text-[9px] text-gray-400">IRR</p>
                        <p className="font-data text-[11px] font-black text-green-700">{item.irr}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-2 text-center">
                        <p className="text-[9px] text-gray-400">NPV*</p>
                        <p className="font-data text-[11px] font-black text-gray-800">{item.npv}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-2 text-center">
                        <p className="text-[9px] text-gray-400">Preis</p>
                        <p className="font-data text-[11px] font-black text-gray-800">{item.preis}</p>
                      </div>
                    </div>
                    <p className="text-[9px] text-gray-400 mb-3">* Projiziert · {item.occNote}</p>
                    <a
                      href="#kontakt"
                      className={`block w-full py-2 rounded-full font-semibold text-[12px] text-center transition-colors ${
                        isPlanning
                          ? "border border-gray-200 text-gray-500 hover:border-green-300 hover:text-green-700"
                          : "bg-green-700 text-white hover:bg-green-800"
                      }`}
                    >
                      {isPlanning ? "Vormerken lassen →" : "Projektunterlagen →"}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm">
          <p className="text-[12px] text-gray-500">
            💡 <strong className="text-gray-700">Phase-2-Projekte</strong> sind bereits buchbar zur Vormerkliste.
            Alle Assets werden nach Abnahme direkt in das tiny Escapes Netzwerk überführt.{" "}
            <a href="#kontakt" className="text-green-700 font-semibold hover:underline">Anfrage stellen →</a>
          </p>
        </div>
      </div>
    </section>
  );
}
