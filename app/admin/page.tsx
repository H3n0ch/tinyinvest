"use client";
import { useState, useEffect, useCallback } from "react";

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

const STATUS_COLORS = {
  neu: "bg-red-100 text-red-700 border-red-200",
  kontaktiert: "bg-yellow-100 text-yellow-700 border-yellow-200",
  abgeschlossen: "bg-green-100 text-green-700 border-green-200",
};

const STATUS_LABELS = {
  neu: "🔴 Neu",
  kontaktiert: "🟡 Kontaktiert",
  abgeschlossen: "🟢 Abgeschlossen",
};

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState<"all" | "neu" | "kontaktiert" | "abgeschlossen">("all");
  const [selected, setSelected] = useState<Lead | null>(null);

  const fetchLeads = useCallback(async (pw: string) => {
    setLoading(true);
    setError("");
    const res = await fetch("/api/admin/leads", {
      headers: { "x-admin-password": pw },
    });
    if (res.status === 401) {
      setError("Falsches Passwort");
      setAuthed(false);
      setLoading(false);
      return;
    }
    const data = await res.json();
    setLeads(Array.isArray(data) ? data : []);
    setAuthed(true);
    setLoading(false);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    fetchLeads(password);
  };

  const updateStatus = async (id: string, status: string) => {
    await fetch("/api/admin/leads", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "x-admin-password": password,
      },
      body: JSON.stringify({ id, status }),
    });
    setLeads((prev) =>
      prev.map((l) => (l.id === id ? { ...l, status: status as Lead["status"] } : l))
    );
    if (selected?.id === id) setSelected((prev) => prev ? { ...prev, status: status as Lead["status"] } : null);
  };

  const filtered = filter === "all" ? leads : leads.filter((l) => l.status === filter);

  const counts = {
    all: leads.length,
    neu: leads.filter((l) => l.status === "neu").length,
    kontaktiert: leads.filter((l) => l.status === "kontaktiert").length,
    abgeschlossen: leads.filter((l) => l.status === "abgeschlossen").length,
  };

  useEffect(() => {
    const saved = sessionStorage.getItem("admin_pw");
    if (saved) {
      setPassword(saved);
      fetchLeads(saved);
    }
  }, [fetchLeads]);

  const handleLoginSuccess = (pw: string) => {
    sessionStorage.setItem("admin_pw", pw);
    fetchLeads(pw);
  };

  if (!authed) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">🏡</div>
            <h1 className="text-2xl font-black text-gray-900">TinyInvest Admin</h1>
            <p className="text-gray-500 text-sm mt-2">Melde dich an, um deine Leads zu sehen.</p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLoginSuccess(password);
            }}
          >
            <input
              type="password"
              placeholder="Admin Passwort"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 mb-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {error && <p className="text-red-500 text-sm mb-3 text-center">{error}</p>}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition-colors"
            >
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
            <p className="text-gray-400 text-xs">Lead Management Dashboard</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => fetchLeads(password)}
            className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
          >
            🔄 Aktualisieren
          </button>
          <button
            onClick={() => {
              sessionStorage.removeItem("admin_pw");
              setAuthed(false);
              setLeads([]);
              setPassword("");
            }}
            className="text-sm text-red-400 hover:text-red-300 transition-colors"
          >
            Abmelden
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { key: "all", label: "Gesamt", color: "bg-white/5 border-white/10", icon: "📋" },
            { key: "neu", label: "Neu", color: "bg-red-900/30 border-red-500/30", icon: "🔴" },
            { key: "kontaktiert", label: "Kontaktiert", color: "bg-yellow-900/30 border-yellow-500/30", icon: "🟡" },
            { key: "abgeschlossen", label: "Abgeschlossen", color: "bg-green-900/30 border-green-500/30", icon: "🟢" },
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

        {loading ? (
          <div className="text-center py-20 text-gray-400">⏳ Lade Leads...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <div className="text-5xl mb-4">📭</div>
            <p>Noch keine Leads vorhanden.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {filtered.map((lead) => (
              <div
                key={lead.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-green-500/30 transition-all cursor-pointer"
                onClick={() => setSelected(selected?.id === lead.id ? null : lead)}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                  {/* Avatar */}
                  <div className="w-11 h-11 rounded-full bg-green-700 flex items-center justify-center font-black text-sm flex-shrink-0">
                    {lead.vorname[0]}{lead.nachname[0]}
                  </div>

                  {/* Info */}
                  <div className="flex-grow min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-bold text-white">{lead.vorname} {lead.nachname}</span>
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${STATUS_COLORS[lead.status]}`}>
                        {STATUS_LABELS[lead.status]}
                      </span>
                    </div>
                    <div className="text-sm text-gray-400 flex flex-wrap gap-3">
                      <a href={`mailto:${lead.email}`} className="text-green-400 hover:text-green-300" onClick={(e) => e.stopPropagation()}>
                        ✉️ {lead.email}
                      </a>
                      {lead.telefon && (
                        <a href={`tel:${lead.telefon}`} className="text-blue-400 hover:text-blue-300" onClick={(e) => e.stopPropagation()}>
                          📞 {lead.telefon}
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="hidden sm:block text-right flex-shrink-0">
                    <p className="text-xs text-gray-500">{new Date(lead.created_at).toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" })}</p>
                    <p className="text-xs text-gray-400 mt-1 max-w-[200px] truncate">{lead.interesse}</p>
                  </div>
                </div>

                {/* Expanded Detail */}
                {selected?.id === lead.id && (
                  <div className="mt-5 pt-5 border-t border-white/10" onClick={(e) => e.stopPropagation()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Interesse</p>
                        <p className="text-sm text-white">{lead.interesse}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Budget</p>
                        <p className="text-sm text-white">{lead.budget}</p>
                      </div>
                      {lead.nachricht && (
                        <div className="sm:col-span-2">
                          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Nachricht</p>
                          <p className="text-sm text-white bg-white/5 rounded-xl p-3">{lead.nachricht}</p>
                        </div>
                      )}
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Eingegangen</p>
                        <p className="text-sm text-white">{new Date(lead.created_at).toLocaleDateString("de-DE", { weekday: "long", day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })}</p>
                      </div>
                    </div>

                    {/* Status Update */}
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Status ändern</p>
                      <div className="flex flex-wrap gap-2">
                        {(["neu", "kontaktiert", "abgeschlossen"] as const).map((s) => (
                          <button
                            key={s}
                            onClick={() => updateStatus(lead.id, s)}
                            className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-all ${
                              lead.status === s
                                ? STATUS_COLORS[s] + " ring-2 ring-offset-1 ring-offset-gray-900 ring-green-400"
                                : "bg-white/5 text-gray-400 border-white/10 hover:border-white/30"
                            }`}
                          >
                            {STATUS_LABELS[s]}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      <a
                        href={`mailto:${lead.email}?subject=TinyInvest – Deine Beratungsanfrage&body=Hallo ${lead.vorname},%0A%0A`}
                        className="text-xs bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-full transition-colors"
                      >
                        ✉️ E-Mail schreiben
                      </a>
                      {lead.telefon && (
                        <a
                          href={`tel:${lead.telefon}`}
                          className="text-xs bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-full transition-colors"
                        >
                          📞 Anrufen
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
