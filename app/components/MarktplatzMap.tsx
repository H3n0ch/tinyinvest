"use client";
import dynamic from "next/dynamic";
import type { MapListing } from "./ProjekteGoogleMap";

const ProjekteGoogleMap = dynamic(() => import("./ProjekteGoogleMap"), {
  ssr: false,
  loading: () => (
    <div className="h-[420px] bg-gray-100 rounded-2xl animate-pulse flex items-center justify-center text-gray-400 text-sm">
      Karte wird geladen…
    </div>
  ),
});

export default function MarktplatzMap({ listings }: { listings: MapListing[] }) {
  return <ProjekteGoogleMap listings={listings} />;
}
