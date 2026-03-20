"use client";
import { useState } from "react";

export default function Kontakt() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="kontakt" className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-950 via-green-950 to-gray-900">
      {/* Dekorative Hintergrund-Elemente */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "40px 40px"}} />
      </div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-green-500 rounded-full opacity-10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-green-700 rounded-full opacity-10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Social Proof Banner */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2.5 rounded-full">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
            </span>
            Bereits 47 Investoren haben in den letzten 30 Tagen eine Beratung angefragt
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-14">
          <span className="inline-block bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            🚀 Bereit loszulegen?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5">
            Kostenlose Beratung anfragen
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Egal ob Steuer-Investment, Renditeobjekt oder Finanzierung – wir finden gemeinsam das beste Modell für deine Situation.
          </p>
        </div>

        {/* 2-spaltiges Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">

          {/* LINKS: Formular */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white rounded-3xl p-10 shadow-2xl text-center flex flex-col items-center justify-center min-h-[400px]">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">Anfrage erhalten!</h3>
                <p className="text-gray-500 max-w-sm">Wir melden uns persönlich innerhalb von 24 Stunden bei dir. Schau auch in deinen Spam-Ordner.</p>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
                <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
                  <span className="bg-green-100 text-green-700 text-sm font-bold px-3 py-1 rounded-full">Kostenlos</span>
                  Deine Beratungsanfrage
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Vorname *</label>
                    <input type="text" placeholder="Max" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-gray-300" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Nachname *</label>
                    <input type="text" placeholder="Mustermann" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-gray-300" />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">E-Mail *</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">✉️</span>
                    <input type="email" placeholder="max@beispiel.de" className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-gray-300" />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Telefon <span className="text-gray-400 font-normal normal-case">(optional)</span></label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">📞</span>
                    <input type="tel" placeholder="+49 ..." className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-gray-300" />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Ich interessiere mich für …</label>
                  <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white">
                    <option>📋 Steuer-Investment (IAB + Sonder-AfA)</option>
                    <option>📈 Rendite-Investment (passives Einkommen)</option>
                    <option>🏡 Kauf auf Raten / Finanzierung</option>
                    <option>📊 Steuer-Factsheet anfordern</option>
                    <option>💬 Allgemeine Beratung</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Budget / Kaufpreisrahmen</label>
                  <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white">
                    <option>TinyInvest Comfort – On-Grid (60.000 €)</option>
                    <option>TinyInvest Escape – Off-Grid + Clansana (79.000 €)</option>
                    <option>TinyInvest Elite – Off-Grid Premium (95.000 €)</option>
                    <option>Individuell – bitte beraten</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Nachricht <span className="text-gray-400 font-normal normal-case">(optional)</span></label>
                  <textarea rows={3} placeholder="Deine Fragen oder Anmerkungen..." className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none placeholder:text-gray-300" />
                </div>

                <button
                  onClick={() => setSubmitted(true)}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-black py-4 rounded-xl text-lg transition-all shadow-lg hover:shadow-green-900/40 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Jetzt kostenlos anfragen →
                </button>

                <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1.5">
                  <span>🔒</span> Kostenlos & unverbindlich. Kein Spam. Datenschutz wird groß geschrieben.
                </p>
              </div>
            )}
          </div>

          {/* RECHTS: Trust-Sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            {/* Was du bekommst */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6">
              <h4 className="text-white font-black text-base mb-4">Was du bekommst</h4>
              <ul className="space-y-3">
                {[
                  { icon: "✅", text: "Persönliche Steueranalyse deiner Situation" },
                  { icon: "✅", text: "Konkretes Modell-Angebot (Comfort / Escape / Elite)" },
                  { icon: "✅", text: "Finanzierungsoptionen & IAB-Strategie" },
                  { icon: "✅", text: "Standort-Empfehlungen für maximale Rendite" },
                  { icon: "✅", text: "Kein Verkaufsdruck – wir beraten ehrlich" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                    <span className="flex-shrink-0">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Antwort in 24h */}
            <div className="bg-green-500/20 border border-green-400/30 backdrop-blur-sm rounded-3xl p-6 flex items-center gap-4">
              <div className="text-4xl flex-shrink-0">🕐</div>
              <div>
                <p className="text-white font-black text-base">Antwort innerhalb 24h</p>
                <p className="text-white/60 text-sm mt-0.5">Wir melden uns persönlich – kein automatisches Antwortmail.</p>
              </div>
            </div>

            {/* Mini-Testimonial */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400 text-sm">★</span>)}
              </div>
              <p className="text-white/80 text-sm leading-relaxed italic">
                „Innerhalb von 2 Wochen nach meiner Anfrage stand der Kaufvertrag. Die Beratung war ehrlich, klar und ohne Druck. Meine IAB-Erstattung kommt noch dieses Jahr."
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-sm">MK</div>
                <div>
                  <p className="text-white font-semibold text-sm">Michael K.</p>
                  <p className="text-white/40 text-xs">Investor · TinyInvest Escape</p>
                </div>
              </div>
            </div>

            {/* Direktkontakt */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6">
              <p className="text-white/50 text-xs uppercase tracking-wider font-semibold mb-3">Lieber direkt schreiben?</p>
              <a href="mailto:info@tinyinvest.de" className="flex items-center gap-3 text-green-300 hover:text-green-200 transition-colors font-semibold text-sm">
                <span>✉️</span> info@tinyhouse.investments
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
