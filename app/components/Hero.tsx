import Image from "next/image";
import { stats } from "./data";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/escape.webp" alt="TinyInvest Tiny House in der Natur" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/75" />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto pt-20">
        <span className="inline-block bg-green-600/80 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-fadeIn">
          🏡 Moderne Tiny Houses – Hochwertig. Rentabel. Mobil.
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-6 animate-fadeInUp">
          Dein Tiny House.
          <br />
          <span className="text-green-400">Deine Freiheit.</span>
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-4 leading-relaxed animate-fadeInUp">
          TinyInvest bietet hochwertige, mobile Tiny Houses – als{" "}
          <strong className="text-white">Steuer-Investment</strong>,{" "}
          <strong className="text-white">Renditeobjekt</strong> oder{" "}
          <strong className="text-white">Traumhaus auf Raten</strong>.
          Du entscheidest. Wir kümmern uns um den Rest.
        </p>
        <p className="text-white/60 text-sm mb-10 animate-fadeInUp">
          Als bewegliches Wirtschaftsgut: IAB + Sonder-AfA nutzbar · EU-weit einsetzbar · 100 % Full-Service
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp flex-wrap">
          <a href="#steuer" className="bg-green-600 hover:bg-green-500 text-white font-bold px-7 py-4 rounded-full text-base transition-all shadow-lg hover:shadow-green-500/30">
            📋 Steuer-Hebel berechnen
          </a>
          <a href="#modelle" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-7 py-4 rounded-full text-base border border-white/30 transition-all">
            🏡 Modelle entdecken
          </a>
          <a href="#kontakt" className="bg-amber-500 hover:bg-amber-400 text-white font-bold px-7 py-4 rounded-full text-base transition-all shadow-lg">
            📞 Beratung anfragen
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {stats.map((s) => (
              <div key={s.label} className="py-5 px-4 text-center text-white">
                <div className="text-2xl md:text-3xl font-black text-green-400">{s.value}</div>
                <div className="text-xs md:text-sm text-white/70 mt-0.5 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
