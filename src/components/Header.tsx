import { useEffect, useState, type MouseEvent } from 'react'
import { Menu, X } from 'lucide-react'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { useLanguage } from '../i18n/LanguageContext'
import { LanguageToggle } from './LanguageToggle'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [logoAnimating, setLogoAnimating] = useState(false)

  const sectionIds = t.navLinks.map((link) => link.href.replace('#', ''))
  const activeId = useScrollSpy(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setLogoAnimating(true)
    window.setTimeout(() => setLogoAnimating(false), 450)
    document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0.5 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border/80 bg-bg/85 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 md:px-8">
        <a
          href="#inicio"
          onClick={onLogoClick}
          className={`font-mono text-sm tracking-tight text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
            logoAnimating ? 'logo-wiggle inline-block' : ''
          }`}
          aria-label="Inicio"
        >
          &lt;diego /&gt;
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {t.navLinks.map((link) => {
            const id = link.href.replace('#', '')
            const active = activeId === id
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
                  active ? 'font-medium text-accent' : 'text-muted hover:text-text'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle compact />
          <LanguageToggle compact />
          <a
            href="#contacto"
            className="btn-primary rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent hover:bg-accent/20"
          >
            {t.ui.contactCta}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle compact />
          <LanguageToggle compact />
          <button
            type="button"
            className="inline-flex rounded-lg border border-border p-2 text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label={open ? t.ui.closeMenu : t.ui.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-surface px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {t.navLinks.map((link) => {
              const id = link.href.replace('#', '')
              const active = activeId === id
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`text-sm ${active ? 'font-medium text-accent' : 'text-muted'}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}