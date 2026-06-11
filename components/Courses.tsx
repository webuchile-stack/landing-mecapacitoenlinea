import Image from 'next/image'
import styles from './Courses.module.css'

const courses = [
  {
    id: 'ie-herramientas',
    emoji: '🧠',
    badge: 'Más Popular',
    badgeColor: 'accent',
    title: 'Herramientas Prácticas de Inteligencia Emocional',
    description:
      'Un ciclo de 5 talleres online en formato participativo, diseñado para quienes buscan mejorar sus habilidades personales y su autoconocimiento, tanto para crecimiento personal como para trabajar en equipo.',
    duration: '5 sesiones',
    format: 'Online · En vivo',
    schedule: 'Jueves 11:00 - 12:00 hrs',
    price: 'Gratuito',
    priceNote: 'Cupos limitados',
    modules: [
      'Identificación de emociones',
      'Autoregulación emocional',
      'Empatía y comunicación asertiva',
      'Gestión del estrés',
      'Liderazgo emocional',
    ],
    image: '/course-ie.png',
    cta: 'Inscribirme gratis',
    link: 'https://forms.gle/7bb6YPBwLzTR7M1Y9',
    featured: true,
  },
  {
    id: 'ie-liderazgo',
    emoji: '🚀',
    badge: 'Próximamente',
    badgeColor: 'muted',
    title: 'Liderazgo Emocional en el Trabajo',
    description:
      'Aprende a liderar equipos con inteligencia emocional. Gestiona conflictos, motiva a tu equipo y crea ambientes de trabajo positivos y productivos.',
    duration: '6 sesiones',
    format: 'Online · En vivo',
    schedule: 'Por confirmar',
    price: 'Lista de espera',
    priceNote: 'Anúnciate primero',
    modules: [
      'El líder emocionalmente inteligente',
      'Comunicación no violenta',
      'Resolución de conflictos',
      'Motivación de equipos',
      'Feedback efectivo',
      'Cultura organizacional positiva',
    ],
    image: '/course-ie.png',
    cta: 'Unirme a la lista',
    link: '#lead-capture',
    featured: false,
  },
  {
    id: 'ie-relaciones',
    emoji: '💞',
    badge: 'Próximamente',
    badgeColor: 'muted',
    title: 'Relaciones Sanas desde la IE',
    description:
      'Mejora tus vínculos personales y profesionales. Aprende a establecer límites sanos, comunicarte efectivamente y construir relaciones basadas en respeto mutuo.',
    duration: '4 sesiones',
    format: 'Online · En vivo',
    schedule: 'Por confirmar',
    price: 'Lista de espera',
    priceNote: 'Anúnciate primero',
    modules: [
      'Autoestima y vínculos',
      'Límites emocionales',
      'Comunicación efectiva',
      'Manejo de relaciones difíciles',
    ],
    image: '/course-ie.png',
    cta: 'Unirme a la lista',
    link: '#lead-capture',
    featured: false,
  },
]

export default function Courses() {
  return (
    <section className={`section ${styles.courses}`} id="cursos" aria-labelledby="courses-title">
      <div className="container">
        <div className="section-header">
          <div className="badge badge-accent" style={{ margin: '0 auto var(--spacing-4)' }}>
            Nuestros Talleres
          </div>
          <h2 id="courses-title">
            Cursos que{' '}
            <span className="text-gradient">transforman</span>
          </h2>
          <div className="divider" />
          <p>
            Talleres online en formato participativo con cupos limitados
            para garantizar atención personalizada.
          </p>
        </div>

        <div className={styles.grid}>
          {courses.map((course) => (
            <article
              key={course.id}
              id={`course-${course.id}`}
              className={`${styles.card} ${course.featured ? styles.featured : ''}`}
            >
              {course.featured && (
                <div className={styles.featuredGlow} aria-hidden="true" />
              )}

              {/* Card Header */}
              <div className={styles.cardHeader}>
                <div className={styles.courseEmoji} aria-hidden="true">{course.emoji}</div>
                <span
                  className={`badge ${course.badgeColor === 'accent' ? 'badge-accent' : styles.badgeMuted}`}
                >
                  {course.badge}
                </span>
              </div>

              {/* Card Image */}
              <div className={styles.imageWrap}>
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={200}
                  className={styles.courseImage}
                />
              </div>

              {/* Card Body */}
              <div className={styles.cardBody}>
                <h3 className={styles.title}>{course.title}</h3>
                <p className={styles.desc}>{course.description}</p>

                {/* Meta */}
                <div className={styles.meta}>
                  <span className={styles.metaItem}>
                    <span aria-hidden="true">📚</span> {course.duration}
                  </span>
                  <span className={styles.metaItem}>
                    <span aria-hidden="true">💻</span> {course.format}
                  </span>
                  <span className={styles.metaItem}>
                    <span aria-hidden="true">🕐</span> {course.schedule}
                  </span>
                </div>

                {/* Modules */}
                <ul className={styles.modules} aria-label="Módulos del curso">
                  {course.modules.map((mod) => (
                    <li key={mod} className={styles.module}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <circle cx="7" cy="7" r="7" fill="#ff286a" fillOpacity="0.15"/>
                        <path d="M4 7l2 2 4-4" stroke="#ff286a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {mod}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer */}
              <div className={styles.cardFooter}>
                <div className={styles.pricing}>
                  <span className={styles.price}>{course.price}</span>
                  <span className={styles.priceNote}>{course.priceNote}</span>
                </div>
                <a
                  href={course.link}
                  className={`btn ${course.featured ? 'btn-primary' : 'btn-outline'} ${styles.cta}`}
                  id={`cta-${course.id}`}
                  target={course.link.startsWith('http') ? '_blank' : undefined}
                  rel={course.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {course.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
