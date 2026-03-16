export default function Kontakt() {
  return (
    <section id="kontakt" className="py-24 bg-green-700 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-green-600 rounded-full opacity-40" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-green-800 rounded-full opacity-30" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
          🚀 Bereit loszulegen?
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
          Kostenlose Beratung anfragen
        </h2>
        <p className="text-green-100 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Egal ob Steuer-Investment, Renditeobjekt oder Finanzierung – wir finden gemeinsam das beste Modell für deine Situation.
        </p>

        <div className="bg-white rounded-3xl p-8 md:p-10 max-w-2xl mx-auto text-left shadow-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Kostenlose Beratung</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1.5">Vorname</label>
              <input type="text" placeholder="Max" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1.5">Nachname</label>
              <input type="text" placeholder="Mustermann" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-1.5">E-Mail</label>
            <input type="email" placeholder="max@beispiel.de" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-1.5">Telefon (optional)</label>
            <input type="tel" placeholder="+49 ..." className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-1.5">Ich interessiere mich für …</label>
            <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white">
              <option>📋 Steuer-Investment (IAB + Sonder-AfA)</option>
              <option>📈 Rendite-Investment (passives Einkommen)</option>
              <option>🏡 Kauf auf Raten / Finanzierung</option>
              <option>📊 Steuer-Factsheet anfordern</option>
              <option>💬 Allgemeine Beratung</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-1.5">Budget / Kaufpreisrahmen</label>
            <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white">
              <option>TinyInvest Comfort – On-Grid (60.000 €)</option>
              <option>TinyInvest Escape – Off-Grid + Clansana (79.000 €)</option>
              <option>TinyInvest Elite – Off-Grid Premium (95.000 €)</option>
              <option>Individuell – bitte beraten</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-600 mb-1.5">Nachricht (optional)</label>
            <textarea rows={3} placeholder="Deine Fragen oder Anmerkungen..." className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none" />
          </div>
          <button className="w-full bg-green-700 text-white font-bold py-4 rounded-xl text-lg hover:bg-green-800 transition-colors shadow-md">
            Jetzt kostenlos anfragen →
          </button>
          <p className="text-center text-xs text-gray-400 mt-4">
            Kostenlos & unverbindlich. Kein Spam. Datenschutz wird groß geschrieben.
          </p>
        </div>
      </div>
    </section>
  );
}
