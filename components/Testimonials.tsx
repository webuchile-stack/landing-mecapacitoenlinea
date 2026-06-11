'use client'

import { useState } from 'react'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    id: 1,
    name: 'María González',
    role: 'Contadora · Santiago',
    avatar: '👩',
    rating: 5,
    text: 'El taller de Inteligencia Emocional cambió completamente cómo me relaciono con mi equipo. Daniela tiene una forma de enseñar que te hace reflexionar profundamente. ¡Lo recomiendo 100%!',
  },
  {
    id: 2,
    name: 'Carla Morales',
    role: 'Administradora · Valparaíso',
    avatar: '👩‍💼',
    rating: 5,
    text: 'Nunca pensé que un taller online pudiera ser tan participativo y cercano. Aprendí herramientas que uso todos los días en mi trabajo y en mi vida personal.',
  },
  {
    id: 3,
    name: 'Roberto Sánchez',
    role: 'Jefe de Equipo · Concepción',
    avatar: '👨',
    rating: 5,
    text: 'Daniela es una instructora excepcional. Su metodología es práctica y el grupo pequeño permite una atención personalizada que no encuentras en otros cursos online.',
  },
  {
    id: 4,
    name: 'Ana Pérez',
    role: 'Emprendedora · Temuco',
    avatar: '👩‍🎓',
    rating: 5,
    text: 'Desde el primer taller noté cambios en cómo manejo mis emociones ante situaciones difíciles. El ciclo completo fue transformador. ¡Gracias Daniela!',
  },
  {
    id: 5,
    name: 'Luis Fuentes',
    role: 'Recursos Humanos · Santiago',
    avatar: '👨‍💼',
    rating: 5,
    text: 'Como profesional de RRHH, busqué este taller para mejorar mis competencias. Superó todas mis expectativas. La dinámica grupal y los ejercicios prácticos son invaluables.',
  },
]

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0)

  const prev = () => setActiveIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  const next = () => setActiveIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1))

  const visible = [
    testimonials[(activeIdx) % testimonials.length],
    testimonials[(activeIdx + 1) % testimonials.length],
    testimonials[(activeIdx + 2) % testimonials.length],
  ]

  return (
    <section className={`section ${styles.section}`} id="testimonios" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="section-header">
          <div className="badge badge-accent" style={{ margin: '0 auto var(--spacing-4)' }}>
            Testimonios
          </div>
          <h2 id="testimonials-title">
            Lo que dicen{' '}
            <span className="text-gradient">nuestros alumnos</span>
          </h2>
          <div className="divider" />
          <p>Historias reales de personas que ya transformaron su vida.</p>
        </div>

        <div className={styles.carousel} aria-label="Carrusel de testimonios">
          <div className={styles.grid}>
            {visible.map((t, idx) => (
              <blockquote
                key={`${t.id}-${idx}`}
                className={`${styles.card} ${idx === 1 ? styles.center : ''}`}
              >
                <div className={styles.stars} aria-label={`${t.rating} estrellas`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} aria-hidden="true">⭐</span>
                  ))}
                </div>
                <p className={styles.text}>"{t.text}"</p>
                <footer className={styles.author}>
                  <div className={styles.avatar} aria-hidden="true">{t.avatar}</div>
                  <div>
                    <cite className={styles.name}>{t.name}</cite>
                    <p className={styles.role}>{t.role}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>

          <div className={styles.controls}>
            <button
              onClick={prev}
              className={styles.controlBtn}
              aria-label="Testimonio anterior"
              id="testimonials-prev"
            >
              ←
            </button>
            <div className={styles.dots} role="tablist" aria-label="Posición en el carrusel">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === activeIdx}
                  className={`${styles.dot} ${i === activeIdx ? styles.active : ''}`}
                  onClick={() => setActiveIdx(i)}
                  aria-label={`Ir al testimonio ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className={styles.controlBtn}
              aria-label="Siguiente testimonio"
              id="testimonials-next"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
