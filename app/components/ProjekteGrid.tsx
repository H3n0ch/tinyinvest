"use client";
import { useState } from "react";
import type { Listing } from "./ModelleCarousel";
import ModalButton from "./ModalButton";

const statusCfg = {
  available: { bar: "bg-green-500",  track: "bg-green-100",  badgeCls: "badge-available", dim: "" },
  reserved:  { bar: "bg-amber-400",  track: "bg-amber-100",  badgeCls: "badge-reserved",  dim: "" },
  sold:      { bar: "bg-red-400",    track: "bg-red-100",    badgeCls: "badge-sold",      dim: "" },
  planning:  { bar: "bg-indigo-300", track: "bg-indigo-50",  badgeCls: "badge-planning",  dim: "opacity-65" },
};

type FilterKey = "all" | "available" | "reserved" | "planning";

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all",       label: "Alle" },
  { key: "available", label: "Verfügbar" },
  { key: "reserved",  label: "Reserviert" },
  { key: "planning",  label: "In Planung" },
];

function ProjectCard({ item }: { item: Listing }) {
  const cfg = statusCfg[item.status] ?? statusCfg.available;
  const pct = item.total > 0 ? Math.round((item.reserved / item.total) * 100) : 0;
  const isPlanning = item.status === "planning";

  return (
    <div className={`bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow duration-200 ${cfg.dim}`}>
      {/* Image */}
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <img
          src={item.img}
          alt={item.title}
          className={`w-full h-full object-cover ${isPlanning ? "grayscale-[30%]" : ""}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="font-data bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded-md">
            #{item.asset_id}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${cfg.badgeCls}`}>
            {item.status_label}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-[10px] text-white/60 mb-0.5">{item.category}</p>
          <p className="text-[13px] text-white font-semibold leading-tight">{item.location}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-black text-gray-900 text-[14px] leading-tight">{item.title}</h3>
          <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0 ${item.badge_color}`}>
            {item.badge}
          </span>
        </div>

        <p className="text-gray-500 text-[12px] leading-relaxed mb-3 line-clamp-2">{item.description}</p>

        {/* Reservation bar */}
        {!isPlanning && (
          <div className="mb-3">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] text-gray-400">Listing-Auslastung</span>
              <span className="font-data text-[10px] font-semibold text-gray-600">{item.reserved}/{item.total} Einheiten</span>
            </div>
            <div className={`w-full h-1.5 rounded-full ${cfg.track}`}>
              <div className={`h-1.5 rounded-full ${cfg.bar} transition-all`} style={{ width: `${pct}%` }} />
            </div>
          </div>
        )}

        {/* KPIs */}
        <div className="mt-auto">
          <div className="grid grid-cols-3 gap-1.5 mb-2">
            <div className="bg-gray-50 rounded-lg p-2 text-center">
              <p className="text-[9px] text-gray-400">IRR</p>
              <p className="font-data text-[12px] font-black text-green-700">{item.irr}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-2 text-center">
              <p className="text-[9px] text-gray-400">NPV*</p>
              <p className="font-data text-[12px] font-black text-gray-800">{item.npv}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-2 text-center">
              <p className="text-[9px] text-gray-400">Preis</p>
              <p className="font-data text-[12px] font-black text-gray-800">{item.preis}</p>
            </div>
          </div>
          <p className="text-[9px] text-gray-400 mb-3">* {item.occ_note}</p>
          <ModalButton
            className={`block w-full py-2.5 rounded-full font-semibold text-[12px] text-center transition-colors ${
              isPlanning
                ? "border border-gray-200 text-gray-500 hover:border-green-300 hover:text-green-700"
                : "bg-green-700 text-white hover:bg-green-800"
            }`}
          >
            {isPlanning ? "Vormerken lassen →" : "Projektunterlagen →"}
          </ModalButton>
        </div>
      </div>
    </div>
  );
}

export default function ProjekteGrid({ listings }: { listings: Listing[] }) {
  const [filter, setFilter] = useState<FilterKey>("all");

  const filtered = filter === "all"
    ? listings
    : filter === "planning"
      ? listings.filter((l) => l.status === "planning" || l.status === "sold")
      : listings.filter((l) => l.status === filter);

  return (
    <div>
      {/* Filter bar */}
      <div className="flex items-center gap-2 mb-8 flex-wrap">
        {FILTERS.map((f) => {
          const count = f.key === "all"
            ? listings.length
            : f.key === "planning"
              ? listings.filter((l) => l.status === "planning" || l.status === "sold").length
              : listings.filter((l) => l.status === f.key).length;

          return (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-semibold transition-all ${
                filter === f.key
                  ? "bg-green-700 text-white shadow-sm"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700"
              }`}
            >
              {f.label}
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                filter === f.key ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-4xl mb-3">🏗️</p>
          <p className="font-semibold">Keine Projekte in dieser Kategorie</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
