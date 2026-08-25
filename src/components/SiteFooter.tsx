import { person } from '../data/profile'
import { IconGithub, IconLinkedin, IconMail } from './icons'

export function SiteFooter() {
  return (
    <footer className="footer" id="contacto">
      <div className="footer-inner">
        <div>
          <p className="footer-name">Jhonatan Tacuri</p>
          <p className="footer-loc">{person.location}</p>
        </div>
        <ul className="footer-links">
          <li>
            <a href={`mailto:${person.email}`}>
              <IconMail /> Escribir
            </a>
          </li>
          <li>
            <a href={person.linkedinUrl} target="_blank" rel="noreferrer">
              <IconLinkedin /> LinkedIn
            </a>
          </li>
          <li>
            <a href={person.githubUrl} target="_blank" rel="noreferrer">
              <IconGithub /> GitHub
            </a>
          </li>
        </ul>
      </div>
      <p className="footer-note">Construido con React + Vite.</p>
    </footer>
  )
}
