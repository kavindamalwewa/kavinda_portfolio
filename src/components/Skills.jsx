import useInView from '../hooks/useInView'
import {
  BrainIcon,
  CodeGlyph,
  GlobeIcon,
  ShieldIcon,
  ToolsIcon,
} from './icons/BrandIcons'
import './Skills.css'

/** level is out of 5 — tweak freely, the dots follow. */
const GROUPS = [
  {
    title: 'AI / ML',
    Icon: BrainIcon,
    tone: 'violet',
    items: [
      { name: 'Python', level: 4 },
      { name: 'OpenCV', level: 4 },
      { name: 'YOLO', level: 4 },
      { name: 'Scikit-learn', level: 4 },
    ],
  },
  {
    title: 'Programming',
    Icon: CodeGlyph,
    tone: 'blue',
    items: [
      { name: 'Python', level: 5 },
      { name: 'C', level: 5 },
      { name: 'C++', level: 4 },
      { name: 'Java', level: 4 },
      { name: 'JavaScript', level: 4 },
    ],
  },
  {
    title: 'Web Development',
    Icon: GlobeIcon,
    tone: 'teal',
    items: [
      { name: 'HTML', level: 5 },
      { name: 'CSS', level: 5 },
      { name: 'JavaScript', level: 4 },
    ],
  },
  {
    title: 'Tools & Platforms',
    Icon: ToolsIcon,
    tone: 'indigo',
    items: [
      { name: 'Git', level: 5 },
      { name: 'GitHub', level: 5 },
      { name: 'MySQL', level: 4 },
      { name: 'SQL Server', level: 4 },
    ],
  },
  {
    title: 'QA / Testing',
    Icon: ShieldIcon,
    tone: 'fuchsia',
    items: [
      { name: 'Software Testing', level: 4 },
      { name: 'Test Cases', level: 4 },
      { name: 'Manual Testing', level: 4 },
      { name: 'QA Fundamentals', level: 4 },
    ],
  },
]

const DOTS = [1, 2, 3, 4, 5]

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section className="section skills" id="skills">
      <div className="shell">
        <p className="eyebrow">Skills &amp; Tools</p>

        <div className={`skills__grid reveal ${inView ? 'is-visible' : ''}`} ref={ref}>
          {GROUPS.map(({ title, Icon, tone, items }, i) => (
            <article className={`skillcard skillcard--${tone}`} key={title} style={{ '--i': i }}>
              <h3 className="skillcard__head">
                <Icon className="skillcard__icon" aria-hidden="true" />
                {title}
              </h3>

              <ul className="skillcard__list">
                {items.map(({ name, level }) => (
                  <li className="skill" key={name}>
                    <span className="skill__name">{name}</span>
                    <span
                      className="skill__meter"
                      role="img"
                      aria-label={`${name}: ${level} out of 5`}
                    >
                      {DOTS.map((d) => (
                        <i key={d} className={`skill__dot ${d <= level ? 'is-on' : ''}`} />
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
