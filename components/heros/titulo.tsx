"use client";

import { motion, useReducedMotion } from "motion/react";

/** Título que aparece palabra por palabra, con la frase "destacado" resaltada. */
export function TituloAnimado({
  texto,
  destacado,
  className = "",
  delay = 0.15,
}: {
  texto: string;
  destacado?: string;
  className?: string;
  delay?: number;
}) {
  const reducir = useReducedMotion();
  const palabras = texto.split(" ");
  const destacadas = new Set<number>();
  if (destacado) {
    const d = destacado.split(" ");
    for (let i = 0; i <= palabras.length - d.length; i++) {
      if (d.every((w, j) => palabras[i + j].toLowerCase().replace(/[.,!?]/g, "") === w.toLowerCase().replace(/[.,!?]/g, ""))) {
        d.forEach((_, j) => destacadas.add(i + j));
        break;
      }
    }
  }

  return (
    <h1 className={`font-display text-balance ${className}`}>
      <span className="sr-only">{texto}</span>
      <span aria-hidden>
        {palabras.map((p, i) => (
          <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
            <motion.span
              className={`inline-block ${destacadas.has(i) ? "destacado" : ""}`}
              initial={reducir ? false : { y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: delay + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              {p}
              {i < palabras.length - 1 ? " " : ""}
            </motion.span>
          </span>
        ))}
      </span>
    </h1>
  );
}

export function Entrar({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reducir = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reducir ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
