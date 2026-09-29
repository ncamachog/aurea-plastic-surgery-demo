import Link from "next/link";
import { getContent } from "@/lib/content";
import { getLocale } from "@/lib/locale";

export default async function Footer() {
  const t = getContent(await getLocale());
  const f = t.footer;
  return (
    <footer className="aurea-footer">
      <div className="aurea-container">
        <div className="aurea-footer__top">
          <div className="aurea-footer__brand">
            <Link href="/" className="aurea-logo">
              AUREA <strong>Plastic Surgery</strong>
            </Link>
            <p>{f.desc}</p>
          </div>

          <div className="aurea-footer__col">
            <h4>{f.nav}</h4>
            <ul>
              <li>
                <Link href="/">{t.ui.nav["/"]}</Link>
              </li>
              <li>
                <Link href="/procedimientos">{t.ui.nav["/procedimientos"]}</Link>
              </li>
              <li>
                <Link href="/proceso-de-consulta">{t.ui.nav["/proceso-de-consulta"]}</Link>
              </li>
            </ul>
          </div>

          <div className="aurea-footer__col">
            <h4>{f.contact}</h4>
            <ul>
              <li>
                <span className="aurea-pending">{f.addressPending}</span>
              </li>
              <li>
                <a href="https://wa.me/573103351883" target="_blank" rel="noopener noreferrer">
                  +57 310 335 1883
                </a>
              </li>
              <li>
                <span className="aurea-pending">{f.emailPending}</span>
              </li>
            </ul>
          </div>

          <div className="aurea-footer__col">
            <h4>{f.follow}</h4>
            <span className="aurea-pending">{f.socialPending}</span>
          </div>
        </div>

        <div className="aurea-footer__bottom">
          <span>
            &copy; {new Date().getFullYear()} AUREA Plastic Surgery. {f.rights}
          </span>
          <span>{f.privacy}</span>
        </div>
      </div>
    </footer>
  );
}
