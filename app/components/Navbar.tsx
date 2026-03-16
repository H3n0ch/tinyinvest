"use client";
import { useState } from "react";
import Image from "next/image";
import { navLinks } from "./data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center">
            <Image
              src="/images/logo (2).png"
              alt="TinyInvest Logo"
              width={160}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#kontakt" className="bg-green-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-green-800 transition-colors shadow-sm">
              Jetzt anfragen
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 border-t border-gray-100" : "max-h-0"}`}>
        <nav className="px-4 py-4 flex flex-col gap-3 bg-white">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-base font-medium text-gray-700 py-2 hover:text-green-700 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#kontakt" onClick={() => setMenuOpen(false)} className="bg-green-700 text-white px-5 py-3 rounded-full text-sm font-semibold text-center hover:bg-green-800 transition-colors mt-2">
            Jetzt anfragen
          </a>
        </nav>
      </div>
    </header>
  );
}
