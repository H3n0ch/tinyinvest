import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Beste Tiny House Standorte Deutschland 2026 | TinyInvest",
  description:
    "Welche Regionen in Deutschland eignen sich am besten für ein Tiny House Investment? Bayern, Schwarzwald, Ostsee, Allgäu – Belegungsquoten und Rendite im Vergleich.",
  keywords:
    "tiny house standorte deutschland, tiny house stellplatz deutschland, beste tiny house standorte, tiny house urlaub deutschland, tiny house investition standort",
  alternates: { canonical: "https://tinyhouse.investments/wissen/tiny-house-standorte" },
  openGraph: {
    title: "Beste Tiny House Standorte Deutschland 2026 | TinyInvest",
    description: "Bayern, Schwarzwald, Ostsee, Allgäu – die besten Regionen für ein Tiny House Investment mit höchster Belegungsquote.",
    url: "https://tinyhouse.investments/wissen/tiny-house-standorte",
  },
};

const standorte = [
  { region: "Bayern & Alpen", icon: "🏔️", belegung: "70–80 %", preis: "120–180 €/Nacht", saison: "Ganzjährig", stärke: "Winter-Tourismus, Wandern, Skigebiete" },
  { region: "Schwarzwald", icon: "🌲", belegung: "65–75 %", preis: "90–140 €/Nacht", saison: "Frühling–Herbst", stärke: "Natur, Wellness, Radtourismus" },
  { region: "Ostseeküste", icon: "🌊", belegung: "60–75 %", preis: "100–160 €/Nacht", saison: "Mai–September (Spitze)", stärke: "Strandnähe, Familientourismus" },
  { region: "Allgäu", icon: "🐄", belegung: "65–75 %", preis: "90–130 €/Nacht", saison: "Sommer + Winter", stärke: "Wandern, Naturpark, Nähe Österreich" },
  { region: "Eifel & Mosel", icon: "🍇", belegung: "55–65 %", preis: "80–120 €/Nacht", saison: "Frühling–Herbst", stärke: "Weinregion, Natur, Stadtferne" },
  { region: "Harz", icon: "🦌", belegung: "60–70 %", preis: "75–110 €/Nacht", saison: "Ganzjährig", stärke: "Wandern, Winter, Brockennähe" },
];

const faqItems = [
  {
    question: "Wo in Deutschland sind Tiny House Investments am rentabelsten?",
    answer: "Die höchste Rendite erzielen Standorte mit ganzjährigem Tourismus: Bayern/Alpen, Schwarzwald und Allgäu liegen vorne. Küstenregionen (Ostsee) haben sehr hohe Saisonpreise, aber ausgeprägte Saisonalität. Ganzjahresstandorte mit 70 % Belegung sind typischerweise rentabler als Saisonstandorte mit 80 % im Sommer aber 30 % im Winter.",
  },
  {
    question: "Muss ich als Investor den Standort selbst suchen?",
    answer: "Nein. TinyInvest-Investoren kaufen ein Tiny House, das bereits einem geprüften Standort im tiny Escapes Netzwerk zugeordnet wird. Standort-Due-Diligence, Baugenehmigung und Host-Beziehung werden vollständig durch tiny Escapes gemanagt.",
  },
  {
    question: "Kann ich meinen bevorzugten Standort wählen?",
    answer: "Je nach Verfügbarkeit können Investoren zwischen verschiedenen Standorten wählen. Die Verfügbarkeit ist projektabhängig – im Marktplatz siehst du alle aktuell verfügbaren Projekte mit Standortangabe und Renditeprognose.",
  },
  {
    question: "Wie wichtig ist die Lage für die Rendite?",
    answer: "Sehr wichtig – aber nicht allein entscheidend. Die Belegungsquote wird durch Lage, Listing-Qualität, Pricing und Saison beeinflusst. Ein gut gemanagter Standort in der Eifel kann einen schlecht betriebenen Alpen-Standort übertreffen. Das tiny Escapes Betreibermodell optimiert alle Faktoren gleichzeitig.",
  },
];

