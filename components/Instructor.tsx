import Image from 'next/image'
import styles from './Instructor.module.css'

export default function Instructor() {
  return (
    <section className={`section ${styles.instructor}`} id="instructora" aria-labelledby="instructor-title">
      <div className="container">
        <div className={styles.inner}>
          {/* Image */}
          <div className={styles.imageWrapper}>
            <div className={styles.imageGlow} aria-hidden="true" />
            <div className={styles.imageBorder} aria-hidden="true" />
            <Image
              src="/hero-instructor.png"
              alt="Daniela Fredes B. - Instructora de Inteligencia Emocional"
              width={420}
              height={480}
              className={styles.image}
            />
            {/* Credential card */}
            <div className={styles.credCard} aria-label="Credencial de Daniela Fredes">
              <div className={styles.credIcon}>🎓</div>
              <div>
                <p className={styles.credName}>Daniela Fredes B.</p>
                <p className={styles.credTitle}>Especialista en IE · Coach</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={styles.content}>
            <div className="badge badge-accent" style={{ marginBottom: 'var(--spacing-4)' }}>
              Tu Instructora
            </div>
            <h2 id="instructor-title">
              Hola, soy{' '}
              <span className="text-gradient">Daniela Fredes</span> 👋
            </h2>

            <p className={styles.bio}>
              Soy especialista en Inteligencia Emocional y desarrollo de habilidades 
              blandas, con años de experiencia acompañando a personas en su proceso 
              de crecimiento personal y profesional.
            </p>

            <p className={styles.bio}>
              Mi metodología combina herramientas prácticas con espacios participativos 
              y reflexivos, donde cada persona puede aprender a su propio ritmo, pero 
              siempre en comunidad. Creo profundamente que el autoconocimiento es la 
              base de toda transformación real.
            </p>

            <div className={styles.achievements}>
              {[
                { icon: '👥', text: '+200 personas capacitadas' },
                { icon: '✅', text: 'Metodología participativa y práctica' },
                { icon: '🇨🇱', text: 'Plataforma 100% chilena' },
                { icon: '❤️', text: 'Acompañamiento cercano y personalizado' },
              ].map((item) => (
                <div key={item.text} className={styles.achievement}>
                  <span className={styles.achieveIcon} aria-hidden="true">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <div className={styles.contact}>
              <p className={styles.contactLabel}>¿Tienes preguntas? Contáctame:</p>
              <a
                href="https://wa.me/56994618772"
                className={`btn btn-outline ${styles.contactBtn}`}
                target="_blank"
                rel="noopener noreferrer"
                id="instructor-whatsapp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                </svg>
                WhatsApp: +56 9 9461 8772
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
