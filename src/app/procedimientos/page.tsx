import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/reveal";
import { whatsappLink, AGENDAR_MESSAGE } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Procedimientos — AUREA Plastic Surgery",
};

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

const PROCEDURES = [
  {
    n: "01",
    img: "/images/proc-rinoplastia.jpg",
    title: "Rinoplastia",
    desc: "Armonía facial con resultados naturales, adaptados a cada rostro.",
  },
  {
    n: "02",
    img: "/images/proc-liposuccion.jpg",
    title: "Liposucción",
    desc: "Contorno corporal preciso y definido.",
  },
  {
    n: "03",
    img: "/images/proc-aumento-mamario.jpg",
    title: "Aumento mamario",
    desc: "Proporciones equilibradas que respetan tu anatomía.",
  },
  {
    n: "04",
    img: "/images/proc-lifting-facial.jpg",
    title: "Lifting facial",
    desc: "Rejuvenecimiento sutil, sin perder la expresión propia.",
  },
  {
    n: "05",
    img: "/images/proc-abdominoplastia.jpg",
    title: "Abdominoplastia",
    desc: "Firmeza y definición para el área abdominal.",
  },
  {
    n: "06",
    img: "/images/proc-blefaroplastia.jpg",
    title: "Blefaroplastia",
    desc: "Una mirada descansada y renovada.",
  },
];

export default function ProcedimientosPage() {
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
          <span className="aurea-kicker">Procedimientos</span>
          <h1>
            Cada procedimiento,
            <br />
            pensado a tu medida
          </h1>
        </div>
      </section>

      <section className="aurea-section">
        <div className="aurea-container">
          {PROCEDURES.map((p) => (
            <Reveal key={p.n} className="aurea-process-row">
              <span className="aurea-process-row__num">{p.n}</span>
              <div className="aurea-process-row__media">
                <Image
                  src={p.img}
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
                    href={whatsappLink(AGENDAR_MESSAGE)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aurea-btn aurea-btn--line"
                  >
                    Agendar consulta
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
          <span className="aurea-kicker">Tu momento</span>
          <h2>¿Listo para dar el siguiente paso?</h2>
          <p>
            Agenda tu primera consulta y descubre el plan pensado para tu
            anatomía y tus objetivos.
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
          </div>
        </div>
      </section>
    </>
  );
}
