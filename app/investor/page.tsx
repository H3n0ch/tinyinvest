"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getBrowserClient } from "@/app/lib/supabase";

type AssetData = {
  asset_id: string;
  title: string;
  location: string;
  img: string;
  preis: string;
  irr: string;
  mgmt_fee_pct: number;
  host_pct: number;
  kaufvertrag_url: string | null;
};

type BookingEntry = {
  check_in: string;
  check_out: string;
  nights: number;
  revenue: number;
  your_cut: number;
};

type BookingStats = {
  total_bookings: number;
  total_nights: number;
  total_revenue: number;
  investor_revenue: number;
  investor_pct: number;
  recent: BookingEntry[];
};

type InvestorData = {
  full_name: string | null;
  email: string;
  registered_at: string;
  asset: AssetData | null;
  bookings: BookingStats | null;
};

export default function InvestorDashboard() {
  const router = useRouter();
  const [loading, setLoading]     = useState(true);
  const [data, setData]           = useState<InvestorData | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [error, setError]         = useState<string | null>(null);

  useEffect(() => {
    const init = async () => {
      const supabase = getBrowserClient();

      // 1. Check session
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) {
        router.replace("/investor/login");
        return;
      }

      const email = session.user.email!;
      setUserEmail(email);

      // 2. Fetch investor data by email (pass Bearer token for verification)
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
    const supabase = getBrowserClient();
    await supabase.auth.signOut();
    router.replace("/investor/login");
  };

  // ─── Loading ───
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-4 animate-pulse">📊</div>
          <p className="text-white font-semibold">Lade dein Dashboard…</p>
        </div>
      </div>
    );
  }

  // ─── Error ───
  if (error) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="text-5xl mb-4">⚠️</div>
          <h2 className="text-white font-bold text-xl mb-2">Fehler</h2>
          <p className="text-gray-400 text-sm mb-6">{error}</p>
          <button onClick={handleLogout} className="text-sm text-gray-500 hover:text-gray-300 underline">Ausloggen</button>
        </div>
      </div>
    );
  }

  // ─── Not found / not yet registered ───
  if (!data) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
        <div className="bg-gray-900 border border-white/10 rounded-3xl p-10 text-center max-w-md w-full">
          <div className="text-5xl mb-4">⏳</div>
          <h2 className="text-white font-bold text-xl mb-2">Noch nicht freigeschaltet</h2>
          <p className="text-gray-400 text-sm">
            Deine E-Mail <strong className="text-white">{userEmail}</strong> ist noch nicht mit einem Investment verknüpft. 
            Das Team wird deinen Zugang bald einrichten.
          </p>
          <p className="text-gray-600 text-xs mt-4">
            Falls du glaubst, dass ein Fehler vorliegt, wende dich bitte an <a href="mailto:info@tinyhouse.investments" className="text-green-400 hover:underline">info@tinyhouse.investments</a>
          </p>
          <button onClick={handleLogout} className="mt-6 text-sm text-gray-500 hover:text-gray-300 underline block mx-auto">Ausloggen</button>
        </div>
      </div>
    );
  }

  const asset = data.asset;
  const investorPct = asset ? Math.max(0, 100 - asset.mgmt_fee_pct - asset.host_pct) : 0;

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="bg-gray-900 border-b border-white/10 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-700/30 border border-green-500/30 flex items-center justify-center text-green-300 font-black">
              {(data.full_name || data.email)[0].toUpperCase()}
            </div>
            <div>
              <p className="font-bold text-white text-sm">{data.full_name || data.email}</p>
              <p className="text-gray-400 text-xs">{data.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="text-sm text-gray-400 hover:text-white transition-colors border border-white/10 hover:border-white/30 px-4 py-2 rounded-lg"
          >
            Ausloggen
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8">

        {/* Welcome */}
        <div>
          <h1 className="text-3xl font-black text-white">Moin, {(data.full_name || data.email).split(" ")[0]}! 👋</h1>
          <p className="text-gray-400 mt-1">Hier ist deine Investitions-Übersicht.</p>
        </div>

        {/* No asset yet */}
        {!asset ? (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">🏗️</div>
            <h3 className="text-white font-bold text-lg mb-2">Asset wird eingerichtet</h3>
            <p className="text-gray-400 text-sm">Das Team weist dir dein Tiny House Asset zu. Du wirst benachrichtigt sobald es fertig ist.</p>
          </div>
        ) : (
          <>
            {/* Asset card */}
            <div className="bg-gray-900 border border-white/10 rounded-2xl overflow-hidden">
              {asset.img && (
                <div className="relative h-52 sm:h-64 overflow-hidden">
                  <img src={asset.img} alt={asset.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <p className="text-[11px] text-gray-300 font-mono mb-1">Asset #{asset.asset_id}</p>
                    <h2 className="text-2xl font-black text-white">{asset.title}</h2>
                    <p className="text-gray-300 text-sm">{asset.location}</p>
                  </div>
                </div>
              )}

              <div className="p-6">
                {/* KPI Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Kaufpreis</p>
                    <p className="text-xl font-black text-white">{asset.preis}</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">IRR p.a.</p>
                    <p className="text-xl font-black text-green-400">{asset.irr}</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 col-span-2 sm:col-span-1">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Dein Anteil</p>
                    <p className="text-xl font-black text-amber-400">{investorPct.toFixed(0)} %</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">vom Buchungsumsatz</p>
                  </div>
                </div>

                {/* Revenue split */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-4">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-3 font-semibold">📊 Umsatzverteilung</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-green-400">💼 Dein Anteil (Investor)</span>
                      <span className="font-bold text-green-400">{investorPct.toFixed(0)} %</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">🏡 Host-Anteil</span>
                      <span className="font-bold text-gray-300">{asset.host_pct} %</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">⚙️ Management-Fee (TinyInvest)</span>
                      <span className="font-bold text-gray-300">{asset.mgmt_fee_pct} %</span>
                    </div>
                  </div>
                  {/* Visual bar */}
                  <div className="mt-3 h-2 rounded-full flex overflow-hidden gap-0.5">
                    <div className="bg-green-500 rounded-l-full" style={{ width: `${investorPct}%` }} />
                    <div className="bg-amber-500 h-full" style={{ width: `${asset.host_pct}%` }} />
                    <div className="bg-gray-600 rounded-r-full flex-1" />
                  </div>
                </div>

                {/* Kaufvertrag */}
                {asset.kaufvertrag_url && (
                  <a
                    href={asset.kaufvertrag_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white/5 border border-white/10 hover:border-green-500/30 hover:bg-green-900/10 rounded-xl px-4 py-3 transition-all group"
                  >
                    <span className="text-xl">📄</span>
                    <div className="flex-grow">
                      <p className="text-white text-sm font-semibold group-hover:text-green-400 transition-colors">Kaufvertrag anzeigen</p>
                      <p className="text-gray-500 text-xs">PDF öffnen</p>
                    </div>
                    <span className="text-gray-400 group-hover:text-green-400 transition-colors">↗</span>
                  </a>
                )}
              </div>
            </div>

            {/* Booking Stats */}
            {data.bookings ? (
              <div className="space-y-4">
                {/* KPI grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Buchungen</p>
                    <p className="text-2xl font-black text-white">{data.bookings.total_bookings}</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Nächte</p>
                    <p className="text-2xl font-black text-white">{data.bookings.total_nights}</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Gesamtumsatz</p>
                    <p className="text-2xl font-black text-white">{data.bookings.total_revenue.toLocaleString("de-DE", { style: "currency", currency: "EUR" })}</p>
                  </div>
                  <div className="bg-green-900/20 border border-green-500/20 rounded-xl p-4">
                    <p className="text-[10px] text-green-400 uppercase tracking-wider mb-1">Dein Anteil ({data.bookings.investor_pct}%)</p>
                    <p className="text-2xl font-black text-green-400">{data.bookings.investor_revenue.toLocaleString("de-DE", { style: "currency", currency: "EUR" })}</p>
                  </div>
                </div>

                {/* Recent bookings table */}
                {data.bookings.recent.length > 0 && (
                  <div className="bg-gray-900 border border-white/10 rounded-2xl overflow-hidden">
                    <div className="px-5 py-3 border-b border-white/10">
                      <p className="text-xs font-bold text-gray-300 uppercase tracking-wider">📅 Letzte Buchungen</p>
                    </div>
                    <div className="divide-y divide-white/5">
                      {data.bookings.recent.map((b, i) => (
                        <div key={i} className="px-5 py-3 flex items-center justify-between gap-3">
                          <div>
                            <p className="text-white text-sm font-semibold">
                              {new Date(b.check_in).toLocaleDateString("de-DE", { day: "2-digit", month: "short" })}
                              {" → "}
                              {new Date(b.check_out).toLocaleDateString("de-DE", { day: "2-digit", month: "short", year: "numeric" })}
                            </p>
                            <p className="text-gray-500 text-xs">{b.nights} {b.nights === 1 ? "Nacht" : "Nächte"} · Umsatz {b.revenue.toLocaleString("de-DE", { style: "currency", currency: "EUR" })}</p>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <p className="text-green-400 font-black text-sm">+{b.your_cut.toLocaleString("de-DE", { style: "currency", currency: "EUR" })}</p>
                            <p className="text-gray-500 text-[10px]">Dein Anteil</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-amber-900/10 border border-amber-500/20 rounded-xl px-5 py-4 text-sm text-amber-300/80">
                💡 <strong>Performance-Daten</strong> erscheinen sobald dein Asset mit TinyEscapes verknüpft ist und erste Buchungen vorliegen.
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
