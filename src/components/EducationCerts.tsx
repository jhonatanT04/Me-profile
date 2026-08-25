import { certifications, competencies, education, languages } from '../data/profile'

export function EducationCerts() {
  return (
    <section className="section edu-section" id="educacion">
      <h2 className="section-title">Educación y certificaciones</h2>
      <div className="edu-grid">
        <div className="edu-card">
          <p className="edu-dates">
            {education.start} — {education.end}
          </p>
          <h3>{education.school}</h3>
          <p className="edu-degree">{education.degree}</p>
          <p>{education.detail}</p>
          <p className="edu-highlights">
            <strong>Materias destacadas — </strong>
            {education.highlights}
          </p>
          <p className="edu-highlights">{education.extra}</p>
        </div>

        <div className="cert-card">
          <ul className="cert-list">
            {certifications.map((cert) => (
              <li key={cert.name}>
                <span className="cert-year">{cert.year}</span>
                <span>
                  {cert.name} <em>— {cert.issuer}</em>
                </span>
              </li>
            ))}
          </ul>
          <p className="edu-highlights">
            <strong>Idiomas — </strong>
            {languages}
          </p>
          <p className="edu-highlights">
            <strong>Competencias — </strong>
            {competencies}
          </p>
        </div>
      </div>
    </section>
  )
}
