import { models } from "./data";
import ModalButton from "./ModalButton";
import Link from "next/link";

export default function HausTypen() {
  return (
    <section id="hausmodelle" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">
            Produktlinie 2026
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2 mb-3 tracking-tight">
            Die 3 Hausmodelle
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Alle Modelle auf Vlemmix Trailer – straßenzugelassen, VIN-zertifiziert und §7g-fähig.
            Wähle das Modell, das zu deinem Budget und Standort passt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {models.map((model, i) => (
            <div
              key={model.title}
              className={`relative bg-white rounded-3xl overflow-hidden border shadow-sm flex flex-col hover:shadow-md transition-shadow duration-200 ${
                i === 1 ? "border-green-200 ring-2 ring-green-100" : "border-gray-100"
              }`}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <img
                  src={model.img}
                  alt={model.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />

                {/* Badge top-right */}
                <div className="absolute top-3 right-3">
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${model.badgeColor}`}>
                    {model.badge}
                  </span>
                </div>

                {/* Tag + Title overlay */}
                <div className="absolute bottom-3 left-4 right-4">
                  <p className="text-[10px] text-white/70 mb-0.5">{model.tag}</p>
                  <h3 className="text-base font-black text-white leading-tight">{model.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-500 text-[13px] leading-relaxed mb-4">{model.desc}</p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-5">
                  {model.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-[12px] text-gray-700">
                      <span className="flex-shrink-0 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Metrics */}
                <div className="mt-auto">
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-gray-50 rounded-xl p-3 text-center">
                      <p className="text-[10px] text-gray-400 mb-0.5">Preis</p>
                      <p className="font-data font-black text-gray-900 text-[14px]">{model.preis}</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-3 text-center">
                      <p className="text-[10px] text-gray-400 mb-0.5">Rendite p.a.</p>
                      <p className="font-data font-black text-green-700 text-[14px]">
                        {model.renditeMin}–{model.renditeMax} %
                      </p>
                    </div>
                  </div>

                  <ModalButton
                    className={`block w-full py-2.5 rounded-full font-semibold text-[13px] text-center transition-colors ${
                      i === 1
                        ? "bg-green-700 text-white hover:bg-green-800"
                        : "border border-gray-200 text-gray-700 hover:border-green-400 hover:text-green-700"
                    }`}
                  >
                    Unterlagen anfragen →
                  </ModalButton>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-[12px]">
            Alle Modelle inkl. Vlemmix Trailer & Ausstattung — §7g-optimiert.{" "}
            <Link href="/so-funktioniert-es" className="text-green-700 font-semibold hover:underline">
              So funktioniert der Kauf →
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
}
