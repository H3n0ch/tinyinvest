"use client";
import dynamic from "next/dynamic";

const StandortMapWidget = dynamic(() => import("./StandortMapWidget"), {
  ssr: false,
  loading: () => (
    <div className="h-64 bg-gray-100 rounded-2xl animate-pulse flex items-center justify-center text-gray-400 text-sm">
      Karte wird geladen…
    </div>
  ),
});

export default function StandortMapLazy() {
  return <StandortMapWidget />;
}
