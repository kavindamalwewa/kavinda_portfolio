import { useEffect, useRef, useState } from 'react'

/**
 * Flips to true once the element scrolls into view, then stops observing.
 * Returns [ref, inView] so callers can drive their own class names.
 */
export default function useInView({ threshold = 0.18, rootMargin = '0px 0px -60px 0px' } = {}) {
  const ref = useRef(null)
  // No IntersectionObserver (very old browser / SSR): show everything up front.
  const [inView, setInView] = useState(
    () => typeof IntersectionObserver === 'undefined',
  )

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, inView]
}
