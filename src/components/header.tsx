"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/whatsapp";
import LanguageSwitcher from "./language-switcher";
import { useLocale } from "./locale-provider";

const NAV_HREFS = ["/", "/procedimientos", "/proceso-de-consulta"];

export default function Header() {
  const pathname = usePathname();
  const { t } = useLocale();
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

          <nav className="aurea-nav" aria-label={t.ui.navAria}>
            {NAV_HREFS.map((href) => (
              <Link
                key={href}
                href={href}
                className={pathname === href ? "is-active" : ""}
              >
                {t.ui.nav[href]}
              </Link>
            ))}
          </nav>

          <div className="aurea-header-actions">
            <LanguageSwitcher />
            <a
              href={whatsappLink(t.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="aurea-btn aurea-btn--gold"
            >
              {t.ui.book}
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
              aria-label={menuOpen ? t.ui.closeMenu : t.ui.openMenu}
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
        {NAV_HREFS.map((href) => (
          <Link
            key={href}
            href={href}
            className={pathname === href ? "is-active" : ""}
          >
            {t.ui.nav[href]}
          </Link>
        ))}
        <a
          href={whatsappLink(t.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="aurea-btn aurea-btn--gold"
        >
          {t.ui.book}
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
