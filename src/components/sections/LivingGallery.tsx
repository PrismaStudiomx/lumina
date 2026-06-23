"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EASE_CINEMATIC, fadeUp } from "@/lib/animation";

const galleryScenes = [
  {
    /*
      IMAGEN AQUÍ
      Archivo sugerido: public/images/gallery/mesa-antes.jpg
      Dirección visual: Mesa larga con copas, velas bajas, tela oscura y luz lateral.
      Uso: imagen principal, debe sentirse cinematográfica y amplia.
    */
    title: "La mesa antes de la llegada.",
    caption:
      "Una escena todavía en silencio. Copas, sombras, tela y luz esperando a los invitados.",
    imagePath: "/images/gallery/mesa-antes.jpg",
    className: "lg:col-span-7 lg:h-[585px]",
    visualClassName:
      "bg-[linear-gradient(145deg,#2A1724,#11100E_58%,#26352D)]",
    overlayClassName: "bottom-6 left-0 right-0 p-5 md:p-9",
    cardClassName: "max-w-[560px]",
    visualVariant: "table",
  },
  {
    /*
      IMAGEN AQUÍ
      Archivo sugerido: public/images/gallery/copas-reflejo.jpg
      Dirección visual: Detalle de copas, vidrio, reflejos cálidos y poca profundidad de campo.
      Uso: bloque vertical/secundario, debe sentirse íntimo y cercano.
    */
    title: "La luz antes del brindis.",
    caption:
      "Reflejos breves, vidrio, manos y una atmósfera que todavía no se revela por completo.",
    imagePath: "/images/gallery/copas-reflejo.jpg",
    className: "lg:col-span-5 lg:mt-20 lg:h-[415px]",
    visualClassName: "bg-[linear-gradient(145deg,#4A2638,#11100E_68%)]",
    overlayClassName: "bottom-6 left-0 right-0 p-5 md:p-8",
    cardClassName: "ml-auto max-w-[440px]",
    visualVariant: "glass",
  },
  {
    /*
      IMAGEN AQUÍ
      Archivo sugerido: public/images/gallery/manos-detalle.jpg
      Dirección visual: Manos ajustando tela, flores oscuras, cámara o detalles de mesa.
      Uso: bloque más íntimo, menos escenográfico, más humano.
    */
    title: "El gesto antes de la fotografía.",
    caption:
      "Nada posado. Solo pequeños movimientos que hacen que una memoria se sienta verdadera.",
    imagePath: "/images/gallery/manos-detalle.jpg",
    className: "lg:col-span-4 lg:h-[475px]",
    visualClassName: "bg-[linear-gradient(145deg,#26352D,#11100E_72%)]",
    overlayClassName: "bottom-6 left-0 right-0 p-5 md:p-7",
    cardClassName: "max-w-[390px]",
    visualVariant: "hands",
  },
  {
    /*
      IMAGEN AQUÍ
      Archivo sugerido: public/images/gallery/espacio-vacio.jpg
      Dirección visual: Espacio vacío antes del evento, mesas listas, sombras y arquitectura.
      Uso: imagen amplia final; debe abrir la sección y evitar que todo parezca card.
    */
    title: "El espacio antes del ruido.",
    caption:
      "La celebración empieza antes de escucharse. Empieza cuando el lugar ya tiene intención.",
    imagePath: "/images/gallery/espacio-vacio.jpg",
    className: "lg:col-span-8 lg:h-[535px]",
    visualClassName:
      "bg-[linear-gradient(145deg,#11100E,#2A1724_48%,#4A2638)]",
    overlayClassName: "bottom-6 left-0 right-0 p-5 md:p-9",
    cardClassName: "max-w-[620px]",
    visualVariant: "space",
  },
];

