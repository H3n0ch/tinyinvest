import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Tiny House auf Airbnb vermieten: Wirklich profitabel? 2026 | TinyInvest",
  description:
    "Lohnt sich ein Tiny House auf Airbnb? Belegungsquoten, Preise, Steuereffekte – die echten Zahlen 2026. Und warum das Betreibermodell von tiny Escapes effizienter ist.",
  keywords:
    "tiny house airbnb vermieten, tiny house airbnb verdienen, tiny house kurzzeitvermietung rendite, airbnb tiny house profitabel 2026",
  alternates: { canonical: "https://tinyhouse.investments/wissen/tiny-house-airbnb" },
  openGraph: {
    title: "Tiny House auf Airbnb: Wirklich profitabel? Die echten Zahlen 2026",
    description: "Belegungsquoten, Nettorevenuen und Steuereffekte für Tiny House Airbnb-Vermietung. Mit und ohne Betreiber.",
    url: "https://tinyhouse.investments/wissen/tiny-house-airbnb",
  },
};

const faqItems = [
  {
    question: "Wie viel kann man mit einem Tiny House auf Airbnb verdienen?",
    answer: "Bei einem Nächtigungspreis von 80–120 € und 60 % Belegung ergibt sich ein Monats-Umsatz von 1.440–2.160 €. Nach Airbnb-Gebühren (3 %), Betreiberkosten und Reinigung bleiben dem Investor (40 % Anteil) ca. 580–865 € netto. Über §7g-Steuereffekte kommt im ersten Jahr ein erheblicher Einmalbonus dazu.",
  },
  {
    question: "Brauche ich eine Gewerbeanmeldung für Airbnb mit einem Tiny House?",
    answer: "In Deutschland gilt: Wer regelmäßig Einkünfte aus Vermietung erzielt, muss diese in der Steuererklärung angeben. Bei gewerbsmäßiger Vermietung (Einkünfte über 24.500 €/Jahr) ist eine Gewerbeanmeldung nötig. Im TinyInvest-Modell wickelt tiny Escapes die gewerbliche Seite als Betreiber ab – du erzielst Einkünfte aus V&V.",
  },
  {
    question: "Kann ich mein Tiny House selbst auf Airbnb stellen oder brauche ich tiny Escapes?",
    answer: "Du kannst ein Tiny House theoretisch selbst auf Airbnb listen. TinyInvest-Assets laufen jedoch über das tiny Escapes Betreibermodell: professionelles Listing, dynamisches Pricing, Reinigungsmanagement und Gästebetreuung. Das kostet 60 % der Einnahmen – macht aber für die meisten Investoren mehr Sinn als selbst zu betreiben.",
  },
  {
    question: "Welche Airbnb-Preise sind für Tiny Houses realistisch?",
    answer: "In Deutschland liegen erfolgreiche Tiny House Listings zwischen 70 € und 160 € pro Nacht, je nach Lage und Ausstattung. Waldlagen, Seenähe oder besondere Architektur erzielen Premium-Preise. Die tiny Escapes-Standorte sind auf maximale Belegung und Premium-Preise ausgelegt.",
  },
];

