import styles from './Stats.module.css'

const stats = [
  { value: '200+', label: 'Alumnos transformados', icon: '👥' },
  { value: '5',    label: 'Talleres por ciclo',     icon: '📚' },
  { value: '100%', label: 'Online y en vivo',       icon: '💻' },
  { value: '4.9★', label: 'Satisfacción promedio',  icon: '⭐' },
]

export default function Stats() {
  return (
    <section className={styles.stats} aria-label="Estadísticas">
      <div className="container">
        <div className={styles.grid}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.statCard}>
              <span className={styles.icon} aria-hidden="true">{stat.icon}</span>
              <span className={styles.value}>{stat.value}</span>
              <span className={styles.label}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
