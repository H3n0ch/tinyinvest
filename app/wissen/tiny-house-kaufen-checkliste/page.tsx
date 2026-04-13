import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Tiny House kaufen: Die Checkliste für Investoren 2026 | TinyInvest",
  description:
    "Schritt-für-Schritt Checkliste für den Tiny House Kauf als Kapitalanlage. Von der Steuerprüfung bis zum ersten Cashflow – alles was Investoren wissen müssen.",
  keywords:
    "tiny house kaufen checkliste, tiny house investment checkliste, tiny house kaufen worauf achten, tiny house kapitalanlage checkliste 2026",
  alternates: {
    canonical: "https://tinyhouse.investments/wissen/tiny-house-kaufen-checkliste",
  },
  openGraph: {
    title: "Tiny House kaufen: Die Investor-Checkliste 2026 | TinyInvest",
    description: "Von Steuerprüfung bis erstem Cashflow – die vollständige Checkliste für Tiny House Investoren.",
    url: "https://tinyhouse.investments/wissen/tiny-house-kaufen-checkliste",
  },
};

const checklistItems = [
  {
    phase: "Phase 1: Steuervorbereitung",
    icon: "🏛️",
    color: "border-amber-100 bg-amber-50/30",
    items: [
      { check: "Grenzsteuersatz ermitteln (≥35 % für optimalen §7g-Effekt)", important: true },
      { check: "Steuerberater konsultieren – §7g-Strategie festlegen (mit oder ohne IAB)", important: true },
      { check: "Falls IAB: Im Vorjahr bilden (Steuererklärung!)", important: false },
      { check: "Einkunftsart klären: Vermietung & Verpachtung oder Gewerbebetrieb", important: false },
      { check: "Liquidität für Kaufpreis + Puffer bereitstellen", important: false },
    ],
  },
  {
    phase: "Phase 2: Auswahl & Beratung",
    icon: "🔍",
    color: "border-blue-100 bg-blue-50/30",
    items: [
      { check: "Modell wählen: Comfort (65.000 €) oder Premium (ab 80.000 €)", important: true },
      { check: "Investor-Unterlagen anfordern (Rendite-Prognose, §7g-Factsheet)", important: false },
      { check: "Standort besprechen: Deutschland, Österreich, Schweiz", important: false },
      { check: "Rendite-Rechner nutzen: /rechner/rendite", important: false },
      { check: "Referenzstandorte prüfen oder besuchen", important: false },
    ],
  },
  {
    phase: "Phase 3: Kauf & Übereignung",
    icon: "📝",
    color: "border-green-100 bg-green-50/30",
    items: [
      { check: "Kaufvertrag prüfen: Eigentumsübergang auf deinen Namen", important: true },
      { check: "VIN/FIN des Vlemmix Trailers dokumentieren", important: true },
      { check: "Betreibervertrag mit tiny Escapes unterzeichnen", important: false },
      { check: "Host-Standort bestätigen und Aufstelltermin vereinbaren", important: false },
      { check: "Steuerberater über Kaufdatum informieren (AfA-Start)", important: false },
    ],
  },
  {
    phase: "Phase 4: Betrieb & Cashflow",
    icon: "💶",
    color: "border-purple-100 bg-purple-50/30",
    items: [
      { check: "Monatliche Mietauszahlung einrichten (40 % Investor-Anteil)", important: true },
      { check: "Buchhaltung: Separate Einnahmen-Überschuss-Rechnung führen", important: false },
      { check: "Belegungsquote monatlich monitoren", important: false },
      { check: "§7g AfA in Steuererklärung geltend machen", important: true },
      { check: "IAB auflösen (falls im Vorjahr gebildet)", important: false },
    ],
  },
];

const faqItems = [
  {
    question: "Wie lange dauert es vom Kauf bis zum ersten Cashflow?",
    answer:
      "Bei TinyInvest typischerweise 4–8 Wochen: Kaufvertrag → Übereignung → Aufstellung → Listing auf Buchungsplattformen → erste Buchungen. Die ersten Mietauszahlungen erfolgen im Folgemonat nach den ersten Buchungen.",
  },
  {
    question: "Muss ich als Investor persönlich anwesend sein?",
    answer:
      "Nein. Der gesamte Prozess läuft volldigital: Kaufvertrag per DocuSign, Übergabe ohne physische Anwesenheit, Betrieb durch tiny Escapes. Du erhältst monatliche Abrechnungen und Auszahlungen per Überweisung.",
  },
  {
    question: "Welche laufenden Kosten habe ich als Investor?",
    answer:
      "Die laufenden Kosten sind minimal: tiny Escapes übernimmt Betrieb, Reinigung und Kommunikation im Rahmen des Betreibermodells (60 % der Einnahmen). Als Investor trägst du Versicherungskosten (ca. 300–500 €/Jahr) und eventuelle Rücklagenbildung für Wartung. Es gibt keine Hausverwaltungsgebühren.",
  },
  {
    question: "Was passiert, wenn ich das Tiny House wieder verkaufen möchte?",
    answer:
      "Das Tiny House gehört dir – du kannst es jederzeit verkaufen. Der Wiederverkauf ist einfacher als bei Immobilien: kein Notar, kein Grundbuch, keine Spekulationsfrist wie bei Grundstücken. Nach der 10-jährigen Haltefrist ist der Verkaufserlös aus beweglichen Wirtschaftsgütern steuerfrei.",
  },
];

