import { Clock, Mail, MapPin } from "lucide-react";
import { linkWhatsApp } from "@/lib/whatsapp";
import type { Negocio, Seccion } from "@/lib/tipos";
import { Aparecer, Encabezado, IconoWhatsApp } from "@/components/ui/basicos";

type Props = Extract<Seccion, { tipo: "ubicacion" }> & { negocio: Negocio };

export function Ubicacion({ negocio, ...s }: Props) {
  const q = encodeURIComponent(negocio.mapaQuery ?? negocio.direccion ?? negocio.ciudad);
  return (
    <section id={s.id} className="seccion">
      <div className="contenedor grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <div>
          <Encabezado etiqueta={s.etiqueta} titulo={s.titulo} subtitulo={s.texto} />
          <Aparecer delay={0.1}>
            <ul className="mt-10 space-y-5">
              {negocio.direccion && (
                <li className="flex gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-acento" />
                  <span>{negocio.direccion}</span>
                </li>
              )}
              {negocio.horarios?.map((h) => (
                <li key={h} className="flex gap-4">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-acento" />
                  <span>{h}</span>
                </li>
              ))}
              <li className="flex gap-4">
                <IconoWhatsApp className="mt-0.5 h-5 w-5 shrink-0 text-acento" />
                <a className="underline-offset-4 hover:underline" href={linkWhatsApp(negocio.whatsapp, negocio.mensajeWhatsapp)} target="_blank" rel="noopener noreferrer">
                  Escribinos por WhatsApp
                </a>
              </li>
              {negocio.email && (
                <li className="flex gap-4">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-acento" />
                  <a className="underline-offset-4 hover:underline" href={`mailto:${negocio.email}`}>{negocio.email}</a>
                </li>
              )}
            </ul>
          </Aparecer>
        </div>
        <Aparecer delay={0.15} className="min-h-[22rem] overflow-hidden rounded-[2rem] border border-borde">
          <iframe
            title={`Mapa de ${negocio.nombre}`}
            src={`https://www.google.com/maps?q=${q}&output=embed`}
            className="h-full min-h-[22rem] w-full grayscale-[35%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Aparecer>
      </div>
    </section>
  );
}
