import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Modelle from "./components/Modelle";
import Oekosystem from "./components/Oekosystem";
import Prozess from "./components/Prozess";
import Ueber from "./components/Ueber";
import GalerieTeaser from "./components/GalerieTeaser";
import DataRoom from "./components/DataRoom";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="font-sans antialiased text-gray-800 bg-white">
      <Navbar />
      <Hero />
      <Modelle />
      <Oekosystem />
      <Prozess />
      <Ueber />
      <GalerieTeaser />
      <DataRoom />
      <FAQ />
      <Footer />
    </main>
  );
}
