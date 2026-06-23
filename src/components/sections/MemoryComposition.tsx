"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EASE_CINEMATIC, fadeUp } from "@/lib/animation";

const memoryBlocks = [
  {
    id: "imagen",
    title: "La imagen",
    eyebrow: "El gesto antes del ruido",
    text: "No documentamos solamente lo que ocurre. Construimos una mirada: encuadres, luz, manos, movimiento y detalles que convierten la celebración en una memoria visual.",
    note: "Mirada curada",
    className:
      "lg:col-span-7 lg:min-h-[560px] bg-[linear-gradient(145deg,#2A1724,#11100E_64%)]",
    titleClassName: "max-w-[640px]",
    detail: "orb",
  },
  {
    id: "espacio",
    title: "El espacio",
    eyebrow: "La atmósfera que sostiene todo",
    text: "El lugar no es un fondo. Es parte de la historia. Trabajamos mesas, recorridos, sombras, texturas y luz para que cada rincón tenga intención.",
    note: "Luz · mesa · recorrido",
    className:
      "lg:col-span-5 lg:min-h-[430px] bg-[linear-gradient(145deg,#26352D,#11100E_72%)]",
    titleClassName: "max-w-[460px]",
    detail: "frame",
  },
  {
    id: "direccion",
    title: "La dirección",
    eyebrow: "El ritmo invisible de la escena",
    text: "Una celebración memorable necesita dirección. Coordinamos lo visual, lo espacial y lo emocional para que todo suceda con naturalidad, sin sentirse producido.",
    note: "Ritmo emocional",
    className:
      "lg:col-span-8 lg:col-start-3 lg:min-h-[500px] bg-[linear-gradient(145deg,#4A2638,#11100E_66%)]",
    titleClassName: "max-w-[720px]",
    detail: "lines",
  },
];

function EditorialDetail({ type }: { type: string }) {
  if (type === "orb") {
    return (
      <>
        <div
          aria-hidden="true"
          className="absolute right-8 top-8 h-36 w-36 rounded-full border border-[rgba(216,191,166,0.18)] md:h-52 md:w-52"
        />
        <div
          aria-hidden="true"
          className="absolute right-20 top-20 h-24 w-24 rounded-full bg-[rgba(216,191,166,0.08)] blur-2xl md:h-40 md:w-40"
        />
      </>
    );
  }

  if (type === "frame") {
    return (
      <>
        <div
          aria-hidden="true"
          className="absolute right-6 top-6 h-[calc(100%-3rem)] w-[42%] rounded-[999px_999px_1.4rem_1.4rem] border border-[rgba(216,191,166,0.16)]"
        />
        <div
          aria-hidden="true"
          className="absolute right-14 top-16 h-28 w-px bg-[linear-gradient(to_bottom,rgba(216,191,166,0.42),transparent)]"
        />
      </>
    );
  }

  return (
    <>
      <div
        aria-hidden="true"
        className="absolute right-0 top-14 h-px w-[46%] bg-[linear-gradient(90deg,transparent,rgba(216,191,166,0.46))]"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-24 h-px w-[34%] bg-[linear-gradient(90deg,transparent,rgba(180,106,90,0.46))]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-10 h-40 w-40 rounded-full border border-[rgba(216,191,166,0.14)]"
      />
    </>
  );
}

export function MemoryComposition() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const orbY = useTransform(scrollYProgress, [0, 1], [80, -120]);
  const lineX = useTransform(scrollYProgress, [0.15, 0.65], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      id="escenas"
      className="relative overflow-hidden bg-[var(--ink)] px-5 py-28 text-[var(--candle)] md:px-8 md:py-40"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_12%_24%,rgba(180,106,90,0.12),transparent_28rem),radial-gradient(circle_at_84%_70%,rgba(74,38,56,0.36),transparent_34rem)]"
      />

      <motion.div
        aria-hidden="true"
        style={{ y: orbY }}
        className="absolute right-[-8rem] top-40 h-[34rem] w-[34rem] rounded-full border border-[rgba(216,191,166,0.12)] bg-[radial-gradient(circle_at_38%_32%,rgba(216,191,166,0.12),transparent_13rem)]"
      />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-12% 0px" }}
          className="mb-10"
        >
          <SectionLabel
            eyebrow="Composición"
            label="La escena se construye por capas"
          />
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-12% 0px" }}
              className="font-display text-[clamp(3.4rem,7vw,7.6rem)] leading-[0.86] tracking-[-0.075em]"
            >
              La memoria no se improvisa.
              <span className="block text-[rgba(243,232,218,0.48)]">
                Se compone.
              </span>
            </motion.h2>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ delay: 0.16, duration: 0.95, ease: EASE_CINEMATIC }}
            className="lg:col-span-5 lg:col-start-8"
          >
            <p className="max-w-[560px] text-xl leading-9 text-[rgba(243,232,218,0.74)] md:text-2xl md:leading-10">
              Una celebración no se vuelve memorable por tener más elementos,
              sino porque cada elemento pertenece a la misma escena.
            </p>
          </motion.div>
        </div>

        <div className="relative mt-20 overflow-hidden">
          <motion.div
            aria-hidden="true"
            style={{ x: lineX }}
            className="absolute left-[-100%] top-0 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(216,191,166,0.58),transparent)]"
          />

          <div className="grid gap-7 pt-10 lg:grid-cols-12">
            {memoryBlocks.map((block, blockIndex) => (
              <motion.article
                key={block.id}
                id={block.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-14% 0px" }}
                transition={{
                  delay: blockIndex * 0.12,
                  duration: 0.95,
                  ease: EASE_CINEMATIC,
                }}
                className={`group relative overflow-hidden rounded-[2.2rem] border border-[rgba(216,191,166,0.16)] p-7 shadow-[0_38px_120px_rgba(0,0,0,0.34)] md:p-11 ${block.className}`}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-90 transition-opacity duration-700 group-hover:opacity-100"
                >
                  <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[rgba(216,191,166,0.08)] blur-3xl" />
                  <div className="absolute bottom-[-7rem] left-[-6rem] h-80 w-80 rounded-full bg-[rgba(180,106,90,0.13)] blur-3xl" />
                </div>

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(135deg,rgba(243,232,218,0.06),transparent_34%,rgba(17,16,14,0.32))]"
                />

                <EditorialDetail type={block.detail} />

                <div className="relative z-10 flex min-h-[inherit] flex-col justify-between gap-20">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <p className="max-w-[360px] text-sm uppercase leading-6 tracking-[0.24em] text-[var(--clay)] md:text-[0.82rem]">
                      {block.eyebrow}
                    </p>

                    <p className="max-w-[260px] text-left text-sm leading-6 text-[rgba(216,191,166,0.54)] md:text-right">
                      {block.note}
                    </p>
                  </div>

                  <div>
                    <h3
                      className={`font-display text-[clamp(3.3rem,6.6vw,7rem)] leading-[0.84] tracking-[-0.078em] ${block.titleClassName}`}
                    >
                      {block.title}
                    </h3>

                    <p className="mt-8 max-w-[680px] text-xl leading-9 text-[rgba(243,232,218,0.74)] md:text-2xl md:leading-10">
                      {block.text}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}