import type { SiteConfig } from "@/lib/tipos";

// ─────────────────────────────────────────────────────────────
//  ESTE ES EL ÚNICO ARCHIVO QUE SE CAMBIA POR CLIENTE.
//  Web propia de LaunchAR (agencia). Contenido migrado de lauchar.dev.
// ─────────────────────────────────────────────────────────────

const site: SiteConfig = {
  preview: false,
  tema: "urbano", // "elegante" | "noche" | "fresco" | "urbano"

  negocio: {
    nombre: "LaunchAR",
    rubro: "Webs, apps y automatizaciones",
    ciudad: "Buenos Aires, Argentina",
    whatsapp: "5491167214914",
    mensajeWhatsapp: "¡Hola LaunchAR! Vi la web y quería pedir un diagnóstico para mi negocio.",
    instagram: "lauchar.dev",
    email: "proyectos@lauchar.dev",
  },

  seo: {
    titulo: "LaunchAR · Webs, apps y automatizaciones para pymes y founders",
    descripcion:
      "Webs y apps que venden, y automatizaciones con n8n que te ahorran horas. Diagnóstico y preview gratis antes de arrancar.",
  },

  nav: [
    { texto: "Servicios", href: "#servicios" },
    { texto: "Casos", href: "#casos" },
    { texto: "Proceso", href: "#proceso" },
    { texto: "Preguntas", href: "#faq" },
  ],

  hero: {
    variante: "spotlight", // "cinematico" | "dividido" | "spotlight"
    etiqueta: "Disponible para nuevos proyectos",
    titulo: "Tu negocio necesita más ventas, no otra página web",
    destacado: "ventas",
    subtitulo:
      "Hacemos webs y apps para pymes y founders, y automatizamos lo repetitivo con n8n. Antes de que pongas un peso, te mostramos una preview gratis.",
    ctaPrincipal: "Pedir diagnóstico gratis",
    ctaSecundario: { texto: "Ver casos", href: "#casos" },
    chips: ["Webs", "Apps a medida", "Automatizaciones n8n", "E-commerce", "Redes", "IA aplicada"],
  },

  secciones: [
    {
      tipo: "servicios",
      id: "servicios",
      etiqueta: "Lo que hacemos",
      titulo: "Tecnología al servicio de tu crecimiento",
      subtitulo: "Para negocios que quieren dejar de improvisar y empezar a escalar.",
      items: [
        {
          icono: "Code",
          titulo: "Webs que venden",
          texto: "Sitios rápidos, pensados para el celular y con WhatsApp a un toque. Diseño a medida, SEO técnico y carga en menos de 3 segundos.",
          destacado: true,
        },
        { icono: "Smartphone", titulo: "Apps y sistemas a medida", texto: "Turnos, pedidos, paneles internos o tu MVP: lo que tu negocio necesita, sin plantillas." },
        { icono: "Workflow", titulo: "Automatizaciones con n8n", texto: "Conectamos tus herramientas para que los mensajes, planillas y avisos se hagan solos." },
        { icono: "ShoppingBag", titulo: "Tiendas y catálogos", texto: "Catálogos online y checkout sin fricción para que tus clientes compren sin vueltas." },
        { icono: "Megaphone", titulo: "Gestión de redes", texto: "Contenido y calendario para que tu marca se vea profesional y constante." },
        { icono: "Bot", titulo: "IA aplicada", texto: "Chatbots y asistentes que responden consultas y ordenan la info mientras dormís." },
      ],
    },
    {
      tipo: "casos",
      id: "casos",
      etiqueta: "Casos",
      titulo: "Proyectos reales, negocios reales",
      subtitulo: "Así acompañamos a quienes ya confiaron en nosotros.",
      items: [
        {
          icono: "PartyPopper",
          cliente: "Quinta Repetto",
          tipo: "Web · Salón de eventos",
          texto: "Web para el salón con los espacios, los tipos de evento y consulta de fechas directo por WhatsApp.",
          tags: ["Diseño a medida", "Mobile-first", "WhatsApp"],
        },
        {
          icono: "GraduationCap",
          cliente: "CSMA",
          tipo: "Redes · Colegio",
          texto: "Gestión de las redes del colegio: contenido, calendario de publicaciones y comunicación con las familias.",
          tags: ["Contenido", "Calendario", "Comunidad"],
        },
      ],
    },
    {
      tipo: "proceso",
      id: "proceso",
      etiqueta: "Cómo trabajamos",
      titulo: "De la idea a tu web en 4 pasos",
      pasos: [
        { titulo: "Diagnóstico", texto: "Una charla corta para entender tu negocio, tus clientes y qué necesitás de verdad." },
        { titulo: "Preview gratis", texto: "Te armamos una propuesta de diseño para que la veas antes de decidir. Sin compromiso." },
        { titulo: "Desarrollo", texto: "Construimos con código limpio y rápido, y te mostramos avances en cada etapa." },
        { titulo: "Entrega y soporte", texto: "Publicamos, te explicamos cómo usarla y seguimos cerca para ajustes y mejoras." },
      ],
    },
    {
      tipo: "faq",
      id: "faq",
      etiqueta: "Preguntas frecuentes",
      titulo: "Resolvé tus dudas",
      items: [
        { pregunta: "¿Cuánto tarda un proyecto?", respuesta: "Depende del alcance. Una landing se entrega en 1 a 2 semanas; un sitio completo o una app, entre 3 y 5. Siempre definimos plazos claros antes de arrancar." },
        { pregunta: "¿Qué es la preview gratis?", respuesta: "Una propuesta de diseño real, online, con tu marca y tu rubro. La ves desde el celular y recién ahí decidís si seguimos." },
        { pregunta: "¿Qué puedo automatizar con n8n?", respuesta: "Respuestas y avisos por WhatsApp o mail, carga de pedidos en planillas, recordatorios de turnos, reportes y todo lo que hoy hacés a mano una y otra vez." },
        { pregunta: "¿Incluye dominio y hosting?", respuesta: "Nos encargamos de toda la configuración técnica. Si ya tenés dominio, nos adaptamos; si no, te recomendamos la mejor opción para tu caso." },
        { pregunta: "¿Qué pasa después de la entrega?", respuesta: "No te dejamos solo: ofrecemos soporte, mantenimiento y mejoras continuas para que tu web crezca con tu negocio." },
      ],
    },
    {
      tipo: "cta",
      id: "contacto",
      titulo: "¿Tenés un proyecto en mente?",
      texto: "Contanos qué necesitás y te respondemos en menos de 24 horas con un primer diagnóstico.",
      boton: "Hablemos por WhatsApp",
    },
  ],
};

export default site;
