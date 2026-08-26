import { person, projects } from '../data/profile'
import { IconArrowUpRight, IconGithub } from './icons'

export function Projects() {
  return (
    <section className="section" id="proyectos" aria-label="Proyectos">
      <div className="project-list">
        {projects.map((project) => (
          <article className="project-row" key={project.name}>
            <div className="project-main">
              <p className="project-tag">{project.tag}</p>
              <h3>{project.name}</h3>
              <p className="project-desc">{project.description}</p>
              <ul className="project-stack">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="project-foot">
                <span>{project.meta}</span>
                {project.href && (
                  <a href={project.href} target="_blank" rel="noreferrer">
                    Ver repositorio <IconArrowUpRight />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <a className="cv-link cv-link--static" href={person.githubUrl} target="_blank" rel="noreferrer">
        <IconGithub /> Ver todo en GitHub
      </a>
    </section>
  )
}
