import Image from "next/image";
import { winWinModel } from "./data";
import RenditeRechner from "./RenditeRechner";

export default function WinWinWin() {
  return (
    <section id="rendite" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">Das Modell</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-5">
            Das Win-Win-Win Prinzip
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Drei Parteien profitieren – jeder hat einen klaren Anreiz. Das macht das Modell nachhaltig und sicher.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {winWinModel.map((party) => (
            <div key={party.party} className={`rounded-3xl p-8 border-2 ${party.color}`}>
              <div className="text-5xl mb-4">{party.icon}</div>
              <div className={`text-4xl font-black mb-1 ${party.textColor}`}>{party.percent}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{party.party}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{party.role}</p>
              <div className="bg-white/60 rounded-xl p-3">
                <p className="text-xs text-gray-500 italic">{party.motivation}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Beispielrechnung */}
        <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white">
          <h3 className="text-2xl font-black text-center mb-2">Beispielrechnung</h3>
          <p className="text-gray-400 text-center text-sm mb-8">Annahme: 80.000 € Haus · 100 €/Nacht Durchschnitt · 60 % Auslastung</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-green-400 font-bold mb-4 text-sm uppercase tracking-wider">Monatlicher Umsatz</h4>
              <div className="space-y-3">
                {[
                  { label: "18 Nächte × 100 €", value: "1.800 €", bold: false },
                  { label: "Host (bis 45 %)", value: "− 810 €", bold: false },
                  { label: "Plattform (~15 %)", value: "− 270 €", bold: false },
                  { label: "Investor (40 %)", value: "= 720 €", bold: true },
                ].map((row) => (
                  <div key={row.label} className={`flex justify-between py-2 border-b border-white/10 ${row.bold ? "text-green-400 font-bold text-lg" : "text-gray-300 text-sm"}`}>
                    <span>{row.label}</span>
                    <span>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-green-400 font-bold mb-4 text-sm uppercase tracking-wider">Jahr 1 Liquidität</h4>
              <div className="space-y-3">
                {[
                  { label: "Mietauszahlung (p.a.)", value: "+ 8.640 €", bold: false },
                  { label: "IAB-Erstattung", value: "+ 16.800 €", bold: false },
                  { label: "Sonder-AfA + AfA", value: "+ 7.728 €", bold: false },
                  { label: "Gesamt Liquidität Jahr 1", value: "≈ 33.168 €", bold: true },
                ].map((row) => (
                  <div key={row.label} className={`flex justify-between py-2 border-b border-white/10 ${row.bold ? "text-green-400 font-bold text-lg" : "text-gray-300 text-sm"}`}>
                    <span>{row.label}</span>
                    <span>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-gray-400 text-xs mb-1">Investiert</p>
              <p className="text-2xl font-black text-white">80.000 €</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-gray-400 text-xs mb-1">Effektiv nach Steuer</p>
              <p className="text-2xl font-black text-green-400">≈ 55.500 €</p>
            </div>
            <div className="bg-green-600 rounded-2xl p-5">
              <p className="text-green-200 text-xs mb-1">Effektive Rendite</p>
              <p className="text-2xl font-black text-white">~18 % p.a.</p>
            </div>
          </div>
        </div>

        {/* Rendite Rechner mit Bild-Hintergrund */}
        <div className="mt-16 relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/675538093.jpg" alt="Rendite Hintergrund" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/65" />
          </div>
          <div className="relative py-16 px-4">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-black text-white mb-3">Dein persönlicher Rendite-Rechner</h3>
              <p className="text-white/60">Berechne deinen monatlichen Cashflow und deine effektive Rendite.</p>
            </div>
            <RenditeRechner />
          </div>
        </div>
      </div>
    </section>
  );
}
