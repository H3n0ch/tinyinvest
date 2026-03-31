export default function Factsheet() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="text-5xl mb-4">📋</div>
        <h2 className="text-2xl sm:text-3xl font-black mb-4">
          Steuer-Factsheet für Ihren Steuerberater
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Wir haben alle technischen und steuerlichen Daten für Ihren Steuerberater vorbereitet – damit er sofort sieht, dass unsere Häuser §7g EStG-fähig sind. Kostenlos und sofort per E-Mail.
        </p>
        <a
          href="#kontakt"
          className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-full text-lg transition-colors"
        >
          Factsheet kostenlos anfordern →
        </a>
      </div>
    </section>
  );
}
