'use client'

import { useState } from 'react'
import styles from './LeadCapture.module.css'

export default function LeadCapture() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, email }),
      })
      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setMessage(data.message || '¡Registro exitoso!')
        setNombre('')
        setEmail('')
      } else {
        throw new Error(data.error)
      }
    } catch {
      setStatus('error')
      setMessage('Ocurrió un error. Intenta nuevamente.')
    }
  }

  return (
    <section className={`section ${styles.section}`} id="lead-capture" aria-labelledby="lead-title">
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className="container">
        <div className={styles.wrapper}>
          {/* Left */}
          <div className={styles.left}>
            <div className="badge badge-accent" style={{ marginBottom: 'var(--spacing-4)' }}>
              🔔 Lista de Espera
            </div>
            <h2 id="lead-title">
              Sé la primera en{' '}
              <span className="text-gradient">enterarte</span>
            </h2>
            <p className={styles.desc}>
              Regístrate en nuestra lista de espera y recibe acceso anticipado 
              a nuevos talleres, contenido exclusivo y descuentos especiales 
              para los primeros inscritos.
            </p>

            <ul className={styles.perks}>
              {[
                '🎁 Descuentos exclusivos en próximos talleres',
                '📩 Acceso anticipado antes de la apertura pública',
                '🎤 Invitaciones a charlas y eventos gratuitos',
                '📚 Recursos y materiales de inteligencia emocional',
              ].map((perk) => (
                <li key={perk} className={styles.perk}>{perk}</li>
              ))}
            </ul>
          </div>

          {/* Right: Form */}
          <div className={styles.right}>
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>¡Quiero unirme!</h3>
              <p className={styles.formSubtitle}>Es completamente gratuito 🎉</p>

              {status === 'success' ? (
                <div className={styles.successMsg} role="status">
                  <div className={styles.successIcon}>🎉</div>
                  <p className={styles.successTitle}>¡Estás dentro!</p>
                  <p className={styles.successText}>
                    Te avisaremos en cuanto haya novedades.
                    ¡Prepárate para transformar tu vida!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form} noValidate>
                  <div className={styles.field}>
                    <label htmlFor="lead-nombre" className={styles.label}>
                      Tu nombre
                    </label>
                    <input
                      id="lead-nombre"
                      type="text"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      placeholder="¿Cómo te llamas?"
                      className={styles.input}
                      autoComplete="given-name"
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="lead-email" className={styles.label}>
                      Tu email <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="lead-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tu@email.com"
                      className={styles.input}
                      required
                      autoComplete="email"
                    />
                  </div>

                  {status === 'error' && (
                    <p className={styles.errorMsg} role="alert">{message}</p>
                  )}

                  <button
                    type="submit"
                    id="lead-submit"
                    className={`btn btn-primary ${styles.submitBtn}`}
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <>
                        <span className={styles.spinner} aria-hidden="true" />
                        Registrando...
                      </>
                    ) : (
                      <>
                        Unirme gratis a la lista
                        <span aria-hidden="true">→</span>
                      </>
                    )}
                  </button>

                  <p className={styles.privacy}>
                    🔒 Respetamos tu privacidad. Sin spam, nunca.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
