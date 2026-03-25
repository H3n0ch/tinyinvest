"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getBrowserClient } from "@/app/lib/supabase";

// ─── Types ──────────────────────────────────────────────────────────────────

type BookingEntry = {
  check_in: string;
  check_out: string;
  nights: number;
  revenue: number;
  your_cut: number;
};

type MonthBar = { month: string; investor_revenue: number };

type AssetStats = {
  total_bookings: number;
  total_nights: number;
  total_revenue: number;
  investor_revenue: number;
  investor_pct: number;
  current_month_revenue: number;
  month_chart: MonthBar[];
  recent: BookingEntry[];
};

type Asset = {
  investor_asset_id: string | null;
  listing_id: number;
  mgmt_fee_pct: number;
  host_pct: number;
  investor_pct: number;
  kaufvertrag_url: string | null;
  asset_id: string;
  title: string;
  location: string;
  img: string;
  preis: string;
  irr: string;
  stats: AssetStats | null;
};

type Portfolio = {
  total_bookings: number;
  total_nights: number;
  total_revenue: number;
  investor_revenue: number;
  current_month_revenue: number;
  total_invested?: number;
  weighted_irr?: number;
  roi?: number;
};

type InvestorData = {
  email: string;
  full_name: string | null;
  registered_at: string;
  assets: Asset[];
  portfolio: Portfolio;
};

// ─── Helpers ────────────────────────────────────────────────────────────────

