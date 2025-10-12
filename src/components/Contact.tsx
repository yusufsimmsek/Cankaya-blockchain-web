import { Mail, MapPin, Github, Linkedin, Users } from 'lucide-react'
import { useI18n } from '../i18n'
import { Instagram } from 'lucide-react'

const Contact = () => {
  const { t } = useI18n()
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black">
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-100 mb-6 drop-shadow-lg">{t('contact_title')}</h2>
          <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed drop-shadow-md">{t('contact_p')}</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Contact Info Cards - Premium Liquid Glass */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 animate-fade-in-up">
            
            {/* Address Card */}
                <div className="relative group">
              <div className="relative h-full rounded-2xl overflow-hidden group-hover:scale-[1.02] transition-all duration-700">
                
                {/* Liquid Glass Background Layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/50 via-neutral-800/40 to-neutral-700/30 backdrop-blur-3xl rounded-2xl border border-neutral-600/20 group-hover:border-neutral-500/30 group-hover:shadow-neutral-900/20 group-hover:shadow-2xl"></div>
                
                {/* Secondary Liquid Layer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-neutral-800/25 via-transparent to-neutral-600/15 rounded-2xl"></div>
                
                {/* Secondary Premium Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-white/15 opacity-60 rounded-2xl"></div>
                
                {/* Liquid Flow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent opacity-40 rounded-2xl"></div>
                
                {/* Glass Ripple Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/10 via-transparent to-blue-400/10 opacity-35 rounded-2xl"></div>

                {/* Content */}
                <div className="relative p-8 flex items-center gap-6">
                  <div className="relative">
                    {/* Icon Glow Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-xl scale-150"></div>
                    
                    {/* Icon Container */}
                    <div className="relative w-16 h-16 bg-gradient-to-br from-neutral-800/80 via-neutral-700/60 to-neutral-600/40 backdrop-blur-xl rounded-2xl border border-neutral-500/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-2xl">
                      
                      {/* Icon Inner Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-2xl"></div>
                      
                      {/* Icon */}
                      <MapPin className="relative w-8 h-8 text-white drop-shadow-lg group-hover:scale-110 transition-all duration-700" 
                        style={{
                          filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.6)) drop-shadow(0 0 16px rgba(147, 51, 234, 0.4))'
                        }}
                      />
                      
                      {/* Neon Ring Effect */}
                      <div className="absolute inset-0 rounded-2xl border border-cyan-400/30 group-hover:border-cyan-300/50 transition-all duration-700"></div>
                    </div>
                  </div>
                  
                <div className="flex flex-col justify-center">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors duration-500 drop-shadow-lg">{t('address')}</h4>
                    <p className="text-neutral-200 group-hover:text-white/80 transition-colors duration-500 text-base drop-shadow-md">{t('ankara_turkey')}</p>
                  </div>
                    </div>
                  </div>
                </div>

            {/* Email Card */}
            <a 
              href="mailto:info@cankayablockchain.com"
              className="relative group block"
            >
              <div className="relative h-full rounded-2xl overflow-hidden group-hover:scale-[1.02] transition-all duration-700">
                
                {/* Liquid Glass Background Layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/50 via-neutral-800/40 to-neutral-700/30 backdrop-blur-3xl rounded-2xl border border-neutral-600/20 group-hover:border-neutral-500/30 group-hover:shadow-neutral-900/20 group-hover:shadow-2xl"></div>
                
                {/* Secondary Liquid Layer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-neutral-800/25 via-transparent to-neutral-600/15 rounded-2xl"></div>
                
                {/* Secondary Premium Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-white/15 opacity-60 rounded-2xl"></div>
                
                {/* Liquid Flow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/15 to-transparent opacity-40 rounded-2xl"></div>
                
                {/* Glass Ripple Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-300/10 via-transparent to-teal-400/10 opacity-35 rounded-2xl"></div>

                {/* Content */}
                <div className="relative p-8 flex items-center gap-6">
                  <div className="relative">
                    {/* Icon Glow Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 blur-xl scale-150"></div>
                    
                    {/* Icon Container */}
                    <div className="relative w-16 h-16 bg-gradient-to-br from-neutral-800/80 via-neutral-700/60 to-neutral-600/40 backdrop-blur-xl rounded-2xl border border-neutral-500/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-2xl">
                      
                      {/* Icon Inner Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-2xl"></div>
                      
                      {/* Icon */}
                      <Mail className="relative w-8 h-8 text-white drop-shadow-lg group-hover:scale-110 transition-all duration-700" 
                        style={{
                          filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.6)) drop-shadow(0 0 16px rgba(6, 182, 212, 0.4))'
                        }}
                      />
                      
                      {/* Neon Ring Effect */}
                      <div className="absolute inset-0 rounded-2xl border border-emerald-400/30 group-hover:border-emerald-300/50 transition-all duration-700"></div>
                    </div>
                  </div>
                  
                <div className="flex flex-col justify-center">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors duration-500 drop-shadow-lg">{t('email')}</h4>
                    <p className="text-neutral-200 group-hover:text-white/80 transition-colors duration-500 text-base drop-shadow-md">info@cankayablockchain.com</p>
                    <p className="text-sm text-emerald-400 group-hover:text-emerald-300 mt-1 drop-shadow-sm">{t('click_to_email')}</p>
                  </div>
                </div>
              </div>
            </a>
            </div>

          {/* Social Media Section - Premium Design */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="relative mb-12">
              <div className="relative inline-flex items-center justify-center">
                {/* Icon Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 blur-xl scale-150"></div>
                
                {/* Icon Container */}
                <div className="relative w-12 h-12 bg-gradient-to-br from-neutral-800/80 via-neutral-700/60 to-neutral-600/40 backdrop-blur-xl rounded-2xl border border-neutral-500/30 flex items-center justify-center mr-4 shadow-2xl">
                  
                  {/* Icon Inner Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-2xl"></div>
                  
                  {/* Icon */}
                  <Users className="relative w-6 h-6 text-white drop-shadow-lg" 
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.6)) drop-shadow(0 0 16px rgba(236, 72, 153, 0.4))'
                    }}
                  />
                  
                  {/* Neon Ring Effect */}
                  <div className="absolute inset-0 rounded-2xl border border-purple-400/30"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-white drop-shadow-lg">{t('social_media')}</h3>
              </div>
            </div>
            
            <div className="flex justify-center gap-8">
              {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/cankayablockchain"
                  target="_blank"
                  rel="noopener noreferrer"
                className="relative group"
              >
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden group-hover:scale-110 transition-all duration-500">
                  {/* Liquid Glass Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/60 via-blue-500/50 to-blue-400/40 backdrop-blur-3xl rounded-2xl border border-neutral-600/20 group-hover:border-neutral-500/30 group-hover:shadow-neutral-900/20 group-hover:shadow-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 via-transparent to-blue-400/20 rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-white/15 opacity-60 rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/15 to-transparent opacity-40 rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-300/10 via-transparent to-blue-400/10 opacity-35 rounded-2xl"></div>
                  
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Linkedin size={24} className="text-white drop-shadow-lg group-hover:scale-110 transition-all duration-500" />
                  </div>
                </div>
              </a>
              
              {/* Instagram */}
                <a
                  href="https://www.instagram.com/cankayablockchain/"
                  target="_blank"
                  rel="noopener noreferrer"
                className="relative group"
              >
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden group-hover:scale-110 transition-all duration-500">
                  {/* Liquid Glass Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-600/60 via-purple-500/50 to-orange-400/40 backdrop-blur-3xl rounded-2xl border border-neutral-600/20 group-hover:border-neutral-500/30 group-hover:shadow-neutral-900/20 group-hover:shadow-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/30 via-transparent to-orange-400/20 rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-white/15 opacity-60 rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400/15 to-transparent opacity-40 rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-300/10 via-transparent to-orange-400/10 opacity-35 rounded-2xl"></div>
                  
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Instagram size={24} className="text-white drop-shadow-lg group-hover:scale-110 transition-all duration-500" />
                  </div>
                </div>
              </a>
              
              {/* GitHub */}
                <a
                  href="https://github.com/cankayablockchain"
                  target="_blank"
                  rel="noopener noreferrer"
                className="relative group"
              >
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden group-hover:scale-110 transition-all duration-500">
                  {/* Liquid Glass Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-700/60 via-neutral-600/50 to-neutral-500/40 backdrop-blur-3xl rounded-2xl border border-neutral-600/20 group-hover:border-neutral-500/30 group-hover:shadow-neutral-900/20 group-hover:shadow-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-neutral-500/30 via-transparent to-neutral-400/20 rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-white/15 opacity-60 rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400/15 to-transparent opacity-40 rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-300/10 via-transparent to-neutral-400/10 opacity-35 rounded-2xl"></div>
                  
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Github size={24} className="text-white drop-shadow-lg group-hover:scale-110 transition-all duration-500" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 