import type { Metadata } from "next";
import { supabase } from "./lib/supabase";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Modelle from "./components/Modelle";
import Oekosystem from "./components/Oekosystem";
import Prozess from "./components/Prozess";
import Ueber from "./components/Ueber";
import GalerieTeaser from "./components/GalerieTeaser";
import Testimonials from "./components/Testimonials";
import Presse from "./components/Presse";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://tinyhouse.investments",
  },
};

const FALLBACK_HERO = "/images/outside/ESCAPE3.webp";

async function getHeroImage(): Promise<string> {
  try {
    const { data } = await supabase
      .from("settings")
      .select("value")
      .eq("key", "hero_image")
      .single();
    return data?.value ?? FALLBACK_HERO;
  } catch {
    return FALLBACK_HERO;
  }
}

export default async function Home() {
  const heroImage = await getHeroImage();

  return (
    <main className="font-sans antialiased text-gray-800 bg-white">
      <Navbar />
      <Hero heroImage={heroImage} />
      <Modelle />
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
