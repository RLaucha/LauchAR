"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import { linkWhatsApp } from "@/lib/whatsapp";
import type { Hero, Negocio } from "@/lib/tipos";
import { BotonPrincipal, BotonSecundario } from "@/components/ui/basicos";
import { Entrar, TituloAnimado } from "./titulo";

/** Fondo con aurora animada + luz que sigue al mouse + cinta de chips. Ideal para fiestas, boliches, marcas jóvenes. Luce mejor con tema "noche" o "urbano". */
export function HeroSpotlight({ hero, negocio }: { hero: Hero; negocio: Negocio }) {
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(50);
  const my = useMotionValue(40);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });
  const luz = useMotionTemplate`radial-gradient(600px circle at ${sx}% ${sy}%, color-mix(in oklab, var(--c-acento) 22%, transparent), transparent 60%)`;

  const mover = (e: React.PointerEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  };

  const chips = hero.chips ?? [];

  return (
    <section
      ref={ref}
      onPointerMove={mover}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28"
    >
      {/* Aurora */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="aurora absolute top-[-20%] left-[-10%] h-[60vmax] w-[60vmax] rounded-full opacity-50 blur-[90px]"
          style={{ background: "var(--c-acento)", animation: "aurora 18s ease-in-out infinite" }}
        />
        <div
          className="aurora absolute right-[-15%] bottom-[-25%] h-[55vmax] w-[55vmax] rounded-full opacity-40 blur-[100px]"
          style={{ background: "var(--c-acento2)", animation: "aurora 22s ease-in-out infinite reverse" }}
        />
      </div>
      {/* Grilla */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(var(--c-texto) 1px, transparent 1px), linear-gradient(90deg, var(--c-texto) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
        }}
      />
      <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: luz }} />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-fondo to-transparent" />

      <div className="contenedor relative text-center">
        {hero.etiqueta && (
          <Entrar>
            <span className="inline-flex items-center gap-2 rounded-full border border-borde bg-fondo2/60 px-4 py-1.5 text-xs font-medium backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-acento opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-acento" />
              </span>
              {hero.etiqueta}
            </span>
          </Entrar>
        )}
        <TituloAnimado
          texto={hero.titulo}
          destacado={hero.destacado}
          className="mx-auto mt-7 max-w-5xl text-[3.2rem] md:text-[7rem] [&_.destacado]:bg-gradient-to-r [&_.destacado]:from-acento [&_.destacado]:to-acento2 [&_.destacado]:bg-clip-text [&_.destacado]:text-transparent"
        />
        <Entrar delay={0.6}>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-pretty text-suave md:text-xl">{hero.subtitulo}</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <BotonPrincipal href={linkWhatsApp(negocio.whatsapp, negocio.mensajeWhatsapp)}>{hero.ctaPrincipal}</BotonPrincipal>
            {hero.ctaSecundario && <BotonSecundario href={hero.ctaSecundario.href}>{hero.ctaSecundario.texto}</BotonSecundario>}
          </div>
        </Entrar>
      </div>

      {chips.length > 0 && (
        <Entrar delay={0.9} className="relative mt-20 overflow-hidden border-y border-borde py-5 [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <div className="cinta flex w-max gap-12" style={{ ["--dur" as string]: "30s" }}>
            {[...chips, ...chips, ...chips, ...chips].map((c, i) => (
              <span key={i} className="font-display flex items-center gap-12 text-2xl whitespace-nowrap text-suave md:text-3xl">
                {c}
                <span className="text-acento">✦</span>
              </span>
            ))}
          </div>
        </Entrar>
      )}
    </section>
  );
}
