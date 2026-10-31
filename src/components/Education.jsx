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
    heading: 'Achievements & Certifications & Other Activities',
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
    <li className="eduCard card">
      {(date || location) && (
        <div className="eduCard__meta">
          {date && (
            <span className="eduCard__date">
              <CalendarIcon className="eduCard__metaIcon" aria-hidden="true" />
              {date}
            </span>
          )}
          {location && (
            <span className="eduCard__loc">
              <PinIcon className="eduCard__metaIcon" aria-hidden="true" />
              {location}
            </span>
          )}
        </div>
      )}

      <h4 className="eduCard__title">{title}</h4>
      {institution && <p className="eduCard__inst">{institution}</p>}
      {detail && <p className="eduCard__detail">{detail}</p>}
    </li>
  )
}

export default function Education() {
  return (
    <section className="section education" id="education">
      <div className="shell">
        <header className="sectionHead">
          <h2 className="sectionHead__title" data-reveal>
            Education &amp; <span className="sectionHead__accent">Achievements</span>
          </h2>
          <span className="sectionHead__rule" aria-hidden="true" data-line />
        </header>

        {/* One group per column of data: a small labelled header, then a card grid. */}
        {COLUMNS.map(({ heading, Icon, tone, items }) => (
          <section className={`eduGroup tone-${tone}`} key={heading}>
            <h3 className="eduGroup__head" data-reveal>
              <span className="badge eduGroup__badge" aria-hidden="true">
                <Icon />
              </span>
              {heading}
            </h3>

            <ol className="eduGroup__grid" data-stagger>
              {items.map((item) => (
                <Item key={item.title} {...item} />
              ))}
            </ol>
          </section>
        ))}
      </div>
    </section>
  )
}
