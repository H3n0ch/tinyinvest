import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Tiny House kaufen 2026: Preise, Modelle & Investment-Option | TinyInvest",
  description:
    "Tiny House kaufen: Preise ab 65.000 €, Modellvergleich, Genehmigung, Finanzierung – und warum immer mehr Käufer ihr Tiny House als Kapitalanlage nutzen statt selbst einzuziehen.",
  keywords:
    "tiny house kaufen, tiny house kaufen preise, tiny house kaufen 2026, tiny house preise, mobiles tiny house kaufen, tiny house als kapitalanlage kaufen, günstige tiny häuser kaufen",
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
  alternates: {
    canonical: "https://tinyhouse.investments/wissen/tiny-house-kaufen",
  },
  openGraph: {
    title: "Tiny House kaufen 2026: Preise, Modelle & Investment-Option",
    description: "Preise ab 65.000 €, Modellvergleich und die Frage: selbst einziehen oder als Kapitalanlage vermieten lassen?",
    url: "https://tinyhouse.investments/wissen/tiny-house-kaufen",
  },
};

const faqItems = [
  {
    question: "Was kostet ein Tiny House 2026?",
    answer:
      "Hochwertige Tiny Houses auf zugelassenem Vlemmix-Trailer kosten bei TinyInvest zwischen 65.000 € (Comfort) und 95.000 € (Premium). Günstigere Angebote am Markt (unter 30.000 €) sind meist Eigenbauten ohne CE-Zulassung oder mit minderwertigem Ausbau. Der Preis beinhaltet bei TinyInvest Lieferung, Aufstellung und Ersteinrichtung.",
  },
  {
    question: "Brauche ich ein eigenes Grundstück um ein Tiny House zu kaufen?",
    answer:
      "Nein. TinyInvest bietet zwei Wege: Du kaufst das Tiny House mit Grundstück als Paket – oder du stellst das Haus auf dem Grundstück eines Hosts auf, ohne eigenes Land zu benötigen. Für Investoren ist das zweite Modell besonders attraktiv, da kein Grundstückskapital gebunden wird.",
  },
  {
    question: "Kann ich ein Tiny House auch als Kapitalanlage kaufen statt selbst einzuziehen?",
    answer:
      "Ja – und das ist für viele Käufer die bessere Option. Als Kapitalanlage wird das Tiny House von tiny Escapes als Ferienunterkunft betrieben. Du erhältst 40 % der Mieteinnahmen monatlich und kannst über §7g EStG bis zu 33.000 € Steuern im ersten Jahr sparen. Der Kauf als Investitionsobjekt ist steuerlich deutlich vorteilhafter als der Eigenkauf zum Wohnen.",
  },
  {
    question: "Ist ein Tiny House ganzjährig bewohnbar?",
    answer:
      "Die Tiny Houses von TinyInvest sind vollständig winterfest gebaut – mit hochwertiger Dämmung, Fußbodenheizung und Wärmerückgewinnung. Sie sind ganzjährig bewohnbar und werden auch im Winter als Ferienunterkunft gebucht. Der Betrieb ist 365 Tage im Jahr möglich.",
  },
  {
    question: "Wie läuft der Kaufprozess ab?",
    answer:
      "Nach einem kostenlosen Beratungsgespräch wählst du Modell und Standort (oder nutzt dein eigenes Grundstück). Kaufvertrag direkt mit dem Hersteller Vlemmix. Lieferung und Aufstellung innerhalb von 4–6 Wochen. Bei Investitionsmodell: Listing auf tiny Escapes und Buchungsplattformen, erste Mietauszahlung im Folgemonat.",
  },
];

