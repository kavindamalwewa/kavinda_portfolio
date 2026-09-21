import useInView from '../hooks/useInView'
import { CalendarIcon, CapIcon, PinIcon, TrophyIcon } from './icons/BrandIcons'
import './Education.css'

/**
 * Each column runs its own list and can differ in length. Every field except
 * `title` is optional, so an entry renders only what it actually has.
 */
const COLUMNS = [
  {
    heading: 'Education',
    Icon: CapIcon,
    tone: 'violet',
    items: [
      {
        date: '2024 — Present',
        title: 'Bachelor of Science (B.Sc.) in Information Technology',
        institution: 'Rajarata University of Sri Lanka',
        detail: 'Faculty of Applied Sciences • Department of Information Technology',
        location: 'Mihintale, Sri Lanka',
      },
      {
        date: '2025 - Present',
        title: 'Bachelor of Information Technology (BIT)',
        institution: 'University of Colombo School of Computing (UCSC)',
        detail: 'External Degree Programme',
        location: 'Colombo, Sri Lanka',
      },
      {
        date: '2011 - 2019',
        title: 'G.C.E. Ordinary Level & Advanced Level',
        institution: 'Ranabima Royal College, Kandy',
        location: 'Kandy, Sri Lanka',
      },
    ],
  },
  {
    heading: 'Achievements & Certifications',
    Icon: TrophyIcon,
    tone: 'cyan',
    items: [
      {
        date: 'Jul 2026',
        title: 'Dean’s List Award',
        detail: 'Faculty of Applied Sciences, Rajarata University of Sri Lanka',
      },
      {
        date: 'Jul 2026',
        title: 'Agile Mastery: Empowering Teams for Project Success',
        detail:
          'Department of Computing, Faculty of Applied Sciences, Rajarata University of Sri Lanka',
      },
      {
        date: 'Jul 2025',
        title: 'Appreciation for Contribution to FASEXPLORE 2025',
        detail: 'Faculty of Applied Sciences, Rajarata University of Sri Lanka',
      },
      {
        date: '2025 — 2026',
        title: 'Committee Member — ARICT',
        detail: 'Contributing to technical events, workshops and community initiatives.',
      },
    ],
  },
]

function Item({ date, title, institution, detail, location }) {
  return (
    <li className="tItem">
      <div className="tItem__main">
        <h4 className="tItem__title">{title}</h4>
        {institution && <p className="tItem__inst">{institution}</p>}
        {detail && <p className="tItem__detail">{detail}</p>}
      </div>

      {(date || location) && (
        <div className="tItem__meta">
          {date && (
            <span className="tItem__date">
              <CalendarIcon className="tItem__metaIcon" aria-hidden="true" />
              {date}
            </span>
          )}
          {location && (
            <span className="tItem__loc">
              <PinIcon className="tItem__metaIcon" aria-hidden="true" />
              {location}
            </span>
          )}
        </div>
      )}
    </li>
  )
}

export default function Education() {
  const [ref, inView] = useInView()

  return (
    <section className="section education" id="education">
      <div className="shell">
        <header className="sectionHead">
          <h2 className="sectionHead__title">
            Education &amp; <span className="sectionHead__accent">Achievements</span>
          </h2>
          <span className="sectionHead__rule" aria-hidden="true" />
        </header>

        <div className={`edu__grid reveal ${inView ? 'is-visible' : ''}`} ref={ref}>
          {COLUMNS.map(({ heading, Icon, tone, items }, c) => (
            <section className={`track track--${tone}`} key={heading} style={{ '--i': c }}>
              <h3 className="track__head">
                <span className="track__badge" aria-hidden="true">
                  <Icon className="track__icon" />
                </span>
                {heading}
              </h3>

              <ol className="track__list">
                {items.map((item) => (
                  <Item key={item.title} {...item} />
                ))}
              </ol>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