export default function TinyHouseStandortePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Beste Tiny House Standorte Deutschland 2026",
    "description": "Welche Regionen in Deutschland eignen sich am besten für ein Tiny House Investment? Bayern, Schwarzwald, Ostsee, Allgäu – Belegungsquoten und Rendite im Vergleich.",
    "url": "https://tinyhouse.investments/wissen/tiny-house-standorte",
    "datePublished": "2026-04-14",
    "dateModified": "2026-04-14",
    "author": { "@type": "Organization", "name": "TinyInvest", "url": "https://tinyhouse.investments" },
    "publisher": { "@type": "Organization", "name": "TinyInvest", "logo": { "@type": "ImageObject", "url": "https://tinyhouse.investments/logo1.png" } },
    "image": { "@type": "ImageObject", "url": "https://tinyhouse.investments/images/outside/tiny-house-skandinavien-naturlage.webp" },
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
      <Script id="faq-schema-standorte" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema-standorte" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Standorte</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Standort-Guide · 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Beste Tiny House Standorte Deutschland 2026
          </h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
            Welche Region in Deutschland liefert die höchste Belegungsquote und damit die beste Rendite? Ein Vergleich der 6 stärksten Tourismus-Regionen für Tiny House Investments.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "21/9" }}>
            <img src="/images/outside/tiny-house-skandinavien-naturlage.webp" alt="Tiny House Standort Skandinavien – Naturlage" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["Bayern", "Schwarzwald", "Ostsee", "Allgäu", "Ganzjahres-Standorte"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              In einem touristischen Markt, in dem gefühlt jeder ein Tiny House betreiben will, entscheidet am Ende eine einzige Variable: der Standort. Nicht das Design, nicht die Ausstattung, nicht der Preis – die Lage bestimmt zu 60 bis 70 Prozent, ob ein Asset profitabel ist oder nicht. Die gute Nachricht: Wer in das richtige Netzwerk investiert, bekommt den Standort mitgeliefert.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Das tiny Escapes Netzwerk betreibt Häuser an geprüften Standorten in Deutschland, Österreich und weiteren europäischen Ländern. Die Lageauswahl folgt einem klaren Kriterienkatalog: ganzjährige Nachfrage, Erreichbarkeit aus Ballungsräumen, natürliche Alleinlage, Infrastruktur. Für Investoren bedeutet das: kein Standort-Risiko durch eigene Fehlentscheidung.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Top 6 Regionen im Vergleich</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {standorte.map((s) => (
              <div key={s.region} className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-green-200 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{s.icon}</span>
                  <h3 className="font-black text-gray-900 text-base">{s.region}</h3>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-3">
                  {[
                    { label: "Belegung", value: s.belegung },
                    { label: "Preis/Nacht", value: s.preis },
                    { label: "Hauptsaison", value: s.saison },
                  ].map((m) => (
                    <div key={m.label} className="bg-gray-50 rounded-xl p-2 text-center">
                      <p className="text-[9px] text-gray-400 uppercase font-bold">{m.label}</p>
                      <p className="text-[11px] font-bold text-gray-800 mt-0.5">{m.value}</p>
                    </div>
                  ))}
                </div>
                <p className="text-[12px] text-gray-500">💡 {s.stärke}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden mb-12" style={{ aspectRatio: "16/7" }}>
            <img src="/images/outside/tiny-house-winter-ganzjahresbetrieb.webp" alt="Tiny House im Winter – Ganzjahresbetrieb" className="w-full h-full object-cover" />
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Was einen Standort wirklich profitabel macht</h2>
          <div className="bg-gray-900 rounded-2xl p-8 text-white mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "📅", title: "Ganzjährige Nachfrage", desc: "Saisonunabhängige Standorte erzielen gleichmäßigen Cashflow über 12 Monate." },
                { icon: "📸", title: "Instagrammable Lage", desc: "Naturkulisse, Alleinlage oder besonderes Design erhöhen organische Reichweite auf Buchungsplattformen." },
                { icon: "🚗", title: "Erreichbarkeit", desc: "Standorte <2h von Ballungsräumen (München, Hamburg, Berlin) haben strukturell höhere Auslastung." },
                { icon: "🌐", title: "Professionelles Listing", desc: "Dynamisches Pricing und Mehrkanal-Buchung (Airbnb, Booking, Eigenwebsite) maximieren Belegung." },
              ].map((c) => (
                <div key={c.title} className="flex gap-3">
                  <span className="text-xl shrink-0">{c.icon}</span>
                  <div>
                    <p className="font-bold text-[13px] text-white mb-0.5">{c.title}</p>
                    <p className="text-[12px] text-gray-400 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden mb-10" style={{ aspectRatio: "16/7" }}>
            <img src="/images/inside/tiny-house-innen-schlafbereich.webp" alt="Tiny House Innenausstattung Schlafbereich" className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/marktplatz" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Aktuelle Standorte im Marktplatz →</Link>
            <Link href="/rechner/rendite" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Rendite berechnen →</Link>
            <Link href="/wissen/tiny-house-genehmigung" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Genehmigungs-Guide →</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">← Wissens-Hub</Link>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: Tiny House Standorte Deutschland</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-black mb-3">Aktuell verfügbare Standorte anfragen</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">Investor-Paket mit Standort-Karte anfordern.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">🔐 Standortübersicht anfordern →</ModalButton>
              <Link href="/marktplatz" className="border border-white/20 text-white hover:border-green-400 hover:text-green-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">Projekte ansehen →</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
