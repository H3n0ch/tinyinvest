"use client";
import { useState } from "react";

export default function RenditeRechner() {
  const [kaufpreis, setKaufpreis] = useState(79000);

  const monthlyGross = kaufpreis * 0.022;
  const monthlyInvestor = monthlyGross * 0.4;
  const yearlyInvestor = monthlyInvestor * 12;
  const taxSaving = kaufpreis * 0.306;
  const effectivePrice = kaufpreis - taxSaving;
  const rendite = (yearlyInvestor / effectivePrice) * 100;
  const fmt = (n: number) => Math.round(n).toLocaleString("de-DE");

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-2xl mx-auto">
      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Kaufpreis deines TinyInvest-Hauses
        </label>
        <div className="text-4xl font-bold text-green-700 mb-4">{fmt(kaufpreis)} €</div>
        <input
          type="range" min={60000} max={95000} step={1000} value={kaufpreis}
          onChange={(e) => setKaufpreis(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-400 mt-1">
          <span>60.000 € (Comfort)</span><span>95.000 € (Elite)</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-green-50 rounded-2xl p-5 text-center">
          <p className="text-xs text-gray-500 mb-1">Monatlich (deine 40 %)</p>
          <p className="text-3xl font-bold text-green-700">{fmt(monthlyInvestor)} €</p>
        </div>
        <div className="bg-green-700 rounded-2xl p-5 text-center">
          <p className="text-xs text-green-200 mb-1">Jährlich</p>
          <p className="text-3xl font-bold text-white">{fmt(yearlyInvestor)} €</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Effektive Rendite</p>
            <p className="text-xs text-gray-400">(auf Netto-Investition nach Steuer)</p>
          </div>
          <p className="text-4xl font-black text-green-700">{rendite.toFixed(1)} %</p>
        </div>
      </div>

      <p className="text-center text-xs text-gray-400 mt-4">
        * Bei 42 % Grenzsteuersatz, 60 % Auslastung. Individuelle Ergebnisse können variieren.
      </p>
    </div>
  );
}
