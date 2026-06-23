"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { smoothScrollTo } from "@/lib/smoothScrollTo";

type SmoothScrollProps = {
  children: React.ReactNode;
};

export function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      event.preventDefault();

      if (href === "#") {
        smoothScrollTo("inicio");
        return;
      }

      smoothScrollTo(href);
    };

    document.addEventListener("click", handleAnchorClick);

    if (prefersReducedMotion) {
      return () => {
        document.removeEventListener("click", handleAnchorClick);
      };
    }

    const lenis = new Lenis({
      lerp: 0.08,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
      smoothWheel: true,
    });

    let rafId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    rafId = window.requestAnimationFrame(raf);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}