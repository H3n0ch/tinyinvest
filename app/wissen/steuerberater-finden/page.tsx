import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ModalButton from "../../components/ModalButton";
import Link from "next/link";

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
    description:
      "Nicht jeder Steuerberater kennt §7g EStG und IAB. So findest du den richtigen – mit Checkliste und konkreten Fragen.",
    url: "https://tinyhouse.investments/wissen/steuerberater-finden",
  },
};

export default function SteuerberaterFindenPage() {
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
            <span className="text-green-700 font-semibold">Steuerberater finden</span>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Steuerberatung · §7g EStG · Praxis-Guide</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 tracking-tight leading-tight">
            Den richtigen §7g-Steuerberater finden: Checkliste 2026
          </h1>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl px-6 py-4 mb-5">
            <p className="text-amber-800 font-bold text-[14px] leading-relaxed">
              ⚠️ Nicht jeder Steuerberater kennt §7g EStG bei beweglichen Wirtschaftsgütern. Dieser Guide hilft dir, den richtigen zu finden – und was du im Erstgespräch fragen solltest.
            </p>
          </div>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mb-6">
            Der IAB, die Sonder-AfA und die degressive AfA sind mächtige Instruments – aber nur wenn dein Steuerberater
            sie kennt und korrekt anwendet. Viele Berater spezialisieren sich auf klassische Immobilien und übersehen
            den §7g-Vorteil bei beweglichen Wirtschaftsgütern wie Tiny Houses.
          </p>
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["§7g EStG", "IAB", "Sonder-AfA", "Bewegliche Wirtschaftsgüter", "Steueroptimierung"].map((tag) => (
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
              { anchor: "#warum", label: "1. Warum der Steuerberater entscheidend ist" },
              { anchor: "#checkliste", label: "2. Checkliste: Den richtigen finden" },
              { anchor: "#fragen", label: "3. Diese Fragen musst du stellen" },
              { anchor: "#unterlagen", label: "4. Was du mitbringen solltest" },
              { anchor: "#netzwerk", label: "5. TinyInvest Steuerberater-Netzwerk" },
            ].map((item) => (
              <a key={item.anchor} href={item.anchor} className="text-[13px] text-green-700 hover:text-green-900 font-semibold transition-colors">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Section 1 */}
      <section id="warum" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Grundlage</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-6 tracking-tight">
            Warum der Steuerberater entscheidend ist
          </h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            §7g EStG ist ein hochspezialisierter Bereich. Viele Steuerberater kennen ihn grundsätzlich –
            aber die korrekte Anwendung bei einem Tiny House auf Vlemmix Trailer ist für viele Neuland.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
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
          <div className="bg-gray-900 rounded-2xl p-6 text-white">
            <p className="font-black text-base mb-2">💶 Was der richtige Steuerberater wert ist</p>
            <p className="text-gray-300 text-[13px] leading-relaxed">
              Die Differenz zwischen einem gut informierten und einem schlecht informierten Steuerberater kann
              bei einem 80.000 € Investment <strong className="text-white">5.000–15.000 €</strong> an entgangenen Steuervorteilen ausmachen.
              Gute Steuerberatungskosten amortisieren sich durch die Mehrersparnis in der Regel innerhalb von Wochen.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Checkliste */}
      <section id="checkliste" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Auswahlhilfe</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-8 tracking-tight">
            Checkliste: Den richtigen Steuerberater finden
          </h2>
          <div className="space-y-4">
            {[
              {
                icon: "🔍",
                title: "Suche nach Spezialisierung",
                items: [
                  "Suche auf steuerberatersuche.de nach Stichworten wie 'Gewerbe', 'Vermietung', 'Abschreibung'",
                  "Kanzleien mit Erfahrung in §7g EStG oder beweglichen Wirtschaftsgütern bevorzugen",
                  "Frage bewusst: 'Haben Sie Mandanten mit Investitionsabzugsbeträgen?'",
                  "Steuerberater-Empfehlungen aus Investment-Communities/Netzwerken",
                ],
              },
              {
                icon: "📋",
                title: "Online-Vorbereitung",
                items: [
                  "Website der Kanzlei auf Themen prüfen: Gewerbesteuer, Betriebsvermögen, Sachwert",
                  "LinkedIn/XING Profil des Beraters: Schreibt er/sie über §7g, degressive AfA?",
                  "Google-Bewertungen nach 'Unternehmer', 'Gewerbe', 'Investment' scannen",
                  "Mandantenstruktur klären: Viele Privatpersonen oder Unternehmer?",
                ],
              },
              {
                icon: "🤝",
                title: "Im Erstgespräch prüfen",
                items: [
                  "Reagiert der Berater sofort kompetent auf '§7g EStG bei beweglichem Wirtschaftsgut'?",
                  "Fragt er nach Belegungsquote, gewerblicher Nutzung und Standort?",
                  "Spricht er von selbst die Sonder-AfA-Kombinationsmöglichkeiten an?",
                  "Wie geht er mit dem Thema 'Tiny House als Fahrzeug vs. Immobilie' um?",
                ],
              },
            ].map((section) => (
              <div key={section.title} className="bg-white border border-gray-100 rounded-2xl p-6">
                <div className="flex gap-3 mb-4">
                  <span className="text-2xl">{section.icon}</span>
                  <h3 className="font-black text-gray-900 text-base mt-1">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-[13px] text-gray-600">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-[10px] font-bold mt-0.5">{i + 1}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Fragen */}
      <section id="fragen" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Erstgespräch</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-4 tracking-tight">
            Diese 7 Fragen musst du im Erstgespräch stellen
          </h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            Stell diese Fragen direkt – und beobachte, ob der Berater kompetent und ohne zögerliches Nachschlagen antwortet.
          </p>
          <div className="space-y-4">
            {[
              {
                nr: "01",
                frage: "Haben Sie Erfahrung mit §7g EStG bei beweglichen Wirtschaftsgütern?",
                erwartung: "Sofortige Bejahung + Verweis auf Praxisbeispiele. Keine langen Pausen oder 'Das müsste ich nachschauen'.",
                ampel: "green",
              },
              {
                nr: "02",
                frage: "Wie optimieren Sie die Kombination aus IAB, Sonder-AfA und degressiver AfA?",
                erwartung: "Der Berater erklärt das Timing: IAB im Vorjahr bei hohem Gewinn, Auflösung im Kaufjahr, dann Sonder-AfA 40 % + deg. AfA 30 % auf Restwert.",
                ampel: "green",
              },
              {
                nr: "03",
                frage: "Was ist die AfA-Nutzungsdauer für ein Tiny House auf Vlemmix Trailer?",
                erwartung: "8 Jahre (12,5 % p.a. linear) – gemäß AfA-Tabelle für Straßenfahrzeuge/Anhänger. Nicht 33 oder 50 Jahre wie bei Gebäuden.",
                ampel: "green",
              },
              {
                nr: "04",
                frage: "Wie dokumentieren wir die gewerbliche Nutzung korrekt für das Finanzamt?",
                erwartung: "Besprechung von: Betriebsanmeldung, Buchungsbelegen, Betreibervertrag, Einnahmen-Überschuss-Rechnung, Abgrenzung zu Liebhaberei.",
                ampel: "amber",
              },
              {
                nr: "05",
                frage: "Gilt der IAB auch, wenn das Tiny House im EU-Ausland steht?",
                erwartung: "Ja, da das Gewerbe in Deutschland ist. Hinweis auf DBA-Regelungen. Kein pauschales 'Nein' ohne Begründung.",
                ampel: "green",
              },
              {
                nr: "06",
                frage: "Wie behandeln wir die Auflösung des IAB buchhalterisch?",
                erwartung: "IAB erhöht im Kaufjahr den Gewinn (Auflösung), gleichzeitig reduzieren Sonder-AfA und deg. AfA den Restbuchwert. Per Saldo muss der Nettoeffekt positiv sein.",
                ampel: "amber",
              },
              {
                nr: "07",
                frage: "Was kostet ein vollständiges Mandat für §7g-Optimierung?",
                erwartung: "Transparente Honorarauskunft. Üblich: 1.500–3.500 € p.a. für gewerbliche EÜR + §7g-Begleitung. Vorsicht bei Flatrates ohne Leistungsbeschreibung.",
                ampel: "neutral",
              },
            ].map((item) => (
              <div key={item.nr} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-700 flex items-center justify-center text-[11px] font-black text-white">{item.nr}</div>
                  <div>
                    <p className="font-black text-gray-900 text-[14px] mb-2">{item.frage}</p>
                    <div className="flex items-start gap-2">
                      <span className={`flex-shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full mt-0.5 ${item.ampel === "green" ? "bg-green-100 text-green-700" : item.ampel === "amber" ? "bg-amber-100 text-amber-700" : "bg-gray-100 text-gray-600"}`}>
                        {item.ampel === "green" ? "Erwartet" : item.ampel === "amber" ? "Wichtig" : "Info"}
                      </span>
                      <p className="text-gray-500 text-[12px] leading-relaxed">{item.erwartung}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Unterlagen */}
      <section id="unterlagen" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Vorbereitung</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-6 tracking-tight">
            Was du zum Steuerberater-Gespräch mitbringen solltest
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: "📊", title: "Steuerbescheid Vorjahr", desc: "Zeigt deinen Grenzsteuersatz, Gewinnhöhe und derzeitige Steuerbelastung – Basis für IAB-Berechnung." },
              { icon: "📋", title: "Kaufvertrag / Asset-Daten", desc: "Kaufpreis, Modell, Trailer-Zertifikat (VIN/FIN-Nachweis). TinyInvest stellt dir einen vollständigen Informationspack zur Verfügung." },
              { icon: "💼", title: "Betriebsanmeldung", desc: "Oder die Absicht, ein Gewerbe anzumelden. Ohne gewerbliche Tätigkeit kein §7g." },
              { icon: "🏡", title: "Betreibervertrag tiny Escapes", desc: "Belegt die gewerbliche Nutzungsabsicht und die Einkommensstruktur (40 % Mietanteil)." },
              { icon: "📄", title: "§7g Factsheet von TinyInvest", desc: "Das kostenlose Steuer-Factsheet mit allen relevanten Kennzahlen. Dein Steuerberater bekommt direkt alle Infos." },
              { icon: "🗓️", title: "Investitionszeitraum", desc: "Wann soll das Tiny House gekauft werden? Relevant für die IAB-Timing-Optimierung (Vorjahr vs. Kaufjahr)." },
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
          <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
            <p className="font-black text-green-800 text-sm mb-2">💡 Tipp: TinyInvest §7g Factsheet</p>
            <p className="text-green-700 text-[13px] leading-relaxed">
              TinyInvest stellt dir ein kostenloses Steuer-Factsheet zusammen, das alle relevanten Daten enthält:
              Asset-Typ, AfA-Nutzungsdauer, VIN-Nachweis, gewerbliche Nutzungsbelege und eine Musterkalkulation.
              Viele Steuerberater können direkt loslegen, wenn sie dieses Dokument erhalten.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Netzwerk */}
      <section id="netzwerk" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">TinyInvest Service</span>
          <h2 className="text-2xl font-black text-gray-900 mt-2 mb-4 tracking-tight">
            TinyInvest Steuerberater-Netzwerk
          </h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            Du musst nicht alleine suchen. TinyInvest hat ein Netzwerk aus erfahrenen Steuerberatern aufgebaut,
            die §7g EStG bei beweglichen Wirtschaftsgütern aus der Praxis kennen.
          </p>
          <div className="bg-gray-900 rounded-2xl p-8 text-white mb-8">
            <p className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold mb-4">Was unser Netzwerk bietet</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "✓", text: "Erfahrung mit IAB + Sonder-AfA bei beweglichen Wirtschaftsgütern" },
                { icon: "✓", text: "Kenntnis des TinyInvest-Modells (tiny Escapes, Betreibervertrag)" },
                { icon: "✓", text: "Bundesweit verfügbar, Erstgespräch auch digital" },
                { icon: "✓", text: "Transparente Honorarstruktur" },
                { icon: "✓", text: "Erfahrung mit Betriebsprüfungen in diesem Bereich" },
                { icon: "✓", text: "Begleitung von Nebengewerbe-Anmeldung bis Steuererklärung" },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 text-[13px] text-gray-300">
                  <span className="text-green-400 font-bold flex-shrink-0">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-4">
              Wir vermitteln dich auf Wunsch direkt an einen passenden Steuerberater – kostenlos und unverbindlich.
            </p>
            <ModalButton className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-sm">
              🔐 Steuerberater-Empfehlung anfordern →
            </ModalButton>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-10 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap gap-4">
            <Link href="/wissen/afa-abschreibung" className="border border-green-200 text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">
              §7g AfA erklärt →
            </Link>
            <Link href="/steuervorteil" className="border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 font-semibold px-5 py-2.5 rounded-full text-[13px] transition-all">
              Interaktiver Steuerrechner →
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
