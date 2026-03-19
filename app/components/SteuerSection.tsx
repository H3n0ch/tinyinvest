import Image from "next/image";
import { steuerCards, vergleichRows } from "./data";
import SteuerRechner from "./SteuerRechner";

export default function SteuerSection() {
  return (
    <section id="steuer" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/outside/green.webp" alt="Tiny House Steuervorteile" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-green-400 font-semibold text-sm uppercase tracking-widest">§ 7g EStG</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3 mb-5">
            Der Steuer-Hebel
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto text-lg leading-relaxed">
            Da unsere Tiny Houses auf einem zertifizierten Trailer stehen (VIN, keine Bodenverbindung), gelten sie als{" "}
            <strong className="text-white">bewegliche Wirtschaftsgüter</strong> – keine Immobilien.
            Das eröffnet drei mächtige Hebel.
          </p>
        </div>

        {/* Erklärungs-Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {steuerCards.map((card) => (
            <div key={card.label} className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
              <div className="text-4xl mb-4">{card.icon}</div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-gray-400 font-semibold">{card.label}</span>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${card.tagColor}`}>{card.tag}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Rechner */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-black text-white mb-3">Berechne deinen persönlichen Steuer-Vorteil</h3>
          <p className="text-white/60">Schiebe die Regler und sieh sofort, wie viel du vom Finanzamt zurückbekommst.</p>
        </div>
        <SteuerRechner />

        {/* 3-Varianten-Vergleich vom Steuerberater */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <span className="text-green-400 font-semibold text-xs uppercase tracking-widest">Analyse vom Steuerberater · Stand 2026</span>
            <h3 className="text-2xl font-black text-white mt-2">
              Steuerbooster 2026: Der Drei-Varianten-Vergleich
            </h3>
            <p className="text-white/60 text-sm mt-2 max-w-2xl mx-auto">
              Beispielrechnung auf Basis 100.000 € Investition · 42 % Grenzsteuersatz
            </p>
          </div>

          {/* Varianten-Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            {/* Variante 1 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gray-500/30 text-gray-300 text-xs font-bold px-3 py-1 rounded-full">Variante 1</span>
                <span className="text-gray-400 text-xs">Altes Recht</span>
              </div>
              <h4 className="text-white font-black text-lg mb-1">8 Jahre linear</h4>
              <p className="text-white/50 text-xs mb-4">12,5 % p.a. · ohne Sonder-AfA</p>
              <div className="space-y-2">
                {[
                  { jahr: "Jahr 1", afa: "12.500 €", kumuliert: "12.500 €" },
                  { jahr: "Jahr 2", afa: "12.500 €", kumuliert: "25.000 €" },
                  { jahr: "Jahr 3", afa: "12.500 €", kumuliert: "37.500 €" },
                ].map((r) => (
                  <div key={r.jahr} className="flex justify-between text-xs border-b border-white/10 pb-2 gap-2">
                    <span className="text-white/60 flex-shrink-0">{r.jahr}</span>
                    <span className="text-white/70 font-medium">{r.afa}</span>
                    <span className="text-white/40">∑ {r.kumuliert}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-gray-600/30 rounded-2xl p-3 text-center">
                <p className="text-xs text-white/50">Nach 3 Jahren abgeschrieben</p>
                <p className="text-2xl font-black text-gray-300">37,5 %</p>
              </div>
            </div>

            {/* Variante 2 */}
            <div className="bg-white/10 backdrop-blur-sm border border-green-400/30 rounded-3xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-500/30 text-green-300 text-xs font-bold px-3 py-1 rounded-full">Variante 2</span>
                <span className="text-green-400 text-xs">Neu 2026 · ohne IAB</span>
              </div>
              <h4 className="text-white font-black text-lg mb-1">40 % + 30 % im Kaufjahr</h4>
              <p className="text-white/50 text-xs mb-4">Sonder-AfA + degressive AfA kombiniert</p>
              <div className="space-y-2">
                {[
                  { jahr: "Jahr 1 (2026)", afa: "70.000 €", kumuliert: "70.000 €", highlight: true },
                  { jahr: "Jahr 2 (2027)", afa: "9.000 €", kumuliert: "79.000 €", highlight: false },
                  { jahr: "Jahr 3 (2028)", afa: "6.300 €", kumuliert: "85.300 €", highlight: false },
                ].map((r) => (
                  <div key={r.jahr} className={`flex justify-between text-sm border-b pb-2 ${r.highlight ? "border-green-400/30" : "border-white/10"}`}>
                    <span className="text-white/60">{r.jahr}</span>
                    <span className={r.highlight ? "text-green-300 font-bold" : "text-white/70"}>{r.afa}</span>
                    <span className="text-white/50 text-xs">{r.kumuliert}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-green-600/30 rounded-2xl p-3 text-center">
                <p className="text-xs text-green-300">Nach 3 Jahren abgeschrieben</p>
                <p className="text-2xl font-black text-green-300">85,3 %</p>
                <p className="text-xs text-green-400/60 mt-1">statt 37,5 % nach altem Recht</p>
              </div>
            </div>

            {/* Variante 3 */}
            <div className="bg-green-700/40 backdrop-blur-sm border border-green-400/50 rounded-3xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-400/40 text-green-200 text-xs font-bold px-3 py-1 rounded-full">Variante 3</span>
                <span className="text-green-300 text-xs font-semibold">Maximum-Hebel ⚡</span>
              </div>
              <h4 className="text-white font-black text-lg mb-1">IAB + 40 % + 30 %</h4>
              <p className="text-white/50 text-xs mb-4">IAB im Vorjahr + voller Booster im Kaufjahr</p>
              <div className="space-y-2">
                {[
                  { jahr: "2025 (Vorjahr)", steuer: "–50.000 €", kumuliert: "–50.000 €", highlight: false },
                  { jahr: "2026 (Kaufjahr)", steuer: "–20.000 €", kumuliert: "–70.000 €", highlight: true },
                  { jahr: "2027", steuer: "–9.000 €", kumuliert: "–79.000 €", highlight: false },
                  { jahr: "2028", steuer: "–6.300 €", kumuliert: "–85.300 €", highlight: false },
                ].map((r) => (
                  <div key={r.jahr} className={`flex justify-between text-sm border-b pb-2 ${r.highlight ? "border-green-300/40" : "border-white/10"}`}>
                    <span className="text-white/60 text-xs">{r.jahr}</span>
                    <span className={r.highlight ? "text-green-200 font-bold" : "text-white/70"}>{r.steuer}</span>
                    <span className="text-white/50 text-xs">{r.kumuliert}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-green-500/30 rounded-2xl p-3 text-center">
                <p className="text-xs text-green-200">IAB = Timing-Vorteil</p>
                <p className="text-sm font-bold text-green-200 mt-1">Aufwand ins Vorjahr verlagern</p>
                <p className="text-xs text-green-300/60 mt-1">Ideal bei hohem Gewinn 2025</p>
              </div>
            </div>
          </div>

          {/* Fazit-Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 mb-12">
            <p className="text-white/50 text-xs uppercase tracking-wider font-semibold mb-3">Fazit vom Steuerberater</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex gap-3">
                <span className="text-2xl">🪦</span>
                <p className="text-white/70"><strong className="text-white">Altes Recht ist praktisch tot.</strong> 37,5 % nach 3 Jahren vs. 85,3 % – kein seriöser Steuerberater empfiehlt heute noch die lineare AfA allein.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">⚡</span>
                <p className="text-white/70"><strong className="text-white">Der Booster ohne IAB ist bereits extrem stark.</strong> 40 % Sonder-AfA + 30 % degressiv = 70 % Sofortabschreibung im Kaufjahr.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🎯</span>
                <p className="text-white/70"><strong className="text-white">IAB = Timing-Instrument, kein Mehrvorteil.</strong> Sinnvoll bei hohem Gewinn im Vorjahr – um Progressionsspitzen zu glätten.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vergleich */}
        <div className="mt-0">
          <h3 className="text-2xl font-black text-white text-center mb-8">
            TinyInvest vs. Klassische Immobilie
          </h3>
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-5 font-semibold text-gray-500 text-sm">Merkmal</th>
                    <th className="p-5 font-semibold text-gray-500 text-sm text-center">Klassische ETW</th>
                    <th className="p-5 font-black text-green-700 text-sm text-center bg-green-50">TinyInvest-Modell</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {vergleichRows.map(([merkmal, etw, tiny]) => (
                    <tr key={merkmal}>
                      <td className="p-5 font-medium text-gray-700 text-sm">{merkmal}</td>
                      <td className="p-5 text-center text-sm text-gray-500">{etw}</td>
                      <td className="p-5 text-center text-sm font-bold text-green-700 bg-green-50/50">{tiny}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Faktoid-Box */}
          <div className="mt-8 bg-green-700 rounded-3xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="text-6xl flex-shrink-0">💡</div>
              <div>
                <p className="text-lg md:text-xl font-black mb-2 leading-snug">
                  Die härteste Immobilienwahrheit Deutschlands:
                </p>
                <p className="text-green-100 text-base leading-relaxed">
                  Eine durchschnittliche 70 m² Wohnung in Berlin kostet{" "}
                  <strong className="text-white">~440.000 €</strong> – davon gehen{" "}
                  <strong className="text-white">~44.000 € direkt an Notar, Makler und Finanzamt</strong>,
                  noch bevor du auch nur einen Euro Kredit tilgst. Das ist mehr als der halbe Kaufpreis eines{" "}
                  <strong className="text-white">vollwertigen TinyInvest Comfort (60.000 €)</strong>.
                </p>
                <p className="text-green-200 text-sm mt-3 font-semibold">
                  → Mit TinyInvest kaufst du ein vollständiges Haus zum Preis der bloßen Kaufnebenkosten einer Berliner Wohnung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
