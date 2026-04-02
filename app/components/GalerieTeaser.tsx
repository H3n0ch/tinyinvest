import Link from "next/link";
import Image from "next/image";
import { galleryImages } from "./data";

export default function GalerieTeaser() {
  const preview = galleryImages.slice(0, 4);
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-1">Einblicke</p>
            <h2 className="text-lg font-black text-gray-900 tracking-tight">Unsere Häuser</h2>
          </div>
          <Link
            href="/galerie"
            className="text-[12px] font-semibold text-green-700 hover:text-green-800 flex items-center gap-1 border border-green-200 hover:border-green-400 px-3 py-1.5 rounded-full transition-all"
          >
            Alle Einblicke ansehen
            <svg className="w-3.5 h-3.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 6h8M6 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {preview.map((src, i) => (
            <Link key={i} href="/galerie" className="group relative overflow-hidden rounded-xl aspect-[4/3] block">
              <Image
                src={src}
                alt={`TinyInvest Tiny House ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 50vw, 25vw"
                loading="lazy"
              />
              {i === 3 && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <p className="text-white font-black text-sm">+{galleryImages.length - 4} Fotos</p>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
