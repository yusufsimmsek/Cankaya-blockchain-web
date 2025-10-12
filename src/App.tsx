import { useState, createContext, lazy, Suspense } from 'react'
import { I18nProvider } from './i18n'

// Lazy load components for better performance
const Navbar = lazy(() => import('./components/Navbar'))
const Hero = lazy(() => import('./components/Hero'))
const About = lazy(() => import('./components/About'))
const Projects = lazy(() => import('./components/Projects'))
const Events = lazy(() => import('./components/Events'))
const Partners = lazy(() => import('./components/Partners'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

export const ThemeContext = createContext({
  dark: false,
  toggle: () => {},
})

function App() {
  const [dark, setDark] = useState(true) // Varsayılan olarak dark mode
  const toggle = () => setDark((d) => !d) // Bu fonksiyon artık kullanılmayacak

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      <I18nProvider>
      <div className={
        `min-h-screen relative overflow-hidden transition-colors duration-500 dark`
      }>
        {/* SVG arka plan zaten CSS'te tanımlandı */}

        {/* Main Content */}
        <div className="relative z-10">
          <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div></div>}>
            <Navbar />
            <Hero />
            <About />
            <Events />
            <Partners />
            <Projects />
            <Contact />
            <Footer />
          </Suspense>
        </div>
      </div>
      </I18nProvider>
    </ThemeContext.Provider>
  )
}

export default App 