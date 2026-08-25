import { skills } from '../data/profile'

export function Skills() {
  return (
    <section className="section" id="habilidades">
      <div className="section-grid">
        <h2 className="section-label">Habilidades</h2>
        <dl className="skill-sheet">
          {skills.map((group) => (
            <div className="skill-row" key={group.label}>
              <dt>{group.label}</dt>
              <dd>{group.items.join(' · ')}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
