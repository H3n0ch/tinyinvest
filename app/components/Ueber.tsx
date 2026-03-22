// Ueber.tsx — "Über TinyInvest" platform stats + Europe deployment map
import ModalButton from "./ModalButton";

const platformMetrics = [
  {
    value: "200+",
    unit: "",
    label: "Registrierte Investoren",
    desc: "Täglich neue Anfragen von Gutverdieners, Freiberuflern und Unternehmern, die ihr Steuer-Exposure reduzieren wollen.",
  },
  {
    value: "12+",
    unit: "",
    label: "Kooperierende Hosts",
    desc: "Geprüfte Grundstücks- und Standortpartner in Deutschland und der EU – bereit für Ihren Asset-Einsatz.",
  },
  {
    value: "1,2 Mio.",
    unit: "€",
    label: "Vermittlungsvolumen",
    desc: "Gesamtes vermitteltes Investitionsvolumen über die TinyInvest Plattform seit Launch.",
  },
  {
    value: "4",
    unit: "",
    label: "Aktive Länder",
    desc: "Deutschland, Österreich, Kroatien und Rumänien – EU-weit einsetzbar als bewegliches Wirtschaftsgut.",
  },
];

// European location data for the SVG map
const locations = [
  // Active
  { name: "Harz",         cx: 50.5, cy: 34.5, status: "active",   country: "DE" },
  { name: "Schwarzwald",  cx: 47.5, cy: 44,   status: "active",   country: "DE" },
  // Planning
  { name: "Ostsee",       cx: 52,   cy: 22,   status: "planning", country: "DE" },
  { name: "Brandenburg",  cx: 53.5, cy: 28,   status: "planning", country: "DE" },
  { name: "Allgäu",       cx: 49,   cy: 47.5, status: "planning", country: "DE" },
  // International
  { name: "Salzburg",     cx: 52,   cy: 52,   status: "planning", country: "AT" },
  { name: "Istrien",      cx: 51,   cy: 60,   status: "planning", country: "HR" },
];

