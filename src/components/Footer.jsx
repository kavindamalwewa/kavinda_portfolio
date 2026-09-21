import useInView from '../hooks/useInView'
import { ArrowUp } from './icons/BrandIcons'
import './Footer.css'

/** Respects a reduced-motion preference; the global smooth scroll does not. */
function toTop() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
}

export default function Footer() {
  const [ref, inView] = useInView()

  return (
    <footer className="footer">
      <span className="footer__aura" aria-hidden="true" />

      <div className="shell">
        <div className={`footer__inner reveal ${inView ? 'is-visible' : ''}`} ref={ref}>
          <p className="footer__status" style={{ '--i': 0 }}>
            <span className="footer__pulse" aria-hidden="true" />
            Available for internships &amp; collaborations
          </p>

          <div className="footer__base" style={{ '--i': 1 }}>
            <p className="footer__meta">
              © {new Date().getFullYear()} — All rights reserved
            </p>
            <p className="footer__meta footer__meta--end">
              Kandy, Sri Lanka <span aria-hidden="true">·</span> Built with React &amp; Vite
            </p>
          </div>
        </div>
      </div>

      <button className="footer__toTop" type="button" onClick={toTop} aria-label="Back to top">
        <ArrowUp aria-hidden="true" />
      </button>
    </footer>
  )
}
