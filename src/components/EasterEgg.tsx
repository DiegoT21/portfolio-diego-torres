import { useCallback, useEffect, useState } from 'react'
import { Terminal, X } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useKonamiCode } from '../hooks/useKonamiCode'

const COMMAND = 'npm run hire-diego'
const LOGO_EVENT = 'portfolio:easter-egg'

export function triggerEasterEgg() {
  window.dispatchEvent(new CustomEvent(LOGO_EVENT))
}

export function EasterEgg() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [typed, setTyped] = useState('')

  const show = useCallback(() => setOpen(true), [])
  useKonamiCode(show)

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener(LOGO_EVENT, handler)
    return () => window.removeEventListener(LOGO_EVENT, handler)
  }, [])

  useEffect(() => {
    if (!open) {
      setTyped('')
      return
    }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setTyped(COMMAND)
      return
    }

    let i = 0
    const interval = window.setInterval(() => {
      i += 1
      setTyped(COMMAND.slice(0, i))
      if (i >= COMMAND.length) window.clearInterval(interval)
    }, 55)

    return () => window.clearInterval(interval)
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-bg/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="easter-egg-title"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-md rounded-2xl border border-border bg-surface p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <Terminal size={18} className="text-accent" aria-hidden />
            <h2 id="easter-egg-title" className="font-semibold">
              {t.ui.easterEggTitle}
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-lg border border-border p-1.5 text-muted transition hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label={t.ui.closeLightbox}
          >
            <X size={16} />
          </button>
        </div>

        <pre className="overflow-x-auto rounded-xl border border-border bg-bg px-4 py-3 font-mono text-sm text-accent">
          <span className="text-muted">$ </span>
          {typed}
          <span className="animate-pulse motion-reduce:animate-none">|</span>
        </pre>
        <p className="mt-4 text-sm text-muted">{t.ui.easterEggMessage}</p>
      </div>
    </div>
  )
}