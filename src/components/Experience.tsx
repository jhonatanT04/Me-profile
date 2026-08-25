import { experience } from '../data/profile'

export function Experience() {
  return (
    <section className="section" id="experiencia">
      <h2 className="section-title">Experiencia</h2>
      <div className="exp-row">
        <div className="exp-dates">
          {experience.start} — {experience.end}
        </div>
        <div className="exp-body">
          <h3>
            {experience.role} <span>· {experience.company}</span>
          </h3>
          <p className="exp-location">{experience.location}</p>
          <ul>
            {experience.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
