// Tipos del molde LaunchAR. No hace falta tocar este archivo:
// todo lo que cambia por cliente vive en /site.config.ts

export type NombreTema = "elegante" | "noche" | "fresco" | "urbano";
export type VarianteHero = "cinematico" | "dividido" | "spotlight";

/** Nombre de un ícono de lucide-react (https://lucide.dev/icons) */
export type Icono = string;

export type Imagen = {
  /** URL o ruta en /public (ej. "/fotos/salon-1.jpg"). Si falta, se muestra un placeholder lindo. */
  src?: string;
  alt: string;
};

export type Negocio = {
  nombre: string;
  rubro: string;
  ciudad: string;
  direccion?: string;
  /** Solo números, formato internacional AR: 549 + característica + número. Ej: 5491123456789 */
  whatsapp: string;
  mensajeWhatsapp: string;
  instagram?: string; // sin @
  email?: string;
  telefono?: string;
  horarios?: string[];
  /** Texto que se busca en Google Maps para el mapa embebido */
  mapaQuery?: string;
};

export type Hero = {
  variante: VarianteHero;
  etiqueta?: string;
  titulo: string;
  /** Palabra o frase del título que va resaltada con el color de acento */
  destacado?: string;
  subtitulo: string;
  ctaPrincipal: string;
  ctaSecundario?: { texto: string; href: string };
  imagen?: Imagen;
  /** Palabras que pasan en la cinta animada (spotlight) o chips (dividido) */
  chips?: string[];
  /** Hasta 3 datos rápidos que se muestran en el hero */
  datos?: { valor: string; label: string }[];
};

export type Seccion =
  | {
      tipo: "servicios";
      id?: string;
      etiqueta?: string;
      titulo: string;
      subtitulo?: string;
      items: { icono: Icono; titulo: string; texto: string; destacado?: boolean }[];
    }
  | {
      tipo: "numeros";
      id?: string;
      items: { valor: number; prefijo?: string; sufijo?: string; label: string }[];
    }
  | {
      tipo: "galeria";
      id?: string;
      etiqueta?: string;
      titulo: string;
      subtitulo?: string;
      fotos: Imagen[];
    }
  | {
      tipo: "casos";
      id?: string;
      etiqueta?: string;
      titulo: string;
      subtitulo?: string;
      items: { icono: Icono; cliente: string; tipo: string; texto: string; tags?: string[]; url?: string }[];
    }
  | {
      tipo: "proceso";
      id?: string;
      etiqueta?: string;
      titulo: string;
      pasos: { titulo: string; texto: string }[];
    }
  | {
      tipo: "incluye";
      id?: string;
      etiqueta?: string;
      titulo: string;
      subtitulo?: string;
      imagen?: Imagen;
      items: { icono: Icono; texto: string }[];
    }
  | {
      tipo: "testimonios";
      id?: string;
      etiqueta?: string;
      titulo: string;
      /** true = reseñas de ejemplo: se muestra un aviso "reemplazar con reseñas reales" */
      ejemplo: boolean;
      items: { texto: string; nombre: string; detalle?: string }[];
    }
  | {
      tipo: "faq";
      id?: string;
      etiqueta?: string;
      titulo: string;
      items: { pregunta: string; respuesta: string }[];
    }
  | {
      tipo: "ubicacion";
      id?: string;
      etiqueta?: string;
      titulo: string;
      texto?: string;
    }
  | {
      tipo: "cta";
      id?: string;
      titulo: string;
      texto?: string;
      boton: string;
    };

export type SiteConfig = {
  negocio: Negocio;
  tema: NombreTema;
  seo: { titulo: string; descripcion: string };
  nav: { texto: string; href: string }[];
  hero: Hero;
  secciones: Seccion[];
  /** Muestra el banner "Preview diseñada por LaunchAR". Poner en false al entregar la web final. */
  preview: boolean;
};
