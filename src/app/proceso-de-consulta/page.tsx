import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/reveal";
import { whatsappLink, AGENDAR_MESSAGE } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Proceso de Consulta — AUREA Plastic Surgery",
};

const STEPS = [
  {
    n: "01",
    img: "/images/consulta-01-inicial.jpg",
    title: "Consulta inicial",
    desc: "Conversamos sobre tus objetivos y evaluamos tu caso en detalle.",
  },
  {
    n: "02",
    img: "/images/consulta-02-plan.jpg",
    title: "Plan personalizado",
    desc: "Diseñamos una propuesta adaptada a tu anatomía y expectativas.",
  },
  {
    n: "03",
    img: "/images/consulta-03-procedimiento.jpg",
    title: "Procedimiento",
    desc: "Ejecutamos el plan acordado con los más altos estándares de precisión.",
  },
  {
    n: "04",
    img: "/images/consulta-04-seguimiento.jpg",
    title: "Seguimiento",
    desc: "Te acompañamos en cada etapa de tu recuperación.",
  },
];

export default function ProcesoDeConsultaPage() {
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
          <span className="aurea-kicker">El proceso</span>
          <h1>
            Un camino claro,
            <br />
            paso a paso
          </h1>
        </div>
      </section>

      <section className="aurea-section">
        <div className="aurea-container">
          {STEPS.map((s) => (
            <Reveal key={s.n} className="aurea-process-row">
              <span className="aurea-process-row__num">{s.n}</span>
              <div className="aurea-process-row__media aurea-process-row__media--contain">
                <Image
                  src={s.img}
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
          <span className="aurea-kicker">Tu momento</span>
          <h2>
            Tu piel, tu decisión,
            <br />
            tu momento
          </h2>
          <p>
            Explora nuestros procedimientos o agenda tu primera consulta y
            descubre el camino pensado para ti.
          </p>
          <div className="aurea-cta__actions">
            <a
              href={whatsappLink(AGENDAR_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="aurea-btn aurea-btn--gold"
            >
              Agenda tu consulta
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
              Ver procedimientos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
