"use client";

import { motion } from "motion/react";
import { linkWhatsApp } from "@/lib/whatsapp";
import type { Negocio, Seccion } from "@/lib/tipos";
import { BotonPrincipal } from "@/components/ui/basicos";

type Props = Extract<Seccion, { tipo: "cta" }> & { negocio: Negocio };

export function CtaFinal({ negocio, ...s }: Props) {
  return (
    <section id={s.id} className="px-3 pb-3 md:px-5 md:pb-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="grano relative overflow-hidden rounded-[2rem] bg-banda px-6 py-20 text-center text-white md:rounded-[2.5rem] md:py-32"
      >
        <div
          aria-hidden
          className="aurora pointer-events-none absolute top-1/2 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--c-acento), transparent 60%)", animation: "aurora 16s ease-in-out infinite" }}
        />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="font-display text-[2.8rem] text-balance md:text-7xl">{s.titulo}</h2>
          {s.texto && <p className="mx-auto mt-6 max-w-xl text-lg text-white/75">{s.texto}</p>}
          <div className="mt-10">
            <BotonPrincipal href={linkWhatsApp(negocio.whatsapp, negocio.mensajeWhatsapp)}>{s.boton}</BotonPrincipal>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
