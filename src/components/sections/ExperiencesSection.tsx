"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EASE_CINEMATIC, fadeUp } from "@/lib/animation";
import { smoothScrollTo } from "@/lib/smoothScrollTo";

const experiences = [
  {
    /*
      IMAGEN AQUÍ
      Archivo sugerido: public/images/experiences/cobertura-esencial.jpg
      Dirección visual: detalle íntimo, cámara, manos, flores oscuras o luz entrando sobre una mesa pequeña.
      Uso: debe sentirse cercano, privado y sensible.
    */
    key: "esencial",
    title: "Cobertura esencial",
    short: "Una mirada clara para celebraciones íntimas.",
    eyebrow: "Para lo íntimo",
    description:
      "Pensada para celebraciones donde no hace falta producir de más, sino mirar con precisión. Registramos la atmósfera, los gestos y los detalles que sostienen la memoria del día.",
    intention:
      "Ideal para cenas privadas, pedidas, aniversarios, sesiones editoriales pequeñas o celebraciones donde el ambiente ya está definido.",
    includes: [
      "Cobertura fotográfica curada",
      "Dirección visual ligera",
      "Registro de detalles, ambiente y gestos",
      "Selección editorial de imágenes",
      "Entrega digital lista para compartir",
    ],
    cta: "Consultar cobertura",
    visual: "essential",
  },
  {
    /*
      IMAGEN AQUÍ
      Archivo sugerido: public/images/experiences/escena-completa.jpg
      Dirección visual: mesa amplia, composición de espacio, luz cálida, flores oscuras, copas y textura.
      Uso: debe ser la imagen más completa, con sensación de celebración diseñada.
    */
    key: "completa",
    title: "Escena completa",
    short: "Imagen, espacio y atmósfera trabajando juntos.",
    eyebrow: "Para una celebración con intención",
    description:
      "Integramos lo visual, lo espacial y lo emocional para que la celebración se sienta como una misma escena. No solo registramos lo que ocurre: cuidamos cómo se ve, cómo fluye y cómo será recordado.",
    intention:
      "Ideal para bodas íntimas, cenas de marca, eventos privados, lanzamientos, aniversarios o celebraciones donde la estética importa.",
    includes: [
      "Concepto de atmósfera",
      "Dirección de mesa, luz y detalles",
      "Cobertura visual completa",
      "Guía estética previa al evento",
      "Selección final con narrativa visual",
    ],
    cta: "Diseñar mi escena",
    visual: "complete",
  },
  {
    /*
      IMAGEN AQUÍ
      Archivo sugerido: public/images/experiences/produccion-medida.jpg
      Dirección visual: montaje editorial, espacio amplio, equipo preparando escena, telas, luces, arquitectura.
      Uso: debe sentirse como producción premium, no como evento social genérico.
    */
    key: "medida",
    title: "Producción a medida",
    short: "Una experiencia diseñada desde cero.",
    eyebrow: "Para marcas y celebraciones privadas",
    description:
      "Creamos una dirección visual completa para eventos que necesitan una atmósfera propia. Concepto, espacio, ritmo, detalles y memoria final se trabajan como una producción sensible y precisa.",
    intention:
      "Ideal para experiencias de marca, editoriales, celebraciones privadas premium, eventos de autor o producciones que necesitan identidad propia.",
    includes: [
      "Concepto visual completo",
      "Dirección de escena",
      "Moodboard y guía estética",
      "Coordinación visual de montaje",
      "Memoria fotográfica final",
    ],
    cta: "Crear producción a medida",
    visual: "custom",
  },
];

type Experience = (typeof experiences)[number];

