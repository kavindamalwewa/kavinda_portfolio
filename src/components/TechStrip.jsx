import {
  Css3,
  DatabaseIcon,
  GitIcon,
  Html5,
  JavaScriptIcon,
  NodeIcon,
  PythonIcon,
  ReactIcon,
  TypeScriptIcon,
} from './icons/BrandIcons'
import './TechStrip.css'

const TECH = [
  { name: 'HTML5', Icon: Html5 },
  { name: 'CSS3', Icon: Css3 },
  { name: 'JavaScript', Icon: JavaScriptIcon },
  { name: 'TypeScript', Icon: TypeScriptIcon },
  { name: 'React', Icon: ReactIcon },
  { name: 'Python', Icon: PythonIcon },
  { name: 'Node.js', Icon: NodeIcon },
  { name: 'Git', Icon: GitIcon },
  { name: 'Databases', Icon: DatabaseIcon },
]

export default function TechStrip() {
  return (
    <div className="tech">
      <p className="tech__label">Technologies I work with</p>
      <ul className="tech__list">
        {TECH.map(({ name, Icon }, i) => (
          <li className="tech__item" key={name} style={{ '--i': i }}>
            <Icon className="tech__icon" aria-label={name} />
            <span className="tech__tip">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
