import type { SiteConfig } from "@/lib/tipos";

// Ejemplo: salón de fiestas / 15 años / eventos nocturnos (negocio ficticio).
// Hero "spotlight" + tema "noche". Para usarlo: copiá este contenido en /site.config.ts

const site: SiteConfig = {
  preview: true,
  tema: "noche",
  negocio: {
    nombre: "Club Neón",
    rubro: "Salón de fiestas",
    ciudad: "Caballito, CABA",
    direccion: "Av. Rivadavia 5000, Caballito",
    whatsapp: "5491100000000",
    mensajeWhatsapp: "¡Hola! Quería consultar por una fiesta.",
    instagram: "club.neon",
    horarios: ["Atención: lunes a viernes de 11 a 20 h"],
    mapaQuery: "Caballito, CABA",
  },
  seo: {
    titulo: "Club Neón · Salón de fiestas en Caballito",
    descripcion: "15 años, cumpleaños y fiestas privadas con pista LED, DJ y barra. Consultá tu fecha.",
  },
  nav: [
    { texto: "Fiestas", href: "#fiestas" },
    { texto: "El salón", href: "#galeria" },
    { texto: "Incluye", href: "#incluye" },
    { texto: "Preguntas", href: "#faq" },
  ],
  hero: {
    variante: "spotlight",
    etiqueta: "Fechas 2027 disponibles",
    titulo: "La fiesta que todos van a recordar",
    destacado: "todos van a recordar",
    subtitulo: "Pista LED, sonido de boliche, DJ y barra libre. Vos traés a los invitados, nosotros la noche.",
    ctaPrincipal: "Consultar mi fecha",
    ctaSecundario: { texto: "Ver el salón", href: "#galeria" },
    chips: ["15 años", "Cumpleaños", "Egresos", "Fiestas privadas", "After office"],
  },
  secciones: [
    {
      tipo: "numeros",
      items: [
        { valor: 300, label: "invitados" },
        { valor: 800, prefijo: "+", label: "fiestas hechas" },
        { valor: 12, sufijo: "k", label: "watts de sonido" },
        { valor: 5, sufijo: " h", label: "de fiesta" },
      ],
    },
    {
      tipo: "servicios",
      id: "fiestas",
      etiqueta: "Fiestas",
      titulo: "Armamos la noche a tu medida",
      items: [
        { icono: "Sparkles", titulo: "15 años", texto: "Entrada con humo, video y vals con luces para la noche más importante.", destacado: true },
        { icono: "Cake", titulo: "Cumpleaños", texto: "De 18, 30 o 50: la pista es tuya." },
        { icono: "GraduationCap", titulo: "Egresos", texto: "Seguridad, pulseras y control de acceso." },
        { icono: "PartyPopper", titulo: "Privadas", texto: "Lo que se te ocurra, lo hacemos." },
        { icono: "Briefcase", titulo: "Empresas", texto: "Fiestas de fin de año y after office." },
      ],
    },
    {
      tipo: "galeria",
      id: "galeria",
      etiqueta: "El salón",
      titulo: "Pista, luces y barra",
      fotos: [
        { alt: "Pista LED" },
        { alt: "Cabina de DJ" },
        { alt: "Barra de tragos" },
        { alt: "Living VIP" },
        { alt: "Entrada con humo" },
        { alt: "Show de luces" },
      ],
    },
    {
      tipo: "incluye",
      id: "incluye",
      etiqueta: "Todo incluido",
      titulo: "Llegás y la fiesta ya está armada",
      items: [
        { icono: "Music", texto: "DJ y sonido profesional" },
        { icono: "Zap", texto: "Pista LED y show de luces" },
        { icono: "Wine", texto: "Barra libre sin alcohol para menores" },
        { icono: "UtensilsCrossed", texto: "Catering y mesa dulce" },
        { icono: "Camera", texto: "Cabina de fotos 360°" },
        { icono: "ShieldCheck", texto: "Seguridad y ambulancia" },
      ],
    },
    {
      tipo: "faq",
      id: "faq",
      etiqueta: "Preguntas",
      titulo: "Lo que todos preguntan",
      items: [
        { pregunta: "¿Hasta qué hora es la fiesta?", respuesta: "Los paquetes son de 5 horas, con posibilidad de extender." },
        { pregunta: "¿Se puede pagar en cuotas?", respuesta: "Sí, con una seña reservás la fecha y el resto en cuotas." },
      ],
    },
    { tipo: "cta", titulo: "Las mejores fechas vuelan", texto: "Consultá disponibilidad hoy sin compromiso.", boton: "Consultar por WhatsApp" },
  ],
};

export default site;
