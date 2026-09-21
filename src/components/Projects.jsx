import { useCallback, useEffect, useRef, useState } from 'react'
import useInView from '../hooks/useInView'
import { ArrowRight, ChevronIcon, CloseIcon } from './icons/BrandIcons'
import ProjectArt from './ProjectArt'
import './Projects.css'

/**
 * `cover`: point at a real screenshot (e.g. '/projects/floorplan-ai.jpg' in
 * public/) and it replaces the generated art. `href`: link out to the repo or
 * write-up — leave null and the card shows only the details dialog.
 */
const PROJECTS = [
  {
    title: 'FloorPlan AI — Intelligent Interior Design System',
    category: 'AI / Machine Learning / Computer Vision / Web Application',
    blurb:
      'An AI-based interior design system that analyzes 2D floor plans, detects architectural elements, generates furniture layouts, and provides 3D visualization of selected room designs.',
    detail: [
      'FloorPlan AI is my final-year project focused on transforming a traditional 2D floor plan into an interactive interior design experience.',
      'The system processes an uploaded floor-plan image and identifies important architectural elements such as walls, doors, windows, and rooms. After detecting the room structure, it generates multiple furniture arrangements based on room dimensions, furniture requirements, accessibility, and available space.',
      'Users can compare generated layouts and select a preferred arrangement. The selected layout is then passed to a separate 3D visualization component to display the room with furniture.',
    ],
    features: [
      'Upload and process floor-plan images',
      'Detect walls, doors, windows, and rooms',
      'Room-based furniture placement',
      'Generate multiple furniture layouts',
      'Collision and boundary checking',
      'Door and window clearance checking',
      'Layout scoring',
      'Compare different generated layouts',
      'Select a preferred layout',
      '3D visualization of the selected design',
    ],
    tech: ['Python', 'YOLO', 'OpenCV', 'React', 'JavaScript', 'Computer Vision', 'Machine Learning'],
    contribution: [
      'Floor-plan dataset preparation and analysis',
      'Floor-plan element detection',
      'Furniture layout generation algorithm',
      'Layout validation and scoring',
      'Integration between detection and layout-generation components',
      'Development of the overall system architecture',
    ],
    tags: ['AI', 'Computer Vision', 'Python', 'YOLO', 'React'],
    art: 'rooms',
    tone: 'violet',
    featured: true,
    cover: null,
    href: null,
  },
  {
    title: 'Sparkshift — Furniture Layout Generation Module',
    category: 'Python / Algorithm / Interior Design',
    blurb:
      'A dependency-free Python engine that generates, validates, and scores multiple rule-based furniture arrangements for rectangular rooms.',
    detail: [
      'Sparkshift is a rule-based furniture layout generation engine designed to generate practical furniture arrangements from structured room information.',
      'The system receives room dimensions, doors, windows, and furniture requirements as input. It generates multiple deterministic layout alternatives and evaluates them using different layout criteria.',
      'Furniture placement is separated from the room-detection stage, allowing the engine to receive room information from an external detection system such as FloorPlan AI.',
    ],
    features: [
      'Room data model',
      'Door and window representation',
      'Furniture data model',
      'Automatic furniture placement',
      'Multiple layout generation',
      '0° and 90° furniture rotation',
      'Furniture quantity support',
      'Room-boundary validation',
      'Furniture collision detection',
      'Door/window clearance checking',
      'Layout scoring',
      'Recommended layout selection',
      'Manual layout selection',
      'JSON input/output',
      'CLI support',
      'Web-based visualization',
    ],
    extra: {
      title: 'Layout scoring',
      body: 'Generated layouts are evaluated using factors such as:',
      items: [
        'Accessibility',
        'Space utilization',
        'Wall alignment',
        'Furniture distribution',
        'Layout completeness',
        'Collision avoidance',
      ],
    },
    tech: ['Python', 'JSON', 'Algorithm Design', 'Rule-Based Systems', 'HTML/CSS/JavaScript'],
    contribution: [
      'Designed the furniture placement logic',
      'Developed deterministic layout generation',
      'Implemented furniture collision and boundary rules',
      'Implemented layout scoring',
      'Developed JSON integration',
      'Tested multiple room configurations',
    ],
    tags: ['Python', 'Algorithms', 'Automation', 'JSON'],
    art: 'layout',
    tone: 'amber',
    cover: null,
    href: null,
  },
  {
    title: 'Plant Growth Monitoring & Image Processing System',
    category: 'Computer Vision / Image Processing',
    blurb:
      'A computer vision system that analyzes plant images to measure plant growth and estimate plant health using image-processing techniques.',
    detail: [
      'This project uses digital image processing techniques to analyze plant images captured under controlled conditions.',
      'Images were captured using an iPhone 13 mounted on a tripod, with a ruler included as a reference for real-world measurements. Image-processing techniques were then applied to separate the plant from the background and analyze different regions of the plant.',
      'The system uses color information to identify green and yellow regions and calculate a plant-health-related score based on the detected areas.',
    ],
    features: [
      'Plant image acquisition',
      'Image preprocessing',
      'Background removal',
      'HSV color-space processing',
      'Green-region detection',
      'Yellow-region detection',
      'Morphological operations',
      'Plant size/growth measurement',
      'Reference-based measurement',
      'Plant health estimation',
    ],
    extra: {
      title: 'Image processing techniques',
      items: [
        'HSV segmentation',
        'Morphological opening',
        'Background removal',
        'Green normalization',
        'Dilation',
        'Image subtraction',
      ],
    },
    tech: ['Python', 'OpenCV', 'NumPy', 'Image Processing'],
    contribution: [
      'Image acquisition setup',
      'Image preprocessing',
      'HSV-based segmentation',
      'Background removal',
      'Plant region analysis',
      'Growth measurement',
      'Health-score calculation',
    ],
    tags: ['Python', 'OpenCV', 'Computer Vision', 'Image Processing'],
    art: 'growth',
    tone: 'green',
    cover: null,
    href: null,
  },
  {
    title: 'FitNote — Fitness Activity Tracking Application',
    category: 'Android Application / Mobile Development',
    blurb:
      'An Android application for tracking fitness activities, calculating BMI, recording workouts, and visualizing weekly activity data.',
    detail: [
      'FitNote is an Android-based fitness activity tracking application developed as part of the Mobile Application Development module.',
      'The application allows users to create an account, log in, record different physical activities, calculate BMI, and view their activity history. Workout records are stored locally using SQLite, allowing the application to work without requiring a constant internet connection.',
    ],
    features: [
      'User registration',
      'User login',
      'BMI calculation',
      'Fitness activity recording',
      'Activity history',
      'Weekly activity tracking',
      'Activity categorization',
      'Color-coded activity records',
      'Weekly activity charts',
      'Local database storage',
      'CRUD operations',
      'Offline functionality',
      'Material Design interface',
    ],
    extra: {
      title: 'Supported activities',
      items: [
        'Walking',
        'Running',
        'Cycling',
        'Push-ups',
        'Squats',
        'Weightlifting',
        'Jumping jacks',
        'Bicycle crunches',
        'Bicep curls',
        'Shoulder press',
      ],
    },
    tech: ['Java', 'Android Studio', 'SQLite', 'XML', 'Material Design 3', 'MPAndroidChart', 'Gradle'],
    contribution: [
      'Android UI development',
      'SQLite database implementation',
      'Activity tracking functionality',
      'BMI calculation',
      'Data visualization',
    ],
    tags: ['Android', 'Java', 'SQLite', 'Mobile Development'],
    art: 'mobile',
    tone: 'cyan',
    cover: null,
    href: null,
  },
  {
    title: 'Image Classification Model',
    category: 'Machine Learning / AI',
    blurb:
      'A Python-based machine learning project that classifies images into predefined categories using an image-classification model.',
    detail: [
      'This project explores the use of machine learning techniques for automatically identifying and classifying images.',
      'The system processes image data, prepares the dataset for training, trains an image-classification model, and uses the trained model to predict the class of new images.',
    ],
    features: [
      'Image dataset preparation',
      'Image preprocessing',
      'Model training',
      'Image classification',
      'Prediction on new images',
      'Model evaluation',
    ],
    tech: ['Python', 'Machine Learning', 'Image Processing'],
    contribution: [
      'Dataset preparation',
      'Image preprocessing',
      'Model training',
      'Model evaluation',
      'Prediction implementation',
    ],
    tags: ['Python', 'Machine Learning', 'AI', 'Image Classification'],
    art: 'classify',
    tone: 'rose',
    cover: null,
    href: null,
  },
  {
    title: 'Personal Organizer App',
    category: 'C++ / Desktop Application',
    blurb: 'A C++ application designed to help users manage personal tasks and information in an organized way.',
    detail: [
      'The Personal Organizer App was developed as a C++ application for managing personal information and tasks.',
      'The project focuses on implementing programming fundamentals, data management, user interaction, and structured application logic.',
    ],
    features: [
      'Task management',
      'Personal information management',
      'Add and manage records',
      'Update existing information',
      'Delete records',
      'Search/manage stored information',
    ],
    tech: ['C++', 'Object-Oriented Programming'],
    contribution: [
      'Application logic',
      'Data management',
      'User interaction',
      'Object-oriented programming implementation',
    ],
    tags: ['C++', 'OOP', 'Desktop Application'],
    art: 'organizer',
    tone: 'indigo',
    cover: null,
    href: null,
  },
  {
    title: '2D Browser Game',
    category: 'Web Development / Game Development',
    blurb:
      'A browser-based 2D game developed using HTML, CSS, and JavaScript with interactive gameplay and user controls.',
    detail: [
      'This project is a lightweight 2D browser game developed to demonstrate JavaScript programming, interactive user interfaces, game logic, and event handling.',
      'The game runs directly in a web browser without requiring additional software installation.',
    ],
    features: [
      '2D gameplay',
      'Keyboard/user interaction',
      'Game logic',
      'Player controls',
      'Score/game-state handling',
      'Browser-based execution',
      'Interactive UI',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    contribution: [
      'Game logic development',
      'User controls',
      'Frontend development',
      'Game interface',
      'JavaScript event handling',
    ],
    tags: ['JavaScript', 'HTML', 'CSS', 'Game Development'],
    art: 'game',
    tone: 'teal',
    cover: null,
    href: null,
  },
]

const VISIBLE = 6

function ProjectCard({ project, index, onOpen }) {
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
        <p className="project__category">{project.category}</p>
        <h3 className="project__title">{project.title}</h3>
        <p className="project__blurb">{project.blurb}</p>

        <ul className="project__tags">
          {project.tags.map((tag) => (
            <li className="tag" key={tag}>
              {tag}
            </li>
          ))}
        </ul>

        <div className="project__actions">
          <button className="project__link" type="button" onClick={() => onOpen(project)}>
            View details
            <ArrowRight className="project__arrow" aria-hidden="true" />
            <span className="sr-only"> — {project.title}</span>
          </button>
          {project.href && (
            <a
              className="project__repo"
              href={project.href}
              target="_blank"
              rel="noreferrer noopener"
            >
              Repository
              <span className="sr-only"> for {project.title} (opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

function DetailList({ title, items }) {
  if (!items?.length) return null
  return (
    <div className="sheet__block">
      <h4 className="sheet__heading">{title}</h4>
      <ul className="sheet__list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function ProjectSheet({ project, onClose }) {
  const panelRef = useRef(null)

  // Restore focus to whatever opened the sheet, and keep the page behind it still.
  useEffect(() => {
    const opener = document.activeElement
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    panelRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
      if (opener instanceof HTMLElement) opener.focus()
    }
  }, [onClose])

  return (
    <div className="sheet" role="presentation" onClick={onClose}>
      <div
        className={`sheet__panel sheet__panel--${project.tone}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sheet-title"
        tabIndex={-1}
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sheet__media">
          <ProjectArt variant={project.art} />
          <button className="sheet__close" type="button" onClick={onClose} aria-label="Close details">
            <CloseIcon aria-hidden="true" />
          </button>
        </div>

        <div className="sheet__body">
          <p className="project__category">{project.category}</p>
          <h3 className="sheet__title" id="sheet-title">
            {project.title}
          </h3>

          {project.detail.map((para) => (
            <p className="sheet__text" key={para.slice(0, 40)}>
              {para}
            </p>
          ))}

          <div className="sheet__grid">
            <DetailList title="Main features" items={project.features} />
            <DetailList title="My contribution" items={project.contribution} />
          </div>

          {project.extra && (
            <div className="sheet__block">
              <h4 className="sheet__heading">{project.extra.title}</h4>
              {project.extra.body && <p className="sheet__text">{project.extra.body}</p>}
              <ul className="sheet__list sheet__list--wide">
                {project.extra.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="sheet__block">
            <h4 className="sheet__heading">Technologies</h4>
            <ul className="project__tags">
              {project.tech.map((tag) => (
                <li className="tag" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {project.href && (
            <a className="btn btn--primary btn--sm" href={project.href} target="_blank" rel="noreferrer noopener">
              View repository
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView()
  const [active, setActive] = useState(null)
  const [expanded, setExpanded] = useState(false)
  const close = useCallback(() => setActive(null), [])

  const hidden = PROJECTS.length - VISIBLE
  const shown = expanded ? PROJECTS : PROJECTS.slice(0, VISIBLE)

  return (
    <section className="section projects" id="projects">
      <div className="shell">
        <header className="sectionHead">
          <h2 className="sectionHead__title">
            <span className="sectionHead__accent">Projects</span>
          </h2>
          <span className="sectionHead__rule" aria-hidden="true" />
        </header>

        <div className={`projects__grid reveal ${inView ? 'is-visible' : ''}`} ref={ref}>
          {shown.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={expanded && i >= VISIBLE ? i - VISIBLE : i}
              onOpen={setActive}
            />
          ))}
        </div>

        {hidden > 0 && (
          <div className="projects__more">
            <button
              className="showMore"
              type="button"
              aria-expanded={expanded}
              onClick={() => setExpanded((v) => !v)}
            >
              {expanded ? 'Show less' : 'Show more'}
              <ChevronIcon
                className={`showMore__chevron ${expanded ? 'is-up' : ''}`}
                aria-hidden="true"
              />
              <span className="sr-only">
                {expanded ? ' — collapse to 6 projects' : ` — ${hidden} more project${hidden > 1 ? 's' : ''}`}
              </span>
            </button>
          </div>
        )}
      </div>

      {active && <ProjectSheet project={active} onClose={close} />}
    </section>
  )
}
