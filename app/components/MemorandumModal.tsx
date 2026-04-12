"use client";
import { useState, useEffect, useRef } from "react";
import { useModal } from "./ModalContext";

export default function MemorandumModal() {
  const { isOpen, closeModal } = useModal();

  // Step 1 = minimal (Name, Email, Telefon)
  // Step 2 = optional details
  const [step, setStep] = useState<1 | 2>(1);

  const [form, setForm] = useState({
    vorname: "",
    email: "",
    telefon: "",
    interesse: "Investitionsunterlagen",
    budget: "TinyInvest Escape (79.000 €)",
    investmentVolumen: "60.000 – 80.000 € (1 Asset)",
    kontaktZeit: "Jederzeit / flexibel",
    nachricht: "",
    // Host-Bewerbung fields
    hostRegion: "",
    hostFlaeche: "500–1.000 m²",
    hostEigentum: "Eigentümer",
    hostBebauung: "Keine Infos vorhanden",
    hostVersorgung: "Ja – Strom & Wasser",
    hostAnzahl: "2–3",
  });

  const isHost = form.interesse === "Host-Bewerbung (Standort / Grundstück)";
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
        setStep(1);
        setError("");
      }, 300);
    }
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // Step 1: Quick capture – submit immediately with minimal data
  const handleStep1 = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.vorname || !form.email) {
      setError("Bitte Vorname und E-Mail ausfüllen.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, nachname: "", schritt: "Schnell-Anfrage (Schritt 1)" }),
      });
      if (!res.ok) throw new Error();
      setStep(2);
    } catch {
      setError("Fehler beim Senden. Bitte direkt per E-Mail kontaktieren.");
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Optional details – submit full form
  const handleStep2 = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, nachname: "", schritt: "Details (Schritt 2)" }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Fehler beim Senden.");
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
        className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-2xl
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

          {/* ── SUCCESS STATE ──────────────────────────── */}
          {submitted ? (
            <div className="text-center py-10">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-lg font-black text-gray-900 mb-2">Alles klar!</h3>
              <p className="text-gray-500 text-sm max-w-sm mx-auto leading-relaxed mb-6">
                  Wir melden uns innerhalb von <strong>24 Stunden</strong> persönlich bei Ihnen –
                  mit dem Investor-Paket und allen relevanten Unterlagen.
              </p>
              <div className="flex items-center justify-center gap-6 mb-6 text-[11px] text-gray-400">
                <span className="flex items-center gap-1"><span>🔒</span> DSGVO-konform</span>
                <span className="flex items-center gap-1"><span>⏱</span> Antwort in 24h</span>
                <span className="flex items-center gap-1"><span>📋</span> Keine Anlageberatung</span>
              </div>
              <button
                onClick={closeModal}
                className="bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-3 rounded-full text-sm transition-all"
              >
                Schließen
              </button>
            </div>

          /* ── STEP 1: MINIMAL FORM ────────────────────── */
          ) : step === 1 ? (
            <>
              {/* Header */}
              <div className="mb-6 pr-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block text-[11px] text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full uppercase tracking-widest font-semibold">
                    Kostenlose Erstberatung
                  </span>
                  <span className="text-[10px] text-gray-400">Schritt 1 von 2</span>
                </div>
                <h2 className="text-xl font-black text-gray-900 tracking-tight mb-1">
                  Jetzt Unterlagen anfordern
                </h2>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                 Betreiberkonzept · Asset-Kennzahlen · Persönliche Beratung
                </p>
              </div>

              <form onSubmit={handleStep1} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    Ihr Vorname *
                  </label>
                  <input
                    type="text" name="vorname" value={form.vorname} onChange={handleChange}
                    placeholder="z.B. Michael" required autoFocus
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-gray-300"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    E-Mail-Adresse *
                  </label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="ihre@email.de" required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-gray-300"
                  />
                </div>

                {/* Phone (optional) */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    Telefon <span className="text-gray-300 font-normal normal-case">(optional – für Rückruf)</span>
                  </label>
                  <input
                    type="tel" name="telefon" value={form.telefon} onChange={handleChange}
                    placeholder="+49 ..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-gray-300"
                  />
                </div>

                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-black py-4 rounded-xl text-sm transition-all shadow-md shadow-green-900/20"
                >
                  {loading ? "Wird gesendet…" : "Unterlagen jetzt anfordern →"}
                </button>

                <p className="text-center text-[11px] text-gray-400 leading-relaxed">
                  🔒 Unverbindlich · Keine Anlageberatung · DSGVO-konform · Antwort in 24h
                </p>

                {/* Social proof */}
                <div className="flex items-center gap-3 bg-gray-50 rounded-2xl px-4 py-3">
                  <div className="flex -space-x-2">
                    {["MK","SR","TH"].map((i) => (
                      <div key={i} className="w-7 h-7 rounded-full bg-green-700 border-2 border-white flex items-center justify-center text-white text-[9px] font-black">{i}</div>
                    ))}
                  </div>
                  <p className="text-[11px] text-gray-500">
                    <strong className="text-gray-700">200+ Investoren</strong> haben bereits angefragt
                  </p>
                </div>
              </form>
            </>

          /* ── STEP 2: OPTIONAL DETAILS ──────────────── */
          ) : (
            <>
              {/* Header */}
              <div className="mb-5 pr-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block text-[11px] text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full uppercase tracking-widest font-semibold">
                    ✅ Anfrage eingegangen
                  </span>
                  <span className="text-[10px] text-gray-400">Schritt 2 von 2</span>
                </div>
                <h2 className="text-xl font-black text-gray-900 tracking-tight mb-1">
                  Fast fertig, {form.vorname}!
                </h2>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  Optional: Helfen Sie uns, Ihre Anfrage besser vorzubereiten.
                  Sie können diesen Schritt auch <button type="button" onClick={() => setSubmitted(true)} className="text-green-700 font-semibold hover:underline">überspringen</button>.
                </p>
              </div>

              <form onSubmit={handleStep2} className="space-y-4">
                {/* Anfrage-Typ */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    Worum geht es?
                  </label>
                  <select
                    name="interesse" value={form.interesse} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white"
                  >
                    <option>Investitionsunterlagen anfordern</option>
                    <option>Projektunterlagen zu einem spezifischen Asset</option>
                    <option>Rendite-Beratung (passives Einkommen)</option>
                    <option>Kauf auf Raten / Finanzierungsberatung</option>
                    <option>Host-Bewerbung (Standort / Grundstück)</option>
                    <option>Allgemeine Erstinformation</option>
                  </select>
                </div>

                {/* Host-Bewerbung: Grundstücks-Felder */}
                {isHost && (
                  <div className="rounded-2xl border border-green-200 bg-green-50/60 p-4 space-y-3">
                    <p className="text-[11px] font-bold text-green-700 uppercase tracking-widest flex items-center gap-1.5">
                      <span>🏡</span> Angaben zum Grundstück / Standort
                    </p>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Region / Standort *</label>
                      <input
                        type="text" name="hostRegion" value={form.hostRegion} onChange={handleChange}
                        placeholder="z.B. Bayern, Nähe München" required={isHost}
                        className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-gray-300 bg-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Grundstücksgröße</label>
                        <select name="hostFlaeche" value={form.hostFlaeche} onChange={handleChange}
                          className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                          <option>{"< 500 m²"}</option>
                          <option>500–1.000 m²</option>
                          <option>1.000–3.000 m²</option>
                          <option>{"> 3.000 m²"}</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Eigentum</label>
                        <select name="hostEigentum" value={form.hostEigentum} onChange={handleChange}
                          className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                          <option>Eigentümer</option>
                          <option>Pächter / Mieter</option>
                          <option>Noch in Planung</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Wie viele Tiny Houses?</label>
                      <select name="hostAnzahl" value={form.hostAnzahl} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                        <option>1</option>
                        <option>2–3</option>
                        <option>4–6</option>
                        <option>Mehr als 6</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Asset + Volumen (nur bei Nicht-Host) */}
                {!isHost && (
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Asset-Interesse</label>
                      <select name="budget" value={form.budget} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                        <option>Asset #TE-2026-01 · Comfort (60.000 €)</option>
                        <option>Asset #TE-2026-02 · Escape (79.000 €)</option>
                        <option>Asset #TE-2026-03 · Elite (95.000 €)</option>
                        <option>Individuell – bitte beraten</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Investitionsvolumen</label>
                      <select name="investmentVolumen" value={form.investmentVolumen} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                        <option>60.000 – 80.000 € (1 Asset)</option>
                        <option>80.000 – 100.000 € (1 Premium)</option>
                        <option>120.000 – 160.000 € (2 Assets)</option>
                        <option>200.000 € + (Portfolio)</option>
                        <option>Noch unklar</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Kontaktzeit */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Wann am besten erreichbar?</label>
                  <select name="kontaktZeit" value={form.kontaktZeit} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                    <option>Morgens (8–12 Uhr)</option>
                    <option>Mittags (12–15 Uhr)</option>
                    <option>Abends (17–20 Uhr)</option>
                    <option>Jederzeit / flexibel</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    Nachricht <span className="text-gray-300 font-normal normal-case">(optional)</span>
                  </label>
                  <textarea
                    name="nachricht" value={form.nachricht} onChange={handleChange}
                    rows={2}
                    placeholder="z.B. Ich habe bereits einen IAB gebildet…"
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none placeholder:text-gray-300"
                  />
                </div>

                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setSubmitted(true)}
                    className="flex-1 border border-gray-200 text-gray-500 hover:bg-gray-50 font-semibold py-3 rounded-xl text-sm transition-all"
                  >
                    Überspringen
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-[2] bg-green-700 hover:bg-green-800 disabled:opacity-60 text-white font-black py-3 rounded-xl text-sm transition-all shadow-md"
                  >
                    {loading ? "Wird gesendet…" : isHost ? "🏡 Host-Bewerbung senden →" : "✅ Abschließen →"}
                  </button>
                </div>

                <p className="text-[10px] text-gray-400 leading-relaxed">
                  TinyInvest hält zu keinem Zeitpunkt Investorengelder. Der Investor kauft das Wirtschaftsgut
                  direkt beim Hersteller. Dies ist kein Finanzprodukt i.S.d. KAGB.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
