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
  category: string;
  title: string;
  location: string;
  description: string;
  preis: string;
  irr: string;
  npv: string;
  occ: string;
  occ_note: string;
  img: string;
  reserved: number;
  total: number;
  status: "available" | "reserved" | "sold" | "planning";
  status_label: string;
  badge: string;
  badge_color: string;
  sort_order: number;
  active: boolean;
  lat: number | null;
  lng: number | null;
};

type NewListing = Omit<Listing, "id">;

// ──────────── Constants ────────────
const STATUS_COLORS = {
  neu:           "bg-red-100 text-red-700 border-red-200",
  kontaktiert:   "bg-yellow-100 text-yellow-700 border-yellow-200",
  abgeschlossen: "bg-green-100 text-green-700 border-green-200",
};
const STATUS_LABELS = {
  neu:           "🔴 Neu",
  kontaktiert:   "🟡 Kontaktiert",
  abgeschlossen: "🟢 Abgeschlossen",
};
const LISTING_STATUS_OPTIONS = ["available", "reserved", "sold", "planning"] as const;
const LISTING_STATUS_LABELS: Record<string, string> = {
  available: "✅ Verfügbar",
  reserved:  "🟡 Reserviert",
  sold:      "🔴 Sold Out",
  planning:  "🔵 In Planung",
};

const BADGE_COLOR_OPTIONS = [
  { label: "Grün",    value: "bg-green-100 text-green-700" },
  { label: "Amber",   value: "bg-amber-100 text-amber-700" },
  { label: "Indigo",  value: "bg-indigo-100 text-indigo-700" },
  { label: "Rot",     value: "bg-red-100 text-red-700" },
  { label: "Grau",    value: "bg-gray-100 text-gray-600" },
  { label: "Cyan",    value: "bg-cyan-100 text-cyan-700" },
];

const EMPTY_LISTING: NewListing = {
  asset_id: "", category: "Ferienimmobilie", title: "", location: "",
  description: "", preis: "", irr: "", npv: "", occ: "", occ_note: "",
  img: "/images/outside/fog.jpg", reserved: 0, total: 1,
  status: "planning", status_label: "In Planung",
  badge: "Phase 2", badge_color: "bg-indigo-100 text-indigo-700",
  sort_order: 99, active: false, lat: null, lng: null,
};

// ──────────── Input helpers ────────────
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-[10px] text-gray-400 uppercase tracking-wider block mb-1.5">{label}</label>
      {children}
    </div>
  );
}

const inp = "w-full bg-gray-800 border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500";
const sel = "w-full bg-gray-800 border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500";
const ta  = "w-full bg-gray-800 border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none";

