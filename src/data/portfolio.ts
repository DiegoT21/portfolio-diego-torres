export type ProjectImage = {
  src: string
  alt: string
  caption: string
}

export type ProjectMetric = {
  value: string
  label: string
}

export type Project = {
  id: string
  title: string
  subtitle: string
  description: string
  highlights: string[]
  stack: string[]
  badge?: string
  award?: string
  metrics?: ProjectMetric[]
  featured?: boolean
  links?: { label: string; href: string }[]
  images?: ProjectImage[]
  confidential?: boolean
}

export type SkillGroup = {
  title: string
  items: string[]
}

export const SITE = {
  name: 'Diego Torres',
  email: 'diegoorlando211170@gmail.com',
  github: 'https://github.com/DiegoT21',
  linkedin: 'https://www.linkedin.com/in/diego-o-torres-41a1612a9/',
} as const

export function gmailComposeUrl(email: string, subject: string) {
  const params = new URLSearchParams({ view: 'cm', fs: '1', to: email, su: subject })
  return `https://mail.google.com/mail/?${params.toString()}`
}