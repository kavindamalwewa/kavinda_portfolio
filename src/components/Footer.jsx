import { scrollToTop } from '../motion/scroll'
import { ArrowUp } from './icons/BrandIcons'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__inner" data-stagger>
          <div className="footer__top">
            <p className="footer__status">
              <span className="footer__pulse" aria-hidden="true" />
              Available for internships &amp; collaborations
            </p>

            <button className="footer__toTop" type="button" onClick={scrollToTop} aria-label="Back to top">
              <ArrowUp aria-hidden="true" />
            </button>
          </div>

          <div className="footer__base">
            <p className="footer__meta">
              © {new Date().getFullYear()} — All rights reserved
            </p>
            <p className="footer__meta footer__meta--end">
              Kandy, Sri Lanka <span aria-hidden="true">·</span> Built with React &amp; Vite
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
