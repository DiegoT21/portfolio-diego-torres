import { SITE } from '../data/portfolio'
import { useLanguage } from '../i18n/LanguageContext'

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted md:flex-row md:px-8">
        <p>
          © {year} {SITE.name}. {t.ui.footerBuilt}
        </p>
        <p className="text-center font-mono text-xs md:text-right">
          {t.ui.footerTag} · {t.profile.location}
          <span className="mt-1 block text-muted/80">{t.ui.footerA11y}</span>
        </p>
      </div>
    </footer>
  )
}