"use client";
import { useState, useEffect } from "react";
import { navLinks } from "./data";
import { useModal } from "./ModalContext";
import Link from "next/link";

export default function Navbar({ variant = "hero" }: { variant?: "hero" | "sub" }) {
  const { openModal } = useModal();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(variant === "sub");

  useEffect(() => {
    if (variant === "sub") return; // always scrolled on sub-pages
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [variant]);

  const isIce = !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isIce
          ? "bg-white/10 backdrop-blur-xl border-b border-white/20"
          : "bg-white/97 backdrop-blur-md border-b border-gray-100 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 md:h-20">
          {/* Logo + operator badge */}
          <Link href="/" className="flex items-center gap-2.5">
            <span className={`text-xl font-black tracking-tight transition-colors duration-300 ${isIce ? "text-green-300" : "text-green-700"}`}>
              Tiny<span className={isIce ? "text-white" : "text-gray-900"}>Invest</span>
              <span className="ml-1 text-base">🏡</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-[13px] font-medium transition-colors duration-300 ${
                  isIce ? "text-white/75 hover:text-white" : "text-gray-500 hover:text-green-700"
                }`}
              >
                {l.label}
              </a>
            ))}

            {/* Hosts link */}
            <a
              href="#rendite"
              className={`text-[13px] font-medium transition-colors duration-300 ${
                isIce ? "text-amber-300/90 hover:text-amber-200" : "text-amber-600 hover:text-amber-700"
              }`}
            >
              Für Hosts
            </a>

            {/* tiny Escapes external */}
            <a
              href="https://www.tiny.rentals"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-[13px] font-medium flex items-center gap-1 transition-colors duration-300 ${
                isIce ? "text-white/55 hover:text-white/80" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              tiny Escapes
              <svg className="w-3 h-3 opacity-60" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 2h8v8M10 2 2 10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            {/* Investor Login ghost button */}
            <button
              type="button"
              onClick={openModal}
              title="Investor-Portal · Zugang auf Anfrage"
              className={`px-4 py-2 rounded-lg text-[12px] font-semibold border transition-all duration-300 ${
                isIce
                  ? "border-white/30 text-white/70 hover:border-white/60 hover:text-white"
                  : "border-gray-200 text-gray-500 hover:border-green-300 hover:text-green-700 bg-white"
              }`}
            >
              🔐 Investor Login
            </button>

            {/* Primary CTA */}
            <button
              type="button"
              onClick={openModal}
              className={`px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-300 ${
                isIce
                  ? "bg-white/20 hover:bg-white/30 text-white border border-white/40 backdrop-blur-sm"
                  : "bg-green-700 text-white hover:bg-green-800 shadow-sm"
              }`}
            >
              Projektunterlagen anfragen
            </button>
          </nav>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isIce ? "text-white hover:bg-white/20" : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen border-t" : "max-h-0"
        } ${isIce ? "border-white/20" : "border-gray-100"}`}
      >
        <nav className={`px-4 py-4 flex flex-col gap-2 ${isIce ? "bg-black/50 backdrop-blur-xl" : "bg-white"}`}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium py-2 transition-colors ${
                isIce ? "text-white/80 hover:text-white" : "text-gray-700 hover:text-green-700"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#rendite"
            onClick={() => setMenuOpen(false)}
            className={`text-sm font-medium py-2 transition-colors ${
              isIce ? "text-amber-300 hover:text-amber-200" : "text-amber-600 hover:text-amber-700"
            }`}
          >
            Für Hosts
          </a>
          <a
            href="https://www.tiny.rentals"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className={`text-sm font-medium py-2 transition-colors ${
              isIce ? "text-white/60 hover:text-white" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            tiny Escapes ↗
          </a>
          <div className="h-px bg-white/10 my-1" />
          <button
            type="button"
            onClick={() => { openModal(); setMenuOpen(false); }}
            className="text-sm font-medium py-2 text-gray-400 hover:text-green-700 transition-colors text-left"
          >
            🔐 Investor Login
          </button>
          <button
            type="button"
            onClick={() => { openModal(); setMenuOpen(false); }}
            className="bg-green-700 text-white px-5 py-3 rounded-full text-sm font-semibold text-center hover:bg-green-800 transition-colors mt-2 w-full"
          >
            Projektunterlagen anfragen →
          </button>
        </nav>
      </div>
    </header>
  );
}
