import type { NombreTema } from "./tipos";

// Cada tema define paleta + tipografías. Se aplican como variables CSS en <html>.
// Para un cliente con colores de marca propios, duplicá un tema y cambiá los hex.

export type Tema = {
  modo: "claro" | "oscuro";
  fondo: string;
  fondo2: string; // superficies / cards
  texto: string;
  suave: string; // texto secundario
  borde: string;
  acento: string;
  acento2: string;
  sobreAcento: string; // texto encima del acento
  banda: string; // fondo oscuro de la banda CTA final
  display: string; // fuente de títulos
  cuerpo: string; // fuente de texto
  displayPeso: number;
  displayTracking: string;
  /** Títulos en itálica para el destacado (queda muy bien en serif) */
  destacadoItalica: boolean;
};

export const temas: Record<NombreTema, Tema> = {
  // Salones, casamientos, quintas, hoteles boutique
  elegante: {
    modo: "claro",
    fondo: "#f6f1e9",
    fondo2: "#ede5d8",
    texto: "#1d1915",
    suave: "#6b6157",
    borde: "#d9cfc0",
    acento: "#a57f4a",
    acento2: "#3d342b",
    sobreAcento: "#fffaf2",
    banda: "#2a221b",
    display: "'Cormorant Garamond Variable', Georgia, serif",
    cuerpo: "'Manrope Variable', system-ui, sans-serif",
    displayPeso: 500,
    displayTracking: "-0.02em",
    destacadoItalica: true,
  },
  // Salones de fiesta, boliches, 15 años, eventos nocturnos
  noche: {
    modo: "oscuro",
    fondo: "#09080d",
    fondo2: "#14121c",
    texto: "#f3f0fa",
    suave: "#9d97ad",
    borde: "#262236",
    acento: "#a78bfa",
    acento2: "#f472b6",
    sobreAcento: "#0b0812",
    banda: "#1b1530",
    display: "'Space Grotesk Variable', system-ui, sans-serif",
    cuerpo: "'Manrope Variable', system-ui, sans-serif",
    displayPeso: 600,
    displayTracking: "-0.04em",
    destacadoItalica: false,
  },
  // Gastronomía saludable, estética, bienestar, quintas con verde
  fresco: {
    modo: "claro",
    fondo: "#f7f8f4",
    fondo2: "#e9ede3",
    texto: "#18211b",
    suave: "#5d6a60",
    borde: "#d3dccf",
    acento: "#3f6b4f",
    acento2: "#c9a35a",
    sobreAcento: "#f7f8f4",
    banda: "#1d2b22",
    display: "'Fraunces Variable', Georgia, serif",
    cuerpo: "'Manrope Variable', system-ui, sans-serif",
    displayPeso: 500,
    displayTracking: "-0.03em",
    destacadoItalica: true,
  },
  // Bares, gimnasios, barberías, marcas jóvenes
  urbano: {
    modo: "oscuro",
    fondo: "#0e0e0e",
    fondo2: "#191919",
    texto: "#f5f3ee",
    suave: "#a19d94",
    borde: "#2b2b2b",
    acento: "#ff5b1f",
    acento2: "#ffd23f",
    sobreAcento: "#0e0e0e",
    banda: "#1d1d1d",
    display: "'Bricolage Grotesque Variable', system-ui, sans-serif",
    cuerpo: "'Manrope Variable', system-ui, sans-serif",
    displayPeso: 700,
    displayTracking: "-0.045em",
    destacadoItalica: false,
  },
};

export function variablesTema(t: Tema): Record<string, string> {
  return {
    "--c-fondo": t.fondo,
    "--c-fondo2": t.fondo2,
    "--c-texto": t.texto,
    "--c-suave": t.suave,
    "--c-borde": t.borde,
    "--c-acento": t.acento,
    "--c-acento2": t.acento2,
    "--c-sobre-acento": t.sobreAcento,
    "--c-banda": t.banda,
    "--f-display": t.display,
    "--f-cuerpo": t.cuerpo,
    "--display-peso": String(t.displayPeso),
    "--display-tracking": t.displayTracking,
    "--destacado-estilo": t.destacadoItalica ? "italic" : "normal",
  };
}
