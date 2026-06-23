"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { EditorialButton } from "@/components/ui/EditorialButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  EASE_CINEMATIC,
  fadeUp,
  imageMask,
  revealContainer,
  revealLine,
} from "@/lib/animation";

const titleLines = ["Diseñamos escenas", "que se recuerdan."];

export function HeroScene() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const mainY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const secondaryY = useTransform(scrollYProgress, [0, 1], [0, -54]);
  const tertiaryY = useTransform(scrollYProgress, [0, 1], [0, 36]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 32]);

  return (
    <section
    id="inicio"
    ref={sectionRef}
      className="relative isolate min-h-svh overflow-hidden bg-[var(--ink)] px-5 pb-12 pt-32 text-[var(--candle)] md:px-8 md:pt-36"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[0] bg-[radial-gradient(circle_at_28%_18%,rgba(74,38,56,0.5),transparent_32rem),radial-gradient(circle_at_80%_44%,rgba(180,106,90,0.16),transparent_28rem)]"
      />

      <div
        aria-hidden="true"
        className="absolute left-0 top-0 z-[0] h-full w-full bg-[linear-gradient(90deg,rgba(17,16,14,0.95),rgba(17,16,14,0.74)_45%,rgba(17,16,14,0.35)_100%)]"
      />

      <motion.div
        aria-hidden="true"
        variants={imageMask}
        initial="hidden"
        animate="visible"
        style={{ y: mainY }}
        className="scene-card scene-card-main z-[2]"
      />

      <motion.div
        aria-hidden="true"
        variants={imageMask}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.25 }}
        style={{ y: secondaryY }}
        className="scene-card scene-card-secondary z-[3]"
      />

      <motion.div
        aria-hidden="true"
        variants={imageMask}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.42 }}
        style={{ y: tertiaryY }}
        className="scene-card scene-card-tertiary z-[3]"
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-9rem)] max-w-[1440px] flex-col justify-between">
        <motion.div style={{ y: textY }} className="max-w-[980px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-9"
          >
            <SectionLabel
              eyebrow="Lúmina"
              label="Experiencias & Memoria Visual"
            />
          </motion.div>

          <motion.h1
            variants={revealContainer}
            initial="hidden"
            animate="visible"
            className="font-display max-w-[980px] text-[clamp(4.1rem,11vw,10.8rem)] leading-[0.82] tracking-[-0.085em]"
          >
            {titleLines.map((line) => (
              <span key={line} className="block overflow-hidden pb-3">
                <motion.span variants={revealLine} className="block">
                  {line}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7, duration: 0.9, ease: EASE_CINEMATIC }}
            className="mt-7 max-w-[620px] text-base leading-7 text-[rgba(243,232,218,0.72)] md:text-lg md:leading-8"
          >
            Fotografía, espacios y dirección visual para celebraciones con
            atmósfera propia.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.9, duration: 0.9, ease: EASE_CINEMATIC }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <EditorialButton scrollToId="galeria">
  Explorar la experiencia
</EditorialButton>

<EditorialButton scrollToId="fecha" variant="ghost">
  Consultar fecha
</EditorialButton>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.05, duration: 0.9, ease: EASE_CINEMATIC }}
          className="mt-20 grid gap-5 border-t border-[rgba(216,191,166,0.16)] pt-6 md:grid-cols-3 lg:max-w-[860px]"
        >
          <a
            href="#imagen"
            className="group border-l border-[rgba(216,191,166,0.18)] pl-5 transition-colors duration-500 hover:border-[var(--clay)]"
          >
            <p className="mb-3 font-display text-2xl tracking-[-0.04em] text-[var(--candle)]">
              La imagen
            </p>
            <p className="text-sm leading-6 text-[rgba(243,232,218,0.62)]">
              La celebración vista como una memoria visual, no como un registro.
            </p>
          </a>

          <a
            href="#espacio"
            className="group border-l border-[rgba(216,191,166,0.18)] pl-5 transition-colors duration-500 hover:border-[var(--clay)]"
          >
            <p className="mb-3 font-display text-2xl tracking-[-0.04em] text-[var(--candle)]">
              El espacio
            </p>
            <p className="text-sm leading-6 text-[rgba(243,232,218,0.62)]">
              Luz, mesas, textura y recorrido compuestos con intención.
            </p>
          </a>

          <a
            href="#direccion"
            className="group border-l border-[rgba(216,191,166,0.18)] pl-5 transition-colors duration-500 hover:border-[var(--clay)]"
          >
            <p className="mb-3 font-display text-2xl tracking-[-0.04em] text-[var(--candle)]">
              La dirección
            </p>
            <p className="text-sm leading-6 text-[rgba(243,232,218,0.62)]">
              El ritmo invisible que hace que todo se sienta natural.
            </p>
          </a>
        </motion.div>
      </div>

      <div
        aria-hidden="true"
        className="scene-soft-line absolute bottom-0 left-0 z-10 h-px w-full"
      />
    </section>
  );
}