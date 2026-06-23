"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EASE_CINEMATIC, fadeUp, revealContainer, revealLine } from "@/lib/animation";

const manifestoLines = [
  "Un evento no empieza",
  "cuando llegan los invitados.",
  "Empieza cuando se imagina",
  "la escena.",
];

export function ManifestoSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -60]);
  const lineScale = useTransform(scrollYProgress, [0.2, 0.7], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="manifiesto"
      className="relative overflow-hidden bg-[var(--ink)] px-5 py-28 text-[var(--candle)] md:px-8 md:py-40"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(74,38,56,0.34),transparent_32rem),radial-gradient(circle_at_18%_84%,rgba(38,53,45,0.36),transparent_30rem)]"
      />

      <div className="relative z-10 mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[1.08fr_0.72fr] lg:items-end">
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0px" }}
            className="mb-10"
          >
            <SectionLabel eyebrow="01" label="Antes de la celebración" />
          </motion.div>

          <motion.h2
            variants={revealContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0px" }}
            className="font-display max-w-[980px] text-[clamp(3.2rem,7.8vw,8.8rem)] leading-[0.88] tracking-[-0.075em]"
          >
            {manifestoLines.map((line) => (
              <span key={line} className="block overflow-hidden pb-2">
                <motion.span variants={revealLine} className="block">
                  {line}
                </motion.span>
              </span>
            ))}
          </motion.h2>

          <motion.div
            style={{ scaleX: lineScale }}
            className="mt-12 h-px w-full origin-left bg-[linear-gradient(90deg,rgba(216,191,166,0.56),transparent)]"
          />

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ delay: 0.25, duration: 0.95, ease: EASE_CINEMATIC }}
            className="mt-10 max-w-[680px] text-lg leading-8 text-[rgba(243,232,218,0.72)] md:text-xl md:leading-9"
          >
            Cada mesa, cada luz y cada fotografía construyen una misma memoria.
            Por eso diseñamos desde la atmósfera: el espacio, el ritmo, los
            detalles y la forma en que todo será recordado.
          </motion.p>
        </div>

        <motion.div
          style={{ y: imageY }}
          className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-[rgba(216,191,166,0.18)] bg-[linear-gradient(145deg,#2A1724,#11100E_58%,#26352D)] shadow-[0_40px_140px_rgba(0,0,0,0.36)]"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_46%_22%,rgba(243,232,218,0.2),transparent_9rem),radial-gradient(circle_at_58%_58%,rgba(180,106,90,0.24),transparent_13rem)]"
          />

          <div
            aria-hidden="true"
            className="absolute inset-8 rounded-[1.5rem] border border-[rgba(216,191,166,0.13)]"
          />

          <div className="absolute left-8 top-8 z-10">
            <p className="text-[0.64rem] uppercase tracking-[0.32em] text-[rgba(216,191,166,0.62)]">
              Escena privada
            </p>
          </div>

          <div className="absolute bottom-8 left-8 right-8 z-10">
            <p className="font-display text-4xl leading-none tracking-[-0.055em] text-[var(--candle)] md:text-5xl">
              La memoria se diseña antes de existir.
            </p>

            <p className="mt-5 max-w-[360px] text-sm leading-6 text-[rgba(243,232,218,0.58)]">
              Una celebración no se recuerda por acumulación de detalles, sino
              por la forma en que todo respira junto.
            </p>
          </div>

          <div
            aria-hidden="true"
            className="absolute -right-20 bottom-20 h-52 w-52 rounded-full border border-[rgba(216,191,166,0.18)]"
          />

          <div
            aria-hidden="true"
            className="absolute right-10 top-20 h-32 w-32 rounded-full bg-[rgba(180,106,90,0.18)] blur-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}