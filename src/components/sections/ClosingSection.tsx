"use client";

import { motion } from "motion/react";
import { EditorialButton } from "@/components/ui/EditorialButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  EASE_CINEMATIC,
  fadeUp,
  revealContainer,
  revealLine,
} from "@/lib/animation";

const closingLines = ["Que tu evento", "no parezca uno más."];

export function ClosingSection() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="relative overflow-hidden bg-[var(--ink)] px-5 py-24 text-[var(--candle)] md:px-8 md:py-36">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(74,38,56,0.42),transparent_32rem),radial-gradient(circle_at_78%_70%,rgba(180,106,90,0.14),transparent_30rem),radial-gradient(circle_at_52%_100%,rgba(38,53,45,0.32),transparent_34rem)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,16,14,0.12),rgba(17,16,14,0.88))]"
      />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-end">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0px" }}
            className="lg:col-span-4"
          >
            <SectionLabel eyebrow="Cierre" label="Una escena con intención" />

            <p className="mt-9 max-w-[480px] text-[1.35rem] leading-9 text-[rgba(243,232,218,0.78)] md:text-2xl md:leading-10">
              Cada celebración tiene una forma de ser recordada. Diseñamos esa
              intención.
            </p>
          </motion.div>

          <div className="lg:col-span-8">
            <motion.h2
              variants={revealContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-12% 0px" }}
              className="font-display max-w-[1040px] text-[clamp(4rem,10vw,11rem)] leading-[0.82] tracking-[-0.085em]"
            >
              {closingLines.map((line) => (
                <span key={line} className="block overflow-hidden pb-4">
                  <motion.span variants={revealLine} className="block">
                    {line}
                  </motion.span>
                </span>
              ))}
            </motion.h2>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ delay: 0.24, duration: 0.95, ease: EASE_CINEMATIC }}
              className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row"
            >
              <EditorialButton scrollToId="fecha">
  Consultar mi fecha
</EditorialButton>

<EditorialButton
  scrollToId="experiencias"
  variant="ghost"
  className="border-[rgba(243,232,218,0.46)] bg-[rgba(243,232,218,0.075)] text-[var(--candle)] hover:border-[rgba(243,232,218,0.76)] hover:bg-[rgba(243,232,218,0.12)]"
>
  Ver experiencias
