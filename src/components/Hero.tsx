import { useEffect } from 'react'
import { ArrowDown, Code2, Mail, Share2 } from 'lucide-react'
import { SITE } from '../data/portfolio'
import { useLanguage } from '../i18n/LanguageContext'
import { useTheme } from '../theme/ThemeContext'
import { CvDownloadButton } from './CvDownloadButton'
import { Reveal } from './Reveal'

export function Hero() {
  const { t } = useLanguage()
  const { resolved } = useTheme()

  useEffect(() => {
    const el = document.querySelector<HTMLElement>('.glow')
    if (!el) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const onMove = (event: PointerEvent) => {
      const rect = el.parentElement?.getBoundingClientRect()
      if (!rect) return
      const x = ((event.clientX - rect.left) / rect.width) * 100
      const y = ((event.clientY - rect.top) / rect.height) * 100
      el.style.setProperty('--x', `${x}%`)
      el.style.setProperty('--y', `${y}%`)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
      <div className="glow pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_auto] lg:gap-12">
          <Reveal>
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
                <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_var(--color-accent)]" />
                {t.ui.available}
              </p>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                {t.ui.greeting}{' '}
                <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
                  {SITE.name}
                </span>
              </h1>

              <p className="mt-3 font-mono text-base text-accent md:text-lg">{t.profile.role}</p>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
                {t.profile.tagline}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="#proyectos"
                  className="btn-primary inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-bg"
                >
                  {t.ui.viewProjects}
                </a>
                <CvDownloadButton />
                <a
                  href="#contacto"
                  className="btn-secondary inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium text-text"
                >
                  <Mail size={16} />
                  {t.ui.contact}
                </a>
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium text-text"
                >
                  <Code2 size={16} />
                  GitHub
                </a>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium text-text"
                >
                  <Share2 size={16} />
                  LinkedIn
                </a>
              </div>

              <div className="mt-16 flex items-center gap-2 text-xs text-muted">
                <ArrowDown size={14} className="animate-bounce motion-reduce:animate-none" />
                {t.ui.scrollHint}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mx-auto lg:mx-0 lg:justify-self-end">
              <div className="relative">
                <div
                  className={`absolute -inset-3 rounded-[1.75rem] blur-2xl ${
                    resolved === 'light'
                      ? 'bg-gradient-to-br from-accent/15 to-accent-2/15'
                      : 'bg-gradient-to-br from-accent/20 to-accent-2/20'
                  }`}
                />
                <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-2xl">
                  <img
                    src="/profile.jpg"
                    alt={SITE.name}
                    width={4480}
                    height={4831}
                    className="block w-[min(100vw-2.5rem,280px)] max-w-[280px] h-auto"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}