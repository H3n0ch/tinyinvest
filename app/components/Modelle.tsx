import Image from "next/image";

// Asset listings — "marketplace" style with institutional data points
const listings = [
  {
    id: "TE-2026-01",
    img: "/images/outside/ESCAPE3.webp",
    category: "On-Grid · Einstieg",
    title: "TinyInvest Comfort",
    location: "@ tiny Escapes Harz",
    desc: "Vollwertiges Tiny House auf Vlemmix Trailer, netzgebunden. Ideal für zertifizierte Ferienpark-Standorte mit Strom- und Wasseranschluss.",
    preis: "60.000 €",
    irr: "10–12 %",
    npv: "+18.400 €",
    laufzeit: "8 J.",
    occ: "55 %",
    occNote: "Ø Belegung basierend auf Harz-Standort (tiny Escapes).",
    reserved: 1,
    total: 3,
    status: "available" as const,
    statusLabel: "Verfügbar",
    highlights: ["Netzanschluss (Strom/Wasser)", "Vlemmix Trailer · VIN", "Kompakt & effizient"],
    badge: "Günstigster Einstieg",
    badgeColor: "bg-blue-100 text-blue-800",
  },
  {
    id: "TE-2026-02",
    img: "/images/outside/ESCAPE1.webp",
    category: "Off-Grid · Standard",
    title: "TinyInvest Escape",
    location: "@ tiny Escapes Schwarzwald",
    desc: "Vollautarkes Off-Grid Tiny House mit Solaranlage, Wassertanks und Clansana-Komposttoilette. Keine Infrastruktur erforderlich.",
    preis: "79.000 €",
    irr: "12–14 %",
    npv: "+26.800 €",
    laufzeit: "8 J.",
    occ: "60 %",
    occNote: "Ø Belegung basierend auf Schwarzwald-Standort (tiny Escapes).",
    reserved: 2,
    total: 3,
    status: "reserved" as const,
    statusLabel: "2× Reserviert",
    highlights: ["Solar + Batteriespeicher", "Clansana Komposttoilette", "Vollautark · Standort frei wählbar"],
    badge: "Bestseller",
    badgeColor: "bg-green-100 text-green-800",
  },
  {
    id: "TE-2026-03",
    img: "/images/outside/ESCAPE2.webp",
    category: "Off-Grid · Premium",
    title: "TinyInvest Elite",
    location: "@ tiny Escapes (Standort nach Wahl)",
    desc: "Das Flaggschiff. Hotel-Standard, Loop-Duschsystem, Cinderella-Verbrennungstoilette, Schafwoll-Dämmung. Höchster IAB-Hebel.",
    preis: "95.000 €",
    irr: "13–15 %",
    npv: "+33.200 €",
    laufzeit: "8 J.",
    occ: "55–60 %",
    occNote: "Projizierte Belegung auf Basis tiny Escapes Netzwerk (65 % Peak).",
    reserved: 0,
    total: 2,
    status: "available" as const,
    statusLabel: "Verfügbar",
    highlights: ["Loop Dusch-Wassersystem", "Cinderella Verbrennungstoilette", "Vollautark · Hotel-Standard"],
    badge: "Maximum IAB-Hebel",
    badgeColor: "bg-amber-100 text-amber-800",
  },
];

const statusConfig = {
  available: { bar: "bg-green-500", track: "bg-green-100", text: "badge-available" },
  reserved:  { bar: "bg-amber-400", track: "bg-amber-100", text: "badge-reserved" },
  sold:      { bar: "bg-red-400",   track: "bg-red-100",   text: "badge-sold" },
};

export default function Modelle() {
  return (
    <section id="modelle" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Asset-Listings · 2026</span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight">
            Aktuelle Investment-Projekte
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            Jedes Asset ist ein zertifiziertes bewegliches Wirtschaftsgut (§7g EStG-fähig), bewirtschaftet durch{" "}
            <a href="https://www.tiny.rentals" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:underline">
              tiny Escapes
            </a>.
            Sie erwerben das Eigentum direkt beim Hersteller. TinyInvest strukturiert die §7g-Planung.
          </p>
        </div>

        {/* Listings grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {listings.map((item) => {
            const cfg = statusConfig[item.status];
            const pct = Math.round((item.reserved / item.total) * 100);

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col hover:shadow-md transition-shadow duration-200"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image src={item.img} alt={item.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Asset ID */}
                  <div className="absolute top-3 left-3">
                    <span className="font-data bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-1 rounded-lg">
                      #{item.id}
                    </span>
                  </div>

                  {/* Status badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${cfg.text}`}>
                      {item.statusLabel}
                    </span>
                  </div>

                  {/* Category + Location */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-[10px] text-white/70 mb-0.5">{item.category}</p>
                    <p className="text-[12px] text-white font-semibold">{item.location}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Title + badge */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-black text-gray-900 text-base leading-tight">{item.title}</h3>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0 ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <p className="text-gray-500 text-[13px] leading-relaxed mb-4">{item.desc}</p>

                  {/* Highlights */}
                  <ul className="space-y-1 mb-4">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-[13px] text-gray-600">
                        <span className="text-green-600 flex-shrink-0">✓</span> {h}
                      </li>
                    ))}
                  </ul>

                  {/* Funding / reservation bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[11px] text-gray-400 font-medium">Auslastung dieses Listings</span>
                      <span className="font-data text-[11px] font-semibold text-gray-700">
                        {item.reserved}/{item.total} reserviert
                      </span>
                    </div>
                    <div className={`w-full h-1.5 rounded-full ${cfg.track}`}>
                      <div
                        className={`h-1.5 rounded-full ${cfg.bar} transition-all duration-500`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>

                  {/* Institutional data row */}
                  <div className="mt-auto">
                    <div className="grid grid-cols-3 gap-2 mb-1.5">
                      <div className="bg-gray-50 rounded-xl p-2.5 text-center">
                        <p className="text-[10px] text-gray-400 mb-0.5">IRR p.a.</p>
                        <p className="font-data text-sm font-black text-green-700">{item.irr}</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-2.5 text-center">
                        <p className="text-[10px] text-gray-400 mb-0.5">NPV</p>
                        <p className="font-data text-sm font-black text-gray-800">{item.npv}</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-2.5 text-center">
                        <p className="text-[10px] text-gray-400 mb-0.5">Preis</p>
                        <p className="font-data text-sm font-black text-gray-800">{item.preis}</p>
                      </div>
                    </div>
                    {/* Micro-copy disclaimer */}
                    <p className="text-[10px] text-gray-400 leading-relaxed mb-4">
                      * IRR &amp; NPV projiziert · {item.occNote} Laufzeit: {item.laufzeit}
                    </p>

                    <a
                      href="#kontakt"
                      className="block w-full py-2.5 rounded-full font-semibold text-[13px] text-center bg-green-700 text-white hover:bg-green-800 transition-colors"
                    >
                      Projektunterlagen anfordern →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-8 bg-gray-50 border border-gray-100 rounded-2xl p-5 text-center">
          <p className="text-[13px] text-gray-500">
            💡 <strong className="text-gray-700">Individuelle Konfiguration:</strong>{" "}
            Preis &amp; Ausstattung variieren je nach Autarkie-Grad (On-Grid / Off-Grid / Solar).
            Alle Assets werden nach Kauf direkt in das tiny Escapes Netzwerk überführt.{" "}
            <a href="#kontakt" className="text-green-700 font-semibold hover:underline">Anfrage stellen →</a>
          </p>
        </div>
      </div>
    </section>
  );
}
