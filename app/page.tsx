import site from "@/site.config";
import type { Seccion } from "@/lib/tipos";
import { Nav } from "@/components/Nav";
import { BannerPreview, Footer, WhatsAppFlotante } from "@/components/Extras";
import { HeroCinematico } from "@/components/heros/HeroCinematico";
import { HeroDividido } from "@/components/heros/HeroDividido";
import { HeroSpotlight } from "@/components/heros/HeroSpotlight";
import { Servicios } from "@/components/secciones/Servicios";
import { Numeros } from "@/components/secciones/Numeros";
import { Galeria } from "@/components/secciones/Galeria";
import { Incluye } from "@/components/secciones/Incluye";
import { Proceso } from "@/components/secciones/Proceso";
import { Casos } from "@/components/secciones/Casos";
import { Testimonios } from "@/components/secciones/Testimonios";
import { Faq } from "@/components/secciones/Faq";
import { Ubicacion } from "@/components/secciones/Ubicacion";
import { CtaFinal } from "@/components/secciones/CtaFinal";

function renderSeccion(s: Seccion, i: number) {
  const n = site.negocio;
  switch (s.tipo) {
    case "servicios": return <Servicios key={i} {...s} />;
    case "numeros": return <Numeros key={i} {...s} />;
    case "galeria": return <Galeria key={i} {...s} />;
    case "incluye": return <Incluye key={i} {...s} />;
    case "casos": return <Casos key={i} {...s} />;
    case "proceso": return <Proceso key={i} {...s} />;
    case "testimonios": return <Testimonios key={i} {...s} />;
    case "faq": return <Faq key={i} {...s} />;
    case "ubicacion": return <Ubicacion key={i} {...s} negocio={n} />;
    case "cta": return <CtaFinal key={i} {...s} negocio={n} />;
  }
}

export default function Home() {
  const { hero, negocio } = site;
  const Hero = { cinematico: HeroCinematico, dividido: HeroDividido, spotlight: HeroSpotlight }[hero.variante];

  return (
    <>
      {site.preview && <BannerPreview />}
      <Nav negocio={negocio} links={site.nav} sobreImagen={hero.variante === "cinematico"} conBanner={site.preview} />
      <main className={site.preview ? "pt-9" : ""}>
        <Hero hero={hero} negocio={negocio} />
        <div id="contenido">{site.secciones.map(renderSeccion)}</div>
      </main>
      <Footer negocio={negocio} links={site.nav} />
      <WhatsAppFlotante negocio={negocio} />
    </>
  );
}
