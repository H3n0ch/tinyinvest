import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DreiWege from "./components/DreiWege";
import Modelle from "./components/Modelle";
import SteuerSection from "./components/SteuerSection";
import WinWinWin from "./components/WinWinWin";
import Prozess from "./components/Prozess";
import Galerie from "./components/Galerie";
import Sicherheit from "./components/Sicherheit";
import Factsheet from "./components/Factsheet";
import FAQ from "./components/FAQ";
import Kontakt from "./components/Kontakt";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="font-sans antialiased text-gray-900 bg-white">
      <Navbar />
      <Hero />
      <DreiWege />
      <Modelle />
      <SteuerSection />
      <WinWinWin />
      <Prozess />
      <Galerie />
      <Sicherheit />
      <Factsheet />
      <FAQ />
      <Kontakt />
      <Footer />
    </main>
  );
}