const fmt = (n: number) =>
  n.toLocaleString("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

const fmtDec = (n: number) =>
  n.toLocaleString("de-DE", { style: "currency", currency: "EUR" });

// ─── Sub-components ──────────────────────────────────────────────────────────

function StatCard({
  label,
  value,
  sub,
  highlight = false,
}: {
  label: string;
  value: string;
  sub?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-5 ${
        highlight
          ? "bg-green-600 text-white"
          : "bg-white border border-gray-200"
      }`}
    >
      <p className={`text-[11px] uppercase tracking-wider font-semibold mb-1 ${highlight ? "text-green-100" : "text-gray-400"}`}>
        {label}
      </p>
      <p className={`text-2xl font-black ${highlight ? "text-white" : "text-gray-900"}`}>{value}</p>
      {sub && <p className={`text-xs mt-0.5 ${highlight ? "text-green-100" : "text-gray-400"}`}>{sub}</p>}
    </div>
  );
}

function BarChart({ data }: { data: MonthBar[] }) {
  const max = Math.max(...data.map((d) => d.investor_revenue), 1);
  return (
    <div className="flex items-end gap-1.5 h-28 w-full">
      {data.map((d, i) => {
        const pct = Math.max((d.investor_revenue / max) * 100, d.investor_revenue > 0 ? 4 : 1);
        return (
          <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
            <div className="w-full flex flex-col justify-end" style={{ height: "88px" }}>
              <div
                title={`${d.month}: ${fmtDec(d.investor_revenue)}`}
                className={`w-full rounded-t-md transition-all ${
                  d.investor_revenue > 0 ? "bg-green-500 hover:bg-green-400" : "bg-gray-200"
                }`}
                style={{ height: `${pct}%` }}
              />
            </div>
            <span className="text-[10px] text-gray-400 font-medium">{d.month}</span>
          </div>
        );
      })}
    </div>
  );
}

function BookingsTable({ bookings }: { bookings: BookingEntry[] }) {
  if (!bookings.length) return null;
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
      <div className="px-5 py-3.5 border-b border-gray-100 flex items-center justify-between">
        <p className="text-sm font-bold text-gray-700">Letzte Buchungen</p>
        <span className="text-xs text-gray-400">{bookings.length} angezeigt</span>
      </div>
      <div className="divide-y divide-gray-50">
        {bookings.map((b, i) => (
          <div key={i} className="px-5 py-3.5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
            <div>
              <p className="text-sm font-semibold text-gray-800">
                {new Date(b.check_in).toLocaleDateString("de-DE", { day: "2-digit", month: "short" })}
                {" → "}
                {new Date(b.check_out).toLocaleDateString("de-DE", { day: "2-digit", month: "short", year: "numeric" })}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                {b.nights} {b.nights === 1 ? "Nacht" : "Nächte"} · Umsatz {fmtDec(b.revenue)}
              </p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-green-700 font-black text-sm">+{fmtDec(b.your_cut)}</p>
              <p className="text-[10px] text-gray-400">Dein Anteil</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AssetView({ asset }: { asset: Asset }) {
  const s = asset.stats;
  const hasChart = s?.month_chart && s.month_chart.some((m) => m.investor_revenue > 0);

  return (
    <div className="space-y-5">
      {/* Hero card */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        {asset.img && (
          <div className="relative h-52 sm:h-64 overflow-hidden">
            <img src={asset.img} alt={asset.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            {/* Live status badge */}
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-green-700 text-xs font-bold px-3 py-1.5 rounded-full border border-green-200 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Live & aktiv
              </span>
            </div>
            <div className="absolute bottom-4 left-5">
              <p className="text-[10px] text-gray-300 font-mono mb-1">Asset #{asset.asset_id}</p>
              <h2 className="text-2xl font-black text-white drop-shadow">{asset.title}</h2>
              <p className="text-gray-200 text-sm">📍 {asset.location}</p>
            </div>
          </div>
        )}

        <div className="p-5">
          {/* Quick info row */}
          <div className="flex flex-wrap gap-4 text-sm mb-5 pb-5 border-b border-gray-100">
            <div><span className="text-gray-400">Kaufpreis </span><strong className="text-gray-900">{asset.preis}</strong></div>
            <div><span className="text-gray-400">IRR p.a. </span><strong className="text-green-700">{asset.irr}</strong></div>
            <div><span className="text-gray-400">Dein Anteil </span><strong className="text-amber-600">{asset.investor_pct.toFixed(0)} %</strong></div>
          </div>

          {/* Revenue split bar */}
          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-2">Umsatzverteilung</p>
            <div className="h-2 rounded-full flex overflow-hidden gap-0.5">
              <div className="bg-green-500 rounded-l-full" style={{ width: `${asset.investor_pct}%` }} title={`Dein Anteil: ${asset.investor_pct.toFixed(0)} %`} />
              <div className="bg-amber-400" style={{ width: `${asset.host_pct}%` }} title={`Host: ${asset.host_pct} %`} />
              <div className="bg-gray-200 rounded-r-full flex-1" title={`Management: ${asset.mgmt_fee_pct} %`} />
            </div>
            <div className="flex gap-4 mt-2 text-[10px]">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500 inline-block" /> Dein Anteil {asset.investor_pct.toFixed(0)} %</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-400 inline-block" /> Host {asset.host_pct} %</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-gray-200 inline-block" /> Management {asset.mgmt_fee_pct} %</span>
            </div>
          </div>
        </div>
      </div>

      {/* KPI cards */}
      {s ? (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <StatCard label="Gesamt verdient" value={fmt(s.investor_revenue)} sub="dein Anteil" highlight />
          <StatCard label="Dieser Monat" value={fmt(s.current_month_revenue)} sub="dein Anteil" />
          <StatCard label="Gebuchte Nächte" value={String(s.total_nights)} />
          <StatCard label="Buchungen" value={String(s.total_bookings)} />
        </div>
      ) : (
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-sm text-amber-800">
          💡 <strong>Performance-Daten</strong> erscheinen sobald dein Asset mit TinyEscapes verknüpft ist und erste Buchungen vorliegen.
        </div>
      )}

      {/* 6-Month chart */}
      {s && (
        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm font-bold text-gray-800">Performance der letzten 6 Monate</p>
              <p className="text-xs text-gray-400 mt-0.5">Dein monatlicher Anteil am Buchungsumsatz</p>
            </div>
            <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2.5 py-1 rounded-full font-semibold">
              Investor-Anteil
            </span>
          </div>
          {hasChart ? (
            <BarChart data={s.month_chart} />
          ) : (
            <div className="h-28 flex items-center justify-center text-gray-400 text-sm">
              Noch keine Buchungsdaten für den Zeitraum.
            </div>
          )}
        </div>
      )}

      {/* Bookings table */}
      {s && s.recent.length > 0 && <BookingsTable bookings={s.recent} />}

      {/* Action buttons */}
      <div className="flex flex-wrap gap-3">
        {asset.kaufvertrag_url && (
          <a
            href={asset.kaufvertrag_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-green-400 hover:bg-green-50 text-gray-700 hover:text-green-700 font-semibold text-sm px-5 py-3 rounded-xl transition-all shadow-sm"
          >
            <span>📑</span> Kaufvertrag öffnen
          </a>
        )}
        <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-400 font-semibold text-sm px-5 py-3 rounded-xl cursor-default" title="Kommt bald">
          <span>📄</span> Abrechnung (demnächst)
        </div>
      </div>
    </div>
  );
}

function PortfolioView({ assets, portfolio }: { assets: Asset[]; portfolio: Portfolio }) {
  const totalInvested = portfolio.total_invested ?? 0;
  const roi           = portfolio.roi           ?? 0;
  const weightedIrr   = portfolio.weighted_irr  ?? 0;

  return (
    <div className="space-y-5">
      {/* ── Finanzkalkulation ── */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="px-5 py-3.5 border-b border-gray-100 flex items-center gap-2">
          <span className="text-base">💰</span>
          <p className="text-sm font-bold text-gray-700">Gesamtkalkulation</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-100">
          {[
            {
              label: "Gesamtinvestition",
              value: totalInvested > 0 ? fmt(totalInvested) : "—",
              sub:   `${assets.length} Asset${assets.length !== 1 ? "s" : ""}`,
              icon:  "🏠",
            },
            {
              label: "Gesamt verdient",
              value: fmt(portfolio.investor_revenue),
              sub:   "Dein Anteil kumuliert",
              icon:  "📈",
              green: true,
            },
            {
              label: "ROI aktuell",
              value: roi > 0 ? `${roi.toLocaleString("de-DE", { maximumFractionDigits: 2 })} %` : "—",
              sub:   "Einnahmen ÷ Investition",
              icon:  "📊",
            },
            {
              label: "Ø IRR erwartet",
              value: weightedIrr > 0 ? `${weightedIrr.toLocaleString("de-DE", { maximumFractionDigits: 1 })} %` : "—",
              sub:   "Gewichteter Durchschnitt",
              icon:  "🎯",
            },
          ].map((item) => (
            <div key={item.label} className={`p-5 ${item.green ? "bg-green-50" : ""}`}>
              <div className="text-lg mb-1">{item.icon}</div>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-1">{item.label}</p>
              <p className={`text-xl font-black ${item.green ? "text-green-700" : "text-gray-900"}`}>{item.value}</p>
              <p className="text-[10px] text-gray-400 mt-0.5">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio KPIs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <StatCard label="Gesamt verdient" value={fmt(portfolio.investor_revenue)} sub="über alle Häuser" highlight />
        <StatCard label="Dieser Monat" value={fmt(portfolio.current_month_revenue)} sub="alle Häuser" />
        <StatCard label="Gebuchte Nächte" value={String(portfolio.total_nights)} />
        <StatCard label="Buchungen" value={String(portfolio.total_bookings)} />
      </div>

      {/* Asset summary cards */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="px-5 py-3.5 border-b border-gray-100">
          <p className="text-sm font-bold text-gray-700">Deine Assets im Überblick</p>
        </div>
        <div className="divide-y divide-gray-50">
          {assets.map((a, i) => (
            <div key={i} className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors">
              {a.img && (
                <img src={a.img} alt={a.title} className="w-14 h-10 rounded-lg object-cover flex-shrink-0" />
              )}
              <div className="flex-grow min-w-0">
                <p className="text-sm font-bold text-gray-800 truncate">{a.title}</p>
                <div className="flex flex-wrap gap-3 text-xs text-gray-400 mt-0.5">
                  <span>📍 {a.location}</span>
                  <span>💰 {a.preis}</span>
                  <span>📈 IRR {a.irr}</span>
                  <span>🔑 {a.investor_pct.toFixed(0)} % Anteil</span>
                </div>
              </div>
              <div className="text-right flex-shrink-0 space-y-1">
                <p className="text-green-700 font-black text-sm">{fmt(a.stats?.investor_revenue ?? 0)}</p>
                <p className="text-[10px] text-gray-400">{a.stats?.total_bookings ?? 0} Buchungen</p>
                {a.kaufvertrag_url && (
                  <a
                    href={a.kaufvertrag_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[10px] text-green-600 hover:text-green-700 hover:underline font-semibold"
                  >
                    📑 Kaufvertrag
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Total row */}
        <div className="px-5 py-4 bg-green-50 border-t border-green-100 flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-green-800">Gesamt Portfolio</p>
            {totalInvested > 0 && (
              <p className="text-[10px] text-green-600">Investiert: {fmt(totalInvested)}</p>
            )}
          </div>
          <p className="text-green-700 font-black text-lg">{fmt(portfolio.investor_revenue)}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────

export default function InvestorDashboard() {
  const router                            = useRouter();
  const [loading, setLoading]             = useState(true);
  const [data, setData]                   = useState<InvestorData | null>(null);
  const [userEmail, setUserEmail]         = useState<string | null>(null);
  const [error, setError]                 = useState<string | null>(null);
  const [activeTab, setActiveTab]         = useState<number | "portfolio">(0);

  useEffect(() => {
    const init = async () => {
      const supabase = getBrowserClient();
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) { router.replace("/investor/login"); return; }

      const email = session.user.email!;
      setUserEmail(email);

      const res = await fetch(`/api/investor/data?email=${encodeURIComponent(email)}`, {
        headers: { Authorization: `Bearer ${session.access_token}` },
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        setError(j.error ?? "Unbekannter Fehler");
        setLoading(false);
        return;
      }
      const json = await res.json();
      setData(json);
      setLoading(false);
    };
    init();
  }, [router]);

  const handleLogout = async () => {
    await getBrowserClient().auth.signOut();
    router.replace("/investor/login");
  };

  // ── Loading ──
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <img src="/logo1.png" alt="TinyInvest" className="h-9 w-auto mx-auto mb-8 opacity-80 animate-pulse" />
          <div className="flex gap-1.5 justify-center mb-4">
            <div className="w-2 h-2 rounded-full bg-green-600 animate-bounce" style={{ animationDelay: "0ms" }} />
            <div className="w-2 h-2 rounded-full bg-green-600 animate-bounce" style={{ animationDelay: "150ms" }} />
            <div className="w-2 h-2 rounded-full bg-green-600 animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
          <p className="text-gray-600 font-semibold">Lade dein Dashboard…</p>
        </div>
      </div>
    );
  }

  // ── Error ──
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-10 text-center max-w-md w-full">
          <div className="text-5xl mb-4">⚠️</div>
          <h2 className="text-gray-900 font-bold text-xl mb-2">Fehler</h2>
          <p className="text-gray-500 text-sm mb-6">{error}</p>
          <button onClick={handleLogout} className="text-sm text-gray-400 hover:text-gray-600 underline">Ausloggen</button>
        </div>
      </div>
    );
  }

  // ── Not found ──
  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white border border-gray-200 rounded-3xl shadow-sm p-10 text-center max-w-md w-full">
          <div className="text-5xl mb-4">⏳</div>
          <h2 className="text-gray-900 font-bold text-xl mb-2">Noch nicht freigeschaltet</h2>
          <p className="text-gray-500 text-sm">
            Die E-Mail <strong className="text-gray-700">{userEmail}</strong> ist noch nicht mit einem Investment verknüpft. Das Team richtet deinen Zugang bald ein.
          </p>
          <p className="text-gray-400 text-xs mt-4">
            Fragen? <a href="mailto:info@tinyhouse.investments" className="text-green-600 hover:underline">info@tinyhouse.investments</a>
          </p>
          <button onClick={handleLogout} className="mt-6 text-sm text-gray-400 hover:text-gray-600 underline block mx-auto">Ausloggen</button>
        </div>
      </div>
    );
  }

  const { assets, portfolio } = data;
  const displayName = (data.full_name || data.email).split(" ")[0];
  const hasMultiple = assets.length > 1;

  // Resolve active asset
  const activeAsset = typeof activeTab === "number" ? assets[activeTab] : null;

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Header ── */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <img src="/logo1.png" alt="TinyInvest" className="h-7 w-auto" />
            <div className="w-px h-5 bg-gray-200 hidden sm:block" />
            <span className="text-xs text-gray-400 hidden sm:block">Investor-Portal</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-100 border border-green-200 flex items-center justify-center text-green-700 font-black text-sm">
                {(data.full_name || data.email)[0].toUpperCase()}
              </div>
              <div>
                <p className="text-xs font-bold text-gray-700 leading-tight">{data.full_name || data.email}</p>
                <p className="text-[10px] text-gray-400 leading-tight truncate max-w-[160px]">{data.email}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="text-xs text-gray-500 hover:text-gray-800 border border-gray-200 hover:border-gray-300 px-3 py-1.5 rounded-lg transition-all"
            >
              Ausloggen
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        {/* Welcome */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900">
            Hallo, {displayName}! 👋
          </h1>
          <p className="text-gray-400 mt-1 text-sm">
            {assets.length === 0
              ? "Deine Assets werden gerade vorbereitet."
              : assets.length === 1
              ? `Hier ist die Übersicht für ${assets[0].title}.`
              : `Du hast ${assets.length} Tiny Houses in deinem Portfolio.`}
          </p>
        </div>

        {/* No asset */}
        {assets.length === 0 && (
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
            <div className="text-4xl mb-4">🏗️</div>
            <h3 className="text-gray-900 font-bold text-lg mb-2">Asset wird eingerichtet</h3>
            <p className="text-gray-500 text-sm">Das Team weist dir dein Tiny House Asset zu. Du wirst benachrichtigt sobald es fertig ist.</p>
          </div>
        )}

        {/* Asset tabs (multiple assets) */}
        {assets.length > 0 && (
          <>
            {hasMultiple && (
              <div className="flex gap-1 bg-white border border-gray-200 rounded-xl p-1 shadow-sm overflow-x-auto">
                {assets.map((a, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                      activeTab === i
                        ? "bg-green-600 text-white shadow-sm"
                        : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    🏠 {a.title}
                  </button>
                ))}
                <button
                  onClick={() => setActiveTab("portfolio")}
                  className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                    activeTab === "portfolio"
                      ? "bg-gray-800 text-white shadow-sm"
                      : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  📊 Portfolio
                </button>
              </div>
            )}

            {/* Content */}
            {activeTab === "portfolio" ? (
              <PortfolioView assets={assets} portfolio={portfolio} />
            ) : activeAsset ? (
              <AssetView asset={activeAsset} />
            ) : null}
          </>
        )}

      </div>
    </div>
  );
}
