"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import type { Seccion } from "@/lib/tipos";

type Props = Extract<Seccion, { tipo: "numeros" }>;

function Contador({ valor, prefijo = "", sufijo = "" }: { valor: number; prefijo?: string; sufijo?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const visto = useInView(ref, { once: true, margin: "-40px" });
  const reducir = useReducedMotion();
  const [n, setN] = useState(reducir ? valor : 0);
  useEffect(() => {
    if (!visto || reducir) return;
    const c = animate(0, valor, { duration: 1.8, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [visto, valor, reducir]);
  return (
    <span ref={ref}>
      {prefijo}
      {n.toLocaleString("es-AR")}
      {sufijo}
    </span>
  );
}

export function Numeros(s: Props) {
  return (
    <section id={s.id} className="border-y border-borde bg-fondo2/50">
      <div className="contenedor grid grid-cols-2 gap-y-10 py-14 md:grid-cols-4 md:py-20">
        {s.items.map((it, i) => (
          <div key={it.label} className={`px-2 text-center ${i > 0 ? "md:border-l md:border-borde" : ""}`}>
            <div className="font-display text-5xl text-acento md:text-7xl">
              <Contador valor={it.valor} prefijo={it.prefijo} sufijo={it.sufijo} />
            </div>
            <div className="mt-2 text-sm text-suave md:text-base">{it.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
