import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio" aria-label="Inicio">
      {/* Background elements */}
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={styles.bgOrb1} aria-hidden="true" />
      <div className={styles.bgOrb2} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        {/* Left: Content */}
        <div className={styles.content}>
          <div className={`badge badge-accent ${styles.badge}`} role="note">
            <span>✨</span>
            <span>Capacitación Online · Chile</span>
          </div>

          <h1 className={styles.headline}>
            Desarrolla tu{' '}
            <span className="text-gradient">Inteligencia</span>
            <br />
            <span className="text-gradient">Emocional</span>
            <br />
            <span className={styles.headlineLight}>desde donde estés</span>
          </h1>

          <p className={styles.subtitle}>
            Talleres online en formato participativo para mejorar tus habilidades 
            personales, tu autoconocimiento y crecer tanto a nivel personal como 
            profesional.
          </p>

          <div className={styles.actions}>
            <a
              href="#cursos"
              className="btn btn-primary btn-lg"
              id="hero-cta-primary"
            >
              Ver Cursos Disponibles
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#lead-capture"
              className="btn btn-outline btn-lg"
              id="hero-cta-secondary"
            >
              Únete a la Lista de Espera
            </a>
          </div>

          {/* Social proof */}
          <div className={styles.socialProof}>
            <div className={styles.avatarStack} aria-label="Más de 200 alumnos">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={styles.avatar} style={{ backgroundImage: `linear-gradient(135deg, hsl(${i * 60}, 60%, 45%), hsl(${i * 60 + 30}, 70%, 60%))` }} />
              ))}
              <div className={`${styles.avatar} ${styles.avatarCount}`}>+</div>
            </div>
            <p className={styles.socialText}>
              <strong>+200 personas</strong> ya transformaron sus vidas con nuestros talleres
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <div className={styles.imageGlow} aria-hidden="true" />
            <Image
              src="/hero-instructor.png"
              alt="Daniela Fredes - Instructora de Inteligencia Emocional en mecapacitoenlinea.cl"
              width={520}
              height={580}
              className={styles.heroImage}
              priority
            />

            {/* Floating cards */}
            <div className={`${styles.floatingCard} ${styles.cardTop}`} aria-hidden="true">
              <div className={styles.cardIcon}>🧠</div>
              <div>
                <p className={styles.cardTitle}>Taller en vivo</p>
                <p className={styles.cardSub}>11:00 - 12:00 hrs</p>
              </div>
            </div>

            <div className={`${styles.floatingCard} ${styles.cardBottom}`} aria-hidden="true">
              <div className={styles.cardIcon}>⭐</div>
              <div>
                <p className={styles.cardTitle}>4.9 / 5.0</p>
                <p className={styles.cardSub}>Satisfacción total</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