export default function TinyHouseAirbnbPage() {
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
      <Script id="faq-schema-airbnb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="pt-32 pb-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Airbnb</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Kurzzeitvermietung · 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Tiny House auf Airbnb vermieten: Wirklich profitabel?
          </h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mb-6">
            Die ehrliche Antwort auf die meistgestellte Frage: Wie viel verdient man wirklich mit
            einem Tiny House auf Airbnb? Und warum ein professioneller Betreiber meist mehr Rendite
            bringt als Selbstvermietung.
          </p>
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["Airbnb", "Kurzzeitvermietung", "Belegungsquote", "Betreibermodell", "Echte Zahlen"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Zahlen-Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Echte Zahlen</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-8 tracking-tight">Was ein Tiny House auf Airbnb wirklich einbringt</h2>

          <div className="bg-gray-900 rounded-2xl p-8 text-white mb-8">
            <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-4">Szenario: 65.000 € Comfort · Waldlage · 100 €/Nacht</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                { label: "40 % Belegung", nights: "12 Nächte", umsatz: "1.200 €", investor: "480 €/Mo." },
                { label: "60 % Belegung", nights: "18 Nächte", umsatz: "1.800 €", investor: "720 €/Mo." },
                { label: "75 % Belegung", nights: "22 Nächte", umsatz: "2.200 €", investor: "880 €/Mo." },
              ].map((s) => (
                <div key={s.label} className={`rounded-xl p-4 ${s.label === "60 % Belegung" ? "bg-green-600" : "bg-white/10"}`}>
                  <p className="text-[10px] font-bold uppercase mb-2 text-green-200">{s.label}</p>
                  <p className="font-data text-xl font-black text-white">{s.investor}</p>
                  <p className="text-[11px] text-gray-400 mt-1">{s.umsatz} Umsatz · {s.nights}</p>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-gray-500">* Investor erhält 40 % der Netto-Einnahmen · Airbnb-Gebühren und Betriebskosten bereits abgezogen</p>
          </div>

          <h2 className="text-xl font-black text-gray-900 mb-6 tracking-tight">Selbstvermietung vs. Betreibermodell</h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 text-[12px] text-gray-500 font-semibold">Kriterium</th>
                    <th className="p-4 text-[12px] text-gray-500 font-semibold text-center">Selbst auf Airbnb</th>
                    <th className="p-4 text-[12px] font-black text-green-700 text-center bg-green-50">tiny Escapes Betreiber</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-[13px]">
                  {[
                    ["Einnahmenanteil Investor", "~70–80 %", "40 % (fix)"],
                    ["Zeitaufwand", "15–30 Std./Mo.", "~0 Std."],
                    ["Listing-Qualität", "Selbst", "Professionell"],
                    ["Dynamisches Pricing", "Manuell", "Automatisch"],
                    ["Gästebetreuung", "Du", "tiny Escapes"],
                    ["Belegungsquote", "40–55 %", "60–75 %"],
                    ["Netto-Ergebnis Investor", "Höherer % · niedrigere Quote", "Niedrigerer % · höhere Quote"],
                  ].map(([k, a, b]) => (
                    <tr key={k} className="hover:bg-gray-50/50">
                      <td className="p-4 font-medium text-gray-700">{k}</td>
                      <td className="p-4 text-center text-gray-500">{a}</td>
                      <td className="p-4 text-center font-bold text-green-700 bg-green-50/50">{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-green-700 rounded-2xl p-6 text-white mb-8">
            <p className="font-black text-base mb-2">💡 Die Mathematik dahinter:</p>
            <p className="text-green-100 text-[13px] leading-relaxed">
              Bei Selbstvermietung mit 75 % Einnahmenanteil aber nur 50 % Belegung: <strong className="text-white">15 Nächte × 100 € × 75 % = 1.125 €/Monat</strong>.
              Mit tiny Escapes: 40 % Anteil aber 65 % Belegung: <strong className="text-white">19,5 Nächte × 100 € × 40 % = 780 €/Monat</strong>.
              Dafür: null Aufwand, professionelles Management, skalierbar auf mehrere Assets.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/rechner/rendite" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Rendite selbst berechnen →</Link>
            <Link href="/wissen/kapitalanlage" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Kapitalanlage-Guide →</Link>
            <Link href="/wissen/tiny-house-standorte" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Beste Standorte →</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">← Wissens-Hub</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-gray-900 mb-8 tracking-tight">FAQ: Tiny House auf Airbnb</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-[14px] mb-2">{item.question}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-black mb-3">Dein Tiny House. Unser Betrieb.</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">Investor-Unterlagen mit Belegungshistorie und Standort-Analyse anfordern.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all">🔐 Unterlagen anfordern →</ModalButton>
              <Link href="/marktplatz" className="border border-white/20 text-white hover:border-green-400 hover:text-green-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">Projekte ansehen →</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
