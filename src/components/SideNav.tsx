import { useEffect, useState } from 'react'
import { nav } from '../data/profile'

export function SideNav() {
  const [activeHref, setActiveHref] = useState('')

  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length === 0) return
        const topmost = visible.reduce((a, b) => (a.boundingClientRect.top < b.boundingClientRect.top ? a : b))
        setActiveHref(`#${topmost.target.id}`)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="side-nav" aria-label="Secciones">
      <ul>
        {nav.map((item) => (
          <li key={item.href}>
            <a href={item.href} className={item.href === activeHref ? 'active' : undefined}>
              <span className="side-nav-line" aria-hidden="true" />
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
