import type { Metadata } from "next";
import { supabase } from "./lib/supabase";
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
import type { Listing } from "./components/ModelleCarousel";

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

async function getListings(): Promise<Listing[]> {
  try {
    const { data } = await supabase
      .from("listings")
      .select("*")
      .order("sort_order", { ascending: true });
    if (!data) return [];
    return data.map((row) => ({
      id:           row.id,
      asset_id:     row.asset_id,
      img:          row.img,
      category:     row.category,
      title:        row.title,
      location:     row.location,
      description:  row.description,
      preis:        row.preis,
      irr:          row.irr,
      npv:          row.npv,
      occ:          row.occ,
      occ_note:     row.occ_note,
      reserved:     row.reserved,
      total:        row.total,
      status:       row.status,
      status_label: row.status_label,
      badge:        row.badge,
      badge_color:  row.badge_color,
      sort_order:   row.sort_order,
    }));
  } catch {
    return [];
  }
}

export default async function Home() {
  const [heroImage, listings] = await Promise.all([getHeroImage(), getListings()]);

  return (
    <main className="font-sans antialiased text-gray-800 bg-white">
      <Navbar />
      <Hero heroImage={heroImage} />
      <TrustBar />
      <MarktplatzTeaser listings={listings} />
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
