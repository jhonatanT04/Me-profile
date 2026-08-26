import type { CSSProperties } from 'react'
import { stats, person } from '../data/profile'
import { useInView } from '../hooks/useInView'

export function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section className="section" aria-label="Cifras destacadas">
      <p className="stats-intro">{person.summary}</p>
      <div className={`stats${inView ? ' in-view' : ''}`} ref={ref}>
        {stats.map((stat, index) => (
          <div className="stat" key={stat.label} style={{ '--stagger': index } as CSSProperties}>
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
            <span className="stat-detail">{stat.detail}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
