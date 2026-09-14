import { useEffect } from 'react'
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react'
import type { ProjectImage } from '../data/portfolio'

type ImageLightboxProps = {
  images: ProjectImage[]
  index: number
  onClose: () => void
  onChange: (index: number) => void
  labels: {
    close: string
    expand: string
    previous: string
    next: string
  }
}

export function ImageLightbox({
  images,
  index,
  onClose,
  onChange,
  labels,
}: ImageLightboxProps) {
  const image = images[index]
  const hasMultiple = images.length > 1

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft' && hasMultiple) {
        onChange((index - 1 + images.length) % images.length)
      }
      if (event.key === 'ArrowRight' && hasMultiple) {
        onChange((index + 1) % images.length)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [images.length, hasMultiple, index, onChange, onClose])

  if (!image) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-bg/90 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={image.caption}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full border border-border bg-surface p-2 text-muted transition hover:text-text"
        aria-label={labels.close}
      >
        <X size={20} />
      </button>

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              onChange((index - 1 + images.length) % images.length)
            }}
            className="absolute left-3 top-1/2 inline-flex -translate-y-1/2 rounded-full border border-border bg-surface p-2 text-muted transition hover:text-text"
            aria-label={labels.previous}
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              onChange((index + 1) % images.length)
            }}
            className="absolute right-3 top-1/2 inline-flex -translate-y-1/2 rounded-full border border-border bg-surface p-2 text-muted transition hover:text-text"
            aria-label={labels.next}
          >
            <ChevronRight size={22} />
          </button>
        </>
      )}

      <figure
        className="relative max-h-[90vh] w-full max-w-5xl"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-[82vh] w-full rounded-xl border border-border object-contain shadow-2xl"
        />
        <figcaption className="mt-3 text-center text-sm font-medium text-text">
          {image.caption}
          {hasMultiple && (
            <span className="ml-2 text-muted">
              ({index + 1}/{images.length})
            </span>
          )}
        </figcaption>
      </figure>
    </div>
  )
}

export function ImageLightboxTrigger({
  onClick,
  label,
}: {
  onClick: () => void
  label: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute right-2 top-2 rounded-full border border-border/80 bg-bg/80 p-1.5 text-muted opacity-100 backdrop-blur transition sm:opacity-0 sm:group-hover:opacity-100 hover:text-accent"
      aria-label={label}
    >
      <ZoomIn size={14} />
    </button>
  )
}