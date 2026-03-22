"use client";
import { useState, useEffect, useRef } from "react";
import { useModal } from "./ModalContext";

export default function MemorandumModal() {
  const { isOpen, closeModal } = useModal();

  const [form, setForm] = useState({
    vorname: "",
    nachname: "",
    email: "",
    telefon: "",
    interesse: "Investor-Memorandum + §7g-Steueranalyse anfordern",
    budget: "Asset #TE-2026-02 · TinyInvest Escape (79.000 €)",
    investmentVolumen: "60.000 – 80.000 € (1 Asset)",
    nachricht: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const panelRef = useRef<HTMLDivElement>(null);

  // Escape key handler
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, closeModal]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setSubmitted(false);
        setError("");
      }, 300);
    }
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.vorname || !form.nachname || !form.email) {
      setError("Bitte fülle alle Pflichtfelder aus.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Fehler beim Senden. Bitte direkt per E-Mail kontaktieren.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm
                 animate-in fade-in duration-200"
      onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
    >
      {/* Modal panel */}
      <div
        ref={panelRef}
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-2xl
                   animate-in zoom-in-95 duration-200"
      >
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-500 transition-colors"
          aria-label="Schließen"
        >
          ✕
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="mb-6 pr-8">
            <span className="inline-block font-data text-[11px] text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full uppercase tracking-widest mb-3">
              investor_memorandum/request
            </span>
            <h2 className="text-xl font-black text-gray-900 tracking-tight mb-1">
              Investor-Memorandum anfordern
            </h2>
            <p className="text-[13px] text-gray-500 leading-relaxed">
              §7g-Steueranalyse · tiny Escapes Betreiberkonzept · Asset-Kennzahlen · Persönliche Beratung
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-lg font-black text-gray-900 mb-2">Memorandum angefordert</h3>
              <p className="text-gray-500 text-sm max-w-sm mx-auto leading-relaxed mb-6">
                Ihre Anfrage ist eingegangen. Wir senden Ihnen das Investor-Paket innerhalb von
                24&nbsp;Stunden persönlich zu.
              </p>
              <button
                onClick={closeModal}
                className="bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-3 rounded-full text-sm transition-all"
              >
                Schließen
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Name */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    Vorname *
                  </label>
                  <input
                    type="text" name="vorname" value={form.vorname} onChange={handleChange}
                    placeholder="Max" required
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    Nachname *
                  </label>
                  <input
                    type="text" name="nachname" value={form.nachname} onChange={handleChange}
                    placeholder="Mustermann" required
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-gray-300"
                  />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    E-Mail *
                  </label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="max@beispiel.de" required
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    Telefon <span className="text-gray-300 font-normal normal-case">(optional)</span>
                  </label>
                  <input
                    type="tel" name="telefon" value={form.telefon} onChange={handleChange}
                    placeholder="+49 ..."
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-gray-300"
                  />
                </div>
              </div>

              {/* Anfrage-Typ */}
              <div>
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                  Anfrage-Typ
                </label>
                <select
                  name="interesse" value={form.interesse} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white"
                >
                  <option>Investor-Memorandum + §7g-Steueranalyse anfordern</option>
                  <option>Projektunterlagen zu einem spezifischen Asset</option>
                  <option>Rendite-Beratung (passives Einkommen)</option>
                  <option>Kauf auf Raten / Finanzierungsberatung</option>
                  <option>Host-Bewerbung (Standort / Grundstück)</option>
                  <option>Allgemeine Erstinformation</option>
                </select>
              </div>

              {/* Asset + Volumen */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    Asset-Interesse
                  </label>
                  <select
                    name="budget" value={form.budget} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white"
                  >
                    <option>Asset #TE-2026-01 · Comfort (60.000 €)</option>
                    <option>Asset #TE-2026-02 · Escape (79.000 €)</option>
                    <option>Asset #TE-2026-03 · Elite (95.000 €)</option>
                    <option>Individuell – bitte beraten</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    Investitionsvolumen
                  </label>
                  <select
                    name="investmentVolumen" value={form.investmentVolumen} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white"
                  >
                    <option>60.000 – 80.000 € (1 Asset)</option>
                    <option>80.000 – 100.000 € (1 Premium)</option>
                    <option>120.000 – 160.000 € (2 Assets)</option>
                    <option>200.000 € + (Portfolio)</option>
                    <option>Noch unklar</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                  Nachricht <span className="text-gray-300 font-normal normal-case">(optional)</span>
                </label>
                <textarea
                  name="nachricht" value={form.nachricht} onChange={handleChange}
                  rows={3}
                  placeholder="z.B. Ich habe bereits einen IAB gebildet und möchte 2026 kaufen…"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none placeholder:text-gray-300"
                />
              </div>

              {error && <p className="text-red-500 text-sm text-center">{error}</p>}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-700 hover:bg-green-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-black py-3.5 rounded-xl text-sm transition-all shadow-md"
              >
                {loading ? "Wird übermittelt…" : "🔐 Investor-Memorandum anfordern →"}
              </button>

              {/* Trust footer */}
              <div className="border-t border-gray-100 pt-4">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: "🔒", text: "DSGVO-konform" },
                    { icon: "⏱", text: "Antwort in 24h" },
                    { icon: "📋", text: "Keine Anlageberatung" },
                  ].map((t) => (
                    <div key={t.text} className="flex items-center gap-1.5 text-[10px] text-gray-400">
                      <span>{t.icon}</span>
                      <span>{t.text}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-gray-400 mt-2.5 leading-relaxed">
                  TinyInvest hält zu keinem Zeitpunkt Investorengelder. Der Investor kauft das Wirtschaftsgut
                  direkt beim Hersteller. Dies ist kein Finanzprodukt i.S.d. KAGB.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
