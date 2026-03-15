"use client";

import Image from "next/image";
import { useState } from "react";

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────

const navLinks = [
  { label: "Modelle", href: "#modelle" },
  { label: "Steuer-Vorteile", href: "#steuer" },
  { label: "Rendite-Modell", href: "#rendite" },
  { label: "So funktioniert's", href: "#prozess" },
  { label: "FAQ", href: "#faq" },
];

const stats = [
  { value: "73 %", label: "Im 1. Jahr absetzbar" },
  { value: "~18 %", label: "Rendite p.a." },
  { value: "100 %", label: "Full-Service" },
  { value: "100 %", label: "Mobiles Wirtschaftsgut" },
];

const investorPaths = [
  {
    icon: "📋",
    tag: "Steuer-Investor",
    title: "Steuern sparen & Vermögen aufbauen",
    desc: "Du verdienst gut und zahlst hohe Steuern? Mit unserem beweglichen Wirtschaftsgut nutzt du IAB, Sonder-AfA und lineare Abschreibung – und holst dir bis zu 25.000 € direkt vom Finanzamt zurück.",
    highlights: ["IAB: 50 % vorab absetzbar", "Sonder-AfA: 40 % (2024)", "Bis zu 73 % im Jahr 1"],
    cta: "Steuer-Hebel berechnen",
    href: "#steuer",
    color: "green",
  },
  {
    icon: "📈",
    tag: "Rendite-Investor",
    title: "Passives Einkommen ohne Arbeit",
    desc: "Du kaufst ein TinyInvest-Haus und lehnst dich zurück. Unser Host-Netzwerk vermietet es für dich, du erhältst 40 % der Einnahmen monatlich – ohne einen Finger zu rühren.",
    highlights: ["40 % der Mieteinnahmen", "Full-Service Management", "Motivierter Host vor Ort"],
    cta: "Rendite berechnen",
    href: "#rendite",
    color: "blue",
  },
  {
    icon: "🏡",
    tag: "Finanzierungs-Käufer",
    title: "Das Haus finanziert sich selbst",
    desc: "Du kaufst auf Raten oder Kredit – und die monatlichen Mieteinnahmen (deine 40 %) decken die Bankrate vollständig ab. Das Finanzamt übernimmt quasi die Anzahlung.",
    highlights: ["Kreditrate aus Mieteinnahmen", "IAB als Eigenkapital-Ersatz", "Haus refinanziert sich selbst"],
    cta: "Finanzierung anfragen",
    href: "#kontakt",
    color: "amber",
  },
];

const models = [
  {
    img: "/images/675538093.jpg",
    tag: "On-Grid · Einstieg",
    title: "TinyInvest Comfort",
    desc: "Vollwertiges Tiny House mit modernem Design und allen Annehmlichkeiten. Netzgebunden für maximalen Komfort auf Ferienparks und Campingplätzen.",
    preis: "ab 45.000 €",
    renditeMin: "10",
    renditeMax: "12",
    highlights: ["Netzanschluss (Strom/Wasser)", "Vlemmix Trailer · VIN", "Kompakt & effizient"],
    badge: "Günstigster Einstieg",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    img: "/images/675538100.jpg",
    tag: "Off-Grid · Standard",
    title: "TinyInvest Escape",
    desc: "Vollautarkes Tiny House mit Solaranlage und Wassertanks. Perfekt für naturnahe Standorte ohne Infrastruktur – maximale Standortflexibilität.",
    preis: "ab 65.000 €",
    renditeMin: "12",
    renditeMax: "14",
    highlights: ["Solar + Batteriespeicher", "Wasseraufbereitung & Tanks", "Standort unabhängig"],
    badge: "Bestseller",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    img: "/images/675538106.jpg",
    tag: "Off-Grid · Premium",
    title: "TinyInvest Elite",
    desc: "Das Flaggschiff. Vollautarkes Premium-Haus mit hochwertiger Schafwoll-Dämmung, Aluminium-Fenstern und Hotel-Standard Innenausstattung.",
    preis: "ab 80.000 €",
    renditeMin: "13",
    renditeMax: "15",
    highlights: ["Premium-Ausstattung", "Vollautark · Hotel-Standard", "Höchste Gästebewertungen"],
    badge: "Maximum IAB-Hebel",
    badgeColor: "bg-amber-100 text-amber-700",
  },
];

const winWinModel = [
  {
    icon: "🏡",
    party: "Der Host",
    percent: "bis 45 %",
    color: "bg-amber-50 border-amber-200",
    textColor: "text-amber-700",
    role: "Kümmert sich vor Ort um Reinigung, Check-in und Pflege des Grundstücks.",
    motivation: "Je besser seine Gäste-Bewertung auf der Plattform, desto höher sein Anteil.",
  },
  {
    icon: "💼",
    party: "Der Investor",
    percent: "40 %",
    color: "bg-green-50 border-green-200",
    textColor: "text-green-700",
    role: "Stellt das Kapital (Kauf des Hauses). Erhält monatlich 40 % der Mieteinnahmen passiv.",
    motivation: "Kombiniert mit IAB & Sonder-AfA: effektiv die höchste Rendite auf dem Markt.",
  },
  {
    icon: "⚙️",
    party: "TinyInvest (Plattform)",
    percent: "~15 %",
    color: "bg-gray-50 border-gray-200",
    textColor: "text-gray-700",
    role: "Betreibt die Buchungsplattform, Marketing, Zahlungsabwicklung und Qualitätskontrolle.",
    motivation: "Skalierbar und ortsunabhängig – maximale Auslastung für den Investor.",
  },
];

