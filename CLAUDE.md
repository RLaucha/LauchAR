# Molde LauchAR — instrucciones para Claude Code

Esto es un molde de webs premium para clientes/prospectos de LauchAR.
Next.js 16 + Tailwind 4 + Motion. Todo en español rioplatense (voseo).

## Regla de oro
**Para un cliente nuevo solo se toca `site.config.ts`** (y se agregan fotos en `public/fotos/`).
No reescribir componentes salvo que el cliente pida algo que el molde no tiene.

## Piezas disponibles
- Temas (`lib/temas.ts`): `elegante` (salones, casamientos), `noche` (fiestas, 15), `fresco` (gastronomía, estética, bienestar), `urbano` (bares, gimnasios, barberías). Para colores de marca propios, duplicar un tema.
- Heros: `cinematico` (foto pantalla completa con parallax — necesita una buena foto), `dividido` (texto + collage de 3 fotos), `spotlight` (aurora + luz que sigue al mouse + cinta; ideal con `noche`/`urbano`, no necesita fotos).
- Secciones (en el orden que se pongan en `secciones`): `servicios`, `numeros`, `galeria`, `incluye`, `proceso`, `testimonios`, `faq`, `ubicacion`, `cta`.
- Íconos: nombres de `lib/iconos.ts`. Si hace falta otro, importarlo de lucide-react y sumarlo al mapa.
- Ejemplos completos para copiar: `ejemplos/restaurante.config.ts`, `ejemplos/fiestas-noche.config.ts`.

## Reglas de contenido
- Nunca lorem ipsum: textos reales y creíbles para el rubro.
- WhatsApp en formato 549 + área + número, solo dígitos.
- Reseñas: si no son reales, `ejemplo: true` y nombre "Reseña de ejemplo". Nunca inventar nombres de clientes como si fueran reales.
- `preview: true` muestra el banner "Propuesta de diseño por LauchAR" y pone noindex. Al entregar la web final: `preview: false`.
- Fotos: `public/fotos/...` y referenciarlas como `{ src: "/fotos/x.jpg", alt: "..." }`. Sin `src` se muestra un placeholder con los colores del tema.

## Grillas sin huecos
- `servicios`: con 1 ítem `destacado`, usar 5 u 8 ítems más (o 4 si son 4 columnas). La grilla elige 3 o 4 columnas sola.
- `galeria`: 6 fotos es el número ideal (bento 4×3 perfecto).

## Antes de deployar
`npm run build` sin errores, revisar en 375px y desktop. Deploy: `vercel --prod` (o push a GitHub conectado a Vercel).
