import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/reveal";
import { whatsappLink } from "@/lib/whatsapp";
import { getContent } from "@/lib/content";
import { getLocale } from "@/lib/locale";

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

const PROCEDURES = [
  { n: "01", img: "/images/proc-rinoplastia.jpg", className: "aurea-proc-card--wide aurea-proc-card--tall" },
  { n: "02", img: "/images/proc-liposuccion.jpg", className: "aurea-proc-card--wide" },
  { n: "03", img: "/images/proc-aumento-mamario.jpg", className: "aurea-proc-card--wide" },
  { n: "04", img: "/images/proc-lifting-facial.jpg", className: "aurea-proc-card--std" },
  { n: "05", img: "/images/proc-abdominoplastia.jpg", className: "aurea-proc-card--std" },
  { n: "06", img: "/images/proc-blefaroplastia.jpg", className: "aurea-proc-card--std" },
];

const num = (i: number) => String(i + 1).padStart(2, "0");

export default async function HomePage() {
  const t = getContent(await getLocale());
  const h = t.home;
  return (
    <>
      {/* 01 — HERO */}
      <section className="aurea-hero">
        <div className="aurea-hero__media">
          <Image
            src="/images/plastic-surgery-trends-2023.webp"
            alt={h.heroAlt}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "50% 40%" }}
          />
        </div>
        <div className="aurea-hero__scrim"></div>
        <div className="aurea-hero__content aurea-container">
          <span className="aurea-kicker">Aurea Plastic Surgery</span>
          <h1>{h.heroTitle}</h1>
          <div className="aurea-hero__row">
            <p className="aurea-lead">
              {h.heroLead}
            </p>
            <a
              href={whatsappLink(t.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="aurea-btn aurea-btn--gold"
            >
              {t.ui.bookCta}
              {ARROW}
            </a>
          </div>
        </div>
        <span className="aurea-hero__scroll">{h.scroll}</span>
      </section>

      {/* 02 — FILOSOFÍA + DIFERENCIADORES */}
      <section className="aurea-section">
        <div className="aurea-container">
          <div className="aurea-intro">
            <Reveal className="aurea-intro__text">
              <span className="aurea-kicker">{h.clinicKicker}</span>
              <h2 className="aurea-h2">{h.clinicTitle}</h2>
            </Reveal>
            <Reveal className="aurea-intro__media">
              <Image
                src="/images/la-clinica.jpg"
                alt={h.clinicAlt}
                fill
                sizes="(min-width:1024px) 40vw, 90vw"
                style={{ objectFit: "cover" }}
              />
            </Reveal>
          </div>

          <div className="aurea-diffs">
            {h.diffs.map((d, i) => (
              <Reveal key={i} className="aurea-diffs__item">
                <span className="aurea-diffs__num">{num(i)}</span>
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
              <span className="aurea-kicker">{h.procsKicker}</span>
              <h2 className="aurea-h2" style={{ marginTop: "1.1rem" }}>
                {h.procsTitle[0]}
                <br />
                {h.procsTitle[1]}
              </h2>
            </div>
            <Link href="/procedimientos" className="aurea-btn aurea-btn--line">
              {h.procsAll}
              {ARROW}
            </Link>
          </Reveal>

          <div className="aurea-procs__grid">
            {PROCEDURES.map((p, i) => (
              <div key={p.n} className={`aurea-proc-card ${p.className} reveal is-visible`}>
                <div className="aurea-proc-card__media">
                  <Image
                    src={p.img}
                    alt={t.procedures[i].title}
                    fill
                    sizes="(min-width:1024px) 33vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="aurea-proc-card__label">
                  <span className="n">{p.n}</span>
                  <h3>{t.procedures[i].title}</h3>
                  <p>{t.procedures[i].desc}</p>
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
              alt={h.directorAlt}
              fill
              sizes="(min-width:1024px) 40vw, 90vw"
              style={{ objectFit: "cover" }}
            />
          </Reveal>
          <Reveal className="aurea-surgeon__text">
            <span className="aurea-kicker on-dark">{h.teamKicker}</span>
            <h2 className="aurea-h2 on-dark">
              {h.teamTitle}
            </h2>
            <p className="aurea-lead">
              {h.teamLead}
            </p>
            <div className="aurea-surgeon__facts">
              <span className="aurea-surgeon__name">{h.team[0].name}</span>
              <span className="aurea-surgeon__role">
                {h.directorRole}
              </span>
            </div>
          </Reveal>
        </div>

        <div className="aurea-container aurea-team">
          <Reveal className="aurea-team__photo">
            <Image
              src="/images/aurea-equipo-completo.jpg"
              alt={h.teamAlt}
              fill
              sizes="(min-width:1024px) 80vw, 92vw"
              style={{ objectFit: "cover" }}
            />
          </Reveal>
          <Reveal className="aurea-team__grid">
            {h.team.map((m) => (
              <div key={m.name} className="aurea-team__member">
                <span className="aurea-team__member-name">{m.name}</span>
                <span className="aurea-team__member-role">{m.role}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 05 — PROCESO (teaser) */}
      <section className="aurea-section">
        <div className="aurea-container">
          <Reveal className="aurea-steps__head">
            <span className="aurea-kicker">{h.stepsKicker}</span>
            <h2 className="aurea-h2" style={{ marginTop: "1.1rem" }}>
              {h.stepsTitle}
            </h2>
          </Reveal>
          <div className="aurea-steps">
            {t.steps.map((s, i) => (
              <Reveal key={i} className="aurea-step">
                <span className="aurea-step__num">{num(i)}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="" >
            <div style={{ marginTop: "clamp(2.5rem,2rem+2vw,4rem)" }}>
              <Link href="/proceso-de-consulta" className="aurea-btn aurea-btn--line">
                {h.stepsAll}
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
              <span className="aurea-kicker">{h.spaceKicker}</span>
              <h2 className="aurea-h2" style={{ marginTop: "1.1rem" }}>
                {h.spaceTitle}
              </h2>
            </div>
          </Reveal>
          <Reveal className="aurea-gallery">
            <div className="aurea-gallery__item aurea-gallery__item--a">
              <Image
                src="/images/aurea-espacio-1.jpg"
                alt={h.spaceAlts[0]}
                fill
                sizes="(min-width:1024px) 45vw, 90vw"
                style={{ objectFit: "cover" }}
              />
              <span className="aurea-gallery__caption">{h.spaceCaption}</span>
            </div>
            <div className="aurea-gallery__item aurea-gallery__item--tall">
              <Image
                src="/images/aurea-espacio-2.jpg"
                alt={h.spaceAlts[1]}
                fill
                sizes="(min-width:1024px) 25vw, 45vw"
                style={{ objectFit: "cover" }}
              />
              <span className="aurea-gallery__caption">{h.spaceCaption}</span>
            </div>
            <div className="aurea-gallery__item aurea-gallery__item--tall">
              <Image
                src="/images/aurea-espacio-3.jpg"
                alt={h.spaceAlts[2]}
                fill
                sizes="(min-width:1024px) 25vw, 45vw"
                style={{ objectFit: "cover" }}
              />
              <span className="aurea-gallery__caption">{h.spaceCaption}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 07 — CTA FINAL */}
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
              {ARROW}
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
