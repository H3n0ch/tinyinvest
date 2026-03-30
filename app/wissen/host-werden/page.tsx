import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";

export const metadata = {
  title: "Host werden: Tiny House auf deinem Grundstück betreiben 2026 | TinyInvest",
  description:
    "Wie wirst du TinyInvest Host? Voraussetzungen, Verdienst (bis 45 %), Standortanforderungen und der komplette Bewerbungsprozess erklärt.",
  keywords:
    "tiny house host werden, grundstück tiny house vermieten, airbnb host tiny house, tiny escapes host, tiny house betreiber werden",
  alternates: {
    canonical: "https://tinyhouse.investments/wissen/host-werden",
  },
  openGraph: {
    title: "Host werden: Tiny House auf deinem Grundstück betreiben",
    description:
      "Kein Eigenkapital nötig: Stell dein Grundstück zur Verfügung und verdiene bis zu 45 % der Mieteinnahmen.",
    url: "https://tinyhouse.investments/wissen/host-werden",
  },
};

export default function HostWerdenPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar variant="sub" />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-[12px]">
            <Link href="/" className="text-gray-400 hover:text-green-700 transition-colors">Startseite</Link>
            <span className="text-gray-300">/</span>
            <Link href="/wissen" className="text-gray-400 hover:text-green-700 transition-colors">Wissen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-amber-600 font-semibold">Host werden</span>
          </div>
          <span className="text-amber-600 font-semibold text-xs uppercase tracking-widest">Für Hosts · Grundstückseigentümer · Guide 2026</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Host werden: Tiny House auf deinem Grundstück betreiben
          </h1>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl px-6 py-4 mb-5">
            <p className="text-amber-800 font-bold text-[14px] leading-relaxed">
              🏡 Du brauchst kein Kapital – nur ein geeignetes Grundstück. Der Investor kauft das Tiny House, du betreibst es vor Ort und verdienst bis zu 45 % der Mieteinnahmen monatlich.
            </p>
          </div>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mb-6">
            Als TinyInvest Host stellst du das Grundstück, übernimmst Check-in, Reinigung und Gästebetreuung –
            und profitierst von einem leistungsbasierten Einkommensmodell ohne eigenes Kapitalrisiko.
            Dieser Guide erklärt alles, was du wissen musst.
          </p>
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["Bis 45 % Einnahmenanteil", "Kein Eigenkapital", "EU-weit möglich", "Leistungsbasiert"].map((tag) => (
              <span key={tag} className="bg-amber-50 border border-amber-100 text-amber-700 font-semibold px-3 py-1 rounded-full">
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
              { anchor: "#modell", label: "1. Das Host-Modell erklärt" },
              { anchor: "#voraussetzungen", label: "2. Standort-Voraussetzungen" },
              { anchor: "#verdienst", label: "3. Verdienst & Einkommensrechner" },
              { anchor: "#aufgaben", label: "4. Was du als Host machst" },
              { anchor: "#bewerbung", label: "5. So bewirbst du dich" },
            ].map((item) => (
              <a key={item.anchor} href={item.anchor} className="text-[13px] text-amber-600 hover:text-amber-800 font-semibold transition-colors">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Section 1: Modell */}
      <section id="modell" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-amber-600 font-semibold text-xs uppercase tracking-widest">Das Grundprinzip</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-6 tracking-tight">
            Das Host-Modell: Wie funktioniert es?
          </h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            TinyInvest verbindet Investoren mit Grundstückseigentümern – das ist das Herzstück des Modells.
            Du bringst den Standort, der Investor bringt das Geld, TinyInvest bringt die Buchungsplattform.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              { step: "01", icon: "🏡", title: "Du bringst das Grundstück", desc: "Du stellst einen geeigneten Stellplatz zur Verfügung – privat, landwirtschaftlich oder gewerblich. Mindestens 50–80 m² ebene Fläche mit Zufahrt.", color: "border-amber-200 bg-amber-50" },
              { step: "02", icon: "💼", title: "Investor kauft das Haus", desc: "TinyInvest vermittelt einen passenden Investor, der das Tiny House kauft. Du schließt einen Betreibervertrag ab – kein Eigenkapital nötig.", color: "border-green-200 bg-green-50" },
              { step: "03", icon: "💰", title: "Beide verdienen", desc: "Du bekommst bis zu 45 % der monatlichen Mieteinnahmen – je besser deine Bewertungen, desto mehr. Der Investor erhält 40 % passiv.", color: "border-gray-200 bg-gray-50" },
            ].map((item) => (
              <div key={item.step} className={`rounded-3xl border p-6 ${item.color}`}>
                <div className="text-3xl mb-3">{item.icon}</div>
                <span className="text-[10px] font-bold text-gray-400">SCHRITT {item.step}</span>
                <h3 className="font-black text-gray-900 text-base mt-1 mb-2">{item.title}</h3>
                <p className="text-[13px] text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 text-white">
            <p className="font-black text-base mb-2">💡 Warum das Modell für Hosts attraktiv ist</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px] text-gray-300">
              {[
                "Kein Eigenkapital für das Tiny House nötig",
                "Kein eigenes Unternehmens- oder Investitionsrisiko",
                "Leistungsbasierte Vergütung: mehr Einsatz = mehr Verdienst",
                "Plattform übernimmt Marketing & Buchungsverwaltung",
                "Ganzjähriges passives Zusatzeinkommen",
                "Exit nach vereinbarter Laufzeit ohne Verlust",
              ].map((point, i) => (
                <div key={i} className="flex gap-2">
                  <span className="text-amber-400 flex-shrink-0">✓</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Voraussetzungen */}
      <section id="voraussetzungen" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-amber-600 font-semibold text-xs uppercase tracking-widest">Standortkriterien</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-6 tracking-tight">
            Welche Standort-Voraussetzungen gibt es?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            {[
              { icon: "📐", title: "Mindestfläche", items: ["50–80 m² ebene Grundfläche", "Ausreichend Platz für Terrasse (optional)", "Stabile Zufahrt für LKW/Tieflader", "Keine starke Hanglage"], good: true },
              { icon: "🌍", title: "Lage", items: ["Tourismusregionen bevorzugt", "Natur, Wald, Wasser in der Nähe", "Städtenähe < 60 min vertretbar", "EU-weit möglich (auch Ausland)"], good: true },
              { icon: "🔌", title: "Infrastruktur (On-Grid)", items: ["Strom-Anschluss (230V) wünschenswert", "Wasserversorgung wünschenswert", "Off-Grid-Modelle auch ohne Anschluss", "Abwasserentsorgung bei Off-Grid via Komposttoilette"], good: true },
              { icon: "📋", title: "Genehmigung", items: ["Bauplanung/Stellplatzgenehmigung", "Temporäres Aufstellen oft einfacher", "TinyInvest unterstützt bei Genehmigungsfragen", "Gewerbliche Nutzung (Vermietung) anmelden"], good: false },
            ].map((section) => (
              <div key={section.title} className="bg-white border border-gray-100 rounded-2xl p-5">
                <div className="flex gap-3 mb-3">
                  <span className="text-2xl">{section.icon}</span>
                  <h3 className="font-black text-gray-900 text-[14px] mt-1">{section.title}</h3>
                </div>
                <ul className="space-y-1.5">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex gap-2 text-[12px] text-gray-600">
                      <span className={section.good ? "text-green-500" : "text-amber-500"}>→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
            <p className="font-black text-amber-800 text-sm mb-2">🌿 Ideal geeignete Grundstückstypen</p>
            <div className="flex flex-wrap gap-2">
              {["Bauernhof/Landwirtschaft", "Privater Garten >800m²", "Campingplatz", "Ferienpark", "Naturgrundstück", "Seegrundstück", "Waldrand", "Weinberg"].map((type) => (
                <span key={type} className="text-[11px] bg-white border border-amber-200 text-amber-700 font-semibold px-3 py-1 rounded-full">{type}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Verdienst */}
      <section id="verdienst" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-amber-600 font-semibold text-xs uppercase tracking-widest">Einkommensmodell</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-6 tracking-tight">
            Was kannst du als Host verdienen?
          </h2>
          <div className="bg-gray-900 rounded-2xl p-8 text-white mb-8">
            <p className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold mb-6">Beispielrechnung: TinyInvest Escape (79.000 €) · 60 % Belegung</p>
            <div className="space-y-3 mb-6">
              {[
                { label: "Gesamt-Mieteinnahmen/Monat", value: "1.825 €", highlight: false },
                { label: "Dein Anteil als Host (bis 45 %)", value: "bis 821 €/Monat", highlight: true },
                { label: "Investor (40 %)", value: "730 €", highlight: false },
                { label: "TinyInvest Plattform (15 %)", value: "274 €", highlight: false },
                { label: "Dein Jahresverdienst (45 %)", value: "bis 9.852 €", highlight: true },
              ].map((row) => (
                <div key={row.label} className={`flex justify-between py-2 border-b border-white/10 ${row.highlight ? "text-amber-300 font-bold" : "text-gray-300 text-[13px]"}`}>
                  <span>{row.label}</span>
                  <span className="font-data">{row.value}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <p className="text-gray-400 text-[10px] mb-1">Monatseinkommen (45 %)</p>
                <p className="font-data text-2xl font-black text-white">bis 821 €</p>
              </div>
              <div className="bg-amber-600 rounded-xl p-4 text-center">
                <p className="text-amber-200 text-[10px] mb-1">Jahreseinkommen</p>
                <p className="font-data text-2xl font-black text-white">bis 9.852 €</p>
              </div>
            </div>
          </div>
          <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
            <p className="font-black text-green-800 text-sm mb-2">🏆 Leistungsbasierte Vergütung</p>
            <p className="text-green-700 text-[13px] leading-relaxed">
              Dein Anteil ist nicht fest – er hängt von deiner Leistung ab. Exzellente Gäste-Bewertungen,
              schnelle Reaktionszeiten und gepflegte Ausstattung werden belohnt. Hosts mit Top-Ratings
              erhalten den vollen 45 %-Anteil. Das motiviert – und sichert dem Investor gleichzeitig
              bestmögliche Belegungsquoten.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Aufgaben */}
      <section id="aufgaben" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-amber-600 font-semibold text-xs uppercase tracking-widest">Deine Rolle</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-6 tracking-tight">
            Was machst du als TinyInvest Host?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: "🔑", title: "Check-in & Check-out", desc: "Gäste empfangen, Schlüsselübergabe (oder Smart-Lock), kurze Einweisung ins Haus. Dauert 15–30 Minuten pro Buchung.", freq: "Pro Buchung" },
              { icon: "🧹", title: "Reinigung", desc: "Das Tiny House nach jedem Aufenthalt reinigen. Standard: 1–2 Stunden pro Reinigung je nach Modell. Kann auch an einen Reinigungsservice delegiert werden.", freq: "Pro Buchung" },
              { icon: "🌿", title: "Grundstückspflege", desc: "Außenbereich, Terrasse und Umgebung des Tiny Houses gepflegt halten. Saisonale Arbeit: Rasen mähen, Laub entfernen etc.", freq: "Wöchentlich" },
              { icon: "💬", title: "Gäste-Kommunikation", desc: "Anfragen beantworten, Fragen während des Aufenthalts klären. Plattform (tiny Escapes) übernimmt Buchungsmanagement und Bezahlung.", freq: "Laufend" },
              { icon: "🔧", title: "Kleine Wartungsarbeiten", desc: "Glühbirnen wechseln, kleine Reparaturen, Solarpanel reinigen. Größere Reparaturen werden durch TinyInvest koordiniert.", freq: "Gelegentlich" },
              { icon: "📸", title: "Listing-Qualität sichern", desc: "Auf Wunsch aktuelle Fotos, Bewertungen beantworten und Verbesserungsvorschläge an TinyInvest kommunizieren.", freq: "Monatlich" },
            ].map((task) => (
              <div key={task.title} className="bg-white border border-gray-100 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">{task.icon}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-black text-gray-900 text-[13px]">{task.title}</h3>
                      <span className="text-[9px] bg-amber-100 text-amber-700 font-bold px-2 py-0.5 rounded-full">{task.freq}</span>
                    </div>
                    <p className="text-gray-500 text-[12px] leading-relaxed">{task.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <p className="font-black text-gray-900 text-sm mb-3">⏱️ Realistischer Zeitaufwand</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              {[
                { label: "Bei 4 Buchungen/Monat", value: "~8 Std.", sub: "Check-in + Reinigung" },
                { label: "Grundstückspflege", value: "~2–3 Std.", sub: "Pro Monat" },
                { label: "Gesamt", value: "~10–12 Std.", sub: "Pro Monat" },
              ].map((item) => (
                <div key={item.label} className="bg-amber-50 rounded-xl p-4">
                  <p className="text-gray-500 text-[10px] mb-1">{item.label}</p>
                  <p className="font-black text-amber-700 text-xl">{item.value}</p>
                  <p className="text-gray-400 text-[10px]">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Bewerbung */}
      <section id="bewerbung" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-amber-600 font-semibold text-xs uppercase tracking-widest">Bewerbungsprozess</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-4 tracking-tight">
            So wirst du TinyInvest Host: Der Prozess
          </h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            Von der ersten Anfrage bis zur ersten Buchung – typisch 4–8 Wochen.
          </p>
          <div className="relative mb-10">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-amber-100 hidden md:block" />
            <div className="space-y-4">
              {[
                { num: "1", title: "Anfrage & Standortbeschreibung", desc: "Du schreibst uns kurz: Wo liegt dein Grundstück? Wie groß ist die verfügbare Fläche? Gibt es Strom/Wasser? Wir schauen innerhalb von 24h drauf.", badge: "1 Tag" },
                { num: "2", title: "Kostenlose Standortprüfung", desc: "TinyInvest bewertet deinen Standort nach: Lage, Tourismusattraktivität, Genehmigungspotenzial, Infrastruktur. Du bekommst ehrliches Feedback.", badge: "2–5 Tage" },
                { num: "3", title: "Positives Feedback & Investor-Matching", desc: "Wenn dein Standort geeignet ist: TinyInvest sucht einen passenden Investor für dein Grundstück. Du kannst das Modell und den Investor kennenlernen.", badge: "1–2 Wochen" },
                { num: "4", title: "Betreibervertrag & Gewerbe", desc: "Du unterschreibst einen Betreibervertrag. TinyInvest hilft dir bei der Gewerbeanmeldung (falls nötig) und der Genehmigungsfrage.", badge: "1 Woche" },
                { num: "5", title: "Aufbau & Einweisung", desc: "Das Tiny House wird geliefert, aufgebaut und buchungsbereit eingerichtet. Du wirst in alle Abläufe eingewiesen – Check-in, Reinigung, Dashboard.", badge: "1–2 Wochen" },
                { num: "6", title: "Erste Buchungen & Auszahlung", desc: "Das Haus wird auf tiny Escapes + Airbnb gelistet. Erste Buchungen kommen typisch nach 2–4 Wochen. Du bekommst monatlich deine Auszahlung.", badge: "Laufend" },
              ].map((step, i) => (
                <div key={i} className="relative flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center text-xl font-black text-white shadow-sm z-10">
                    {step.num}
                  </div>
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 flex-grow">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                      <h4 className="font-black text-gray-900 text-[14px]">{step.title}</h4>
                      <span className="text-[9px] bg-amber-100 text-amber-700 font-bold px-2 py-0.5 rounded-full">{step.badge}</span>
                    </div>
                    <p className="text-gray-500 text-[13px] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <p className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold mb-3">Bereit, Host zu werden?</p>
            <h3 className="text-xl font-black mb-3">Jetzt Standort kostenlos prüfen lassen</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
              Schick uns eine kurze Beschreibung deines Grundstücks. Wir melden uns innerhalb von 24 Stunden.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ModalButton className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-sm">
                🏡 Als Host bewerben →
              </ModalButton>
              <Link href="/hosts" className="border border-white/20 text-white hover:border-amber-400 hover:text-amber-400 font-semibold px-6 py-3.5 rounded-full text-sm transition-all">
                Hosts-Übersicht ansehen →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-10 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap gap-4">
            <Link href="/hosts" className="border border-amber-200 text-amber-700 hover:bg-amber-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">
              Host-Seite →
            </Link>
            <Link href="/wissen/tiny-house-als-rendite" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">
              Renditemodell für Investoren →
            </Link>
            <Link href="/wissen" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">
              ← Zurück zum Wissens-Hub
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
