import type { SiteConfig } from "@/lib/tipos";

// Ejemplo: restaurante / café (negocio ficticio). Hero "dividido" + tema "fresco".
// Para usarlo: copiá este contenido en /site.config.ts

const site: SiteConfig = {
  preview: true,
  tema: "fresco",
  negocio: {
    nombre: "Huerta Cocina",
    rubro: "Restaurante de estación",
    ciudad: "Palermo, CABA",
    direccion: "Gorriti 4800, Palermo",
    whatsapp: "5491100000000",
    mensajeWhatsapp: "¡Hola! Quería reservar una mesa.",
    instagram: "huerta.cocina",
    horarios: ["Martes a domingo de 12 a 16 h y de 20 a 00 h"],
    mapaQuery: "Gorriti 4800, Palermo, CABA",
  },
  seo: {
    titulo: "Huerta Cocina · Restaurante de estación en Palermo",
    descripcion: "Cocina de estación con productos de huerta propia. Reservá tu mesa por WhatsApp.",
  },
  nav: [
    { texto: "Carta", href: "#carta" },
    { texto: "El lugar", href: "#galeria" },
    { texto: "Preguntas", href: "#faq" },
    { texto: "Cómo llegar", href: "#ubicacion" },
  ],
  hero: {
    variante: "dividido",
    etiqueta: "Abierto hoy · Palermo",
    titulo: "Cocina de estación, de la huerta a tu mesa",
    destacado: "de la huerta",
    subtitulo: "Platos que cambian con cada temporada, vinos de pequeños productores y una terraza para quedarse toda la tarde.",
    ctaPrincipal: "Reservar mesa",
    ctaSecundario: { texto: "Ver la carta", href: "#carta" },
    chips: ["Almuerzos", "Cenas", "Brunch"],
    datos: [
      { valor: "4.8★", label: "en Google" },
      { valor: "60", label: "cubiertos" },
      { valor: "100%", label: "de estación" },
    ],
  },
  secciones: [
    {
      tipo: "servicios",
      id: "carta",
      etiqueta: "La carta",
      titulo: "Lo que vas a encontrar",
      items: [
        { icono: "ChefHat", titulo: "Menú de pasos", texto: "Cinco tiempos que cambian cada mes según lo que da la huerta.", destacado: true },
        { icono: "Leaf", titulo: "Opciones veggie", texto: "La mitad de la carta es vegetariana." },
        { icono: "Wine", titulo: "Vinos naturales", texto: "Etiquetas de bodegas chicas." },
        { icono: "Coffee", titulo: "Brunch", texto: "Sábados y domingos de 10 a 13 h." },
        { icono: "Users", titulo: "Eventos privados", texto: "La terraza para grupos de hasta 30." },
        { icono: "Truck", titulo: "Take away", texto: "Retirá tus platos favoritos." },
      ],
    },
    {
      tipo: "galeria",
      id: "galeria",
      etiqueta: "El lugar",
      titulo: "Una casona con terraza",
      fotos: [
        { alt: "Salón principal" },
        { alt: "Plato de estación" },
        { alt: "Terraza" },
        { alt: "Barra de vinos" },
        { alt: "Huerta propia" },
        { alt: "Postre de la casa" },
      ],
    },
    {
      tipo: "testimonios",
      etiqueta: "Reseñas",
      titulo: "Lo que dicen en Google",
      ejemplo: true,
      items: [
        { texto: "El menú de pasos es una experiencia. Todo fresquísimo.", nombre: "Reseña de ejemplo" },
        { texto: "La terraza un domingo al sol, imperdible.", nombre: "Reseña de ejemplo" },
        { texto: "Atención impecable y muy buenos vinos.", nombre: "Reseña de ejemplo" },
      ],
    },
    {
      tipo: "faq",
      id: "faq",
      etiqueta: "Preguntas",
      titulo: "Antes de venir",
      items: [
        { pregunta: "¿Hace falta reservar?", respuesta: "Para la cena de viernes y sábado, sí. Al mediodía suele haber lugar." },
        { pregunta: "¿Aceptan mascotas?", respuesta: "Sí, en la terraza." },
        { pregunta: "¿Tienen opciones sin TACC?", respuesta: "Sí, avisanos al reservar y adaptamos el menú." },
      ],
    },
    { tipo: "ubicacion", id: "ubicacion", etiqueta: "Cómo llegar", titulo: "En el corazón de Palermo Soho" },
    { tipo: "cta", titulo: "¿Te guardamos una mesa?", texto: "Reservá en un minuto por WhatsApp.", boton: "Reservar por WhatsApp" },
  ],
};

export default site;
