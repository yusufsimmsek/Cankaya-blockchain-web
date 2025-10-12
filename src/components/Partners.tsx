import { Crown, Network, Compass, Brain, Sparkles, Star, Heart, TrendingUp, ChevronDown, ChevronUp, Zap, Target, Award, Globe, ArrowRight, ExternalLink, Hexagon, Atom, Orbit, Infinity, Gem, Diamond, Layers } from 'lucide-react'
import { useState } from 'react'
import { useI18n } from '../i18n'

const Partners = () => {
  const { t } = useI18n()
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
      title: t('partners_cat_exchanges'),
      icon: Crown,
      color: "from-slate-700 to-slate-900",
      gradient: "from-slate-800/20 via-slate-700/20 to-slate-900/20",
      accent: "from-slate-600 to-slate-800",
      partners: [
        "CoinEx", "Binance", "CoinW", "LBank", "Poloniex", "XT.com",
        "KuCoin", "OKX", "Bybit", "Gate.io", "Huobi", "Bitget"
      ]
    },
    {
      title: t('partners_cat_ecosystem'),
      icon: Network,
      color: "from-gray-700 to-gray-900",
      gradient: "from-gray-800/20 via-gray-700/20 to-gray-900/20",
      accent: "from-gray-600 to-gray-800",
      partners: [
        "NEAR Protocol", "Solana Foundation", "Chainlink",
        "Polygon", "Avalanche", "Cardano", "Polkadot", "Cosmos",
        "Ethereum Foundation", "Binance Smart Chain"
      ]
    },
    {
      title: t('partners_cat_community'),
      icon: Compass,
      color: "from-zinc-700 to-zinc-900",
      gradient: "from-zinc-800/20 via-zinc-700/20 to-zinc-900/20",
      accent: "from-zinc-600 to-zinc-800",
      partners: [
        "StarkHub TR", "ICP Hub Turkey", "ODTÜ Blockchain", 
        "YTÜ Blockchain", "Uludağ Blockchain Kulüpleri",
        "İTÜ Blockchain", "Hacettepe Blockchain", "Gazi Blockchain",
        "Ankara Üniversitesi Blockchain", "Başkent Blockchain"
      ]
    },
    {
      title: t('partners_cat_education'),
      icon: Brain,
      color: "from-neutral-700 to-neutral-900",
      gradient: "from-neutral-800/20 via-neutral-700/20 to-neutral-900/20",
      accent: "from-neutral-600 to-neutral-800",
      partners: [
        "Patika.dev", "GDG Çankaya", "CryptoFemale",
        "BTK Akademi", "Udemy", "Coursera", "edX", "Pluralsight",
        "Codecademy", "freeCodeCamp"
      ]
    }
  ]

  const stats = [
    { icon: Hexagon, value: "12+", label: t('partners_stat_exchanges'), color: "from-slate-700 to-slate-900" },
    { icon: Atom, value: "10+", label: t('partners_stat_ecosystem'), color: "from-gray-700 to-gray-900" },
    { icon: Orbit, value: "10+", label: t('partners_stat_community'), color: "from-zinc-700 to-zinc-900" },
    { icon: Infinity, value: "10+", label: t('partners_stat_education'), color: "from-neutral-700 to-neutral-900" }
  ]

  const toggleCategory = (index: number) => {
    setExpandedCategories(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section id="partners" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black">
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-100 mb-6 drop-shadow-lg">{t('partners_title')}</h2>
          <p className="text-lg sm:text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed drop-shadow-md">{t('partners_p')}</p>
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
                
                {/* Category Header with Liquid Glass */}
                <div className="relative flex items-center gap-6 mb-6">
                  <div className="relative z-10">
                    {/* Liquid Glass Icon Container */}
                    <div className="relative">
                      {/* Liquid Glass Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/40 via-neutral-800/30 to-neutral-700/20 backdrop-blur-3xl rounded-2xl border border-neutral-500/20 shadow-2xl group-hover:shadow-3xl transition-all duration-700 group-hover:scale-110"></div>
                      
                      {/* Multi-layer Liquid Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/50 via-transparent to-neutral-600/30 rounded-2xl opacity-70 group-hover:opacity-90 transition-opacity duration-700"></div>
                      
                      {/* Secondary Liquid Layer */}
                      <div className="absolute inset-0 bg-gradient-to-tl from-neutral-700/40 via-transparent to-neutral-800/30 rounded-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
                      
                      {/* Liquid Glass Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400/15 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1200 rounded-2xl"></div>
                      
                      {/* Subtle Inner Glow */}
                      <div className="absolute inset-1 bg-gradient-to-br from-neutral-600/25 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Liquid Glass Reflection - Top */}
                      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-neutral-400/10 to-transparent rounded-t-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                      
                      {/* Liquid Glass Reflection - Bottom */}
                      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-neutral-500/10 to-transparent rounded-b-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                      
                      {/* Icon Container */}
                      <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 relative overflow-hidden`}>
                        {/* Multi-layer Icon Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-neutral-300/25 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Secondary Glow Layer */}
                        <div className="absolute inset-0 bg-gradient-to-tl from-neutral-400/15 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        
                        {/* Icon */}
                        <category.icon className="w-8 h-8 text-neutral-100 relative z-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                        
                        {/* Enhanced Liquid Glass Reflection - Top */}
                        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-neutral-200/40 to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Liquid Glass Reflection - Bottom */}
                        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-neutral-300/20 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        
                        {/* Subtle Inner Shimmer */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-200/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-800 rounded-2xl"></div>
                      </div>
                    </div>
                      </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neutral-100 mb-2 group-hover:text-neutral-50 transition-colors duration-300 drop-shadow-lg">
                        {category.title}
                      </h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-neutral-400 to-neutral-600 rounded-full group-hover:w-24 transition-all duration-300"></div>
                  </div>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {/* Liquid Glass Arrow Container */}
                    <div className="relative">
                      {/* Liquid Glass Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/40 via-neutral-800/30 to-neutral-700/20 backdrop-blur-2xl rounded-full border border-neutral-500/20 shadow-xl"></div>
                      
                      {/* Liquid Glass Shimmer */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400/15 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-full"></div>
                      
                      <div className="w-8 h-8 bg-gradient-to-r from-neutral-600 to-neutral-800 rounded-full flex items-center justify-center relative z-10">
                        <ArrowRight className="w-4 h-4 text-neutral-100" />
                      </div>
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
                        {/* Liquid Glass Card Container */}
                        <div className="relative h-full flex items-center overflow-hidden rounded-2xl">
                          {/* Liquid Glass Background - Enhanced Dark Theme */}
                          <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/30 via-neutral-800/20 to-neutral-700/15 backdrop-blur-3xl rounded-2xl border border-neutral-500/20 shadow-2xl group-hover/item:shadow-3xl transition-all duration-700 group-hover/item:scale-[1.02] group-hover/item:-translate-y-1">
                            {/* Multi-layer Liquid Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/40 via-transparent to-neutral-600/25 rounded-2xl opacity-70 group-hover/item:opacity-90 transition-opacity duration-700"></div>
                            
                            {/* Secondary Liquid Layer */}
                            <div className="absolute inset-0 bg-gradient-to-tl from-neutral-700/30 via-transparent to-neutral-800/20 rounded-2xl opacity-50 group-hover/item:opacity-70 transition-opacity duration-700"></div>
                            
                            {/* Liquid Glass Shimmer Effect - Enhanced */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-300/15 to-transparent -skew-x-12 translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-1200 rounded-2xl"></div>
                            
                            {/* Subtle Inner Glow - Enhanced */}
                            <div className="absolute inset-1 bg-gradient-to-br from-neutral-600/25 to-transparent rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Liquid Glass Reflection - Top */}
                            <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-neutral-400/10 to-transparent rounded-t-2xl opacity-60 group-hover/item:opacity-80 transition-opacity duration-500"></div>
                            
                            {/* Liquid Glass Reflection - Bottom */}
                            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-neutral-500/10 to-transparent rounded-b-2xl opacity-40 group-hover/item:opacity-60 transition-opacity duration-500"></div>
                          </div>
                          
                          {/* Content */}
                          <div className="relative z-10 p-3 h-full flex items-center gap-2 w-full">
                            {/* Animated Dot with Liquid Glass Effect */}
                            <div className="relative z-10 flex-shrink-0">
                              <div className="relative">
                                {/* Liquid Glass Dot Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/40 via-neutral-700/30 to-neutral-600/20 backdrop-blur-2xl rounded-full border border-neutral-500/20 shadow-lg group-hover/item:shadow-xl transition-all duration-500"></div>
                                
                                {/* Dot Shimmer */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-300/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-800 rounded-full"></div>
                                
                                <div className="w-2 h-2 bg-gradient-to-r from-neutral-300 to-neutral-100 rounded-full group-hover/item:scale-150 transition-all duration-500 animate-pulse group-hover/item:animate-none relative z-10">
                                  <div className="absolute inset-0 bg-gradient-to-r from-neutral-300 to-neutral-100 rounded-full animate-ping opacity-75"></div>
                                </div>
                            </div>
                          </div>
                          
                          {/* Partner Name */}
                            <span className="text-neutral-100/95 font-medium text-sm group-hover/item:text-neutral-50 group-hover/item:font-bold transition-all duration-500 truncate relative z-10 group-hover/item:tracking-wide drop-shadow-md flex-grow">
                            {partner}
                          </span>
                          
                            {/* Floating Icon with Liquid Glass */}
                          <div className="absolute top-1 right-1 opacity-0 group-hover/item:opacity-100 transition-all duration-500 transform translate-y-2 group-hover/item:translate-y-0 relative z-10">
                              <div className="relative">
                                {/* Liquid Glass Icon Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/40 via-neutral-700/30 to-neutral-600/20 backdrop-blur-2xl rounded-full border border-neutral-500/20 shadow-lg"></div>
                                
                                <div className="w-4 h-4 bg-gradient-to-r from-neutral-600 to-neutral-800 rounded-full flex items-center justify-center animate-bounce relative z-10">
                                  <ExternalLink className="w-2 h-2 text-neutral-100" />
                                </div>
                              </div>
                            </div>
                            
                            {/* Enhanced Bottom Glow - Multi-layer */}
                            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-neutral-800/40 to-transparent rounded-b-2xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                          
                            {/* Secondary Bottom Glow */}
                            <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-neutral-700/20 to-transparent rounded-b-2xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-700"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Show More/Less Button with Liquid Glass */}
                  {category.partners.length > 8 && (
                    <div className="mt-4">
                      <button
                        onClick={() => toggleCategory(index)}
                        className="relative inline-flex items-center gap-2 px-4 py-2 rounded-2xl group overflow-hidden"
                      >
                        {/* Liquid Glass Background - Enhanced Dark Theme */}
                        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/30 via-neutral-800/20 to-neutral-700/15 backdrop-blur-3xl rounded-2xl border border-neutral-500/20 shadow-2xl group-hover:shadow-3xl transition-all duration-700 group-hover:scale-105"></div>
                        
                        {/* Multi-layer Liquid Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/40 via-transparent to-neutral-600/25 rounded-2xl opacity-70 group-hover:opacity-90 transition-opacity duration-700"></div>
                        
                        {/* Secondary Liquid Layer */}
                        <div className="absolute inset-0 bg-gradient-to-tl from-neutral-700/30 via-transparent to-neutral-800/20 rounded-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
                        
                        {/* Liquid Glass Shimmer Effect - Enhanced */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-300/15 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1200 rounded-2xl"></div>
                        
                        {/* Subtle Inner Glow - Enhanced */}
                        <div className="absolute inset-1 bg-gradient-to-br from-neutral-600/25 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Liquid Glass Reflection - Top */}
                        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-neutral-400/10 to-transparent rounded-t-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                        
                        {/* Liquid Glass Reflection - Bottom */}
                        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-neutral-500/10 to-transparent rounded-b-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                        
                        {/* Content */}
                        <div className="relative z-10 flex items-center gap-2">
                          {/* Animated Dot with Liquid Glass Effect */}
                          <div className="relative">
                            {/* Liquid Glass Dot Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/40 via-neutral-700/30 to-neutral-600/20 backdrop-blur-2xl rounded-full border border-neutral-500/20 shadow-lg group-hover:shadow-xl transition-all duration-500"></div>
                            
                            {/* Dot Shimmer */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-300/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-800 rounded-full"></div>
                            
                            <div className="w-2 h-2 bg-gradient-to-r from-neutral-300 to-neutral-100 rounded-full animate-pulse group-hover:scale-150 transition-transform duration-500 relative z-10">
                              <div className="absolute inset-0 bg-gradient-to-r from-neutral-300 to-neutral-100 rounded-full animate-ping opacity-75"></div>
                            </div>
                          </div>
                          
                          <span className="text-neutral-100/90 text-sm font-medium group-hover:text-neutral-50 group-hover:font-bold transition-all duration-500 relative z-10 drop-shadow-md">
                          {expandedCategories.includes(index) 
                            ? t('show_less') 
                            : `+${category.partners.length - 8}`
                          }
                        </span>
                          
                        {expandedCategories.includes(index) ? (
                            <ChevronUp className="w-4 h-4 text-neutral-100/90 group-hover:text-neutral-50 group-hover:-translate-y-0.5 transition-all duration-500 relative z-10 drop-shadow-md" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-neutral-100/90 group-hover:text-neutral-50 group-hover:translate-y-0.5 transition-all duration-500 relative z-10 drop-shadow-md" />
                          )}
                        </div>
                        
                        {/* Enhanced Bottom Glow - Multi-layer */}
                        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-neutral-800/40 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Secondary Bottom Glow */}
                        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-neutral-700/20 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
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
                <span className="text-sm font-medium text-primary-700 dark:text-primary-300">{t('our_partners')}</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">{t('trusted_partnerships')}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">{t('leading_orgs')}</p>
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

        {/* Modern Stats with Liquid Glass */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full flex flex-col overflow-hidden rounded-2xl">
                {/* Liquid Glass Background - Enhanced Dark Theme */}
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/30 via-neutral-800/20 to-neutral-700/15 backdrop-blur-3xl rounded-2xl border border-neutral-500/20 shadow-2xl group-hover:shadow-3xl transition-all duration-700 group-hover:scale-[1.02] group-hover:-translate-y-1">
                  {/* Multi-layer Liquid Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/40 via-transparent to-neutral-600/25 rounded-2xl opacity-70 group-hover:opacity-90 transition-opacity duration-700"></div>
                  
                  {/* Secondary Liquid Layer */}
                  <div className="absolute inset-0 bg-gradient-to-tl from-neutral-700/30 via-transparent to-neutral-800/20 rounded-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
                  
                  {/* Liquid Glass Shimmer Effect - Enhanced */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-300/15 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1200 rounded-2xl"></div>
                  
                  {/* Subtle Inner Glow - Enhanced */}
                  <div className="absolute inset-1 bg-gradient-to-br from-neutral-600/25 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Liquid Glass Reflection - Top */}
                  <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-neutral-400/10 to-transparent rounded-t-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  
                  {/* Liquid Glass Reflection - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-neutral-500/10 to-transparent rounded-b-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-4 h-full flex flex-col items-center text-center">
                  {/* Icon Container with Enhanced Liquid Glass Effect */}
                  <div className="relative mb-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 relative overflow-hidden`}>
                      {/* Multi-layer Icon Background Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-neutral-300/25 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Secondary Glow Layer */}
                      <div className="absolute inset-0 bg-gradient-to-tl from-neutral-400/15 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      
                      {/* Icon */}
                      <stat.icon className="w-5 h-5 text-neutral-100 relative z-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                      
                      {/* Enhanced Liquid Glass Reflection - Top */}
                      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-neutral-200/40 to-transparent rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Liquid Glass Reflection - Bottom */}
                      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-neutral-300/20 to-transparent rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      
                      {/* Subtle Inner Shimmer */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-200/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-800 rounded-xl"></div>
                    </div>
                  </div>
                  
                  {/* Value */}
                  <div className="text-2xl font-bold text-neutral-100 mb-1 group-hover:text-neutral-50 transition-colors duration-500 relative z-10 drop-shadow-lg">
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <div className="text-xs text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors duration-500 relative z-10 font-medium drop-shadow-md">
                    {stat.label}
                  </div>
                  
                  {/* Subtle Bottom Glow */}
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-neutral-800/40 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Secondary Bottom Glow */}
                  <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-neutral-700/20 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action with Liquid Glass */}
        <div className="text-center animate-fade-in-up delay-500">
          <div className="relative group">
            <div className="relative h-full flex flex-col overflow-hidden rounded-3xl">
              {/* Liquid Glass Background - Enhanced Dark Theme */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/30 via-neutral-800/20 to-neutral-700/15 backdrop-blur-3xl rounded-3xl border border-neutral-500/20 shadow-2xl group-hover:shadow-3xl transition-all duration-700 group-hover:scale-[1.02] group-hover:-translate-y-1">
                {/* Multi-layer Liquid Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/40 via-transparent to-neutral-600/25 rounded-3xl opacity-70 group-hover:opacity-90 transition-opacity duration-700"></div>
                
                {/* Secondary Liquid Layer */}
                <div className="absolute inset-0 bg-gradient-to-tl from-neutral-700/30 via-transparent to-neutral-800/20 rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
                
                {/* Liquid Glass Shimmer Effect - Enhanced */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-300/15 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1200 rounded-3xl"></div>
                
                {/* Subtle Inner Glow - Enhanced */}
                <div className="absolute inset-1 bg-gradient-to-br from-neutral-600/25 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Liquid Glass Reflection - Top */}
                <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-neutral-400/10 to-transparent rounded-t-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                {/* Liquid Glass Reflection - Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-neutral-500/10 to-transparent rounded-b-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col items-center text-center">
                {/* Icon Container with Enhanced Liquid Glass Effect */}
                <div className="relative mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-slate-700 to-slate-900 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 relative overflow-hidden">
                    {/* Multi-layer Icon Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-300/25 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Secondary Glow Layer */}
                    <div className="absolute inset-0 bg-gradient-to-tl from-neutral-400/15 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Icon */}
                    <Gem className="w-6 h-6 text-neutral-100 relative z-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                    
                    {/* Enhanced Liquid Glass Reflection - Top */}
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-neutral-200/40 to-transparent rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Liquid Glass Reflection - Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-neutral-300/20 to-transparent rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Subtle Inner Shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-200/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-800 rounded-xl"></div>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-100 mb-3 group-hover:text-neutral-50 transition-colors duration-500 relative z-10 drop-shadow-lg">
                {t('contact_cta_h')}
              </h3>
                
                {/* Description */}
                <p className="text-neutral-300 mb-6 max-w-2xl mx-auto leading-relaxed group-hover:text-neutral-200 transition-colors duration-500 relative z-10 font-medium drop-shadow-md">
                {t('contact_cta_p')}
              </p>
                
                {/* CTA Button with Liquid Glass */}
              <a
                href="#contact"
                  className="relative group/btn inline-flex items-center gap-2 px-6 py-3 rounded-2xl overflow-hidden"
                >
                  {/* Liquid Glass Button Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/40 via-neutral-700/30 to-neutral-600/20 backdrop-blur-2xl rounded-2xl border border-neutral-500/20 shadow-xl group-hover/btn:shadow-2xl transition-all duration-500 group-hover/btn:scale-105"></div>
                  
                  {/* Button Shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-300/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 rounded-2xl"></div>
                  
                  <Diamond size={16} className="mr-2 group-hover/btn:rotate-12 transition-transform duration-200 relative z-10 text-neutral-100" />
                  <span className="relative z-10 text-neutral-100 font-semibold group-hover/btn:text-neutral-50 transition-colors duration-200">
                {t('contact_cta_btn')}
                  </span>
                  <Layers size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-200 relative z-10 text-neutral-100" />
                </a>
                
                {/* Subtle Bottom Glow */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-neutral-800/40 to-transparent rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Secondary Bottom Glow */}
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-neutral-700/20 to-transparent rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners 