import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Tiny House als Kapitalanlage: Rendite, Risiken & Chancen 2026 | TinyInvest",
  description:
    "Lohnt sich ein Tiny House als Kapitalanlage? Vergleich Tiny House vs. Eigentumswohnung, 3 Renditesäulen, Risiken und Chancen. Kompletter Guide für Investoren 2026.",
  keywords:
    "tiny house als kapitalanlage, tiny house investieren, tiny house rendite, ferienhaus als kapitalanlage, tiny house investment 2026",
  alternates: {
    canonical: "https://tinyhouse.investments/wissen/kapitalanlage",
  },
  openGraph: {
    title: "Tiny House als Kapitalanlage 2026 – Rendite, Risiken & Chancen",
    description:
      "Tiny House vs. ETW: Warum mobile Assets in 2026 die bessere Kapitalanlage sein könnten. Vergleich, Renditeanalyse und Investoren-Guide.",
    url: "https://tinyhouse.investments/wissen/kapitalanlage",
  },
};

const faqItems = [
  {
    question: "Ist ein Tiny House eine Immobilie oder ein bewegliches Wirtschaftsgut?",
    answer:
      "Ein Tiny House auf einem Vlemmix Trailer mit eigener Fahrzeug-Identifikationsnummer (VIN/FIN) gilt steuerrechtlich als bewegliches Wirtschaftsgut – nicht als Immobilie. Es ist nicht fest mit dem Boden verbunden, straßenzugelassen und damit vergleichbar mit einem Wohnmobil oder einer Maschine. Das ist der entscheidende Unterschied zur klassischen ETW: Statt 2 % linearer Gebäude-AfA über 50 Jahre profitierst du von §7g EStG (IAB), 40 % Sonder-AfA und 30 % degressiver AfA im Kaufjahr.",
  },
  {
    question: "Wie hoch ist die durchschnittliche Rendite bei einem Tiny House Investment?",
    answer:
      "Bei einem §7g-optimierten Tiny House über TinyInvest projizieren wir eine IRR (Internal Rate of Return) von 12–15 % p.a. über 5 Jahre. Der Investor erhält 40 % der Kurzzeitvermietungs-Einnahmen von tiny Escapes – bei 60 % Belegung und 100 €/Nacht sind das ca. 720 € netto pro Monat. Hinzu kommen Steuererstattungen im Jahr 1 von bis zu ~33.000 € (bei 80.000 € Investment und 42 % Grenzsteuersatz).",
  },
  {
    question: "Ab welchem Budget kann ich in ein Tiny House investieren?",
    answer:
      "Die Einstiegsschwelle beginnt bei 65.000 € für das Comfort-Modell. Das entspricht weniger als 15 % des durchschnittlichen Kaufpreises einer Eigentumswohnung in einer deutschen Großstadt. Mit dem IAB-Effekt (Steuererstattung von ca. 13.000–14.000 € im ersten Jahr bei 42 % Steuersatz) reduziert sich die effektive Liquiditätsbelastung auf ca. 51.000–52.000 €.",
  },
  {
    question: "Brauche ich ein Grundstück für das Investment?",
    answer:
      "Nein. TinyInvest vermittelt dir einen verifizierten Host und Standort über das tiny Escapes Netzwerk. Du kaufst das Haus – der Stellplatz wird durch den Host bereitgestellt. Das ist einer der größten Vorteile gegenüber klassischen Ferienimmobilien: kein Grundstückskauf, keine Grunderwerbsteuer, keine Notarkosten.",
  },
  {
    question: "Was passiert, wenn das Tiny House nicht vermietet ist?",
    answer:
      "Leerstands-Risiko ist ein echter Faktor. tiny Escapes bewirtschaftet die Objekte aktiv über Airbnb, Booking.com und eigene Kanäle und erreicht historisch 60–70 % Belegung. Im Worst Case (0 % Belegung) generiert das Haus trotzdem Steuervorteile durch AfA. Das Haus bleibt dein Eigentum und kann verkauft oder an einem neuen Standort betrieben werden.",
  },
];

