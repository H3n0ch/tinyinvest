"use client";
import { useState, useEffect, useCallback } from "react";

// ──────────── Types ────────────
type Lead = {
  id: string;
  created_at: string;
  vorname: string;
  nachname: string;
  email: string;
  telefon: string | null;
  interesse: string;
  budget: string;
  nachricht: string | null;
  status: "neu" | "kontaktiert" | "abgeschlossen";
};

type Listing = {
  id: number;
  asset_id: string;
  title: string;
  location: string;
  status: "available" | "reserved" | "sold" | "planning";
  status_label: string;
  reserved: number;
  total: number;
  preis: string;
  irr: string;
  img: string;
  active: boolean;
};

// ──────────── Leads constants ────────────
const STATUS_COLORS = {
  neu:          "bg-red-100 text-red-700 border-red-200",
  kontaktiert:  "bg-yellow-100 text-yellow-700 border-yellow-200",
  abgeschlossen:"bg-green-100 text-green-700 border-green-200",
};
const STATUS_LABELS = {
  neu:          "🔴 Neu",
  kontaktiert:  "🟡 Kontaktiert",
  abgeschlossen:"🟢 Abgeschlossen",
};

const LISTING_STATUS_OPTIONS = ["available", "reserved", "sold", "planning"] as const;
const LISTING_STATUS_LABELS: Record<string, string> = {
  available: "✅ Verfügbar",
  reserved:  "🟡 Reserviert",
  sold:      "🔴 Sold Out",
  planning:  "🔵 In Planung",
};

