import { Fragment } from 'react'
import useInView from '../hooks/useInView'
import { CapIcon, TrophyIcon, UsersIcon } from './icons/BrandIcons'
import './Education.css'

const EDUCATION = [
  {
    date: ['Present'],
    title: 'Rajarata University of Sri Lanka',
    lines: ['IT Undergraduate'],
    Icon: CapIcon,
    tone: 'violet',
  },
  {
    date: ['Present'],
    title: 'University of Colombo School of Computing (UCSC)',
    lines: ['Bachelor of Information Technology (BIT),', 'External Degree Programme'],
    Icon: CapIcon,
    tone: 'violet',
  },
]

const ACHIEVEMENTS = [
  {
    date: ['2025'],
    title: 'AR/VR Stall Team Leader – FASEXPLORE 2025',
    lines: ['Led the AR/VR stall team, overseeing setup,', 'demonstrations, and visitor engagement.'],
    Icon: TrophyIcon,
    tone: 'pink',
  },
  {
    date: ['2023', 'Present'],
    title: 'Committee Member – ARICT',
    lines: ['Active member contributing to technical events,', 'workshops, and community initiatives.'],
    Icon: UsersIcon,
    tone: 'violet',
  },
]

function Entry({ item, side, first, last, index }) {
  const edges = `${first ? 'is-first' : ''} ${last ? 'is-last' : ''}`
  if (!item) return <div className={`entry entry--empty ${edges}`} style={{ '--i': index }} />

  const { Icon, tone, date, title, lines } = item
  return (
    <article className={`entry entry--${side} entry--${tone} ${edges}`} style={{ '--i': index }}>
      <span className="entry__badge">
        <Icon className="entry__icon" aria-hidden="true" />
      </span>

      <p className="entry__date">
        {date.map((d) => (
          <span key={d}>{d}</span>
        ))}
      </p>

      <div className="entry__text">
        <h3 className="entry__title">{title}</h3>
        {lines.map((line) => (
          <p className="entry__line" key={line}>
            {line}
          </p>
        ))}
      </div>
    </article>
  )
}

export default function Education() {
  const [ref, inView] = useInView()
  const rowCount = Math.max(EDUCATION.length, ACHIEVEMENTS.length)
  const rows = Array.from({ length: rowCount }, (_, i) => i)

  return (
    <section className="section education" id="education">
      <div className="shell">
        <h2 className="section__title">Education &amp; Achievements</h2>

        <div className={`edu__grid reveal ${inView ? 'is-visible' : ''}`} ref={ref}>
          {rows.map((i) => {
            const first = i === 0
            const last = i === rowCount - 1
            return (
              <Fragment key={i}>
                <Entry item={EDUCATION[i]} side="left" first={first} last={last} index={i} />
                <div className="edu__node" style={{ '--i': i }}>
                  <span className="edu__dot" />
                </div>
                <Entry item={ACHIEVEMENTS[i]} side="right" first={first} last={last} index={i} />
              </Fragment>
            )
          })}
        </div>
      </div>
    </section>
  )
}
