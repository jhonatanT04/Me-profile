import { nav } from '../data/profile'

export function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="nav-mark" href="#top" aria-label="Ir al inicio">
          JT<span className="nav-mark-dot">·</span>
        </a>
        <nav className="nav-links" aria-label="Secciones">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="nav-status" aria-label="Disponible para nuevos retos">
          <span className="status-dot" aria-hidden="true" />
          <span className="nav-status-label" aria-hidden="true">
            Disponible para nuevos retos
          </span>
        </div>
      </div>
    </header>
  )
}
