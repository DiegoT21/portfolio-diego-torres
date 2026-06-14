import { useLanguage } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="servicios" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="mb-10">
            <p className="font-mono text-sm text-accent">{t.ui.servicesSection}</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              {t.ui.servicesTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-muted">{t.ui.servicesSubtitle}</p>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {t.services.map((service, index) => (
            <Reveal key={service.title} delay={index * 80} className="h-full">
              <article className="card-hover h-full rounded-2xl border border-border bg-surface p-6">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <h3 className="font-mono text-sm text-accent">{t.ui.processTitle}</h3>
          <ol className="mt-6 grid list-none gap-4 p-0 md:grid-cols-4">
            {t.process.map((step) => (
              <li
                key={step.step}
                className="card-hover flex h-full flex-col rounded-2xl border border-border bg-surface p-5"
              >
                <span className="font-mono text-xs text-accent">{step.step}</span>
                <p className="mt-2 font-semibold">{step.title}</p>
                <p className="mt-2 text-sm text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}