import { FileDown } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

type CvDownloadButtonProps = {
  className?: string
}

export function CvDownloadButton({ className = '' }: CvDownloadButtonProps) {
  const { t } = useLanguage()

  return (
    <a
      href={t.cv.href}
      download={t.cv.fileName}
      className={`btn-secondary inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${className}`}
    >
      <FileDown size={16} aria-hidden />
      {t.ui.downloadCv}
    </a>
  )
}