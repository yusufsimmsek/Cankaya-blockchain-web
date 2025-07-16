import { useState, useEffect } from 'react'
import { Menu, X, ExternalLink, Sparkles } from 'lucide-react'
import logo from '../assets/6.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Hakkımızda', href: '#about' },
    { name: 'Etkinlikler', href: '#events' },
    { name: 'Ortaklıklar', href: '#partners' },
    { name: 'Projeler', href: '#projects' },
    { name: 'İletişim', href: '#contact' }
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-b border-neutral-200/50 dark:border-neutral-800/50 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center group">
            <div className="flex-shrink-0 flex items-center min-w-[6rem] min-h-[6rem] md:min-w-[8rem] md:min-h-[8rem] lg:min-w-[10rem] lg:min-h-[10rem]">
              <div className="relative">
                <img 
                  src={logo} 
                  alt="Çankaya Blockchain Logo" 
                  className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-2xl object-contain transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400 rounded-xl font-medium transition-all duration-200 group"
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-neutral-800 dark:to-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative inline-flex items-center justify-center p-3 rounded-xl text-neutral-600 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-neutral-800 transition-all duration-200 group"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-100/50 to-secondary-100/50 dark:from-neutral-800/50 dark:to-neutral-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              <div className="relative z-10">
                {isOpen ? (
                  <X size={24} className="transform rotate-90 group-hover:rotate-180 transition-transform duration-200" />
                ) : (
                  <Menu size={24} className="group-hover:scale-110 transition-transform duration-200" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="px-4 pt-4 pb-6 space-y-2 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border-t border-neutral-200/50 dark:border-neutral-800/50 shadow-lg">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-4 py-3 text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-neutral-800 rounded-xl font-medium transition-all duration-200 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar 