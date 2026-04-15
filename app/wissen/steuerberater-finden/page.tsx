import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "§7g-Steuerberater finden: Tiny House Investment 2026 | TinyInvest",
  description:
    "Wie findest du einen Steuerberater, der IAB und Sonder-AfA bei Tiny Houses kennt? Checkliste, Fragen für das Erstgespräch und was du mitbringen musst.",
  keywords:
    "steuerberater §7g, steuerberater tiny house, iab steuerberater finden, sonder-afa steuerberater, tiny house investment steuerberatung",
  alternates: {
    canonical: "https://tinyhouse.investments/wissen/steuerberater-finden",
  },
  openGraph: {
    title: "§7g-Steuerberater finden – Checkliste für Tiny House Investoren",
    description: "Nicht jeder Steuerberater kennt §7g EStG und IAB. So findest du den richtigen – mit Checkliste und konkreten Fragen.",
    url: "https://tinyhouse.investments/wissen/steuerberater-finden",
  },
};

const faqItems = [
  {
    question: "Wie finde ich einen §7g-Spezialisten in meiner Nähe?",
    answer: "Starte mit steuerberatersuche.de und filtere nach 'Gewerbe' und 'Abschreibungen'. Frage gezielt nach Erfahrung mit IAB bei beweglichen Wirtschaftsgütern. TinyInvest vermittelt auf Wunsch direkt an geprüfte Steuerberater aus unserem Netzwerk.",
  },
  {
    question: "Was kostet ein Steuerberater für ein Tiny House Investment?",
    answer: "Typisch: 1.500–3.500 € p.a. für ein vollständiges Mandat inklusive gewerblicher Einnahmen-Überschuss-Rechnung, §7g-Optimierung und Steuererklärung. Die Kosten amortisieren sich durch die Mehrersparnis in der Regel innerhalb weniger Wochen.",
  },
  {
    question: "Muss mein Steuerberater in meiner Nähe sein?",
    answer: "Nein. Viele spezialisierte Kanzleien arbeiten volldigital. Unterlagen können per Datev-Upload oder gesichertem Portal übermittelt werden. Wichtiger als die Nähe ist die Spezialisierung auf bewegliche Wirtschaftsgüter und §7g EStG.",
  },
  {
    question: "Was passiert, wenn mein Steuerberater §7g falsch anwendet?",
    answer: "Falsche IAB-Bildung oder verpasste Sonder-AfA-Kombinationen können 5.000–15.000 € an entgangenen Steuererstattungen bedeuten. Im schlimmsten Fall kann das Finanzamt den IAB rückgängig machen, wenn die Verwendungsbedingungen nicht erfüllt wurden. Ein Spezialist verhindert diese Fehler.",
  },
];

