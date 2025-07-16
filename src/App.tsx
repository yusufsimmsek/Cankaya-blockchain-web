import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Events from './components/Events'
import Partners from './components/Partners'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useState, createContext, useContext } from 'react'

export const ThemeContext = createContext({
  dark: false,
  toggle: () => {},
})

function App() {
  const [dark, setDark] = useState(true) // Varsayılan olarak dark mode
  const toggle = () => setDark((d) => !d) // Bu fonksiyon artık kullanılmayacak

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      <div className={
        `min-h-screen relative overflow-hidden transition-colors duration-500 dark`
      }>
        {/* SVG arka plan zaten CSS'te tanımlandı */}

        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Events />
          <Partners />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App 