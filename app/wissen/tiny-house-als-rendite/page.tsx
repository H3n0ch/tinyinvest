import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";

export const metadata = {
  title: "Tiny House als Renditeobjekt: Cashflow & Ertragsmodell 2026 | TinyInvest",
  description:
    "Wie funktioniert die Rendite eines Tiny Houses? Mieteinnahmen, Cashflow-Analyse, 40 % Investor-Anteil, Belegungsquote und vollständiges 5-Jahres-Modell erklärt.",
  keywords:
    "tiny house rendite, tiny house cashflow, tiny house mieteinnahmen, rendite ferienimmobilien 2026, tiny house investment rendite berechnen",
  alternates: {
    canonical: "https://tinyhouse.investments/wissen/tiny-house-als-rendite",
  },
  openGraph: {
    title: "Tiny House als Renditeobjekt – Cashflow & Ertragsmodell 2026",
    description:
      "40 % der Mieteinnahmen für den Investor, 60 % Belegung, 12–18 % IRR: So funktioniert das Tiny House Renditemodell.",
    url: "https://tinyhouse.investments/wissen/tiny-house-als-rendite",
  },
};

export default function TinyHouseAlsRenditePage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar variant="sub" />

      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Renditemodell</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Cashflow · Ertragsmodell · 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Tiny House als Renditeobjekt: Cashflow & Ertragsmodell erklärt
          </h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
            Wie entsteht die Rendite bei einem Tiny House Investment? Dieser Guide erklärt das gesamte Ertragsmodell – von der Belegungsquote über die 3-Wege-Aufteilung bis zum vollständigen 5-Jahres-Cashflow.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "21/9" }}>
            <img src="/images/outside/DSC08946.webp" alt="Tiny House Außenansicht – Renditeobjekt" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["40 % Investor-Anteil", "60–70 % Belegung", "12–18 % IRR p.a.", "Monatliche Auszahlung"].map((tag) => (
              <span key={tag} className="bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Das Modell ist einfach zu verstehen, aber erstaunlich leistungsfähig: Du kaufst ein Tiny House, tiny Escapes betreibt es als Ferienunterkunft, und du erhältst monatlich 40 Prozent der Netto-Einnahmen ausgezahlt – ohne selbst tätig werden zu müssen. Bei 60 Prozent Belegung und einem Durchschnittspreis von 100 Euro pro Nacht sind das rund 720 Euro monatlich für ein 79.000 Euro Objekt.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Was das Modell gegenüber klassischen Mietimmobilien überlegen macht, ist nicht allein die Rendite der Mieteinnahmen. Es ist die Kombination: Die 40-Prozent-Auszahlung bildet die Basis. Der §7g-Steuereffekt – Investitionsabzugsbetrag, Sonder-AfA und degressive AfA – verdoppelt in den ersten zwei Jahren die Gesamtrendite. Und der Restwert des Hauses sichert die Investition gegen einen Totalverlust ab.
            </p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Die 3-Wege-Aufteilung der Mieteinnahmen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              { icon: "🏡", party: "Host", percent: "bis 45 %", color: "bg-amber-50 border-amber-200 text-amber-800", textColor: "text-amber-700", desc: "Reinigung, Check-in, Grundstück, Gästebetreuung vor Ort." },
              { icon: "💼", party: "Investor", percent: "40 %", color: "bg-green-50 border-green-200 text-green-800", textColor: "text-green-700", desc: "Stellt das Kapital. Bekommt 40 % passiv – monatlich ausgezahlt." },
              { icon: "⚙️", party: "TinyInvest", percent: "~15 %", color: "bg-gray-50 border-gray-200 text-gray-800", textColor: "text-gray-600", desc: "Buchungsplattform, Marketing, Zahlungsabwicklung, Qualität." },
            ].map((item) => (
              <div key={item.party} className={`rounded-3xl border p-6 text-center ${item.color}`}>
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-black text-lg mb-1">{item.party}</h3>
                <p className={`font-black text-3xl mb-2 ${item.textColor}`}>{item.percent}</p>
                <p className="text-[12px] leading-relaxed opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 text-white mb-12">
            <p className="font-black text-base mb-2">💡 Warum ist dieses Modell so motivierend?</p>
            <p className="text-gray-300 text-[13px] leading-relaxed">
              Der Host verdient mehr, je besser seine Bewertungen sind – er hat also einen direkten finanziellen Anreiz, das Haus in Top-Zustand zu halten. TinyInvest verdient nur, wenn das Haus auch vermietet wird. Und der Investor profitiert von beiden Motivationen, ohne selbst tätig werden zu müssen.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden mb-12" style={{ aspectRatio: "16/7" }}>
            <img src="/images/outside/DSC08974.webp" alt="Tiny House Standort Außenansicht" className="w-full h-full object-cover" />
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Belegungsquote & Umsatz: Was ist realistisch?</h2>
          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left p-4 font-semibold text-gray-500 text-[12px]">Szenario</th>
                    <th className="p-4 font-semibold text-gray-500 text-[12px] text-center">Belegung</th>
                    <th className="p-4 font-semibold text-gray-500 text-[12px] text-center">Nächte/Jahr</th>
                    <th className="p-4 font-semibold text-gray-500 text-[12px] text-center">Umsatz/Jahr</th>
                    <th className="p-4 font-black text-green-700 text-[12px] text-center bg-green-50">Investor (40 %)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-[13px]">
                  {[
                    ["Konservativ", "50 %", "182", "18.250 €", "7.300 €"],
                    ["Realistisch ✓", "60 %", "219", "21.900 €", "8.760 €"],
                    ["Optimistisch", "70 %", "255", "25.500 €", "10.200 €"],
                    ["Peak Season", "80 %", "292", "29.200 €", "11.680 €"],
                  ].map(([szen, bel, naechte, umsatz, investor], i) => (
                    <tr key={szen} className={i === 1 ? "bg-green-50/50 font-semibold" : "hover:bg-gray-50/50"}>
                      <td className="p-4 text-gray-700">{szen}</td>
                      <td className="p-4 text-center text-gray-500">{bel}</td>
                      <td className="p-4 text-center text-gray-500">{naechte}</td>
                      <td className="p-4 text-center text-gray-500">{umsatz}</td>
                      <td className="p-4 text-center font-bold text-green-700 bg-green-50/50">{investor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[10px] text-gray-400 p-4 border-t border-gray-100">* Basis: 100 €/Nacht Durchschnittspreis. Tiny Escapes historisch: 60–70 % Belegung.</p>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Monatlicher Cashflow: TinyInvest Escape (79.000 €)</h2>
          <div className="bg-gray-900 rounded-2xl p-8 text-white mb-8">
            <div className="space-y-2.5 mb-6">
              {[
                { label: "Umsatz/Monat (219 Nächte ÷ 12 × 100 €)", value: "1.825 €", highlight: false },
                { label: "Host-Anteil (45 %)", value: "– 821 €", highlight: false },
                { label: "Plattform-Fee TinyInvest (15 %)", value: "– 274 €", highlight: false },
                { label: "💰 Investor-Auszahlung (40 %)", value: "730 €/Monat", highlight: true },
                { label: "Rendite auf Kaufpreis (ohne Steuer)", value: "~11,1 % p.a.", highlight: false },
                { label: "Effektive Rendite (mit §7g Steuereffekt)", value: "~16–18 % p.a.", highlight: true },
              ].map((row) => (
                <div key={row.label} className={`flex justify-between py-2 border-b border-white/10 ${row.highlight ? "text-green-400 font-bold" : "text-gray-300 text-[13px]"}`}>
                  <span>{row.label}</span>
                  <span className="font-data">{row.value}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <p className="text-gray-400 text-[10px] mb-1">Monatliche Auszahlung</p>
                <p className="font-data text-2xl font-black text-white">730 €</p>
              </div>
              <div className="bg-green-600 rounded-xl p-4 text-center">
                <p className="text-green-200 text-[10px] mb-1">Effektive Rendite p.a.</p>
                <p className="font-data text-2xl font-black text-white">16–18 %</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden mb-12" style={{ aspectRatio: "16/7" }}>
            <img src="/images/inside/DSC08918.webp" alt="Tiny House Küche und Wohnbereich" className="w-full h-full object-cover" />
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">5-Jahres-Cashflow: TinyInvest Escape 79.000 €</h2>
          <div className="space-y-3 mb-8">
            {[
              { jahr: "Jahr 0", event: "Kauf", cashflow: "– 79.000 €", steuer: "+ 16.380 € (IAB)", kumuliert: "– 62.620 €", highlight: false },
              { jahr: "Jahr 1", event: "IAB-Auflösung + AfA + Miete", cashflow: "+ 8.760 €", steuer: "+ 14.448 € (Sonder-AfA + deg. AfA)", kumuliert: "– 39.412 €", highlight: false },
              { jahr: "Jahr 2", event: "Mieteinnahmen", cashflow: "+ 8.760 €", steuer: "+ 1.800 € (lineare AfA)", kumuliert: "– 28.852 €", highlight: false },
              { jahr: "Jahr 3", event: "Mieteinnahmen", cashflow: "+ 8.760 €", steuer: "+ 1.800 €", kumuliert: "– 18.292 €", highlight: false },
              { jahr: "Jahr 4", event: "Mieteinnahmen", cashflow: "+ 8.760 €", steuer: "+ 1.800 €", kumuliert: "– 7.732 €", highlight: false },
              { jahr: "Jahr 5", event: "Mieteinnahmen + Restwert ~55k", cashflow: "+ 8.760 €", steuer: "+ 1.800 €", kumuliert: "+ 57.828 €", highlight: true },
            ].map((row) => (
              <div key={row.jahr} className={`rounded-xl p-5 border ${row.highlight ? "bg-green-50 border-green-200" : "bg-white border-gray-100"}`}>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${row.highlight ? "bg-green-200 text-green-800" : "bg-gray-100 text-gray-500"}`}>{row.jahr}</span>
                    <p className="font-semibold text-gray-900 text-sm mt-1">{row.event}</p>
                  </div>
                  <div className="flex gap-6 text-[12px]">
                    <div><p className="text-gray-400 text-[10px]">Cash</p><p className="font-data font-semibold text-gray-700">{row.cashflow}</p></div>
                    <div><p className="text-gray-400 text-[10px]">Steuervorteil</p><p className="font-data font-semibold text-green-700">{row.steuer}</p></div>
                    <div><p className="text-gray-400 text-[10px]">Kumuliert</p><p className={`font-data font-black ${row.highlight ? "text-green-700" : "text-gray-600"}`}>{row.kumuliert}</p></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-green-700 rounded-2xl p-6 text-white mb-10">
            <p className="font-black text-base mb-2">📊 IRR über 5 Jahre: ~13–15 % p.a.</p>
            <p className="text-green-100 text-[13px] leading-relaxed">
              Der IRR berücksichtigt den Zeitwert des Geldes und alle Cashflows über 5 Jahre. Durch den kombinierten Effekt aus Mieteinnahmen, Steuererstattungen und Restwert ergibt sich eine effektive Jahresrendite von 13–15 % – deutlich über klassischen Immobilien (3–4 %) oder Anleihen.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link href="/wissen/kapitalanlage" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Kapitalanlage-Guide →</Link>
            <Link href="/renditemodell" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">Interaktiver Renditerechner →</Link>
            <Link href="/wissen/afa-abschreibung" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">§7g AfA erklärt →</Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">← Wissens-Hub</Link>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-black text-gray-900 mb-4">Rendite selbst berechnen</h3>
          <p className="text-gray-500 text-sm mb-6">Unser interaktiver Renditerechner zeigt dir deine persönliche Netto-Rendite nach Steuer – in Echtzeit.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/renditemodell" className="bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-sm">Zum Renditerechner →</Link>
            <ModalButton className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">Unterlagen anfordern →</ModalButton>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
