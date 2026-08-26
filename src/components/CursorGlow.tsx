import { useEffect } from 'react'

export function CursorGlow() {
  useEffect(() => {
    const root = document.documentElement

    function handleMove(event: MouseEvent) {
      root.style.setProperty('--cursor-x', `${event.clientX}px`)
      root.style.setProperty('--cursor-y', `${event.clientY}px`)
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return <div className="cursor-glow" aria-hidden="true" />
}
