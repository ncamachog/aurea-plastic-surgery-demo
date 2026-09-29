import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/reveal";
import { whatsappLink } from "@/lib/whatsapp";
import { getContent } from "@/lib/content";
import { getLocale } from "@/lib/locale";

export async function generateMetadata(): Promise<Metadata> {
  return { title: getContent(await getLocale()).processPage.metaTitle };
}

const IMGS = [
  "/images/consulta-01-inicial.jpg",
  "/images/consulta-02-plan.jpg",
  "/images/consulta-03-procedimiento.jpg",
  "/images/consulta-04-seguimiento.jpg",
];

export default async function ProcesoDeConsultaPage() {
  const t = getContent(await getLocale());
  const pg = t.processPage;
  return (
    <>
      <section className="aurea-page-hero">
        <div className="aurea-page-hero__deco">
          <Image
            src="/images/fondo-proceso-consulta.jpg"
            alt=""
            fill
            sizes="100vw"
          />
        </div>
        <div className="aurea-container" style={{ position: "relative" }}>
          <span className="aurea-kicker">{pg.kicker}</span>
          <h1>
            {pg.title[0]}
            <br />
            {pg.title[1]}
          </h1>
        </div>
      </section>

      <section className="aurea-section">
        <div className="aurea-container">
          {t.steps.map((s, i) => (
            <Reveal key={i} className="aurea-process-row">
              <span className="aurea-process-row__num">{String(i + 1).padStart(2, "0")}</span>
              <div className="aurea-process-row__media aurea-process-row__media--contain">
                <Image
                  src={IMGS[i]}
                  alt={s.title}
                  fill
                  sizes="(min-width:1024px) 45vw, 90vw"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="aurea-process-row__text">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="aurea-cta">
        <div className="aurea-container aurea-cta__inner">
          <span className="aurea-kicker">{t.cta.kicker}</span>
          <h2>
            {t.cta.title[0]}
            <br />
            {t.cta.title[1]}
          </h2>
          <p>{t.cta.text}</p>
          <div className="aurea-cta__actions">
            <a
              href={whatsappLink(t.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="aurea-btn aurea-btn--gold"
            >
              {t.ui.bookCta}
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <Link href="/procedimientos" className="aurea-btn aurea-btn--ghost-light">
              {t.ui.viewProcedures}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
