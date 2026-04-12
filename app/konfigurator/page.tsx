import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import KonfiguratorApp from "./KonfiguratorApp";

export const metadata: Metadata = {
  title: "Tiny House Konfigurator – Preisangebot erstellen | TinyInvest",
  description:
    "Konfigurieren Sie Ihr Tiny House nach Ihren Wünschen – On-Grid oder Off-Grid, mit allen Optionen aus Sanitär, Küche, Möbel, Solar & Heizung. Laden Sie direkt ein professionelles PDF-Angebot herunter.",
  alternates: {
    canonical: "https://tinyhouse.investments/konfigurator",
  },
};

export default function KonfiguratorPage() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800">
      <Navbar variant="sub" />

      {/* Page Header */}
      <div className="bg-white border-b border-gray-100 pt-28 pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
            <a href="/" className="hover:text-green-600 transition-colors">Home</a>
            <span>›</span>
            <span className="text-gray-600">Konfigurator</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Tiny House Konfigurator
          </h1>
          <p className="text-gray-500 text-base max-w-2xl">
            Stellen Sie Ihr Wunsch-Tiny-House Schritt für Schritt zusammen – wählen Sie Variante,
            Modell und Ausstattung. Am Ende erhalten Sie ein professionelles Preisangebot als PDF.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 mt-6">
            {[
              { icon: "🏗️", text: "Produktionsstandort Oradea, Rumänien" },
              { icon: "📄", text: "PDF-Angebot sofort per Download" },
              { icon: "🔒", text: "Keine Weitergabe Ihrer Daten" },
              { icon: "✅", text: "Lieferzeit ab 30 Tage" },
            ].map((b) => (
              <div
                key={b.text}
                className="flex items-center gap-2 text-xs text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full"
              >
                <span>{b.icon}</span>
                <span>{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Configurator */}
      <KonfiguratorApp />

      <Footer />
    </main>
  );
}
