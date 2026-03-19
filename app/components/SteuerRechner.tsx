"use client";
import { useState } from "react";

export default function SteuerRechner() {
  const [kaufpreis, setKaufpreis] = useState(79000);
  const [steuersatz, setSteuersatz] = useState(42);
  const [mitIAB, setMitIAB] = useState(true);

  // === NEUE KORREKTE RECHNUNG AB 2026 ===
  // IAB: 50 % des Kaufpreises im Vorjahr absetzbar
  const iabBasis = mitIAB ? kaufpreis * 0.5 : 0;
  const iabSteuer = iabBasis * (steuersatz / 100);

  // Sonder-AfA: 40 % des VOLLEN Kaufpreises (§ 7g Abs. 5 EStG, Wachstumschancengesetz)
  const sonderAfaBasis = kaufpreis * 0.4;
  const sonderAfaSteuer = sonderAfaBasis * (steuersatz / 100);

  // Degressive AfA: 30 % des VOLLEN Kaufpreises im Kaufjahr (§ 7 Abs. 2 EStG, ab 01.07.2025)
  const degrAfaBasis = kaufpreis * 0.3;
  const degrAfaSteuer = degrAfaBasis * (steuersatz / 100);

  // Gesamt Jahr 1 (Anschaffungsjahr): 70 % des Kaufpreises
  const gesamtAfaJahr1 = sonderAfaBasis + degrAfaBasis;
  const gesamtAfaSteuer = sonderAfaSteuer + degrAfaSteuer;

  // Restbuchwert nach Jahr 1
  const restbuchwert = kaufpreis - gesamtAfaJahr1;

  // Gesamtsteuerersparnis (inkl. IAB falls aktiviert)
  const gesamtSteuer = iabSteuer + gesamtAfaSteuer;
  const effektiverPreis = kaufpreis - gesamtSteuer;

  const fmt = (n: number) => Math.round(n).toLocaleString("de-DE");

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 max-w-3xl mx-auto">
      {/* Slider */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Kaufpreis (netto)
          </label>
          <div className="text-3xl font-black text-green-700 mb-3">{fmt(kaufpreis)} €</div>
          <input
            type="range" min={60000} max={120000} step={1000} value={kaufpreis}
            onChange={(e) => setKaufpreis(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>60.000 €</span><span>120.000 €</span>
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Dein Grenzsteuersatz
          </label>
          <div className="text-3xl font-black text-green-700 mb-3">{steuersatz} %</div>
          <input
            type="range" min={30} max={45} step={1} value={steuersatz}
            onChange={(e) => setSteuersatz(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>30 %</span><span>45 %</span>
          </div>
        </div>
      </div>

      {/* IAB Toggle */}
      <div className="flex items-center justify-between bg-green-50 rounded-2xl px-5 py-4 mb-6 border border-green-100">
        <div>
          <p className="font-bold text-green-800 text-sm">IAB im Vorjahr nutzen?</p>
          <p className="text-green-600 text-xs mt-0.5">50 % vorab abziehen – bereits vor dem Kauf</p>
        </div>
        <button
          onClick={() => setMitIAB(!mitIAB)}
          className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors ${mitIAB ? "bg-green-600" : "bg-gray-300"}`}
        >
          <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${mitIAB ? "translate-x-8" : "translate-x-1"}`} />
        </button>
      </div>

      {/* Tabelle */}
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-3 text-gray-500 font-semibold">Abzugsposten</th>
              <th className="text-right py-3 text-gray-500 font-semibold">Gewinnminderung</th>
              <th className="text-right py-3 text-gray-700 font-semibold">Steuer-Cashback</th>
            </tr>
          </thead>
          <tbody>
            {mitIAB && (
              <tr className="border-b border-gray-50">
                <td className="py-3 font-medium text-gray-800">
                  <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded mr-2">IAB §7g Abs.1</span>
                  50 % vorab (Vorjahr)
                </td>
                <td className="py-3 text-right font-bold text-gray-800">{fmt(iabBasis)} €</td>
                <td className="py-3 text-right font-bold text-green-700">+ {fmt(iabSteuer)} €</td>
              </tr>
            )}
            <tr className="border-b border-gray-50">
              <td className="py-3 font-medium text-gray-800">
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded mr-2">Sonder-AfA §7g Abs.5</span>
                40 % auf vollen Kaufpreis
              </td>
              <td className="py-3 text-right font-bold text-gray-800">{fmt(sonderAfaBasis)} €</td>
              <td className="py-3 text-right font-bold text-green-700">+ {fmt(sonderAfaSteuer)} €</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 font-medium text-gray-800">
                <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-2 py-0.5 rounded mr-2">Degr. AfA §7 Abs.2</span>
                30 % auf vollen Kaufpreis
              </td>
              <td className="py-3 text-right font-bold text-gray-800">{fmt(degrAfaBasis)} €</td>
              <td className="py-3 text-right font-bold text-green-700">+ {fmt(degrAfaSteuer)} €</td>
            </tr>
            <tr className="bg-green-700 rounded-xl">
              <td className="py-4 px-3 rounded-l-xl font-black text-white text-base">
                {mitIAB ? "Gesamt (IAB-Jahr + Kaufjahr)" : "Gesamt (Kaufjahr 2026)"}
              </td>
              <td className="py-4 text-right font-black text-green-200 text-base">
                {fmt(mitIAB ? iabBasis + gesamtAfaJahr1 : gesamtAfaJahr1)} €
              </td>
              <td className="py-4 pr-3 text-right font-black text-white text-xl rounded-r-xl">+ {fmt(gesamtSteuer)} €</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Info-Box Restbuchwert */}
      <div className="bg-gray-50 rounded-2xl px-5 py-3 mb-5 text-xs text-gray-500 flex gap-3 items-start">
        <span className="text-lg">📌</span>
        <span>
          <strong className="text-gray-700">Restbuchwert nach Kaufjahr:</strong> {fmt(restbuchwert)} €<br />
          Davon werden in Folgejahren jeweils 30 % degressiv abgeschrieben
          (Jahr 2: ~{fmt(restbuchwert * 0.3)} €, Jahr 3: ~{fmt(restbuchwert * 0.7 * 0.3)} €).
        </span>
      </div>

      {/* Ergebniskacheln */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 rounded-2xl p-5 text-center">
          <p className="text-xs text-gray-400 font-semibold uppercase mb-1">Im Kaufjahr abschreibbar</p>
          <p className="text-4xl font-black text-green-700">70 %</p>
          <p className="text-sm text-gray-500 mt-1">des Kaufpreises</p>
        </div>
        <div className="bg-green-700 rounded-2xl p-5 text-center">
          <p className="text-xs text-green-200 font-semibold uppercase mb-1">Effektiver Kaufpreis</p>
          <p className="text-4xl font-black text-white">{fmt(effektiverPreis)} €</p>
          <p className="text-sm text-green-200 mt-1">nach Steuererstattung</p>
        </div>
      </div>

      <p className="text-center text-xs text-gray-400 mt-4">
        * Stand 2026: § 7g EStG (IAB + Sonder-AfA 40 %) und § 7 Abs. 2 EStG (degressive AfA 30 %, ab 01.07.2025 gültig). Sonder-AfA und degressive AfA sind im Kaufjahr kombinierbar. Individuelle steuerliche Beratung erforderlich.
      </p>
    </div>
  );
}
