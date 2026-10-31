import type { Metadata } from "next";
import type { CSSProperties } from "react";
import "./globals.css";
import site from "@/site.config";
import { temas, variablesTema } from "@/lib/temas";

export const metadata: Metadata = {
  title: site.seo.titulo,
  description: site.seo.descripcion,
  openGraph: { title: site.seo.titulo, description: site.seo.descripcion, locale: "es_AR", type: "website" },
  robots: site.preview ? { index: false, follow: false } : undefined,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const tema = temas[site.tema];
  return (
    <html lang="es-AR" style={variablesTema(tema) as CSSProperties} className={tema.modo === "oscuro" ? "dark" : ""}>
      <body>{children}</body>
    </html>
  );
}
