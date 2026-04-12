import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "§7g AfA & Sonder-Abschreibung Tiny House: Steuer-Guide 2026 | TinyInvest",
  description:
    "Wie funktioniert die Abschreibung (AfA) eines Tiny Houses? IAB, Sonder-AfA (40 %), degressive AfA (30 %) und lineare AfA erklärt. Mit Rechenbeispielen und §7g EStG Anleitung.",
  keywords:
    "tiny house abschreibung, afa tiny house, §7g estg, sonder-afa tiny house, investitionsabzugsbetrag, tiny house steuer 2026",
  alternates: {
    canonical: "https://tinyhouse.investments/wissen/afa-abschreibung",
  },
  openGraph: {
    title: "§7g AfA & Sonder-Abschreibung Tiny House – Steuer-Guide 2026",
    description:
      "IAB, Sonder-AfA (40 %), degressive AfA (30 %): Wie du ein Tiny House im Kaufjahr zu 70 % abschreiben kannst.",
    url: "https://tinyhouse.investments/wissen/afa-abschreibung",
  },
};

const faqItems = [
  {
    question: "Wie lange schreibt man ein Tiny House steuerlich ab?",
    answer:
      "Ein Tiny House auf Vlemmix Trailer gilt als bewegliches Wirtschaftsgut. Die amtliche AfA-Nutzungsdauer beträgt üblicherweise 8 Jahre (lineare AfA von 12,5 % p.a.). In Kombination mit §7g Sonder-AfA (40 %) und degressiver AfA (30 %) ist das Wirtschaftsgut jedoch oft bereits nach 3–5 Jahren steuerlich vollständig abgeschrieben.",
  },
  {
    question: "Was ist der Unterschied zwischen IAB und Sonder-AfA?",
    answer:
      "Der Investitionsabzugsbetrag (IAB) ist ein Vorzieheffekt: Du setzt 50 % des geplanten Kaufpreises bereits im Jahr VOR dem Kauf als Betriebsausgabe ab (§7g Abs. 1 EStG). Die Sonder-AfA (40 %) greift dann im Kaufjahr selbst – zusätzlich zur regulären Jahres-AfA. Zusammen mit der degressiven AfA (30 %) kannst du im Kaufjahr bis zu 70 % des Restwerts (Kaufpreis minus IAB-Auflösung) abschreiben.",
  },
  {
    question: "Muss ich zwingend einen IAB bilden, um von der Sonder-AfA zu profitieren?",
    answer:
      "Nein. IAB und Sonder-AfA sind unabhängig voneinander. Du kannst direkt im Kaufjahr Sonder-AfA (40 %) + degressive AfA (30 %) = 70 % Sofortabschreibung in Anspruch nehmen, ohne vorher einen IAB gebildet zu haben. Der IAB ist dann sinnvoll, wenn du im Vorjahr einen sehr hohen Gewinn hattest und die Steuerlast zeitlich vorziehen möchtest.",
  },
  {
    question: "Gilt §7g nur für Unternehmer oder auch für Arbeitnehmer?",
    answer:
      "§7g EStG gilt für alle, die das Tiny House im Rahmen einer Einkunftsart (Vermietung und Verpachtung, Gewerbetrieb, Freiberufler) nutzen. Ein reiner Arbeitnehmer ohne betriebliche Nutzung kann §7g nicht direkt anwenden. Aber: Wer das Tiny House über tiny Escapes vermietet, erzielt Einkünfte aus Vermietung – und kann damit §7g anwenden, unabhängig vom Hauptberuf.",
  },
  {
    question: "Kann ich die Abschreibung auch rückwirkend geltend machen?",
    answer:
      "Den IAB kann dein Steuerberater unter Umständen noch rückwirkend für das Vorjahr bilden, sofern der Steuerbescheid noch nicht bestandskräftig ist. Die Sonder-AfA und degressive AfA gelten ab dem Jahr der Anschaffung. Eine Beratung durch deinen Steuerberater ist hier unverzichtbar.",
  },
];

