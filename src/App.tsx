import { About } from './components/About'
import { Contact } from './components/Contact'
import { EasterEgg } from './components/EasterEgg'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MouseGlow } from './components/MouseGlow'
import { Projects } from './components/Projects'
import { ScrollProgressBar } from './components/ScrollProgressBar'
import { Services } from './components/Services'
import { Skills } from './components/Skills'
import { LanguageProvider } from './i18n/LanguageContext'
import { ThemeProvider } from './theme/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative min-h-screen bg-bg text-text">
          <MouseGlow />
          <ScrollProgressBar />
          <Header />
          <main id="main-content">
            <Hero />
            <About />
            <Services />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
          <EasterEgg />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App