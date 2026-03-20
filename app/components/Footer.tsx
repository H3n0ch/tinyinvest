import Link from "next/link";
import { navLinks } from "./data";

export default function Footer() {
  return (
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
              <li>
                <Link href="/partner" className="text-green-400 hover:text-green-300 text-sm transition-colors font-semibold">
                  🤝 Vertriebspartner werden
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Rechtliches</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/impressum" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Impressum</Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Datenschutz</Link>
              </li>
              <li>
                <Link href="/agb" className="text-gray-400 hover:text-green-400 text-sm transition-colors">AGB</Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Risikohinweise</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Kontakt</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:info@tinyhouse.investments" className="hover:text-green-400 transition-colors">info@tinyhouse.investments</a>
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

        <div className="border-t border-gray-800 pt-8 flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} TinyInvest. Alle Rechte vorbehalten.</p>
            <div className="flex gap-4 text-xs">
              <Link href="/impressum" className="text-gray-600 hover:text-green-400 transition-colors">Impressum</Link>
              <Link href="/datenschutz" className="text-gray-600 hover:text-green-400 transition-colors">Datenschutz</Link>
              <Link href="/agb" className="text-gray-600 hover:text-green-400 transition-colors">AGB</Link>
            </div>
          </div>
          <p className="text-gray-600 text-xs text-center sm:text-left">
            ⚠️ Investitionen in Wirtschaftsgüter sind mit Risiken verbunden. Steuerliche Vorteile hängen von den individuellen Voraussetzungen ab. Bitte berücksichtige unsere Risikohinweise.
          </p>
        </div>
      </div>
    </footer>
  );
}
