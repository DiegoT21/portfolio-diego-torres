import { Monitor, Moon, Sun } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useTheme, type ThemePreference } from '../theme/ThemeContext'

const icons: Record<ThemePreference, typeof Sun> = {
  light: Sun,
  dark: Moon,
  system: Monitor,
}

export function ThemeToggle({ compact = false, cycle = false }: { compact?: boolean; cycle?: boolean }) {
  const { preference, setPreference } = useTheme()
  const { t } = useLanguage()

  const options: { value: ThemePreference; label: string; aria: string }[] = [
    { value: 'light', label: 'L', aria: t.ui.themeLight },
    { value: 'dark', label: 'D', aria: t.ui.themeDark },
    { value: 'system', label: 'S', aria: t.ui.themeSystem },
  ]

  if (cycle) {
    const order: ThemePreference[] = ['light', 'dark', 'system']
    const next = order[(order.indexOf(preference) + 1) % order.length]
    const Icon = icons[preference]
    const current = options.find((option) => option.value === preference)

    return (
      <button
        type="button"
        aria-label={current?.aria}
        title={current?.aria}
        onClick={() => setPreference(next)}
        className="inline-flex rounded-full border border-border bg-surface p-2 text-muted transition hover:text-text"
      >
        <Icon size={16} aria-hidden />
      </button>
    )
  }

  return (
    <div
      className={`inline-flex rounded-full border border-border bg-surface p-0.5 ${compact ? 'text-xs' : 'text-sm'}`}
      role="group"
      aria-label="Theme"
    >
      {options.map((option) => {
        const Icon = icons[option.value]
        return (
          <button
            key={option.value}
            type="button"
            aria-label={option.aria}
            aria-pressed={preference === option.value}
            onClick={() => setPreference(option.value)}
            className={`inline-flex items-center justify-center rounded-full px-2 py-1 transition ${
              preference === option.value
                ? 'bg-accent text-bg'
                : 'text-muted hover:text-text'
            }`}
          >
            <Icon size={compact ? 14 : 16} aria-hidden />
          </button>
        )
      })}
    </div>
  )
}