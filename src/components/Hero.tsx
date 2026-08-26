import { person } from '../data/profile'
import { IconDownload, IconGithub, IconLinkedin, IconMail, IconMapPin, IconPhone } from './icons'
import { SideNav } from './SideNav'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <div className="hero-top">
          <p className="eyebrow">{person.eyebrow}</p>
          <h1>
            Jhonatan
            Tacuri
          </h1>
          <p className="hero-role">Desarrollador junior</p>
          <p className="hero-role">Apps móviles, APIs REST y cómputo paralelo</p>

          <SideNav />
        </div>

        <div className="hero-bottom">
          <p className="hero-location">
            <IconMapPin /> {person.location}
          </p>

          <ul className="contact-row">
            <li>
              <a href={`mailto:${person.email}`}>
                <IconMail />
              </a>
            </li>
            <li>
              <a href={`tel:${person.phone.replace(/\s+/g, '')}`}>
                <IconPhone />
              </a>
            </li>
            <li>
              <a href={person.linkedinUrl} target="_blank" rel="noreferrer">
                <IconLinkedin />
              </a>
            </li>
            <li>
              <a href={person.githubUrl} target="_blank" rel="noreferrer">
                <IconGithub />
              </a>
            </li>
          </ul>

          <a className="cv-button" href={person.cvUrl} download>
            <IconDownload /> Descargar CV
          </a>
        </div>
      </div>
    </section>
  )
}
