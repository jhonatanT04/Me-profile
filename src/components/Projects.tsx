import { projects } from '../data/profile'
import { IconArrowUpRight } from './icons'

export function Projects() {
  return (
    <section className="section" id="proyectos">
      <div className="section-grid">
        <h2 className="section-label">Proyectos</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project-row" key={project.name}>
              <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
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
      </div>
    </section>
  )
}