export default function SteuerberaterFindenPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "§7g-Steuerberater finden: Tiny House Investment 2026",
    "description": "Wie findest du einen Steuerberater, der IAB und Sonder-AfA bei Tiny Houses kennt? Checkliste, Fragen für das Erstgespräch und was du mitbringen musst.",
    "url": "https://tinyhouse.investments/wissen/steuerberater-finden",
    "datePublished": "2026-04-14",
    "dateModified": "2026-04-14",
    "author": { "@type": "Organization", "name": "TinyInvest", "url": "https://tinyhouse.investments" },
    "publisher": { "@type": "Organization", "name": "TinyInvest", "logo": { "@type": "ImageObject", "url": "https://tinyhouse.investments/logo1.png" } },
    "image": { "@type": "ImageObject", "url": "https://tinyhouse.investments/images/inside/tiny-house-innen-steuerberatung.webp" },
  };

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
      <Script id="faq-schema-steuerberater" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema-steuerberater" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Steuerberater finden</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Steuerberatung · §7g EStG · Praxis-Guide</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Den richtigen §7g-Steuerberater finden: Checkliste 2026
          </h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
            Nicht jeder Steuerberater kennt §7g EStG bei beweglichen Wirtschaftsgütern. Dieser Guide hilft dir, den richtigen zu finden – und was du im Erstgespräch fragen solltest.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "21/9" }}>
            <img src="/images/inside/tiny-house-innen-steuerberatung.webp" alt="Steuerberatung Tiny House Investment §7g" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["§7g EStG", "IAB", "Sonder-AfA", "Bewegliche Wirtschaftsgüter", "Steueroptimierung"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              §7g EStG ist das mächtigste Steuerinstrument für Investoren in bewegliche Wirtschaftsgüter – und das am häufigsten falsch angewendete. Nicht weil das Gesetz kompliziert wäre, sondern weil die Kombination aus Investitionsabzugsbetrag, Sonder-AfA (40 %) und degressiver AfA (30 %) in der richtigen Reihenfolge und zum richtigen Zeitpunkt angewendet werden muss.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Viele Steuerberater kennen §7g grundsätzlich – haben ihn aber meist im Kontext von Betriebsmaschinen oder Fahrzeugen angewendet, nicht bei Ferienimmobilien. Ein Tiny House auf Vlemmix Trailer ist für viele Berater Neuland. Und Neuland kostet den Mandanten bares Geld: Ein falsch gesetzter IAB oder eine verpasste Sonder-AfA-Kombination bedeuten 5.000 bis 15.000 Euro an entgangenen Steuererstattungen.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Warum der Steuerberater entscheidend ist</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
              <h3 className="font-black text-gray-900 mb-3 text-sm">❌ Was passieren kann ohne Spezialist</h3>
              <ul className="space-y-2 text-[13px] text-gray-600">
                <li className="flex gap-2"><span className="text-red-400">→</span>IAB wird nicht rechtzeitig gebildet (Deadline verpasst)</li>
                <li className="flex gap-2"><span className="text-red-400">→</span>Falsche AfA-Nutzungsdauer angesetzt (zu lang)</li>
                <li className="flex gap-2"><span className="text-red-400">→</span>Sonder-AfA wird nicht kombiniert → Tausende € verloren</li>
                <li className="flex gap-2"><span className="text-red-400">→</span>Gewerbliche Prägung nicht dokumentiert → §7g versagt</li>
                <li className="flex gap-2"><span className="text-red-400">→</span>Degressive AfA übersehen (neu ab 2025)</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
              <h3 className="font-black text-gray-900 mb-3 text-sm">✓ Was ein guter Spezialist liefert</h3>
              <ul className="space-y-2 text-[13px] text-gray-600">
                <li className="flex gap-2"><span className="text-green-600">→</span>Optimales Timing von IAB (wann bilden, wann auflösen)</li>
                <li className="flex gap-2"><span className="text-green-600">→</span>Korrekte AfA-Kaskade (Sonder-AfA + deg. AfA + linear)</li>
                <li className="flex gap-2"><span className="text-green-600">→</span>Maximale Steuerlast-Reduzierung im Kaufjahr</li>
                <li className="flex gap-2"><span className="text-green-600">→</span>Gewerbliche Dokumentation für Finanzamt</li>
                <li className="flex gap-2"><span className="text-green-600">→</span>Begleitung bei Betriebsprüfungen</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden mb-12" style={{ aspectRatio: "16/7" }}>
            <img src="/images/outside/tiny-house-escape-wald.webp" alt="Tiny House Investment – Steueroptimierung" className="w-full h-full object-cover" />
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Diese 7 Fragen musst du im Erstgespräch stellen</h2>
          <div className="space-y-4 mb-12">
            {[
              { nr: "01", frage: "Haben Sie Erfahrung mit §7g EStG bei beweglichen Wirtschaftsgütern?", erwartung: "Sofortige Bejahung + Verweis auf Praxisbeispiele. Keine langen Pausen.", ampel: "green" },
              { nr: "02", frage: "Wie optimieren Sie die Kombination aus IAB, Sonder-AfA und degressiver AfA?", erwartung: "Der Berater erklärt das Timing: IAB im Vorjahr bei hohem Gewinn, Auflösung im Kaufjahr, dann Sonder-AfA 40 % + deg. AfA 30 % auf Restwert.", ampel: "green" },
              { nr: "03", frage: "Was ist die AfA-Nutzungsdauer für ein Tiny House auf Vlemmix Trailer?", erwartung: "8 Jahre (12,5 % p.a. linear) – gemäß AfA-Tabelle für Straßenfahrzeuge/Anhänger. Nicht 33 oder 50 Jahre wie bei Gebäuden.", ampel: "green" },
              { nr: "04", frage: "Wie dokumentieren wir die gewerbliche Nutzung korrekt für das Finanzamt?", erwartung: "Besprechung von: Betriebsanmeldung, Buchungsbelegen, Betreibervertrag, Einnahmen-Überschuss-Rechnung, Abgrenzung zu Liebhaberei.", ampel: "amber" },
              { nr: "05", frage: "Gilt der IAB auch, wenn das Tiny House im EU-Ausland steht?", erwartung: "Ja, da das Gewerbe in Deutschland ist. Hinweis auf DBA-Regelungen. Kein pauschales 'Nein' ohne Begründung.", ampel: "green" },
              { nr: "06", frage: "Wie behandeln wir die Auflösung des IAB buchhalterisch?", erwartung: "IAB erhöht im Kaufjahr den Gewinn (Auflösung), gleichzeitig reduzieren Sonder-AfA und deg. AfA den Restbuchwert. Per Saldo muss der Nettoeffekt positiv sein.", ampel: "amber" },
              { nr: "07", frage: "Was kostet ein vollständiges Mandat für §7g-Optimierung?", erwartung: "Transparente Honorarauskunft. Üblich: 1.500–3.500 € p.a. für gewerbliche EÜR + §7g-Begleitung.", ampel: "neutral" },
            ].map((item) => (
              <div key={item.nr} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-green-700 flex items-center justify-center text-[11px] font-black text-white">{item.nr}</div>
                  <div>
                    <p className="font-black text-gray-900 text-[14px] mb-2">{item.frage}</p>
                    <div className="flex items-start gap-2">
                      <span className={`shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full mt-0.5 ${item.ampel === "green" ? "bg-green-100 text-green-700" : item.ampel === "amber" ? "bg-amber-100 text-amber-700" : "bg-gray-100 text-gray-600"}`}>
                        {item.ampel === "green" ? "Erwartet" : item.ampel === "amber" ? "Wichtig" : "Info"}
                      </span>
                      <p className="text-gray-500 text-[12px] leading-relaxed">{item.erwartung}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden mb-12" style={{ aspectRatio: "16/7" }}>
            <img src="/images/inside/tiny-house-innen-modern.webp" alt="Tiny House Detailaufnahme Innenraum" className="w-full h-full object-cover" />
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Was du zum Gespräch mitbringen solltest</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              { icon: "📊", title: "Steuerbescheid Vorjahr", desc: "Zeigt deinen Grenzsteuersatz, Gewinnhöhe und derzeitige Steuerbelastung – Basis für IAB-Berechnung." },
              { icon: "📋", title: "Kaufvertrag / Asset-Daten", desc: "Kaufpreis, Modell, Trailer-Zertifikat (VIN/FIN-Nachweis). TinyInvest stellt dir einen vollständigen Informationspack zur Verfügung." },
              { icon: "💼", title: "Betriebsanmeldung", desc: "Oder die Absicht, ein Gewerbe anzumelden. Ohne gewerbliche Tätigkeit kein §7g." },
              { icon: "🏡", title: "Betreibervertrag tiny Escapes", desc: "Belegt die gewerbliche Nutzungsabsicht und die Einkommensstruktur (40 % Mietanteil)." },
              { icon: "📄", title: "§7g Factsheet von TinyInvest", desc: "Das kostenlose Steuer-Factsheet mit allen relevanten Kennzahlen. Dein Steuerberater bekommt direkt alle Infos." },
              { icon: "🗓️", title: "Investitionszeitraum", desc: "Wann soll das Tiny House gekauft werden? Relevant für die IAB-Timing-Optimierung (Vorjahr vs. Kaufjahr)." },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                <div className="flex gap-3 mb-2">
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <h3 className="font-black text-gray-900 text-[14px] mt-1">{item.title}</h3>
                </div>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 text-white mb-8">
            <p className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold mb-4">TinyInvest Steuerberater-Netzwerk</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                "Erfahrung mit IAB + Sonder-AfA bei beweglichen Wirtschaftsgütern",
                "Kenntnis des TinyInvest-Modells (tiny Escapes, Betreibervertrag)",
                "Bundesweit verfügbar, Erstgespräch auch digital",
                "Transparente Honorarstruktur",
                "Erfahrung mit Betriebsprüfungen in diesem Bereich",
                "Begleitung von Nebengewerbe-Anmeldung bis Steuererklärung",
              ].map((item, i) => (
                <div key={i} className="flex gap-3 text-[13px] text-gray-300">
                  <span className="text-green-400 font-bold shrink-0">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <ModalButton className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">
                🔐 Steuerberater-Empfehlung anfordern →
              </ModalButton>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/wissen/afa-abschreibung" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g AfA erklärt →</Link>
            <Link href="/steuervorteil" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Interaktiver Steuerrechner →</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">← Wissens-Hub</Link>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: Steuerberater für Tiny House Investment</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-black mb-3">Direkte Steuerberater-Vermittlung</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">Wir verbinden dich kostenlos mit einem §7g-Spezialisten aus unserem Netzwerk.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">🔐 Empfehlung anfordern →</ModalButton>
              <Link href="/marktplatz" className="border border-white/20 text-white hover:border-green-400 hover:text-green-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">Projekte ansehen →</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
