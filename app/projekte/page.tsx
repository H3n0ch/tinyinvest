import { supabase } from "../lib/supabase";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SubPageHeader from "../components/SubPageHeader";
import ProjekteGrid from "../components/ProjekteGrid";
import type { Listing } from "../components/ModelleCarousel";

export const metadata = {
  title: "Projekte – TinyInvest Marktplatz",
  description: "Alle aktuellen TinyInvest Asset-Listings 2026. §7g-fähige Tiny House Investments mit 12–18 % IRR p.a.",
};

export default async function ProjektePage() {
  const { data, error } = await supabase
    .from("listings")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) console.error("[Projekte] Supabase error:", error.message);

  const listings: Listing[] = (data ?? []).map((row) => ({
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

  const available = listings.filter((l) => l.status === "available").length;
  const reserved  = listings.filter((l) => l.status === "reserved").length;
  const planning  = listings.filter((l) => l.status === "planning").length;
  const sold      = listings.filter((l) => l.status === "sold").length;

  return (
    <main className="bg-white min-h-screen">
      <Navbar variant="sub" />

      <SubPageHeader
        badge="Marktplatz · Asset-Listings 2026"
        title="Aktuelle Investment-Projekte"
        subtitle="§7g-fähige Tiny House Assets auf Vlemmix Trailer — direkt gekauft beim Hersteller, bewirtschaftet durch tiny Escapes. Kein Kapital an TinyInvest."
        img="/images/outside/fog.jpg"
      />

      {/* KPI bar */}
      <section className="bg-gray-950 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: String(listings.length), label: "Projekte gesamt", sub: "Stand 2026" },
              { value: String(available), label: "Verfügbar",  sub: "Jetzt buchbar" },
              { value: String(reserved),  label: "Reserviert", sub: "In Abwicklung" },
              { value: String(planning + sold),  label: "Sonstige",  sub: "Planung oder Sold" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-data text-2xl font-black text-green-400">{s.value}</p>
                <p className="text-[11px] font-bold text-white mt-1">{s.label}</p>
                <p className="text-[10px] text-gray-500 mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid with filter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjekteGrid listings={listings} />
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-[11px] text-gray-400 leading-relaxed">
            * Alle IRR- und NPV-Angaben sind Projektionen auf Basis historischer Belegungsdaten von tiny Escapes.
            Sie stellen keine Garantie zukünftiger Renditen dar. Der Kauf erfolgt direkt beim Hersteller —
            TinyInvest agiert als Plattform und Vermittler, nicht als Kapitalsammelstelle.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
