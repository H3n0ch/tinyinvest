import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import MarktplatzTeaser from "./components/MarktplatzTeaser";
import Oekosystem from "./components/Oekosystem";
import Prozess from "./components/Prozess";
import Ueber from "./components/Ueber";
import GalerieTeaser from "./components/GalerieTeaser";
import Testimonials from "./components/Testimonials";
import Presse from "./components/Presse";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Tiny House als Investment kaufen | TinyInvest",
  description:
    "Tiny House Investment ab 65.000 €. §7g-steueroptimiert, 12–14 % IRR p.a., vollautomatisch verwaltet. Jetzt Marktplatz ansehen.",
  keywords:
    "tiny house investment, tiny house kaufen kapitalanlage, §7g tiny house, tiny house rendite 2026, tiny house als kapitalanlage",
  alternates: {
    canonical: "https://tinyhouse.investments",
  },
  openGraph: {
    title: "Tiny House als Investment kaufen | TinyInvest",
    description:
      "Tiny House Investment ab 65.000 €. §7g-steueroptimiert, 12–14 % IRR p.a., vollautomatisch verwaltet.",
    url: "https://tinyhouse.investments",
  },
};

// Force fully static pre-rendering — served as a plain CDN file.
// No server round-trips on page load. Listings are fetched client-side by MarktplatzTeaser.
export const dynamic = "force-static";

// Static hero background — no DB lookup needed
const HERO_IMAGE = "/images/outside/ESCAPE3.webp";

export default function Home() {
  return (
    <main className="font-sans antialiased text-gray-800 bg-white">
      <Navbar />
      <Hero heroImage={HERO_IMAGE} />
      <TrustBar />
      <MarktplatzTeaser />
      <Oekosystem />
      <Prozess />
      <Ueber />
      <GalerieTeaser />
      <Testimonials />
      <Presse />
      <FAQ />
      <Footer />
    </main>
  );
}
