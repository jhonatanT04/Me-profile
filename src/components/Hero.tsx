import { person } from '../data/profile'
import { ThreadGrid } from './ThreadGrid'
import { IconDownload, IconGithub, IconLinkedin, IconMail, IconMapPin, IconPhone } from './icons'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">{person.eyebrow}</p>
        <h1>
          Jhonatan
          <br />
          Tacuri
        </h1>
        <p className="hero-role">Desarrollador junior — apps móviles, APIs REST y cómputo paralelo</p>
        <p className="hero-summary">{person.summary}</p>

        <ul className="contact-row">
          <li>
            <IconMapPin /> {person.location}
          </li>
          <li>
            <a href={`mailto:${person.email}`}>
              <IconMail /> {person.email}
            </a>
          </li>
          <li>
            <a href={`tel:${person.phone.replace(/\s+/g, '')}`}>
              <IconPhone /> {person.phone}
            </a>
          </li>
          <li>
            <a href={person.linkedinUrl} target="_blank" rel="noreferrer">
              <IconLinkedin /> {person.linkedin}
            </a>
          </li>
          <li>
            <a href={person.githubUrl} target="_blank" rel="noreferrer">
              <IconGithub /> {person.github}
            </a>
          </li>
        </ul>

        <a className="cv-button" href={person.cvUrl} download>
          <IconDownload /> Descargar CV
        </a>
      </div>

      <div className="hero-visual">
        <ThreadGrid />
      </div>
    </section>
  )
}
