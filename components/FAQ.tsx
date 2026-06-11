'use client'

import { useState } from 'react'
import styles from './FAQ.module.css'

const faqs = [
  {
    q: '¿Los talleres son en vivo o grabados?',
    a: 'Son talleres en VIVO, con formato participativo. Cada sesión se desarrolla en tiempo real para que puedas interactuar, hacer preguntas y vivir la experiencia de aprendizaje junto al grupo. Puede existir la posibilidad de acceder a la grabación, pero el valor real está en la participación en vivo.',
  },
  {
    q: '¿Qué necesito para participar?',
    a: 'Solo necesitas una conexión a internet, un dispositivo (computador, tablet o smartphone) y muchas ganas de aprender. No se requieren conocimientos previos sobre inteligencia emocional.',
  },
  {
    q: '¿Cuántas personas hay en cada grupo?',
    a: 'Los cupos son limitados intencionalmente para garantizar una experiencia participativa y de calidad. Trabajamos con grupos pequeños que permiten atención personalizada y un espacio seguro de aprendizaje.',
  },
  {
    q: '¿Recibiré un certificado al finalizar?',
    a: 'Sí, al completar el ciclo de talleres recibirás un certificado de participación que avala tu formación en Inteligencia Emocional.',
  },
  {
    q: '¿Puedo acceder a los cursos desde cualquier parte de Chile?',
    a: 'Absolutamente. Al ser 100% online, puedes participar desde cualquier ciudad de Chile o incluso desde el extranjero. Solo necesitas ajustar el horario a tu zona horaria (los talleres se realizan en horario de Chile Continental).',
  },
  {
    q: '¿Qué pasa si no puedo asistir a una sesión?',
    a: 'Entendemos que la vida puede ser impredecible. Te pedimos avisarnos con anticipación. En caso de ausencia, evaluaremos cada situación individualmente para ver cómo podemos ayudarte a no perderte el contenido.',
  },
  {
    q: '¿Cómo me inscribo?',
    a: 'Para el taller actual, puedes inscribirte directamente a través del formulario de Google disponible en la sección de cursos. Para próximos talleres, únete a nuestra lista de espera y serás el/la primero/a en recibir información.',
  },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIdx(openIdx === i ? null : i)

  return (
    <section className={`section ${styles.section}`} id="faq" aria-labelledby="faq-title">
      <div className="container">
        <div className="section-header">
          <div className="badge badge-accent" style={{ margin: '0 auto var(--spacing-4)' }}>
            Preguntas Frecuentes
          </div>
          <h2 id="faq-title">
            ¿Tienes{' '}
            <span className="text-gradient">dudas?</span>
          </h2>
          <div className="divider" />
          <p>Aquí respondemos las preguntas más comunes. Si no encuentras tu respuesta, ¡contáctanos!</p>
        </div>

        <div className={styles.list} role="list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              role="listitem"
              className={`${styles.item} ${openIdx === i ? styles.open : ''}`}
            >
              <button
                id={`faq-btn-${i}`}
                className={styles.trigger}
                onClick={() => toggle(i)}
                aria-expanded={openIdx === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className={styles.question}>{faq.q}</span>
                <span
                  className={styles.icon}
                  aria-hidden="true"
                >
                  {openIdx === i ? '−' : '+'}
                </span>
              </button>
              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-btn-${i}`}
                className={styles.answer}
                hidden={openIdx !== i}
              >
                <p className={styles.answerText}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>¿Tienes más preguntas?</p>
          <a
            href="https://wa.me/56994618772"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            id="faq-whatsapp"
          >
            💬 Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
