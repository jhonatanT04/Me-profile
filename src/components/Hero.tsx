import { person } from '../data/profile'
import { IconGithub, IconLinkedin, IconMail, IconMapPin, IconPhone } from './icons'
import { SideNav } from './SideNav'
import SplitText from './SplitText'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <div className="hero-top">
          <p className="eyebrow">{person.eyebrow}</p>
          <SplitText
            tag="h1"
            text="Jhonatan Tacuri"
            splitType="chars"
            delay={30}
            duration={0.8}
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="left"
          />
          <p className="hero-role">Desarrollador junior</p>
          
          <p className="hero-role">APIs REST en Java y Python<br /> Interfaces en React, Angular y Flutter</p>

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
        </div>
      </div>
    </section>
  )
}
