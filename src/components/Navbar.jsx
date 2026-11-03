import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import useTheme from '../hooks/useTheme'
import { lockScroll, unlockScroll } from '../motion/scroll'
import { CloseIcon, DownloadIcon, MenuIcon, MoonIcon, SunIcon } from './icons/BrandIcons'
import './Navbar.css'

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

function ThemeToggle() {
  const [theme, toggle] = useTheme()
  const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'

  return (
    <button className="nav__iconBtn" type="button" onClick={toggle} aria-label={label} title={label}>
      <span className="nav__themeIcon" key={theme}>
        {theme === 'dark' ? <SunIcon aria-hidden="true" /> : <MoonIcon aria-hidden="true" />}
      </span>
    </button>
  )
}

export default function Navbar({ cvHref }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const linksRef = useRef(null)
  const pillRef = useRef(null)

  // Solidify the bar once the page leaves the very top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight whichever section is currently in view.
  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Slide the highlight pill under the active link (re-measured on resize).
  useLayoutEffect(() => {
    const nav = linksRef.current
    const pill = pillRef.current
    if (!nav || !pill) return

    const place = () => {
      const link = nav.querySelector('[aria-current]')
      if (!link || !link.offsetWidth) return
      pill.style.width = `${link.offsetWidth}px`
      pill.style.transform = `translateX(${link.offsetLeft}px)`
      // First placement snaps; later ones animate.
      requestAnimationFrame(() => pill.classList.add('is-ready'))
    }
    place()
    const observer = new ResizeObserver(place)
    observer.observe(nav)
    return () => observer.disconnect()
  }, [active])

  // Lock scroll + allow Escape while the mobile sheet is open. The sheet only
  // exists below the desktop breakpoint, so widening the window closes it too.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const desktop = window.matchMedia('(min-width: 1181px)')
    const onDesktop = (e) => e.matches && setOpen(false)
    lockScroll('nav-menu')
    window.addEventListener('keydown', onKey)
    desktop.addEventListener('change', onDesktop)
    return () => {
      unlockScroll('nav-menu')
      window.removeEventListener('keydown', onKey)
      desktop.removeEventListener('change', onDesktop)
    }
  }, [open])

  // Release scrolling before the jump, so smooth scroll can carry the page there.
  const closeAndGo = () => {
    unlockScroll('nav-menu')
    setOpen(false)
  }

  return (
    <header className={`nav ${scrolled || open ? 'is-solid' : ''} ${open ? 'is-menu' : ''}`}>
      <div className="nav__inner">
        <a className="nav__brand" href="#home">
          <span className="nav__logo" aria-hidden="true">
            <img src="/favicon2.png" alt="" />
          </span>
          <span className="nav__brandText">
            <span className="nav__name">
              Kavinda<span className="nav__dot"> </span>
              <span className="nav__nameAccent">Malwewa</span>
            </span>
            <span className="nav__tagline">BSc. IT Undergraduate</span>
          </span>
        </a>

        <nav className="nav__links" aria-label="Primary" ref={linksRef}>
          <span className="nav__pill" ref={pillRef} aria-hidden="true" />
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav__link ${active === link.id ? 'is-active' : ''}`}
              aria-current={active === link.id ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <ThemeToggle />
          {/* Collapses to a round icon button once the bar floats; the label stays readable to screen readers. */}
          <a className="btn btn--primary nav__cta" href={cvHref} download="Kavinda-Malwewa-CV.pdf">
            <span className="nav__ctaText">Download CV</span>
            <DownloadIcon className="nav__ctaIcon" aria-hidden="true" />
          </a>
          <button
            className="nav__iconBtn nav__toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon aria-hidden="true" /> : <MenuIcon aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`nav__sheet ${open ? 'is-open' : ''}`}
        hidden={!open}
        data-lenis-prevent
      >
        {LINKS.map((link, i) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`nav__sheetLink ${active === link.id ? 'is-active' : ''}`}
            style={{ '--i': i }}
            onClick={closeAndGo}
          >
            {link.label}
          </a>
        ))}
        <a
          className="btn btn--primary btn--lg nav__sheetCta"
          href={cvHref}
          download="Kavinda-Malwewa-CV.pdf"
          style={{ '--i': LINKS.length }}
        >
          Download CV
        </a>
      </div>
    </header>
  )
}
