"use client";

import { useEffect } from "react";
import { smoothScrollTo } from "@/lib/smoothScrollTo";

type SmoothScrollProps = {
  children: React.ReactNode;
};

export function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
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

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return <>{children}</>;
}