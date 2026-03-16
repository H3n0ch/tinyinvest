"use client";
import { useState } from "react";

export default function SteuerRechner() {
  const [kaufpreis, setKaufpreis] = useState(79000);
  const [steuersatz, setSteuersatz] = useState(42);

  const iabBasis = kaufpreis * 0.5;
  const iabSteuer = iabBasis * (steuersatz / 100);
  const sonderAfaBasis = kaufpreis - iabBasis;
  const sonderAfaAbzug = sonderAfaBasis * 0.4;
  const sonderAfaSteuer = sonderAfaAbzug * (steuersatz / 100);
  const restBuchwert = sonderAfaBasis - sonderAfaAbzug;
  const regularAfaAbzug = restBuchwert * 0.1;
  const regularAfaSteuer = regularAfaAbzug * (steuersatz / 100);
  const gesamtAbzug = iabBasis + sonderAfaAbzug + regularAfaAbzug;
  const gesamtSteuer = iabSteuer + sonderAfaSteuer + regularAfaSteuer;
  const effektiverPreis = kaufpreis - gesamtSteuer;
  const fmt = (n: number) => Math.round(n).toLocaleString("de-DE");

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 max-w-3xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Kaufpreis (netto)
          </label>
          <div className="text-3xl font-black text-green-700 mb-3">{fmt(kaufpreis)} €</div>
          <input
            type="range" min={55000} max={120000} step={1000} value={kaufpreis}
            onChange={(e) => setKaufpreis(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>55.000 €</span><span>120.000 €</span>
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

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-3 text-gray-500 font-semibold">Abzugsposten</th>
              <th className="text-right py-3 text-gray-500 font-semibold">Gewinnminderung</th>
              <th className="text-right py-3 text-gray-700 font-semibold">Cash-Back</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-50">
              <td className="py-3 font-medium text-gray-800">
                <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded mr-2">IAB §7g Abs.1</span>
                50 % vorab
              </td>
              <td className="py-3 text-right font-bold text-gray-800">{fmt(iabBasis)} €</td>
              <td className="py-3 text-right font-bold text-green-700">+ {fmt(iabSteuer)} €</td>
            </tr>
            <tr className="border-b border-gray-50">
              <td className="py-3 font-medium text-gray-800">
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded mr-2">Sonder-AfA §7g Abs.5</span>
                40 % (2024)
              </td>
              <td className="py-3 text-right font-bold text-gray-800">{fmt(sonderAfaAbzug)} €</td>
              <td className="py-3 text-right font-bold text-green-700">+ {fmt(sonderAfaSteuer)} €</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 font-medium text-gray-800">
                <span className="inline-block bg-gray-100 text-gray-600 text-xs font-bold px-2 py-0.5 rounded mr-2">Lineare AfA</span>
                10 % / Jahr
              </td>
              <td className="py-3 text-right font-bold text-gray-800">{fmt(regularAfaAbzug)} €</td>
              <td className="py-3 text-right font-bold text-green-700">+ {fmt(regularAfaSteuer)} €</td>
            </tr>
            <tr className="bg-green-700 rounded-xl">
              <td className="py-4 px-3 rounded-l-xl font-black text-white text-base">Gesamt (Jahr 1)</td>
              <td className="py-4 text-right font-black text-green-200 text-base">{fmt(gesamtAbzug)} €</td>
              <td className="py-4 pr-3 text-right font-black text-white text-xl rounded-r-xl">+ {fmt(gesamtSteuer)} €</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 rounded-2xl p-5 text-center">
          <p className="text-xs text-gray-400 font-semibold uppercase mb-1">Abgedeckt durch Finanzamt</p>
          <p className="text-4xl font-black text-green-700">{Math.round((gesamtSteuer / kaufpreis) * 100)} %</p>
          <p className="text-sm text-gray-500 mt-1">des Kaufpreises</p>
        </div>
        <div className="bg-green-700 rounded-2xl p-5 text-center">
          <p className="text-xs text-green-200 font-semibold uppercase mb-1">Effektiver Kaufpreis</p>
          <p className="text-4xl font-black text-white">{fmt(effektiverPreis)} €</p>
          <p className="text-sm text-green-200 mt-1">nach Steuererstattung</p>
        </div>
      </div>
      <p className="text-center text-xs text-gray-400 mt-4">
        * Berechnung basiert auf aktueller Gesetzeslage (§7g EStG, Wachstumschancengesetz 2024). Individuelle steuerliche Beratung durch Steuerberater erforderlich.
      </p>
    </div>
  );
}
