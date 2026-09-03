import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import './App.css'

// Drop the PDF at public/Kavinda-Malwewa-CV.pdf to make this link live.
const CV_HREF = '/Kavinda-Malwewa-CV.pdf'

function App() {
  return (
    <>
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <Navbar cvHref={CV_HREF} />
      <main>
        <Hero cvHref={CV_HREF} />
        <About cvHref={CV_HREF} />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </>
  )
}

export default App
