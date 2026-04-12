import Link from "next/link";

const zielgruppen = [
  {
    icon: "🧾",
    title: "Steuerberater & Buchhalter",
    desc: "Du kennst Unternehmer, Freiberufler oder gut verdienende Angestellte, die Jahr für Jahr zu viel ans Finanzamt abführen. §7g ist für deine Mandanten ein konkretes Instrument – du bringst die Verbindung.",
    highlight: "Ø 28.000 € Steuervorteil pro Mandat",
  },
  {
    icon: "🏗️",
    title: "Immobilienmakler & Finanzberater",
    desc: "Mobile Sachwerte ergänzen jedes klassische Immobilien-Portfolio. Kein Grundbuch, kein Notar, keine Kaufnebenkosten – dafür volle §7g-Abschreibung und 10–18 % Rendite. Ein Produkt, das sich von selbst erklärt.",
    highlight: "Kein Konkurrenzprodukt – andere Klasse",
  },
  {
    icon: "🎤",
    title: "Unternehmer-Netzwerker & Speaker",
    desc: "Du bewegst dich regelmäßig in Unternehmerkreisen, auf Events oder in Mastermind-Gruppen. Wer dort von TinyInvest hört, will mehr wissen. Du machst die Verbindung – wir übernehmen alles Weitere.",
    highlight: "Ein gutes Gespräch = bis zu 3.000 € Provision",
  },
];

const schritte = [
  {
    num: "01",
    title: "Partner-Anfrage stellen",
    desc: "Du füllst unser kurzes Formular aus. Wir melden uns innerhalb von 24h – kein Bewerbungsprozess, kein Papierkram.",
  },
  {
    num: "02",
    title: "Empfehlungspaket erhalten",
    desc: "Du bekommst sofort: dein persönliches Partner-Link-Dashboard, druckfertige Unterlagen, das §7g-Factsheet im Co-Branding und direkten WhatsApp-Kontakt zum TinyInvest-Team.",
  },
  {
    num: "03",
    title: "Du öffnest die Tür – wir übernehmen den Rest",
    desc: "Du stellst den Kontakt her. TinyInvest führt das Beratungsgespräch, liefert die Zahlen, klärt Steuerfragen. Du musst nichts verkaufen.",
  },
  {
    num: "04",
    title: "Provision bei Kaufvertrag",
    desc: "Sobald dein Kontakt kauft, erhältst du deine Provision direkt per Überweisung. Kein Deckel, keine Wartezeit, keine versteckten Bedingungen.",
  },
];

const paketItems = [
  { icon: "🔗", text: "Persönlicher Empfehlungslink mit eigenem Dashboard" },
  { icon: "📄", text: "Druckfertige Investoren-Präsentation (PDF, Co-Branding)" },
  { icon: "🧾", text: "§7g-Factsheet zum Weitergeben an Steuerberater" },
  { icon: "💬", text: "Direkter WhatsApp-Draht zum TinyInvest-Team" },
  { icon: "📊", text: "Echtzeit-Tracking deiner vermittelten Anfragen" },
  { icon: "📅", text: "Monatsweiser Partner-Call mit dem Team" },
];

