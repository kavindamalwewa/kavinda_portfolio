import {
  ArrowRight,
  ExternalLinkIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from './icons/BrandIcons'
import { SOCIALS } from '../data/socials'
// Swap this file (src/assets/kavinda.png) for your own photo, or point the import
// at a new filename — Vite hashes and bundles whatever it resolves to.
import heroPhoto from '../assets/kavinda.png'
import './Hero.css'

const SOCIAL_LINKS = [
  { label: 'GitHub', href: SOCIALS.github, Icon: GitHubIcon },
  { label: 'LinkedIn', href: SOCIALS.linkedin, Icon: LinkedInIcon },
]

const ROLES = [
  'IT Undergraduate',
  'Aspiring AI/ML Engineer',
  'Software Engineering',
  'QA',
]

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="shell hero__inner">
        <div className="hero__copy">
          {/* Each word rises out of its own mask on load. */}
          <h1 className="hero__name">
            <span className="hero__line">
              <span className="hero__mask">
                <span className="hero__word" data-hero-word>
                  Kavinda
                </span>
              </span>
            </span>{' '}
            <span className="hero__line hero__line--accent">
              <span className="hero__mask">
                <span className="hero__word" data-hero-word>
                  Malwewa
                </span>
              </span>
            </span>
          </h1>

          <p className="hero__roles" data-hero-fade>
            {ROLES.map((role, i) => (
              <span key={role}>
                {i > 0 && <span className="hero__sep" aria-hidden="true">|</span>}
                {role}
              </span>
            ))}
          </p>

          <p className="hero__bio" data-hero-fade>
            Motivated IT undergraduate with a strong foundation in programming,
            software engineering, AI/ML, and quality assurance.
            <br />
            Always learning, always building.
          </p>

          <div className="hero__cta" data-hero-fade>
            <a className="btn btn--primary btn--lg" href="#projects">
              View My Work
              <ArrowRight className="btn__icon btn__icon--nudge" aria-hidden="true" />
            </a>
            <a className="btn btn--ghost btn--lg" href="#contact">
              Contact Me
              <MailIcon className="btn__icon" aria-hidden="true" />
            </a>
          </div>

          <ul className="hero__socials" data-hero-fade>
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a className="heroSocial" href={href} target="_blank" rel="noreferrer noopener">
                  <Icon className="heroSocial__icon" aria-hidden="true" />
                  {label}
                  <ExternalLinkIcon className="heroSocial__out" aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <div className="hero__frame">
            {/* The cut-out portrait on its own: it wipes up into view and settles. */}
            <div className="hero__stage" data-hero-stage>
              <div className="hero__shift" data-hero-shift>
                <div className="hero__wipe" data-hero-wipe>
                  <img
                    className="hero__photo"
                    data-hero-img
                    src={heroPhoto}
                    alt="Kavinda Malwewa"
                    width="1272"
                    height="1236"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
