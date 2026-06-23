import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Grain } from "@/components/effects/Grain";
import { AmbientLight } from "@/components/effects/AmbientLight";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lumina-sigma-orcin.vercel.app/"),

  title: {
    default: "Lúmina — Experiencias & Memoria Visual",
    template: "%s | Lúmina",
  },

  description:
    "Diseñamos escenas para celebraciones privadas, íntimas y producidas con intención. Fotografía, espacios y dirección visual para experiencias con atmósfera propia.",

  keywords: [
    "experiencias visuales",
    "fotografía editorial",
    "eventos privados",
    "wedding planner",
    "dirección visual",
    "celebraciones privadas",
    "producción de eventos",
    "fotografía de eventos",
    "Guadalajara",
    "Lúmina",
  ],

  authors: [
    {
      name: "Lúmina",
    },
  ],

  creator: "Lúmina",
  publisher: "Lúmina",

  openGraph: {
    title: "Lúmina — Experiencias & Memoria Visual",
    description:
      "No vendemos eventos. Diseñamos escenas que se recuerdan.",
    url: "https://lumina-sigma-orcin.vercel.app/",
    siteName: "Lúmina",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/images/og/lumina-og.jpg",
        width: 1200,
        height: 630,
        alt: "Lúmina — Experiencias & Memoria Visual",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lúmina — Experiencias & Memoria Visual",
    description:
      "Diseñamos escenas para celebraciones privadas, íntimas y producidas con intención.",
    images: ["/images/og/lumina-og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        <SmoothScroll>
          <AmbientLight />
          <Header />
          {children}
          <Grain />
        </SmoothScroll>
      </body>
    </html>
  );
}