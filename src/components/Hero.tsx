import { ChevronDown, Github, Linkedin, ExternalLink, Sparkles, TrendingUp, Users } from 'lucide-react'
import { useI18n } from '../i18n'

const Hero = () => {
  const { t } = useI18n()
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 sm:pt-24 md:pt-28 px-4 sm:px-6 lg:px-8 pb-8 relative overflow-hidden bg-black">
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Hero Content */}
        <div className="space-y-8">
          {/* Badge kısmı kaldırıldı */}

          <div className="space-y-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight sm:leading-snug pt-4 sm:pt-6 pb-2 sm:pb-3 py-2 sm:py-3 break-words mx-auto max-w-[95vw] sm:max-w-[90vw] relative">
              {/* 3D Liquid Glass Title Container */}
              <div className="relative inline-block">
                {/* 3D Shadow Layer */}
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-800/30 via-neutral-700/20 to-neutral-600/30 blur-2xl scale-110 opacity-60 animate-pulse"></div>
                
                {/* Liquid Glass Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/40 via-neutral-800/30 to-neutral-700/20 backdrop-blur-2xl rounded-2xl border border-neutral-500/20 shadow-2xl"></div>
                
                {/* Multi-layer Liquid Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/50 via-transparent to-neutral-600/30 rounded-2xl opacity-70"></div>
                
                {/* Secondary Liquid Layer */}
                <div className="absolute inset-0 bg-gradient-to-tl from-neutral-700/40 via-transparent to-neutral-800/30 rounded-2xl opacity-50"></div>
                
                
                {/* Secondary Premium Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-2xl animate-premium-glow"></div>
                
                {/* Premium Particle Effect */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/60 rounded-full animate-premium-float-1"></div>
                  <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-premium-float-2"></div>
                  <div className="absolute top-1/2 left-2/3 w-1 h-1 bg-white/50 rounded-full animate-premium-float-3"></div>
                </div>
                
                {/* 3D Text with Liquid Glass Effect */}
                <div className="relative z-10 px-4 py-3 sm:px-6 sm:py-4 md:px-8">
                  <span className="relative inline-block">
                    {/* 3D Text Shadow */}
                    <span className="absolute inset-0 text-white blur-sm opacity-30 transform translate-x-1 translate-y-1">
                      {t('hero_title_1')}
                    </span>
                    {/* Main 3D Text */}
                    <span className="relative text-white drop-shadow-2xl" style={{
                      textShadow: '0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.2), 0 0 60px rgba(255, 255, 255, 0.1)',
                      filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))'
                    }}>
                      {t('hero_title_1')}
                    </span>
                  </span>
                  
                  <span className="relative inline-block ml-2">
                    {/* 3D Text Shadow */}
                    <span className="absolute inset-0 text-white blur-sm opacity-30 transform translate-x-1 translate-y-1">
                      {t('hero_title_2')}
                    </span>
                    {/* Main 3D Text */}
                    <span className="relative text-white drop-shadow-2xl" style={{
                      textShadow: '0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.2), 0 0 60px rgba(255, 255, 255, 0.1)',
                      filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))'
                    }}>
                      {t('hero_title_2')}
                    </span>
                  </span>
                </div>
                
                {/* Liquid Glass Reflection - Top */}
                <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-neutral-400/20 to-transparent rounded-t-2xl opacity-60"></div>
                
                {/* Liquid Glass Reflection - Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-neutral-500/20 to-transparent rounded-b-2xl opacity-40"></div>
                
                {/* Subtle Inner Glow */}
                <div className="absolute inset-1 bg-gradient-to-br from-neutral-600/30 to-transparent rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-100"></div>
              </div>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-neutral-300 max-w-3xl sm:max-w-4xl mx-auto px-4 leading-relaxed drop-shadow-md">{t('hero_desc')}</p>
          </div>

          {/* Enhanced Stats */}
          <div className="w-full flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 py-6 sm:py-8 justify-items-center max-w-5xl mx-auto">
            <div className="group relative">
              {/* Liquid Glass Card */}
              <div className="relative h-full flex flex-col overflow-hidden rounded-3xl">
                {/* Liquid Glass Background - Enhanced Dark Theme */}
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/30 via-neutral-800/20 to-neutral-700/15 backdrop-blur-3xl rounded-3xl border border-neutral-500/20 shadow-2xl group-hover:shadow-3xl transition-all duration-100 group-hover:scale-[1.02] group-hover:-translate-y-1">
                  {/* Multi-layer Liquid Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/40 via-transparent to-neutral-600/25 rounded-3xl opacity-70 group-hover:opacity-90 transition-opacity duration-100"></div>
                  
                  {/* Secondary Liquid Layer */}
                  <div className="absolute inset-0 bg-gradient-to-tl from-neutral-700/30 via-transparent to-neutral-800/20 rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-100"></div>
                  
                  {/* Liquid Glass Shimmer Effect - Enhanced */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-300/15 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1200 rounded-3xl"></div>
                  
                  {/* Subtle Inner Glow - Enhanced */}
                  <div className="absolute inset-1 bg-gradient-to-br from-neutral-600/25 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-100"></div>
                  
                  {/* Liquid Glass Reflection - Top */}
                  <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-neutral-400/10 to-transparent rounded-t-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-100"></div>
                  
                  {/* Liquid Glass Reflection - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-neutral-500/10 to-transparent rounded-b-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-100"></div>
                  
                  {/* Very Subtle Color Accent */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-purple-500/6 to-cyan-500/8 opacity-0 group-hover:opacity-100 transition-all duration-100 rounded-3xl"></div>
                </div>
                
                {/* Content */}
             <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col text-center">
                  {/* Icon Container with Enhanced Liquid Glass Effect */}
               <div className="relative mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-900/90 via-black/85 to-neutral-900/80 backdrop-blur-xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-100 group-hover:scale-110 group-hover:rotate-12 relative overflow-hidden border border-slate-600/20 group-hover:border-slate-500/30">
                      {/* Very Subtle Icon Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/12 via-purple-500/8 to-cyan-500/12 opacity-0 group-hover:opacity-100 transition-all duration-100 rounded-2xl"></div>
                      
                      {/* Icon */}
                      <TrendingUp className="relative w-5 h-5 sm:w-6 sm:h-6 text-neutral-300 group-hover:text-white group-hover:scale-110 transition-all duration-100 drop-shadow-lg group-hover:drop-shadow-2xl z-10" />
                      
                      {/* Enhanced Liquid Glass Reflection - Top */}
                      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-neutral-200/40 to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-100"></div>
                      
                      {/* Liquid Glass Reflection - Bottom */}
                      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-neutral-300/20 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-100"></div>
                      
                      {/* Subtle Inner Shimmer */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-200/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-800 rounded-2xl"></div>
                    </div>
                  </div>
                  
                  {/* Title with Enhanced Contrast */}
               <div className="text-2xl sm:text-3xl font-bold text-neutral-100 mb-2 group-hover:text-neutral-50 transition-colors duration-100 relative z-10 drop-shadow-lg">
                    2021
                  </div>
                  
                  {/* Description with Enhanced Readability */}
               <div className="text-xs sm:text-sm text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors duration-100 relative z-10 font-medium drop-shadow-md">
                    {t('hero_stat_foundation')}
              </div>
              
                  {/* Enhanced Bottom Glow - Multi-layer */}
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-neutral-800/40 to-transparent rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-100"></div>
                  
                  {/* Secondary Bottom Glow */}
                  <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-neutral-700/20 to-transparent rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-100"></div>
                </div>
              </div>
            </div>
            <div className="group relative">
              {/* Liquid Glass Card */}
              <div className="relative h-full flex flex-col overflow-hidden rounded-3xl">
                {/* Liquid Glass Background - Enhanced Dark Theme */}
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/30 via-neutral-800/20 to-neutral-700/15 backdrop-blur-3xl rounded-3xl border border-neutral-500/20 shadow-2xl group-hover:shadow-3xl transition-all duration-100 group-hover:scale-[1.02] group-hover:-translate-y-1">
                  {/* Multi-layer Liquid Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/40 via-transparent to-neutral-600/25 rounded-3xl opacity-70 group-hover:opacity-90 transition-opacity duration-100"></div>
                  
                  {/* Secondary Liquid Layer */}
                  <div className="absolute inset-0 bg-gradient-to-tl from-neutral-700/30 via-transparent to-neutral-800/20 rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-100"></div>
                  
                  {/* Liquid Glass Shimmer Effect - Enhanced */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-300/15 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1200 rounded-3xl"></div>
                  
                  {/* Subtle Inner Glow - Enhanced */}
                  <div className="absolute inset-1 bg-gradient-to-br from-neutral-600/25 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-100"></div>
                  
                  {/* Liquid Glass Reflection - Top */}
                  <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-neutral-400/10 to-transparent rounded-t-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-100"></div>
                  
                  {/* Liquid Glass Reflection - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-neutral-500/10 to-transparent rounded-b-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-100"></div>
                  
                  {/* Very Subtle Color Accent */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/8 via-green-500/6 to-teal-500/8 opacity-0 group-hover:opacity-100 transition-all duration-100 rounded-3xl"></div>
                </div>
                
                {/* Content */}
             <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col text-center">
                  {/* Icon Container with Enhanced Liquid Glass Effect */}
               <div className="relative mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-900/90 via-black/85 to-neutral-900/80 backdrop-blur-xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-100 group-hover:scale-110 group-hover:rotate-12 relative overflow-hidden border border-slate-600/20 group-hover:border-slate-500/30">
                      {/* Very Subtle Icon Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/12 via-green-500/8 to-teal-500/12 opacity-0 group-hover:opacity-100 transition-all duration-100 rounded-2xl"></div>
                      
                      {/* Icon */}
                      <Github className="relative w-6 h-6 text-neutral-300 group-hover:text-white group-hover:scale-110 transition-all duration-100 drop-shadow-lg group-hover:drop-shadow-2xl z-10" />
                      
                      {/* Enhanced Liquid Glass Reflection - Top */}
                      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-neutral-200/40 to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-100"></div>
                      
                      {/* Liquid Glass Reflection - Bottom */}
                      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-neutral-300/20 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-100"></div>
                      
                      {/* Subtle Inner Shimmer */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-200/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-800 rounded-2xl"></div>
                    </div>
                  </div>
                  
                  {/* Title with Enhanced Contrast */}
               <div className="text-2xl sm:text-3xl font-bold text-neutral-100 mb-2 group-hover:text-neutral-50 transition-colors duration-100 relative z-10 drop-shadow-lg">
                    10+
                  </div>
                  
                  {/* Description with Enhanced Readability */}
               <div className="text-xs sm:text-sm text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors duration-100 relative z-10 font-medium drop-shadow-md">
                    {t('hero_stat_projects')}
              </div>
              
                  {/* Enhanced Bottom Glow - Multi-layer */}
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-neutral-800/40 to-transparent rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-100"></div>
                  
                  {/* Secondary Bottom Glow */}
                  <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-neutral-700/20 to-transparent rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-100"></div>
                </div>
              </div>
            </div>
            <div className="group relative">
              {/* Liquid Glass Card */}
              <div className="relative h-full flex flex-col overflow-hidden rounded-3xl">
                {/* Liquid Glass Background - Enhanced Dark Theme */}
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/30 via-neutral-800/20 to-neutral-700/15 backdrop-blur-3xl rounded-3xl border border-neutral-500/20 shadow-2xl group-hover:shadow-3xl transition-all duration-100 group-hover:scale-[1.02] group-hover:-translate-y-1">
                  {/* Multi-layer Liquid Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/40 via-transparent to-neutral-600/25 rounded-3xl opacity-70 group-hover:opacity-90 transition-opacity duration-100"></div>
                  
                  {/* Secondary Liquid Layer */}
                  <div className="absolute inset-0 bg-gradient-to-tl from-neutral-700/30 via-transparent to-neutral-800/20 rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-100"></div>
                  
                  {/* Liquid Glass Shimmer Effect - Enhanced */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-300/15 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1200 rounded-3xl"></div>
                  
                  {/* Subtle Inner Glow - Enhanced */}
                  <div className="absolute inset-1 bg-gradient-to-br from-neutral-600/25 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-100"></div>
                  
                  {/* Liquid Glass Reflection - Top */}
                  <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-neutral-400/10 to-transparent rounded-t-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-100"></div>
                  
                  {/* Liquid Glass Reflection - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-neutral-500/10 to-transparent rounded-b-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-100"></div>
                  
                  {/* Very Subtle Color Accent */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/8 via-yellow-500/6 to-red-500/8 opacity-0 group-hover:opacity-100 transition-all duration-100 rounded-3xl"></div>
                </div>
                
                {/* Content */}
             <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col text-center">
                  {/* Icon Container with Enhanced Liquid Glass Effect */}
               <div className="relative mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-900/90 via-black/85 to-neutral-900/80 backdrop-blur-xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-100 group-hover:scale-110 group-hover:rotate-12 relative overflow-hidden border border-slate-600/20 group-hover:border-slate-500/30">
                      {/* Very Subtle Icon Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/12 via-yellow-500/8 to-red-500/12 opacity-0 group-hover:opacity-100 transition-all duration-100 rounded-2xl"></div>
                      
                      {/* Icon */}
                      <Users className="relative w-6 h-6 text-neutral-300 group-hover:text-white group-hover:scale-110 transition-all duration-100 drop-shadow-lg group-hover:drop-shadow-2xl z-10" />
                      
                      {/* Enhanced Liquid Glass Reflection - Top */}
                      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-neutral-200/40 to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-100"></div>
                      
                      {/* Liquid Glass Reflection - Bottom */}
                      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-neutral-300/20 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-100"></div>
                      
                      {/* Subtle Inner Shimmer */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-200/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-800 rounded-2xl"></div>
                    </div>
                  </div>
                  
                  {/* Title with Enhanced Contrast */}
               <div className="text-2xl sm:text-3xl font-bold text-neutral-100 mb-2 group-hover:text-neutral-50 transition-colors duration-100 relative z-10 drop-shadow-lg">
                    100+
                  </div>
                  
                  {/* Description with Enhanced Readability */}
               <div className="text-xs sm:text-sm text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors duration-100 relative z-10 font-medium drop-shadow-md">
                    {t('hero_stat_events')}
              </div>
              
                  {/* Enhanced Bottom Glow - Multi-layer */}
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-neutral-800/40 to-transparent rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-100"></div>
                  
                  {/* Secondary Bottom Glow */}
                  <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-neutral-700/20 to-transparent rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-100"></div>
                </div>
              </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center px-4">
            <a
              href="#projects"
              className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-slate-900/90 via-black/85 to-neutral-900/80 text-neutral-100 rounded-xl sm:rounded-2xl font-semibold hover:shadow-xl hover:shadow-slate-700/30 transition-all duration-100 hover:scale-105 hover:-translate-y-1 overflow-hidden backdrop-blur-sm border border-slate-700/30 text-sm sm:text-base"
            >
              {/* Very Subtle Color Accent */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/8 via-purple-500/6 to-cyan-500/8 opacity-0 group-hover:opacity-100 transition-all duration-100 rounded-2xl"></div>
              
              {/* Animated Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 bg-[length:200%_100%] animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-100"></div>
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-6 h-6 bg-gradient-to-bl from-slate-300/30 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-all duration-100"></div>
              
              {/* Floating Particles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-2 right-2 w-1 h-1 bg-slate-300/60 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-slate-300/60 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: '1s' }}></div>
              </div>
              
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles size={16} className="group-hover:rotate-12 transition-transform duration-100" />
              {t('hero_btn_projects')}
                <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform duration-100" />
              </span>
            </a>
            <a
              href="https://github.com/cankayablockchain"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-slate-900/90 via-black/85 to-neutral-900/80 text-neutral-100 rounded-xl sm:rounded-2xl font-semibold hover:shadow-xl hover:shadow-slate-700/30 transition-all duration-100 hover:scale-105 hover:-translate-y-1 overflow-hidden backdrop-blur-sm border border-slate-700/30 text-sm sm:text-base"
            >
              {/* Very Subtle Color Accent */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/8 via-green-500/6 to-teal-500/8 opacity-0 group-hover:opacity-100 transition-all duration-100 rounded-2xl"></div>
              
              {/* Animated Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 bg-[length:200%_100%] animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-100"></div>
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-6 h-6 bg-gradient-to-bl from-slate-300/30 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-all duration-100"></div>
              
              {/* Floating Particles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-2 right-2 w-1 h-1 bg-slate-300/60 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-slate-300/60 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: '1s' }}></div>
              </div>
              
              <span className="relative z-10 flex items-center gap-2">
                <Github size={16} className="group-hover:rotate-12 transition-transform duration-100" />
              {t('hero_btn_github')}
                <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform duration-100" />
              </span>
            </a>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-4 sm:space-x-6 pt-6 sm:pt-8">
            <a
              href="https://www.linkedin.com/company/cankayablockchain"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-900/90 via-black/85 to-neutral-900/80 backdrop-blur-sm flex items-center justify-center text-neutral-300 hover:text-neutral-100 transition-all duration-100 shadow-lg hover:shadow-xl hover:scale-110 border border-slate-700/30"
            >
              {/* Very Subtle Color Accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/12 via-purple-500/8 to-cyan-500/12 opacity-0 group-hover:opacity-100 transition-all duration-100 rounded-2xl"></div>
              <Linkedin size={18} className="relative z-10 sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://github.com/cankayablockchain"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-900/90 via-black/85 to-neutral-900/80 backdrop-blur-sm flex items-center justify-center text-neutral-300 hover:text-neutral-100 transition-all duration-100 shadow-lg hover:shadow-xl hover:scale-110 border border-slate-700/30"
            >
              {/* Very Subtle Color Accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/12 via-green-500/8 to-teal-500/12 opacity-0 group-hover:opacity-100 transition-all duration-100 rounded-2xl"></div>
              <Github size={18} className="relative z-10 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 