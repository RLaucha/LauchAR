"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Seccion } from "@/lib/tipos";
import { Encabezado, Icono, contenedorStagger, itemStagger } from "@/components/ui/basicos";

type Props = Extract<Seccion, { tipo: "casos" }>;

/** Casos / portfolio: cards grandes, 2 columnas en desktop. Ideal para 2 o 4 casos. */
export function Casos(s: Props) {
  return (
    <section id={s.id} className="seccion bg-fondo2/50">
      <div className="contenedor">
        <Encabezado etiqueta={s.etiqueta} titulo={s.titulo} subtitulo={s.subtitulo} />
        <motion.div
          variants={contenedorStagger}
          initial="oculto"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-4 md:grid-cols-2"
        >
          {s.items.map((it, i) => {
            const contenido = (
              <>
                <div
                  aria-hidden
                  className="grano pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
                  style={{ background: i % 2 ? "var(--c-acento2)" : "var(--c-acento)" }}
                />
                <div className="relative flex items-start justify-between gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-acento/12 text-acento">
                    <Icono nombre={it.icono} className="h-7 w-7" />
                  </span>
                  {it.url && <ArrowUpRight className="h-6 w-6 text-suave transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-acento" />}
                </div>
                <p className="relative mt-10 text-xs font-semibold tracking-[0.2em] text-acento uppercase">{it.tipo}</p>
                <h3 className="font-display relative mt-3 text-4xl md:text-5xl">{it.cliente}</h3>
                <p className="relative mt-4 max-w-md text-suave">{it.texto}</p>
                {it.tags && (
                  <div className="relative mt-8 flex flex-wrap gap-2">
                    {it.tags.map((t) => (
                      <span key={t} className="rounded-full border border-borde px-3 py-1 text-xs font-medium text-suave">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </>
            );
            // Con cantidad impar, el último ocupa las 2 columnas para que no quede hueco
            const ultimoSolo = s.items.length % 2 === 1 && i === s.items.length - 1;
            const clase = `group relative block overflow-hidden rounded-3xl border border-borde bg-fondo p-7 md:p-10 ${ultimoSolo ? "md:col-span-2" : ""}`;
            return it.url ? (
              <motion.a key={it.cliente} variants={itemStagger} whileHover={{ y: -6 }} href={it.url} target="_blank" rel="noopener noreferrer" className={clase}>
                {contenido}
              </motion.a>
            ) : (
              <motion.article key={it.cliente} variants={itemStagger} whileHover={{ y: -6 }} className={clase}>
                {contenido}
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
