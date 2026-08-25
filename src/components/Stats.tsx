import { stats } from '../data/profile'

export function Stats() {
  return (
    <section className="stats" aria-label="Cifras destacadas">
      {stats.map((stat) => (
        <div className="stat" key={stat.label}>
          <span className="stat-value">{stat.value}</span>
          <span className="stat-label">{stat.label}</span>
          <span className="stat-detail">{stat.detail}</span>
        </div>
      ))}
    </section>
  )
}
