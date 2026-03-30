import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";

export const metadata = {
  title: "Tiny House als Renditeobjekt: Cashflow & Ertragsmodell 2026 | TinyInvest",
  description:
    "Wie funktioniert die Rendite eines Tiny Houses? Mieteinnahmen, Cashflow-Analyse, 40 % Investor-Anteil, Belegungsquote und vollständiges 5-Jahres-Modell erklärt.",
  keywords:
    "tiny house rendite, tiny house cashflow, tiny house mieteinnahmen, rendite ferienimmobilien 2026, tiny house investment rendite berechnen",
  alternates: {
    canonical: "https://tinyhouse.investments/wissen/tiny-house-als-rendite",
  },
  openGraph: {
    title: "Tiny House als Renditeobjekt – Cashflow & Ertragsmodell 2026",
    description:
      "40 % der Mieteinnahmen für den Investor, 60 % Belegung, 12–18 % IRR: So funktioniert das Tiny House Renditemodell.",
    url: "https://tinyhouse.investments/wissen/tiny-house-als-rendite",
  },
};

export default function TinyHouseAlsRenditePage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar variant="sub" />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700 transition-colors">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700 transition-colors">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Renditemodell</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Cashflow · Ertragsmodell · 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Tiny House als Renditeobjekt: Cashflow & Ertragsmodell erklärt
          </h1>
          <div className="bg-green-700 rounded-2xl px-6 py-4 mb-5">
            <p className="text-white font-bold text-[14px] leading-relaxed">
              📈 Der Investor erhält 40 % aller Mieteinnahmen – monatlich ausgezahlt. Bei 60 % Belegung und 100 €/Nacht sind das ~720 € netto/Monat für ein 79.000 € Haus.
            </p>
          </div>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mb-6">
            Wie entsteht die Rendite bei einem Tiny House Investment? Dieser Guide erklärt das gesamte
            Ertragsmodell – von der Belegungsquote über die 3-Wege-Aufteilung bis zum vollständigen 5-Jahres-Cashflow.
          </p>
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["40 % Investor-Anteil", "60–70 % Belegung", "12–18 % IRR p.a.", "Monatliche Auszahlung"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Inhaltsverzeichnis */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-3">Inhalt</p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { anchor: "#aufteilung", label: "1. Die 3-Wege-Aufteilung" },
              { anchor: "#belegung", label: "2. Belegungsquote & Umsatz" },
              { anchor: "#cashflow", label: "3. Monatlicher Cashflow" },
              { anchor: "#5jahre", label: "4. 5-Jahres-Modell" },
              { anchor: "#vergleich", label: "5. Vergleich mit anderen Assets" },
            ].map((item) => (
              <a key={item.anchor} href={item.anchor} className="text-[13px] text-green-700 hover:text-green-900 font-semibold transition-colors">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Section 1: 3-Wege-Aufteilung */}
      <section id="aufteilung" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Das Grundmodell</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-6 tracking-tight">
            Die 3-Wege-Aufteilung der Mieteinnahmen
          </h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            Jeder Euro Mieteinnahme wird auf drei Parteien aufgeteilt – jede mit einem klaren Anreiz,
            das Investment zum Erfolg zu bringen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              { icon: "🏡", party: "Host", percent: "bis 45 %", color: "bg-amber-50 border-amber-200 text-amber-800", textColor: "text-amber-700", desc: "Reinigung, Check-in, Grundstück, Gästebetreuung vor Ort." },
              { icon: "💼", party: "Investor", percent: "40 %", color: "bg-green-50 border-green-200 text-green-800", textColor: "text-green-700", desc: "Stellt das Kapital. Bekommt 40 % passiv – monatlich ausgezahlt." },
              { icon: "⚙️", party: "TinyInvest", percent: "~15 %", color: "bg-gray-50 border-gray-200 text-gray-800", textColor: "text-gray-600", desc: "Buchungsplattform, Marketing, Zahlungsabwicklung, Qualität." },
            ].map((item) => (
              <div key={item.party} className={`rounded-3xl border p-6 text-center ${item.color}`}>
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-black text-lg mb-1">{item.party}</h3>
                <p className={`font-black text-3xl mb-2 ${item.textColor}`}>{item.percent}</p>
                <p className="text-[12px] leading-relaxed opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 text-white">
            <p className="font-black text-base mb-2">💡 Warum ist dieses Modell so motivierend?</p>
            <p className="text-gray-300 text-[13px] leading-relaxed">
              Der Host verdient mehr, je besser seine Bewertungen sind – er hat also einen direkten finanziellen Anreiz,
              das Haus in Top-Zustand zu halten. TinyInvest verdient nur, wenn das Haus auch vermietet wird.
              Und der Investor profitiert von beiden Motivationen, ohne selbst tätig werden zu müssen.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Belegungsquote */}
      <section id="belegung" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Umsatztreiber</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-6 tracking-tight">
            Belegungsquote & Umsatz: Was ist realistisch?
          </h2>

          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 font-semibold text-gray-500 text-[12px]">Szenario</th>
                    <th className="p-4 font-semibold text-gray-500 text-[12px] text-center">Belegung</th>
                    <th className="p-4 font-semibold text-gray-500 text-[12px] text-center">Nächte/Jahr</th>
                    <th className="p-4 font-semibold text-gray-500 text-[12px] text-center">Umsatz/Jahr</th>
                    <th className="p-4 font-black text-green-700 text-[12px] text-center bg-green-50">Investor (40 %)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-[13px]">
                  {[
                    ["Konservativ", "50 %", "182", "18.250 €", "7.300 €"],
                    ["Realistisch ✓", "60 %", "219", "21.900 €", "8.760 €"],
                    ["Optimistisch", "70 %", "255", "25.500 €", "10.200 €"],
                    ["Peak Season", "80 %", "292", "29.200 €", "11.680 €"],
                  ].map(([szen, bel, naechte, umsatz, investor], i) => (
                    <tr key={szen} className={i === 1 ? "bg-green-50/50 font-semibold" : "hover:bg-gray-50/50"}>
                      <td className="p-4 text-gray-700">{szen}</td>
                      <td className="p-4 text-center text-gray-500">{bel}</td>
                      <td className="p-4 text-center text-gray-500">{naechte}</td>
                      <td className="p-4 text-center text-gray-500">{umsatz}</td>
                      <td className="p-4 text-center font-bold text-green-700 bg-green-50/50">{investor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[10px] text-gray-400 p-4 border-t border-gray-100">* Basis: 100 €/Nacht Durchschnittspreis. Tiny Escapes historisch: 60–70 % Belegung.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-white border border-gray-100 rounded-2xl p-5">
              <h3 className="font-black text-gray-900 text-sm mb-3">🌍 Warum 60–70 % erreichbar sind</h3>
              <ul className="space-y-2 text-[13px] text-gray-600">
                <li className="flex gap-2"><span className="text-green-600">→</span>Gleichzeitig auf Airbnb + tiny Escapes gelistet</li>
                <li className="flex gap-2"><span className="text-green-600">→</span>Professionelles Listing-Management durch TinyInvest</li>
                <li className="flex gap-2"><span className="text-green-600">→</span>Preisoptimierung durch dynamische Preismodelle</li>
                <li className="flex gap-2"><span className="text-green-600">→</span>Nachfrage nach einzigartigen Übernachtungserlebnissen wächst</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-5">
              <h3 className="font-black text-gray-900 text-sm mb-3">⚠️ Was die Belegung beeinflussen kann</h3>
              <ul className="space-y-2 text-[13px] text-gray-600">
                <li className="flex gap-2"><span className="text-amber-500">→</span>Standortqualität (Natur, Erreichbarkeit)</li>
                <li className="flex gap-2"><span className="text-amber-500">→</span>Saisonalität (Sommer vs. Winter)</li>
                <li className="flex gap-2"><span className="text-amber-500">→</span>Host-Qualität & Gäste-Bewertungen</li>
                <li className="flex gap-2"><span className="text-amber-500">→</span>Konjunktur & Reisetrends</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Monatlicher Cashflow */}
      <section id="cashflow" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Praxisbeispiel</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-8 tracking-tight">
            Monatlicher Cashflow: TinyInvest Escape (79.000 €)
          </h2>

          <div className="bg-gray-900 rounded-2xl p-8 text-white mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { label: "Modell", value: "TinyInvest Escape", sub: "Vollautark · Off-Grid" },
                { label: "Kaufpreis", value: "79.000 €", sub: "Inkl. Trailer & Ausstattung" },
                { label: "Belegung (Basis)", value: "60 %", sub: "~219 Nächte/Jahr" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-gray-400 text-[10px] mb-1">{s.label}</p>
                  <p className="font-data text-xl font-black text-white">{s.value}</p>
                  <p className="text-gray-500 text-[10px] mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>
            <div className="space-y-2.5 mb-6">
              {[
                { label: "Umsatz/Monat (219 Nächte ÷ 12 × 100 €)", value: "1.825 €", highlight: false },
                { label: "Host-Anteil (45 %)", value: "– 821 €", highlight: false },
                { label: "Plattform-Fee TinyInvest (15 %)", value: "– 274 €", highlight: false },
                { label: "💰 Investor-Auszahlung (40 %)", value: "730 €/Monat", highlight: true },
                { label: "Rendite auf Kaufpreis (ohne Steuer)", value: "~11,1 % p.a.", highlight: false },
                { label: "Effektive Rendite (mit §7g Steuereffekt)", value: "~16–18 % p.a.", highlight: true },
              ].map((row) => (
                <div key={row.label} className={`flex justify-between py-2 border-b border-white/10 ${row.highlight ? "text-green-400 font-bold" : "text-gray-300 text-[13px]"}`}>
                  <span>{row.label}</span>
                  <span className="font-data">{row.value}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <p className="text-gray-400 text-[10px] mb-1">Monatliche Auszahlung</p>
                <p className="font-data text-2xl font-black text-white">730 €</p>
              </div>
              <div className="bg-green-600 rounded-xl p-4 text-center">
                <p className="text-green-200 text-[10px] mb-1">Effektive Rendite p.a.</p>
                <p className="font-data text-2xl font-black text-white">16–18 %</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
            <p className="text-[10px] text-amber-700 font-bold uppercase tracking-widest mb-2">⚠️ Hinweis</p>
            <p className="text-[12px] text-amber-800 leading-relaxed">
              Die genannten Zahlen basieren auf Projektionen historischer Belegungsdaten. Renditeangaben stellen keine Garantie dar.
              Die effektive Rendite hängt von deinem persönlichen Steuersatz, der tatsächlichen Belegung und der Standortqualität ab.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: 5-Jahres-Modell */}
      <section id="5jahre" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Langfristige Perspektive</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-8 tracking-tight">
            5-Jahres-Cashflow: TinyInvest Escape 79.000 €
          </h2>
          <div className="space-y-3 mb-8">
            {[
              { jahr: "Jahr 0", event: "Kauf", cashflow: "– 79.000 €", steuer: "+ 16.380 € (IAB)", kumuliert: "– 62.620 €", highlight: false },
              { jahr: "Jahr 1", event: "IAB-Auflösung + AfA + Miete", cashflow: "+ 8.760 €", steuer: "+ 14.448 € (Sonder-AfA + deg. AfA)", kumuliert: "– 39.412 €", highlight: false },
              { jahr: "Jahr 2", event: "Mieteinnahmen", cashflow: "+ 8.760 €", steuer: "+ 1.800 € (lineare AfA)", kumuliert: "– 28.852 €", highlight: false },
              { jahr: "Jahr 3", event: "Mieteinnahmen", cashflow: "+ 8.760 €", steuer: "+ 1.800 €", kumuliert: "– 18.292 €", highlight: false },
              { jahr: "Jahr 4", event: "Mieteinnahmen", cashflow: "+ 8.760 €", steuer: "+ 1.800 €", kumuliert: "– 7.732 €", highlight: false },
              { jahr: "Jahr 5", event: "Mieteinnahmen + Restwert ~55k", cashflow: "+ 8.760 €", steuer: "+ 1.800 €", kumuliert: "+ 57.828 €", highlight: true },
            ].map((row) => (
              <div key={row.jahr} className={`rounded-xl p-5 border ${row.highlight ? "bg-green-50 border-green-200" : "bg-white border-gray-100"}`}>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${row.highlight ? "bg-green-200 text-green-800" : "bg-gray-100 text-gray-500"}`}>{row.jahr}</span>
                    <p className="font-semibold text-gray-900 text-sm mt-1">{row.event}</p>
                  </div>
                  <div className="flex gap-6 text-[12px]">
                    <div><p className="text-gray-400 text-[10px]">Cash</p><p className="font-data font-semibold text-gray-700">{row.cashflow}</p></div>
                    <div><p className="text-gray-400 text-[10px]">Steuervorteil</p><p className="font-data font-semibold text-green-700">{row.steuer}</p></div>
                    <div><p className="text-gray-400 text-[10px]">Kumuliert</p><p className={`font-data font-black ${row.highlight ? "text-green-700" : "text-gray-600"}`}>{row.kumuliert}</p></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-green-700 rounded-2xl p-6 text-white">
            <p className="font-black text-base mb-2">📊 IRR über 5 Jahre: ~13–15 % p.a.</p>
            <p className="text-green-100 text-[13px] leading-relaxed">
              Der IRR (Internal Rate of Return) berücksichtigt den Zeitwert des Geldes und alle Cashflows über 5 Jahre.
              Durch den kombinierten Effekt aus Mieteinnahmen, Steuererstattungen und Restwert ergibt sich eine
              effektive Jahresrendite von 13–15 % – deutlich über klassischen Immobilien (3–4 %) oder Anleihen.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Vergleich */}
      <section id="vergleich" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Asset-Vergleich</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-8 tracking-tight">
            Rendite-Vergleich: Tiny House vs. andere Assets
          </h2>
          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 font-semibold text-gray-500 text-[12px]">Asset</th>
                    <th className="p-4 font-semibold text-gray-500 text-[12px] text-center">Einstieg</th>
                    <th className="p-4 font-semibold text-gray-500 text-[12px] text-center">Rendite p.a.</th>
                    <th className="p-4 font-semibold text-gray-500 text-[12px] text-center">Aufwand</th>
                    <th className="p-4 font-semibold text-gray-500 text-[12px] text-center">Steuer-Hebel</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-[12px]">
                  {[
                    ["ETF / Aktien", "ab 1 €", "6–9 %", "Gering", "Keine AfA"],
                    ["Eigentumswohnung", "300k–500k €", "3–5 %", "Hoch", "Gering (2 %)"],
                    ["Crowdinvesting", "ab 250 €", "5–8 %", "Keine", "Keine AfA"],
                    ["Festgeld / Anleihe", "ab 1.000 €", "2–4 %", "Keine", "Keine"],
                  ].map((row) => (
                    <tr key={row[0]} className="hover:bg-gray-50/50">
                      {row.map((cell, i) => (
                        <td key={i} className={`p-4 ${i === 0 ? "font-medium text-gray-700" : "text-center text-gray-500"}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                  <tr className="bg-green-50/50 font-semibold">
                    <td className="p-4 font-black text-green-700">TinyInvest</td>
                    <td className="p-4 text-center text-green-700">ab 60.000 €</td>
                    <td className="p-4 text-center font-black text-green-700">12–18 %</td>
                    <td className="p-4 text-center text-green-700">Minimal</td>
                    <td className="p-4 text-center font-black text-green-700">Maximal (§7g)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/wissen/kapitalanlage" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">
              Kapitalanlage-Guide →
            </Link>
            <Link href="/renditemodell" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">
              Interaktiver Renditerechner →
            </Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">
              ← Zurück zum Wissens-Hub
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-black text-gray-900 mb-4">Rendite selbst berechnen</h3>
          <p className="text-gray-500 text-sm mb-6">
            Unser interaktiver Renditerechner zeigt dir deine persönliche Netto-Rendite nach Steuer – in Echtzeit.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/renditemodell" className="bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-sm">
              Zum Renditerechner →
            </Link>
            <ModalButton className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">
              Unterlagen anfordern →
            </ModalButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
