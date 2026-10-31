"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import type { Seccion } from "@/lib/tipos";
import { Aparecer, Encabezado } from "@/components/ui/basicos";

type Props = Extract<Seccion, { tipo: "proceso" }>;

export function Proceso(s: Props) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const progreso = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id={s.id} className="seccion">
      <div className="contenedor grid gap-14 lg:grid-cols-[0.8fr_1fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Encabezado etiqueta={s.etiqueta} titulo={s.titulo} />
        </div>
        <ol ref={ref} className="relative">
          <div className="absolute top-2 bottom-2 left-[1.45rem] w-px bg-borde" />
          <motion.div
            className="absolute top-2 bottom-2 left-[1.45rem] w-px origin-top bg-acento"
            style={{ scaleY: progreso }}
          />
          {s.pasos.map((p, i) => (
            <li key={p.titulo} className="relative pb-12 pl-20 last:pb-0">
              <Aparecer delay={i * 0.05}>
                <span className="font-display absolute top-0 left-0 flex h-12 w-12 items-center justify-center rounded-full border border-borde bg-fondo text-xl text-acento">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display pt-1.5 text-3xl">{p.titulo}</h3>
                <p className="mt-3 max-w-md text-suave">{p.texto}</p>
              </Aparecer>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
