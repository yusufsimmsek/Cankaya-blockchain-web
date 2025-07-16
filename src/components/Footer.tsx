import { Heart, Github, Linkedin, Sparkles, ArrowUp, Star, Instagram, MapPin, Mail, Calendar, Users, Award, Rocket } from 'lucide-react'
import { X as XIcon } from 'lucide-react'
import logo from '../assets/6.png'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/cankayablockchain',
      icon: Linkedin,
      color: 'from-blue-500 to-blue-600',
      description: 'Profesyonel ağımız'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/cankayablockchain/',
      icon: Instagram,
      color: 'from-pink-500 to-yellow-500',
      description: 'Günlük etkinlikler'
    },
    {
      name: 'X',
      href: 'https://x.com/cankayachain',
      icon: XIcon,
      color: 'from-neutral-900 to-neutral-700',
      description: 'Anlık güncellemeler'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/cankayablockchain',
      icon: Github,
      color: 'from-neutral-800 to-neutral-900',
      description: 'Açık kaynak projeler'
    }
  ]

  const quickLinks = [
    { name: 'Hakkımızda', href: '#about' },
    { name: 'Projeler', href: '#projects' },
    { name: 'Etkinlikler', href: '#events' },
    { name: 'Ortaklıklar', href: '#partners' },
    { name: 'İletişim', href: '#contact' }
  ]

  const achievements = [
    { icon: Calendar, value: '100+', label: 'Etkinlik', color: 'from-primary-500 to-secondary-500' },
    { icon: Users, value: '1000+', label: 'Üye', color: 'from-secondary-500 to-primary-500' },
    { icon: Award, value: '10+', label: 'Ödül', color: 'from-primary-500 to-secondary-500' },
    { icon: Rocket, value: '15+', label: 'Proje', color: 'from-secondary-500 to-primary-500' }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white overflow-hidden dark:bg-neutral-950">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent dark:from-neutral-900/60"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-secondary-900/20 via-transparent to-transparent dark:from-neutral-800/60"></div>
      
      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
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
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                </div>
                
                <div className="ml-6 flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">Çankaya Blockchain</h3>
                  <p className="text-neutral-300 mb-6 max-w-lg leading-relaxed dark:text-neutral-400 text-sm">
                2021'den beri Ankara'da blockchain teknolojilerini öğreten, projeler geliştiren 
                ve ekosisteme nitelikli bireyler kazandıran öncü topluluk.
              </p>
              
                  {/* Social Links */}
                  <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-xl bg-gradient-to-r ${social.color} flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group`}
                    style={{ animationDelay: `${index * 100}ms` }}
                        title={social.description}
                  >
                        <social.icon size={18} className="text-white group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-fade-in-up delay-100">
              <h3 className="text-lg font-semibold mb-6 flex items-center">
                <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mr-2">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
                Hızlı Linkler
              </h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                    <a 
                    key={link.name}
                      href={link.href} 
                    className="block text-neutral-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {link.name}
                    </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in-up delay-200">
              <h3 className="text-lg font-semibold mb-6 flex items-center">
                <div className="w-6 h-6 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-lg flex items-center justify-center mr-2">
                  <Heart className="w-3 h-3 text-white" />
                </div>
                İletişim
              </h3>
              <div className="space-y-4 text-neutral-300">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3 text-primary-400" />
                  <a 
                    href="https://maps.google.com/?q=Ankara,Turkey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-primary-400 transition-colors duration-200 cursor-pointer"
                  >
                    Ankara, Türkiye
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-primary-400" />
                  <a 
                    href="mailto:cankayablockchain@gmail.com"
                    className="text-sm text-primary-400 hover:text-primary-300 transition-colors duration-200"
                  >
                    cankayablockchain@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.label}
                className="text-center bg-gradient-to-r from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm p-6 rounded-2xl border border-neutral-700/30 hover:border-primary-500/30 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <achievement.icon className="w-6 h-6 text-white" />
            </div>
                <div className="text-2xl font-bold text-gradient-primary mb-1">{achievement.value}</div>
                <div className="text-xs text-neutral-400">{achievement.label}</div>
            </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-neutral-700/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-neutral-400 text-sm">
                © 2024 Çankaya Blockchain Topluluğu. Tüm hakları saklıdır.
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-neutral-400 text-sm">
                  <span>Ankara'dan </span>
                  <Heart size={16} className="mx-1 text-red-500 animate-pulse" />
                  <span> ile yapıldı</span>
                </div>
                <button
                  onClick={scrollToTop}
                  className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 flex items-center justify-center hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 group"
                >
                  <ArrowUp size={16} className="text-white group-hover:-translate-y-1 transition-transform duration-300" />
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