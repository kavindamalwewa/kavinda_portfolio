import useInView from '../hooks/useInView'
import { BookIcon, CodeGlyph, DownloadIcon, FolderIcon } from './icons/BrandIcons'
import './About.css'

const STATS = [
  { value: '10+', label: 'Projects Completed', Icon: FolderIcon, tone: 'blue' },
  { value: '15+', label: 'Technologies', Icon: CodeGlyph, tone: 'cyan' },
  { value: 'Ongoing', label: 'Always Learning', Icon: BookIcon, tone: 'violet' },
]

export default function About({ cvHref }) {
  const [ref, inView] = useInView()

  return (
    <section className="section about" id="about">
      <div className="shell">
        <p className="eyebrow">About Me</p>

        <div className={`about__grid reveal ${inView ? 'is-visible' : ''}`} ref={ref}>
          <div className="about__intro" style={{ '--i': 0 }}>
            <p className="about__text">
              I am an IT undergraduate with a strong interest in Artificial
              Intelligence, Machine Learning, Software Engineering, Web
              Development, and Software Testing &amp; Quality Assurance. I enjoy
              learning, building real-world projects, and collaborating with
              others to create impactful solutions.
            </p>
          </div>

          <ul className="stats">
            {STATS.map(({ value, label, Icon, tone }, i) => (
              <li className={`stat stat--${tone}`} key={label} style={{ '--i': i + 1 }}>
                <span className="stat__badge">
                  <Icon className="stat__icon" aria-hidden="true" />
                </span>
                <span className="stat__value">{value}</span>
                <span className="stat__label">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
