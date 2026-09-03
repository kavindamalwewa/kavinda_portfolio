import { useState } from 'react'
import useInView from '../hooks/useInView'
import { ArrowRight } from './icons/BrandIcons'
import ProjectArt from './ProjectArt'
import './Projects.css'

/**
 * `cover`: point at a real screenshot (e.g. '/projects/room-design.jpg' in
 * public/) and it replaces the generated art. `href`: link out to the repo
 * or write-up — '#' until you have one.
 */
const PROJECTS = [
  {
    title: 'AI-Based Thematic Room Interior Design System',
    blurb:
      'Analyzes floor plans to detect rooms, generate optimal furniture layouts, and create 3D visualizations with thematic interior design recommendations.',
    tags: ['Python', 'OpenCV', 'YOLO', '3D Visualization'],
    art: 'rooms',
    tone: 'violet',
    featured: true,
    cover: null,
    href: '#',
  },
  {
    title: 'Plant Growth Monitoring & Image Processing System',
    blurb:
      'Monitors plant growth using image processing techniques to measure plant health, track growth over time, and visualize insights.',
    tags: ['Python', 'OpenCV', 'Image Processing'],
    art: 'growth',
    tone: 'green',
    cover: null,
    href: '#',
  },
  {
    title: 'AthletiCoach – AI Biomechanics Coaching System',
    blurb:
      'Analyzes athlete movements using computer vision to provide posture feedback, performance insights, and training recommendations.',
    tags: ['Python', 'MediaPipe', 'Computer Vision'],
    art: 'motion',
    tone: 'cyan',
    cover: null,
    href: '#',
  },
]

function ProjectCard({ project, index }) {
  const [coverFailed, setCoverFailed] = useState(false)
  const showCover = project.cover && !coverFailed

  return (
    <article className={`project project--${project.tone}`} style={{ '--i': index }}>
      <div className="project__media">
        {showCover ? (
          <img
            className="project__cover"
            src={project.cover}
            alt=""
            loading="lazy"
            onError={() => setCoverFailed(true)}
          />
        ) : (
          <ProjectArt variant={project.art} />
        )}
        {project.featured && <span className="project__badge">Featured</span>}
      </div>

      <div className="project__body">
        <h3 className="project__title">{project.title}</h3>
        <p className="project__blurb">{project.blurb}</p>

        <ul className="project__tags">
          {project.tags.map((tag) => (
            <li className="tag" key={tag}>
              {tag}
            </li>
          ))}
        </ul>

        <a className="project__link" href={project.href}>
          View Project
          <ArrowRight className="project__arrow" aria-hidden="true" />
          <span className="sr-only"> — {project.title}</span>
        </a>
      </div>
    </article>
  )
}

export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section className="section projects" id="projects">
      <div className="shell">
        <p className="eyebrow">Featured Projects</p>

        <div className={`projects__grid reveal ${inView ? 'is-visible' : ''}`} ref={ref}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