export default function ChecklistePage() {
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
      <Script id="faq-schema-checkliste" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Checkliste</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Investor-Checkliste · 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Tiny House kaufen: Die vollständige Checkliste für Investoren
          </h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
            Von der §7g-Steuervorbereitung bis zum ersten Cashflow – alle 20 Punkte, die Investoren vor, während und nach dem Tiny House Kauf kennen müssen.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "21/9" }}>
            <img src="/images/outside/DSC08974.webp" alt="Tiny House Kaufprozess – Investor-Checkliste" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["4 Phasen", "20 Checkpunkte", "§7g-Vorbereitung", "Cashflow-Start", "4–8 Wochen"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Wer schon einmal eine Eigentumswohnung gekauft hat, kennt das Prozedere: Monate vergehen mit Besichtigungen, Finanzierungsanfragen, Notarterminen und Grundbucheintragungen. Ein Tiny House als Investment funktioniert anders. Der Prozess ist schlanker, digitaler und deutlich schneller – von der ersten Anfrage bis zum ersten Cashflow vergehen typisch vier bis acht Wochen.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Das bedeutet nicht, dass Sorgfalt keine Rolle spielt. Im Gegenteil: Die richtigen Schritte in der richtigen Reihenfolge machen den Unterschied zwischen einem steuerlich optimierten Investment und einer verpassten Gelegenheit. Besonders der §7g-Investitionsabzugsbetrag hat strikte Fristen – wer ihn verpasst, verliert den wertvollsten Steuereffekt des ersten Jahres.
            </p>
          </div>

          <div className="space-y-8 mb-12">
            {checklistItems.map((phase) => (
              <div key={phase.phase} className={`rounded-2xl border-2 ${phase.color} p-7`}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{phase.icon}</span>
                  <h2 className="text-base font-black text-gray-900">{phase.phase}</h2>
                </div>
                <div className="space-y-3">
                  {phase.items.map((item) => (
                    <div key={item.check} className="flex items-start gap-3 bg-white/60 rounded-xl px-4 py-3">
                      <div className={`w-5 h-5 rounded border-2 shrink-0 mt-0.5 ${item.important ? "border-green-500 bg-green-50" : "border-gray-200"}`} />
                      <p className={`text-[13px] leading-relaxed ${item.important ? "text-gray-900 font-semibold" : "text-gray-600"}`}>
                        {item.check}
                        {item.important && <span className="ml-2 text-[10px] text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded-full">Wichtig</span>}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden mb-12" style={{ aspectRatio: "16/7" }}>
            <img src="/images/inside/DSC08893.webp" alt="Tiny House Innenraum modern" className="w-full h-full object-cover" />
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 text-white mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                { value: "4–8 Wo.", label: "Kauf bis erster Cashflow" },
                { value: "0 Std.", label: "Aufwand pro Monat" },
                { value: "12–14 %", label: "IRR p.a. projiziert" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-data text-2xl font-black text-green-400">{s.value}</p>
                  <p className="text-[11px] text-gray-400 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden mb-10" style={{ aspectRatio: "16/7" }}>
            <img src="/images/outside/green.webp" alt="Tiny House im Grünen" className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/rechner/rendite" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Rendite berechnen →</Link>
            <Link href="/wissen/tiny-house-finanzierung" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Finanzierungs-Guide →</Link>
            <Link href="/wissen/steuerberater-finden" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Steuerberater finden →</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">← Wissens-Hub</Link>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: Tiny House kaufen</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-black mb-3">Bereit? Starte jetzt.</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">Investor-Paket anfordern – §7g-Analyse, Renditeprognose und Beratung in einem.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">🔐 Jetzt starten →</ModalButton>
              <Link href="/marktplatz" className="border border-white/20 text-white hover:border-green-400 hover:text-green-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">Projekte ansehen →</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
