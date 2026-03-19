"use client";
import { useState, useEffect } from "react";
import { navLinks } from "./data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isIce = !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isIce
          ? "bg-white/10 backdrop-blur-xl border-b border-white/20"
          : "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2">
            <span className={`text-2xl font-black transition-colors duration-300 ${isIce ? "text-green-300" : "text-green-700"}`}>
              Tiny<span className={isIce ? "text-white" : "text-gray-900"}>Invest</span>
            </span>
            <span className="text-xl">🏡</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isIce ? "text-white/80 hover:text-white" : "text-gray-600 hover:text-green-700"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                isIce
                  ? "bg-white/20 hover:bg-white/30 text-white border border-white/40 backdrop-blur-sm"
                  : "bg-green-700 text-white hover:bg-green-800 shadow-sm"
              }`}
            >
              Jetzt anfragen
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isIce ? "text-white hover:bg-white/20" : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 border-t" : "max-h-0"
        } ${isIce ? "border-white/20" : "border-gray-100"}`}
      >
        <nav className={`px-4 py-4 flex flex-col gap-3 ${isIce ? "bg-black/40 backdrop-blur-xl" : "bg-white"}`}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`text-base font-medium py-2 transition-colors ${
                isIce ? "text-white/80 hover:text-white" : "text-gray-700 hover:text-green-700"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setMenuOpen(false)}
            className="bg-green-700 text-white px-5 py-3 rounded-full text-sm font-semibold text-center hover:bg-green-800 transition-colors mt-2"
          >
            Jetzt anfragen
          </a>
        </nav>
      </div>
    </header>
  );
}
