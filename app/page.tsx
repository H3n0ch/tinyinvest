import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Oekosystem from "./components/Oekosystem";
import Betreiber from "./components/Betreiber";
import DreiWege from "./components/DreiWege";
import Modelle from "./components/Modelle";
import SteuerSection from "./components/SteuerSection";
import WinWinWin from "./components/WinWinWin";
import Prozess from "./components/Prozess";
import Galerie from "./components/Galerie";
import Sicherheit from "./components/Sicherheit";
import Testimonials from "./components/Testimonials";
import DataRoom from "./components/DataRoom";
import Factsheet from "./components/Factsheet";
import FAQ from "./components/FAQ";
import Kontakt from "./components/Kontakt";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="font-sans antialiased text-gray-800 bg-white">
      <Navbar />

      {/* 1. Hero — Institutional headline + trust bar + live-stats */}
      <Hero />

      {/* 2. Ecosystem overview — what makes us unique */}
      <Oekosystem />

      {/* 3. Betreiber — TinyEscapes group structure + legal diagram + location network */}
      <Betreiber />

      {/* 4. Investor paths — 3 ways to invest */}
      <DreiWege />

      {/* 5. Asset Listings — marketplace with project IDs, status, funding bars */}
      <Modelle />

      {/* 6. Tax advantage — §7g deep dive + calculator */}
      <SteuerSection />

      {/* 7. Win-Win-Win — revenue model + yield calculator */}
      <WinWinWin />

      {/* 8. Process — step-by-step for each investor type */}
      <Prozess />

      {/* 9. Gallery */}
      <Galerie />

      {/* 10. Security & trust */}
      <Sicherheit />

      {/* 11. Testimonials */}
      <Testimonials />

      {/* 12. Investor Data Room — gated document vault */}
      <DataRoom />

      {/* 13. Factsheet CTA */}
      <Factsheet />

      {/* 14. FAQ */}
      <FAQ />

      {/* 15. Contact — Investor Memorandum form */}
      <Kontakt />

      <Footer />
    </main>
  );
}
