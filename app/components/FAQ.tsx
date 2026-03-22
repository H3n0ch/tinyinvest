import { faqs } from "./data";
import AccordionItem from "./AccordionItem";
import ModalButton from "./ModalButton";

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">FAQ</span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2 mb-4 tracking-tight">Häufige Fragen</h2>
          <p className="text-gray-500 text-sm">Alles, was du wissen musst – bevor du anfragst.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <AccordionItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>

        <div className="mt-10 bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
          <p className="text-green-800 font-medium mb-3">Noch eine Frage? Wir beraten dich kostenlos und unverbindlich.</p>
          <ModalButton className="inline-block bg-green-700 text-white font-bold px-6 py-3 rounded-full hover:bg-green-800 transition-colors">
            Jetzt Frage stellen →
          </ModalButton>
        </div>
      </div>
    </section>
  );
}
