"use client";

import { smoothScrollTo } from "@/lib/smoothScrollTo";

const navItems = [
  {
    label: "Escenas",
    id: "galeria",
  },
  {
    label: "Experiencias",
    id: "experiencias",
  },
  {
    label: "Fecha",
    id: "fecha",
  },
];

export function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-4 md:px-8 md:py-5">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between rounded-full border border-[rgba(216,191,166,0.16)] bg-[rgba(17,16,14,0.68)] px-4 py-3 shadow-[0_20px_80px_rgba(0,0,0,0.34)] backdrop-blur-xl md:px-5">
        <button
          type="button"
          onClick={() => smoothScrollTo("inicio")}
          className="group flex items-center gap-3"
          aria-label="Ir al inicio"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(216,191,166,0.28)] text-[0.72rem] text-[var(--smoked-champagne)] transition-colors duration-500 group-hover:border-[rgba(216,191,166,0.55)]">
            L
          </span>

          <span className="font-display text-lg tracking-[-0.03em] text-[var(--candle)]">
            Lúmina
          </span>
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => smoothScrollTo(item.id)}
              className="text-[0.68rem] uppercase tracking-[0.24em] text-[rgba(243,232,218,0.68)] transition-colors duration-500 hover:text-[var(--candle)]"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => smoothScrollTo("fecha")}
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-[rgba(216,191,166,0.3)] bg-[rgba(243,232,218,0.06)] px-5 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[var(--candle)] transition-all duration-500 hover:border-[rgba(216,191,166,0.62)] hover:bg-[var(--candle)] hover:text-[var(--ink)] md:min-h-12 md:px-6"
        >
          <span className="hidden sm:inline">Consultar fecha</span>
          <span className="sm:hidden">Consultar</span>
        </button>
      </div>
    </header>
  );
}