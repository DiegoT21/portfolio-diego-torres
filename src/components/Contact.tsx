import { Code2, Mail, MapPin, Share2 } from 'lucide-react'
import { gmailComposeUrl, SITE } from '../data/portfolio'
import { useLanguage } from '../i18n/LanguageContext'
import { CvDownloadButton } from './CvDownloadButton'
import { Reveal } from './Reveal'

export function Contact() {
  const { t } = useLanguage()
  const gmailUrl = gmailComposeUrl(SITE.email, t.ui.gmailSubject)

  return (
    <section id="contacto" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface to-surface-2 p-6 sm:p-8 md:p-12">
            <p className="font-mono text-sm text-accent">{t.ui.contactSection}</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              {t.ui.contactTitle}
            </h2>
            <p className="mt-4 max-w-xl text-muted">{t.ui.contactSubtitle}</p>

            <div className="mt-8 flex flex-col gap-3 text-sm text-muted">
              <p className="inline-flex items-center gap-2">
                <MapPin size={16} className="text-accent" aria-hidden />
                {t.profile.location}
              </p>
              <a
                href={gmailUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex max-w-full items-start gap-2 transition hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Mail size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                <span className="break-all">{SITE.email}</span>
              </a>
              <a
                href={SITE.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Code2 size={16} className="text-accent" aria-hidden />
                GitHub
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Share2 size={16} className="text-accent" aria-hidden />
                LinkedIn
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={gmailUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg"
              >
                {t.ui.writeGmail}
              </a>
              <CvDownloadButton className="px-6 py-3" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}