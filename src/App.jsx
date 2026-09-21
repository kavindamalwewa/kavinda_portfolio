import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import './App.css'

// The CV lives at public/Kavinda-Malwewa-CV.pdf. BASE_URL (always trailing-slashed)
// keeps the link correct if the site is ever deployed under a subpath.
const CV_HREF = `${import.meta.env.BASE_URL}Kavinda-Malwewa-CV.pdf`

function App() {
  return (
    <>
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <Navbar cvHref={CV_HREF} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </>
  )
}

export default App
