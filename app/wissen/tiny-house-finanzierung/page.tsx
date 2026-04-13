import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Tiny House finanzieren 2026: Kredit, Leasing oder Cash? | TinyInvest",
  description:
    "Wie finanziert man ein Tiny House als Kapitalanlage? Kredit, Leasing oder Barzahlung – Vergleich mit Steuereffekt. §7g macht Cash zur klügsten Option.",
  keywords:
    "tiny house finanzieren, tiny house kredit 2026, tiny house leasing, tiny house investment finanzierung, tiny house kaufen finanzierung",
  alternates: {
    canonical: "https://tinyhouse.investments/wissen/tiny-house-finanzierung",
  },
  openGraph: {
    title: "Tiny House finanzieren 2026: Kredit, Leasing oder Cash?",
    description:
      "§7g macht Cash zur besten Finanzierungsoption für Tiny House Investments. Vollständiger Vergleich 2026.",
    url: "https://tinyhouse.investments/wissen/tiny-house-finanzierung",
  },
};

const faqItems = [
  {
    question: "Kann ich ein Tiny House Investment per Kredit finanzieren?",
    answer:
      "Technisch ja – einige Banken (v.a. Volksbanken und Sparkassen) vergeben Konsumentenkredite oder Gewerbedarlehen für bewegliche Wirtschaftsgüter. Da ein Tiny House auf Vlemmix Trailer als bewegliches Wirtschaftsgut gilt (kein Grundstück, keine Grundbucheintragung), scheidet eine klassische Immobilienfinanzierung aus. Die Kreditzinsen reduzieren deinen Nettoertrag. Mit §7g IAB ist Barzahlung in den meisten Fällen attraktiver.",
  },
  {
    question: "Gibt es staatliche Förderungen für Tiny House Investments?",
    answer:
      "Direkte Tiny House Förderungen gibt es aktuell nicht. Indirekt profitierst du jedoch massiv von §7g EStG (IAB + Sonder-AfA + degressive AfA) – das ist faktisch eine staatliche Förderung von bis zu 40 % des Kaufpreises durch Steuererstattungen. KfW-Darlehen greifen nicht, da keine Immobilie und kein Grundstück vorhanden ist.",
  },
  {
    question: "Warum ist Barzahlung bei einem Tiny House Investment oft besser als ein Kredit?",
    answer:
      "Bei einem Kredit zahlst du 5–8 % Zinsen p.a. auf die Kreditsumme. Gleichzeitig bekommst du durch §7g im ersten Jahr bis zu ~40 % des Kaufpreises als Steuererstattung zurück – das entspricht einem effektiven 'Rückfluss' der höher ist als die Kreditzinsen. Zudem zählen Zinszahlungen zwar als Betriebsausgabe, der gesamte Steuereffekt ist aber bei Direktkauf höher.",
  },
  {
    question: "Was ist der Mindestbetrag für ein Tiny House Investment bei TinyInvest?",
    answer:
      "Der Einstieg beginnt bei 65.000 € für das Comfort-Modell. Nach Berücksichtigung der IAB-Steuererstattung (bei 42 % Grenzsteuersatz ~13.000–14.000 €) reduziert sich die effektive Liquiditätsbelastung auf ca. 51.000–52.000 €.",
  },
];

export default function TinyHouseFinanzierungPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <main className="bg-white min-h-screen">
      <Navbar variant="sub" />

      <Script
        id="faq-schema-finanzierung"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700 transition-colors">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700 transition-colors">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Finanzierung</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Finanzierungs-Guide · 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Tiny House finanzieren 2026: Kredit, Leasing oder Cash?
          </h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mb-6">
            Welche Finanzierungsform ist die klügste für ein Tiny House Investment? Warum §7g die
            Rechnung komplett verändert – und warum Barzahlung in den meisten Fällen gewinnt.
          </p>
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["Kredit vs. Cash", "§7g Effekt", "Leasing", "Steuererstattung", "65.000 € Einstieg"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TOC */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-3">Inhalt</p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { anchor: "#optionen", label: "1. Die 3 Finanzierungsoptionen" },
              { anchor: "#steuereffekt", label: "2. Der §7g-Effekt" },
              { anchor: "#vergleich", label: "3. Direktvergleich" },
              { anchor: "#empfehlung", label: "4. Empfehlung" },
              { anchor: "#faq", label: "5. FAQ" },
            ].map((item) => (
              <a key={item.anchor} href={item.anchor} className="text-[13px] text-green-700 hover:text-green-900 font-semibold transition-colors">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Section 1 */}
      <section id="optionen" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Optionen</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-8 tracking-tight">
            Die 3 Finanzierungsoptionen im Überblick
          </h2>

          <div className="space-y-5">
            {[
              {
                icon: "💶",
                title: "Option 1: Barzahlung (Cash)",
                badge: "Empfohlen",
                badgeColor: "bg-green-100 text-green-700",
                pros: [
                  "Kein Zinsaufwand (spart 5–8 % p.a.)",
                  "Maximaler §7g-Steuereffekt im Kaufjahr",
                  "Sofortiger Eigentumsübergang",
                  "Keine Bank-Abhängigkeit",
                ],
                cons: [
                  "Kapital gebunden (keine Hebelwirkung)",
                  "Liquiditätsbedarf ab 65.000 €",
                ],
              },
              {
                icon: "🏦",
                title: "Option 2: Kredit / Gewerbedarlehen",
                badge: "Möglich",
                badgeColor: "bg-amber-100 text-amber-700",
                pros: [
                  "Kapital für weitere Investments verfügbar",
                  "Zinsen als Betriebsausgabe absetzbar",
                  "Hebelwirkung auf Eigenkapitalrendite",
                ],
                cons: [
                  "5–8 % Kreditzinsen reduzieren Nettorendite",
                  "Kein klassisches Immobilien-Darlehen möglich",
                  "Bonität und Sicherheiten erforderlich",
                  "Komplexere Steueroptimierung",
                ],
              },
              {
                icon: "📋",
                title: "Option 3: Leasing",
                badge: "Nicht empfohlen",
                badgeColor: "bg-red-100 text-red-700",
                pros: [
                  "Niedrige monatliche Rate",
                  "Leasingrate als Betriebsausgabe",
                ],
                cons: [
                  "Kein Eigentumsübergang → kein IAB möglich",
                  "Kein §7g-Effekt (Leasinggeber ist Eigentümer)",
                  "Gesamtkosten meist höher als Kauf",
                  "Keine Möglichkeit zur Sonder-AfA",
                ],
              },
            ].map((opt) => (
              <div key={opt.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{opt.icon}</span>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="font-black text-gray-900 text-base">{opt.title}</h3>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${opt.badgeColor}`}>{opt.badge}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-[10px] text-green-600 font-bold uppercase mb-2">Vorteile</p>
                        <ul className="space-y-1">
                          {opt.pros.map((p) => (
                            <li key={p} className="flex gap-2 text-[13px] text-gray-600">
                              <span className="text-green-500 flex-shrink-0">✓</span>{p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-[10px] text-red-500 font-bold uppercase mb-2">Nachteile</p>
                        <ul className="space-y-1">
                          {opt.cons.map((c) => (
                            <li key={c} className="flex gap-2 text-[13px] text-gray-500">
                              <span className="text-red-400 flex-shrink-0">✗</span>{c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Steuereffekt */}
      <section id="steuereffekt" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Der entscheidende Faktor</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-6 tracking-tight">
            Warum §7g die Finanzierungsentscheidung dominiert
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Bei klassischen Immobilien macht Fremdkapital oft Sinn — wegen der Zinsen, der Inflation
            und der langen AfA-Laufzeit. Bei Tiny Houses dreht §7g die Logik um.
          </p>

          <div className="bg-gray-900 rounded-2xl p-8 text-white mb-8">
            <p className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold mb-4">Beispiel: 80.000 € Tiny House · 42 % Grenzsteuersatz</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-red-400 font-bold mb-3 text-[12px] uppercase">Mit Kredit (6 % p.a.)</h4>
                <div className="space-y-2 text-[13px]">
                  {[
                    { label: "Kaufpreis", value: "80.000 €" },
                    { label: "Kredit (5 Jahre)", value: "80.000 €" },
                    { label: "Zinslast gesamt", value: "– 12.800 €" },
                    { label: "§7g Steuereffekt", value: "+ 33.600 €" },
                    { label: "Mieteinnahmen (5 J.)", value: "+ 43.200 €" },
                    { label: "Netto-Ergebnis", value: "≈ + 64.000 €", bold: true },
                  ].map((r) => (
                    <div key={r.label} className={`flex justify-between border-b border-white/10 pb-1.5 ${r.bold ? "text-green-400 font-bold text-base" : "text-gray-300"}`}>
                      <span>{r.label}</span>
                      <span className="font-data">{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-green-400 font-bold mb-3 text-[12px] uppercase">Mit Cash</h4>
                <div className="space-y-2 text-[13px]">
                  {[
                    { label: "Kaufpreis (Cash)", value: "80.000 €" },
                    { label: "Zinslast", value: "0 €" },
                    { label: "§7g Steuereffekt", value: "+ 33.600 €" },
                    { label: "Mieteinnahmen (5 J.)", value: "+ 43.200 €" },
                    { label: "Netto-Ergebnis", value: "≈ + 76.800 €", bold: true },
                  ].map((r) => (
                    <div key={r.label} className={`flex justify-between border-b border-white/10 pb-1.5 ${r.bold ? "text-green-400 font-bold text-base" : "text-gray-300"}`}>
                      <span>{r.label}</span>
                      <span className="font-data">{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6 bg-green-600/20 border border-green-500/30 rounded-xl p-4">
              <p className="text-green-300 font-bold text-[13px]">→ Cash-Vorteil: ~12.800 € mehr Netto-Ergebnis über 5 Jahre</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Vergleich */}
      <section id="vergleich" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Direktvergleich</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-8 tracking-tight">Cash vs. Kredit vs. Leasing</h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 text-[12px] text-gray-500 font-semibold">Kriterium</th>
                    <th className="p-4 text-[12px] font-black text-green-700 text-center bg-green-50">Cash</th>
                    <th className="p-4 text-[12px] text-gray-500 font-semibold text-center">Kredit</th>
                    <th className="p-4 text-[12px] text-gray-500 font-semibold text-center">Leasing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-[13px]">
                  {[
                    ["§7g IAB nutzbar", "✅ Ja", "✅ Ja", "❌ Nein"],
                    ["Eigentumsübergang", "✅ Sofort", "✅ Sofort", "❌ Nein"],
                    ["Zinslast", "✅ 0 €", "⚠ 5–8 % p.a.", "⚠ 4–7 % p.a."],
                    ["Kapitaleffizienz", "⚠ Hoch gebunden", "✅ Hebel möglich", "⚠ Mittel"],
                    ["Steueroptimierung", "✅ Maximum", "⚠ Reduziert", "❌ Minimal"],
                    ["Empfohlen für", "✅ Die meisten Investoren", "⚠ Sehr hohe Liquidität", "❌ Nicht empfohlen"],
                  ].map(([k, a, b, c]) => (
                    <tr key={k} className="hover:bg-gray-50/50">
                      <td className="p-4 font-medium text-gray-700">{k}</td>
                      <td className="p-4 text-center font-bold text-green-700 bg-green-50/50">{a}</td>
                      <td className="p-4 text-center text-gray-500">{b}</td>
                      <td className="p-4 text-center text-gray-500">{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Empfehlung */}
      <section id="empfehlung" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Fazit</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-6 tracking-tight">Empfehlung: Für welchen Typ welche Option?</h2>
          <div className="space-y-4 mb-8">
            {[
              {
                icon: "💶",
                title: "Cash — die richtige Wahl für 80 % der Investoren",
                desc: "Du hast 65.000–100.000 € freie Liquidität, einen Grenzsteuersatz von 35–45 % und willst das Investment einfach und steueroptimiert abwickeln. §7g macht Cash zum klaren Sieger.",
              },
              {
                icon: "🏦",
                title: "Kredit — sinnvoll nur in einem Fall",
                desc: "Du hast zwar Liquidität, aber noch höhere Renditemöglichkeiten mit dem Kapital (z.B. laufendes Unternehmenskapital mit 15 %+ Rendite). Dann lohnt ein Kredit als Hebel. Achtung: Komplexere Steuerplanung nötig.",
              },
              {
                icon: "📋",
                title: "Leasing — fast nie sinnvoll für Investments",
                desc: "Leasing macht Sinn für Betriebsmittel die man nutzen will, nicht für Investments. Da du als Leasingnehmer nicht Eigentümer wirst, entfallen IAB und Sonder-AfA vollständig.",
              },
            ].map((r) => (
              <div key={r.title} className="bg-white border border-gray-100 rounded-2xl p-5 flex gap-4">
                <span className="text-2xl flex-shrink-0">{r.icon}</span>
                <div>
                  <h3 className="font-black text-gray-900 text-[14px] mb-1">{r.title}</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/rechner/iab" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">
              IAB-Rechner →
            </Link>
            <Link href="/wissen/afa-abschreibung" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">
              §7g AfA-Guide →
            </Link>
            <Link href="/wissen/tiny-house-kaufen-checkliste" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">
              Kauf-Checkliste →
            </Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">
              ← Zurück zum Wissens-Hub
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: Tiny House finanzieren</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <p className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold mb-3">Bereit zum nächsten Schritt?</p>
            <h3 className="text-xl font-black mb-3">Investor-Paket & persönliche Beratung</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
              §7g-Analyse, Finanzierungsvergleich und unverbindliches Erstgespräch – kostenlos.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">
                🔐 Unterlagen anfordern →
              </ModalButton>
              <Link href="/marktplatz" className="border border-white/20 text-white hover:border-green-400 hover:text-green-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">
                Projekte ansehen →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
