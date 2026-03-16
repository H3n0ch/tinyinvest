import Image from "next/image";
import { models } from "./data";

export default function Modelle() {
  return (
    <section id="modelle" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-5">
            Unsere Tiny House Modelle
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Von kompakt und günstig bis vollautark und premium – jedes Modell ist ein modernes, hochwertiges bewegliches Wirtschaftsgut auf zertifiziertem Trailer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {models.map((model) => (
            <div key={model.title} className="bg-white rounded-3xl overflow-hidden card-hover shadow-md border border-gray-100 flex flex-col">
              <div className="relative h-60 overflow-hidden">
                <Image src={model.img} alt={model.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-gray-700 text-xs font-bold px-3 py-1.5 rounded-full">
                    {model.tag}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${model.badgeColor}`}>
                    {model.badge}
                  </span>
                </div>
              </div>

              <div className="p-7 flex flex-col flex-grow">
                <h3 className="font-black text-gray-900 text-xl mb-2">{model.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{model.desc}</p>

                <ul className="space-y-1.5 mb-6">
                  {model.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-green-600">✓</span> {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-green-50 rounded-xl p-3 text-center">
                      <p className="text-xs text-gray-400">Rendite p.a.</p>
                      <p className="text-lg font-black text-green-700">{model.renditeMin}–{model.renditeMax} %</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 text-center">
                      <p className="text-xs text-gray-400">Preis</p>
                      <p className="text-lg font-black text-gray-800">{model.preis}</p>
                    </div>
                  </div>
                  <a href="#kontakt" className="block w-full py-3 rounded-full font-semibold text-sm text-center bg-green-700 text-white hover:bg-green-800 transition-colors">
                    Beratung anfragen →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center">
          <p className="text-amber-800 font-medium">
            💡 <strong>Individuelle Konfiguration:</strong> Alle Preise variieren je nach Ausstattung (On-Grid / Off-Grid / Solar / Autarkie-Grad). Gerne erstellen wir dir ein persönliches Angebot.
          </p>
        </div>
      </div>
    </section>
  );
}
