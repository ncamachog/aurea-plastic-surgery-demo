import Link from "next/link";

export default function Footer() {
  return (
    <footer className="aurea-footer">
      <div className="aurea-container">
        <div className="aurea-footer__top">
          <div className="aurea-footer__brand">
            <Link href="/" className="aurea-logo">
              AUREA <strong>Plastic Surgery</strong>
            </Link>
            <p>
              Cirugía plástica con propósito: un enfoque distinto en cada
              detalle, de la primera consulta al seguimiento posoperatorio.
            </p>
          </div>

          <div className="aurea-footer__col">
            <h4>Navegación</h4>
            <ul>
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Link href="/procedimientos">Procedimientos</Link>
              </li>
              <li>
                <Link href="/proceso-de-consulta">Proceso de Consulta</Link>
              </li>
            </ul>
          </div>

          <div className="aurea-footer__col">
            <h4>Contacto</h4>
            <ul>
              <li>
                <span className="aurea-pending">Dirección pendiente</span>
              </li>
              <li>
                <a href="https://wa.me/573103351883" target="_blank" rel="noopener noreferrer">
                  +57 310 335 1883
                </a>
              </li>
              <li>
                <span className="aurea-pending">Email pendiente</span>
              </li>
            </ul>
          </div>

          <div className="aurea-footer__col">
            <h4>Síguenos</h4>
            <span className="aurea-pending">Redes sociales pendientes</span>
          </div>
        </div>

        <div className="aurea-footer__bottom">
          <span>
            &copy; {new Date().getFullYear()} AUREA Plastic Surgery. Todos los
            derechos reservados.
          </span>
          <span>Aviso de privacidad — próximamente</span>
        </div>
      </div>
    </footer>
  );
}
