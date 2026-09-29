import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/reveal";
import { whatsappLink } from "@/lib/whatsapp";
import { getContent } from "@/lib/content";
import { getLocale } from "@/lib/locale";

export async function generateMetadata(): Promise<Metadata> {
  return { title: getContent(await getLocale()).proceduresPage.metaTitle };
}

const ARROW_SM = (
  <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IMGS = [
  "/images/proc-rinoplastia.jpg",
  "/images/proc-liposuccion.jpg",
  "/images/proc-aumento-mamario.jpg",
  "/images/proc-lifting-facial.jpg",
  "/images/proc-abdominoplastia.jpg",
  "/images/proc-blefaroplastia.jpg",
];

export default async function ProcedimientosPage() {
  const t = getContent(await getLocale());
  const pg = t.proceduresPage;
  return (
    <>
      <section className="aurea-page-hero">
        <div className="aurea-page-hero__deco">
          <Image
            src="/images/fondo-procedimientos.jpg"
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
          {t.procedures.map((p, i) => (
            <Reveal key={i} className="aurea-process-row">
              <span className="aurea-process-row__num">{String(i + 1).padStart(2, "0")}</span>
              <div className="aurea-process-row__media">
                <Image
                  src={IMGS[i]}
                  alt={p.title}
                  fill
                  sizes="(min-width:1024px) 45vw, 90vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="aurea-process-row__text">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div style={{ marginTop: "1.4rem" }}>
                  <a
                    href={whatsappLink(t.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aurea-btn aurea-btn--line"
                  >
                    {t.ui.book}
                    {ARROW_SM}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="aurea-cta">
        <div className="aurea-container aurea-cta__inner">
          <span className="aurea-kicker">{t.cta.kicker}</span>
          <h2>{pg.ctaTitle}</h2>
          <p>{pg.ctaText}</p>
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
          </div>
        </div>
      </section>
    </>
  );
}