// ──────────── Create/Edit Form ────────────
function ListingForm({
  data,
  onChange,
}: {
  data: Partial<NewListing>;
  onChange: (field: keyof NewListing, value: unknown) => void;
}) {
  const v = (field: keyof NewListing) => (data[field] as string | number | boolean) ?? "";
  const n = (field: keyof NewListing) => Number(data[field] ?? 0);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      <Field label="Asset-ID (z.B. 2026-A)">
        <input className={inp} value={v("asset_id") as string} onChange={(e) => onChange("asset_id", e.target.value)} placeholder="2026-A" />
      </Field>
      <Field label="Titel">
        <input className={inp} value={v("title") as string} onChange={(e) => onChange("title", e.target.value)} placeholder="Harz Retreat" />
      </Field>
      <Field label="Standort">
        <input className={inp} value={v("location") as string} onChange={(e) => onChange("location", e.target.value)} placeholder="Harz, Deutschland" />
      </Field>
      <Field label="Kategorie">
        <input className={inp} value={v("category") as string} onChange={(e) => onChange("category", e.target.value)} placeholder="Ferienimmobilie" />
      </Field>
      <Field label="Preis (Anzeigetext)">
        <input className={inp} value={v("preis") as string} onChange={(e) => onChange("preis", e.target.value)} placeholder="45.000 €" />
      </Field>
      <Field label="IRR p.a.">
        <input className={inp} value={v("irr") as string} onChange={(e) => onChange("irr", e.target.value)} placeholder="14,2 %" />
      </Field>
      <Field label="NPV (10 J.)">
        <input className={inp} value={v("npv") as string} onChange={(e) => onChange("npv", e.target.value)} placeholder="18.400 €" />
      </Field>
      <Field label="Auslastung (Anzeige)">
        <input className={inp} value={v("occ") as string} onChange={(e) => onChange("occ", e.target.value)} placeholder="55 %" />
      </Field>
      <Field label="Auslastungs-Hinweis">
        <input className={inp} value={v("occ_note") as string} onChange={(e) => onChange("occ_note", e.target.value)} placeholder="Basis: tiny Escapes Ø 2024" />
      </Field>
      <Field label="Bild-URL">
        <input className={inp} value={v("img") as string} onChange={(e) => onChange("img", e.target.value)} placeholder="/images/outside/fog.jpg" />
      </Field>
      <Field label="Badge-Text">
        <input className={inp} value={v("badge") as string} onChange={(e) => onChange("badge", e.target.value)} placeholder="Phase 2" />
      </Field>
      <Field label="Badge-Farbe">
        <select className={sel} value={v("badge_color") as string} onChange={(e) => onChange("badge_color", e.target.value)}>
          {BADGE_COLOR_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </Field>
      <Field label="Status">
        <select className={sel} value={v("status") as string} onChange={(e) => onChange("status", e.target.value)}>
          {LISTING_STATUS_OPTIONS.map((s) => <option key={s} value={s}>{LISTING_STATUS_LABELS[s]}</option>)}
        </select>
      </Field>
      <Field label="Reserviert">
        <input className={inp} type="number" min={0} value={n("reserved")} onChange={(e) => onChange("reserved", Number(e.target.value))} />
      </Field>
      <Field label="Gesamt">
        <input className={inp} type="number" min={1} value={n("total")} onChange={(e) => onChange("total", Number(e.target.value))} />
      </Field>
      <Field label="Sortierung">
        <input className={inp} type="number" min={0} value={n("sort_order")} onChange={(e) => onChange("sort_order", Number(e.target.value))} />
      </Field>
      <Field label="Sichtbar auf Website">
        <button
          type="button"
          onClick={() => onChange("active", !data.active)}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all w-full ${
            data.active
              ? "bg-green-700/40 text-green-300 border border-green-600/40"
              : "bg-gray-700 text-gray-400 border border-gray-600"
          }`}
        >
          {data.active ? "👁️ Sichtbar" : "🙈 Versteckt"}
        </button>
      </Field>
      <Field label="Beschreibung">
        <textarea className={ta} rows={3} value={v("description") as string} onChange={(e) => onChange("description", e.target.value)} placeholder="Kurzbeschreibung des Projekts…" />
      </Field>

      {/* ── Kartenkoordinaten ── */}
      <div className="sm:col-span-2 lg:col-span-3">
        <div className="bg-gray-800/50 border border-white/10 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">📍 Kartenkoordinaten (für Google Maps Pin)</p>
            <a
              href={`https://maps.google.com?q=${data.lat ?? ""},${data.lng ?? ""}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-green-400 hover:text-green-300 underline"
            >
              Google Maps öffnen ↗
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Breitengrad (Lat, z.B. 51.7566)">
              <input
                className={inp}
                type="number"
                step="0.0001"
                value={data.lat ?? ""}
                onChange={(e) => onChange("lat", e.target.value === "" ? null : Number(e.target.value))}
                placeholder="51.7566"
              />
            </Field>
            <Field label="Längengrad (Lng, z.B. 10.5514)">
              <input
                className={inp}
                type="number"
                step="0.0001"
                value={data.lng ?? ""}
                onChange={(e) => onChange("lng", e.target.value === "" ? null : Number(e.target.value))}
                placeholder="10.5514"
              />
            </Field>
          </div>
          <p className="text-[10px] text-gray-500 mt-2">
            💡 Koordinaten auf <strong className="text-gray-400">maps.google.com</strong> suchen → Rechtsklick auf den Ort → Koordinaten kopieren (z.B. 51.7566, 10.5514)
          </p>
        </div>
      </div>
    </div>
  );
}

