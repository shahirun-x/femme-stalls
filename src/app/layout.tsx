import type { Metadata } from "next";
import { Playfair_Display, Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Femme Stalls — Organise the Unorganised",
  description:
    "A women-led community platform from Kilakarai, Tamil Nadu, India, backed by Geohomz. Empowering women entrepreneurs through community stalls, exhibitions, training, and business networks.",
  keywords: [
    "Femme Stalls",
    "Kilakarai",
    "Women Entrepreneurs",
    "Geohomz Arcade",
    "Tamil Nadu",
    "Organise the Unorganised",
    "Community Stalls",
    "Women in Business",
  ],
  authors: [{ name: "Femme Stalls Team" }],
  openGraph: {
    title: "Femme Stalls — Organise the Unorganised",
    description:
      "A network of women entrepreneurs and aspiring entrepreneurs from Kilakarai and beyond.",
    url: "https://femmestalls.com",
    siteName: "Femme Stalls",
    images: [
      {
        url: "/images/logo.svg",
        width: 800,
        height: 600,
        alt: "Femme Stalls Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${dancingScript.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#FFFBFE] text-[#1A0A12] antialiased selection:bg-[#E91E8B] selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
