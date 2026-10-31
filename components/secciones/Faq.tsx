"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import type { Seccion } from "@/lib/tipos";
import { Encabezado } from "@/components/ui/basicos";

type Props = Extract<Seccion, { tipo: "faq" }>;

export function Faq(s: Props) {
  const [abierta, setAbierta] = useState<number | null>(0);
  return (
    <section id={s.id} className="seccion bg-fondo2/50">
      <div className="contenedor grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-24">
        <Encabezado etiqueta={s.etiqueta} titulo={s.titulo} />
        <div className="divide-y divide-borde border-y border-borde">
          {s.items.map((it, i) => {
            const on = abierta === i;
            return (
              <div key={it.pregunta}>
                <button
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  onClick={() => setAbierta(on ? null : i)}
                  aria-expanded={on}
                >
                  <span className="text-lg font-semibold md:text-xl">{it.pregunta}</span>
                  <motion.span
                    animate={{ rotate: on ? 45 : 0 }}
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${on ? "border-acento bg-acento text-sobre-acento" : "border-borde"}`}
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {on && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-xl pb-6 text-suave">{it.respuesta}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
