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
  authors: [{ name: "Noah Stein", url: "https://www.linkedin.com/in/noah-stein-a5b486182/" }],
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
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Tiny House als Direktinvestment: Sachwert statt Finanzprodukt",
    "description": "Du kaufst ein physisches Tiny House – kein Fondsanteil, kein Token, kein abstraktes Finanzprodukt. Wie Direktinvestment in bewegliche Wirtschaftsgüter funktioniert.",
    "url": "https://tinyhouse.investments/wissen/direktinvestment",
    "datePublished": "2026-04-14",
    "dateModified": "2026-04-14",
    "author": { "@type": "Person", "name": "Noah Stein", "url": "https://www.linkedin.com/in/noah-stein-a5b486182/" },
    "publisher": { "@type": "Organization", "name": "TinyInvest", "logo": { "@type": "ImageObject", "url": "https://tinyhouse.investments/logo1.png" } },
    "image": { "@type": "ImageObject", "url": "https://tinyhouse.investments/images/outside/tiny-house-escape-sachwert.webp" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://tinyhouse.investments" },
      { "@type": "ListItem", "position": 2, "name": "Wissen", "item": "https://tinyhouse.investments/wissen" },
      { "@type": "ListItem", "position": 3, "name": "Direktinvestment", "item": "https://tinyhouse.investments/wissen/direktinvestment" }
    ]
  };

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
      <Script
        id="article-schema-direktinvestment"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Direktinvestment</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Sachwert-Investment · 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Tiny House als Direktinvestment: Sachwert statt Finanzprodukt
          </h1>
          <div className="flex items-center gap-3 mt-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white font-black text-xs shrink-0">NS</div>
            <div className="text-[12px] text-gray-400 flex items-center gap-2 flex-wrap">
              <a href="https://www.linkedin.com/in/noah-stein-a5b486182/" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-semibold hover:text-green-700 transition-colors">Noah Stein</a>
              <span>·</span>
              <span>TinyInvest Redaktion</span>
              <span>·</span>
              <time dateTime="2026-04-15">15. April 2026</time>
            </div>
          </div>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
            Kein Token, kein Fonds, kein Crowdinvesting-Darlehen. Bei TinyInvest wird dir ein Tiny House auf Vlemmix Trailer direkt übereignet. Du bist Eigentümer – mit allen Rechten, die dazugehören.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "21/9" }}>
            <img src="/images/outside/tiny-house-escape-sachwert.webp" alt="Tiny House Direktinvestment – physisches Sachwert-Asset" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["Direktes Eigentumsrecht", "Keine Fonds-Konstruktion", "Drittverwendungsfähig", "Sachwert mit Substanzwert"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Bei TinyInvest kaufst du ein Tiny House – nicht einen Anteil, nicht ein Token, nicht eine Gewinnbeteiligung. Ein echtes, physisches Gebäude auf einem straßenzugelassenen Vlemmix Trailer, das auf deinen Namen übereignet wird. Du erhältst den Fahrzeugbrief, bist im Kaufvertrag namentlich eingetragen und hast volle Verfügungsgewalt über das Asset. Das ist der fundamentale Unterschied zu fast allen anderen alternativen Investments, die heute als "Sachwert-Investment" beworben werden.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Die Frage, die jeder Investor stellen sollte, lautet nicht: "Wie hoch ist die projizierte Rendite?" – sondern: "Was besitze ich, wenn der Betreiber morgen nicht mehr existiert?" Bei Crowdinvesting-Darlehen steht man auf der Gläubigerliste. Bei REIT-Anteilen ist die Aktie möglicherweise wertlos. Bei einem TinyInvest-Haus kann man das Objekt herausverlangen und eigenständig weiterführen. Diese Eigentumsstruktur ist kein Marketingargument – sie ist die entscheidende rechtliche Realität.
            </p>
          </div>

          {/* Extended article body */}
          <div className="max-w-3xl mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Die neue Architektur der Kapitalanlage</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Die globale Finanzlandschaft befindet sich in einem tiefgreifenden Umbruch, der klassische Sparmodelle zunehmend entwertet und Investoren dazu zwingt, radikal neu über den Begriff des Sachwerts nachzudenken. Während die Inflationsraten die Kaufkraft von Barvermögen schleichend aushöhlen und die Volatilität der Aktienmärkte selbst erfahrene Anleger vor Herausforderungen stellt, gewinnt eine Assetklasse an Bedeutung, die das Beste aus zwei Welten vereint: die Beständigkeit der Immobilie und die steuerliche Dynamik eines beweglichen Wirtschaftsguts. Das Direktinvestment in Tiny Houses stellt hierbei keine kurzfristige Modeerscheinung dar, sondern ist die logische Antwort auf eine sich wandelnde Gesellschaft, die Flexibilität, Nachhaltigkeit und Effizienz über schiere Größe und starre Strukturen stellt.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Bei einer konventionellen Eigentumswohnung ist das Kapital oft über Jahrzehnte in einem starren Konstrukt gebunden, das durch hohe Kaufnebenkosten, bürokratische Trägheit und langsame Abschreibungszyklen geprägt ist. Ein Tiny House hingegen wird rechtlich als bewegliches Wirtschaftsgut behandelt, was eine völlig neue Ebene der steuerlichen Gestaltung eröffnet. Der Investor erwirbt dabei nicht nur einen Anteil an einem Fonds oder ein abstraktes Papierversprechen, sondern wird zum vollwertigen Eigentümer eines physischen Objekts, das eine Seriennummer besitzt, versichert werden kann und einen realen Wiederverkaufswert aufweist. Diese Form der Asset-Protection ist in unsicheren Zeiten ein unschätzbarer psychologischer und ökonomischer Vorteil, da der Gegenwert des Investments jederzeit greifbar bleibt.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Die steuerliche Attraktivität dieses Modells ist im deutschen Steuerrecht fast einzigartig und stellt für viele Anleger den eigentlichen Motor der Rendite dar. Durch den Investitionsabzugsbetrag gemäß §7g EStG können Investoren ihre Steuerlast proaktiv steuern: Unter bestimmten Voraussetzungen lassen sich bis zu 50 % der voraussichtlichen Anschaffungskosten bereits vor dem eigentlichen Kauf gewinnmindernd geltend machen. Für Gutverdiener mit hoher Steuerprogression resultiert daraus eine sofortige Steuerersparnis, die direkt als Eigenkapital in das Investment fließen kann. Ergänzt wird dieser Effekt durch die kurze Abschreibungsdauer von meist nur acht Jahren – während ein herkömmliches Gebäude über 50 Jahre abgeschrieben wird, erlaubt das Tiny House eine jährliche Abschreibung von ca. 12,5 %. Dieser steuerliche Aufwand reduziert das zu versteuernde Einkommen des Anlegers über Jahre hinweg massiv.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Ein weiterer entscheidender Pfeiler des Modells ist die Loslösung des Investors von den operativen Lasten der Vermietung. In der Vergangenheit war der Besitz einer Ferienimmobilie oft mit erheblichem zeitlichem Aufwand verbunden – von der Korrespondenz mit Gästen über die Schlüsselübergabe bis hin zur Endreinigung. Das moderne Direktinvestment löst dieses Problem durch ein konsequentes Full-Service-Management: tiny Escapes übernimmt die gesamte Wertschöpfungskette und transformiert das Investment in ein echtes passives Einkommen. Die Häuser werden in strategisch erstklassigen Lagen platziert, die nach strengen Kriterien der Nachfrage und Infrastruktur ausgewählt werden, um eine ganzjährige Auslastung sicherzustellen.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Die ökonomische Logik hinter der Vermietung von Tiny Houses folgt dem Trend des sogenannten Glamping – einer Mischung aus Glamour und Camping, die die Sehnsucht nach Natur mit dem Wunsch nach Luxus und Komfort verbindet. In einer Welt, die immer digitaler und hektischer wird, suchen Menschen nach Rückzugsorten, die reduziert aber dennoch hochwertig sind. Für den Investor bedeutet das, dass er Quadratmeterpreise erzielen kann, die weit über denen einer normalen Mietwohnung liegen. Da die Baukosten für ein Tiny House im Vergleich zu einem Massivbau deutlich geringer sind, verschiebt sich das Verhältnis von Investitionskosten zu Mieteinnahmen massiv zugunsten des Anlegers.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Betrachtet man die langfristige Perspektive, spielt auch der Aspekt der ökologischen Nachhaltigkeit eine zentrale Rolle für die Wertstabilität. Tiny Houses werden in modernen Manufakturen unter Verwendung nachhaltiger Rohstoffe wie Holz und hocheffizienter Dämmmaterialien gefertigt. Sie verbrauchen durch ihre kompakte Bauweise nur einen Bruchteil der Energie, die ein herkömmliches Haus benötigt, und versiegeln deutlich weniger Bodenfläche. In einer Zukunft, in der ökologische Kriterien immer stärker in die Bewertung von Kapitalanlagen einfließen, ist das Tiny House hervorragend positioniert.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Zusammenfassend ist das Direktinvestment in ein Tiny House weit mehr als nur der Kauf eines kleinen Hauses. Es ist eine hochgradig optimierte Anlagestrategie, die gezielt die Lücken im Steuersystem nutzt, die Chancen des boomenden Tourismussektors ergreift und das Risiko durch realen Sachwertbesitz minimiert. Die Kombination aus massiven steuerlichen Vorteilen in der Anfangsphase, einer hohen laufenden Rendite durch professionelle Kurzzeitvermietung und vollständiger Entlastung durch ein Rundum-Sorglos-Management macht dieses Modell zu einer der überzeugendsten Optionen für den modernen Vermögensaufbau.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Direkt vs. indirekt: Was ist der Unterschied?</h2>
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
                    <tr key={merkmal} className="hover:bg-gray-50/50">
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

          <div className="bg-gray-900 rounded-2xl p-6 text-white mb-12">
            <p className="font-black text-base mb-2">💡 Die Schlüsselfrage bei jedem Investment:</p>
            <p className="text-gray-300 text-[13px] leading-relaxed">
              <em>"Was besitze ich, wenn der Betreiber morgen nicht mehr existiert?"</em>
              <br /><br />
              <strong className="text-white">Crowdinvesting:</strong> Du stehst auf der Gläubigerliste.<br />
              <strong className="text-white">REIT/Aktie:</strong> Deine Anteile sind möglicherweise wertlos.<br />
              <strong className="text-green-400">TinyInvest:</strong> Du kannst dein Haus herausverlangen und neu betreiben.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden mb-12" style={{ aspectRatio: "16/7" }}>
            <img src="/images/inside/tiny-house-innen-eigentumsuebergabe.webp" alt="Tiny House Innenausbau – Eigentumsübergabe" className="w-full h-full object-cover" />
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Was bedeutet es, Eigentümer zu sein?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
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
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <h3 className="font-black text-gray-900 text-[14px] mt-1">{item.title}</h3>
                </div>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight">Die 3 entscheidenden Sachwert-Vorteile</h2>
          <div className="space-y-6 mb-12">
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
                title: "Sichtbar & anfassbar – Vertrauen durch Substanz",
                icon: "⚖️",
                content: [
                  "Der physische Charakter schafft Vertrauen, das abstrakte Finanzprodukte nicht leisten können.",
                  "Du kannst das Haus sehen, anfassen und besichtigen – vor dem Kauf, während der Laufzeit und beim Verkauf.",
                  "TinyInvest bietet Besichtigungstermine vor dem Kauf an – etwas, das bei Token oder Fondsbeteiligungen schlicht nicht existiert.",
                ],
                highlight: "Sichtbar & anfassbar",
              },
            ].map((item) => (
              <div key={item.num} className="bg-gray-50 border border-gray-100 rounded-2xl p-7">
                <div className="flex items-start gap-5">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-black text-white shrink-0"
                    style={{ background: "linear-gradient(135deg, #2d6a4f, #52b788)" }}
                  >
                    {item.num}
                  </div>
                  <div className="grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{item.icon}</span>
                      <h3 className="text-base font-black text-gray-900">{item.title}</h3>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {item.content.map((point, i) => (
                        <li key={i} className="flex gap-2 text-[13px] text-gray-600">
                          <span className="text-green-600 shrink-0 mt-0.5">→</span>
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

          <div className="rounded-2xl overflow-hidden mb-12" style={{ aspectRatio: "16/7" }}>
            <img src="/images/outside/tiny-house-ferienimmobilie-aussen.webp" alt="Tiny House Außenansicht – Standort Deutschland" className="w-full h-full object-cover" />
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Wie werde ich Eigentümer? Der Kaufprozess in 5 Schritten</h2>
          <p className="text-gray-500 text-sm mb-10 leading-relaxed">Transparent, rechtssicher, nachvollziehbar. Von der Erstberatung bis zur Übergabe.</p>
          <div className="relative mb-12">
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
                  desc: "Unterzeichnung des Kaufvertrags. Das Tiny House wird auf deinen Namen übergeeignet. Option: Ratenzahlung oder Einmalzahlung. Steuerberater-freundliche Dokumentation inklusive.",
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
                  <div className="shrink-0 w-16 h-16 rounded-full bg-green-700 flex items-center justify-center text-xl font-black text-white shadow-sm z-10">
                    {step.step}
                  </div>
                  <div className="bg-white border border-gray-100 rounded-2xl p-5 grow">
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

          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/wissen/kapitalanlage" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Tiny House als Kapitalanlage →</Link>
            <Link href="/wissen/afa-abschreibung" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g AfA erklärt →</Link>
            <Link href="/wissen/passive-einnahmen-immobilien" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Passive Einnahmen vergleichen →</Link>
            <Link href="/wissen/7g-tiny-house-investment" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g Leitfaden →</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">← Wissens-Hub</Link>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: Direktinvestment & Eigentumsrecht</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <p className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold mb-3">Bereit, Eigentümer zu werden?</p>
            <h3 className="text-xl font-black mb-3">Jetzt Investor-Paket anfordern</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
              Kaufvertrag-Muster, §7g-Analyse und Besichtigungstermine – kostenlos und unverbindlich.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">
                🔐 Unterlagen anfordern →
              </ModalButton>
              <Link href="/marktplatz" className="border border-white/20 text-white hover:border-green-400 hover:text-green-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">
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
