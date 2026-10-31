import { Star } from "lucide-react";
import type { Seccion } from "@/lib/tipos";
import { Encabezado } from "@/components/ui/basicos";

type Props = Extract<Seccion, { tipo: "testimonios" }>;

function Tarjeta({ t }: { t: Props["items"][number] }) {
  return (
    <figure className="w-[20rem] shrink-0 rounded-3xl border border-borde bg-fondo2/60 p-7 md:w-[24rem]">
      <div className="flex gap-0.5 text-acento">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <blockquote className="font-display mt-5 text-2xl leading-snug">“{t.texto}”</blockquote>
      <figcaption className="mt-6 text-sm">
        <span className="font-semibold">{t.nombre}</span>
        {t.detalle && <span className="text-suave"> · {t.detalle}</span>}
      </figcaption>
    </figure>
  );
}

export function Testimonios(s: Props) {
  const fila = [...s.items, ...s.items];
  return (
    <section id={s.id} className="seccion overflow-hidden">
      <div className="contenedor">
        <Encabezado etiqueta={s.etiqueta} titulo={s.titulo} />
        {s.ejemplo && (
          <p className="mt-4 inline-flex rounded-full border border-dashed border-acento/60 px-4 py-1.5 text-xs text-acento">
            Reseñas de ejemplo — se reemplazan por reseñas reales del negocio
          </p>
        )}
      </div>
      <div className="cinta-pausa mt-12 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="cinta flex w-max gap-5 px-2.5" style={{ ["--dur" as string]: "55s" }}>
          {[...fila, ...fila].map((t, i) => (
            <Tarjeta key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
