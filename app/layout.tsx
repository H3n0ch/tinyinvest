import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";
import { ModalProvider } from "./components/ModalContext";
import MemorandumModal from "./components/MemorandumModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TinyInvest – Die Nr. 1 Plattform für Mobile Asset Investments",
  description:
    "TinyInvest strukturiert §7g-optimierte Tiny House Investments. tiny Escapes bewirtschaftet das Asset vollautomatisch. Rendite 10–15 % p.a. EU-weit.",
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} antialiased`}>
        <ModalProvider>
          {children}
          <MemorandumModal />
          <CookieBanner />
        </ModalProvider>
      </body>
    </html>
  );
}
