"use client";
import Image from "next/image";

interface InvestorCardProps {
  listing_id: number;
  title: string;
  asset_id: string;
  img: string;
  location: string;
  kaufvertrag_url: string | null;
  mgmt_fee_pct: number;
  host_pct: number;
  umsatz_brutto_monat: number;
  investor_netto_monat: number;
  naechte_monat: number;
  naechste_anreise: string | null;
  umsatz_gesamt_brutto: number;
}

export default function InvestorCard({
  title,
  asset_id,
  img,
  location,
  kaufvertrag_url,
  mgmt_fee_pct,
  umsatz_brutto_monat,
  investor_netto_monat,
  naechte_monat,
  naechste_anreise,
  umsatz_gesamt_brutto,
}: InvestorCardProps) {
  const fmt = (val: number) =>
    new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(val);

  const fmtDate = (iso: string | null) => {
    if (!iso) return "–";
    return new Date(iso).toLocaleDateString("de-DE", { day: "2-digit", month: "short", year: "numeric" });
  };

  const currentMonth = new Date().toLocaleString("de-DE", { month: "long", year: "numeric" });

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
      {/* Header Image */}
      <div className="relative h-52 bg-gray-100">
        <Image
          src={img || "/images/outside/fog.jpg"}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 p-5">
          <p className="text-green-300 text-[11px] font-bold uppercase tracking-widest mb-0.5">{asset_id}</p>
          <h2 className="text-white font-black text-xl leading-tight">{title}</h2>
          <p className="text-white/60 text-xs mt-0.5">📍 {location}</p>
        </div>
        <div className="absolute top-4 right-4 bg-green-600/90 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
          Live
        </div>
      </div>

      <div className="p-6">
        {/* KPI-Kacheln */}
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
          Performance – {currentMonth}
        </p>

        <div className="grid grid-cols-3 gap-3 mb-5">
          {/* Umsatz Monat */}
          <div className="bg-green-50 border border-green-100 rounded-2xl p-3.5 text-center">
            <p className="text-[9px] font-bold text-green-600 uppercase tracking-wide mb-1">Netto-Auszahlung</p>
            <p className="text-lg font-black text-green-700">{fmt(investor_netto_monat)}</p>
            <p className="text-[9px] text-green-500 mt-0.5">
              {fmt(umsatz_brutto_monat)} brutto
            </p>
          </div>

          {/* Belegte Nächte */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-3.5 text-center">
            <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wide mb-1">Belegte Nächte</p>
            <p className="text-lg font-black text-gray-800">{naechte_monat}</p>
            <p className="text-[9px] text-gray-400 mt-0.5">diesen Monat</p>
          </div>

          {/* Nächste Anreise */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-3.5 text-center">
            <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wide mb-1">Nächste Anreise</p>
            <p className="text-sm font-black text-gray-800 leading-tight">{fmtDate(naechste_anreise)}</p>
            <p className="text-[9px] text-gray-400 mt-0.5">nächster Gast</p>
          </div>
        </div>

        {/* Gesamtumsatz Bar */}
        <div className="bg-gray-50 rounded-2xl p-4 mb-5">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Gesamtumsatz (kumuliert)</p>
            <p className="text-sm font-black text-gray-800">{fmt(umsatz_gesamt_brutto)}</p>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-gray-400">
            <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
            Management-Fee: {mgmt_fee_pct}% · Ihre Netto-Quote: {(100 - mgmt_fee_pct).toFixed(0)}%
          </div>
        </div>

        {/* Kaufvertrag Button */}
        {kaufvertrag_url ? (
          <a
            href={kaufvertrag_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 rounded-xl text-sm transition-all"
          >
            <span>📄</span> Kaufvertrag herunterladen
          </a>
        ) : (
          <div className="flex items-center justify-center gap-2 w-full bg-gray-100 text-gray-400 font-bold py-3 rounded-xl text-sm cursor-not-allowed">
            <span>📄</span> Kaufvertrag (wird hinterlegt)
          </div>
        )}
      </div>
    </div>
  );
}
