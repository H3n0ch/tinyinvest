import Link from "next/link";
import Image from "next/image";
import { navLinks } from "./data";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex mb-4">
            <Image
                src="/logo1.png"
                alt="TinyInvest Logo"
                width={500}
                height={150}
                className="h-50 w-auto brightness-0 invert"
              />
            </Link>
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
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Investment</h4>
            <ul className="space-y-2">
              <li><Link href="/projekte" className="text-gray-400 hover:text-green-400 text-sm transition-colors">🏠 Projekte & Marktplatz</Link></li>
              <li><Link href="/renditemodell" className="text-gray-400 hover:text-green-400 text-sm transition-colors">📈 Renditemodell</Link></li>
              <li><Link href="/steuervorteil" className="text-gray-400 hover:text-green-400 text-sm transition-colors">💰 §7g Steuervorteil</Link></li>
              <li><Link href="/so-funktioniert-es" className="text-gray-400 hover:text-green-400 text-sm transition-colors">⚙️ So funktioniert es</Link></li>
              <li><Link href="/galerie" className="text-gray-400 hover:text-green-400 text-sm transition-colors">📸 Galerie</Link></li>
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
                <a href="tel:+4969432187000" className="hover:text-green-400 transition-colors">+49 69 4321 8700</a>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Friedrichstraße 14, 60323 Frankfurt am Main</span>
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
