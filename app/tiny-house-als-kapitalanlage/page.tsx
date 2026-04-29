import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ModalButton from "../components/ModalButton";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";

export const metadata = {
  title: "Tiny House als Kapitalanlage 2026: Lohnt es sich? | TinyInvest",
  description:
    "Tiny House als Kapitalanlage: Rendite ab 12 % IRR p.a., §7g Steuervorteile, ab 65.000 € Einstieg. Vergleich mit Eigentumswohnungen, Cashflow-Analyse und Investment-Guide.",
  keywords:
    "tiny house als kapitalanlage, tiny house investieren, tiny house rendite, ferienhaus als kapitalanlage, tiny house investment, §7g kapitalanlage",
  alternates: {
    canonical: "https://tinyhouse.investments/tiny-house-als-kapitalanlage",
  },
  openGraph: {
    title: "Tiny House als Kapitalanlage 2026 – Der vollständige Guide",
    description:
      "Lohnt sich ein Tiny House als Kapitalanlage? Rendite, Steuervorteile und Risiken transparent erklärt.",
    url: "https://tinyhouse.investments/tiny-house-als-kapitalanlage",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Lohnt sich ein Tiny House als Kapitalanlage?",
    answer:
      "Ja – für Investoren mit mittlerem bis hohem Einkommen, die von §7g EStG profitieren können. Der kombinierte Effekt aus 40 % Mietauszahlung, hoher AfA-Abschreibung und niedrigem Einstiegspreis macht Tiny Houses strukturell überlegen gegenüber klassischen Ferienimmobilien. Projizierte IRR: 12–14 % p.a. über 5 Jahre.",
  },
  {
    question: "Wie viel Rendite bringt ein Tiny House?",
    answer:
      "Bei 60 % Belegung und ~120 €/Nacht erhält der Investor ca. 730 € netto pro Monat (40 % der Einnahmen). Mit §7g Steuereffekten (IAB + Sonder-AfA) steigt die effektive Rendite auf 12–15 % p.a. im ersten Jahr.",
  },
  {
    question: "Brauche ich ein Grundstück?",
    answer:
      "Nein. TinyInvest vermittelt einen verifizierten Host und Standort über das tiny Escapes Netzwerk. Kein Grundstückskauf, keine Grunderwerbsteuer, keine Notarkosten.",
  },
  {
    question: "Welche steuerlichen Vorteile gibt es?",
    answer:
      "Da Tiny Houses auf Vlemmix Trailern als bewegliche Wirtschaftsgüter gelten, greift §7g EStG: IAB (50 % im Vorjahr), Sonder-AfA (40 %) + degressive AfA (30 %) im Kaufjahr. Bei 80.000 € Investment und 42 % Steuersatz: bis zu ~33.000 € Liquiditätsvorteil im Jahr 1.",
  },
];

export default function TinyHouseKapitalanlagePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Tiny House als Kapitalanlage 2026: Lohnt es sich?",
    author: { "@type": "Organization", name: "TinyInvest" },
    publisher: { "@type": "Organization", name: "TinyInvest" },
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  };

  return (
    <main className="bg-white min-h-screen">
      <Navbar variant="sub" />

      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* ── HERO ── */}
      <section className="pt-32 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 mb-4 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Tiny House als Kapitalanlage</span>
          </div>

          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Investor-Guide · 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2 mb-5 tracking-tight leading-tight">
            Tiny House als Kapitalanlage:<br className="hidden sm:block" /> Lohnt es sich wirklich?
          </h1>

          {/* Key stats – scannable on first glance */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {[
              { value: "Ab 65.000 €", label: "Einstieg" },
              { value: "12–14 %", label: "IRR p.a." },
              { value: "40 %", label: "Investor-Anteil" },
              { value: "0 €", label: "Kaufnebenkosten" },
            ].map((s) => (
              <div key={s.label} className="bg-green-50 border border-green-100 rounded-2xl p-4 text-center">
                <p className="font-data text-lg font-black text-green-700 leading-none">{s.value}</p>
                <p className="text-[11px] text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-500 text-[15px] leading-relaxed mb-6 max-w-2xl">
            In ein Tiny House investieren heißt: Du kaufst ein physisches Objekt – kein Fondsanteil. Ein Betreiber vermietet es für dich.
            Du erhältst 40 % der Einnahmen monatlich und sparst im ersten Jahr bis zu 33.000 € Steuern über §7g EStG.
          </p>

          <div className="flex flex-wrap gap-3">
            <ModalButton className="bg-green-700 hover:bg-green-800 text-white font-bold px-7 py-3 rounded-full text-sm transition-all shadow-sm">
              Kostenlose Beratung anfragen →
            </ModalButton>
            <Link href="/marktplatz" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-6 py-3 rounded-full text-sm transition-all">
              Aktuelle Projekte ansehen →
            </Link>
          </div>
        </div>
      </section>

      {/* ── INFOGRAFIK + VERGLEICH ── */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Die Mathematik</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-8 tracking-tight">
            In ein Tiny House investieren: Was du wirklich bekommst
          </h2>

          {/* Infografik */}
          <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 mb-3">
            <Image
              src="/images/cashflow.png"
              alt="Cashflow-Vergleich: Tiny House Investment 70.000 € vs. Traditionelles Apartment 500.000 € – TinyInvest nutzt dein Kapital 7x effizienter"
              width={1200}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
          <p className="text-center text-gray-400 text-[12px] italic mb-10">
            Die reine Mathematik: Gleicher Ertrag – 7x weniger Kapital
          </p>

          {/* Vergleichstabelle – kompakt */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 font-semibold text-gray-400 text-[11px] uppercase">Merkmal</th>
                    <th className="p-4 font-semibold text-gray-400 text-[11px] uppercase text-center">Eigentumswohnung</th>
                    <th className="p-4 font-black text-green-700 text-[11px] uppercase text-center bg-green-50">Tiny House</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    ["Einstiegspreis", "300.000–500.000 €", "ab 65.000 €"],
                    ["Kaufnebenkosten", "10–15 % (Notar, GrESt, Makler)", "Keine"],
                    ["Mietrendite brutto", "3–5 % p.a.", "12–14 % IRR p.a."],
                    ["Abschreibung", "2 % über 50 Jahre", "§7g: bis 70 % im Kaufjahr"],
                    ["Bewirtschaftung", "Eigenregie / Hausverwaltung", "Full-Service (tiny Escapes)"],
                    ["Flexibilität", "Ortsgebunden", "EU-weit versetzbar"],
                  ].map(([m, etw, tiny]) => (
                    <tr key={m} className="hover:bg-gray-50/50">
                      <td className="p-4 font-medium text-gray-700">{m}</td>
                      <td className="p-4 text-center text-gray-500">{etw}</td>
                      <td className="p-4 text-center font-bold text-green-700 bg-green-50/50">{tiny}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 KERNVORTEILE ── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Warum Tiny House?</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-8 tracking-tight">
            3 entscheidende Vorteile
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: "💰",
                title: "Niedriger Einstieg",
                kpi: "Ab 65.000 €",
                desc: "Kein Grundstück, keine Grunderwerbsteuer, kein Notar. Die Kaufnebenkosten einer Berliner ETW (~50.000 €) reichen für ein komplettes Tiny House.",
              },
              {
                icon: "🏛️",
                title: "§7g Steuerbonus",
                kpi: "≈ 33.000 € Jahr 1",
                desc: "IAB (50 % Vorjahr) + Sonder-AfA (40 %) + degressive AfA (30 %): bis zu 70 % im Kaufjahr absetzbar. Senkt deinen effektiven Kapitaleinsatz drastisch.",
              },
              {
                icon: "📈",
                title: "Passiver Cashflow",
                kpi: "~730 €/Monat",
                desc: "Du erhältst 40 % aller Mieteinnahmen monatlich. tiny Escapes übernimmt alles: Buchung, Gäste, Reinigung, Check-in – du musst nichts tun.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <p className="font-data text-xl font-black text-green-700 mb-1">{item.kpi}</p>
                <h3 className="font-black text-gray-900 text-[15px] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASHFLOW-BEISPIEL ── */}
      <section className="py-16 bg-gray-900 border-b border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-green-400 font-semibold text-xs uppercase tracking-widest">Rechenbeispiel</span>
            <h2 className="text-2xl font-black text-white mt-2 tracking-tight">
              TinyInvest Escape · 79.000 € · 60 % Belegung
            </h2>
          </div>

          <div className="space-y-3 mb-6">
            {[
              { label: "Monatsumsatz (219 Nächte ÷ 12 × 120 €)", value: "2.190 €", bold: false },
              { label: "Host-Anteil (45 %)", value: "– 986 €", bold: false },
              { label: "Plattform-Fee (15 %)", value: "– 329 €", bold: false },
              { label: "💰 Investor-Auszahlung (40 %)", value: "875 €/Monat", bold: true },
              { label: "Rendite auf Kaufpreis (vor Steuer)", value: "~13,3 % p.a.", bold: false },
              { label: "Effektive Rendite (mit §7g)", value: "~14–16 % p.a.", bold: true },
            ].map((row) => (
              <div key={row.label} className={`flex justify-between py-3 border-b border-white/10 ${row.bold ? "text-green-400 font-bold text-base" : "text-gray-300 text-[13px]"}`}>
                <span>{row.label}</span>
                <span className="font-data">{row.value}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3 mb-8">
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <p className="text-gray-400 text-[10px] mb-1">Kaufpreis</p>
              <p className="font-data text-xl font-black text-white">79.000 €</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <p className="text-gray-400 text-[10px] mb-1">Effektiv nach IAB</p>
              <p className="font-data text-xl font-black text-green-400">≈ 62.000 €</p>
            </div>
            <div className="bg-green-600 rounded-xl p-4 text-center">
              <p className="text-green-200 text-[10px] mb-1">IRR p.a.</p>
              <p className="font-data text-xl font-black text-white">12–14 %</p>
            </div>
          </div>

          <p className="text-[11px] text-gray-500 text-center">
            ⚠ Projektion auf Basis historischer Daten – keine Garantie. Steuerberater konsultieren.
          </p>
        </div>
      </section>

      {/* ── RISIKEN (kompakt) ── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Transparenz</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-6 tracking-tight">
            Risiken – ehrlich genannt
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: "📉", title: "Leerstand", desc: "Belegung kann schwanken. Wirtschaftliche Abschwünge oder Standortprobleme beeinflussen die Einnahmen." },
              { icon: "⚖️", title: "Steuerrechtsänderung", desc: "§7g EStG kann geändert werden. Die aktuelle Förderung gilt bis auf Weiteres – keine Garantie." },
              { icon: "🚛", title: "Betreiberrisiko", desc: "Die Rendite hängt von tiny Escapes ab. Als Eigentümer kannst du das Haus im Notfall herausverlangen." },
            ].map((r) => (
              <div key={r.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                <span className="text-2xl mb-3 block">{r.icon}</span>
                <h3 className="font-black text-gray-900 text-[14px] mb-1">{r.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Häufige Fragen</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-6 tracking-tight">FAQ</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">
            Bereit für den nächsten Schritt?
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            §7g-Analyse, Rendite-Prognose und persönliche Beratung – kostenlos und unverbindlich.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <ModalButton className="bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-sm">
              🔐 Unterlagen anfordern →
            </ModalButton>
            <Link href="/marktplatz" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">
              Aktuelle Projekte →
            </Link>
          </div>

          {/* Internal links */}
          <div className="flex flex-wrap gap-2 justify-center text-[12px]">
            <Link href="/wissen/kapitalanlage" className="text-green-700 hover:underline font-semibold">Detaillierter Kapitalanlage-Guide →</Link>
            <span className="text-gray-300">·</span>
            <Link href="/wissen/afa-abschreibung" className="text-gray-500 hover:text-green-700 transition-colors">§7g AfA erklärt</Link>
            <span className="text-gray-300">·</span>
            <Link href="/renditemodell" className="text-gray-500 hover:text-green-700 transition-colors">Renditerechner</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
