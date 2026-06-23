"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { EASE_CINEMATIC } from "@/lib/animation";
import { smoothScrollTo } from "@/lib/smoothScrollTo";

type EditorialButtonProps = {
  children: ReactNode;
  href?: string;
  scrollToId?: string;
  className?: string;
  variant?: "primary" | "ghost";
};

export function EditorialButton({
  children,
  className,
  variant = "primary",
  href = "#",
  scrollToId,
}: EditorialButtonProps) {
  const isPrimary = variant === "primary";
  const internalTarget = scrollToId ?? (href.startsWith("#") ? href : null);

  const sharedClassName = cn(
    "group relative inline-flex min-h-[54px] items-center justify-center overflow-hidden rounded-full px-7 py-4 text-[0.74rem] font-bold uppercase tracking-[0.18em] transition-all duration-500 sm:min-w-[220px]",
    isPrimary
      ? "border border-[#f3e8da] bg-[#f3e8da] shadow-[0_18px_60px_rgba(216,191,166,0.18)] hover:bg-[#d8bfa6]"
      : "border border-[rgba(216,191,166,0.34)] bg-[rgba(243,232,218,0.035)] hover:border-[rgba(216,191,166,0.68)] hover:bg-[rgba(243,232,218,0.07)]",
    className
  );

  const content = (
    <>
      <span
        className="relative z-10 whitespace-nowrap"
        style={{
          color: isPrimary ? "#11100E" : "#F3E8DA",
        }}
      >
        {children}
      </span>

      <span
        aria-hidden="true"
        className="absolute bottom-2 left-6 right-6 h-px origin-left scale-x-0 bg-current opacity-45 transition-transform duration-500 ease-out group-hover:scale-x-100"
      />
    </>
  );

  if (internalTarget) {
    return (
      <motion.button
        type="button"
        onClick={() => smoothScrollTo(internalTarget)}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97, y: 0 }}
        transition={{ duration: 0.45, ease: EASE_CINEMATIC }}
        className={sharedClassName}
        style={{
          color: isPrimary ? "#11100E" : "#F3E8DA",
        }}
      >
        {content}
      </motion.button>
    );
  }

  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97, y: 0 }}
      transition={{ duration: 0.45, ease: EASE_CINEMATIC }}
      className={sharedClassName}
      style={{
        color: isPrimary ? "#11100E" : "#F3E8DA",
      }}
    >
      {content}
    </motion.a>
  );
}