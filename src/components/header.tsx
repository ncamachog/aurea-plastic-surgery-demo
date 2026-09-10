"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { whatsappLink, AGENDAR_MESSAGE } from "@/lib/whatsapp";

const NAV_ITEMS = [
  { href: "/", label: "Inicio" },
  { href: "/procedimientos", label: "Procedimientos" },
  { href: "/proceso-de-consulta", label: "Proceso de Consulta" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", menuOpen);
    return () => document.documentElement.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={`aurea-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="aurea-container">
          <Link href="/" className="aurea-logo">
            AUREA <strong>Plastic Surgery</strong>
          </Link>

          <nav className="aurea-nav" aria-label="Navegación principal">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={pathname === item.href ? "is-active" : ""}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="aurea-header-actions">
            <a
              href={whatsappLink(AGENDAR_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="aurea-btn aurea-btn--gold"
            >
              Agendar consulta
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
            <button
              className="aurea-burger"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <div className="aurea-mobile-panel">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={pathname === item.href ? "is-active" : ""}
          >
            {item.label}
          </Link>
        ))}
        <a
          href={whatsappLink(AGENDAR_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="aurea-btn aurea-btn--gold"
        >
          Agendar consulta
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
    </>
  );
}
