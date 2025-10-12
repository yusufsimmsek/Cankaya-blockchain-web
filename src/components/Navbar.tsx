import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useI18n } from '../i18n'
import logo from '../assets/6.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { lang, setLang, t } = useI18n()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: t('nav_about'), href: '#about' },
    { name: t('nav_events'), href: '#events' },
    { name: t('nav_partners'), href: '#partners' },
    { name: t('nav_projects'), href: '#projects' },
    { name: t('nav_contact'), href: '#contact' }
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-150 ${
      scrolled 
        ? 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-b border-neutral-200/50 dark:border-neutral-800/50 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <div className="flex items-center group">
            <div className="flex-shrink-0 flex items-center min-w-[4rem] min-h-[4rem] sm:min-w-[5rem] sm:min-h-[5rem] md:min-w-[6rem] md:min-h-[6rem] lg:min-w-[8rem] lg:min-h-[8rem]">
              <div className="relative">
                <img 
                  src={logo} 
                  alt="Cankaya Blockchain Community Logo" 
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-xl sm:rounded-2xl object-contain transition-all duration-150 group-hover:scale-105"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-150 blur-xl"></div>
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
                  className="relative px-4 py-2 text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400 rounded-xl font-medium transition-all duration-100 group"
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-neutral-800 dark:to-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity duration-100"></div>
                </a>
              ))}
            </div>
            {/* Language Switcher */}
            <div className="ml-4 flex items-center gap-1 bg-gradient-to-r from-black/95 via-slate-950/98 to-black/95 backdrop-blur-xl rounded-2xl p-1 border border-slate-800/40 shadow-2xl">
              <button
                onClick={() => { setLang('tr'); (window as any).setSiteLanguage && (window as any).setSiteLanguage('tr'); }}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 relative overflow-hidden group ${
                  lang === 'tr' 
                    ? 'bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white shadow-lg shadow-slate-800/50' 
                    : 'text-neutral-400 hover:text-white hover:bg-gradient-to-r hover:from-slate-900/60 hover:to-slate-800/60'
                }`}
                aria-label="Türkçe"
              >
                {/* Premium Glow Effect */}
                {lang === 'tr' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-600/15 via-slate-500/15 to-slate-600/15 rounded-xl animate-pulse"></div>
                )}
                <span className="relative z-10">TR</span>
              </button>
              <button
                onClick={() => { setLang('en'); (window as any).setSiteLanguage && (window as any).setSiteLanguage('en'); }}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 relative overflow-hidden group ${
                  lang === 'en' 
                    ? 'bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white shadow-lg shadow-slate-800/50' 
                    : 'text-neutral-400 hover:text-white hover:bg-gradient-to-r hover:from-slate-900/60 hover:to-slate-800/60'
                }`}
                aria-label="English"
              >
                {/* Premium Glow Effect */}
                {lang === 'en' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-600/15 via-slate-500/15 to-slate-600/15 rounded-xl animate-pulse"></div>
                )}
                <span className="relative z-10">EN</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button and language switcher */}
          <div className="md:hidden flex items-center gap-2">
            {/* Language Switcher - Mobile */}
            <div className="flex items-center gap-1 bg-gradient-to-r from-black/95 via-slate-950/98 to-black/95 backdrop-blur-xl rounded-xl p-1 border border-slate-800/40 shadow-xl">
              <button
                onClick={() => { setLang('tr'); (window as any).setSiteLanguage && (window as any).setSiteLanguage('tr'); }}
                className={`px-2 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 relative overflow-hidden group ${
                  lang === 'tr' 
                    ? 'bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white shadow-lg shadow-slate-800/50' 
                    : 'text-neutral-400 hover:text-white hover:bg-gradient-to-r hover:from-slate-900/60 hover:to-slate-800/60'
                }`}
                aria-label="Türkçe"
              >
                {/* Premium Glow Effect */}
                {lang === 'tr' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-600/15 via-slate-500/15 to-slate-600/15 rounded-lg animate-pulse"></div>
                )}
                <span className="relative z-10">TR</span>
              </button>
              <button
                onClick={() => { setLang('en'); (window as any).setSiteLanguage && (window as any).setSiteLanguage('en'); }}
                className={`px-2 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 relative overflow-hidden group ${
                  lang === 'en' 
                    ? 'bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white shadow-lg shadow-slate-800/50' 
                    : 'text-neutral-400 hover:text-white hover:bg-gradient-to-r hover:from-slate-900/60 hover:to-slate-800/60'
                }`}
                aria-label="English"
              >
                {/* Premium Glow Effect */}
                {lang === 'en' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-600/15 via-slate-500/15 to-slate-600/15 rounded-lg animate-pulse"></div>
                )}
                <span className="relative z-10">EN</span>
              </button>
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative inline-flex items-center justify-center p-2 rounded-lg text-neutral-600 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-neutral-800 transition-all duration-100 group"
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-100/50 to-secondary-100/50 dark:from-neutral-800/50 dark:to-neutral-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-100"></div>
              <div className="relative z-10">
                {isOpen ? (
                  <X size={20} className="transform rotate-90 group-hover:rotate-180 transition-transform duration-100" />
                ) : (
                  <Menu size={20} className="group-hover:scale-110 transition-transform duration-100" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-150 ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="px-4 pt-4 pb-6 space-y-2 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border-t border-neutral-200/50 dark:border-neutral-800/50 shadow-lg">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-4 py-3 text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-neutral-800 rounded-xl font-medium transition-all duration-100 animate-fade-in-up"
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