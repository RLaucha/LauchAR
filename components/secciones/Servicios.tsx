"use client";

import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import type { Seccion } from "@/lib/tipos";
import { Encabezado, Icono, contenedorStagger, itemStagger } from "@/components/ui/basicos";

type Props = Extract<Seccion, { tipo: "servicios" }>;

function Card({ item }: { item: Props["items"][number] }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const brillo = useMotionTemplate`radial-gradient(320px circle at ${x}px ${y}px, color-mix(in oklab, var(--c-acento) 18%, transparent), transparent 70%)`;
  return (
    <motion.article
      variants={itemStagger}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - r.left);
        y.set(e.clientY - r.top);
      }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`group relative overflow-hidden rounded-3xl border border-borde bg-fondo2/60 p-7 md:p-8 ${
        item.destacado ? "md:col-span-2 md:row-span-2 md:flex md:flex-col md:justify-end md:p-10" : ""
      }`}
    >
      <motion.div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: brillo }} />
      <div
        className={`relative flex items-center justify-center rounded-2xl bg-acento/12 text-acento ${
          item.destacado ? "h-16 w-16 md:mb-auto" : "h-12 w-12"
        }`}
      >
        <Icono nombre={item.icono} className={item.destacado ? "h-8 w-8" : "h-6 w-6"} />
      </div>
      <h3 className={`font-display relative mt-6 ${item.destacado ? "text-4xl md:text-5xl" : "text-2xl md:text-[1.75rem]"}`}>{item.titulo}</h3>
      <p className={`relative mt-3 text-suave ${item.destacado ? "max-w-md text-lg" : ""}`}>{item.texto}</p>
    </motion.article>
  );
}

export function Servicios(s: Props) {
  // Elige 3 o 4 columnas para que la grilla cierre sin huecos
  const celdas = s.items.reduce((n, it) => n + (it.destacado ? 4 : 1), 0);
  const cols = celdas % 3 === 0 ? "md:grid-cols-3" : "md:grid-cols-4";
  return (
    <section id={s.id} className="seccion">
      <div className="contenedor">
        <Encabezado etiqueta={s.etiqueta} titulo={s.titulo} subtitulo={s.subtitulo} />
        <motion.div
          variants={contenedorStagger}
          initial="oculto"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className={`mt-14 grid gap-4 md:auto-rows-fr ${cols}`}
        >
          {s.items.map((it) => (
            <Card key={it.titulo} item={it} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
