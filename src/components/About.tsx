import { Globe, Rocket, Shield, Heart, Sparkles, Zap, Layers, Brain, Code2, Network, Crown, Gem, Diamond, Compass, Search } from 'lucide-react'
import { useI18n } from '../i18n'

const About = () => {
  const { t } = useI18n()
  const stats = [
    {
      icon: Globe,
      title: t('about_stat1_title'),
      value: t('about_stat1_value'),
      description: t('about_stat1_desc'),
      color: "from-blue-500 to-cyan-500",
      glowColor: "shadow-blue-500/50"
    },
    {
      icon: Rocket,
      title: t('about_stat2_title'),
      value: "2021",
      description: t('about_stat2_desc'),
      color: "from-purple-500 to-pink-500",
      glowColor: "shadow-purple-500/50"
    },
    {
      icon: Shield,
      title: t('about_stat3_title'),
      value: "100+",
      description: t('about_stat3_desc'),
      color: "from-emerald-500 to-teal-500",
      glowColor: "shadow-emerald-500/50"
    },
    {
      icon: Heart,
      title: t('about_stat4_title'),
      value: "500+",
      description: t('about_stat4_desc'),
      color: "from-rose-500 to-red-500",
      glowColor: "shadow-rose-500/50"
    }
  ]

  const techStack = [
    {
      icon: Sparkles,
      title: t('tech_event_title'),
      description: t('tech_event_desc'),
      color: "from-blue-800/80 via-slate-800/60 to-blue-900/40",
      glowColor: "shadow-blue-700/30",
      bgColor: "from-blue-950/40 via-slate-900/30 to-blue-900/20",
      borderColor: "border-blue-700/30",
      hoverBorder: "group-hover:border-blue-600/40"
    },
    {
      icon: Crown,
      title: t('tech_edu_title'),
      description: t('tech_edu_desc'),
      color: "from-purple-800/80 via-slate-800/60 to-purple-900/40",
      glowColor: "shadow-purple-700/30",
      bgColor: "from-purple-950/40 via-slate-900/30 to-purple-900/20",
      borderColor: "border-purple-700/30",
      hoverBorder: "group-hover:border-purple-600/40"
    },
    {
      icon: Zap,
      title: t('tech_marketing_title'),
      description: t('tech_marketing_desc'),
      color: "from-emerald-800/80 via-slate-800/60 to-emerald-900/40",
      glowColor: "shadow-emerald-700/30",
      bgColor: "from-emerald-950/40 via-slate-900/30 to-emerald-900/20",
      borderColor: "border-emerald-700/30",
      hoverBorder: "group-hover:border-emerald-600/40"
    },
    {
      icon: Code2,
      title: t('tech_dev_title'),
      description: t('tech_dev_desc'),
      color: "from-orange-800/80 via-slate-800/60 to-orange-900/40",
      glowColor: "shadow-orange-700/30",
      bgColor: "from-orange-950/40 via-slate-900/30 to-orange-900/20",
      borderColor: "border-orange-700/30",
      hoverBorder: "group-hover:border-orange-600/40"
    },
    {
      icon: Diamond,
      title: t('tech_community_title'),
      description: t('tech_community_desc'),
      color: "from-rose-800/80 via-slate-800/60 to-rose-900/40",
      glowColor: "shadow-rose-700/30",
      bgColor: "from-rose-950/40 via-slate-900/30 to-rose-900/20",
      borderColor: "border-rose-700/30",
      hoverBorder: "group-hover:border-rose-600/40"
    },
    {
      icon: Network,
      title: t('tech_social_title'),
      description: t('tech_social_desc'),
      color: "from-indigo-800/80 via-slate-800/60 to-indigo-900/40",
      glowColor: "shadow-indigo-700/30",
      bgColor: "from-indigo-950/40 via-slate-900/30 to-indigo-900/20",
      borderColor: "border-indigo-700/30",
      hoverBorder: "group-hover:border-indigo-600/40"
    },
    {
      icon: Brain,
      title: t('tech_content_title'),
      description: t('tech_content_desc'),
      color: "from-teal-800/80 via-slate-800/60 to-teal-900/40",
      glowColor: "shadow-teal-700/30",
      bgColor: "from-teal-950/40 via-slate-900/30 to-teal-900/20",
      borderColor: "border-teal-700/30",
      hoverBorder: "group-hover:border-teal-600/40"
    },
    {
      icon: Gem,
      title: t('tech_strategy_title'),
      description: t('tech_strategy_desc'),
      color: "from-violet-800/80 via-slate-800/60 to-violet-900/40",
      glowColor: "shadow-violet-700/30",
      bgColor: "from-violet-950/40 via-slate-900/30 to-violet-900/20",
      borderColor: "border-violet-700/30",
      hoverBorder: "group-hover:border-violet-600/40"
    }
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black">
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with Holographic Effect */}
        <div className="text-center mb-16 animate-fade-in-up">
          
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            {t('about_heading_1')}{t('about_heading_2')}
          </h2>
          

        </div>

        {/* Enhanced Stats Section with Premium Dark Theme Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20 px-4">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Subtle Dark Theme Card */}
              <div className="relative bg-gradient-to-br from-slate-950/95 via-black/90 to-neutral-900/85 backdrop-blur-3xl p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-700/30 shadow-2xl hover:shadow-3xl transition-all duration-50 group-hover:scale-105 overflow-hidden">
                {/* Subtle Color Accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-8 transition-all duration-50 rounded-2xl sm:rounded-3xl`}></div>
                
                {/* Subtle Dark Icon Container */}
                <div className="relative mb-4 sm:mb-6">
                  <div className={`relative w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900/90 via-black/85 to-neutral-900/80 backdrop-blur-xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-50 group-hover:scale-110 group-hover:rotate-6 relative overflow-hidden border border-slate-600/20 group-hover:border-slate-500/30`}>
                    {/* Subtle Icon Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-12 transition-all duration-50 rounded-2xl sm:rounded-3xl`}></div>
                    <stat.icon className="relative w-6 h-6 sm:w-8 sm:h-8 text-neutral-300 group-hover:text-white group-hover:scale-110 transition-all duration-50 drop-shadow-lg group-hover:drop-shadow-2xl" />
                  </div>
                </div>
                
                {/* Premium Content */}
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 group-hover:text-neutral-100 transition-all duration-50 relative z-10 drop-shadow-lg">
                  {stat.value}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-neutral-300 mb-1 relative z-10 group-hover:text-white transition-colors duration-50">
                  {stat.title}
                </p>
                <p className="text-xs sm:text-xs text-neutral-400 relative z-10 group-hover:text-neutral-300 transition-colors duration-50 leading-relaxed">
                  {stat.description}
                </p>
                
                {/* Pure Dark - No Bottom Glow */}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Section - New Premium Feature */}
        <div className="mb-24">
          <div className="text-center mb-16 animate-fade-in-up">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 sm:mb-6">{t('skills')}</h3>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed px-4">{t('skills_p')}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 px-4">
            {techStack.map((tech, index) => (
              <div 
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Liquid Glass Card */}
                <div className="relative h-full flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl">
                  {/* Liquid Glass Background - Enhanced Dark Theme with Color */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.bgColor} backdrop-blur-3xl rounded-2xl sm:rounded-3xl border ${tech.borderColor} ${tech.hoverBorder} shadow-2xl group-hover:shadow-3xl transition-all duration-50 group-hover:scale-[1.02] group-hover:-translate-y-1`}>
                    {/* Multi-layer Liquid Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/40 via-transparent to-neutral-600/25 rounded-2xl sm:rounded-3xl opacity-70 group-hover:opacity-90 transition-opacity duration-50"></div>
                    
                    {/* Secondary Liquid Layer */}
                    <div className="absolute inset-0 bg-gradient-to-tl from-neutral-700/30 via-transparent to-neutral-800/20 rounded-2xl sm:rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-50"></div>
                    
                    {/* Color Accent Layer */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${tech.bgColor} opacity-0 group-hover:opacity-100 transition-all duration-50 rounded-2xl sm:rounded-3xl`}></div>
                    
                    {/* Liquid Glass Shimmer Effect - Enhanced */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-300/15 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1200 rounded-2xl sm:rounded-3xl"></div>
                    
                    {/* Subtle Inner Glow - Enhanced */}
                    <div className="absolute inset-1 bg-gradient-to-br from-neutral-600/25 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-50"></div>
                    
                    {/* Liquid Glass Reflection - Top */}
                    <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-neutral-400/10 to-transparent rounded-t-2xl sm:rounded-t-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-50"></div>
                    
                    {/* Liquid Glass Reflection - Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-neutral-500/10 to-transparent rounded-b-2xl sm:rounded-b-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-50"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
                    {/* Icon Container with Enhanced Liquid Glass Effect */}
                    <div className="relative mb-4 sm:mb-6">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-50 group-hover:scale-110 group-hover:rotate-3 relative overflow-hidden`}>
                        {/* Multi-layer Icon Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-neutral-300/25 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-50"></div>
                        
                        {/* Secondary Glow Layer */}
                        <div className="absolute inset-0 bg-gradient-to-tl from-neutral-400/15 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-50"></div>
                        
                        {/* Icon */}
                        <tech.icon className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-100 relative z-10 group-hover:scale-110 transition-transform duration-50 drop-shadow-lg" />
                        
                        {/* Enhanced Liquid Glass Reflection - Top */}
                        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-neutral-200/40 to-transparent rounded-t-xl sm:rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-50"></div>
                        
                        {/* Liquid Glass Reflection - Bottom */}
                        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-neutral-300/20 to-transparent rounded-b-xl sm:rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-50"></div>
                        
                        {/* Subtle Inner Shimmer */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-200/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-800 rounded-xl sm:rounded-2xl"></div>
                      </div>
                    </div>
                    
                    {/* Title with Enhanced Contrast */}
                    <h4 className="text-lg sm:text-xl font-bold text-neutral-100 mb-3 sm:mb-4 group-hover:text-neutral-50 transition-colors duration-50 relative z-10 drop-shadow-lg">
                    {tech.title}
                  </h4>
                    
                    {/* Description with Enhanced Readability */}
                    <p className="text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors duration-50 relative z-10 text-xs sm:text-sm flex-grow font-medium drop-shadow-md">
                    {tech.description}
                  </p>
                    
                    {/* Enhanced Bottom Glow - Multi-layer */}
                    <div className="absolute bottom-0 left-0 right-0 h-8 sm:h-12 bg-gradient-to-t from-neutral-800/40 to-transparent rounded-b-2xl sm:rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-50"></div>
                    
                    {/* Secondary Bottom Glow */}
                    <div className="absolute bottom-0 left-0 right-0 h-4 sm:h-6 bg-gradient-to-t from-neutral-700/20 to-transparent rounded-b-2xl sm:rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-50"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Mission & Vision with 3D Effects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="group relative animate-fade-in-up perspective-1000">
            {/* Liquid Glass Mission Card */}
            <div className="relative h-full flex flex-col overflow-hidden rounded-3xl">
              {/* Liquid Glass Background - Enhanced Dark Theme */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/30 via-neutral-800/20 to-neutral-700/15 backdrop-blur-3xl rounded-3xl border border-neutral-500/20 shadow-2xl group-hover:shadow-3xl transition-all duration-50 group-hover:scale-[1.02] group-hover:-translate-y-1">
                {/* Multi-layer Liquid Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/40 via-transparent to-neutral-600/25 rounded-3xl opacity-70 group-hover:opacity-90 transition-opacity duration-50"></div>
                
                {/* Secondary Liquid Layer */}
                <div className="absolute inset-0 bg-gradient-to-tl from-neutral-700/30 via-transparent to-neutral-800/20 rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-50"></div>
                
                {/* Liquid Glass Shimmer Effect - Enhanced */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-300/15 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1200 rounded-3xl"></div>
                
                {/* Subtle Inner Glow - Enhanced */}
                <div className="absolute inset-1 bg-gradient-to-br from-neutral-600/25 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-50"></div>
                
                {/* Liquid Glass Reflection - Top */}
                <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-neutral-400/10 to-transparent rounded-t-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-50"></div>
                
                {/* Liquid Glass Reflection - Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-neutral-500/10 to-transparent rounded-b-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-50"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-10 h-full flex flex-col">
              <div className="flex items-center mb-8 relative z-10">
                  {/* Icon Container with Enhanced Liquid Glass Effect */}
                  <div className="relative mr-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-slate-700 to-slate-900 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-50 group-hover:scale-110 group-hover:rotate-12 relative overflow-hidden">
                      {/* Multi-layer Icon Background Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-neutral-300/25 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-50"></div>
                      
                      {/* Secondary Glow Layer */}
                      <div className="absolute inset-0 bg-gradient-to-tl from-neutral-400/15 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-50"></div>
                      
                      {/* Icon */}
                      <Compass className="w-7 h-7 text-neutral-200 relative z-10 group-hover:scale-110 transition-transform duration-50 drop-shadow-lg" />
                      
                      {/* Enhanced Liquid Glass Reflection - Top */}
                      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-neutral-200/40 to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-50"></div>
                      
                      {/* Liquid Glass Reflection - Bottom */}
                      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-neutral-300/20 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-50"></div>
                      
                      {/* Subtle Inner Shimmer */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-200/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-800 rounded-2xl"></div>
                    </div>
                  </div>
                  
                  {/* Title with Enhanced Contrast */}
                  <h3 className="text-2xl font-black text-neutral-100 group-hover:text-neutral-50 transition-colors duration-50 relative z-10 drop-shadow-lg">
                    {t('mission')}
                  </h3>
                </div>
                
                {/* Description with Enhanced Readability */}
                <p className="text-neutral-300 leading-relaxed text-lg group-hover:text-neutral-200 transition-colors duration-50 relative z-10 flex-grow font-medium drop-shadow-md">
                  {t('mission_p')}
                </p>
                
                {/* Enhanced Bottom Glow - Multi-layer */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-neutral-800/40 to-transparent rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-50"></div>
                
                {/* Secondary Bottom Glow */}
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-neutral-700/20 to-transparent rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-50"></div>
              </div>
            </div>
          </div>
          
          <div className="group relative animate-fade-in-up perspective-1000">
            {/* Liquid Glass Vision Card */}
            <div className="relative h-full flex flex-col overflow-hidden rounded-3xl">
              {/* Liquid Glass Background - Enhanced Dark Theme */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/30 via-neutral-800/20 to-neutral-700/15 backdrop-blur-3xl rounded-3xl border border-neutral-500/20 shadow-2xl group-hover:shadow-3xl transition-all duration-50 group-hover:scale-[1.02] group-hover:-translate-y-1">
                {/* Multi-layer Liquid Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/40 via-transparent to-neutral-600/25 rounded-3xl opacity-70 group-hover:opacity-90 transition-opacity duration-50"></div>
                
                {/* Secondary Liquid Layer */}
                <div className="absolute inset-0 bg-gradient-to-tl from-neutral-700/30 via-transparent to-neutral-800/20 rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-50"></div>
                
                {/* Liquid Glass Shimmer Effect - Enhanced */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-300/15 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1200 rounded-3xl"></div>
                
                {/* Subtle Inner Glow - Enhanced */}
                <div className="absolute inset-1 bg-gradient-to-br from-neutral-600/25 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-50"></div>
                
                {/* Liquid Glass Reflection - Top */}
                <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-neutral-400/10 to-transparent rounded-t-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-50"></div>
                
                {/* Liquid Glass Reflection - Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-neutral-500/10 to-transparent rounded-b-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-50"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-10 h-full flex flex-col">
              <div className="flex items-center mb-8 relative z-10">
                  {/* Icon Container with Enhanced Liquid Glass Effect */}
                  <div className="relative mr-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-gray-700 to-gray-900 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-50 group-hover:scale-110 group-hover:rotate-12 relative overflow-hidden">
                      {/* Multi-layer Icon Background Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-neutral-300/25 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-50"></div>
                      
                      {/* Secondary Glow Layer */}
                      <div className="absolute inset-0 bg-gradient-to-tl from-neutral-400/15 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-50"></div>
                      
                      {/* Icon */}
                      <Search className="w-7 h-7 text-neutral-200 relative z-10 group-hover:scale-110 transition-transform duration-50 drop-shadow-lg" />
                      
                      {/* Enhanced Liquid Glass Reflection - Top */}
                      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-neutral-200/40 to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-50"></div>
                      
                      {/* Liquid Glass Reflection - Bottom */}
                      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-neutral-300/20 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-50"></div>
                      
                      {/* Subtle Inner Shimmer */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-200/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-800 rounded-2xl"></div>
                    </div>
                  </div>
                  
                  {/* Title with Enhanced Contrast */}
                  <h3 className="text-2xl font-black text-neutral-100 group-hover:text-neutral-50 transition-colors duration-50 relative z-10 drop-shadow-lg">
                    {t('vision')}
                  </h3>
                </div>
                
                {/* Description with Enhanced Readability */}
                <p className="text-neutral-300 leading-relaxed text-lg group-hover:text-neutral-200 transition-colors duration-50 relative z-10 flex-grow font-medium drop-shadow-md">
                  {t('vision_p')}
                </p>
                
                {/* Enhanced Bottom Glow - Multi-layer */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-neutral-800/40 to-transparent rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-50"></div>
                
                {/* Secondary Bottom Glow */}
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-neutral-700/20 to-transparent rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 