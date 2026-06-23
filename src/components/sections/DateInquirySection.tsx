"use client";

import { FormEvent, useState } from "react";
import { motion } from "motion/react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EASE_CINEMATIC, fadeUp } from "@/lib/animation";

const eventTypes = [
  "Celebración privada",
  "Boda íntima",
  "Cena / aniversario",
  "Evento de marca",
  "Producción editorial",
  "Otro tipo de experiencia",
];

export function DateInquirySection() {
  const [eventDate, setEventDate] = useState("");
  const [eventType, setEventType] = useState("");
  const [guests, setGuests] = useState("");
  const [city, setCity] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    /*
      WHATSAPP AQUÍ

      Reemplazar este número por el WhatsApp real del cliente.
      Formato México recomendado:
      5213312345678
    */

    const phoneNumber = "520000000000";

    const inquiryMessage = `
Hola, quiero consultar mi fecha con Lúmina.

Fecha de la celebración: ${eventDate || "Por definir"}
Tipo de experiencia: ${eventType || "Por definir"}
Ciudad / lugar: ${city || "Por definir"}
WhatsApp para responderme: ${whatsapp || "Por definir"}
Invitados aproximados: ${guests || "No indicado"}

Mensaje:
${message || "Quiero recibir orientación sobre la experiencia adecuada."}
    `.trim();

    const encodedMessage = encodeURIComponent(inquiryMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="fecha"
      className="relative overflow-hidden bg-[var(--plum)] px-5 py-24 text-[var(--candle)] md:px-8 md:py-36"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(180,106,90,0.18),transparent_30rem),radial-gradient(circle_at_86%_70%,rgba(38,53,45,0.36),transparent_34rem)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,16,14,0.16),rgba(17,16,14,0.58))]"
      />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0px" }}
            className="lg:col-span-5"
          >
            <div className="mb-8">
              <SectionLabel eyebrow="Disponibilidad" label="Consulta privada" />
            </div>

            <h2 className="font-display text-[clamp(4rem,8vw,8.6rem)] leading-[0.84] tracking-[-0.08em]">
              ¿Ya tienes fecha?
            </h2>

            <p className="mt-8 max-w-[560px] text-[1.35rem] leading-9 text-[rgba(243,232,218,0.74)] md:text-2xl md:leading-10">
              Cuéntanos cuándo será, dónde imaginas la escena y qué quieres que
              se recuerde.
            </p>

            <div className="mt-10 rounded-[2rem] border border-[rgba(216,191,166,0.14)] bg-[rgba(17,16,14,0.34)] p-6 backdrop-blur-xl md:mt-12 md:p-8">
              <p className="font-display text-4xl leading-[0.95] tracking-[-0.055em] text-[var(--candle)] md:text-5xl">
                No necesitas tener todo resuelto.
              </p>

              <p className="mt-5 text-lg leading-8 text-[rgba(216,191,166,0.68)]">
                Solo necesitamos una fecha, un lugar aproximado y una intención
                para orientarte.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ delay: 0.12, duration: 0.95, ease: EASE_CINEMATIC }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-[2.2rem] border border-[rgba(216,191,166,0.18)] bg-[rgba(17,16,14,0.46)] p-5 shadow-[0_44px_150px_rgba(0,0,0,0.42)] backdrop-blur-xl md:rounded-[2.4rem] md:p-9"
            >
              <div
                aria-hidden="true"
                className="absolute right-[-8rem] top-[-8rem] h-80 w-80 rounded-full bg-[rgba(216,191,166,0.1)] blur-3xl"
              />

              <div
                aria-hidden="true"
                className="absolute bottom-[-8rem] left-[-8rem] h-80 w-80 rounded-full bg-[rgba(180,106,90,0.12)] blur-3xl"
              />

              <div className="relative z-10 grid gap-8">
                <div>
                  <p className="mb-5 font-display text-3xl leading-none tracking-[-0.05em] text-[var(--candle)] md:text-4xl">
                    La celebración
                  </p>

                  <div className="grid gap-5 md:grid-cols-2 md:gap-7">
                    <label className="group block">
                      <span className="mb-2 block text-[0.78rem] font-semibold uppercase tracking-[0.17em] text-[var(--clay)] md:text-sm">
                        Fecha de la celebración
                      </span>

                      <input
                        type="date"
                        value={eventDate}
                        onChange={(event) => setEventDate(event.target.value)}
                        className="w-full border-0 border-b border-[rgba(216,191,166,0.24)] bg-transparent px-0 py-3 text-lg text-[var(--candle)] outline-none transition-colors duration-500 placeholder:text-[rgba(243,232,218,0.36)] focus:border-[var(--clay)] md:py-4"
                      />
                    </label>

                    <label className="group block">
                      <span className="mb-2 block text-[0.78rem] font-semibold uppercase tracking-[0.17em] text-[var(--clay)] md:text-sm">
                        Tipo de experiencia
                      </span>

                      <select
                        value={eventType}
                        onChange={(event) => setEventType(event.target.value)}
                        className="w-full border-0 border-b border-[rgba(216,191,166,0.24)] bg-transparent px-0 py-3 text-lg text-[var(--candle)] outline-none transition-colors duration-500 focus:border-[var(--clay)] md:py-4"
                      >
                        <option value="" className="bg-[#11100E]">
                          Selecciona una opción
                        </option>

                        {eventTypes.map((type) => (
                          <option
                            key={type}
                            value={type}
                            className="bg-[#11100E]"
                          >
                            {type}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                </div>

                <div>
                  <p className="mb-5 font-display text-3xl leading-none tracking-[-0.05em] text-[var(--candle)] md:text-4xl">
                    Lugar y contacto
                  </p>

                  <div className="grid gap-5 md:grid-cols-2 md:gap-7">
                    <label className="group block">
                      <span className="mb-2 block text-[0.78rem] font-semibold uppercase tracking-[0.17em] text-[var(--clay)] md:text-sm">
                        Ciudad / lugar
                      </span>

                      <input
                        type="text"
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                        placeholder="Ej. Guadalajara, terraza privada"
                        className="w-full border-0 border-b border-[rgba(216,191,166,0.24)] bg-transparent px-0 py-3 text-lg text-[var(--candle)] outline-none transition-colors duration-500 placeholder:text-[rgba(243,232,218,0.36)] focus:border-[var(--clay)] md:py-4"
                      />
                    </label>

                    <label className="group block">
                      <span className="mb-2 block text-[0.78rem] font-semibold uppercase tracking-[0.17em] text-[var(--clay)] md:text-sm">
                        WhatsApp para responderte
                      </span>

                      <input
                        type="tel"
                        value={whatsapp}
                        onChange={(event) => setWhatsapp(event.target.value)}
                        placeholder="Tu número de contacto"
                        className="w-full border-0 border-b border-[rgba(216,191,166,0.24)] bg-transparent px-0 py-3 text-lg text-[var(--candle)] outline-none transition-colors duration-500 placeholder:text-[rgba(243,232,218,0.36)] focus:border-[var(--clay)] md:py-4"
                      />
                    </label>
                  </div>
                </div>

                <div>
                  <p className="mb-5 font-display text-3xl leading-none tracking-[-0.05em] text-[var(--candle)] md:text-4xl">
                    Detalles opcionales
                  </p>

                  <div className="grid gap-5 md:grid-cols-2 md:gap-7">
                    <label className="group block">
                      <span className="mb-2 flex items-center gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.17em] text-[var(--clay)] md:text-sm">
                        Número aproximado de invitados
                        <span className="rounded-full border border-[rgba(216,191,166,0.18)] px-2 py-1 text-[0.58rem] tracking-[0.14em] text-[rgba(216,191,166,0.62)]">
                          Opcional
                        </span>
                      </span>

                      <input
                        type="text"
                        value={guests}
                        onChange={(event) => setGuests(event.target.value)}
                        placeholder="Ej. 80 invitados"
                        className="w-full border-0 border-b border-[rgba(216,191,166,0.24)] bg-transparent px-0 py-3 text-lg text-[var(--candle)] outline-none transition-colors duration-500 placeholder:text-[rgba(243,232,218,0.36)] focus:border-[var(--clay)] md:py-4"
                      />
                    </label>

                    <label className="group block">
                      <span className="mb-2 flex items-center gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.17em] text-[var(--clay)] md:text-sm">
                        Mensaje
                        <span className="rounded-full border border-[rgba(216,191,166,0.18)] px-2 py-1 text-[0.58rem] tracking-[0.14em] text-[rgba(216,191,166,0.62)]">
                          Opcional
                        </span>
                      </span>

                      <textarea
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        placeholder="Ej. cena privada, aniversario, fotos discretas, ambiente íntimo…"
                        rows={3}
                        className="w-full resize-none border-0 border-b border-[rgba(216,191,166,0.24)] bg-transparent px-0 py-3 text-lg leading-8 text-[var(--candle)] outline-none transition-colors duration-500 placeholder:text-[rgba(243,232,218,0.36)] focus:border-[var(--clay)] md:py-4"
                      />
                    </label>
                  </div>
                </div>

                <div className="mt-2 border-t border-[rgba(216,191,166,0.14)] pt-8 md:mt-4 md:pt-9">
                  <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                    <div>
                      <p className="max-w-[460px] text-base leading-7 text-[rgba(216,191,166,0.68)]">
                        Te responderemos por WhatsApp. Esta consulta no confirma
                        una reserva.
                      </p>

                      <p className="mt-2 max-w-[460px] text-sm leading-6 text-[rgba(216,191,166,0.52)]">
                        Primero revisamos disponibilidad y después definimos el
                        formato correcto para tu celebración.
                      </p>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.97, y: 0 }}
                      transition={{ duration: 0.45, ease: EASE_CINEMATIC }}
                      className="group relative inline-flex min-h-[58px] w-full items-center justify-center overflow-hidden rounded-full border border-[#f3e8da] bg-[#f3e8da] px-8 text-center text-[0.74rem] font-bold uppercase tracking-[0.18em] shadow-[0_18px_60px_rgba(216,191,166,0.16)] transition-all duration-500 hover:bg-[#d8bfa6] md:w-auto md:min-w-[260px]"
                      style={{ color: "#11100E" }}
                    >
                      <span
                        className="relative z-10"
                        style={{ color: "#11100E" }}
                      >
                        Consultar mi fecha
                      </span>

                      <span
                        aria-hidden="true"
                        className="absolute bottom-2 left-6 right-6 h-px origin-left scale-x-0 bg-[#11100E] opacity-45 transition-transform duration-500 ease-out group-hover:scale-x-100"
                      />
                    </motion.button>
                  </div>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}