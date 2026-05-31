import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import ScrollProgress from './components/ScrollProgress'
import FuturisticBackground from './components/FuturisticBackground'
import ParticleBackground from './components/ParticleBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="mesh-bg relative min-h-screen">
          <FuturisticBackground />
          <ParticleBackground />
          <div className="vignette pointer-events-none" aria-hidden />
          <ScrollProgress />
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Services />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
