"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";
import { linkWhatsApp } from "@/lib/whatsapp";
import type { Negocio } from "@/lib/tipos";
import { IconoWhatsApp } from "@/components/ui/basicos";

export function Nav({
  negocio,
  links,
  sobreImagen,
  conBanner,
}: {
  negocio: Negocio;
  links: { texto: string; href: string }[];
  sobreImagen: boolean;
  conBanner: boolean;
}) {
  const { scrollY } = useScroll();
  const [solida, setSolida] = useState(false);
  const [abierto, setAbierto] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setSolida(v > 40));

  const claro = sobreImagen && !solida && !abierto;

  return (
    <header className={`fixed inset-x-0 z-50 ${conBanner ? "top-9" : "top-0"}`}>
      <motion.nav
        className={`contenedor mt-3 flex items-center justify-between rounded-full py-2.5 pr-2.5 pl-5 transition-all duration-500 ${
          solida || abierto ? "border border-borde bg-fondo/80 shadow-lg shadow-black/5 backdrop-blur-xl" : "border border-transparent"
        } ${claro ? "text-white" : "text-texto"}`}
        style={{ width: "calc(100% - 1.5rem)", maxWidth: "74rem" }}
      >
        <a href="#" className="font-display text-xl md:text-2xl">
          {negocio.nombre}
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="opacity-80 transition-opacity hover:opacity-100">
              {l.texto}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href={linkWhatsApp(negocio.whatsapp, negocio.mensajeWhatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-acento px-5 py-2.5 text-sm font-semibold text-sobre-acento transition-transform hover:scale-105 sm:inline-flex"
          >
            <IconoWhatsApp className="h-4 w-4" /> Consultar
          </a>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
            onClick={() => setAbierto(!abierto)}
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          >
            {abierto ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {abierto && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="contenedor mt-2 lg:hidden"
            style={{ width: "calc(100% - 1.5rem)" }}
          >
            <div className="rounded-3xl border border-borde bg-fondo/95 p-3 shadow-xl backdrop-blur-xl">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setAbierto(false)} className="block rounded-2xl px-4 py-3.5 text-lg font-medium hover:bg-fondo2">
                  {l.texto}
                </a>
              ))}
              <a
                href={linkWhatsApp(negocio.whatsapp, negocio.mensajeWhatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-acento px-4 py-4 font-semibold text-sobre-acento"
              >
                <IconoWhatsApp className="h-5 w-5" /> Consultar por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
