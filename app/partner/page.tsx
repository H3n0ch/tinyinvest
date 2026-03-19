import Vertriebspartner from "../components/Vertriebspartner";
import Kontakt from "../components/Kontakt";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Vertriebspartner werden – TinyInvest",
  description:
    "Werde TinyInvest-Vertriebspartner und verdiene attraktive Provisionen, ohne Vorwissen oder Vorleistung.",
};

export default function PartnerPage() {
  return (
    <main className="font-sans antialiased text-gray-900 bg-white">
      {/* Minimal Navbar for subpage */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-black text-green-700">
                Tiny<span className="text-gray-900">Invest</span>
              </span>
              <span className="text-xl">🏡</span>
            </Link>
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors flex items-center gap-1"
            >
              ← Zurück zur Hauptseite
            </Link>
          </div>
        </div>
      </header>

      {/* Page content with top padding for fixed header */}
      <div className="pt-16 md:pt-20">
        <Vertriebspartner />
        <Kontakt />
        <Footer />
      </div>
    </main>
  );
}
