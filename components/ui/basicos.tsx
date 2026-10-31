"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import type { Imagen } from "@/lib/tipos";
import { iconos } from "@/lib/iconos";

/* ---------- Animación de aparición al scrollear ---------- */
export function Aparecer({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reducir = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reducir ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export const contenedorStagger: Variants = {
  oculto: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
export const itemStagger: Variants = {
  oculto: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

/* ---------- Encabezado de sección ---------- */
export function Encabezado({
  etiqueta,
  titulo,
  subtitulo,
  centrado = false,
}: {
  etiqueta?: string;
  titulo: string;
  subtitulo?: string;
  centrado?: boolean;
}) {
  return (
    <Aparecer className={`max-w-2xl ${centrado ? "mx-auto text-center" : ""}`}>
      {etiqueta && <Etiqueta>{etiqueta}</Etiqueta>}
      <h2 className="font-display mt-4 text-[2.6rem] text-balance md:text-6xl">{titulo}</h2>
      {subtitulo && <p className="mt-5 text-lg text-pretty text-suave">{subtitulo}</p>}
    </Aparecer>
  );
}

export function Etiqueta({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-acento uppercase">
      <span className="h-px w-6 bg-acento" />
      {children}
    </span>
  );
}

/* ---------- Ícono por nombre (lucide) ---------- */
export function Icono({ nombre, className }: { nombre: string; className?: string }) {
  const Comp = iconos[nombre] ?? Sparkles;
  return <Comp className={className} strokeWidth={1.5} aria-hidden />;
}

/* ---------- Foto o placeholder con estilo ---------- */
export function Foto({
  imagen,
  className = "",
  indice = 0,
  sinEtiqueta = false,
}: {
  imagen?: Imagen;
  className?: string;
  indice?: number;
  sinEtiqueta?: boolean;
}) {
  if (imagen?.src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={imagen.src}
        alt={imagen.alt}
        loading="lazy"
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }
  // Placeholder: gradientes del tema, distintos según el índice
  const angulos = [135, 200, 160, 45, 300, 110];
  const a = angulos[indice % angulos.length];
  return (
    <div
      role="img"
      aria-label={imagen?.alt ?? "Foto"}
      className={`grano relative h-full w-full overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at ${20 + ((indice * 23) % 60)}% ${15 + ((indice * 37) % 50)}%, color-mix(in oklab, var(--c-acento) 55%, transparent), transparent 60%),
          radial-gradient(90% 80% at 85% 90%, color-mix(in oklab, var(--c-acento2) 45%, transparent), transparent 65%),
          linear-gradient(${a}deg, var(--c-fondo2), color-mix(in oklab, var(--c-acento2) 35%, var(--c-fondo2)))`,
      }}
    >
      {!sinEtiqueta && imagen?.alt && (
        <span className="absolute bottom-3 left-3 rounded-full bg-black/35 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur-md">
          {imagen.alt}
        </span>
      )}
    </div>
  );
}

/* ---------- Íconos de marca (lucide ya no los incluye) ---------- */
export function IconoWhatsApp({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01Zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.24 8.24 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28Z" />
    </svg>
  );
}

export function IconoInstagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export { linkWhatsApp } from "@/lib/whatsapp";

/* ---------- Botones ---------- */
export function BotonPrincipal({
  href,
  children,
  icono = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  icono?: boolean;
  className?: string;
}) {
  const externo = href.startsWith("http");
  return (
    <motion.a
      href={href}
      target={externo ? "_blank" : undefined}
      rel={externo ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-acento px-7 py-4 text-[15px] font-semibold text-sobre-acento shadow-[0_10px_40px_-10px_var(--c-acento)] ${className}`}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      {icono && <IconoWhatsApp className="relative h-5 w-5" />}
      <span className="relative">{children}</span>
    </motion.a>
  );
}

export function BotonSecundario({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full border border-current/25 px-7 py-4 text-[15px] font-semibold transition-colors hover:border-current/60 ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}