const faqs = [
  {
    q: "Was ist ein 'bewegliches Wirtschaftsgut' und warum ist das wichtig?",
    a: "Ein bewegliches Wirtschaftsgut ist steuerlich das Gegenteil einer Immobilie. Da unsere Tiny Houses auf einem zertifizierten Trailer (mit eigener Fahrgestellnummer) stehen und keine feste Bodenverbindung haben, gelten sie nicht als Gebäude, sondern als Maschinen/Fahrzeuge. Das ermöglicht die kurze Abschreibung von 8–10 Jahren (statt 33–50 Jahre) und macht den IAB und die Sonder-AfA möglich.",
  },
  {
    q: "Kann das Tiny House auch im EU-Ausland stehen?",
    a: "Ja, das funktioniert hervorragend! Da das Haus als bewegliches Wirtschaftsgut (vergleichbar mit Fracht/Ladung) gilt, laufen die deutschen Steuervorteile (IAB, Sonder-AfA) über dein deutsches Gewerbe weiter – unabhängig vom Standort in der EU. Doppelbesteuerungsabkommen (DBA) sorgen dafür, dass du nicht doppelt zahlst.",
  },
  {
    q: "Brauche ich für den Kauf eine GmbH oder UG?",
    a: "Für den maximalen Steuer-Hebel empfehlen wir ein Einzelunternehmen (Nebengewerbe). Nur hier können die steuerlichen 'Verluste' durch Abschreibungen direkt mit deinem privaten Gehalt verrechnet werden. Bei einer UG bleibt der Verlust im Unternehmen und kann nicht direkt gegen dein privates Einkommen aufgerechnet werden.",
  },
  {
    q: "Wie schnell bekomme ich das Geld vom Finanzamt zurück?",
    a: "Die erste Rückzahlung durch den IAB erfolgt meist innerhalb von 1–3 Monaten nach Einreichung beim Finanzamt (rückwirkende Steuervorauszahlungsanpassung). Den Rest durch Sonder-AfA und lineare AfA erhält man über die jährliche Steuererklärung.",
  },
  {
    q: "Was passiert, wenn der Standort nicht funktioniert?",
    a: "Das ist der entscheidende Vorteil unseres Modells: Da das Haus rechtlich als mobile Ladung (Fracht) auf einem Trailer gilt, kann es jederzeit an einen anderen Standort transportiert werden. Dein Investment ist nicht ortsgebunden – das Risiko durch schlechte Lage ist faktisch Null.",
  },
  {
    q: "Wie funktioniert die Finanzierung über den IAB?",
    a: "In der Praxis nutzt der Investor die Steuererstattung aus dem IAB (ca. 16.000–17.000 € bei 42% Steuersatz) als Eigenkapital bei der Bank. Der Restkredit (ca. 55.000 €) wird dann durch die monatlichen Mieteinnahmen (deine 40%) gedeckt – in den meisten Fällen mit positivem Cashflow.",
  },
  {
    q: "Muss die Vermietung gewerblich sein?",
    a: "Ja, das ist die Voraussetzung für IAB und Sonder-AfA. Die gute Nachricht: Durch unser Full-Service-Modell (Buchungsplattform, Reinigung, Gäste-Service) ist die gewerbliche Prägung automatisch erfüllt. Der Steuerberater sieht sofort, dass es sich um ein aktives Gewerbe handelt.",
  },
  {
    q: "Welche Gewinngrenze gilt für den IAB?",
    a: "Der Investor darf zum Zeitpunkt der IAB-Bildung einen Betriebsgewinn von maximal 200.000 € pro Jahr haben (§7g Abs. 1 Nr. 1 EStG). Für die meisten unserer Zielkunden – Gutverdiener, Freiberufler, Handwerker – ist diese Grenze problemlos erfüllbar.",
  },
];

// ─────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-gray-800 hover:bg-green-50 transition-colors"
      >
        <span>{q}</span>
        <span
          className="text-2xl transition-transform duration-300 text-green-700 flex-shrink-0 ml-4"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-400 ease-in-out"
        style={{ maxHeight: open ? "600px" : "0px" }}
      >
        <p className="px-6 pb-5 text-gray-600 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

