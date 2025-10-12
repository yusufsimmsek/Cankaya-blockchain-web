import { Heart, Github, Linkedin, Sparkles, ArrowUp, Star, Instagram, MapPin, Mail } from 'lucide-react'
import { X as XIcon } from 'lucide-react'
import logo from '../assets/6.png'
import { useI18n } from '../i18n'

const Footer = () => {
  const { t } = useI18n()
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/cankayablockchain',
      icon: Linkedin,
      color: 'from-blue-600/60 via-blue-500/50 to-blue-400/40',
      description: 'Profesyonel ağımız'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/cankayablockchain/',
      icon: Instagram,
      color: 'from-pink-600/60 via-purple-500/50 to-orange-400/40',
      description: 'Günlük etkinlikler'
    },
    {
      name: 'X',
      href: 'https://x.com/cankayachain',
      icon: XIcon,
      color: 'from-neutral-700/60 via-neutral-600/50 to-neutral-500/40',
      description: 'Anlık güncellemeler'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/cankayablockchain',
      icon: Github,
      color: 'from-neutral-700/60 via-neutral-600/50 to-neutral-500/40',
      description: 'Açık kaynak projeler'
    }
  ]

  const quickLinks = [
    { name: t('nav_about'), href: '#about' },
    { name: t('nav_projects'), href: '#projects' },
    { name: t('nav_events'), href: '#events' },
    { name: t('nav_partners'), href: '#partners' },
    { name: t('nav_contact'), href: '#contact' }
  ]

  return (
    <footer className="relative bg-gradient-to-b from-black via-neutral-900 to-black text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900/50 to-black"></div>
      
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Section */}
            <div className="lg:col-span-2 animate-fade-in-up">
              <div className="flex items-start mb-8 group">
                <div className="relative flex-shrink-0 min-w-[4rem] min-h-[4rem] md:min-w-[5rem] md:min-h-[5rem] lg:min-w-[6rem] lg:min-h-[6rem]">
                  <img 
                    src={logo} 
                    alt="Çankaya Blockchain Logo" 
                    className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-2xl object-contain transition-all duration-300 group-hover:scale-105"
                    style={{ filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))' }}
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                </div>
                
                <div className="ml-6 flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">Çankaya Blockchain</h3>
                  <p className="text-neutral-300 mb-6 max-w-lg leading-relaxed text-sm drop-shadow-md">{t('footer_brand_p')}</p>
              
                  {/* Social Links */}
                  <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                        className="relative group"
                    style={{ animationDelay: `${index * 100}ms` }}
                        title={social.description}
                  >
                        <div className="relative w-12 h-12 rounded-2xl overflow-hidden group-hover:scale-110 transition-all duration-500">
                          {/* Liquid Glass Background */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${social.color} backdrop-blur-3xl rounded-2xl border border-neutral-500/30 group-hover:border-neutral-400/50 group-hover:shadow-neutral-500/20 group-hover:shadow-2xl`}></div>
                          <div className="absolute inset-0 bg-gradient-to-tr from-neutral-500/20 via-transparent to-neutral-400/10 rounded-2xl"></div>
                          <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-white/12 opacity-50 rounded-2xl"></div>
                          
                          <div className="relative w-full h-full flex items-center justify-center">
                            <social.icon size={20} className="text-white drop-shadow-lg group-hover:scale-110 transition-all duration-500" />
                          </div>
                        </div>
                  </a>
                ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <h3 className="text-lg font-semibold mb-6 flex items-center text-white drop-shadow-lg">
                <div className="relative w-8 h-8 mr-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-neutral-600/20 via-neutral-500/20 to-neutral-400/20 blur-xl scale-150"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-neutral-800/80 via-neutral-700/60 to-neutral-600/40 backdrop-blur-xl rounded-xl border border-neutral-500/30 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-neutral-300 drop-shadow-lg" />
                  </div>
                </div>
                {t('quick_links')}
              </h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                    <a 
                    key={link.name}
                      href={link.href} 
                    className="block text-neutral-300 hover:text-neutral-100 transition-colors duration-300 text-sm group drop-shadow-md"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                    <span className="group-hover:drop-shadow-lg transition-all duration-300">{link.name}</span>
                    </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h3 className="text-lg font-semibold mb-6 flex items-center text-white drop-shadow-lg">
                <div className="relative w-8 h-8 mr-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-neutral-600/20 via-neutral-500/20 to-neutral-400/20 blur-xl scale-150"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-neutral-800/80 via-neutral-700/60 to-neutral-600/40 backdrop-blur-xl rounded-xl border border-neutral-500/30 flex items-center justify-center">
                    <Heart className="w-4 h-4 text-neutral-300 drop-shadow-lg" />
                  </div>
                </div>
                {t('footer_contact')}
              </h3>
              <div className="space-y-4 text-neutral-300">
                <div className="flex items-center group">
                  <MapPin className="w-4 h-4 mr-3 text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300" />
                  <a 
                    href="https://maps.google.com/?q=Ankara,Turkey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-neutral-100 transition-colors duration-300 cursor-pointer drop-shadow-md"
                  >
                    Ankara, Türkiye
                  </a>
                </div>
                <div className="flex items-center group">
                  <Mail className="w-4 h-4 mr-3 text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300" />
                  <a 
                    href="mailto:info@cankayablockchain.com"
                    className="text-sm text-neutral-300 hover:text-neutral-100 transition-colors duration-300 drop-shadow-md"
                  >
                    info@cankayablockchain.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-600/50 to-transparent"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-neutral-500/30 to-transparent"></div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-neutral-400 text-sm drop-shadow-md">{t('copyright')}</div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={scrollToTop}
                  className="relative group"
                >
                  <div className="relative w-12 h-12 rounded-2xl overflow-hidden group-hover:scale-110 transition-all duration-500">
                    {/* Liquid Glass Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-700/60 via-neutral-600/50 to-neutral-500/40 backdrop-blur-3xl rounded-2xl border border-neutral-500/30 group-hover:border-neutral-400/50 group-hover:shadow-neutral-500/20 group-hover:shadow-2xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-neutral-600/20 via-transparent to-neutral-500/10 rounded-2xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-white/12 opacity-50 rounded-2xl"></div>
                    
                    <div className="relative w-full h-full flex items-center justify-center">
                      <ArrowUp size={18} className="text-white drop-shadow-lg group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-500" />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 