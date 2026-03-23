// Presse.tsx — "In der Presse" / Media coverage section
import ModalButton from "./ModalButton";

// Inline Medium SVG logo
function MediumLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1043.63 592.71"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Medium"
    >
      <g>
        <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36" />
        <path d="M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.17-279 147.17 124.9 147.17 279" />
        <path d="M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94" />
      </g>
    </svg>
  );
}

const featuredArticle = {
  publication: "Medium",
  date: "2026",
  category: "Investment & Steuern",
  title: "Warum smarte Investoren 2026 keine Eigentumswohnungen mehr kaufen",
  excerpt:
    "Der Markt für klassische Immobilien stagniert – während ein neues Asset-Modell Renditen von 12–18 % p.a. bei gleichzeitiger §7g-Steueroptimierung bietet. TinyInvest zeigt, wie mobile Wirtschaftsgüter das Investitionsportfolio 2026 revolutionieren.",
  url: "https://medium.com/@robert_10241/warum-smarte-investoren-2026-keine-eigentumswohnungen-mehr-kaufen-cb36427305f3",
};

const comingSoon = [
  { name: "Handelsblatt", placeholder: true },
  { name: "Focus Money", placeholder: true },
  { name: "Weitere Medien", placeholder: true },
];

export default function Presse() {
  return (
    <section id="presse" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-widest">
            In der Presse
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2 mb-3 tracking-tight">
            TinyInvest in den Medien
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Was Journalisten und Analysten über Tiny Invest schreiben.
          </p>
        </div>

        {/* Press grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-stretch">

          {/* ── Featured article card ── */}
          <a
            href={featuredArticle.url}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:col-span-2 group bg-white rounded-2xl border border-gray-200 p-7 flex flex-col hover:border-green-300 hover:shadow-md transition-all duration-200"
          >
            {/* Publication header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <MediumLogo className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm leading-none">Medium</p>
                  <p className="text-gray-400 text-[11px] mt-0.5">{featuredArticle.date}</p>
                </div>
              </div>
              <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-green-100 text-green-700">
                {featuredArticle.category}
              </span>
            </div>

            {/* Article content */}
            <h3 className="font-black text-gray-900 text-base leading-snug mb-3 group-hover:text-green-700 transition-colors">
              {featuredArticle.title}
            </h3>
            <p className="text-gray-500 text-[13px] leading-relaxed flex-grow mb-5">
              {featuredArticle.excerpt}
            </p>

            {/* CTA */}
            <div className="flex items-center gap-2 text-green-700 font-semibold text-sm group-hover:gap-3 transition-all">
              <span>Artikel lesen</span>
              <span>→</span>
            </div>
          </a>

          {/* ── "Coming soon" placeholder cards ── */}
          {comingSoon.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl border border-dashed border-gray-200 p-7 flex flex-col items-center justify-center text-center min-h-[180px] opacity-50"
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                <span className="text-gray-400 text-lg">📰</span>
              </div>
              <p className="font-semibold text-gray-400 text-sm">{item.name}</p>
              <p className="text-gray-300 text-[11px] mt-1">Bald verfügbar</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-400 text-[12px] mb-3">
            Presseanfragen & Medienkooperationen
          </p>
          <ModalButton className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700 text-sm font-semibold transition-all">
            📩 Pressekontakt aufnehmen
          </ModalButton>
        </div>

      </div>
    </section>
  );
}
