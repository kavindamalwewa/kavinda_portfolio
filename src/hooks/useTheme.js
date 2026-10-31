import { useCallback, useState } from 'react'
import { flushSync } from 'react-dom'

// Keep in sync with the pre-paint script in index.html.
const STORAGE_KEY = 'theme-preference'
const THEME_COLOR = { dark: '#08090a', light: '#fafaf8' }

/** index.html has already put `dark` or `light` on <html> before first paint. */
const readTheme = () => (document.documentElement.classList.contains('dark') ? 'dark' : 'light')

function applyTheme(theme) {
  const root = document.documentElement
  root.classList.remove('dark', 'light')
  root.classList.add(theme)
  root.style.colorScheme = theme
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[theme])
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // Storage blocked: the choice still holds for this visit.
  }
}

/** Returns [theme, toggle]. The swap cross-fades where View Transitions exist. */
export default function useTheme() {
  const [theme, setTheme] = useState(readTheme)

  const toggle = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark'
    const commit = () => {
      applyTheme(next)
      flushSync(() => setTheme(next))
    }
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (document.startViewTransition && !reduced) document.startViewTransition(commit)
    else commit()
  }, [theme])

  return [theme, toggle]
}
