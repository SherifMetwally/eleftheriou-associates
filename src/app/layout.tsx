import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MarqueeBand from "@/components/MarqueeBand";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

const source = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Eleftheriou Associates | Business Development Consultants",
    template: "%s | Eleftheriou Associates",
  },
  description:
    "Business development consultants operating in Egypt since 2001. Market entry, export enablement, and joint-venture matchmaking across Mediterranean Europe, North Africa, the Mideast, and the Arab Gulf.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="js-anim">
      <head>
        <noscript>
          <style>{`[data-reveal],[data-stagger]>*,.stat-text{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
      </head>
      <body className={`${source.variable} ${cormorant.variable} antialiased font-sans`}>
        <Header />
        <main>{children}</main>
        <MarqueeBand />
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
