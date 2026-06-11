import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer} id="footer" role="contentinfo">
      <div className="container">
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <Image
                src="/logo.png"
                alt="Me capacito en línea"
                width={160}
                height={40}
                className={styles.logoImage}
              />
            </div>
            <p className={styles.tagline}>
              Desarrollamos habilidades emocionales para transformar vidas. 
              Plataforma de capacitación online 100% chilena.
            </p>
            <a
              href="https://wa.me/56994618772"
              className={styles.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-whatsapp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
              +56 9 9461 8772
            </a>
          </div>

          {/* Links */}
          <div className={styles.linksGrid}>
            <div className={styles.linkGroup}>
              <h3 className={styles.groupTitle}>Plataforma</h3>
              <ul>
                <li><a href="https://cursos.mecapacitoenlinea.cl" className={styles.link} target="_blank" rel="noopener noreferrer">Acceder a cursos</a></li>
                <li><a href="#cursos" className={styles.link}>Talleres disponibles</a></li>
                <li><a href="#lead-capture" className={styles.link}>Lista de espera</a></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h3 className={styles.groupTitle}>Información</h3>
              <ul>
                <li><a href="#instructora" className={styles.link}>Sobre Daniela</a></li>
                <li><a href="#testimonios" className={styles.link}>Testimonios</a></li>
                <li><a href="#faq" className={styles.link}>Preguntas frecuentes</a></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h3 className={styles.groupTitle}>Legal</h3>
              <ul>
                <li><a href="#" className={styles.link}>Política de privacidad</a></li>
                <li><a href="#" className={styles.link}>Términos y condiciones</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} mecapacitoenlinea.cl · Todos los derechos reservados · Hecho en 🇨🇱 Chile
          </p>
          <a
            href="https://cursos.mecapacitoenlinea.cl"
            className={styles.lmsLink}
            target="_blank"
            rel="noopener noreferrer"
            id="footer-lms-link"
          >
            cursos.mecapacitoenlinea.cl →
          </a>
        </div>
      </div>
    </footer>
  )
}
