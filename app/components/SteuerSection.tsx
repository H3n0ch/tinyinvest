import Image from "next/image";
import { steuerCards, vergleichRows } from "./data";
import SteuerRechner from "./SteuerRechner";

export default function SteuerSection() {
  return (
    <section id="steuer" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/675538117.jpg" alt="Tiny House Steuervorteile" fill className="object-cover" />
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

        {/* Vergleich */}
        <div className="mt-16">
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
