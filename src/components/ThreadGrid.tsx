import type { CSSProperties } from 'react'

const COLS = 16
const ROWS = 7

function seeded(i: number) {
  const x = Math.sin(i * 999.77) * 10000
  return x - Math.floor(x)
}

const cells = Array.from({ length: COLS * ROWS }, (_, i) => {
  const row = Math.floor(i / COLS)
  const col = i % COLS
  const jitter = seeded(i) * 90
  const finalOpacity = 0.1 + seeded(i + 1) * 0.4
  const hot = seeded(i + 2) > 0.87
  return {
    key: i,
    delay: (row + col) * 40 + jitter,
    finalOpacity: hot ? Math.min(finalOpacity + 0.35, 0.9) : finalOpacity,
    hot,
  }
})

export function ThreadGrid() {
  return (
    <div className="thread-grid" role="presentation" aria-hidden="true">
      {cells.map((cell) => (
        <span
          key={cell.key}
          className={cell.hot ? 'thread-cell is-hot' : 'thread-cell'}
          style={
            {
              animationDelay: `${cell.delay}ms`,
              '--final-opacity': cell.finalOpacity,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}
