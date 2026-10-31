"use client";

import { motion, useReducedMotion } from "motion/react";
import { linkWhatsApp } from "@/lib/whatsapp";
import type { Hero, Negocio } from "@/lib/tipos";
import { BotonPrincipal, BotonSecundario, Foto } from "@/components/ui/basicos";
import { Entrar, TituloAnimado } from "./titulo";

/** Texto a la izquierda + collage de fotos flotando a la derecha. Ideal para estética, gastronomía, profesionales. */
export function HeroDividido({ hero, negocio }: { hero: Hero; negocio: Negocio }) {
  const reducir = useReducedMotion();
  const fotos = [
    { clase: "left-[4%] top-[6%] w-[58%] aspect-[4/5] -rotate-3 z-10", d: 0.3 },
    { clase: "right-[2%] top-[22%] w-[48%] aspect-[3/4] rotate-3 z-20", d: 0.45 },
    { clase: "left-[18%] bottom-[2%] w-[46%] aspect-square -rotate-1 z-30", d: 0.6 },
  ];

  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[38rem] w-[38rem] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--c-acento), transparent 65%)" }}
      />
      <div className="contenedor relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div>
          {hero.etiqueta && (
            <Entrar>
              <span className="inline-flex items-center gap-2 rounded-full border border-borde bg-fondo2 px-4 py-1.5 text-xs font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-acento" />
                {hero.etiqueta}
              </span>
            </Entrar>
          )}
          <TituloAnimado texto={hero.titulo} destacado={hero.destacado} className="mt-6 text-[3rem] md:text-[5.2rem]" />
          <Entrar delay={0.55}>
            <p className="mt-7 max-w-lg text-lg text-pretty text-suave md:text-xl">{hero.subtitulo}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <BotonPrincipal href={linkWhatsApp(negocio.whatsapp, negocio.mensajeWhatsapp)}>{hero.ctaPrincipal}</BotonPrincipal>
              {hero.ctaSecundario && <BotonSecundario href={hero.ctaSecundario.href}>{hero.ctaSecundario.texto}</BotonSecundario>}
            </div>
          </Entrar>
          {hero.datos && (
            <Entrar delay={0.75} className="mt-12 flex gap-8 border-t border-borde pt-7 md:gap-12">
              {hero.datos.map((d) => (
                <div key={d.label}>
                  <div className="font-display text-3xl md:text-4xl">{d.valor}</div>
                  <div className="mt-1 text-xs text-suave md:text-sm">{d.label}</div>
                </div>
              ))}
            </Entrar>
          )}
        </div>

        <div className="relative mx-auto aspect-[1/1.05] w-full max-w-[34rem]">
          {fotos.map((f, i) => (
            <motion.div
              key={i}
              className={`absolute overflow-hidden rounded-[1.75rem] border-[6px] border-fondo shadow-2xl shadow-black/20 ${f.clase}`}
              initial={reducir ? false : { opacity: 0, y: 60, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: f.d, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.04, rotate: 0, zIndex: 40 }}
            >
              <motion.div
                className="h-full w-full"
                animate={reducir ? undefined : { y: [0, i % 2 ? 10 : -10, 0] }}
                transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
              >
                <Foto imagen={[hero.imagen, undefined, undefined][i] ?? { alt: hero.chips?.[i] ?? "Foto" }} indice={i + 1} />
              </motion.div>
            </motion.div>
          ))}
          {hero.chips && hero.chips.length > 0 && (
            <motion.div
              initial={reducir ? false : { opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute right-0 bottom-[12%] z-40 rounded-2xl border border-borde bg-fondo/90 p-4 shadow-xl backdrop-blur-md"
            >
              <div className="text-xs text-suave">Especialistas en</div>
              <div className="mt-1 font-semibold">{hero.chips.slice(0, 3).join(" · ")}</div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
