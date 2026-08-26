import { stats, person } from '../data/profile'

export function Stats() {
  return (
    <section className="section" aria-label="Cifras destacadas">
      <p className="stats-intro">{person.summary}</p>
      <div className="stats">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
            <span className="stat-detail">{stat.detail}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
