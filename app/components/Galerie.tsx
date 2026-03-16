import Image from "next/image";
import { galleryImages } from "./data";

export default function Galerie() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">Einblicke in unsere Häuser</h2>
          <p className="text-gray-500 mt-3">Modern. Hochwertig. Nachhaltig.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((src, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden card-hover h-56 md:h-64">
              <Image src={src} alt={`TinyInvest House ${i + 1}`} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
