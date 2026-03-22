import Navbar from "../components/Navbar";
import Vertriebspartner from "../components/Vertriebspartner";
import Footer from "../components/Footer";

export const metadata = {
  title: "Vertriebspartner werden – TinyInvest",
  description: "Werde TinyInvest-Vertriebspartner und verdiene attraktive Provisionen, ohne Vorwissen oder Vorleistung.",
};

export default function PartnerPage() {
  return (
    <main className="font-sans antialiased text-gray-900 bg-white">
      <Navbar variant="sub" />
      <div className="pt-16 md:pt-20">
        <Vertriebspartner />
        <Footer />
      </div>
    </main>
  );
}
