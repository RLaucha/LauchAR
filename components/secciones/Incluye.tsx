"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import type { Seccion } from "@/lib/tipos";
import { Encabezado, Foto, Icono, contenedorStagger, itemStagger } from "@/components/ui/basicos";

type Props = Extract<Seccion, { tipo: "incluye" }>;

export function Incluye(s: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id={s.id} className="seccion bg-fondo2/50">
      <div className="contenedor grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div ref={ref} className="relative aspect-[4/5] overflow-hidden rounded-[2rem] lg:order-2">
          <motion.div style={{ y }} className="absolute inset-[-10%]">
            <Foto imagen={s.imagen ?? { alt: "Foto" }} indice={3} sinEtiqueta />
          </motion.div>
        </div>
        <div>
          <Encabezado etiqueta={s.etiqueta} titulo={s.titulo} subtitulo={s.subtitulo} />
          <motion.ul
            variants={contenedorStagger}
            initial="oculto"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-10 grid gap-3 sm:grid-cols-2"
          >
            {s.items.map((it) => (
              <motion.li
                key={it.texto}
                variants={itemStagger}
                className="flex items-center gap-4 rounded-2xl border border-borde bg-fondo p-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-acento text-sobre-acento">
                  <Icono nombre={it.icono} className="h-5 w-5" />
                </span>
                <span className="text-[15px] font-medium">{it.texto}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