export default function Ueber() {
  return (
    <section id="ueber" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Über TinyInvest</span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2 mb-3 tracking-tight">
            Die Nr. 1 Plattform für Mobile Asset Investments
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            TinyInvest verbindet Investoren mit §7g-optimierten, mobilen Sachwerten —
            bewirtschaftet durch tiny Escapes auf geprüften Standorten in ganz Europa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT: Platform metrics */}
          <div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {platformMetrics.map((m) => (
                <div key={m.label} className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="font-data text-2xl font-black text-gray-900">{m.value}</span>
                    {m.unit && <span className="font-data text-sm font-bold text-gray-500">{m.unit}</span>}
                  </div>
                  <p className="text-[12px] font-bold text-gray-700 mb-1">{m.label}</p>
                  <p className="text-[11px] text-gray-500 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>

            {/* Ecosystem explanation */}
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
              <p className="text-[11px] text-green-700 font-semibold uppercase tracking-widest mb-3">Unsere weltweiten Referenzen</p>
              <p className="text-[13px] text-gray-600 leading-relaxed mb-4">
                Von Deutschland über Österreich bis Kroatien – wir vermitteln §7g-konforme Mobile Assets auf
                zertifizierten Standorten. Unser Betriebspartner{" "}
                <a href="https://www.tiny.rentals" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:underline">
                  tiny Escapes
                </a>{" "}
                übernimmt Hosting, Gäste und Abrechnung.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Aktive Assets", value: "3", icon: "🏡" },
                  { label: "Assets in Planung", value: "4", icon: "🗺️" },
                  { label: "Ø Nachtrate", value: "120–180 €", icon: "💶" },
                  { label: "Ø Belegung", value: "50–60 %", icon: "📅" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-2">
                    <span className="text-base">{s.icon}</span>
                    <div>
                      <p className="font-data text-sm font-black text-gray-900 leading-none">{s.value}</p>
                      <p className="text-[10px] text-gray-500">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Europe SVG Map */}
          <div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[12px] font-bold text-gray-700 uppercase tracking-widest">Deployment-Karte</p>
                <div className="flex items-center gap-4 text-[10px] text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block" /> Aktiv
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 inline-block" /> Planung
                  </span>
                </div>
              </div>

              {/* SVG map of Central Europe */}
              <div className="relative w-full" style={{ paddingBottom: "72%" }}>
                <svg
                  viewBox="0 0 100 80"
                  className="absolute inset-0 w-full h-full"
                  style={{ fontFamily: "inherit" }}
                >
                  {/* Simple Europe outline shapes (stylized) */}
                  {/* Germany */}
                  <path
                    d="M44 20 L47 18 L52 19 L56 22 L57 26 L55 30 L56 34 L54 38 L53 42 L50 45 L47 46 L45 43 L43 40 L41 36 L42 30 L43 25 Z"
                    fill="#e8f5e9"
                    stroke="#a5d6a7"
                    strokeWidth="0.5"
                  />
                  {/* Austria */}
                  <path
                    d="M47 46 L53 45 L57 47 L58 50 L55 52 L50 52 L46 50 Z"
                    fill="#f1f8e9"
                    stroke="#c5e1a5"
                    strokeWidth="0.5"
                  />
                  {/* Croatia */}
                  <path
                    d="M48 52 L55 52 L58 55 L57 60 L54 62 L50 63 L47 60 L46 56 L47 53 Z"
                    fill="#f1f8e9"
                    stroke="#c5e1a5"
                    strokeWidth="0.5"
                  />
                  {/* Netherlands */}
                  <path
                    d="M38 20 L42 19 L44 22 L41 24 L38 23 Z"
                    fill="#f5f5f5"
                    stroke="#e0e0e0"
                    strokeWidth="0.4"
                  />
                  {/* Denmark */}
                  <path
                    d="M46 14 L49 13 L50 16 L48 17 L46 15 Z"
                    fill="#f5f5f5"
                    stroke="#e0e0e0"
                    strokeWidth="0.4"
                  />
                  {/* Poland */}
                  <path
                    d="M56 20 L64 20 L66 26 L64 30 L57 30 L55 26 Z"
                    fill="#f5f5f5"
                    stroke="#e0e0e0"
                    strokeWidth="0.4"
                  />
                  {/* Switzerland */}
                  <path
                    d="M43 45 L47 44 L48 47 L45 48 L42 47 Z"
                    fill="#f5f5f5"
                    stroke="#e0e0e0"
                    strokeWidth="0.4"
                  />
                  {/* France (partial) */}
                  <path
                    d="M34 28 L40 26 L43 30 L42 36 L38 40 L34 38 L32 33 Z"
                    fill="#f5f5f5"
                    stroke="#e0e0e0"
                    strokeWidth="0.4"
                  />

                  {/* Country labels */}
                  <text x="49" y="33" textAnchor="middle" fontSize="2.2" fill="#4caf50" fontWeight="bold">DE</text>
                  <text x="52" y="49" textAnchor="middle" fontSize="2" fill="#888">AT</text>
                  <text x="52" y="57" textAnchor="middle" fontSize="2" fill="#888">HR</text>

                  {/* Location pins */}
                  {locations.map((loc) => (
                    <g key={loc.name}>
                      <circle
                        cx={loc.cx}
                        cy={loc.cy}
                        r="1.8"
                        fill={loc.status === "active" ? "#16a34a" : "#6366f1"}
                        opacity={loc.status === "active" ? 1 : 0.7}
                      />
                      {loc.status === "active" && (
                        <circle
                          cx={loc.cx}
                          cy={loc.cy}
                          r="3"
                          fill="none"
                          stroke="#16a34a"
                          strokeWidth="0.5"
                          opacity="0.4"
                        />
                      )}
                      <text
                        x={loc.cx + 2.5}
                        y={loc.cy + 0.8}
                        fontSize="1.8"
                        fill={loc.status === "active" ? "#166534" : "#4338ca"}
                        fontWeight={loc.status === "active" ? "bold" : "normal"}
                      >
                        {loc.name}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>

              <p className="text-[10px] text-gray-400 mt-3 text-center">
                Stilisierte Karte · Standorte zur Illustration · Laufend erweitert
              </p>
            </div>

            {/* CTA */}
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <ModalButton className="flex-1 bg-green-700 hover:bg-green-800 text-white font-bold px-5 py-3 rounded-full text-[13px] text-center transition-all">
                Investor-Memorandum anfordern →
              </ModalButton>
              <ModalButton className="flex-1 border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-3 rounded-full text-[13px] text-center transition-all">
                Als Host bewerben →
              </ModalButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