function EditorialVisual({
  className,
  variant,
}: {
  className?: string;
  variant: string;
}) {
  return (
    <div
className={`relative h-full min-h-[335px] overflow-hidden rounded-[2rem] border border-[rgba(216,191,166,0.16)] shadow-[0_40px_140px_rgba(0,0,0,0.38)] ${className}`}    >
      {/*
        CUANDO AGREGUEMOS IMÁGENES REALES

        Dentro de este contenedor irá:

        <Image
          src={scene.imagePath}
          alt=""
          fill
          className="object-cover"
        />

        Mantener encima:
        - overlay oscuro
        - bordes redondeados
        - sombra editorial
        - textos flotantes
      */}

      <div
  aria-hidden="true"
  className="absolute inset-0 bg-[radial-gradient(circle_at_42%_20%,rgba(243,232,218,0.26),transparent_12rem),radial-gradient(circle_at_62%_68%,rgba(180,106,90,0.22),transparent_15rem)]"
/>

      {variant === "table" && (
        <>
          <div className="absolute bottom-[26%] left-[8%] h-px w-[72%] bg-[rgba(216,191,166,0.28)]" />
          <div className="absolute bottom-[32%] left-[14%] h-24 w-24 rounded-full border border-[rgba(216,191,166,0.16)]" />
          <div className="absolute bottom-[34%] left-[42%] h-32 w-20 rounded-full border border-[rgba(216,191,166,0.12)]" />
          <div className="absolute bottom-[31%] right-[18%] h-20 w-20 rounded-full bg-[rgba(216,191,166,0.08)] blur-xl" />
        </>
      )}

      {variant === "glass" && (
        <>
          <div className="absolute right-[18%] top-[18%] h-52 w-32 rounded-full border border-[rgba(216,191,166,0.18)]" />
          <div className="absolute right-[30%] top-[30%] h-36 w-24 rounded-full border border-[rgba(216,191,166,0.1)]" />
          <div className="absolute right-[22%] top-[18%] h-36 w-36 rounded-full bg-[rgba(216,191,166,0.08)] blur-2xl" />
        </>
      )}

      {variant === "hands" && (
        <>
          <div className="absolute left-[12%] top-[22%] h-24 w-[58%] rounded-full border border-[rgba(216,191,166,0.12)] rotate-[-12deg]" />
          <div className="absolute left-[22%] top-[38%] h-20 w-[46%] rounded-full border border-[rgba(180,106,90,0.18)] rotate-[8deg]" />
          <div className="absolute left-[20%] top-[30%] h-36 w-36 rounded-full bg-[rgba(180,106,90,0.12)] blur-2xl" />
        </>
      )}

      {variant === "space" && (
        <>
          <div className="absolute left-[10%] top-[18%] h-[54%] w-px bg-[linear-gradient(to_bottom,rgba(216,191,166,0.36),transparent)]" />
          <div className="absolute left-[22%] top-[24%] h-px w-[58%] bg-[linear-gradient(90deg,rgba(216,191,166,0.28),transparent)]" />
          <div className="absolute right-[10%] top-[20%] h-[46%] w-[26%] rounded-[999px_999px_1.3rem_1.3rem] border border-[rgba(216,191,166,0.13)]" />
          <div className="absolute bottom-[18%] left-[24%] h-px w-[54%] bg-[rgba(216,191,166,0.16)]" />
        </>
      )}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(17,16,14,0.04),rgba(17,16,14,0.68))]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(to_top,rgba(17,16,14,0.82),transparent)]"
      />
    </div>
  );
}

export function LivingGallery() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [24, -36]);
  const slowY = useTransform(scrollYProgress, [0, 1], [24, -42]);
  const lineScale = useTransform(scrollYProgress, [0.12, 0.55], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="galeria"
      className="relative overflow-hidden bg-[var(--ink)] px-5 py-24 text-[var(--candle)] md:px-8 md:py-36"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(74,38,56,0.34),transparent_32rem),radial-gradient(circle_at_82%_58%,rgba(38,53,45,0.34),transparent_34rem)]"
      />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <motion.div style={{ y: titleY }} className="lg:col-span-7">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-12% 0px" }}
              className="mb-7 md:mb-9"
            >
              <SectionLabel
                eyebrow="Escenas"
                label="Fragmentos de una celebración imaginada"
              />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-12% 0px" }}
              className="font-display max-w-[920px] text-[clamp(3.4rem,8vw,8.8rem)] leading-[0.84] tracking-[-0.08em]"
            >
              Escenas antes del recuerdo.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ delay: 0.16, duration: 0.95, ease: EASE_CINEMATIC }}
            className="lg:col-span-4 lg:col-start-9"
          >
            <p className="text-[1.35rem] leading-9 text-[rgba(243,232,218,0.76)] md:text-2xl md:leading-10">
              No mostramos eventos como catálogo. Mostramos fragmentos: luz,
              textura, pausa y movimiento.
            </p>
          </motion.div>
        </div>

        <motion.div
          aria-hidden="true"
          style={{ scaleX: lineScale }}
          className="mt-14 h-px w-full origin-left bg-[linear-gradient(90deg,rgba(216,191,166,0.54),transparent)] md:mt-18"
        />

        <motion.div
          style={{ y: slowY }}
          className="mt-10 grid gap-6 md:mt-14 lg:grid-cols-12 lg:gap-7"
        >
          {galleryScenes.map((scene) => (
            <motion.article
              key={scene.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-14% 0px" }}
              transition={{ duration: 0.95, ease: EASE_CINEMATIC }}
              className={`group relative ${scene.className}`}
            >
              <EditorialVisual
                variant={scene.visualVariant}
                className={scene.visualClassName}
              />

              <div
                className={`pointer-events-none absolute z-20 ${scene.overlayClassName}`}
              >
                <div
                  className={`rounded-[1.35rem] border border-[rgba(216,191,166,0.12)] bg-[rgba(17,16,14,0.5)] p-5 backdrop-blur-xl transition-transform duration-700 ease-out group-hover:-translate-y-2 md:p-6 ${scene.cardClassName}`}
                >
                  <h3 className="font-display text-[2.7rem] leading-[0.9] tracking-[-0.06em] text-[var(--candle)] md:text-5xl">
                    {scene.title}
                  </h3>

                  <p className="mt-4 text-[1.08rem] leading-7 text-[rgba(243,232,218,0.74)] md:text-lg md:leading-8">
                    {scene.caption}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-16 grid gap-8 border-t border-[rgba(216,191,166,0.15)] pt-8 lg:grid-cols-12">
          <p className="font-display text-4xl leading-[0.95] tracking-[-0.055em] text-[rgba(243,232,218,0.82)] md:text-5xl lg:col-span-5">
            La imagen final no empieza en la cámara.
          </p>

          <p className="text-[1.18rem] leading-8 text-[rgba(243,232,218,0.68)] md:text-xl md:leading-9 lg:col-span-5 lg:col-start-8">
            Empieza en cómo se acomoda una mesa, cómo entra la luz, cómo respira
            el espacio y cómo se permite que la celebración suceda sin sentirse
            forzada.
          </p>
        </div>
      </div>
    </section>
  );
}