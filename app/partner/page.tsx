import Navbar from "../components/Navbar";
import Vertriebspartner from "../components/Vertriebspartner";
import Footer from "../components/Footer";

export const metadata = {
  title: "TinyInvest Partner werden – Empfehlungsprogramm mit Provision",
  description:
    "Empfehle §7g-optimierte Tiny House Investments und verdiene 1.500–3.000 € Provision pro Abschluss. Kein Vorwissen, keine Lizenz, keine Kaltakquise. Für Steuerberater, Makler und Netzwerker.",
  keywords:
    "TinyInvest Partner, Empfehlungsprogramm Sachwerte, Provision Tiny House, Netzwerk Investment, §7g Partner",
  alternates: {
    canonical: "https://tinyhouse.investments/partner",
  },
  openGraph: {
    title: "TinyInvest Partner werden – Provision für eine Empfehlung",
    description:
      "Öffne die Tür. Wir übernehmen Beratung & Abschluss. Du verdienst 1.500–3.000 € pro Haus.",
    url: "https://tinyhouse.investments/partner",
  },
};

export default function PartnerPage() {
  return (
    <>
      <Navbar variant="sub" />
      <Vertriebspartner />
      <Footer />
    </>
  );
}