// ──────────── Main component ────────────
export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed]     = useState(false);
  const [tab, setTab]           = useState<"leads" | "listings">("leads");

  // Leads
  const [leads, setLeads]               = useState<Lead[]>([]);
  const [loadingLeads, setLoadingLeads] = useState(false);
  const [filter, setFilter]             = useState<"all" | Lead["status"]>("all");
  const [selected, setSelected]         = useState<Lead | null>(null);

  // Listings
  const [listings, setListings]                 = useState<Listing[]>([]);
  const [loadingListings, setLoadingListings]   = useState(false);
  const [saving, setSaving]                     = useState<number | "new" | null>(null);
  const [successId, setSuccessId]               = useState<number | "new" | null>(null);
  const [edits, setEdits]                       = useState<Record<number, Partial<Listing>>>({});
  const [expandedEdit, setExpandedEdit]         = useState<Set<number>>(new Set());
  const [confirmDelete, setConfirmDelete]       = useState<number | null>(null);
  const [createOpen, setCreateOpen]             = useState(false);
  const [newListing, setNewListing]             = useState<Partial<NewListing>>({ ...EMPTY_LISTING });

  const [error, setError] = useState("");

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
    all:           leads.length,
    neu:           leads.filter((l) => l.status === "neu").length,
    kontaktiert:   leads.filter((l) => l.status === "kontaktiert").length,
    abgeschlossen: leads.filter((l) => l.status === "abgeschlossen").length,
  };

  // ── Listings: field edit ──
  const editListing = (id: number, field: keyof Listing, value: unknown) => {
    setEdits((prev) => ({ ...prev, [id]: { ...prev[id], [field]: value } }));
  };

  const toggleExpand = (id: number) => {
    setExpandedEdit((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  // ── Listings: save (PATCH) ──
  const saveListing = async (listing: Listing) => {
    const patch = edits[listing.id] ?? {};
    if (Object.keys(patch).length === 0) return;
    setSaving(listing.id);
    const res = await fetch("/api/admin/listings", {
      method: "PATCH",
      headers: { "Content-Type": "application/json", "x-admin-password": password },
      body: JSON.stringify({ id: listing.id, ...patch }),
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

  // ── Listings: create (POST) ──
  const createListing = async () => {
    setSaving("new");
    const res = await fetch("/api/admin/listings", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-admin-password": password },
      body: JSON.stringify(newListing),
    });
    if (res.ok) {
      const created = await res.json();
      setListings((prev) => [...prev, created].sort((a, b) => a.sort_order - b.sort_order));
      setNewListing({ ...EMPTY_LISTING });
      setCreateOpen(false);
      setSuccessId("new");
      setTimeout(() => setSuccessId(null), 2000);
    }
    setSaving(null);
  };

  // ── Listings: delete (DELETE) ──
  const deleteListing = async (id: number) => {
    const res = await fetch(`/api/admin/listings?id=${id}`, {
      method: "DELETE",
      headers: { "x-admin-password": password },
    });
    if (res.ok) {
      setListings((prev) => prev.filter((l) => l.id !== id));
      setConfirmDelete(null);
    }
  };

  // ──────────── Login screen ────────────
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

  // ──────────── Dashboard ────────────
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
          <button onClick={() => { fetchLeads(password); fetchListings(password); }} className="text-sm text-gray-400 hover:text-white transition-colors">
            🔄 Aktualisieren
          </button>
          <button onClick={() => { sessionStorage.removeItem("admin_pw"); setAuthed(false); setLeads([]); setListings([]); setPassword(""); }} className="text-sm text-red-400 hover:text-red-300 transition-colors">
            Abmelden
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-white/10 bg-gray-900/50 px-6">
        <div className="flex gap-1">
          {(["leads", "listings"] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)} className={`px-5 py-3 text-sm font-semibold border-b-2 transition-all ${tab === t ? "border-green-400 text-green-400" : "border-transparent text-gray-400 hover:text-white"}`}>
              {t === "leads" ? `📋 Leads (${leads.length})` : `🏷️ Projekte (${listings.length})`}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">

        {/* ════ LEADS TAB ════ */}
        {tab === "leads" && (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { key: "all",           label: "Gesamt",        color: "bg-white/5 border-white/10",           icon: "📋" },
                { key: "neu",           label: "Neu",           color: "bg-red-900/30 border-red-500/30",       icon: "🔴" },
                { key: "kontaktiert",   label: "Kontaktiert",   color: "bg-yellow-900/30 border-yellow-500/30", icon: "🟡" },
                { key: "abgeschlossen", label: "Abgeschlossen", color: "bg-green-900/30 border-green-500/30",   icon: "🟢" },
              ].map((s) => (
                <button key={s.key} onClick={() => setFilter(s.key as typeof filter)} className={`${s.color} border rounded-2xl p-5 text-left transition-all hover:scale-105 ${filter === s.key ? "ring-2 ring-green-400" : ""}`}>
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
                  <div key={lead.id} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-green-500/30 transition-all cursor-pointer" onClick={() => setSelected(selected?.id === lead.id ? null : lead)}>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                      <div className="w-11 h-11 rounded-full bg-green-700 flex items-center justify-center font-black text-sm flex-shrink-0">{lead.vorname[0]}{lead.nachname[0]}</div>
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
            {/* Tab header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-black text-white mb-0.5">Projekt-Verwaltung</h2>
                <p className="text-gray-400 text-sm">Projekte erstellen, bearbeiten, Status setzen und löschen.</p>
              </div>
              <button
                onClick={() => { setCreateOpen((v) => !v); setNewListing({ ...EMPTY_LISTING }); }}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${createOpen ? "bg-gray-700 text-gray-300" : "bg-green-600 hover:bg-green-700 text-white shadow-sm"}`}
              >
                {createOpen ? "✕ Abbrechen" : "+ Neues Projekt"}
              </button>
            </div>

            {/* Create form */}
            {createOpen && (
              <div className="bg-white/5 border border-green-500/30 rounded-2xl p-6 mb-6">
                <h3 className="font-black text-green-400 text-sm mb-1">Neues Projekt anlegen</h3>
                <p className="text-gray-500 text-xs mb-4">Alle Felder ausfüllen und speichern. Das Projekt ist zunächst versteckt (active = false).</p>
                <ListingForm
                  data={newListing}
                  onChange={(field, value) => setNewListing((prev) => ({ ...prev, [field]: value }))}
                />
                <div className="mt-5 flex items-center gap-3">
                  <button
                    onClick={createListing}
                    disabled={saving === "new"}
                    className="px-6 py-2.5 rounded-xl text-sm font-bold bg-green-600 hover:bg-green-700 text-white transition-all disabled:opacity-50"
                  >
                    {saving === "new" ? "⏳ Erstelle..." : "🚀 Projekt anlegen"}
                  </button>
                  {successId === "new" && <span className="text-green-400 text-sm font-bold">✓ Erstellt!</span>}
                </div>
              </div>
            )}

            {loadingListings ? (
              <div className="text-center py-20 text-gray-400">⏳ Lade Projekte...</div>
            ) : listings.length === 0 ? (
              <div className="text-center py-20 text-gray-400"><div className="text-5xl mb-4">🏗️</div><p>Noch keine Projekte. Lege das erste an!</p></div>
            ) : (
              <div className="space-y-4">
                {listings.map((listing) => {
                  const e = edits[listing.id] ?? {};
                  const currentReserved = e.reserved !== undefined ? Number(e.reserved) : listing.reserved;
                  const currentStatus   = (e.status as string) ?? listing.status;
                  const pct             = listing.total > 0 ? Math.round((currentReserved / listing.total) * 100) : 0;
                  const isDirty         = Object.keys(edits[listing.id] ?? {}).length > 0;
                  const isExpanded      = expandedEdit.has(listing.id);

                  return (
                    <div key={listing.id} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all">
                      <div className="flex flex-col md:flex-row gap-5">
                        {/* Thumbnail */}
                        <div className="flex-shrink-0">
                          <img src={(e.img as string) ?? listing.img} alt={listing.title} className="w-20 h-16 object-cover rounded-xl" />
                        </div>

                        {/* Main info + quick controls */}
                        <div className="flex-grow min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-3">
                            <div>
                              <p className="font-data text-[11px] text-gray-500 mb-0.5">#{listing.asset_id}</p>
                              <h3 className="font-black text-white text-sm">{(e.title as string) ?? listing.title}</h3>
                              <p className="text-gray-400 text-xs">{(e.location as string) ?? listing.location} · {listing.preis} · IRR {listing.irr}</p>
                            </div>
                            {successId === listing.id && <span className="text-green-400 text-xs font-bold">✓ Gespeichert</span>}
                          </div>

                          {/* Quick controls row */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {/* Reserved */}
                            <div>
                              <label className="text-[10px] text-gray-400 uppercase tracking-wider block mb-1.5">Reserviert / Gesamt</label>
                              <div className="flex items-center gap-2">
                                <input
                                  type="number" min={0} max={listing.total}
                                  value={currentReserved}
                                  onChange={(e) => editListing(listing.id, "reserved", Number(e.target.value))}
                                  className="w-20 bg-gray-800 border border-white/20 rounded-lg px-3 py-2 text-white text-sm font-data focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                                <span className="text-gray-500 text-sm">/ {(e.total as number) ?? listing.total}</span>
                              </div>
                              <div className="mt-2 w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                                <div className={`h-full rounded-full transition-all ${currentStatus === "available" ? "bg-green-500" : currentStatus === "reserved" ? "bg-amber-400" : currentStatus === "sold" ? "bg-red-400" : "bg-indigo-400"}`} style={{ width: `${pct}%` }} />
                              </div>
                              <p className="text-[10px] text-gray-500 mt-1">{pct}% ausgelastet</p>
                            </div>

                            {/* Status */}
                            <div>
                              <label className="text-[10px] text-gray-400 uppercase tracking-wider block mb-1.5">Status</label>
                              <select
                                value={currentStatus}
                                onChange={(e) => editListing(listing.id, "status", e.target.value)}
                                className="w-full bg-gray-800 border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                              >
                                {LISTING_STATUS_OPTIONS.map((s) => <option key={s} value={s}>{LISTING_STATUS_LABELS[s]}</option>)}
                              </select>
                            </div>

                            {/* Active */}
                            <div>
                              <label className="text-[10px] text-gray-400 uppercase tracking-wider block mb-1.5">Sichtbarkeit</label>
                              <button
                                onClick={() => editListing(listing.id, "active", !(e.active !== undefined ? e.active : listing.active))}
                                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all w-full ${(e.active !== undefined ? e.active : listing.active) ? "bg-green-700/40 text-green-300 border border-green-600/40 hover:bg-green-700/60" : "bg-gray-700 text-gray-400 border border-gray-600 hover:bg-gray-600"}`}
                              >
                                {(e.active !== undefined ? e.active : listing.active) ? "👁️ Sichtbar" : "🙈 Versteckt"}
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-row md:flex-col items-end gap-2 flex-shrink-0">
                          {/* Save */}
                          <button
                            onClick={() => saveListing(listing)}
                            disabled={!isDirty || saving === listing.id}
                            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${isDirty && saving !== listing.id ? "bg-green-600 hover:bg-green-700 text-white shadow-sm" : "bg-gray-700 text-gray-500 cursor-not-allowed"}`}
                          >
                            {saving === listing.id ? "⏳" : "💾 Speichern"}
                          </button>
                          {/* Edit toggle */}
                          <button
                            onClick={() => toggleExpand(listing.id)}
                            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all border ${isExpanded ? "border-amber-500/50 text-amber-400 bg-amber-900/20" : "border-white/20 text-gray-300 hover:border-white/40"}`}
                          >
                            {isExpanded ? "▲ Schließen" : "✏️ Bearbeiten"}
                          </button>
                          {/* Delete */}
                          {confirmDelete === listing.id ? (
                            <div className="flex gap-1">
                              <button onClick={() => deleteListing(listing.id)} className="px-3 py-2 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-700 text-white transition-all">✓ Ja</button>
                              <button onClick={() => setConfirmDelete(null)} className="px-3 py-2 rounded-xl text-xs font-bold bg-gray-700 text-gray-300 hover:bg-gray-600 transition-all">✕ Nein</button>
                            </div>
                          ) : (
                            <button onClick={() => setConfirmDelete(listing.id)} className="px-4 py-2 rounded-xl text-sm font-bold border border-red-500/30 text-red-400 hover:bg-red-900/20 transition-all">
                              🗑️ Löschen
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Extended edit form */}
                      {isExpanded && (
                        <div className="mt-5 pt-5 border-t border-white/10">
                          <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-3">Alle Felder bearbeiten</p>
                          <ListingForm
                            data={{ ...listing, ...edits[listing.id] }}
                            onChange={(field, value) => editListing(listing.id, field as keyof Listing, value)}
                          />
                          <div className="mt-4 flex items-center gap-3">
                            <button
                              onClick={() => saveListing(listing)}
                              disabled={!isDirty || saving === listing.id}
                              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${isDirty ? "bg-green-600 hover:bg-green-700 text-white" : "bg-gray-700 text-gray-500 cursor-not-allowed"}`}
                            >
                              {saving === listing.id ? "⏳ Speichert..." : "💾 Alle Änderungen speichern"}
                            </button>
                            {successId === listing.id && <span className="text-green-400 text-sm font-bold">✓ Gespeichert!</span>}
                          </div>
                        </div>
                      )}
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
