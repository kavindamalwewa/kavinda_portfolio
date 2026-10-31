import { useRef } from 'react'
// Shared layer first, so each component's stylesheet can build on it.
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import Glows from './components/Glows'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import usePageMotion from './motion/usePageMotion'

// The CV lives at public/Kavinda-Malwewa-CV.pdf. BASE_URL (always trailing-slashed)
// keeps the link correct if the site is ever deployed under a subpath.
const CV_HREF = `${import.meta.env.BASE_URL}Kavinda-Malwewa-CV.pdf`

function App() {
  const pageRef = useRef(null)
  usePageMotion(pageRef)

  return (
    <div className="page" ref={pageRef}>
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <Glows />
      <Navbar cvHref={CV_HREF} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