const vergleichRows = [
  ["Einstiegspreis", "~300.000–500.000 €", "ab 65.000 €"],
  ["Kaufnebenkosten", "10–15 % (Notar, Makler, GrESt)", "~0 % (kein Grundstück, keine GrESt)"],
  ["Jährliche Mietrendite (brutto)", "3–5 % p.a.", "12–14 % IRR p.a."],
  ["Abschreibung", "2 % lineare Gebäude-AfA / 50 J.", "§7g: bis 70 % im Kaufjahr"],
  ["Flexibilität", "Keine – ortsgebunden", "Hoch – Standort wechselbar"],
  ["Instandhaltungsaufwand", "Mittel–Hoch", "Gering (Trailer, wartungsarm)"],
  ["Bewirtschaftung", "Selbst oder Hausverwaltung", "Vollautomatisch (tiny Escapes)"],
  ["Liquidierbarkeit", "Schwer (Monate–Jahre)", "Leichter (Wiederverkauf oder Standortwechsel)"],
  ["Netto-Kapitaleinsatz", "60.000–100.000 € EK + Kredit nötig", "ab ~51.000 € (nach IAB-Erstattung)"],
  ["Zeitaufwand für Investor", "20–50 Std./Jahr (Mieter, Verwaltung)", "~0 Std. – vollautomatisch"],
  ["Diversifikation", "Eine konzentrierte Investition", "Mehrere Assets ab 65.000 € möglich"],
  ["Mietrecht", "Volles Mieterschutzrecht (Kündigungsschutz)", "Kein Mietrecht – Kurzzeitvermietung"],
  ["Break-even", "~12–15 Jahre", "~3–5 Jahre (inkl. Steuereffekte)"],
];

