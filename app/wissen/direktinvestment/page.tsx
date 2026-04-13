import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Tiny House als Direktinvestment: Sachwert statt Finanzprodukt | TinyInvest",
  description:
    "Du kaufst ein physisches Tiny House – kein Fondsanteil, kein Token, kein abstraktes Finanzprodukt. Wie Direktinvestment in bewegliche Wirtschaftsgüter funktioniert und warum Sachwerte sicherer sind.",
  keywords:
    "tiny house direktinvestment, tiny house sachwert, direktinvestment bewegliche wirtschaftsgüter, tiny house eigentum kaufen, sachwert investment 2026",
  alternates: {
    canonical: "https://tinyhouse.investments/wissen/direktinvestment",
  },
  openGraph: {
    title: "Tiny House als Direktinvestment – Sachwert statt Finanzprodukt",
    description:
      "Kein Fonds, kein Token: Du wirst echter Eigentümer eines physischen Tiny Houses. Was das bedeutet und warum es besser ist.",
    url: "https://tinyhouse.investments/wissen/direktinvestment",
  },
};

const faqItems = [
  {
    question: "Wie werde ich Eigentümer des Tiny Houses?",
    answer:
      "Der Kauf erfolgt über einen notariell beglaubigten Kaufvertrag. Das Tiny House wird auf deinen Namen übergeeignet, du erhältst die Fahrzeugbriefe (Übereignungsurkunde) und bist rechtlicher Eigentümer des Trailers samt Aufbauten. Der Kaufvertrag wird in deinen Unterlagen hinterlegt. Es gibt keinen Zwischenhändler, keinen Fonds und kein Token dazwischen.",
  },
  {
    question: "Was passiert mit meinem Eigentum, wenn tiny Escapes insolvent wird?",
    answer:
      "Da das Tiny House dein Eigentum ist, ist es nicht Teil der Insolvenzmasse von tiny Escapes. Du kannst das Haus herausverlangen, an einen anderen Standort stellen und mit einem anderen Betreiber weiterführen. Das ist einer der wesentlichen Unterschiede zu fondsbasierten Investments, bei denen du im Insolvenzfall auf die Insolvenztabelle gesetzt wirst.",
  },
  {
    question: "Kann ich das Tiny House auch selbst nutzen oder verkaufen?",
    answer:
      "Ja. Als Eigentümer kannst du das Haus jederzeit selbst nutzen (z.B. Urlaub), verkaufen oder an einem neuen Standort neu vermieten. Es gibt eine Vereinbarung mit tiny Escapes über den Betrieb – aber das Eigentumsrecht bleibt jederzeit bestehen und schränkt deine grundsätzliche Verfügungsgewalt nicht ein.",
  },
  {
    question: "Worin unterscheidet sich das von Crowdinvesting in Immobilien?",
    answer:
      "Bei Crowdinvesting kaufst du einen Anteil an einer Gesellschaft oder einem Darlehen – du bist nie direkter Eigentümer des Sachwertes. TinyInvest verkauft dir das physische Asset: Du erhältst den Fahrzeugbrief, bist im Kaufvertrag namentlich eingetragen und hast volle Eigentumsrechte. Das senkt dein Risikoprofil erheblich.",
  },
  {
    question: "Muss ich das Tiny House selbst versichern?",
    answer:
      "Ja, als Eigentümer bist du Versicherungsnehmer. TinyInvest unterstützt dich bei der Auswahl geeigneter Kasko- und Haftpflichtversicherungen für das mobile Wirtschaftsgut. Typische Jahresprämien liegen bei 500–800 € je nach Deckungsumfang.",
  },
];

