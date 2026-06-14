import { useLanguage } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

export function Skills() {
  const { t } = useLanguage()

  return (
    <section id="habilidades" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="mb-10">
            <p className="font-mono text-sm text-accent">{t.ui.skillsSection}</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              {t.ui.skillsTitle}
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 70}>
              <div className="card-hover h-full rounded-2xl border border-border bg-surface p-5">
                <h3 className="font-mono text-sm text-accent">{group.title}</h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}