// ──────────── Main component ────────────
export default function AdminPage() {
  const [password, setPassword]     = useState("");
  const [authed, setAuthed]         = useState(false);
  const [tab, setTab]               = useState<"leads" | "listings">("leads");

  // Leads state
  const [leads, setLeads]           = useState<Lead[]>([]);
  const [loadingLeads, setLoadingLeads] = useState(false);
  const [filter, setFilter]         = useState<"all" | Lead["status"]>("all");
  const [selected, setSelected]     = useState<Lead | null>(null);

  // Listings state
  const [listings, setListings]     = useState<Listing[]>([]);
  const [loadingListings, setLoadingListings] = useState(false);
  const [saving, setSaving]         = useState<number | null>(null);
  const [successId, setSuccessId]   = useState<number | null>(null);
  // Local edits per listing id
  const [edits, setEdits]           = useState<Record<number, Partial<Listing>>>({});

  const [error, setError]           = useState("");

  // ── Auth ──
  const fetchLeads = useCallback(async (pw: string) => {
    setLoadingLeads(true);
    setError("");
    const res = await fetch("/api/admin/leads", { headers: { "x-admin-password": pw } });
    if (res.status === 401) { setError("Falsches Passwort"); setAuthed(false); setLoadingLeads(false); return; }
    const data = await res.json();
    setLeads(Array.isArray(data) ? data : []);
    setAuthed(true);
    setLoadingLeads(false);
  }, []);

  const fetchListings = useCallback(async (pw: string) => {
    setLoadingListings(true);
    const res = await fetch("/api/admin/listings", { headers: { "x-admin-password": pw } });
    if (!res.ok) { setLoadingListings(false); return; }
    const data = await res.json();
    setListings(Array.isArray(data) ? data : []);
    setLoadingListings(false);
  }, []);

  const handleLoginSuccess = useCallback((pw: string) => {
    sessionStorage.setItem("admin_pw", pw);
    fetchLeads(pw);
    fetchListings(pw);
  }, [fetchLeads, fetchListings]);

  useEffect(() => {
    const saved = sessionStorage.getItem("admin_pw");
    if (saved) { setPassword(saved); fetchLeads(saved); fetchListings(saved); }
  }, [fetchLeads, fetchListings]);

  // ── Leads actions ──
  const updateStatus = async (id: string, status: string) => {
    await fetch("/api/admin/leads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json", "x-admin-password": password },
      body: JSON.stringify({ id, status }),
    });
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status: status as Lead["status"] } : l)));
    if (selected?.id === id) setSelected((prev) => prev ? { ...prev, status: status as Lead["status"] } : null);
  };

  const filtered = filter === "all" ? leads : leads.filter((l) => l.status === filter);
  const counts = {
    all:         leads.length,
    neu:         leads.filter((l) => l.status === "neu").length,
    kontaktiert: leads.filter((l) => l.status === "kontaktiert").length,
    abgeschlossen: leads.filter((l) => l.status === "abgeschlossen").length,
  };

  // ── Listings actions ──
  const editListing = (id: number, field: keyof Listing, value: unknown) => {
    setEdits((prev) => ({ ...prev, [id]: { ...prev[id], [field]: value } }));
  };

  const saveListing = async (listing: Listing) => {
    const patch = edits[listing.id] ?? {};
    if (Object.keys(patch).length === 0) return;
    setSaving(listing.id);
    const statusLabel = patch.status
      ? { available: "Verfügbar", reserved: "Reserviert", sold: "Sold Out", planning: "In Planung" }[patch.status as string] ?? listing.status_label
      : undefined;
    const res = await fetch("/api/admin/listings", {
      method: "PATCH",
      headers: { "Content-Type": "application/json", "x-admin-password": password },
      body: JSON.stringify({ id: listing.id, ...patch, ...(statusLabel ? { status_label: statusLabel } : {}) }),
    });
    if (res.ok) {
      const updated = await res.json();
      setListings((prev) => prev.map((l) => (l.id === listing.id ? { ...l, ...updated } : l)));
      setEdits((prev) => { const n = { ...prev }; delete n[listing.id]; return n; });
      setSuccessId(listing.id);
      setTimeout(() => setSuccessId(null), 2000);
    }
    setSaving(null);
  };

  // ── Login screen ──
  if (!authed) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">🏡</div>
            <h1 className="text-2xl font-black text-gray-900">TinyInvest Admin</h1>
            <p className="text-gray-500 text-sm mt-2">Melde dich an um Leads und Listings zu verwalten.</p>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); handleLoginSuccess(password); }}>
            <input
              type="password"
              placeholder="Admin Passwort"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 mb-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {error && <p className="text-red-500 text-sm mb-3 text-center">{error}</p>}
            <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition-colors">
              Einloggen →
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="bg-gray-900 border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🏡</span>
          <div>
            <h1 className="font-black text-lg">TinyInvest Admin</h1>
            <p className="text-gray-400 text-xs">Dashboard</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => { fetchLeads(password); fetchListings(password); }}
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            🔄 Aktualisieren
          </button>
          <button
            onClick={() => { sessionStorage.removeItem("admin_pw"); setAuthed(false); setLeads([]); setListings([]); setPassword(""); }}
            className="text-sm text-red-400 hover:text-red-300 transition-colors"
          >
            Abmelden
          </button>
        </div>
      </div>

      {/* Tab selector */}
      <div className="border-b border-white/10 bg-gray-900/50 px-6">
        <div className="flex gap-1">
          {(["leads", "listings"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-3 text-sm font-semibold border-b-2 transition-all ${
                tab === t
                  ? "border-green-400 text-green-400"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              {t === "leads" ? `📋 Leads (${leads.length})` : `🏷️ Listings (${listings.length})`}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">

        {/* ════ LEADS TAB ════ */}
        {tab === "leads" && (
          <>
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { key: "all",          label: "Gesamt",       color: "bg-white/5 border-white/10",         icon: "📋" },
                { key: "neu",          label: "Neu",          color: "bg-red-900/30 border-red-500/30",     icon: "🔴" },
                { key: "kontaktiert",  label: "Kontaktiert",  color: "bg-yellow-900/30 border-yellow-500/30", icon: "🟡" },
                { key: "abgeschlossen",label: "Abgeschlossen",color: "bg-green-900/30 border-green-500/30", icon: "🟢" },
              ].map((s) => (
                <button
                  key={s.key}
                  onClick={() => setFilter(s.key as typeof filter)}
                  className={`${s.color} border rounded-2xl p-5 text-left transition-all hover:scale-105 ${filter === s.key ? "ring-2 ring-green-400" : ""}`}
                >
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <div className="text-2xl font-black">{counts[s.key as keyof typeof counts]}</div>
                  <div className="text-sm text-gray-400">{s.label}</div>
                </button>
              ))}
            </div>

            {loadingLeads ? (
              <div className="text-center py-20 text-gray-400">⏳ Lade Leads...</div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-20 text-gray-400"><div className="text-5xl mb-4">📭</div><p>Noch keine Leads.</p></div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {filtered.map((lead) => (
                  <div
                    key={lead.id}
                    className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-green-500/30 transition-all cursor-pointer"
                    onClick={() => setSelected(selected?.id === lead.id ? null : lead)}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                      <div className="w-11 h-11 rounded-full bg-green-700 flex items-center justify-center font-black text-sm flex-shrink-0">
                        {lead.vorname[0]}{lead.nachname[0]}
                      </div>
                      <div className="flex-grow min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="font-bold text-white">{lead.vorname} {lead.nachname}</span>
                          <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${STATUS_COLORS[lead.status]}`}>{STATUS_LABELS[lead.status]}</span>
                        </div>
                        <div className="text-sm text-gray-400 flex flex-wrap gap-3">
                          <a href={`mailto:${lead.email}`} className="text-green-400 hover:text-green-300" onClick={(e) => e.stopPropagation()}>✉️ {lead.email}</a>
                          {lead.telefon && <a href={`tel:${lead.telefon}`} className="text-blue-400 hover:text-blue-300" onClick={(e) => e.stopPropagation()}>📞 {lead.telefon}</a>}
                        </div>
                      </div>
                      <div className="hidden sm:block text-right flex-shrink-0">
                        <p className="text-xs text-gray-500">{new Date(lead.created_at).toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" })}</p>
                        <p className="text-xs text-gray-400 mt-1 max-w-[200px] truncate">{lead.interesse}</p>
                      </div>
                    </div>

                    {selected?.id === lead.id && (
                      <div className="mt-5 pt-5 border-t border-white/10" onClick={(e) => e.stopPropagation()}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                          <div><p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Interesse</p><p className="text-sm text-white">{lead.interesse}</p></div>
                          <div><p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Budget</p><p className="text-sm text-white">{lead.budget}</p></div>
                          {lead.nachricht && <div className="sm:col-span-2"><p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Nachricht</p><p className="text-sm text-white bg-white/5 rounded-xl p-3">{lead.nachricht}</p></div>}
                        </div>
                        <div className="mb-4">
                          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Status ändern</p>
                          <div className="flex flex-wrap gap-2">
                            {(["neu", "kontaktiert", "abgeschlossen"] as const).map((s) => (
                              <button key={s} onClick={() => updateStatus(lead.id, s)} className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-all ${lead.status === s ? STATUS_COLORS[s] + " ring-2 ring-offset-1 ring-offset-gray-900 ring-green-400" : "bg-white/5 text-gray-400 border-white/10 hover:border-white/30"}`}>
                                {STATUS_LABELS[s]}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <a href={`mailto:${lead.email}?subject=TinyInvest – Deine Beratungsanfrage&body=Hallo ${lead.vorname},%0A%0A`} className="text-xs bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-full transition-colors">✉️ E-Mail schreiben</a>
                          {lead.telefon && <a href={`tel:${lead.telefon}`} className="text-xs bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-full transition-colors">📞 Anrufen</a>}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* ════ LISTINGS TAB ════ */}
        {tab === "listings" && (
          <>
            <div className="mb-6">
              <h2 className="text-lg font-black text-white mb-1">Listing-Verwaltung</h2>
              <p className="text-gray-400 text-sm">Aktualisiere den Investitions-Fortschritt und Status jedes Projekts.</p>
            </div>

            {loadingListings ? (
              <div className="text-center py-20 text-gray-400">⏳ Lade Listings...</div>
            ) : (
              <div className="space-y-4">
                {listings.map((listing) => {
                  const e = edits[listing.id] ?? {};
                  const currentReserved = e.reserved !== undefined ? Number(e.reserved) : listing.reserved;
                  const currentStatus   = (e.status as string) ?? listing.status;
                  const pct = listing.total > 0 ? Math.round((currentReserved / listing.total) * 100) : 0;
                  const isDirty = Object.keys(edits[listing.id] ?? {}).length > 0;

                  return (
                    <div key={listing.id} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all">
                      <div className="flex flex-col md:flex-row gap-5">
                        {/* Thumbnail */}
                        <div className="flex-shrink-0">
                          <img src={listing.img} alt={listing.title} className="w-20 h-16 object-cover rounded-xl" />
                        </div>

                        {/* Info */}
                        <div className="flex-grow min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-3">
                            <div>
                              <p className="font-data text-[11px] text-gray-500 mb-0.5">#{listing.asset_id}</p>
                              <h3 className="font-black text-white text-sm">{listing.title}</h3>
                              <p className="text-gray-400 text-xs">{listing.location} · {listing.preis} · IRR {listing.irr}</p>
                            </div>
                            {successId === listing.id && (
                              <span className="text-green-400 text-xs font-bold">✓ Gespeichert</span>
                            )}
                          </div>

                          {/* Controls grid */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {/* Reserved input */}
                            <div>
                              <label className="text-[10px] text-gray-400 uppercase tracking-wider block mb-1.5">
                                Reserviert / Gesamt
                              </label>
                              <div className="flex items-center gap-2">
                                <input
                                  type="number"
                                  min={0}
                                  max={listing.total}
                                  value={currentReserved}
                                  onChange={(e) => editListing(listing.id, "reserved", Number(e.target.value))}
                                  className="w-20 bg-gray-800 border border-white/20 rounded-lg px-3 py-2 text-white text-sm font-data focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                                <span className="text-gray-500 text-sm">/ {listing.total}</span>
                              </div>
                              {/* Progress bar */}
                              <div className="mt-2 w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                                <div
                                  className={`h-full rounded-full transition-all ${currentStatus === "available" ? "bg-green-500" : currentStatus === "reserved" ? "bg-amber-400" : currentStatus === "sold" ? "bg-red-400" : "bg-indigo-400"}`}
                                  style={{ width: `${pct}%` }}
                                />
                              </div>
                              <p className="text-[10px] text-gray-500 mt-1">{pct}% ausgelastet</p>
                            </div>

                            {/* Status select */}
                            <div>
                              <label className="text-[10px] text-gray-400 uppercase tracking-wider block mb-1.5">Status</label>
                              <select
                                value={currentStatus}
                                onChange={(e) => editListing(listing.id, "status", e.target.value)}
                                className="w-full bg-gray-800 border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                              >
                                {LISTING_STATUS_OPTIONS.map((s) => (
                                  <option key={s} value={s}>{LISTING_STATUS_LABELS[s]}</option>
                                ))}
                              </select>
                            </div>

                            {/* Active toggle + save */}
                            <div className="flex flex-col gap-2">
                              <label className="text-[10px] text-gray-400 uppercase tracking-wider block mb-1.5">Sichtbarkeit</label>
                              <button
                                onClick={() => editListing(listing.id, "active", !(e.active !== undefined ? e.active : listing.active))}
                                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                                  (e.active !== undefined ? e.active : listing.active)
                                    ? "bg-green-700/40 text-green-300 border border-green-600/40 hover:bg-green-700/60"
                                    : "bg-gray-700 text-gray-400 border border-gray-600 hover:bg-gray-600"
                                }`}
                              >
                                {(e.active !== undefined ? e.active : listing.active) ? "👁️ Sichtbar" : "🙈 Versteckt"}
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Save button */}
                        <div className="flex items-end md:items-start flex-shrink-0">
                          <button
                            onClick={() => saveListing(listing)}
                            disabled={!isDirty || saving === listing.id}
                            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                              isDirty && saving !== listing.id
                                ? "bg-green-600 hover:bg-green-700 text-white shadow-sm"
                                : "bg-gray-700 text-gray-500 cursor-not-allowed"
                            }`}
                          >
                            {saving === listing.id ? "⏳..." : "💾 Speichern"}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
