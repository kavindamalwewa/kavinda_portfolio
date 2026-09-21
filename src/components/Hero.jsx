import { ArrowRight, CodeGlyph } from './icons/BrandIcons'
import TechStrip from './TechStrip'
// Swap this file (src/assets/kavinda.png) for your own photo, or point the import
// at a new filename — Vite hashes and bundles whatever it resolves to.
import heroPhoto from '../assets/kavinda.png'
import './Hero.css'

const ROLES = [
  'IT Undergraduate',
  'Aspiring AI/ML Engineer',
  'Software Engineering',
  'QA',
]

export default function Hero({ cvHref }) {
  return (
    <section className="hero" id="home">
      {/* ambient background */}
      <div className="hero__aura" aria-hidden="true">
        <span className="aura aura--violet" />
        <span className="aura aura--blue" />
        <span className="hero__grid" />
      </div>

      <div className="hero__inner">
        <div className="hero__copy">
          <h1 className="hero__name">
            <span className="hero__nameLine">Kavinda</span>
            <span className="hero__nameLine hero__nameLine--grad">Malwewa</span>
          </h1>

          <p className="hero__roles">
            {ROLES.map((role, i) => (
              <span key={role}>
                {i > 0 && <span className="hero__sep" aria-hidden="true">|</span>}
                {role}
              </span>
            ))}
          </p>

          <p className="hero__bio">
            Motivated IT undergraduate with a strong foundation in programming,
            software engineering, AI/ML, and quality assurance.
            <br />
            Always learning, always building.
          </p>

          <div className="hero__cta">
            <a className="btn btn--primary" href="#projects">
              View My Work
              <ArrowRight className="btn__icon" aria-hidden="true" />
            </a>
          </div>

          <TechStrip />
        </div>

        <div className="hero__visual">
          <span className="hero__dots hero__dots--top" aria-hidden="true" />
          <span className="hero__dots hero__dots--bottom" aria-hidden="true" />

          <div className="hero__cards">
            <figure className="photocard">
              <img
                className="photocard__img"
                src={heroPhoto}
                alt="Kavinda Malwewa"
                width="1272"
                height="1236"
                loading="eager"
              />
            </figure>

            <figure className="codecard" aria-hidden="true">
              <figcaption className="codecard__bar">
                <CodeGlyph className="codecard__glyph" />
                <span className="codecard__title">Code</span>
                <span className="codecard__dot" />
              </figcaption>
              <pre className="codecard__body">
                <code>
                  <span className="tok-kw">const</span>{' '}
                  <span className="tok-var">developer</span>{' '}
                  <span className="tok-op">=</span> {'{'}
                  {'\n  '}
                  <span className="tok-prop">name</span>:{' '}
                  <span className="tok-str">"Kavinda Malwewa"</span>,{'\n  '}
                  <span className="tok-prop">skills</span>: [
                  <span className="tok-str">"AI/ML"</span>,{' '}
                  <span className="tok-str">"SE"</span>,{'\n    '}
                  <span className="tok-str">"QA"</span>,{' '}
                  <span className="tok-str">"Software Testing"</span>,{' '}{'\n    '}
                  <span className="tok-str">"Full Stack Developer"</span>],{'\n  '}
                  <span className="tok-prop">passion</span>:{' '}
                  <span className="tok-str">"Building intelligent{'\n    '}solutions"</span>
                  ,{'\n'}
                  {'};'}
                </code>
              </pre>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
