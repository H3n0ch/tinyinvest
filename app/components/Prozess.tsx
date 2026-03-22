"use client";
import { useState } from "react";

const tabs = ["📋 Steuer-Investor", "📈 Rendite-Investor", "🏡 Finanzierungs-Käufer"];

const steuerSteps = [
  { num: "01", title: "Steuerberater konsultieren", desc: "Du nimmst unser Steuer-Factsheet mit und lässt prüfen, ob IAB und Sonder-AfA für dich anwendbar sind. (Spoiler: Fast immer ja.)" },
  { num: "02", title: "IAB bilden", desc: "Dein Steuerberater bildet den Investitionsabzugsbetrag (50 %) – oft noch rückwirkend für das Vorjahr. Das Finanzamt überweist ca. 16.000–17.000 € zurück." },
  { num: "03", title: "Haus kaufen & liefern", desc: "Du wählst dein TinyInvest-Modell, wir produzieren es und liefern es auf den vereinbarten Standort in Deutschland oder der EU." },
  { num: "04", title: "Vermietung & Steuer genießen", desc: "Dein Haus geht sofort in den Betrieb. Sonder-AfA und AfA werden in der Steuererklärung geltend gemacht. Monatliche Mieteinnahmen fließen." },
];

const renditeSteps = [
  { num: "01", title: "Modell & Standort wählen", desc: "Wähle dein Modell und deinen Wunschstandort – ob Deutschland, Österreich, Rumänien oder Kroatien. Wir beraten dich bei der Standortwahl." },
  { num: "02", title: "Host & Lieferung", desc: "Wir vermitteln dir einen verifizierten Host vor Ort, der Reinigung, Check-in und Pflege übernimmt. Dein Haus wird geliefert und aufgestellt." },
  { num: "03", title: "Monatliche Auszahlung", desc: "Los geht's: Dein Haus ist buchbar. Du erhältst 40 % der Einnahmen monatlich ausgezahlt – transparent und vollständig passiv." },
];

const finanzSteps = [
  { num: "01", title: "Beratungsgespräch", desc: "Wir klären gemeinsam deine Finanzierungsmöglichkeiten: Kredit, Ratenkauf oder Leasing. Dein Budget bestimmt das passende Modell." },
  { num: "02", title: "IAB als Eigenkapital", desc: "Dein Steuerberater bildet den IAB, das Finanzamt zahlt dir ca. 16.000–17.000 € zurück. Dieses Geld nutzt du als Eigenkapital für die Bank." },
  { num: "03", title: "Kredit & Lieferung", desc: "Mit echtem Eigenkapital aus der Steuer bekommst du günstige Konditionen. Das Haus wird geliefert und sofort vermietet." },
  { num: "04", title: "Miete tilgt den Kredit", desc: "Deine 40 % Mieteinnahmen decken die monatliche Kreditrate – oft mit positivem Cashflow. Das Haus gehört nach der Laufzeit dir." },
];

function StepCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 text-center">
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-black text-white mx-auto mb-5 shadow-lg"
        style={{ background: "linear-gradient(135deg, #2d6a4f, #52b788)" }}
      >
        {num}
      </div>
      <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 leading-relaxed text-sm">{desc}</p>
    </div>
  );
}

export default function Prozess() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="prozess" className="py-20 bg-platform border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">Der Prozess</span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2 mb-4 tracking-tight">
            So einfach geht&apos;s
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Wähle deinen Weg – wir führen dich Schritt für Schritt durch den Prozess.
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeTab === i
                  ? "bg-green-700 text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steuerSteps.map((s) => <StepCard key={s.num} {...s} />)}
          </div>
        )}
        {activeTab === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {renditeSteps.map((s) => <StepCard key={s.num} {...s} />)}
          </div>
        )}
        {activeTab === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {finanzSteps.map((s) => <StepCard key={s.num} {...s} />)}
          </div>
        )}
      </div>
    </section>
  );
}