function SteuerRechner() {
  const [kaufpreis, setKaufpreis] = useState(80000);
  const [steuersatz, setSteuersatz] = useState(42);

  const iabBasis = kaufpreis * 0.5;
  const iabSteuer = iabBasis * (steuersatz / 100);

  const sonderAfaBasis = kaufpreis - iabBasis;
  const sonderAfaAbzug = sonderAfaBasis * 0.4;
  const sonderAfaSteuer = sonderAfaAbzug * (steuersatz / 100);

  const restBuchwert = sonderAfaBasis - sonderAfaAbzug;
  const regularAfaAbzug = restBuchwert * 0.1;
  const regularAfaSteuer = regularAfaAbzug * (steuersatz / 100);

  const gesamtAbzug = iabBasis + sonderAfaAbzug + regularAfaAbzug;
  const gesamtSteuer = iabSteuer + sonderAfaSteuer + regularAfaSteuer;
  const effektiverPreis = kaufpreis - gesamtSteuer;

  const fmt = (n: number) => Math.round(n).toLocaleString("de-DE");

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 max-w-3xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Kaufpreis (netto)
          </label>
          <div className="text-3xl font-black text-green-700 mb-3">
            {fmt(kaufpreis)} €
          </div>
          <input
            type="range"
            min={45000}
            max={120000}
            step={1000}
            value={kaufpreis}
            onChange={(e) => setKaufpreis(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>45.000 €</span><span>120.000 €</span>
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Dein Grenzsteuersatz
          </label>
          <div className="text-3xl font-black text-green-700 mb-3">
            {steuersatz} %
          </div>
          <input
            type="range"
            min={30}
            max={45}
            step={1}
            value={steuersatz}
            onChange={(e) => setSteuersatz(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>30 %</span><span>45 %</span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-3 text-gray-500 font-semibold">Abzugsposten</th>
              <th className="text-right py-3 text-gray-500 font-semibold">Gewinnminderung</th>
              <th className="text-right py-3 text-gray-700 font-semibold">Cash-Back</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-50">
              <td className="py-3 font-medium text-gray-800">
                <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded mr-2">IAB §7g Abs.1</span>
                50 % vorab
              </td>
              <td className="py-3 text-right font-bold text-gray-800">{fmt(iabBasis)} €</td>
              <td className="py-3 text-right font-bold text-green-700">+ {fmt(iabSteuer)} €</td>
            </tr>
            <tr className="border-b border-gray-50">
              <td className="py-3 font-medium text-gray-800">
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded mr-2">Sonder-AfA §7g Abs.5</span>
                40 % (2024)
              </td>
              <td className="py-3 text-right font-bold text-gray-800">{fmt(sonderAfaAbzug)} €</td>
              <td className="py-3 text-right font-bold text-green-700">+ {fmt(sonderAfaSteuer)} €</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 font-medium text-gray-800">
                <span className="inline-block bg-gray-100 text-gray-600 text-xs font-bold px-2 py-0.5 rounded mr-2">Lineare AfA</span>
                10 % / Jahr
              </td>
              <td className="py-3 text-right font-bold text-gray-800">{fmt(regularAfaAbzug)} €</td>
              <td className="py-3 text-right font-bold text-green-700">+ {fmt(regularAfaSteuer)} €</td>
            </tr>
            <tr className="bg-green-700 rounded-xl">
              <td className="py-4 px-3 rounded-l-xl font-black text-white text-base">Gesamt (Jahr 1)</td>
              <td className="py-4 text-right font-black text-green-200 text-base">{fmt(gesamtAbzug)} €</td>
              <td className="py-4 pr-3 text-right font-black text-white text-xl rounded-r-xl">+ {fmt(gesamtSteuer)} €</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 rounded-2xl p-5 text-center">
          <p className="text-xs text-gray-400 font-semibold uppercase mb-1">Abgedeckt durch Finanzamt</p>
          <p className="text-4xl font-black text-green-700">{Math.round((gesamtSteuer / kaufpreis) * 100)} %</p>
          <p className="text-sm text-gray-500 mt-1">des Kaufpreises</p>
        </div>
        <div className="bg-green-700 rounded-2xl p-5 text-center">
          <p className="text-xs text-green-200 font-semibold uppercase mb-1">Effektiver Kaufpreis</p>
          <p className="text-4xl font-black text-white">{fmt(effektiverPreis)} €</p>
          <p className="text-sm text-green-200 mt-1">nach Steuererstattung</p>
        </div>
      </div>
      <p className="text-center text-xs text-gray-400 mt-4">
        * Berechnung basiert auf aktueller Gesetzeslage (§7g EStG, Wachstumschancengesetz 2024). Individuelle steuerliche Beratung durch Steuerberater erforderlich.
      </p>
    </div>
  );
}

function RenditeRechner() {
  const [kaufpreis, setKaufpreis] = useState(80000);

  // Assume 1.800 € monthly gross, investor gets 40%
  const monthlyGross = kaufpreis * 0.022; // ~2.2% of purchase price per month
  const monthlyInvestor = monthlyGross * 0.4;
  const yearlyInvestor = monthlyInvestor * 12;

  // Tax saving approx
  const taxSaving = kaufpreis * 0.306; // ~30.6% average
  const effectivePrice = kaufpreis - taxSaving;
  const rendite = (yearlyInvestor / effectivePrice) * 100;

  const fmt = (n: number) => Math.round(n).toLocaleString("de-DE");

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-2xl mx-auto">
      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Kaufpreis deines TinyInvest-Hauses
        </label>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-4xl font-bold text-green-700">
            {fmt(kaufpreis)} €
          </span>
        </div>
        <input
          type="range"
          min={45000}
          max={120000}
          step={1000}
          value={kaufpreis}
          onChange={(e) => setKaufpreis(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-400 mt-1">
          <span>45.000 €</span>
          <span>120.000 €</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-green-50 rounded-2xl p-5 text-center">
          <p className="text-xs text-gray-500 mb-1">Monatlich (deine 40 %)</p>
          <p className="text-3xl font-bold text-green-700">
            {fmt(monthlyInvestor)} €
          </p>
        </div>
        <div className="bg-green-700 rounded-2xl p-5 text-center">
          <p className="text-xs text-green-200 mb-1">Jährlich</p>
          <p className="text-3xl font-bold text-white">
            {fmt(yearlyInvestor)} €
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Effektive Rendite</p>
            <p className="text-xs text-gray-400">(auf Netto-Investition nach Steuer)</p>
          </div>
          <p className="text-4xl font-black text-green-700">{rendite.toFixed(1)} %</p>
        </div>
      </div>

      <p className="text-center text-xs text-gray-400 mt-4">
        * Bei 42 % Grenzsteuersatz, 60 % Auslastung. Individuelle Ergebnisse können variieren.
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────────

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── NAVIGATION ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#" className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tight text-green-700">
                Tiny<span className="text-gray-900">Invest</span>
              </span>
              <span className="text-green-600 text-xl">🏡</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#kontakt"
                className="bg-green-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-green-800 transition-colors shadow-sm"
              >
                Jetzt anfragen
              </a>
            </nav>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 border-t border-gray-100" : "max-h-0"}`}>
          <nav className="px-4 py-4 flex flex-col gap-3 bg-white">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-base font-medium text-gray-700 py-2 hover:text-green-700 transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#kontakt" onClick={() => setMenuOpen(false)} className="bg-green-700 text-white px-5 py-3 rounded-full text-sm font-semibold text-center hover:bg-green-800 transition-colors mt-2">
              Jetzt anfragen
            </a>
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/675538184.jpg" alt="TinyInvest Tiny House in der Natur" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/75" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto pt-20">
          <span className="inline-block bg-green-600/80 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-fadeIn">
            🏡 Moderne Tiny Houses – Deutsch. Hochwertig. Rentabel.
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-6 animate-fadeInUp">
            Dein Tiny House.
            <br />
            <span className="text-green-400">Deine Freiheit.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-4 leading-relaxed animate-fadeInUp">
            TinyInvest bietet hochwertige, mobile Tiny Houses – als{" "}
            <strong className="text-white">Steuer-Investment</strong>,{" "}
            <strong className="text-white">Renditeobjekt</strong> oder{" "}
            <strong className="text-white">Traumhaus auf Raten</strong>.
            Du entscheidest. Wir kümmern uns um den Rest.
          </p>
          <p className="text-white/60 text-sm mb-10 animate-fadeInUp">
            Als bewegliches Wirtschaftsgut: IAB + Sonder-AfA nutzbar · EU-weit einsetzbar · 100 % Full-Service
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp flex-wrap">
            <a href="#steuer" className="bg-green-600 hover:bg-green-500 text-white font-bold px-7 py-4 rounded-full text-base transition-all shadow-lg hover:shadow-green-500/30">
              📋 Steuer-Hebel berechnen
            </a>
            <a href="#modelle" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-7 py-4 rounded-full text-base border border-white/30 transition-all">
              🏡 Modelle entdecken
            </a>
            <a href="#kontakt" className="bg-amber-500 hover:bg-amber-400 text-white font-bold px-7 py-4 rounded-full text-base transition-all shadow-lg">
              📞 Beratung anfragen
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
              {stats.map((s) => (
                <div key={s.label} className="py-5 px-4 text-center text-white">
                  <div className="text-2xl md:text-3xl font-black text-green-400">{s.value}</div>
                  <div className="text-xs md:text-sm text-white/70 mt-0.5 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DREI WEGE ── */}
      <section id="drei-wege" className="py-24 bg-[#f8f4ee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">Dein Weg</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-5">
              Drei Wege zu deinem TinyInvest
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Ob Steuern sparen, passiv Geld verdienen oder Wunschthaus finanzieren – TinyInvest hat das passende Modell für dich.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investorPaths.map((path) => (
              <div key={path.tag} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 card-hover flex flex-col">
                <div className="text-5xl mb-4">{path.icon}</div>
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit ${
                  path.color === "green" ? "bg-green-100 text-green-700" :
                  path.color === "blue" ? "bg-blue-100 text-blue-700" :
                  "bg-amber-100 text-amber-700"
                }`}>
                  {path.tag}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{path.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-5 flex-grow">{path.desc}</p>
                <ul className="space-y-2 mb-6">
                  {path.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <span className="text-green-600 font-bold">✓</span> {h}
                    </li>
                  ))}
                </ul>
                <a
                  href={path.href}
                  className={`w-full py-3 rounded-full font-semibold text-sm text-center transition-colors ${
                    path.color === "green" ? "bg-green-700 text-white hover:bg-green-800" :
                    path.color === "blue" ? "bg-blue-600 text-white hover:bg-blue-700" :
                    "bg-amber-500 text-white hover:bg-amber-600"
                  }`}
                >
                  {path.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODELLE ── */}
      <section id="modelle" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">Portfolio</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-5">
              Unsere Tiny House Modelle
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Von kompakt und günstig bis vollautark und premium – jedes Modell ist ein modernes, hochwertiges bewegliches Wirtschaftsgut auf zertifiziertem Trailer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {models.map((model) => (
              <div key={model.title} className="bg-white rounded-3xl overflow-hidden card-hover shadow-md border border-gray-100 flex flex-col">
                <div className="relative h-60 overflow-hidden">
                  <Image src={model.img} alt={model.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-gray-700 text-xs font-bold px-3 py-1.5 rounded-full">
                      {model.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${model.badgeColor}`}>
                      {model.badge}
                    </span>
                  </div>
                </div>

                <div className="p-7 flex flex-col flex-grow">
                  <h3 className="font-black text-gray-900 text-xl mb-2">{model.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{model.desc}</p>

                  <ul className="space-y-1.5 mb-6">
                    {model.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="text-green-600">✓</span> {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-green-50 rounded-xl p-3 text-center">
                        <p className="text-xs text-gray-400">Rendite p.a.</p>
                        <p className="text-lg font-black text-green-700">{model.renditeMin}–{model.renditeMax} %</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-3 text-center">
                        <p className="text-xs text-gray-400">Preis</p>
                        <p className="text-lg font-black text-gray-800">{model.preis}</p>
                      </div>
                    </div>

                    <a
                      href="#kontakt"
                      className="block w-full py-3 rounded-full font-semibold text-sm text-center bg-green-700 text-white hover:bg-green-800 transition-colors"
                    >
                      Beratung anfragen →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center">
            <p className="text-amber-800 font-medium">
              💡 <strong>Individuelle Konfiguration:</strong> Alle Preise variieren je nach Ausstattung (On-Grid / Off-Grid / Solar / Autarkie-Grad). Gerne erstellen wir dir ein persönliches Angebot.
            </p>
          </div>
        </div>
      </section>

      {/* ── STEUER-SECTION ── */}
      <section id="steuer" className="py-24 bg-[#f8f4ee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">§ 7g EStG</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-5">
              Der Steuer-Hebel
            </h2>
            <p className="text-gray-500 max-w-3xl mx-auto text-lg leading-relaxed">
              Da unsere Tiny Houses auf einem zertifizierten Trailer stehen (VIN, keine Bodenverbindung), gelten sie als{" "}
              <strong className="text-gray-800">bewegliche Wirtschaftsgüter</strong> – keine Immobilien.
              Das eröffnet drei mächtige Hebel.
            </p>
          </div>

          {/* Erklärungs-Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: "⏰",
                label: "IAB · §7g Abs.1",
                title: "Bis zu 3 Jahre vor dem Kauf",
                desc: "Bilde den Investitionsabzugsbetrag und ziehe 50 % des geplanten Kaufpreises sofort von deinem Gewinn ab – noch bevor du das Haus überhaupt bestellt hast.",
                tag: "50 % vorab",
                tagColor: "bg-green-100 text-green-700",
              },
              {
                icon: "🚀",
                label: "Sonder-AfA · §7g Abs.5",
                title: "Turbo-Abschreibung im Kaufjahr",
                desc: "Im Jahr der Anschaffung darfst du zusätzlich zur normalen AfA bis zu 40 % (Wachstumschancengesetz 2024) als Sonderabschreibung geltend machen.",
                tag: "40 % extra",
                tagColor: "bg-blue-100 text-blue-700",
              },
              {
                icon: "📅",
                label: "Lineare AfA",
                title: "8–10 Jahre statt 50 Jahre",
                desc: "Während Immobilien 33–50 Jahre abgeschrieben werden, gilt das Tiny House as bewegliche Einheit – du schreibst in nur 8–10 Jahren ab.",
                tag: "10× schneller",
                tagColor: "bg-amber-100 text-amber-700",
              },
            ].map((card) => (
              <div key={card.label} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <div className="text-4xl mb-4">{card.icon}</div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-gray-400 font-semibold">{card.label}</span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${card.tagColor}`}>{card.tag}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Rechner */}
          <div className="text-center mb-10">
            <h3 className="text-2xl font-black text-gray-900 mb-3">Berechne deinen persönlichen Steuer-Vorteil</h3>
            <p className="text-gray-500">Schiebe die Regler und sieh sofort, wie viel du vom Finanzamt zurückbekommst.</p>
          </div>
          <SteuerRechner />

          {/* Vergleich */}
          <div className="mt-16">
            <h3 className="text-2xl font-black text-gray-900 text-center mb-8">
              TinyInvest vs. Klassische Immobilie
            </h3>
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="text-left p-5 font-semibold text-gray-500 text-sm">Merkmal</th>
                      <th className="p-5 font-semibold text-gray-500 text-sm text-center">Klassische ETW</th>
                      <th className="p-5 font-black text-green-700 text-sm text-center bg-green-50">TinyInvest-Modell</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {[
                      ["Abschreibungsdauer", "33–50 Jahre", "8–10 Jahre ⚡"],
                      ["Steuer-Vorteil Jahr 1", "~1.000 €", "~24.500 € 🎯"],
                      ["IAB nutzbar", "❌ Nein", "✅ Ja (50 % vorab)"],
                      ["Sonder-AfA (40 %)", "❌ Nein", "✅ Ja (2024)"],
                      ["Standortflexibilität", "Fest (Immobil)", "Mobil – EU-weit 🚛"],
                      ["Management", "Eigenregie / Hausverwaltung", "Full-Service (Host + Plattform)"],
                      ["Rendite p.a.", "3–4 % (nach Kosten)", "10–18 % (effektiv) 🚀"],
                    ].map(([merkmal, etw, tiny]) => (
                      <tr key={merkmal}>
                        <td className="p-5 font-medium text-gray-700 text-sm">{merkmal}</td>
                        <td className="p-5 text-center text-sm text-gray-500">{etw}</td>
                        <td className="p-5 text-center text-sm font-bold text-green-700 bg-green-50/50">{tiny}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WIN WIN WIN ── */}
      <section id="rendite" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">Das Modell</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-5">
              Das Win-Win-Win Prinzip
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Drei Parteien profitieren – jeder hat einen klaren Anreiz. Das macht das Modell nachhaltig und sicher.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {winWinModel.map((party) => (
              <div key={party.party} className={`rounded-3xl p-8 border-2 ${party.color}`}>
                <div className="text-5xl mb-4">{party.icon}</div>
                <div className={`text-4xl font-black mb-1 ${party.textColor}`}>{party.percent}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{party.party}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{party.role}</p>
                <div className="bg-white/60 rounded-xl p-3">
                  <p className="text-xs text-gray-500 italic">{party.motivation}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Beispielrechnung */}
          <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl font-black text-center mb-2">Beispielrechnung</h3>
            <p className="text-gray-400 text-center text-sm mb-8">Annahme: 80.000 € Haus · 100 €/Nacht Durchschnitt · 60 % Auslastung</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-green-400 font-bold mb-4 text-sm uppercase tracking-wider">Monatlicher Umsatz</h4>
                <div className="space-y-3">
                  {[
                    { label: "18 Nächte × 100 €", value: "1.800 €", bold: false },
                    { label: "Host (bis 45 %)", value: "− 810 €", bold: false },
                    { label: "Plattform (~15 %)", value: "− 270 €", bold: false },
                    { label: "Investor (40 %)", value: "= 720 €", bold: true },
                  ].map((row) => (
                    <div key={row.label} className={`flex justify-between py-2 border-b border-white/10 ${row.bold ? "text-green-400 font-bold text-lg" : "text-gray-300 text-sm"}`}>
                      <span>{row.label}</span>
                      <span>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-green-400 font-bold mb-4 text-sm uppercase tracking-wider">Jahr 1 Liquidität</h4>
                <div className="space-y-3">
                  {[
                    { label: "Mietauszahlung (p.a.)", value: "+ 8.640 €", bold: false },
                    { label: "IAB-Erstattung", value: "+ 16.800 €", bold: false },
                    { label: "Sonder-AfA + AfA", value: "+ 7.728 €", bold: false },
                    { label: "Gesamt Liquidität Jahr 1", value: "≈ 33.168 €", bold: true },
                  ].map((row) => (
                    <div key={row.label} className={`flex justify-between py-2 border-b border-white/10 ${row.bold ? "text-green-400 font-bold text-lg" : "text-gray-300 text-sm"}`}>
                      <span>{row.label}</span>
                      <span>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 rounded-2xl p-5">
                <p className="text-gray-400 text-xs mb-1">Investiert</p>
                <p className="text-2xl font-black text-white">80.000 €</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-5">
                <p className="text-gray-400 text-xs mb-1">Effektiv nach Steuer</p>
                <p className="text-2xl font-black text-green-400">≈ 55.500 €</p>
              </div>
              <div className="bg-green-600 rounded-2xl p-5">
                <p className="text-green-200 text-xs mb-1">Effektive Rendite</p>
                <p className="text-2xl font-black text-white">~18 % p.a.</p>
              </div>
            </div>
          </div>

          {/* Rendite Rechner */}
          <div className="mt-16">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-black text-gray-900 mb-3">Dein persönlicher Rendite-Rechner</h3>
              <p className="text-gray-500">Berechne deinen monatlichen Cashflow und deine effektive Rendite.</p>
            </div>
            <RenditeRechner />
          </div>
        </div>
      </section>

      {/* ── SO FUNKTIONIERT'S ── */}
      <section id="prozess" className="py-24 bg-[#f8f4ee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">Der Prozess</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-5">
              So einfach geht's
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              Wähle deinen Weg – wir führen dich Schritt für Schritt durch den Prozess.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {["📋 Steuer-Investor", "📈 Rendite-Investor", "🏡 Finanzierungs-Käufer"].map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeTab === i
                    ? "bg-green-700 text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 0 && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { num: "01", title: "Steuerberater konsultieren", desc: "Du nimmst unser Steuer-Factsheet mit und lässt prüfen, ob IAB und Sonder-AfA für dich anwendbar sind. (Spoiler: Fast immer ja.)" },
                { num: "02", title: "IAB bilden", desc: "Dein Steuerberater bildet den Investitionsabzugsbetrag (50 %) – oft noch rückwirkend für das Vorjahr. Das Finanzamt überweist ca. 16.000–17.000 € zurück." },
                { num: "03", title: "Haus kaufen & liefern", desc: "Du wählst dein TinyInvest-Modell, wir produzieren es und liefern es auf den vereinbarten Standort in Deutschland oder der EU." },
                { num: "04", title: "Vermietung & Steuer genießen", desc: "Dein Haus geht sofort in den Betrieb. Sonder-AfA und AfA werden in der Steuererklärung geltend gemacht. Monatliche Mieteinnahmen fließen." },
              ].map((s) => (
                <div key={s.num} className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 text-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-black text-white mx-auto mb-5 shadow-lg" style={{ background: "linear-gradient(135deg, #2d6a4f, #52b788)" }}>
                    {s.num}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { num: "01", title: "Modell & Standort wählen", desc: "Wähle dein Modell und deinen Wunschstandort – ob Deutschland, Österreich, Rumänien oder Kroatien. Wir beraten dich bei der Standortwahl." },
                { num: "02", title: "Host & Lieferung", desc: "Wir vermitteln dir einen verifizierten Host vor Ort, der Reinigung, Check-in und Pflege übernimmt. Dein Haus wird geliefert und aufgestellt." },
                { num: "03", title: "Monatliche Auszahlung", desc: "Los geht's: Dein Haus ist buchbar. Du erhältst 40 % der Einnahmen monatlich ausgezahlt – transparent und vollständig passiv." },
              ].map((s) => (
                <div key={s.num} className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 text-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-black text-white mx-auto mb-5 shadow-lg" style={{ background: "linear-gradient(135deg, #2d6a4f, #52b788)" }}>
                    {s.num}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { num: "01", title: "Beratungsgespräch", desc: "Wir klären gemeinsam deine Finanzierungsmöglichkeiten: Kredit, Ratenkauf oder Leasing. Dein Budget bestimmt das passende Modell." },
                { num: "02", title: "IAB als Eigenkapital", desc: "Dein Steuerberater bildet den IAB, das Finanzamt zahlt dir ca. 16.000–17.000 € zurück. Dieses Geld nutzt du als Eigenkapital für die Bank." },
                { num: "03", title: "Kredit & Lieferung", desc: "Mit echtem Eigenkapital aus der Steuer bekommst du günstige Konditionen. Das Haus wird geliefert und sofort vermietet." },
                { num: "04", title: "Miete tilgt den Kredit", desc: "Deine 40 % Mieteinnahmen decken die monatliche Kreditrate – oft mit positivem Cashflow. Das Haus gehört nach der Laufzeit dir." },
              ].map((s) => (
                <div key={s.num} className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 text-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-black text-white mx-auto mb-5 shadow-lg" style={{ background: "linear-gradient(135deg, #2d6a4f, #52b788)" }}>
                    {s.num}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── GALERIE ── */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">Einblicke in unsere Häuser</h2>
            <p className="text-gray-500 mt-3">Modern. Hochwertig. Nachhaltig.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "/images/675538093.jpg", span: "" },
              { src: "/images/675538100.jpg", span: "" },
              { src: "/images/675538106.jpg", span: "" },
              { src: "/images/675538110.jpg", span: "" },
              { src: "/images/675538117.jpg", span: "" },
              { src: "/images/675538184.jpg", span: "" },
            ].map((item, i) => (
              <div key={i} className={`relative rounded-2xl overflow-hidden card-hover h-56 md:h-64`}>
                <Image src={item.src} alt={`TinyInvest House ${i + 1}`} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SICHERHEIT ── */}
      <section id="sicherheit" className="py-24 bg-[#f8f4ee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-80 lg:h-[480px] rounded-3xl overflow-hidden shadow-xl">
              <Image src="/images/Tinyhouseinside.webp" alt="Tiny House Innenraum" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🏅</span>
                  <div>
                    <p className="font-bold text-gray-900">Sachwert-Investition</p>
                    <p className="text-sm text-gray-500">Bewegliches Wirtschaftsgut · §7g EStG fähig</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">Sicherheit & Vertrauen</span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-6">
                Dein Investment ist<br />
                <span className="text-green-700">real & flexibel abgesichert</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8 text-lg">
                Im Gegensatz zu einer klassischen Immobilie im Ausland bist du nicht an einen Standort gebunden. Dein TinyInvest-Haus kann jederzeit transportiert werden – dein Kapital bleibt immer mobil.
              </p>

              <div className="space-y-4">
                {[
                  { icon: "📜", text: "Eigentumsübertragung mit deutschen Unterlagen" },
                  { icon: "🚛", text: "Mobil – Standortwechsel innerhalb der EU jederzeit möglich" },
                  { icon: "🛡️", text: "Vollversicherung als mobiles Wirtschaftsgut (Feuer, Sturm, Diebstahl)" },
                  { icon: "⚖️", text: "Vertrag nach deutschem Recht – transparent und rechtssicher" },
                  { icon: "📊", text: "Monatliche Abrechnung über dein Investor-Dashboard" },
                  { icon: "🤝", text: "Motivierter Host vor Ort – sein Einkommen hängt von deiner Bewertung ab" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <p className="text-gray-700 font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">FAQ</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-5">Häufige Fragen</h2>
            <p className="text-gray-500 text-lg">Alles, was du wissen musst – bevor du anfragst.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <AccordionItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>

          <div className="mt-10 bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
            <p className="text-green-800 font-medium mb-3">Noch eine Frage? Wir beraten dich kostenlos und unverbindlich.</p>
            <a href="#kontakt" className="inline-block bg-green-700 text-white font-bold px-6 py-3 rounded-full hover:bg-green-800 transition-colors">
              Jetzt Frage stellen →
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA FACTSHEET ── */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="text-5xl mb-4">📋</div>
          <h2 className="text-2xl sm:text-3xl font-black mb-4">
            Steuer-Factsheet für deinen Steuerberater
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Wir haben alle technischen und steuerlichen Daten für deinen Steuerberater vorbereitet – damit er sofort sieht, dass unsere Häuser §7g EStG-fähig sind. Kostenlos und sofort per E-Mail.
          </p>
          <a
            href="#kontakt"
            className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-full text-lg transition-colors"
          >
            Factsheet kostenlos anfordern →
          </a>
        </div>
      </section>

      {/* ── KONTAKT / CTA ── */}
      <section id="kontakt" className="py-24 bg-green-700 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-green-600 rounded-full opacity-40" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-green-800 rounded-full opacity-30" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
            🚀 Bereit loszulegen?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
            Kostenlose Beratung anfragen
          </h2>
          <p className="text-green-100 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Egal ob Steuer-Investment, Renditeobjekt oder Finanzierung – wir finden gemeinsam das beste Modell für deine Situation.
          </p>

          <div className="bg-white rounded-3xl p-8 md:p-10 max-w-2xl mx-auto text-left shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Kostenlose Beratung</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1.5">Vorname</label>
                <input type="text" placeholder="Max" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1.5">Nachname</label>
                <input type="text" placeholder="Mustermann" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600 mb-1.5">E-Mail</label>
              <input type="email" placeholder="max@beispiel.de" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600 mb-1.5">Telefon (optional)</label>
              <input type="tel" placeholder="+49 ..." className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600 mb-1.5">Ich interessiere mich für …</label>
              <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white">
                <option>📋 Steuer-Investment (IAB + Sonder-AfA)</option>
                <option>📈 Rendite-Investment (passives Einkommen)</option>
                <option>🏡 Kauf auf Raten / Finanzierung</option>
                <option>📊 Steuer-Factsheet anfordern</option>
                <option>💬 Allgemeine Beratung</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600 mb-1.5">Budget / Kaufpreisrahmen</label>
              <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white">
                <option>On-Grid Comfort (ab 45.000 €)</option>
                <option>Off-Grid Standard (ab 65.000 €)</option>
                <option>Off-Grid Premium (ab 80.000 €)</option>
                <option>Individuell – bitte beraten</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-600 mb-1.5">Nachricht (optional)</label>
              <textarea rows={3} placeholder="Deine Fragen oder Anmerkungen..." className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none" />
            </div>
            <button className="w-full bg-green-700 text-white font-bold py-4 rounded-xl text-lg hover:bg-green-800 transition-colors shadow-md">
              Jetzt kostenlos anfragen →
            </button>
            <p className="text-center text-xs text-gray-400 mt-4">
              Kostenlos & unverbindlich. Kein Spam. Datenschutz wird groß geschrieben.
            </p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-1">
              <a href="#" className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-black text-green-400">Tiny<span className="text-white">Invest</span></span>
                <span className="text-xl">🏡</span>
              </a>
              <p className="text-gray-400 text-sm leading-relaxed">
                Hochwertige, moderne Tiny Houses – als Steuer-Investment, Rendite-Objekt oder Traumhaus auf Raten. Mobil. Zukunftssicher. Sicher.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Navigation</h4>
              <ul className="space-y-2">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-gray-400 hover:text-green-400 text-sm transition-colors">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Rechtliches</h4>
              <ul className="space-y-2">
                {["Impressum", "Datenschutz", "AGB", "Risikohinweise"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Kontakt</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <span>📧</span>
                  <a href="mailto:info@tinyinvest.de" className="hover:text-green-400 transition-colors">info@tinyinvest.de</a>
                </li>
                <li className="flex items-center gap-2">
                  <span>📞</span>
                  <a href="tel:+490001234567" className="hover:text-green-400 transition-colors">+49 000 123 456 7</a>
                </li>
                <li className="flex items-start gap-2">
                  <span>📍</span>
                  <span>Musterstraße 1, 12345 Berlin</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} TinyInvest. Alle Rechte vorbehalten.</p>
            <p className="text-gray-600 text-xs max-w-xl text-center sm:text-right">
              ⚠️ Investitionen in Wirtschaftsgüter sind mit Risiken verbunden. Steuerliche Vorteile hängen von den individuellen Voraussetzungen ab. Bitte berücksichtige unsere Risikohinweise und ziehe einen Steuerberater zu Rate.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
