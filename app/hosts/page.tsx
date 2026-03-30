import Navbar from "../components/Navbar";
import Hosts from "../components/Hosts";
import Footer from "../components/Footer";

export const metadata = {
  title: "Für Hosts – Dein Grundstück, unser Tiny House | TinyInvest",
  description:
    "Du hast ein Grundstück? Werde TinyInvest Host und verdiene bis zu 45 % der Mieteinnahmen – ohne eigenes Kapital. Kostenlose Standortprüfung.",
  keywords:
    "tiny house host werden, grundstück vermieten tiny house, tiny house betreiben, airbnb tiny house host, tiny escapes host",
  alternates: {
    canonical: "https://tinyhouse.investments/hosts",
  },
  openGraph: {
    title: "Für Hosts – Dein Grundstück, unser Tiny House | TinyInvest",
    description:
      "Werde Host und verdiene bis zu 45 % der Einnahmen – ohne Eigenkapital. Kostenlose Standortprüfung innerhalb von 24h.",
    url: "https://tinyhouse.investments/hosts",
  },
};

export default function HostsPage() {
  return (
    <main className="font-sans antialiased text-gray-900 bg-white">
      <Navbar variant="sub" />
      <div className="pt-16 md:pt-20">
        <Hosts />
        <Footer />
      </div>
    </main>
  );
}
