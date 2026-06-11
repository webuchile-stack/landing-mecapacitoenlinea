import styles from './Benefits.module.css'

const benefits = [
  {
    icon: '🧠',
    title: 'Autoconocimiento profundo',
    description:
      'Aprenderás a identificar y comprender tus propias emociones, desarrollando una mayor conciencia de ti mismo/a para tomar mejores decisiones en tu vida diaria.',
    color: '#ff286a',
  },
  {
    icon: '🤝',
    title: 'Mejora tus relaciones',
    description:
      'Desarrolla habilidades de empatía, comunicación asertiva y resolución de conflictos que transformarán cómo te relacionas con los demás, tanto en el trabajo como en el hogar.',
    color: '#ff6b35',
  },
  {
    icon: '💪',
    title: 'Resiliencia emocional',
    description:
      'Aprende a gestionar el estrés, la ansiedad y las situaciones difíciles con herramientas prácticas que te permitirán recuperarte más rápido de los desafíos.',
    color: '#c026d3',
  },
  {
    icon: '🚀',
    title: 'Liderazgo con propósito',
    description:
      'Potencia tus habilidades de liderazgo desde la inteligencia emocional, aprendiendo a motivar equipos, gestionar conflictos y crear ambientes de trabajo positivos.',
    color: '#7c3aed',
  },
]

export default function Benefits() {
  return (
    <section className={`section ${styles.benefits}`} id="beneficios" aria-labelledby="benefits-title">
      <div className="container">
        <div className="section-header">
          <div className="badge badge-accent" style={{ margin: '0 auto var(--spacing-4)' }}>
            ¿Por qué elegirnos?
          </div>
          <h2 id="benefits-title">
            Habilidades que cambian{' '}
            <span className="text-gradient">tu vida</span>
          </h2>
          <div className="divider" />
          <p>
            Nuestros talleres van más allá de la teoría. Son experiencias participativas
            diseñadas para generar cambios reales y duraderos.
          </p>
        </div>

        <div className={styles.grid}>
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={styles.card}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className={styles.iconWrap}
                style={{ '--card-color': b.color } as React.CSSProperties}
                aria-hidden="true"
              >
                <span>{b.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{b.title}</h3>
              <p className={styles.cardDesc}>{b.description}</p>
              <div
                className={styles.cardAccent}
                style={{ background: b.color } as React.CSSProperties}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