export default function Vertriebspartner() {
  return (
    <main className="bg-white min-h-screen">

      {/* Hero */}
      <section className="pt-32 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700 transition-colors">Startseite</Link>
            <span className="text-gray-300">/</span>
            <span className="text-green-700 font-semibold">Partner werden</span>
          </div>

          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Empfehlungsprogramm · TinyInvest Partner</span>

          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-5 tracking-tight leading-tight">
            Das Produkt erklärt sich durch §7g.<br />
            <span className="text-green-700">Du brauchst nur das richtige Netzwerk.</span>
          </h1>

          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mb-8">
            TinyInvest sucht keine klassischen Verkäufer. Wir suchen Menschen, die Unternehmer, Freiberufler
            und Gutverdiener kennen – und ihnen einen echten Mehrwert zeigen können: ein bewegliches Wirtschaftsgut,
            das das Finanzamt teilfinanziert und monatlich Cashflow liefert.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#partner-anfrage"
              className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-sm"
            >
              Jetzt Partner werden →
            </a>
            <Link
              href="/renditemodell"
              className="inline-flex items-center gap-2 border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-6 py-3.5 rounded-full text-sm transition-all"
            >
              Renditemodell ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* KPI-Bar */}
      <section className="bg-gray-950 border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "1.500–3.000 €", label: "Provision pro Haus", sub: "Abhängig vom Modell" },
              { value: "24 h", label: "Onboarding-Zeit", sub: "Vom Antrag zum ersten Link" },
              { value: "0 €", label: "Einstiegskosten", sub: "Kein Vorschuss, kein Risiko" },
              { value: "100 %", label: "Passiver Vertrieb", sub: "Beratung übernimmt TinyInvest" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-data text-xl font-black text-green-400">{s.value}</p>
                <p className="text-[11px] font-bold text-white mt-1">{s.label}</p>
                <p className="text-[10px] text-gray-500 mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zielgruppen */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Für wen ist das gemacht?</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2 tracking-tight">
              Du kennst die richtigen Menschen.
            </h2>
            <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
              Das TinyInvest-Empfehlungsprogramm ist nichts für jeden. Es passt zu dir,
              wenn du regelmäßig in Kontakt mit Unternehmern, Selbstständigen oder
              Guterverdienenden stehst – und ihnen ein seriöses, steuerlich relevantes Produkt
              zeigen kannst.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {zielgruppen.map((z) => (
              <div key={z.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-7">
                <div className="text-3xl mb-4">{z.icon}</div>
                <h3 className="font-black text-gray-900 text-base mb-2">{z.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed mb-4">{z.desc}</p>
                <span className="inline-block bg-green-100 text-green-700 text-[10px] font-bold px-3 py-1 rounded-full">
                  {z.highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prozess */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Der Ablauf</span>
            <h2 className="text-2xl font-black text-gray-900 mt-2 tracking-tight">
              So läuft eine Empfehlung ab
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {schritte.map((s) => (
              <div key={s.num} className="bg-white border border-gray-100 rounded-2xl p-6 flex gap-4 items-start shadow-sm">
                <div
                  className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-black text-white shadow-sm"
                  style={{ background: "linear-gradient(135deg, #2d6a4f, #52b788)" }}
                >
                  {s.num}
                </div>
                <div>
                  <h3 className="font-black text-gray-900 text-[14px] mb-1">{s.title}</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Empfehlungspaket */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left: Paket-Inhalt */}
            <div>
              <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Das bekommst du</span>
              <h2 className="text-2xl font-black text-gray-900 mt-2 mb-6 tracking-tight">
                Dein TinyInvest Partner-Paket
              </h2>
              <div className="space-y-3">
                {paketItems.map((item) => (
                  <div key={item.text} className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4">
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <span className="text-gray-700 text-[14px] font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Provisions-Karten */}
            <div className="flex flex-col gap-5">
              <div className="bg-gray-900 rounded-2xl p-7 text-white">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-3">Provisionsbeispiel</p>
                <h3 className="text-xl font-black mb-4">Was eine Empfehlung wert ist</h3>
                <div className="space-y-3">
                  {[
                    { modell: "TinyInvest Comfort (65.000 €)", provision: "ab 1.500 €" },
                    { modell: "TinyInvest Escape (79.000 €)", provision: "ab 1.900 €" },
                    { modell: "TinyInvest Suite (95.000 €)", provision: "ab 2.400 €" },
                    { modell: "Mehrere Einheiten", provision: "individuell, kein Deckel" },
                  ].map((row) => (
                    <div key={row.modell} className="flex justify-between items-center py-2.5 border-b border-white/10 text-[13px]">
                      <span className="text-gray-300">{row.modell}</span>
                      <span className="text-green-400 font-bold font-data">{row.provision}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 text-[11px] mt-4">Auszahlung direkt nach Kaufvertrag. Keine Wartezeit.</p>
              </div>

              <div className="bg-green-700 rounded-2xl p-6 text-white">
                <p className="text-green-200 text-[11px] font-semibold uppercase tracking-widest mb-2">Kein Risiko</p>
                <p className="font-black text-lg mb-2">Keine Lizenz. Keine Vorleistung. Keine Kaltakquise.</p>
                <p className="text-green-100 text-[13px] leading-relaxed">
                  Du empfiehlst ein Produkt, an das du glaubst – weil es für deine Kontakte echten
                  Mehrwert schafft. TinyInvest übernimmt Beratung, Zahlenwerk und Abschluss.
                  Du öffnest die Tür.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Formular-Anker */}
      <section id="partner-anfrage" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Jetzt loslegen</span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-3 mb-4 tracking-tight">
            Partner-Anfrage stellen
          </h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            Schreib uns kurz, wer du bist und welches Netzwerk du mitbringst.
            Wir melden uns innerhalb von 24 Stunden mit deinem persönlichen Partner-Paket.
          </p>

          <a
            href="mailto:partner@tinyhouse.investments?subject=Partner-Anfrage&body=Hallo%20TinyInvest-Team,%0A%0AIch%20m%C3%B6chte%20als%20Partner%20mitmachen.%0A%0AMein%20Hintergrund:%0A%0AMein%20Netzwerk:%0A%0AViele%20Gr%C3%BC%C3%9Fe"
            className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold px-10 py-4 rounded-full text-sm transition-all shadow-md"
          >
            📩 Partner-Anfrage senden →
          </a>
          <p className="text-gray-400 text-[12px] mt-4">
            Oder direkt an:{" "}
            <a href="mailto:partner@tinyhouse.investments" className="text-green-700 hover:underline font-semibold">
              partner@tinyhouse.investments
            </a>
          </p>

          <div className="mt-10 border-t border-gray-200 pt-8">
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-4">Mehr über das Produkt</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              {[
                { href: "/renditemodell", label: "Renditemodell verstehen", sub: "40 % Cashflow · 12–15 % IRR p.a." },
                { href: "/steuervorteil", label: "§7g Steuervorteil", sub: "IAB · Sonder-AfA · bis 40 % zurück" },
                { href: "/so-funktioniert-es", label: "So funktioniert TinyInvest", sub: "Der Prozess in 4 Schritten" },
                { href: "/marktplatz", label: "Aktuelle Objekte", sub: "Verfügbare Einheiten & Standorte" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group bg-white border border-gray-100 rounded-xl p-4 hover:border-green-200 hover:shadow-sm transition-all"
                >
                  <p className="font-black text-gray-900 text-[13px] group-hover:text-green-700 transition-colors">{link.label} →</p>
                  <p className="text-gray-400 text-[11px] mt-0.5">{link.sub}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
