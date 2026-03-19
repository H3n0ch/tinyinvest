import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DreiWege from "./components/DreiWege";
import Oekosystem from "./components/Oekosystem";
import Modelle from "./components/Modelle";
import SteuerSection from "./components/SteuerSection";
import WinWinWin from "./components/WinWinWin";
import Prozess from "./components/Prozess";
import Galerie from "./components/Galerie";
import Sicherheit from "./components/Sicherheit";
import Testimonials from "./components/Testimonials";
import Factsheet from "./components/Factsheet";
import FAQ from "./components/FAQ";
import Kontakt from "./components/Kontakt";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="font-sans antialiased text-gray-900 bg-white">
      <Navbar />
      <Hero />
      <Oekosystem />
      <DreiWege />
      <Modelle />
      <SteuerSection />
      <WinWinWin />
      <Prozess />
      <Galerie />
      <Sicherheit />
      <Testimonials />
      <Factsheet />
      <FAQ />
      <Kontakt />
      <Footer />
    </main>
  );
}
