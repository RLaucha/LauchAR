# Molde LaunchAR

Web premium lista en minutos: cambiás **un solo archivo** (`site.config.ts`) y tenés una web con animaciones, WhatsApp, galería, FAQ y mapa.

## Arrancar
```bash
npm install
npm run dev        # http://localhost:3000
```

## Nuevo cliente
1. Copiá esta carpeta con el nombre del cliente (o usala como template en GitHub).
2. Editá `site.config.ts`: datos del negocio, tema, hero y secciones.
3. Fotos en `public/fotos/` → `{ src: "/fotos/salon.jpg", alt: "Salón" }`.
4. `npm run build` y deploy en Vercel.

O directamente en Claude Code: *"armá una preview para [negocio], [rubro], WhatsApp [número]"* (usa la skill `launchar-web-preview`).

## Combinaciones recomendadas
| Rubro | Tema | Hero |
|---|---|---|
| Salón de eventos, quinta, casamientos | `elegante` | `cinematico` |
| Fiestas, 15 años, boliche | `noche` | `spotlight` |
| Restaurante, café, estética, spa | `fresco` | `dividido` |
| Bar, gimnasio, barbería | `urbano` | `spotlight` o `dividido` |
