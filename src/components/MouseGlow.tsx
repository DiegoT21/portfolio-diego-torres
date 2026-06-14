import { useEffect, useRef } from 'react'

export function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const el = ref.current
    if (!el) return

    const onMove = (event: PointerEvent) => {
      el.style.setProperty('--x', `${event.clientX}px`)
      el.style.setProperty('--y', `${event.clientY}px`)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className="mouse-glow pointer-events-none fixed inset-0 z-0 hidden md:block motion-reduce:hidden"
    />
  )
}