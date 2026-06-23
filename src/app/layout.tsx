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
  title: "Lúmina — Experiencias & Memoria Visual",
  description:
    "Fotografía, espacios y dirección visual para celebraciones con atmósfera propia.",
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