import { useLanguage } from '../i18n/LanguageContext'
import type { Locale } from '../i18n/translations'

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale, t } = useLanguage()

  const options: { code: Locale; label: string; aria: string }[] = [
    { code: 'es', label: 'ES', aria: t.ui.switchToEs },
    { code: 'en', label: 'EN', aria: t.ui.switchToEn },
  ]

  return (
    <div
      className={`inline-flex rounded-full border border-border bg-surface p-0.5 ${compact ? 'text-xs' : 'text-sm'}`}
      role="group"
      aria-label="Language"
    >
      {options.map((option) => (
        <button
          key={option.code}
          type="button"
          aria-label={option.aria}
          aria-pressed={locale === option.code}
          onClick={() => setLocale(option.code)}
          className={`rounded-full px-2.5 py-1 font-mono font-medium transition ${
            locale === option.code
              ? 'bg-accent text-bg'
              : 'text-muted hover:text-text'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}