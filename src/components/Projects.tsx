import { useState } from 'react'
import { Award, ExternalLink, Lock } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import type { ProjectImage } from '../data/portfolio'
import { ImageLightbox, ImageLightboxTrigger } from './ImageLightbox'
import { Reveal } from './Reveal'

export function Projects() {
  const { t } = useLanguage()
  const [lightbox, setLightbox] = useState<{ images: ProjectImage[]; index: number } | null>(
    null,
  )

  return (
    <section id="proyectos" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="mb-10">
            <p className="font-mono text-sm text-accent">{t.ui.projectsSection}</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              {t.ui.projectsTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-muted">{t.ui.projectsSubtitle}</p>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {t.projects.map((project, projectIndex) => (
            <Reveal
              key={project.id}
              delay={projectIndex * 100}
              className={project.featured ? 'lg:col-span-2' : undefined}
            >
              <article
                className={`card-hover group flex h-full flex-col rounded-2xl border bg-surface p-6 ${
                  project.featured
                    ? 'border-accent/40 shadow-[0_0_40px_color-mix(in_srgb,var(--color-accent)_8%,transparent)]'
                    : 'border-border'
                }`}
              >
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  {project.badge && (
                    <span className="rounded-full border border-border bg-bg px-3 py-1 text-xs text-muted">
                      {project.badge}
                    </span>
                  )}
                  {project.award && (
                    <span className="award-badge motion-reduce:animate-none inline-flex items-center gap-1 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      <Award size={12} />
                      {project.award}
                    </span>
                  )}
                  {project.confidential && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-accent-2/30 bg-accent-2/10 px-3 py-1 text-xs text-accent-2">
                      <Lock size={12} />
                      {t.ui.confidentialNote}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="mt-1 text-sm text-accent">{project.subtitle}</p>
                <p className="mt-4 leading-relaxed text-muted">{project.description}</p>

                {project.metrics && project.metrics.length > 0 && (
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-xl border border-border bg-bg px-3 py-3 text-center"
                      >
                        <p className="font-mono text-lg font-semibold text-accent">{metric.value}</p>
                        <p className="mt-1 text-xs text-muted">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                {project.images && project.images.length > 0 && (
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {project.images.map((image, imageIndex) => (
                      <figure
                        key={image.src}
                        className="group/image relative overflow-hidden rounded-xl border border-border bg-bg"
                      >
                        <button
                          type="button"
                          className="block w-full cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                          onClick={() =>
                            setLightbox({ images: project.images!, index: imageIndex })
                          }
                          aria-label={`${t.ui.expandImage}: ${image.caption}`}
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            loading="lazy"
                            className="aspect-video w-full object-cover object-top transition duration-300 group-hover/image:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover/image:scale-100"
                          />
                        </button>
                        <ImageLightboxTrigger
                          onClick={() =>
                            setLightbox({ images: project.images!, index: imageIndex })
                          }
                          label={t.ui.expandImage}
                        />
                        <figcaption className="border-t border-border px-3 py-2 text-center text-xs font-medium text-muted">
                          {image.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                )}

                <ul className="mt-5 space-y-2">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-bg px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.links && project.links.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-5">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-accent transition hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      >
                        {link.label}
                        <ExternalLink size={14} />
                      </a>
                    ))}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {lightbox && (
        <ImageLightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onChange={(index) => setLightbox((prev) => (prev ? { ...prev, index } : null))}
          labels={{
            close: t.ui.closeLightbox,
            expand: t.ui.expandImage,
            previous: t.ui.previousImage,
            next: t.ui.nextImage,
          }}
        />
      )}
    </section>
  )
}