</EditorialButton>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ delay: 0.36, duration: 0.95, ease: EASE_CINEMATIC }}
              className="mt-6 max-w-[640px] text-base leading-7 text-[rgba(243,232,218,0.76)] md:text-lg md:leading-8"
            >
              Consulta sin compromiso. Revisamos tu fecha y te respondemos por
              WhatsApp.
            </motion.p>
          </div>
        </div>

        <div className="mt-24 overflow-hidden rounded-[2.4rem] border border-[rgba(216,191,166,0.16)] bg-[rgba(243,232,218,0.035)] p-5 shadow-[0_40px_140px_rgba(0,0,0,0.36)] md:mt-32 md:p-8">
          {/*
            IMAGEN / TEXTURA AQUÍ

            Archivo sugerido:
            public/images/closing/final-atmosphere.jpg

            Dirección visual:
            Plano oscuro y elegante de una mesa ya preparada,
            velas bajas, copas, tela, sombras y una sensación de escena
            a punto de comenzar.
          */}

          <div className="relative min-h-[300px] overflow-hidden rounded-[1.8rem] border border-[rgba(216,191,166,0.12)] bg-[linear-gradient(135deg,#2A1724,#11100E_58%,#26352D)] md:min-h-[380px]">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_34%_20%,rgba(243,232,218,0.26),transparent_12rem),radial-gradient(circle_at_70%_72%,rgba(180,106,90,0.22),transparent_16rem)]"
            />

            <div
              aria-hidden="true"
              className="absolute left-[10%] top-[24%] h-px w-[74%] bg-[linear-gradient(90deg,transparent,rgba(216,191,166,0.42),transparent)]"
            />

            <div
              aria-hidden="true"
              className="absolute left-[14%] top-[33%] h-px w-[48%] bg-[linear-gradient(90deg,rgba(180,106,90,0.42),transparent)]"
            />

            <div
              aria-hidden="true"
              className="absolute bottom-[28%] left-[18%] h-28 w-28 rounded-full border border-[rgba(216,191,166,0.18)] md:h-36 md:w-36"
            />

            <div
              aria-hidden="true"
              className="absolute right-[14%] top-[15%] h-52 w-32 rounded-[999px_999px_1.4rem_1.4rem] border border-[rgba(216,191,166,0.2)] md:h-64 md:w-40"
            />

            <div
              aria-hidden="true"
              className="absolute right-[22%] top-[25%] h-36 w-36 rounded-full bg-[rgba(216,191,166,0.1)] blur-2xl"
            />

            <div
              aria-hidden="true"
              className="absolute bottom-[18%] right-[10%] h-24 w-24 rounded-full border border-[rgba(180,106,90,0.22)]"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(135deg,rgba(243,232,218,0.055),transparent_36%,rgba(17,16,14,0.22))]"
            />

            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(to_top,rgba(17,16,14,0.88),transparent)]"
            />

            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
              <p className="max-w-[600px] font-display text-[2.35rem] leading-[0.95] tracking-[-0.055em] text-[rgba(243,232,218,0.92)] md:text-5xl">
                La escena empieza antes de que alguien la vea.
              </p>
            </div>
          </div>
        </div>

        <footer className="mt-12 border-t border-[rgba(216,191,166,0.16)] pt-8 md:mt-16 md:pt-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="font-display text-4xl tracking-[-0.055em] text-[var(--candle)]">
                Lúmina
              </p>

              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-[rgba(216,191,166,0.72)]">
                Experiencias & Memoria Visual
              </p>

              <p className="mt-6 max-w-[560px] text-lg leading-8 text-[rgba(243,232,218,0.72)]">
                Diseñamos escenas para celebraciones privadas, íntimas y
                producidas con intención.
              </p>

              <p className="mt-6 max-w-[520px] font-display text-3xl leading-[1] tracking-[-0.055em] text-[rgba(243,232,218,0.82)] md:text-4xl">
                Antes de celebrarse, una escena ya puede sentirse.
              </p>
            </div>

            <div className="lg:col-span-3 lg:col-start-7">
              <p className="mb-5 text-sm uppercase tracking-[0.22em] text-[var(--clay)]">
                Recorrer
              </p>

              <div className="grid gap-3 text-sm uppercase tracking-[0.18em] text-[rgba(243,232,218,0.82)]">
                <a
                  href="#galeria"
                  className="w-fit border-b border-[rgba(216,191,166,0.24)] pb-1 transition-colors duration-500 hover:border-[var(--candle)] hover:text-[var(--candle)]"
                >
                  Escenas
                </a>

                <a
                  href="#experiencias"
                  className="w-fit border-b border-[rgba(216,191,166,0.24)] pb-1 transition-colors duration-500 hover:border-[var(--candle)] hover:text-[var(--candle)]"
                >
                  Experiencias
                </a>

                <a
                  href="#fecha"
                  className="w-fit border-b border-[rgba(216,191,166,0.24)] pb-1 transition-colors duration-500 hover:border-[var(--candle)] hover:text-[var(--candle)]"
                >
                  Consultar fecha
                </a>
              </div>
            </div>

            <div className="lg:col-span-3">
              <p className="mb-5 text-sm uppercase tracking-[0.22em] text-[var(--clay)]">
                Iniciar conversación
              </p>

              <div className="grid gap-3">
                {/*
                  INSTAGRAM AQUÍ
                  Reemplazar el href por el Instagram real del cliente.
                */}
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-full border border-[rgba(216,191,166,0.2)] bg-[rgba(243,232,218,0.035)] px-5 py-3 text-sm uppercase tracking-[0.18em] text-[rgba(243,232,218,0.84)] transition-all duration-500 hover:border-[rgba(216,191,166,0.5)] hover:bg-[rgba(243,232,218,0.07)] hover:text-[var(--candle)]"
                >
                  Instagram
                  <span className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>

                {/*
                  WHATSAPP AQUÍ
                  Reemplazar 520000000000 por el número real.
                  México recomendado: 5213312345678
                */}
                <a
                  href="https://wa.me/520000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-full border border-[rgba(216,191,166,0.2)] bg-[rgba(243,232,218,0.035)] px-5 py-3 text-sm uppercase tracking-[0.18em] text-[rgba(243,232,218,0.84)] transition-all duration-500 hover:border-[rgba(216,191,166,0.5)] hover:bg-[rgba(243,232,218,0.07)] hover:text-[var(--candle)]"
                >
                  WhatsApp
                  <span className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>

                <p className="mt-4 max-w-[320px] text-base leading-7 text-[rgba(243,232,218,0.66)]">
                  Nacida desde Guadalajara, Jalisco, para celebraciones con
                  atmósfera propia.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-[rgba(216,191,166,0.12)] pt-6 text-sm leading-6 text-[rgba(216,191,166,0.62)] md:flex-row md:items-center md:justify-between">
            <p>© {currentYear} Lúmina. Todos los derechos reservados.</p>

            <p>Memoria visual para escenas que merecen intención.</p>
          </div>
        </footer>
      </div>
    </section>
  );
}