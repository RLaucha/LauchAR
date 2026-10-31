"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { linkWhatsApp } from "@/lib/whatsapp";
import type { Negocio } from "@/lib/tipos";
import { IconoInstagram, IconoWhatsApp } from "@/components/ui/basicos";

/** Botón flotante de WhatsApp: aparece después de pasar el hero. */
export function WhatsAppFlotante({ negocio }: { negocio: Negocio }) {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setVisible(v > 500));
  return (
    <motion.a
      href={linkWhatsApp(negocio.whatsapp, negocio.mensajeWhatsapp)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      initial={false}
      animate={{ scale: visible ? 1 : 0, opacity: visible ? 1 : 0 }}
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed right-4 bottom-4 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl md:right-6 md:bottom-6 md:h-16 md:w-16"
      style={{ animation: visible ? "pulso 2.2s infinite" : undefined }}
    >
      <IconoWhatsApp className="h-7 w-7 md:h-8 md:w-8" />
    </motion.a>
  );
}

/** Franja superior para previews. Se apaga con `preview: false` en site.config.ts */
export function BannerPreview() {
  return (
    <div className="fixed inset-x-0 top-0 z-[70] flex h-9 items-center justify-center gap-2 bg-black px-4 text-[12px] text-white/80">
      <span className="h-1.5 w-1.5 rounded-full bg-[#25d366]" />
      <span className="truncate">
        Propuesta de diseño por{" "}
        <a href="https://instagram.com/lauchar.dev" target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline-offset-2 hover:underline">
          LaunchAR
        </a>{" "}
        · Web de muestra
      </span>
    </div>
  );
}

export function Footer({ negocio, links }: { negocio: Negocio; links: { texto: string; href: string }[] }) {
  return (
    <footer className="pt-20 pb-10">
      <div className="contenedor">
        <div className="flex flex-col gap-10 border-b border-borde pb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="font-display text-5xl md:text-7xl">{negocio.nombre}</div>
            <p className="mt-3 text-suave">
              {negocio.rubro} · {negocio.ciudad}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-suave hover:text-texto">
                {l.texto}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col-reverse gap-6 pt-8 text-sm text-suave md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {negocio.nombre}. Web por{" "}
            <a href="https://instagram.com/lauchar.dev" target="_blank" rel="noopener noreferrer" className="font-medium text-texto hover:underline">
              LaunchAR
            </a>
          </p>
          <div className="flex gap-3">
            {negocio.instagram && (
              <a
                href={`https://instagram.com/${negocio.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-borde hover:border-acento hover:text-acento"
              >
                <IconoInstagram className="h-5 w-5" />
              </a>
            )}
            <a
              href={linkWhatsApp(negocio.whatsapp, negocio.mensajeWhatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-borde hover:border-acento hover:text-acento"
            >
              <IconoWhatsApp className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