export default function AfaAbschreibungPage() {
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
        id="faq-schema-afa"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700 transition-colors">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700 transition-colors">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">AfA & Abschreibung</span>
          </div>

          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Steuer-Guide · §7g EStG · 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            §7g AfA & Sonder-Abschreibung: Tiny House Steuer-Guide 2026
          </h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mb-6">
            Warum ein Tiny House steuerlich ein völlig anderes Tier ist als eine Immobilie –
            und wie du durch IAB, Sonder-AfA und degressive AfA bis zu 70 % deines Investments
            im Kaufjahr von der Steuer absetzen kannst.
          </p>

          {/* Photo strip */}
          <div className="grid grid-cols-3 gap-2 rounded-2xl overflow-hidden mb-6 h-36">
            <div className="overflow-hidden">
              <img src="/images/outside/ESCAPE1.webp" alt="Tiny House Außenansicht" className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden">
              <img src="/images/outside/ESCAPE2.webp" alt="Tiny House auf Vlemmix Trailer" className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden">
              <img src="/images/outside/winter.webp" alt="Tiny House im Winter" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-[11px]">
            {["§7g EStG", "Sonder-AfA 40 %", "Deg. AfA 30 %", "IAB 50 %", "Bewegliches Wirtschaftsgut"].map((tag) => (
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
              { anchor: "#grundlagen", label: "1. Grundlagen: Bewegliches vs. unbewegliches Gut" },
              { anchor: "#varianten", label: "2. Die 4 AfA-Varianten" },
              { anchor: "#iab", label: "3. IAB: Der Vorzieh-Trick" },
              { anchor: "#beispiel", label: "4. Beispielrechnung" },
              { anchor: "#faq", label: "5. FAQ" },
            ].map((item) => (
              <a key={item.anchor} href={item.anchor} className="text-[13px] text-green-700 hover:text-green-900 font-semibold transition-colors">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Section 1: Grundlagen */}
      <section id="grundlagen" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Grundlagen</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-6 tracking-tight">
            Warum ist das Tiny House kein Gebäude?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
              <h3 className="font-black text-gray-900 mb-3 text-base">🏢 Klassisches Gebäude (ETW)</h3>
              <ul className="space-y-2 text-[13px] text-gray-600">
                <li className="flex gap-2"><span className="text-red-400 flex-shrink-0">✗</span>Fest mit dem Boden verbunden</li>
                <li className="flex gap-2"><span className="text-red-400 flex-shrink-0">✗</span>2 % lineare AfA über 50 Jahre</li>
                <li className="flex gap-2"><span className="text-red-400 flex-shrink-0">✗</span>Kein IAB anwendbar</li>
                <li className="flex gap-2"><span className="text-red-400 flex-shrink-0">✗</span>Keine Sonder-AfA §7g</li>
                <li className="flex gap-2"><span className="text-red-400 flex-shrink-0">✗</span>Grunderwerbsteuer + Notarkosten</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
              <h3 className="font-black text-gray-900 mb-3 text-base">🚛 Tiny House auf Vlemmix Trailer</h3>
              <ul className="space-y-2 text-[13px] text-gray-600">
                <li className="flex gap-2"><span className="text-green-600 flex-shrink-0">✓</span>Bewegliches Wirtschaftsgut (VIN/FIN)</li>
                <li className="flex gap-2"><span className="text-green-600 flex-shrink-0">✓</span>AfA über 8 Jahre (12,5 % p.a.)</li>
                <li className="flex gap-2"><span className="text-green-600 flex-shrink-0">✓</span>IAB anwendbar (§7g Abs. 1)</li>
                <li className="flex gap-2"><span className="text-green-600 flex-shrink-0">✓</span>Sonder-AfA 40 % (§7g Abs. 5)</li>
                <li className="flex gap-2"><span className="text-green-600 flex-shrink-0">✓</span>Degressive AfA 30 % (§ 7 Abs. 2)</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
            <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-3">Der entscheidende Unterschied</p>
            <p className="text-[13px] text-gray-600 leading-relaxed">
              Der Vlemmix Trailer hat eine eigene <strong className="text-gray-900">Fahrzeug-Identifikationsnummer (VIN/FIN)</strong>,
              ist straßenzugelassen und nicht fest mit dem Boden verbunden. Damit gilt das gesamte
              Tiny House – Trailer plus Aufbauten – steuerrechtlich als <strong className="text-gray-900">bewegliches Wirtschaftsgut</strong>
              und nicht als Gebäude. Diese Klassifizierung öffnet alle §7g-Vorteile, die bei
              Immobilien schlicht nicht existieren.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Die 4 AfA-Varianten */}
      <section id="varianten" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Die Abschreibungs-Typen</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-8 tracking-tight">
            Die 4 AfA-Varianten für dein Tiny House
          </h2>

          <div className="space-y-5">
            {[
              {
                label: "Variante 1",
                badge: "Altes Recht",
                badgeColor: "bg-gray-100 text-gray-600",
                title: "Lineare AfA",
                subtitle: "12,5 % p.a. über 8 Jahre",
                icon: "📋",
                desc: "Die Basis-Abschreibung: Gleichmäßig 12,5 % des Kaufpreises pro Jahr über 8 Jahre. Ohne §7g-Kombination – der langsamste Weg. Heute kaum noch empfehlenswert.",
                table: [
                  { jahr: "Jahr 1", afa: "12.500 €", kumuliert: "12.500 €", highlight: false },
                  { jahr: "Jahr 2", afa: "12.500 €", kumuliert: "25.000 €", highlight: false },
                  { jahr: "Jahr 8", afa: "12.500 €", kumuliert: "100.000 €", highlight: false },
                ],
                result: { label: "3 Jahre kumuliert", value: "37,5 %", color: "text-gray-500" },
              },
              {
                label: "Variante 2",
                badge: "Empfohlen",
                badgeColor: "bg-green-100 text-green-700",
                title: "Sonder-AfA + Degressive AfA",
                subtitle: "40 % + 30 % im Kaufjahr = 70 % Sofortabschreibung",
                icon: "⚡",
                desc: "Die neue Power-Kombination ab 2023: Im Kaufjahr kannst du 40 % (Sonder-AfA §7g Abs. 5) plus 30 % (degressive AfA §7 Abs. 2) vom Buchwert abschreiben – macht 70 % im Jahr 1.",
                table: [
                  { jahr: "Jahr 1 (Kaufjahr)", afa: "70.000 €", kumuliert: "70.000 €", highlight: true },
                  { jahr: "Jahr 2", afa: "9.000 €", kumuliert: "79.000 €", highlight: false },
                  { jahr: "Jahr 3", afa: "6.300 €", kumuliert: "85.300 €", highlight: false },
                ],
                result: { label: "3 Jahre kumuliert", value: "85,3 %", color: "text-green-700" },
              },
              {
                label: "Variante 3",
                badge: "Maximum-Hebel",
                badgeColor: "bg-amber-100 text-amber-700",
                title: "IAB + Sonder-AfA + Degressive AfA",
                subtitle: "IAB im Vorjahr + voller Booster im Kaufjahr",
                icon: "🎯",
                desc: "Der maximale Steuer-Hebel: Bilde im Vorjahr den IAB (50 % des geplanten Kaufpreises als Steuerersparnis), löse ihn im Kaufjahr auf und kombiniere mit Sonder-AfA + degressiver AfA.",
                table: [
                  { jahr: "Vorjahr (IAB)", afa: "– 50.000 € Steuerbasis", kumuliert: "", highlight: false },
                  { jahr: "Kaufjahr", afa: "– 20.000 € Steuerbasis", kumuliert: "", highlight: true },
                  { jahr: "Jahr 2", afa: "– 9.000 € Steuerbasis", kumuliert: "", highlight: false },
                ],
                result: { label: "Gesamteffekt", value: "Max. Hebel", color: "text-amber-700" },
              },
            ].map((v) => (
              <div key={v.label} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{v.icon}</span>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${v.badgeColor}`}>{v.label}</span>
                      <span className="text-gray-400 text-[11px]">{v.badge}</span>
                    </div>
                  </div>
                  <h3 className="font-black text-gray-900 text-base mb-1">{v.title}</h3>
                  <p className="text-gray-400 text-[12px] mb-3">{v.subtitle}</p>
                  <p className="text-gray-500 text-[13px] leading-relaxed mb-5">{v.desc}</p>

                  <div className="space-y-1.5 mb-4">
                    {v.table.map((row) => (
                      <div
                        key={row.jahr}
                        className={`flex justify-between text-[12px] border-b border-gray-50 pb-1.5 ${row.highlight ? "text-green-700 font-semibold" : "text-gray-500"}`}
                      >
                        <span>{row.jahr}</span>
                        <span className="font-medium">{row.afa}</span>
                        {row.kumuliert && <span className="text-gray-400 font-data">∑ {row.kumuliert}</span>}
                      </div>
                    ))}
                  </div>

                  <div className={`inline-flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-2`}>
                    <span className="text-[10px] text-gray-400 uppercase font-bold">{v.result.label}</span>
                    <span className={`font-data font-black text-lg ${v.result.color}`}>{v.result.value}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: IAB erklärt */}
      <section id="iab" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Timing-Instrument</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-4 tracking-tight">
            Der IAB: Steuern ins Vorjahr verlagern
          </h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            Der Investitionsabzugsbetrag (§7g Abs. 1 EStG) ist kein Zuschuss – er ist ein
            Timing-Instrument. Du setzt die Kosten ab, bevor du das Geld ausgegeben hast.
          </p>

          <div className="relative mb-10">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-100 hidden md:block" />
            <div className="space-y-4">
              {[
                {
                  icon: "📋",
                  phase: "Vorjahr (z.B. 2025)",
                  title: "IAB bilden",
                  desc: "Dein Steuerberater trägt in der Steuererklärung 2025 einen IAB von 50 % des geplanten Kaufpreises ein. Bei 80.000 € Haus = 40.000 € IAB. Das reduziert deinen zu versteuernden Gewinn 2025 um 40.000 €. Bei 42 % Steuersatz: ~16.800 € Erstattung vom Finanzamt.",
                },
                {
                  icon: "🏠",
                  phase: "Kaufjahr (2026)",
                  title: "Haus kaufen & IAB auflösen",
                  desc: "Du kaufst das Tiny House. Der IAB wird aufgelöst (erhöht den Kaufpreis steuerlich wieder) – aber: Im selben Jahr greift die Sonder-AfA (40 %) + degressive AfA (30 %) auf den reduzierten Restwert. Per Saldo bleibt ein erheblicher Steuereffekt.",
                },
                {
                  icon: "💶",
                  phase: "Jahresende",
                  title: "Steuererklärung & Erstattung",
                  desc: "In der Steuererklärung 2026 werden alle AfA-Positionen geltend gemacht. Das Finanzamt erstattet – netto verbleibt deutlich weniger effektiver Kaufpreis. Ab jetzt fließen monatlich 40 % der Mieteinnahmen.",
                },
              ].map((step, i) => (
                <div key={i} className="relative flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white border-2 border-green-100 flex items-center justify-center text-2xl shadow-sm z-10">
                    {step.icon}
                  </div>
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 flex-grow">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-data text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full">{step.phase}</span>
                      <h3 className="font-black text-gray-900 text-[13px]">{step.title}</h3>
                    </div>
                    <p className="text-gray-500 text-[12px] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-green-700 rounded-2xl p-6 text-white">
            <p className="font-black text-base mb-2">🎯 Wann lohnt sich der IAB?</p>
            <p className="text-green-100 text-[13px] leading-relaxed">
              Der IAB lohnt sich besonders, wenn du im Vorjahr einen <strong className="text-white">ungewöhnlich hohen Gewinn</strong> hattest
              (Bonuszahlungen, Unternehmensverkauf, starkes Geschäftsjahr) und die Steuerprogression drücken möchtest.
              Ohne besondere Steuersituation im Vorjahr ist <strong className="text-white">Variante 2</strong> (Sonder-AfA + deg. AfA direkt im Kaufjahr)
              oft die einfachere und ebenso effektive Lösung.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Beispielrechnung */}
      <section id="beispiel" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Rechenbeispiel</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-8 tracking-tight">
            Konkrete Zahlen: 80.000 € Tiny House · 42 % Steuersatz
          </h2>

          <div className="bg-gray-900 rounded-2xl p-8 text-white mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                { label: "Kaufpreis", value: "80.000 €", sub: "Tiny House + Trailer" },
                { label: "Grenzsteuersatz", value: "42 %", sub: "Beispiel-Investor" },
                { label: "AfA-Nutzungsdauer", value: "8 Jahre", sub: "Bewegliches Wirtschaftsgut" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-gray-400 text-[10px] mb-1">{s.label}</p>
                  <p className="font-data text-xl font-black text-white">{s.value}</p>
                  <p className="text-gray-500 text-[10px] mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 text-[11px] text-gray-400 font-bold uppercase tracking-wider">Position</th>
                    <th className="text-right py-2 text-[11px] text-gray-400 font-bold uppercase tracking-wider">Absetzungsbetrag</th>
                    <th className="text-right py-2 text-[11px] text-gray-400 font-bold uppercase tracking-wider">Steuerersparnis (42 %)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { pos: "IAB (50 % × 80.000 €, Vorjahr)", betrag: "40.000 €", steuer: "16.800 €", highlight: false },
                    { pos: "Sonder-AfA 40 % (Kaufjahr)", betrag: "16.000 €", steuer: "6.720 €", highlight: false },
                    { pos: "Degressive AfA 30 % (Kaufjahr)", betrag: "24.000 €", steuer: "10.080 €", highlight: false },
                    { pos: "Gesamt Steuerersparnis", betrag: "80.000 €", steuer: "≈ 33.600 €", highlight: true },
                  ].map((row) => (
                    <tr key={row.pos} className={`${row.highlight ? "text-green-400 font-bold" : "text-gray-300"}`}>
                      <td className="py-3 text-[12px]">{row.pos}</td>
                      <td className="py-3 text-right font-data text-[12px]">{row.betrag}</td>
                      <td className="py-3 text-right font-data text-[12px]">{row.steuer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-gray-400 text-[10px] mb-1">Effektiver Netto-Investitionspreis</p>
                <p className="font-data text-xl font-black text-white">≈ 46.400 €</p>
                <p className="text-gray-500 text-[10px] mt-0.5">80.000 € minus ~33.600 € Steuerersparnis</p>
              </div>
              <div className="bg-green-600 rounded-xl p-4">
                <p className="text-green-200 text-[10px] mb-1">Rendite auf effektiven Einsatz</p>
                <p className="font-data text-xl font-black text-white">~18–22 % p.a.</p>
                <p className="text-green-300 text-[10px] mt-0.5">bei 720 €/Monat Mietauszahlung</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
            <p className="text-[10px] text-amber-700 font-bold uppercase tracking-widest mb-2">⚠ Wichtiger Hinweis</p>
            <p className="text-[12px] text-amber-800 leading-relaxed">
              Die genannten Steuerbeträge sind Beispielrechnungen und keine Steuerberatung. Die individuelle
              Steuerersparnis hängt von deinem persönlichen Grenzsteuersatz, der Einkunftsart und der
              konkreten steuerlichen Situation ab. Bitte konsultiere deinen Steuerberater, bevor du
              eine Investitionsentscheidung triffst.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/steuervorteil"
              className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all"
            >
              Interaktiver §7g-Rechner →
            </Link>
            <Link
              href="/wissen/kapitalanlage"
              className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all"
            >
              Tiny House als Kapitalanlage →
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

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Häufige Fragen</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-8 tracking-tight">FAQ: §7g AfA & Abschreibung</h2>

          <div className="space-y-4 mb-12">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-3">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <p className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold mb-3">Nächster Schritt</p>
            <h3 className="text-xl font-black mb-3">§7g-Analyse für deine Steuersituation</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
              Wir stellen dir das Steuer-Factsheet zusammen, das dein Steuerberater braucht – kostenlos und unverbindlich.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-sm">
                🔐 Steuer-Factsheet anfordern →
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
