import { projects } from '../data/profile'
import { IconArrowUpRight } from './icons'

export function Projects() {
  return (
    <section className="section" id="proyectos">
      <h2 className="section-title">Proyectos</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
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
          </article>
        ))}
      </div>
    </section>
  )
}
