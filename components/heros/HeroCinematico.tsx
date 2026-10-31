"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";
import { linkWhatsApp } from "@/lib/whatsapp";
import type { Hero, Negocio } from "@/lib/tipos";
import { BotonPrincipal, Foto } from "@/components/ui/basicos";
import { Entrar, TituloAnimado } from "./titulo";

/** Foto a pantalla completa con zoom/parallax al scrollear. Ideal para salones, quintas, restaurantes con buenas fotos. */
export function HeroCinematico({ hero, negocio }: { hero: Hero; negocio: Negocio }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const escala = useTransform(scrollYProgress, [0, 1], [1.05, 1.25]);
  const yTexto = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacidad = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-end overflow-hidden bg-black text-white">
      <motion.div style={{ scale: escala }} className="absolute inset-0">
        <Foto imagen={hero.imagen ?? { alt: "Foto principal" }} sinEtiqueta />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/30" />

      <motion.div style={{ y: yTexto, opacity: opacidad }} className="contenedor relative pt-32 pb-16 md:pb-24">
        {hero.etiqueta && (
          <Entrar>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-acento" />
              {hero.etiqueta}
            </span>
          </Entrar>
        )}
        <TituloAnimado
          texto={hero.titulo}
          destacado={hero.destacado}
          className="mt-6 max-w-4xl text-[3.1rem] md:text-[6.2rem] [&_.destacado]:text-[color-mix(in_oklab,var(--c-acento)_55%,white)]"
        />
        <div className="mt-8 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <Entrar delay={0.6} className="max-w-xl">
            <p className="text-lg text-pretty text-white/80 md:text-xl">{hero.subtitulo}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BotonPrincipal href={linkWhatsApp(negocio.whatsapp, negocio.mensajeWhatsapp)}>
                {hero.ctaPrincipal}
              </BotonPrincipal>
              {hero.ctaSecundario && (
                <a
                  href={hero.ctaSecundario.href}
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 text-[15px] font-semibold backdrop-blur-sm transition-colors hover:bg-white/10"
                >
                  {hero.ctaSecundario.texto}
                </a>
              )}
            </div>
          </Entrar>
          {hero.datos && (
            <Entrar delay={0.8} className="grid grid-cols-3 gap-6 md:gap-10">
              {hero.datos.map((d) => (
                <div key={d.label}>
                  <div className="font-display text-3xl md:text-5xl">{d.valor}</div>
                  <div className="mt-1 text-xs text-white/65 md:text-sm">{d.label}</div>
                </div>
              ))}
            </Entrar>
          )}
        </div>
      </motion.div>

      <motion.a
        href="#contenido"
        aria-label="Bajar"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-white/60 md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}
