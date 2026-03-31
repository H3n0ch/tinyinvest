export default function PainPoints() {
  const pains = [
    {
      icon: "💸",
      text: "Sie haben ein gutes Einkommen – aber fast die Hälfte davon fließt direkt ans Finanzamt.",
    },
    {
      icon: "😰",
      text: "Kapitalanlagen fühlen sich immer weniger sicher an – Aktien, Inflation, Nullzinsen.",
    },
    {
      icon: "🔁",
      text: "Ihnen fehlt eine klare, umsetzbare Strategie zum echten Vermögensaufbau.",
    },
    {
      icon: "⏳",
      text: "Das Geld, das übrig bleibt, reicht kaum für sinnvolle Investments – und Erträge werden nochmal besteuert.",
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-red-500 font-semibold text-sm uppercase tracking-widest">Kennen Sie das?</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mt-3 mb-4">
            100 % unserer Kunden berichten uns <span className="text-red-500">vorher</span> davon…
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Sie sind damit nicht allein. Und es gibt eine legale, staatlich geförderte Lösung.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {pains.map((p) => (
            <div
              key={p.text}
              className="flex items-start gap-4 bg-red-50 border border-red-100 rounded-2xl px-5 py-5"
            >
              <span className="text-2xl flex-shrink-0 mt-0.5">{p.icon}</span>
              <p className="text-gray-700 font-medium leading-relaxed text-sm">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-green-700 rounded-3xl p-8 text-center text-white">
          <p className="text-xl sm:text-2xl font-black mb-3">
            Die gute Nachricht: 💡 Das Finanzamt <span className="text-green-300">fördert</span> die Lösung aktiv!
          </p>
          <p className="text-green-100 text-base max-w-2xl mx-auto mb-6">
            Mit einem Tiny House als beweglichem Wirtschaftsgut können Sie IAB, Sonder-AfA und lineare Abschreibung kombinieren –
            und sich bis zu <strong className="text-white">25.000 € direkt vom Finanzamt zurückholen</strong>, noch im selben Jahr.
          </p>
          <a
            href="#steuer"
            className="inline-block bg-white text-green-700 font-bold px-8 py-3.5 rounded-full text-base hover:bg-green-50 transition-colors shadow-lg"
          >
            Steuer-Hebel jetzt berechnen →
          </a>
        </div>
      </div>
    </section>
  );
}
