import { useEffect, useRef } from 'react'

const KONAMI = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
]

export function useKonamiCode(onMatch: () => void) {
  const indexRef = useRef(0)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key
      const expected = KONAMI[indexRef.current]

      if (key === expected) {
        indexRef.current += 1
        if (indexRef.current === KONAMI.length) {
          indexRef.current = 0
          onMatch()
        }
      } else {
        indexRef.current = key === KONAMI[0] ? 1 : 0
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onMatch])
}