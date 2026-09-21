import useInView from '../hooks/useInView'
import {
  BrainIcon,
  CloudIcon,
  CodeGlyph,
  DatabaseIcon,
  GlobeIcon,
  ShieldIcon,
  ToolsIcon,
} from './icons/BrandIcons'
import './Skills.css'

/**
 * `role` is the track each group belongs to; `note` adds a short qualifier
 * next to a single item.
 */
const GROUPS = [
  {
    title: 'Programming Languages',
    Icon: CodeGlyph,
    tone: 'blue',
    items: ['Python', 'Java', 'C', 'C++', 'JavaScript', 'SQL'],
  },
  {
    title: 'AI / Machine Learning',
    role: 'Aspiring AI/ML Engineer',
    Icon: BrainIcon,
    tone: 'violet',
    items: ['OpenCV', 'YOLO', 'Flask', 'TensorFlow', 'Keras', 'PyTorch' ],
  },
  {
    title: 'Frontend & Mobile',
    role: 'Software Engineering',
    Icon: GlobeIcon,
    tone: 'cyan',
    items: ['HTML', 'CSS', 'React', 'Next.js', 'Tailwind CSS', 'React Native', 'Android'],
  },
  {
    title: 'Backend & Databases',
    role: 'Software Engineering',
    Icon: DatabaseIcon,
    tone: 'green',
    items: ['Node.js', 'Express', 'Firebase', 'MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB'],
  },
  {
    title: 'Cloud & Deployment',
    role: 'Software Engineering',
    Icon: CloudIcon,
    tone: 'amber',
    items: ['AWS', 'Microsoft Azure', 'Cloudflare', 'Netlify', 'Railway', 'Render'],
  },
  {
    title: 'QA & Testing',
    role: 'Quality Assurance',
    Icon: ShieldIcon,
    tone: 'fuchsia',
    items: [
      'Software Testing',
      'Manual Testing',
      'Test Case Design',
      'QA Fundamentals',
      { name: 'Postman', note: 'API testing' },
    ],
  },
  {
    title: 'Tools & Workflow',
    role: 'Everyday toolkit',
    Icon: ToolsIcon,
    tone: 'indigo',
    items: ['Git', 'GitHub', 'VS Code', 'Figma','Postman',],
  },
]

const asItem = (item) => (typeof item === 'string' ? { name: item } : item)

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section className="section skills" id="skills">
      <div className="shell">
        <header className="sectionHead">
          <h2 className="sectionHead__title">
            Skills &amp; <span className="sectionHead__accent">Tools</span>
          </h2>
          <span className="sectionHead__rule" aria-hidden="true" />
        </header>

        <div className={`skills__grid reveal ${inView ? 'is-visible' : ''}`} ref={ref}>
          {GROUPS.map(({ title, role, Icon, tone, items }, i) => (
            <article className={`skillcard skillcard--${tone}`} key={title} style={{ '--i': i }}>
              <div className="skillcard__head">
                <span className="skillcard__badge" aria-hidden="true">
                  <Icon className="skillcard__icon" />
                </span>
                <div>
                  <h3 className="skillcard__title">{title}</h3>
                  <p className="skillcard__role">{role}</p>
                </div>
              </div>

              <ul className="skillcard__list">
                {items.map(asItem).map(({ name, note }) => (
                  <li className="chip" key={name}>
                    {name}
                    {note && <span className="chip__note">{note}</span>}
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