export default function DirektinvestmentPage() {
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

      <Script
        id="faq-schema-direktinvestment"
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
            <span className="text-green-700 font-semibold">Direktinvestment</span>
          </div>

          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Sachwert-Investment · E-E-A-T · Eigentum</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Tiny House als Direktinvestment: Sachwert statt Finanzprodukt
          </h1>

          {/* Trust sentence */}
          <div className="bg-green-700 rounded-2xl px-6 py-4 mb-6">
            <p className="text-white font-bold text-[14px] leading-relaxed">
              🏠 Du kaufst ein physisches Asset – nicht einen Fondsanteil. TinyInvest-Investoren halten die Übereignungsurkunde für ein reales Tiny House auf ihren Namen.
            </p>
          </div>

          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mb-6">
            Kein Token, kein Fonds, kein Crowdinvesting-Darlehen. Bei TinyInvest wird dir ein Tiny House
            auf Vlemmix Trailer direkt übereignet. Du bist Eigentümer – mit allen Rechten, die dazugehören.
          </p>

          {/* Photo strip */}
          <div className="grid grid-cols-3 gap-2 rounded-2xl overflow-hidden h-36 mb-6">
            <div className="overflow-hidden">
              <img src="/images/outside/DSC08946.webp" alt="Tiny House Außenansicht" className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden">
              <img src="/images/inside/DSC08904.webp" alt="Tiny House Innenausbau" className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden">
              <img src="/images/outside/ESCAPE1.webp" alt="Tiny House fertig für Vermietung" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-[11px]">
            {["Direktes Eigentumsrecht", "Keine Fonds-Konstruktion", "Drittverwendungsfähig", "Sachwert mit Substanzwert"].map((tag) => (
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
              { anchor: "#vergleich", label: "1. Direkt vs. indirekt" },
              { anchor: "#eigentum", label: "2. Was Eigentum bedeutet" },
              { anchor: "#usps", label: "3. Die 3 Sachwert-USPs" },
              { anchor: "#kaufprozess", label: "4. Kaufprozess erklärt" },
              { anchor: "#faq", label: "5. FAQ" },
            ].map((item) => (
              <a key={item.anchor} href={item.anchor} className="text-[13px] text-green-700 hover:text-green-900 font-semibold transition-colors">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Section 1: Vergleich */}
      <section id="vergleich" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Investmentarten im Vergleich</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-6 tracking-tight">
            Direkt vs. indirekt: Was ist der Unterschied?
          </h2>

          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 font-semibold text-gray-500 text-[12px]">Merkmal</th>
                    <th className="p-4 font-semibold text-gray-500 text-[12px] text-center">Crowdinvesting / Fonds</th>
                    <th className="p-4 font-semibold text-gray-500 text-[12px] text-center">REIT / Aktie</th>
                    <th className="p-4 font-black text-green-700 text-[12px] text-center bg-green-50">TinyInvest (Direkt)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-[12px]">
                  {[
                    ["Was du kaufst", "Darlehensanteil", "Aktienanteil", "Physisches Haus"],
                    ["Eigentumsrecht", "Keines", "Keines am Asset", "Vollständig"],
                    ["Insolvenzschutz", "Insolvenztabelle", "Aktien wertlos", "Asset herausverlangbar"],
                    ["Steuerliche AfA", "Nein", "Nein", "Ja – §7g EStG"],
                    ["Selbstnutzung möglich", "Nein", "Nein", "Ja"],
                    ["Verkauf des Assets", "Nein", "Fondsanteile", "Direktverkauf Haus"],
                    ["Standort wechselbar", "Nein", "Nein", "Ja (Trailer)"],
                    ["Transparenz", "Mittel", "Gering", "Vollständig"],
                  ].map(([merkmal, crowd, reit, tiny]) => (
                    <tr key={merkmal} className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 font-medium text-gray-700">{merkmal}</td>
                      <td className="p-4 text-center text-gray-400">{crowd}</td>
                      <td className="p-4 text-center text-gray-400">{reit}</td>
                      <td className="p-4 text-center font-bold text-green-700 bg-green-50/50">{tiny}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 text-white">
            <p className="font-black text-base mb-2">💡 Die Schlüsselfrage bei jedem Investment:</p>
            <p className="text-gray-300 text-[13px] leading-relaxed">
              <em>"Was besitze ich, wenn der Betreiber morgen nicht mehr existiert?"</em>
              <br /><br />
              <strong className="text-white">Crowdinvesting:</strong> Du stehst auf der Gläubigerliste.<br />
              <strong className="text-white">REIT/Aktie:</strong> Deine Anteile sind möglicherweise wertlos.<br />
              <strong className="text-green-400">TinyInvest:</strong> Du kannst dein Haus herausverlangen und neu betreiben.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Was Eigentum bedeutet */}
      <section id="eigentum" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Eigentumsrecht</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-6 tracking-tight">
            Was bedeutet es, Eigentümer zu sein?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            {[
              {
                icon: "📄",
                title: "Kaufvertrag & Übereignungsurkunde",
                desc: "Der Kauf wird vertraglich dokumentiert. Du erhältst einen Kaufvertrag, die Fahrzeugbriefe des Vlemmix Trailers und bist namentlich als Eigentümer eingetragen. Das ist ein rechtsverbindliches Eigentumsrecht – kein Anteilsschein.",
              },
              {
                icon: "🏛️",
                title: "Keine Insolvenzgefahr durch tiny Escapes",
                desc: "Das Tiny House ist dein privates Vermögen. Es gehört nicht zu tiny Escapes. Bei einer Insolvenz des Betreibers kannst du das Haus herausverlangen. Es ist nicht pfändbar durch Gläubiger von tiny Escapes.",
              },
              {
                icon: "🚛",
                title: "Vollständige Verfügungsgewalt",
                desc: "Du kannst das Haus verkaufen, verschenken, selbst nutzen oder an einem neuen Standort mit einem anderen Betreiber einsetzen. Die Betriebsvereinbarung mit tiny Escapes schränkt dein Eigentumsrecht nicht grundsätzlich ein.",
              },
              {
                icon: "🔧",
                title: "Instandhaltung & Investition",
                desc: "Als Eigentümer kannst du das Haus nachrüsten, erweitern oder renovieren – z.B. Solaranlage, Smart-Lock oder neue Möblierung. Jede Investition in das Asset steigert direkt deinen Substanzwert.",
              },
              {
                icon: "📊",
                title: "Steuerliche Vorteile als Eigentümer",
                desc: "Nur als wirtschaftlicher Eigentümer kannst du §7g AfA, IAB und Sonder-AfA in Anspruch nehmen. Fondsbeteiligungen oder Crowdinvesting-Darlehen sind keine Wirtschaftsgüter im steuerlichen Sinne.",
              },
              {
                icon: "🌍",
                title: "Internationale Einsetzbarkeit",
                desc: "Als straßenzugelassenes Fahrzeug kann dein Tiny House legal in Deutschland, Österreich, Italien und anderen EU-Staaten betrieben werden. Du bekommst keine Immobilie, die an eine einzige Gemeinde gebunden ist.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-5">
                <div className="flex gap-3 mb-2">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <h3 className="font-black text-gray-900 text-[14px] mt-1">{item.title}</h3>
                </div>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Die 3 Sachwert-USPs */}
      <section id="usps" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">USPs gegenüber alternativen Investments</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-8 tracking-tight">
            Die 3 entscheidenden Sachwert-Vorteile
          </h2>

          <div className="space-y-6">
            {[
              {
                num: "01",
                title: "Substanzwert – das Haus ist immer etwas wert",
                icon: "🏗️",
                content: [
                  "Ein Tiny House ist ein physisches Objekt, das unabhängig von Marktsentiment einen Substanzwert hat.",
                  "Selbst bei 0 % Belegung über 12 Monate: Das Haus steht, ist versichert und kann morgen wieder betrieben oder verkauft werden.",
                  "Zum Vergleich: Eine Aktie kann auf 0 fallen. Ein Crowdinvesting-Darlehen kann vollständig ausfallen.",
                  "Gebrauchte TinyInvest-Häuser erzielen bei Wiederverkauf 60–75 % des Neuwerts – je nach Zustand und Ausstattung.",
                ],
                highlight: "60–75 % Restwert",
              },
              {
                num: "02",
                title: "Drittverwendungsfähigkeit – maximale Flexibilität",
                icon: "📍",
                content: [
                  "Eine Eigentumswohnung in Stuttgart ist für immer in Stuttgart. Dein Tiny House ist auf einem Trailer.",
                  "Wenn ein Standort nicht mehr rentabel ist, kann das Haus an einen neuen Standort verlegt werden – z.B. von Deutschland nach Spanien.",
                  "Das eliminiert das geographische Klumpenrisiko, das jeder Immobilieneigentümer kennt.",
                  "Neue Standortnetzwerke über tiny Escapes in Deutschland, Österreich, Italien und Schweden.",
                ],
                highlight: "Standort wechselbar",
              },
              {
                num: "03",
                title: "Google E-E-A-T konformes Investment",
                icon: "⚖️",
                content: [
                  "YMYL (Your Money Your Life) gilt für alle Finanzinhalte. Google bewertet physische Sachwert-Investments als weniger spekulativ als reine Finanzprodukte.",
                  "Für dich als Investor: Der physische Charakter schafft Vertrauen. Du kannst das Haus sehen, anfassen und besichtigen.",
                  "TinyInvest bietet Besichtigungstermine vor dem Kauf an – etwas, das bei Token oder Fondsbeteiligungen schlicht nicht existiert.",
                ],
                highlight: "Sichtbar & anfassbar",
              },
            ].map((item) => (
              <div key={item.num} className="bg-gray-50 border border-gray-100 rounded-2xl p-7">
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
                      <span className="text-[10px] text-gray-400 uppercase font-bold">Vorteil</span>
                      <span className="font-black text-green-700 text-sm">{item.highlight}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Kaufprozess */}
      <section id="kaufprozess" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Eigentumsübertragung</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-4 tracking-tight">
            Wie werde ich Eigentümer? Der Kaufprozess in 5 Schritten
          </h2>
          <p className="text-gray-500 text-sm mb-10 leading-relaxed">
            Transparent, rechtssicher, nachvollziehbar. Von der Erstberatung bis zur Übergabe.
          </p>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-100 hidden md:block" />
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Erstgespräch & Auswahl",
                  desc: "Du wählst ein Modell (Comfort, Premium, Suite) und besichtigst optional einen bestehenden Standort. Wir erstellen deine persönliche §7g-Analyse auf Basis deiner Steuersituation.",
                  detail: "Timeline: 1–2 Wochen",
                },
                {
                  step: "2",
                  title: "Kaufvertrag & Zahlungsplan",
                  desc: "Unterzeichnung des Kaufvertrags. Das Tiny House wird auf deinen Namen übereignet. Option: Ratenzahlung oder Einmalzahlung. Steuerberater-freundliche Dokumentation inklusive.",
                  detail: "Notarielle Beglaubigung auf Wunsch",
                },
                {
                  step: "3",
                  title: "Übergabe & Dokumentation",
                  desc: "Du erhältst: Kaufvertrag, Fahrzeugbrief (Vlemmix Trailer), CE-Zertifikat, Versicherungsunterlagen und die vollständige §7g-Dokumentation für deinen Steuerberater.",
                  detail: "Komplett-Paket für Tax-Compliance",
                },
                {
                  step: "4",
                  title: "Standortvermittlung durch tiny Escapes",
                  desc: "tiny Escapes vermittelt einen verifizierten Host und Stellplatz. Das Haus wird aufgebaut, angeschlossen und buchungsbereit gemacht. Du musst nichts selbst organisieren.",
                  detail: "Full-Service ab Übergabe",
                },
                {
                  step: "5",
                  title: "Laufende Auszahlung & Reporting",
                  desc: "Ab dem ersten Buchungsmonat erhältst du monatlich 40 % der Netto-Einnahmen. Quartalsweise erhältst du ein Belegungs- und Umsatzreporting für deine Unterlagen.",
                  detail: "Transparentes Investor-Dashboard",
                },
              ].map((step, i) => (
                <div key={i} className="relative flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-green-700 flex items-center justify-center text-xl font-black text-white shadow-sm z-10">
                    {step.step}
                  </div>
                  <div className="bg-white border border-gray-100 rounded-2xl p-5 flex-grow">
                    <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
                      <h3 className="font-black text-gray-900 text-[14px]">{step.title}</h3>
                      <span className="text-[10px] bg-green-50 text-green-700 font-bold px-2 py-0.5 rounded-full">{step.detail}</span>
                    </div>
                    <p className="text-gray-500 text-[13px] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="overflow-hidden rounded-xl aspect-[4/3]">
              <img src="/images/outside/DSC08828.webp" alt="Tiny House Standort" className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-xl aspect-[4/3]">
              <img src="/images/inside/DSC08912.webp" alt="Innenausstattung" className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-xl aspect-[4/3]">
              <img src="/images/outside/DSC08980.webp" alt="Außenbereich" className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-xl aspect-[4/3]">
              <img src="/images/inside/DSC08930.webp" alt="Wohnbereich" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Häufige Fragen</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-8 tracking-tight">FAQ: Direktinvestment & Eigentumsrecht</h2>

          <div className="space-y-4 mb-12">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-3">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mb-10">
            <Link href="/wissen/kapitalanlage" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">
              Tiny House als Kapitalanlage →
            </Link>
            <Link href="/wissen/afa-abschreibung" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">
              §7g AfA erklärt →
            </Link>
            <Link href="/wissen/passive-einnahmen-immobilien" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">
              Passive Einnahmen vergleichen →
            </Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">
              ← Zurück zum Wissens-Hub
            </Link>
          </div>

          {/* CTA */}
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <p className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold mb-3">Bereit, Eigentümer zu werden?</p>
            <h3 className="text-xl font-black mb-3">Jetzt Investor-Paket anfordern</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
              Kaufvertrag-Muster, §7g-Analyse und Besichtigungstermine – kostenlos und unverbindlich.
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
