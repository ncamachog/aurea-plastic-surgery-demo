import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/reveal";
import { whatsappLink, AGENDAR_MESSAGE } from "@/lib/whatsapp";

const ARROW = (
  <svg viewBox="0 0 24 24" fill="none">
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DIFFERENTIATORS = [
  {
    n: "01",
    title: "Atención personalizada",
    desc: "Cada plan quirúrgico se diseña a partir de tu anatomía y tus objetivos.",
  },
  {
    n: "02",
    title: "Tecnología de vanguardia",
    desc: "Instalaciones y equipamiento pensados para la precisión y la seguridad.",
  },
  {
    n: "03",
    title: "Acompañamiento integral",
    desc: "Del diagnóstico inicial al seguimiento posoperatorio, un mismo equipo te acompaña.",
  },
  {
    n: "04",
    title: "Discreción y confianza",
    desc: "Un entorno privado y humano, donde cada decisión se toma con información clara.",
  },
];

const PROCEDURES = [
  {
    n: "01",
    img: "/images/proc-rinoplastia.jpg",
    title: "Rinoplastia",
    desc: "Armonía facial con resultados naturales, adaptados a cada rostro.",
    className: "aurea-proc-card--wide aurea-proc-card--tall",
  },
  {
    n: "02",
    img: "/images/proc-liposuccion.jpg",
    title: "Liposucción",
    desc: "Contorno corporal preciso y definido.",
    className: "aurea-proc-card--wide",
  },
  {
    n: "03",
    img: "/images/proc-aumento-mamario.jpg",
    title: "Aumento mamario",
    desc: "Proporciones equilibradas que respetan tu anatomía.",
    className: "aurea-proc-card--wide",
  },
  {
    n: "04",
    img: "/images/proc-lifting-facial.jpg",
    title: "Lifting facial",
    desc: "Rejuvenecimiento sutil, sin perder la expresión propia.",
    className: "aurea-proc-card--std",
  },
  {
    n: "05",
    img: "/images/proc-abdominoplastia.jpg",
    title: "Abdominoplastia",
    desc: "Firmeza y definición para el área abdominal.",
    className: "aurea-proc-card--std",
  },
  {
    n: "06",
    img: "/images/proc-blefaroplastia.jpg",
    title: "Blefaroplastia",
    desc: "Una mirada descansada y renovada.",
    className: "aurea-proc-card--std",
  },
];

const TEAM = [
  { name: "Dra. Laura Sofía Medina", role: "Directora médica · Cirugía Plástica" },
  { name: "Dr. Andrés Salgado", role: "Cirugía Plástica y Reconstructiva" },
  { name: "Dra. Camila Torres", role: "Cirugía Plástica" },
  { name: "Dr. Mateo Restrepo", role: "Anestesiología" },
  { name: "Valentina Rojas", role: "Enfermería Quirúrgica" },
  { name: "Daniela Pardo", role: "Instrumentación Quirúrgica" },
];

const STEPS = [
  {
    n: "01",
    title: "Consulta inicial",
    desc: "Conversamos sobre tus objetivos y evaluamos tu caso en detalle.",
  },
  {
    n: "02",
    title: "Plan personalizado",
    desc: "Diseñamos una propuesta adaptada a tu anatomía y expectativas.",
  },
  {
    n: "03",
    title: "Procedimiento",
    desc: "Ejecutamos el plan acordado con los más altos estándares de precisión.",
  },
  {
    n: "04",
    title: "Seguimiento",
    desc: "Te acompañamos en cada etapa de tu recuperación.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* 01 — HERO */}
      <section className="aurea-hero">
        <div className="aurea-hero__media">
          <Image
            src="/images/plastic-surgery-trends-2023.webp"
            alt="Precisión y planificación previa a un procedimiento estético"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "50% 40%" }}
          />
        </div>
        <div className="aurea-hero__scrim"></div>
        <div className="aurea-hero__content aurea-container">
          <span className="aurea-kicker">Aurea Plastic Surgery</span>
          <h1>Cirugía plástica con propósito</h1>
          <div className="aurea-hero__row">
            <p className="aurea-lead">
              Explora nuestros procedimientos o agenda tu primera consulta y
              descubre el camino pensado para ti.
            </p>
            <a
              href={whatsappLink(AGENDAR_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="aurea-btn aurea-btn--gold"
            >
              Agenda tu consulta
              {ARROW}
            </a>
          </div>
        </div>
        <span className="aurea-hero__scroll">Descubre</span>
      </section>

      {/* 02 — FILOSOFÍA + DIFERENCIADORES */}
      <section className="aurea-section">
        <div className="aurea-container">
          <div className="aurea-intro">
            <Reveal className="aurea-intro__text">
              <span className="aurea-kicker">La clínica</span>
              <h2 className="aurea-h2">Un enfoque distinto en cada detalle</h2>
            </Reveal>
            <Reveal className="aurea-intro__media">
              <Image
                src="/images/la-clinica.jpg"
                alt="Fachada de Aurea Plastic Surgery al atardecer"
                fill
                sizes="(min-width:1024px) 40vw, 90vw"
                style={{ objectFit: "cover" }}
              />
            </Reveal>
          </div>

          <div className="aurea-diffs">
            {DIFFERENTIATORS.map((d) => (
              <Reveal key={d.n} className="aurea-diffs__item">
                <span className="aurea-diffs__num">{d.n}</span>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — PROCEDIMIENTOS DESTACADOS */}
      <section className="aurea-section" style={{ paddingTop: 0 }}>
        <div className="aurea-container">
          <Reveal className="aurea-procs__head">
            <div>
              <span className="aurea-kicker">Procedimientos</span>
              <h2 className="aurea-h2" style={{ marginTop: "1.1rem" }}>
                Cada procedimiento,
                <br />
                pensado a tu medida
              </h2>
            </div>
            <Link href="/procedimientos" className="aurea-btn aurea-btn--line">
              Ver todos los procedimientos
              {ARROW}
            </Link>
          </Reveal>

          <div className="aurea-procs__grid">
            {PROCEDURES.map((p) => (
              <div key={p.n} className={`aurea-proc-card ${p.className} reveal is-visible`}>
                <div className="aurea-proc-card__media">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes="(min-width:1024px) 33vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="aurea-proc-card__label">
                  <span className="n">{p.n}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — CIRUJANO / EQUIPO */}
      <section className="aurea-section aurea-section--dark">
        <div className="aurea-container aurea-surgeon">
          <Reveal className="aurea-surgeon__media">
            <Image
              src="/images/aurea-equipo-directora.jpg"
              alt="Dra. Laura Sofía Medina, directora médica de Aurea Plastic Surgery"
              fill
              sizes="(min-width:1024px) 40vw, 90vw"
              style={{ objectFit: "cover" }}
            />
          </Reveal>
          <Reveal className="aurea-surgeon__text">
            <span className="aurea-kicker on-dark">El equipo</span>
            <h2 className="aurea-h2 on-dark">
              Detrás de cada resultado, un equipo dedicado
            </h2>
            <p className="aurea-lead">
              Acompañamos cada procedimiento con el mismo equipo, del
              diagnóstico inicial al seguimiento posoperatorio.
            </p>
            <div className="aurea-surgeon__facts">
              <span className="aurea-surgeon__name">Dra. Laura Sofía Medina</span>
              <span className="aurea-surgeon__role">
                Directora médica · Cirugía Plástica, Estética y Reconstructiva
              </span>
            </div>
          </Reveal>
        </div>

        <div className="aurea-container aurea-team">
          <Reveal className="aurea-team__photo">
            <Image
              src="/images/aurea-equipo-completo.jpg"
              alt="Equipo clínico de Aurea Plastic Surgery"
              fill
              sizes="(min-width:1024px) 80vw, 92vw"
              style={{ objectFit: "cover" }}
            />
          </Reveal>
          <Reveal className="aurea-team__grid">
            {TEAM.map((t) => (
              <div key={t.name} className="aurea-team__member">
                <span className="aurea-team__member-name">{t.name}</span>
                <span className="aurea-team__member-role">{t.role}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 05 — PROCESO (teaser) */}
      <section className="aurea-section">
        <div className="aurea-container">
          <Reveal className="aurea-steps__head">
            <span className="aurea-kicker">El proceso</span>
            <h2 className="aurea-h2" style={{ marginTop: "1.1rem" }}>
              Un camino claro, paso a paso
            </h2>
          </Reveal>
          <div className="aurea-steps">
            {STEPS.map((s) => (
              <Reveal key={s.n} className="aurea-step">
                <span className="aurea-step__num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="" >
            <div style={{ marginTop: "clamp(2.5rem,2rem+2vw,4rem)" }}>
              <Link href="/proceso-de-consulta" className="aurea-btn aurea-btn--line">
                Conocer el proceso completo
                {ARROW}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 06 — ESPACIO */}
      <section className="aurea-section" style={{ paddingTop: 0 }}>
        <div className="aurea-container">
          <Reveal className="">
            <div style={{ marginBottom: "clamp(2.5rem,2rem+2vw,4rem)" }}>
              <span className="aurea-kicker">Atmósfera Aurea</span>
              <h2 className="aurea-h2" style={{ marginTop: "1.1rem" }}>
                La estética que guía cada espacio
              </h2>
            </div>
          </Reveal>
          <Reveal className="aurea-gallery">
            <div className="aurea-gallery__item aurea-gallery__item--a">
              <Image
                src="/images/aurea-espacio-1.jpg"
                alt="Atmósfera Aurea — pasillo interior"
                fill
                sizes="(min-width:1024px) 45vw, 90vw"
                style={{ objectFit: "cover" }}
              />
              <span className="aurea-gallery__caption">Atmósfera Aurea</span>
            </div>
            <div className="aurea-gallery__item aurea-gallery__item--tall">
              <Image
                src="/images/aurea-espacio-2.jpg"
                alt="Atmósfera Aurea — fachada y entrada"
                fill
                sizes="(min-width:1024px) 25vw, 45vw"
                style={{ objectFit: "cover" }}
              />
              <span className="aurea-gallery__caption">Atmósfera Aurea</span>
            </div>
            <div className="aurea-gallery__item aurea-gallery__item--tall">
              <Image
                src="/images/aurea-espacio-3.jpg"
                alt="Atmósfera Aurea — materiales y texturas"
                fill
                sizes="(min-width:1024px) 25vw, 45vw"
                style={{ objectFit: "cover" }}
              />
              <span className="aurea-gallery__caption">Atmósfera Aurea</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 07 — CTA FINAL */}
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
              {ARROW}
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
