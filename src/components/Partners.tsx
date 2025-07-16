import { Building, Users, GraduationCap, BookOpen, Sparkles, Star, Heart, TrendingUp, ChevronDown, ChevronUp, Zap, Target, Award, Globe, ArrowRight, ExternalLink } from 'lucide-react'
import { useState } from 'react'

const Partners = () => {
  const [expandedCategories, setExpandedCategories] = useState<number[]>([])
  // Ortaklık logolarını import et
  const partnerLogos = [
    '/partners/1.png',
    '/partners/2.png',
    '/partners/3.png',
    '/partners/4.png',
    '/partners/5.png',
    '/partners/6.png',
    '/partners/7.png',
    '/partners/8.png',
    '/partners/9.png',
    '/partners/10.png',
    '/partners/11.png',
    '/partners/12.png',
    '/partners/13.png',
    '/partners/14.png',
    '/partners/15.png',
    '/partners/16.png',
    '/partners/17.png',
    '/partners/18.png',
    '/partners/19.png',
    '/partners/20.png',
    '/partners/21.png',
    '/partners/22.png',
    '/partners/23.png',
    '/partners/24.png',
    '/partners/25.png',
    '/partners/27.png',
    '/partners/28.png',
    '/partners/29.png',
    '/partners/32.png',
  ]
  const partnerCategories = [
    {
      title: "Borsalar & Platformlar",
      icon: Building,
      color: "from-blue-500 to-cyan-500",
      gradient: "from-blue-600/20 via-cyan-500/20 to-blue-400/20",
      accent: "from-blue-400 to-cyan-400",
      partners: [
        "CoinEx", "Binance", "CoinW", "LBank", "Poloniex", "XT.com",
        "KuCoin", "OKX", "Bybit", "Gate.io", "Huobi", "Bitget"
      ]
    },
    {
      title: "Ekosistem Partnerlikleri",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      gradient: "from-purple-600/20 via-pink-500/20 to-purple-400/20",
      accent: "from-purple-400 to-pink-400",
      partners: [
        "NEAR Protocol", "Solana Foundation", "Chainlink",
        "Polygon", "Avalanche", "Cardano", "Polkadot", "Cosmos",
        "Ethereum Foundation", "Binance Smart Chain"
      ]
    },
    {
      title: "Topluluk Ortaklıkları",
      icon: GraduationCap,
      color: "from-green-500 to-blue-500",
      gradient: "from-green-600/20 via-blue-500/20 to-green-400/20",
      accent: "from-green-400 to-blue-400",
      partners: [
        "StarkHub TR", "ICP Hub Turkey", "ODTÜ Blockchain", 
        "YTÜ Blockchain", "Uludağ Blockchain Kulüpleri",
        "İTÜ Blockchain", "Hacettepe Blockchain", "Gazi Blockchain",
        "Ankara Üniversitesi Blockchain", "Başkent Blockchain"
      ]
    },
    {
      title: "Eğitim Ortaklıkları",
      icon: BookOpen,
      color: "from-orange-500 to-red-500",
      gradient: "from-orange-600/20 via-red-500/20 to-orange-400/20",
      accent: "from-orange-400 to-red-400",
      partners: [
        "Patika.dev", "GDG Çankaya", "CryptoFemale",
        "BTK Akademi", "Udemy", "Coursera", "edX", "Pluralsight",
        "Codecademy", "freeCodeCamp"
      ]
    }
  ]

  const stats = [
    { icon: Zap, value: "12+", label: "Borsa Ortağı", color: "from-blue-500 to-cyan-500" },
    { icon: Target, value: "10+", label: "Ekosistem Partneri", color: "from-purple-500 to-pink-500" },
    { icon: Award, value: "10+", label: "Topluluk Ortağı", color: "from-green-500 to-blue-500" },
    { icon: Globe, value: "10+", label: "Eğitim Ortağı", color: "from-orange-500 to-red-500" }
  ]

  const toggleCategory = (index: number) => {
    setExpandedCategories(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section id="partners" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-secondary-500/10 to-primary-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 text-gradient-primary">
            Sektör İşbirlikleri
          </h2>
          <p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 max-w-4xl mx-auto leading-relaxed">
            Blockchain ekosisteminin önde gelen kuruluşları ve topluluklarıyla stratejik ortaklıklar kurarak büyümeye devam ediyoruz.
          </p>
        </div>

        {/* Modern Timeline Style Partners with Logo Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Timeline Partners - 2/3 width */}
          <div className="lg:col-span-2 space-y-8">
          {partnerCategories.map((category, index) => (
            <div 
              key={index} 
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/50 to-secondary-500/50"></div>
                
                {/* Category Header */}
                <div className="relative flex items-center gap-6 mb-6">
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/30 to-secondary-500/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {category.title}
                      </h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full group-hover:w-24 transition-all duration-300"></div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Partners Grid */}
                <div className="ml-24">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {category.partners.slice(0, expandedCategories.includes(index) ? category.partners.length : 8).map((partner, partnerIndex) => (
                      <div 
                        key={partnerIndex} 
                        className="relative group/item"
                        style={{ animationDelay: `${partnerIndex * 50}ms` }}
                      >
                        {/* Neon Glow Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-primary-500/20 rounded-xl blur-xl opacity-0 group-hover/item:opacity-100 transition-all duration-500 scale-110 group-hover/item:scale-100"></div>
                        
                        {/* Holographic Card */}
                        <div className="relative flex items-center gap-2 p-3 rounded-xl bg-gradient-to-br from-white/15 via-white/8 to-white/5 backdrop-blur-xl border border-white/30 hover:border-white/50 transition-all duration-500 group-hover/item:scale-105 group-hover/item:shadow-2xl overflow-hidden">
                          {/* Holographic Shimmer Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-1000"></div>
                          
                          {/* Animated Dot */}
                          <div className="relative z-10">
                            <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full group-hover/item:scale-150 transition-all duration-500 animate-pulse group-hover/item:animate-none">
                              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full animate-ping opacity-75"></div>
                            </div>
                          </div>
                          
                          {/* Partner Name */}
                          <span className="text-white/95 font-medium text-sm group-hover/item:text-white group-hover/item:font-bold transition-all duration-500 truncate relative z-10 group-hover/item:tracking-wide">
                            {partner}
                          </span>
                          
                          {/* Floating Icon */}
                          <div className="absolute top-1 right-1 opacity-0 group-hover/item:opacity-100 transition-all duration-500 transform translate-y-2 group-hover/item:translate-y-0 relative z-10">
                            <div className="w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center animate-bounce">
                              <ExternalLink className="w-2 h-2 text-white" />
                            </div>
                          </div>
                          
                          {/* Morphing Border */}
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/50 via-secondary-500/50 to-primary-500/50 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 p-[1px]">
                            <div className="bg-gradient-to-br from-white/15 via-white/8 to-white/5 backdrop-blur-xl rounded-xl h-full w-full"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Show More/Less Button */}
                  {category.partners.length > 8 && (
                    <div className="mt-4">
                      <button
                        onClick={() => toggleCategory(index)}
                        className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-white/20 via-white/10 to-white/5 backdrop-blur-xl border border-white/30 hover:border-white/50 hover:scale-105 hover:shadow-xl transition-all duration-500 group overflow-hidden"
                      >
                        {/* Holographic Shimmer */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        
                        <div className="relative z-10">
                          <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full animate-pulse group-hover:scale-150 transition-transform duration-500">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full animate-ping opacity-75"></div>
                          </div>
                        </div>
                        <span className="text-white/90 text-sm font-medium group-hover:text-white group-hover:font-bold transition-all duration-500 relative z-10">
                          {expandedCategories.includes(index) 
                            ? 'Daha az göster' 
                            : `+${category.partners.length - 8} daha`
                          }
                        </span>
                        {expandedCategories.includes(index) ? (
                          <ChevronUp className="w-4 h-4 text-white/90 group-hover:text-white group-hover:-translate-y-0.5 transition-all duration-500 relative z-10" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-white/90 group-hover:text-white group-hover:translate-y-0.5 transition-all duration-500 relative z-10" />
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Logo Carousel - 1/3 width */}
          <div className="lg:col-span-1">
            <div className="text-center mb-6">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-secondary-100 px-4 py-2 rounded-full border border-primary-200/50 shadow-lg mb-4 dark:from-neutral-800 dark:to-neutral-900 dark:border-neutral-700/50">
                <Globe size={16} className="text-primary-600 dark:text-primary-400" />
                <span className="text-sm font-medium text-primary-700 dark:text-primary-300">Ortaklarımız</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                Güvenilir Ortaklıklar
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Blockchain ekosisteminin önde gelen kuruluşları
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="relative overflow-hidden h-[1200px] w-full max-w-48">
                <div className="partner-slide-vertical flex flex-col gap-6 items-center">
                  {partnerLogos.map((logo, index) => (
                    <div 
                      key={index}
                      className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl shadow-lg border border-white/20 backdrop-blur-sm p-6 hover:shadow-xl hover:scale-105 hover:border-white/30 transition-all duration-300 group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <img 
                        src={logo} 
                        alt={`Partner ${index + 1}`}
                        className="relative w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-neutral-50/80 dark:bg-neutral-800/60 backdrop-blur-sm p-4 rounded-xl border border-neutral-200/50 dark:border-neutral-700/50 shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-102">
                <div className={`w-10 h-10 mx-auto mb-3 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300`}>
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-2xl font-bold text-neutral-700 dark:text-neutral-200 mb-1">{stat.value}</div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Simple Call to Action */}
        <div className="text-center animate-fade-in-up delay-500">
          <div className="relative group">
            <div className="relative bg-neutral-50/80 dark:bg-neutral-800/60 backdrop-blur-sm p-8 rounded-2xl border border-neutral-200/50 dark:border-neutral-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-md">
                  <Heart className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-3">
                Bizimle Ortaklık Kurmak İster misiniz?
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto">
                Blockchain ekosisteminde birlikte değer yaratmak ve geleceği şekillendirmek için iletişime geçin.
              </p>
              <a
                href="#contact"
                className="btn-primary group shadow-md text-base px-6 py-3"
              >
                <Star size={16} className="mr-2 group-hover:rotate-12 transition-transform duration-200" />
                İletişime Geç
                <TrendingUp size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners 