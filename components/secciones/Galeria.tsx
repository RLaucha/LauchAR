"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Seccion } from "@/lib/tipos";
import { Encabezado, Foto } from "@/components/ui/basicos";

type Props = Extract<Seccion, { tipo: "galeria" }>;

// Patrón bento que se repite cada 6 fotos (6 fotos = grilla de 4x3 sin huecos)
const patron = [
  "md:col-span-2 md:row-span-2",
  "",
  "",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
];

export function Galeria(s: Props) {
  const [abierta, setAbierta] = useState<number | null>(null);
  const total = s.fotos.length;

  useEffect(() => {
    if (abierta === null) return;
    const tecla = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbierta(null);
      if (e.key === "ArrowRight") setAbierta((i) => (i! + 1) % total);
      if (e.key === "ArrowLeft") setAbierta((i) => (i! - 1 + total) % total);
    };
    window.addEventListener("keydown", tecla);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", tecla);
      document.body.style.overflow = "";
    };
  }, [abierta, total]);

  return (
    <section id={s.id} className="seccion">
      <div className="contenedor">
        <Encabezado etiqueta={s.etiqueta} titulo={s.titulo} subtitulo={s.subtitulo} />
        <div className="mt-14 grid grid-flow-dense auto-rows-[11rem] grid-cols-2 gap-3 md:auto-rows-[14rem] md:grid-cols-4 md:gap-4">
          {s.fotos.map((f, i) => (
            <motion.button
              key={i}
              layoutId={`foto-${i}`}
              onClick={() => setAbierta(i)}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-2xl md:rounded-3xl ${i === 0 ? "col-span-2 row-span-2" : ""} ${i === total - 1 && total % 2 === 0 ? "max-md:col-span-2" : ""} ${patron[i % 6]}`}
              aria-label={`Ver ${f.alt}`}
            >
              <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.06]">
                <Foto imagen={f} indice={i} />
              </div>
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/15" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {abierta !== null && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setAbierta(null)}
          >
            <motion.div
              layoutId={`foto-${abierta}`}
              className="relative aspect-[4/3] w-full max-w-5xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Foto imagen={s.fotos[abierta]} indice={abierta} />
            </motion.div>
            <button aria-label="Cerrar" className="absolute top-5 right-5 rounded-full bg-white/10 p-3 text-white hover:bg-white/20" onClick={() => setAbierta(null)}>
              <X className="h-5 w-5" />
            </button>
            <button
              aria-label="Anterior"
              className="absolute left-3 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 md:left-8"
              onClick={(e) => { e.stopPropagation(); setAbierta((abierta - 1 + total) % total); }}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Siguiente"
              className="absolute right-3 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 md:right-8"
              onClick={(e) => { e.stopPropagation(); setAbierta((abierta + 1) % total); }}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
