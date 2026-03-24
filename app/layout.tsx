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
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "TinyInvest – Die Nr. 1 Plattform für Mobile Asset Investments",
    description:
      "§7g-optimierte Tiny House Investments. tiny Escapes bewirtschaftet vollautomatisch. Rendite 10–15 % p.a. EU-weit.",
    url: "https://tinyinvest.de",
    siteName: "TinyInvest",
    images: [
      {
        url: "https://tinyinvest.de/images/Gemini_Generated_Image_e2327ae2327ae232.png",
        width: 1200,
        height: 630,
        alt: "TinyInvest – Tiny House Investment Plattform",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TinyInvest – Mobile Asset Investment",
    description:
      "§7g-optimierte Tiny House Investments. Rendite 10–15 % p.a. EU-weit.",
    images: [
      "https://tinyinvest.de/images/Gemini_Generated_Image_e2327ae2327ae232.png",
    ],
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