export default function KapitalanlagePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="bg-white min-h-screen">
      <Navbar variant="sub" />

      {/* JSON-LD FAQ Schema */}
      <Script
        id="faq-schema-kapitalanlage"
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
            <span className="text-green-700 font-semibold">Kapitalanlage</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Investor-Guide · 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Tiny House als Kapitalanlage: Rendite, Risiken & Chancen 2026
          </h1>
          {/* Trust sentence */}
          <div className="bg-green-700 rounded-2xl px-6 py-4 mb-5">
            <p className="text-white font-bold text-[14px] leading-relaxed">
              🏠 Du kaufst ein physisches Asset – nicht einen Fondsanteil. TinyInvest-Investoren halten die Übereignungsurkunde für ein reales Tiny House auf ihren Namen.
            </p>
          </div>

          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mb-6">
            Warum immer mehr Investoren auf mobile Assets setzen – statt auf überteuerte Eigentumswohnungen.
            Dieser Guide zeigt dir, wie das Modell funktioniert, was es wirklich einbringt und wo die Risiken liegen.
          </p>
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["§7g-optimiert", "Vollvermietet durch tiny Escapes", "Ab 65.000 €", "12–14 % IRR p.a."].map((tag) => (
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
              { anchor: "#vergleich", label: "1. Tiny House vs. ETW" },
              { anchor: "#rendite", label: "2. Die 3 Renditesäulen" },
              { anchor: "#zahlen", label: "3. Zahlen & Beispiele" },
              { anchor: "#risiken", label: "4. Risiken & Transparenz" },
              { anchor: "#fazit", label: "5. Fazit" },
              { anchor: "#faq", label: "6. FAQ" },
            ].map((item) => (
              <a
                key={item.anchor}
                href={item.anchor}
                className="text-[13px] text-green-700 hover:text-green-900 font-semibold transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Section 1: Vergleich */}
      <section id="vergleich" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Vergleich</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-4 tracking-tight">
            Tiny House vs. Eigentumswohnung (ETW)
          </h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            Die größte Einstiegshürde bei Immobilien ist nicht der Kaufpreis – es sind die Kaufnebenkosten.
            Eine 70 m² Wohnung in München kostet 500.000 €. Allein Notar, Makler und Grunderwerbsteuer
            verschlingen 50.000–75.000 € – bevor du einen einzigen Euro tilgst. Ein Tiny House startet
            ab 65.000 € – inklusive allem.
          </p>

          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 font-semibold text-gray-500 text-[12px]">Merkmal</th>
                    <th className="p-4 font-semibold text-gray-500 text-[12px] text-center">Klassische ETW</th>
                    <th className="p-4 font-black text-green-700 text-[12px] text-center bg-green-50">Tiny House (TinyInvest)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {vergleichRows.map(([merkmal, etw, tiny]) => (
                    <tr key={merkmal} className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 font-medium text-gray-700 text-[13px]">{merkmal}</td>
                      <td className="p-4 text-center text-[13px] text-gray-500">{etw}</td>
                      <td className="p-4 text-center text-[13px] font-bold text-green-700 bg-green-50/50">{tiny}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-green-700 rounded-2xl p-6 text-white">
            <p className="text-base font-black mb-3">💡 Die härteste Immobilienwahrheit Deutschlands:</p>
            <p className="text-green-100 text-[14px] leading-relaxed mb-4">
              Eine 70 m² Wohnung in Berlin kostet ~440.000 €. Davon gehen <strong className="text-white">~44.000 € direkt an Notar, Makler und Finanzamt</strong> — noch bevor du einen Euro tilgst. Das ist mehr als der halbe Kaufpreis eines vollwertigen TinyInvest Comfort (65.000 €).
            </p>
            <p className="text-white font-bold text-[14px]">
              → Mit TinyInvest kaufst du ein vollständiges Haus zum Preis der Kaufnebenkosten einer Berliner Wohnung.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Die 3 Renditesäulen */}
      <section id="rendite" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Renditesäulen</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-4 tracking-tight">
            Die 3 Säulen der Tiny House Rendite
          </h2>
          <p className="text-gray-500 text-sm mb-10 leading-relaxed">
            Was ein Tiny House zur überlegenen Kapitalanlage macht, ist nicht eine einzelne Eigenschaft –
            sondern das Zusammenspiel von drei unabhängigen Renditequellen.
          </p>

          <div className="space-y-6">
            {[
              {
                num: "01",
                title: "Kurzzeitvermietung über tiny Escapes",
                icon: "🏕️",
                color: "border-green-200 bg-white",
                content: [
                  "Das Tiny House wird über das tiny Escapes Netzwerk auf Airbnb, Booking.com und eigenen Kanälen vermietet.",
                  "Der Investor erhält 40 % der Netto-Einnahmen monatlich ausgezahlt.",
                  "Bei 60 % Belegung und 100 €/Nacht: 1.800 € Umsatz/Monat → 720 € Netto an den Investor.",
                  "Kein eigener Aufwand: Host übernimmt Reinigung, Check-in, Kommunikation.",
                ],
                kpi: { label: "Investor-Anteil", value: "40 %" },
              },
              {
                num: "02",
                title: "Niedrige Einstiegshürde + hohe Eigenkapitalrendite",
                icon: "📊",
                color: "border-blue-100 bg-white",
                content: [
                  "Bei einem 65.000 € Haus (Comfort) und 720 €/Monat Auszahlung ergibt sich eine Cash-on-Cash-Rendite von ~13 % p.a.",
                  "Zum Vergleich: Eine ETW mit 4 % Mietrendite brutto benötigt 500.000 € Kapital – und gibt dir nur 20.000 € p.a. zurück.",
                  "Wer 3 Tiny Houses statt einer ETW kauft, verteilt Risiko UND verdient mehr.",
                ],
                kpi: { label: "Cash-on-Cash Rendite", value: "~13 % p.a." },
              },
              {
                num: "03",
                title: "§7g Steuereffekt – der unsichtbare Renditebooster",
                icon: "🏛️",
                color: "border-amber-100 bg-white",
                content: [
                  "Da Tiny Houses bewegliche Wirtschaftsgüter sind, greift §7g EStG: IAB (50 % im Vorjahr), Sonder-AfA (40 %) + degressive AfA (30 %) im Kaufjahr.",
                  "Bei 80.000 € Investment und 42 % Steuersatz: bis zu ~33.000 € Liquiditätsvorteil im Jahr 1.",
                  "Der Netto-Einsatz reduziert sich von 80.000 € auf ~47.000 € – bei gleicher Rendite auf die Einnahmen.",
                ],
                kpi: { label: "Liquiditätsvorteil Jahr 1", value: "≈ 33.000 €" },
              },
            ].map((item) => (
              <div key={item.num} className={`rounded-2xl border-2 ${item.color} p-7`}>
                <div className="flex items-start gap-5">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-black text-white flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #2d6a4f, #52b788)" }}
                  >
                    {item.num}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{item.icon}</span>
                      <h3 className="text-base font-black text-gray-900">{item.title}</h3>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {item.content.map((point, i) => (
                        <li key={i} className="flex gap-2 text-[13px] text-gray-600">
                          <span className="text-green-600 flex-shrink-0 mt-0.5">→</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-xl px-4 py-2">
                      <span className="text-[10px] text-gray-400 uppercase font-bold">{item.kpi.label}</span>
                      <span className="font-data font-black text-green-700 text-lg">{item.kpi.value}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Zahlen & Beispiele */}
      <section id="zahlen" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Rechenbeispiel</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-8 tracking-tight">
            Das 5-Jahres-Modell: 80.000 € Investment
          </h2>

          <div className="bg-gray-900 rounded-2xl p-8 text-white mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-green-400 font-bold mb-4 text-[11px] uppercase tracking-wider">Jährliche Cashflows</h4>
                <div className="space-y-2.5">
                  {[
                    { label: "Mietauszahlung (40 % × 1.800 €/Mon × 12)", value: "8.640 €", bold: false },
                    { label: "IAB-Erstattung (Vorjahr, einmalig)", value: "+ 16.800 €", bold: false },
                    { label: "Sonder-AfA + deg. AfA (Jahr 1)", value: "+ 7.728 €", bold: false },
                    { label: "Gesamt Liquidität Jahr 1", value: "≈ 33.168 €", bold: true },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className={`flex justify-between py-2 border-b border-white/10 ${row.bold ? "text-green-400 font-bold text-base" : "text-gray-300 text-[13px]"}`}
                    >
                      <span>{row.label}</span>
                      <span className="font-data">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-green-400 font-bold mb-4 text-[11px] uppercase tracking-wider">5-Jahres-Saldo</h4>
                <div className="space-y-2.5">
                  {[
                    { label: "Investition", value: "– 80.000 €", bold: false },
                    { label: "Mieteinnahmen (5 J. × 8.640 €)", value: "+ 43.200 €", bold: false },
                    { label: "Steuereffekte Gesamt", value: "+ 33.168 €", bold: false },
                    { label: "Netto-Ergebnis nach 5 Jahren", value: "≈ – 3.632 €", bold: true },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className={`flex justify-between py-2 border-b border-white/10 ${row.bold ? "text-green-400 font-bold text-base" : "text-gray-300 text-[13px]"}`}
                    >
                      <span>{row.label}</span>
                      <span className="font-data">{row.value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-gray-500 mt-3">
                  * Nach 5 Jahren ist das Haus ~60.000 € wert und weiterhin rentabel.
                  Der effektive IRR liegt bei 12–15 % p.a.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 rounded-2xl p-5">
                <p className="text-gray-400 text-[10px] mb-1">Investiert</p>
                <p className="font-data text-2xl font-black text-white">80.000 €</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-5">
                <p className="text-gray-400 text-[10px] mb-1">Effektiv nach IAB</p>
                <p className="font-data text-2xl font-black text-green-400">≈ 63.200 €</p>
              </div>
              <div className="bg-green-600 rounded-2xl p-5">
                <p className="text-green-200 text-[10px] mb-1">IRR p.a.</p>
                <p className="font-data text-2xl font-black text-white">12–15 %</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
            <p className="text-[10px] text-amber-700 font-bold uppercase tracking-widest mb-2">⚠ Hinweis</p>
            <p className="text-[12px] text-amber-800 leading-relaxed">
              Alle Zahlen sind Projektionen auf Basis historischer Belegungsdaten. Der IAB ist einmalig und
              setzt voraus, dass dein Steuerberater ihn im Vorjahr bildet. Renditeangaben stellen keine
              Garantie dar. Bitte konsultiere einen unabhängigen Steuerberater.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Risiken */}
      <section id="risiken" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Transparenz</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-4 tracking-tight">
            Risiken – vollständig und ehrlich
          </h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            Kein Investment ist risikofrei. Wir nennen die echten Risiken – damit du eine fundierte Entscheidung treffen kannst.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                icon: "📉",
                title: "Leerstandsrisiko",
                desc: "Belegungsquoten können schwanken. Wirtschaftliche Abschwünge, schlechte Bewertungen oder Standortprobleme können die Einnahmen senken. Diversifikation auf mehrere Standorte reduziert dieses Risiko.",
              },
              {
                icon: "⚖️",
                title: "Steuerrechtsänderungen",
                desc: "§7g EStG und die Sonder-AfA können vom Gesetzgeber geändert werden. Die aktuelle Förderung gilt bis auf Weiteres – eine langfristige Garantie gibt es nicht.",
              },
              {
                icon: "🔧",
                title: "Instandhaltung & Verschleiß",
                desc: "Tiny Houses sind wartungsärmer als Immobilien, aber nicht wartungsfrei. Dach, Technik und Außenhülle unterliegen normalem Verschleiß. Im Modell sind Rücklagen einkalkuliert.",
              },
              {
                icon: "🚛",
                title: "Partnerrisiko tiny Escapes",
                desc: "Die Rendite hängt vom Betrieb durch tiny Escapes ab. Ein Ausfall oder Qualitätsprobleme des Betreibers würden das Einnahmenmodell direkt beeinflussen.",
              },
              {
                icon: "📋",
                title: "Genehmigungsrisiko",
                desc: "Stellplätze für Tiny Houses unterliegen Baurecht und Stellplatzverordnungen. Standorte im EU-Ausland haben andere Regelungen als Deutschland.",
              },
              {
                icon: "💱",
                title: "Marktpreis-Risiko",
                desc: "Der Wiederverkaufswert eines gebrauchten Tiny Houses ist schwerer einzuschätzen als bei Immobilien. Es gibt noch keinen etablierten Sekundärmarkt.",
              },
            ].map((risk) => (
              <div key={risk.title} className="bg-white border border-gray-100 rounded-2xl p-5">
                <div className="flex gap-3 mb-2">
                  <span className="text-2xl flex-shrink-0">{risk.icon}</span>
                  <h3 className="font-black text-gray-900 text-[14px] mt-1">{risk.title}</h3>
                </div>
                <p className="text-gray-500 text-[13px] leading-relaxed">{risk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Fazit */}
      <section id="fazit" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Fazit</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-6 tracking-tight">
            Lohnt sich ein Tiny House als Kapitalanlage 2026?
          </h2>

          <div className="prose prose-sm max-w-none text-gray-600 space-y-4 mb-8">
            <p className="text-[14px] leading-relaxed">
              <strong className="text-gray-900">Ja – für den richtigen Investor-Typ.</strong> Ein Tiny House
              als Kapitalanlage eignet sich besonders für Steuerpflichtige mit mittlerem bis hohem Einkommen,
              die von §7g profitieren können, und die passives Einkommen ohne operativen Aufwand suchen.
            </p>
            <p className="text-[14px] leading-relaxed">
              Der kombinierte Effekt aus 40 % Mietauszahlung, hoher AfA-Abschreibung und niedrigem Einstiegspreis
              macht das Modell gegenüber klassischen Ferienimmobilien strukturell überlegen – wenn der Betreiber
              (tiny Escapes) zuverlässig hohe Belegungsquoten liefert.
            </p>
            <p className="text-[14px] leading-relaxed">
              <strong className="text-gray-900">Nicht geeignet für:</strong> Anleger die maximale Sicherheit
              suchen, keine steuerliche Optimierungsmöglichkeit haben oder das Kapital kurzfristig benötigen.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/wissen/afa-abschreibung"
              className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all"
            >
              §7g AfA im Detail →
            </Link>
            <Link
              href="/renditemodell"
              className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all"
            >
              Vollständiges Renditemodell →
            </Link>
            <Link
              href="/wissen/passive-einnahmen-immobilien"
              className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all"
            >
              Passive Einnahmen im Vergleich →
            </Link>
            <Link
              href="/wissen/ferienimmobilie-steuer"
              className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all"
            >
              Ferienimmobilien vs. Tiny House →
            </Link>
            <Link
              href="/wissen"
              className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all"
            >
              ← Zurück zum Wissens-Hub
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: FAQ */}
      <section id="faq" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Häufige Fragen</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-8 tracking-tight">FAQ: Tiny House als Kapitalanlage</h2>

          <div className="space-y-4 mb-12">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-3">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <p className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold mb-3">Bereit für den nächsten Schritt?</p>
            <h3 className="text-xl font-black mb-3">Investor-Paket & persönliche Beratung</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
              §7g-Analyse für deine Steuersituation, Asset-Kennzahlen und ein unverbindliches Erstgespräch.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-sm">
                🔐 Unterlagen anfordern →
              </ModalButton>
              <Link
                href="/marktplatz"
                className="border border-white/20 text-white hover:border-green-400 hover:text-green-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all"
              >
                Aktuelle Projekte ansehen →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
