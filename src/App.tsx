import { CursorGlow } from './components/CursorGlow'
import { EducationCerts } from './components/EducationCerts'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { SiteFooter } from './components/SiteFooter'
import { Skills } from './components/Skills'
import { Stats } from './components/Stats'
import './App.css'

function App() {
  return (
    <>
      <CursorGlow />
      <Hero />
      <div className="content">
        <main>
          <Stats />
          <Experience />
          <Projects />
          <Skills />
          <EducationCerts />
        </main>
        <SiteFooter />
      </div>
    </>
  )
}

export default App
