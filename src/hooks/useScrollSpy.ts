import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds: string[], offset = 120) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')
  const idsKey = sectionIds.join(',')

  useEffect(() => {
    const sections = idsKey
      .split(',')
      .map((id) => document.getElementById(id.replace('#', '')))
      .filter(Boolean) as HTMLElement[]

    if (sections.length === 0) return

    const onScroll = () => {
      const scrollY = window.scrollY + offset
      let current = sections[0].id

      for (const section of sections) {
        if (section.offsetTop <= scrollY) {
          current = section.id
        }
      }

      setActiveId(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [idsKey, offset])

  return activeId
}