function ExperienceVisual({
  variant,
  compact = false,
}: {
  variant: string;
  compact?: boolean;
}) {
  const baseBackground =
    variant === "essential"
      ? "bg-[linear-gradient(145deg,#26352D,#11100E_68%,#2A1724)]"
      : variant === "complete"
        ? "bg-[linear-gradient(145deg,#2A1724,#4A2638_42%,#11100E_76%)]"
        : "bg-[linear-gradient(145deg,#11100E,#2A1724_42%,#26352D)]";

  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-[rgba(216,191,166,0.17)] ${baseBackground} shadow-[0_34px_110px_rgba(0,0,0,0.38)] ${
        compact ? "min-h-[330px]" : "min-h-[500px] md:min-h-[610px]"
      }`}
    >
      {/*
        IMAGEN AQUÍ

        En este contenedor irá después:

        <Image
          src="/images/experiences/nombre-de-imagen.jpg"
          alt=""
          fill
          className="object-cover"
        />

        Mantener:
        - overlay oscuro
        - border radius
        - sombra editorial
        - detalles visuales encima
      */}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_38%_18%,rgba(243,232,218,0.28),transparent_13rem),radial-gradient(circle_at_70%_72%,rgba(180,106,90,0.24),transparent_16rem)]"
      />

      {variant === "essential" && (
        <>
          <div className="absolute left-[12%] top-[18%] h-32 w-32 rounded-full border border-[rgba(216,191,166,0.18)] md:h-44 md:w-44" />
          <div className="absolute left-[20%] top-[32%] h-24 w-[48%] rotate-[-8deg] rounded-full border border-[rgba(180,106,90,0.2)]" />
          <div className="absolute bottom-[24%] right-[14%] h-px w-[50%] bg-[linear-gradient(90deg,transparent,rgba(216,191,166,0.38))]" />
        </>
      )}

      {variant === "complete" && (
        <>
          <div className="absolute left-[8%] top-[24%] h-px w-[76%] bg-[rgba(216,191,166,0.3)]" />
          <div className="absolute bottom-[31%] left-[10%] h-px w-[72%] bg-[rgba(216,191,166,0.2)]" />
          <div className="absolute right-[16%] top-[16%] h-60 w-36 rounded-full border border-[rgba(216,191,166,0.18)]" />
          <div className="absolute left-[18%] bottom-[23%] h-32 w-32 rounded-full border border-[rgba(216,191,166,0.14)]" />
        </>
      )}

      {variant === "custom" && (
        <>
          <div className="absolute right-[10%] top-[13%] h-[58%] w-[34%] rounded-[999px_999px_1.5rem_1.5rem] border border-[rgba(216,191,166,0.16)]" />
          <div className="absolute left-[15%] top-[20%] h-[44%] w-px bg-[linear-gradient(to_bottom,rgba(216,191,166,0.42),transparent)]" />
          <div className="absolute left-[22%] top-[30%] h-px w-[52%] bg-[linear-gradient(90deg,rgba(180,106,90,0.42),transparent)]" />
          <div className="absolute bottom-[15%] right-[18%] h-44 w-44 rounded-full border border-[rgba(216,191,166,0.14)]" />
        </>
      )}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(17,16,14,0.03),rgba(17,16,14,0.72))]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[58%] bg-[linear-gradient(to_top,rgba(17,16,14,0.9),transparent)]"
      />

      <div className="absolute bottom-5 left-5 right-5 md:bottom-8 md:left-8 md:right-8">
        <p
          className={`max-w-[340px] font-display leading-[0.95] tracking-[-0.055em] text-[rgba(243,232,218,0.88)] ${
            compact ? "text-[1.65rem]" : "text-[2rem] md:text-[2.8rem]"
          }`}
        >
          Una experiencia no se elige por tamaño.
          <span className="block text-[rgba(243,232,218,0.45)]">
            Se elige por intención.
          </span>
        </p>
      </div>
    </div>
  );
}

function ExperienceDetail({
  experience,
  compact = false,
}: {
  experience: Experience;
  compact?: boolean;
}) {
  return (
    <div
      className={`rounded-[2rem] border border-[rgba(216,191,166,0.14)] bg-[rgba(17,16,14,0.52)] backdrop-blur-xl ${
        compact ? "p-5" : "p-6 md:p-8"
      }`}
    >
      <div
        className={
          compact ? "grid gap-6" : "grid gap-8 lg:grid-cols-[1.05fr_0.95fr]"
        }
      >
        <div>
          <p className="text-sm uppercase leading-6 tracking-[0.24em] text-[var(--clay)]">
            {experience.eyebrow}
          </p>

          <h3
            className={`mt-5 font-display leading-[0.9] tracking-[-0.065em] text-[var(--candle)] ${
              compact ? "text-[2.8rem]" : "text-[3rem] md:text-6xl"
            }`}
          >
            {experience.title}
          </h3>

          <p className="mt-6 text-[1.1rem] leading-8 text-[rgba(243,232,218,0.76)] md:text-xl md:leading-9">
            {experience.description}
          </p>

          <p className="mt-6 border-l border-[rgba(216,191,166,0.24)] pl-5 text-[1rem] leading-7 text-[rgba(216,191,166,0.74)] md:text-lg md:leading-8">
            {experience.intention}
          </p>
        </div>

        <div className="flex flex-col justify-between gap-8 rounded-[1.5rem] border border-[rgba(216,191,166,0.12)] bg-[rgba(243,232,218,0.035)] p-5 md:p-6">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.22em] text-[var(--clay)]">
              Incluye
            </p>

            <ul className="space-y-4">
              {experience.includes.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[1rem] leading-7 text-[rgba(243,232,218,0.72)]"
                >
                  <span className="mt-[0.72rem] h-px w-6 shrink-0 bg-[rgba(216,191,166,0.38)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <motion.button
  type="button"
  onClick={() => smoothScrollTo("fecha")}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97, y: 0 }}
            transition={{ duration: 0.45, ease: EASE_CINEMATIC }}
            className="group relative inline-flex min-h-[54px] items-center justify-center overflow-hidden rounded-full border border-[#f3e8da] bg-[#f3e8da] px-6 text-center text-[0.74rem] font-bold uppercase tracking-[0.18em] shadow-[0_18px_60px_rgba(216,191,166,0.16)] transition-all duration-500 hover:bg-[#d8bfa6]"
            style={{ color: "#11100E" }}
          >
            <span className="relative z-10" style={{ color: "#11100E" }}>
              {experience.cta}
            </span>

            <span
              aria-hidden="true"
              className="absolute bottom-2 left-6 right-6 h-px origin-left scale-x-0 bg-[#11100E] opacity-45 transition-transform duration-500 ease-out group-hover:scale-x-100"
            />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export function ExperiencesSection() {
  const [desktopActiveIndex, setDesktopActiveIndex] = useState(1);
  const [mobileActiveIndex, setMobileActiveIndex] = useState<number | null>(
    null
  );

  const activeExperience = experiences[desktopActiveIndex];

  return (
    <section
      id="experiencias"
      className="relative overflow-hidden bg-[var(--ink)] px-5 py-24 text-[var(--candle)] md:px-8 md:py-36"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(38,53,45,0.38),transparent_32rem),radial-gradient(circle_at_82%_70%,rgba(74,38,56,0.38),transparent_36rem)]"
      />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0px" }}
            className="lg:col-span-7"
          >
            <div className="mb-8">
              <SectionLabel
                eyebrow="Experiencias"
                label="Tres formas de entrar en escena"
              />
            </div>

            <h2 className="font-display max-w-[920px] text-[clamp(3.5rem,8vw,8.6rem)] leading-[0.84] tracking-[-0.08em]">
              No todos los eventos necesitan lo mismo.
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ delay: 0.14, duration: 0.95, ease: EASE_CINEMATIC }}
            className="text-[1.35rem] leading-9 text-[rgba(243,232,218,0.74)] md:text-2xl md:leading-10 lg:col-span-4 lg:col-start-9"
          >
            Por eso no trabajamos con paquetes rígidos. Elegimos el formato según
            la intención, el ritmo y la memoria que quieres construir.
          </motion.p>
        </div>

        {/* MÓVIL / TABLET: acordeón. El contenido aparece justo debajo de la opción tocada. */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-12% 0px" }}
          className="mt-14 grid gap-4 lg:hidden"
        >
          {experiences.map((experience, index) => {
            const isActive = index === mobileActiveIndex;

            return (
              <div
                key={experience.key}
                className={`overflow-hidden rounded-[2rem] border transition-colors duration-500 ${
                  isActive
                    ? "border-[rgba(216,191,166,0.26)] bg-[rgba(243,232,218,0.07)]"
                    : "border-[rgba(216,191,166,0.13)] bg-[rgba(243,232,218,0.025)]"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setMobileActiveIndex((currentIndex) =>
                      currentIndex === index ? null : index
                    )
                  }
                  aria-expanded={isActive}
                  className="block w-full px-5 py-6 text-left"
                >
                  <span className="mb-4 block text-sm uppercase leading-6 tracking-[0.22em] text-[var(--clay)]">
                    {experience.eyebrow}
                  </span>

                  <span
                    className={`block font-display text-[2.75rem] leading-[0.9] tracking-[-0.065em] ${
                      isActive
                        ? "text-[var(--candle)]"
                        : "text-[rgba(243,232,218,0.62)]"
                    }`}
                  >
                    {experience.title}
                  </span>

                  <span className="mt-4 block text-[1.05rem] leading-7 text-[rgba(243,232,218,0.68)]">
                    {experience.short}
                  </span>

                  <span className="mt-5 inline-flex rounded-full border border-[rgba(216,191,166,0.22)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[rgba(243,232,218,0.76)]">
                    {isActive ? "Cerrar experiencia" : "Ver experiencia"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.55, ease: EASE_CINEMATIC }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-5 px-4 pb-5">
                        <ExperienceVisual
                          variant={experience.visual}
                          compact
                        />

                        <ExperienceDetail experience={experience} compact />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

        {/* ESCRITORIO: selector lateral + contenido grande. */}
        <div className="mt-16 hidden gap-5 lg:grid lg:grid-cols-12 lg:gap-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0px" }}
            className="lg:col-span-4"
          >
            <div className="overflow-hidden rounded-[2rem] border border-[rgba(216,191,166,0.16)] bg-[rgba(243,232,218,0.035)]">
              {experiences.map((experience, index) => {
                const isActive = index === desktopActiveIndex;

                return (
                  <button
                    key={experience.key}
                    type="button"
                    onClick={() => setDesktopActiveIndex(index)}
                    aria-pressed={isActive}
                    className={`group relative block w-full border-b px-6 py-6 text-left transition-all duration-500 last:border-b-0 md:px-7 md:py-7 ${
                      isActive
                        ? "border-[rgba(216,191,166,0.22)] bg-[rgba(243,232,218,0.095)] shadow-[inset_0_0_60px_rgba(216,191,166,0.035)] lg:translate-x-4 lg:rounded-l-[1.6rem]"
                        : "border-[rgba(216,191,166,0.1)] bg-[rgba(17,16,14,0.28)] hover:bg-[rgba(243,232,218,0.055)]"
                    }`}
                  >
                    <span
                      className={`absolute left-0 top-0 h-full w-[4px] origin-top bg-[var(--clay)] transition-transform duration-500 ${
                        isActive ? "scale-y-100" : "scale-y-0"
                      }`}
                    />

                    <span
                      className={`mb-4 block text-sm uppercase leading-6 tracking-[0.22em] transition-colors duration-500 ${
                        isActive
                          ? "text-[var(--clay)]"
                          : "text-[rgba(180,106,90,0.62)]"
                      }`}
                    >
                      {experience.eyebrow}
                    </span>

                    <span
                      className={`block font-display text-[2.5rem] leading-[0.9] tracking-[-0.065em] transition-colors duration-500 md:text-[3.25rem] ${
                        isActive
                          ? "text-[var(--candle)]"
                          : "text-[rgba(243,232,218,0.58)] group-hover:text-[rgba(243,232,218,0.82)]"
                      }`}
                    >
                      {experience.title}
                    </span>

                    <span
                      className={`mt-4 block max-w-[390px] text-[1rem] leading-7 transition-colors duration-500 md:text-[1.08rem] ${
                        isActive
                          ? "text-[rgba(243,232,218,0.76)]"
                          : "text-[rgba(243,232,218,0.52)] group-hover:text-[rgba(243,232,218,0.68)]"
                      }`}
                    >
                      {experience.short}
                    </span>

                    {isActive && (
                      <span className="mt-5 inline-flex rounded-full border border-[rgba(216,191,166,0.22)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[rgba(243,232,218,0.72)]">
                        Ver detalle
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ delay: 0.12, duration: 0.95, ease: EASE_CINEMATIC }}
            className="lg:col-span-8"
          >
            <div className="grid gap-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeExperience.key}
                  initial={{ opacity: 0, y: 16 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.65, ease: EASE_CINEMATIC }}
                >
                  <ExperienceVisual variant={activeExperience.visual} />
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeExperience.key}-copy`}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.55, ease: EASE_CINEMATIC }}
                >
                  <ExperienceDetail experience={activeExperience} />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}