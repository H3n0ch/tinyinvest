import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { galleryImages } from "../components/data";
import ModalButton from "../components/ModalButton";

export const metadata = {
  title: "Galerie – TinyInvest Tiny Houses",
  description: "Einblicke in unsere hochwertigen, modernen und nachhaltigen Tiny Houses. Modern. Hochwertig. Nachhaltig.",
};

const outsideImages = [
  "/images/outside/ESCAPE1.webp",
  "/images/outside/ESCAPE2.webp",
  "/images/outside/ESCAPE3.webp",
  "/images/outside/DSC08828.webp",
  "/images/outside/DSC08835.webp",
  "/images/outside/DSC08946.webp",
  "/images/outside/DSC08969.webp",
  "/images/outside/DSC08974.webp",
  "/images/outside/DSC08980.webp",
  "/images/outside/fog.jpg",
  "/images/outside/winter.webp",
  "/images/outside/green.webp",
];

export default function GaleriePage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar variant="sub" />

      {/* Header */}
      <section className="pt-32 pb-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/" className="text-[12px] text-gray-400 hover:text-green-700 transition-colors">
              ← Zurück zur Plattform
            </Link>
          </div>
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">Visuelle Einblicke</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2 mb-3 tracking-tight">
            Einblicke in unsere Häuser
          </h1>
          <p className="text-gray-500 text-sm max-w-lg">Modern. Hochwertig. Nachhaltig. — Jedes TinyInvest-Haus ist ein vollwertiges, bewegliches Wirtschaftsgut auf Vlemmix Trailer.</p>
        </div>
      </section>

      {/* Inside gallery */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-base font-black text-gray-700 uppercase tracking-widest mb-6">Innenansichten</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {galleryImages.map((src, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl aspect-[4/3] group">
                <img
                  src={src}
                  alt={`TinyInvest Innenansicht ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outside gallery */}
      <section className="py-14 pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-base font-black text-gray-700 uppercase tracking-widest mb-6">Außenansichten</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {outsideImages.map((src, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl aspect-[4/3] group">
                <img
                  src={src}
                  alt={`TinyInvest Außenansicht ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-platform border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold mb-3">Bereit zu investieren?</p>
          <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Investitionsunterlagen anfordern</h3>
          <p className="text-gray-500 text-sm mb-6">
            Erhalten Sie das vollständige Investor-Paket: §7g-Analyse, Asset-Kennzahlen und individuelle Beratung.
          </p>
          <ModalButton className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-sm">
            🔐 Unterlagen anfordern →
          </ModalButton>
        </div>
      </section>

      <Footer />
    </main>
  );
}