export default function TinyHouseKaufenPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Tiny House kaufen 2026: Preise, Modelle & Investment-Option",
    "description": "Tiny House kaufen: Preise ab 65.000 €, Modellvergleich, Genehmigung, Finanzierung – und warum immer mehr Käufer ihr Tiny House als Kapitalanlage nutzen.",
    "url": "https://tinyhouse.investments/wissen/tiny-house-kaufen",
    "datePublished": "2026-04-29",
    "dateModified": "2026-04-29",
    "author": { "@type": "Person", "name": "Noah Stein", "url": "https://www.linkedin.com/in/noah-stein-a5b486182/" },
    "publisher": { "@type": "Organization", "name": "TinyInvest", "logo": { "@type": "ImageObject", "url": "https://tinyhouse.investments/logo1.png" } },
    "image": { "@type": "ImageObject", "url": "https://tinyhouse.investments/images/outside/tiny-house-investor-aussen.webp" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://tinyhouse.investments" },
      { "@type": "ListItem", "position": 2, "name": "Wissen", "item": "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", "position": 3, "name": "Tiny House kaufen", "item": "https://tinyhouse.investments/wissen/tiny-house-kaufen" },
    ],
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
      <Script id="article-schema-tiny-house-kaufen" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema-tiny-house-kaufen" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema-tiny-house-kaufen" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Tiny House kaufen</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Kaufguide · Preise · 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Tiny House kaufen 2026: Preise, Modelle & die Investment-Option
          </h1>
          <div className="flex items-center gap-3 mt-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white font-black text-xs shrink-0">NS</div>
            <div className="text-[12px] text-gray-400 flex items-center gap-2 flex-wrap">
              <a href="https://www.linkedin.com/in/noah-stein-a5b486182/" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-semibold hover:text-green-700 transition-colors">Noah Stein</a>
              <span>·</span>
              <span>TinyInvest Redaktion</span>
              <span>·</span>
              <time dateTime="2026-04-29">29. April 2026</time>
            </div>
          </div>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
            Wer ein Tiny House kaufen möchte, hat zwei grundlegend verschiedene Wege: selbst einziehen oder als Kapitalanlage vermieten lassen. Dieser Guide erklärt Preise, Modelle und Genehmigungen – und warum viele Käufer sich für die Investment-Option entscheiden.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "21/9" }}>
            <img
              src="/images/outside/tiny-house-investor-aussen.webp"
              alt="Tiny House kaufen – Außenansicht modernes Tiny House auf Naturstandort"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["Ab 65.000 €", "Ganzjährig bewohnbar", "Mit oder ohne Grundstück", "§7g-fähig", "Mobil & zugelassen"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Tiny House kaufen: Was kostet es 2026?</h2>
          <div className="max-w-3xl mb-8">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Der Markt für Tiny Houses ist unübersichtlich. Auf Online-Plattformen finden sich Angebote von 15.000 € bis über 200.000 €. Der Unterschied liegt nicht nur in der Größe, sondern vor allem in der Qualität, Zulassung und Langlebigkeit. Günstige Angebote unter 30.000 € sind häufig Eigenbauten ohne CE-Zulassung, ohne winterfeste Dämmung und ohne amtlichen Fahrzeugbrief – das bedeutet: kein legaler Straßentransport, keine Versicherung als Fahrzeug und keine Möglichkeit den §7g Investitionsabzugsbetrag zu nutzen.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Hochwertige, zertifizierte Tiny Houses auf Vlemmix-Trailer beginnen bei rund 65.000 € und gehen je nach Ausstattung bis ca. 95.000 €. Das klingt nach viel – ist aber im Vergleich zu einer Eigentumswohnung (Einstieg oft ab 200.000 €) ein erheblich niedrigerer Kapitaleinsatz mit vergleichbaren oder besseren Renditechancen.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 text-[12px] text-gray-500 font-semibold">Modell</th>
                    <th className="p-4 text-[12px] text-gray-500 font-semibold text-center">Preis</th>
                    <th className="p-4 text-[12px] text-gray-500 font-semibold text-center">Größe</th>
                    <th className="p-4 text-[12px] font-black text-green-700 text-center bg-green-50">§7g-fähig</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-[13px]">
                  {[
                    ["Comfort", "65.000 €", "ca. 30 m²", "✅ Ja"],
                    ["Premium", "79.000 €", "ca. 38 m²", "✅ Ja"],
                    ["Luxury", "95.000 €", "ca. 45 m²", "✅ Ja"],
                  ].map(([m, p, g, s]) => (
                    <tr key={m} className="hover:bg-gray-50/50">
                      <td className="p-4 font-bold text-gray-900">{m}</td>
                      <td className="p-4 text-center font-data font-semibold text-gray-700">{p}</td>
                      <td className="p-4 text-center text-gray-500">{g}</td>
                      <td className="p-4 text-center font-bold text-green-700 bg-green-50/50">{s}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Selbst einziehen oder als Investment vermieten?</h2>
          <div className="max-w-3xl mb-8">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Wer ein Tiny House kauft, steht vor einer Entscheidung die viele unterschätzen: Eigennutzung oder Kapitalanlage? Beide Wege sind möglich – aber die wirtschaftlichen Konsequenzen sind erheblich verschieden.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Bei Eigennutzung sparst du Mietkosten und hast maximale Freiheit. Du kannst kein §7g-Steuermodell nutzen, da keine betriebliche Nutzung mit Gewinnerzielungsabsicht vorliegt. Das Haus ist ein Konsumgut, keine Kapitalanlage.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Bei der Investment-Option kaufst du das Tiny House als betriebliches Wirtschaftsgut. tiny Escapes betreibt es als Ferienunterkunft, du erhältst 40 % der Nettomieteinnahmen monatlich – ca. 720 € bei 60 % Belegung. Dazu kommt der §7g-Steuervorteil: Im ersten Jahr kannst du bis zu 33.000 € Steuern sparen. Das macht die effektive Einstiegsrendite deutlich attraktiver als bei Eigennutzung oder klassischen Immobilien.
            </p>
          </div>

          <div className="bg-green-50 border border-green-100 rounded-2xl p-6 mb-12">
            <p className="font-black text-gray-900 text-base mb-2">Rechenbeispiel: 79.000 € Tiny House, 42 % Steuersatz</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 text-[13px]">
              {[
                { label: "Steuererstattung Jahr 1", value: "bis 33.000 €", sub: "IAB + Sonder-AfA" },
                { label: "Monatliche Auszahlung", value: "ca. 720 €", sub: "bei 60 % Belegung" },
                { label: "IRR über 5 Jahre", value: "13–15 %", sub: "inkl. Steuereffekt" },
              ].map((k) => (
                <div key={k.label} className="bg-white rounded-xl p-4 border border-green-100">
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">{k.label}</p>
                  <p className="font-data font-black text-green-700 text-lg">{k.value}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">{k.sub}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Tiny House kaufen: Mit oder ohne Grundstück?</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Ein häufiges Missverständnis: Du brauchst kein eigenes Grundstück um ein Tiny House zu kaufen. TinyInvest bietet zwei Modelle. Im Paketmodell erhältst du Tiny House und Grundstück aus einer Hand – ideal wenn du einen festen Standort mit attraktiver Lage suchst und nicht selbst nach einem Stellplatz suchen möchtest. Im Investorenmodell ohne eigenes Land wird dein Tiny House auf dem Grundstück eines geprüften Hosts aufgestellt. Du hast keine Grundstückskosten, keine Standortsuche und keine Auflagen durch Bebauungsplan.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Für Eigennutzer empfiehlt sich das Paketmodell. Für Investoren ist das Modell ohne eigenes Grundstück in der Regel wirtschaftlicher – weil kein Kapital im Grundstück gebunden ist und die Mobilität des Tiny Houses als Flexibilitäts-Trumpf erhalten bleibt.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden mb-12" style={{ aspectRatio: "16/7" }}>
            <img
              src="/images/outside/tiny-house-stellplatz-standort.webp"
              alt="Tiny House Stellplatz – kaufen mit oder ohne Grundstück"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Was beim Tiny House Kauf zu beachten ist</h2>
          <div className="max-w-3xl mb-12">
            <div className="space-y-4">
              {[
                { nr: "01", title: "CE-Zulassung & Fahrzeugbrief", desc: "Ein Tiny House auf Trailer braucht eine offizielle Fahrzeugzulassung (VIN/FIN). Nur dann ist legaler Transport, Versicherung und §7g-Nutzung möglich. Günstige Angebote ohne Fahrzeugbrief sind oft ein rechtliches und steuerliches Risiko." },
                { nr: "02", title: "Winterfestigkeit", desc: "Achte auf vollständige Wärmedämmung, eine leistungsfähige Heizung und Wärmerückgewinnung. Tiny Houses die ganzjährig genutzt werden sollen müssen für Temperaturen bis -15 °C ausgelegt sein." },
                { nr: "03", title: "Genehmigung am Standort", desc: "Die Genehmigungspflicht hängt vom Bundesland und Nutzungszweck ab. Als mobiles Fahrzeug auf privatem Grund sind Tiny Houses oft genehmigungsfrei – aber die Nutzung als dauerhafter Wohnsitz erfordert in vielen Gemeinden einen Bebauungsplan-Eintrag." },
                { nr: "04", title: "Betriebskonzept bei Investment", desc: "Wenn du das Tiny House vermieten möchtest, braucht es ein professionelles Betriebskonzept: Buchungsplattform, Gästebetreuung, Reinigung, Check-in. TinyInvest vermittelt das über tiny Escapes – du hast keinen operativen Aufwand." },
              ].map((step) => (
                <div key={step.nr} className="flex gap-5 bg-gray-50 border border-gray-100 rounded-2xl p-6">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-green-700 flex items-center justify-center text-white font-black text-sm">{step.nr}</div>
                  <div>
                    <h3 className="font-black text-gray-900 text-[14px] mb-1">{step.title}</h3>
                    <p className="text-gray-500 text-[13px] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/tiny-house-als-kapitalanlage" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">In ein Tiny House investieren →</Link>
            <Link href="/wissen/tiny-house-kaufen-mit-grundstueck" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Tiny House mit Grundstück →</Link>
            <Link href="/konfigurator" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Konfigurator →</Link>
            <Link href="/wissen/tiny-house-kaufen-checkliste" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Kaufen Checkliste →</Link>
            <Link href="/wissen/tiny-house-genehmigung" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Genehmigung →</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">← Wissens-Hub</Link>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: Tiny House kaufen 2026</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <p className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold mb-3">Kostenlose Beratung</p>
            <h3 className="text-xl font-black mb-3">Tiny House kaufen – welches Modell passt zu dir?</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
              Eigennutzung oder Investment? Mit oder ohne Grundstück? Wir helfen dir in einem kostenlosen Gespräch die richtige Entscheidung zu treffen.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">
                Kostenlose Beratung anfragen →
              </ModalButton>
              <Link href="/konfigurator" className="border border-white/20 text-white hover:border-green-400 hover:text-green-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">
                Konfigurator starten →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
