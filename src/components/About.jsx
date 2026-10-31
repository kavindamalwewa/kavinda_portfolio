import Words from './Words'
import {
  CapIcon,
  ChipIcon,
  FolderIcon,
  PinIcon,
  TrophyIcon,
  UserCheckIcon,
} from './icons/BrandIcons'
import './About.css'

/* Quick facts shown as chips under the bio. */
const FACTS = [
  { label: 'Rajarata University of Srilanka', Icon: CapIcon },
  { label: 'Kandy, Sri Lanka', Icon: PinIcon },
  { label: 'Open for Internships', Icon: UserCheckIcon },
]

const STATS = [
  { value: '04+', label: 'Years Learning Journey', Icon: CapIcon, tone: 'cyan' },
  { value: '07+', label: 'Total Projects', Icon: FolderIcon, tone: 'violet' },
  { value: '04+', label: 'Certifications', Icon: TrophyIcon, tone: 'green' },
  { value: '15+', label: 'Technologies', Icon: ChipIcon, tone: 'blue' },
]

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="shell">
        <header className="sectionHead">
          <h2 className="sectionHead__title" data-reveal>
            About <span className="sectionHead__accent">Me</span>
          </h2>
          <span className="sectionHead__rule" aria-hidden="true" data-line />
        </header>

        <div className="about__body">
          <article className="whoami">
            {/* Words brighten one by one as the headline scrolls through. */}
            <h3 className="whoami__headline" data-words>
              <Words>Building</Words>{' '}
              <span className="whoami__accent">
                <Words>intelligent systems</Words>
              </span>{' '}
              <Words>that solve real-world problems.</Words>
            </h3>

            <p className="whoami__text" data-reveal>
              I am an IT undergraduate with a strong interest in Artificial
              Intelligence, Machine Learning, Software Engineering, Web
              Development, and Software Testing &amp; Quality Assurance. I enjoy
              learning, building real-world projects, and collaborating with
              others to create impactful solutions.
            </p>

            <ul className="facts" data-stagger>
              {FACTS.map(({ label, Icon }) => (
                <li className="fact" key={label}>
                  <Icon className="fact__icon" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </article>

          <ul className="stats" data-stagger>
            {STATS.map(({ value, label, Icon, tone }) => (
              <li className={`stat card tone-${tone}`} key={label}>
                <span className="badge stat__badge">
                  <Icon className="stat__icon" aria-hidden="true" />
                </span>
                <span className="stat__value" data-count>
                  {value}
                </span>
                <span className="stat__label">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
