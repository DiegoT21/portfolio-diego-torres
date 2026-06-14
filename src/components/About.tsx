import { useLanguage } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

export function About() {
  const { t } = useLanguage()

  return (
    <section id="sobre-mi" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="mb-10">
            <p className="font-mono text-sm text-accent">{t.ui.aboutSection}</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              {t.ui.aboutTitle}
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {t.about.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 24)} delay={index * 80}>
              <article className="card-hover h-full rounded-2xl border border-border bg-surface p-6 leading-relaxed text-muted">
                {paragraph}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}