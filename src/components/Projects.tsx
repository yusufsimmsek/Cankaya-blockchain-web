import { ExternalLink, Award, Coins, Gamepad2, Sparkles, Github, Star, Trophy, Database, Palette } from 'lucide-react'
import { useI18n } from '../i18n'

const Projects = () => {
  const { t } = useI18n()
  const projects = [
    {
      title: t('proj1_title'),
      description: t('proj1_desc'),
      icon: Palette,
      color: "from-indigo-500 via-purple-500 to-pink-500",
      achievements: [t('proj1_a1'), t('proj1_a2'), t('proj1_a3')],
      featured: true,
      year: "2023",
      link: "https://www.instagram.com/reel/CbNmZArjSfn/?igsh=bmxzOTJybWE5Nm12"
    },
    {
      title: t('proj2_title'),
      description: t('proj2_desc'),
      icon: Coins,
      color: "from-amber-500 via-orange-500 to-red-500",
      achievements: [t('proj2_a1'), t('proj2_a2'), t('proj2_a3'), t('proj2_a4')],
      featured: true,
      year: "2023",
      link: "https://www.instagram.com/p/CaxR6cZDSOz/?igsh=MXNncGFybmYwcTRweg=="
    },
    {
      title: t('proj3_title'),
      description: t('proj3_desc'),
      icon: Gamepad2,
      color: "from-emerald-500 via-teal-500 to-cyan-500",
      achievements: [t('proj3_a1'), t('proj3_a2'), t('proj3_a3')],
      featured: true,
      year: "2023",
      link: "#"
    },
    {
      title: t('proj4_title'),
      description: t('proj4_desc'),
      icon: Database,
      color: "from-blue-500 via-indigo-500 to-purple-500",
      achievements: [t('proj4_a1'), t('proj4_a2'), t('proj4_a3')],
      featured: false,
      year: "2022",
      link: "https://www.instagram.com/p/CsomVW1tAH8/?igsh=MXU3ZG16eGc5a29ocA=="
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black">
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-100 mb-6 drop-shadow-lg">{t('projects_title')}</h2>
          <p className="text-lg sm:text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed drop-shadow-md">{t('projects_p')}</p>
        </div>

        {/* Projects Grid - Liquid Glass Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`relative group animate-fade-in-up ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Liquid Glass Card Container */}
              <div className="relative h-full rounded-2xl overflow-hidden group-hover:scale-[1.02] transition-all duration-700 border border-neutral-600/20 group-hover:border-neutral-500/30 group-hover:shadow-neutral-900/20 group-hover:shadow-2xl">
                
                {/* Liquid Glass Background Layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/40 via-neutral-800/30 to-neutral-700/20 backdrop-blur-3xl rounded-2xl border border-neutral-600/20 shadow-3xl"></div>
                
                {/* Secondary Liquid Layer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-neutral-800/20 via-transparent to-neutral-600/10 rounded-2xl"></div>
                
                {/* Secondary Premium Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 opacity-40 rounded-2xl"></div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-6 right-6 z-20">
                    <div className="relative">
                      {/* Badge Liquid Glass Background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-neutral-800/60 via-neutral-700/50 to-neutral-600/40 backdrop-blur-xl rounded-full border border-neutral-500/30"></div>
                      <div className="relative flex items-center gap-1 px-3 py-1.5">
                        <Star size={12} className="fill-white/80 text-white/80" />
                        <span className="text-xs font-semibold text-white/90 uppercase tracking-wider">{t('featured')}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Top Section - Neon Icons */}
                <div className="relative h-32 bg-gradient-to-b from-neutral-900/80 via-neutral-800/60 to-neutral-700/40 backdrop-blur-2xl border-b border-neutral-600/30 flex items-center justify-center">
                  
                  {/* Cosmic Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/90 via-neutral-800/70 to-neutral-700/50 rounded-t-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-50"></div>
                  
                  {/* Scattered Light Specks */}
                  <div className="absolute top-4 left-8 w-1 h-1 bg-white/40 rounded-full"></div>
                  <div className="absolute top-6 right-12 w-0.5 h-0.5 bg-white/60 rounded-full"></div>
                  <div className="absolute top-8 left-16 w-1 h-1 bg-white/30 rounded-full"></div>
                  <div className="absolute top-10 right-8 w-0.5 h-0.5 bg-white/50 rounded-full"></div>
                  <div className="absolute top-12 left-12 w-1 h-1 bg-white/40 rounded-full"></div>
                  
                  {/* Main Project Icon - Neon Style */}
                  <div className="relative z-10">
                    <div className="relative">
                      {/* Icon Glow Background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-xl scale-150"></div>
                      
                      {/* Icon Container */}
                      <div className="relative w-16 h-16 bg-gradient-to-br from-neutral-800/80 via-neutral-700/60 to-neutral-600/40 backdrop-blur-xl rounded-2xl border border-neutral-500/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-2xl">
                        
                        {/* Icon Inner Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-2xl"></div>
                        
                        {/* Icon */}
                        <project.icon className="relative w-8 h-8 text-white drop-shadow-lg group-hover:scale-110 transition-all duration-700" 
                          style={{
                            filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.6)) drop-shadow(0 0 16px rgba(147, 51, 234, 0.4))'
                          }}
                        />
                        
                        {/* Neon Ring Effect */}
                        <div className="absolute inset-0 rounded-2xl border border-cyan-400/30 group-hover:border-cyan-300/50 transition-all duration-700"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-neutral-800/70 via-neutral-700/60 to-neutral-600/50 backdrop-blur-xl rounded-full border border-neutral-500/30"></div>
                      <div className="relative px-3 py-1 text-xs font-semibold text-white/90">
                      {project.year}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Section - Content */}
                <div className="relative p-8 bg-gradient-to-b from-neutral-800/40 via-neutral-700/30 to-neutral-600/20 backdrop-blur-xl">
                  
                  {/* Content Background */}
                  <div className="absolute inset-0 bg-gradient-to-b from-neutral-800/50 via-neutral-700/40 to-neutral-600/30 rounded-b-2xl"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white/90 transition-colors duration-500 leading-tight drop-shadow-lg">
                    {project.title}
                  </h3>
                    <p className="text-neutral-200 mb-6 leading-relaxed group-hover:text-white/80 transition-colors duration-500 drop-shadow-md">
                    {project.description}
                  </p>

                  {/* Achievements */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <span
                        key={achievementIndex}
                          className="relative px-3 py-1.5 text-xs font-semibold rounded-full group-hover:scale-105 transition-all duration-300"
                          style={{ animationDelay: `${achievementIndex * 50}ms` }}
                        >
                          {/* Achievement Badge Liquid Glass Background */}
                          <div className="absolute inset-0 bg-gradient-to-r from-neutral-800/70 via-neutral-700/60 to-neutral-600/50 backdrop-blur-xl rounded-full border border-neutral-500/30"></div>
                          <div className="relative text-white/90 drop-shadow-sm">
                        {achievement}
                          </div>
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                      className="relative inline-flex items-center justify-center w-full px-6 py-3 rounded-2xl font-semibold group/btn transition-all duration-300"
                    >
                      {/* Button Liquid Glass Background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-neutral-800/70 via-neutral-700/60 to-neutral-600/50 backdrop-blur-xl rounded-2xl border border-neutral-500/30 group-hover:border-neutral-400/50 transition-all duration-300"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                      
                      <span className="relative text-white/90 group-hover:text-white transition-colors duration-300 mr-2">{t('view_details')}</span>
                      <ExternalLink size={14} className="relative text-white/90 group-hover:text-white group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section - Liquid Glass */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center animate-fade-in-up">
            <div className="relative p-4 rounded-2xl overflow-hidden group-hover:scale-105 transition-all duration-500 border border-neutral-600/20 group-hover:border-neutral-500/30 group-hover:shadow-neutral-900/20 group-hover:shadow-2xl">
              {/* Liquid Glass Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/40 via-neutral-800/30 to-neutral-700/20 backdrop-blur-3xl rounded-2xl border border-neutral-600/20 shadow-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-neutral-800/20 via-transparent to-neutral-600/10 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 opacity-40 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="relative w-12 h-12 mx-auto mb-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/80 via-neutral-700/60 to-neutral-600/40 backdrop-blur-xl rounded-2xl border border-neutral-500/30"></div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white drop-shadow-lg" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1 drop-shadow-lg">4+</div>
                <p className="text-xs text-neutral-200 font-medium drop-shadow-md">{t('awards_count')}</p>
              </div>
            </div>
          </div>
          
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="relative p-4 rounded-2xl overflow-hidden group-hover:scale-105 transition-all duration-500 border border-neutral-600/20 group-hover:border-neutral-500/30 group-hover:shadow-neutral-900/20 group-hover:shadow-2xl">
              {/* Liquid Glass Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/40 via-neutral-800/30 to-neutral-700/20 backdrop-blur-3xl rounded-2xl border border-neutral-600/20 shadow-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-neutral-800/20 via-transparent to-neutral-600/10 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 opacity-40 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="relative w-12 h-12 mx-auto mb-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/80 via-neutral-700/60 to-neutral-600/40 backdrop-blur-xl rounded-2xl border border-neutral-500/30"></div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white drop-shadow-lg" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1 drop-shadow-lg">50K+</div>
                <p className="text-xs text-neutral-200 font-medium drop-shadow-md">{t('total_prize')}</p>
              </div>
            </div>
          </div>
          
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="relative p-4 rounded-2xl overflow-hidden group-hover:scale-105 transition-all duration-500 border border-neutral-600/20 group-hover:border-neutral-500/30 group-hover:shadow-neutral-900/20 group-hover:shadow-2xl">
              {/* Liquid Glass Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/40 via-neutral-800/30 to-neutral-700/20 backdrop-blur-3xl rounded-2xl border border-neutral-600/20 shadow-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-neutral-800/20 via-transparent to-neutral-600/10 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 opacity-40 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="relative w-12 h-12 mx-auto mb-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/80 via-neutral-700/60 to-neutral-600/40 backdrop-blur-xl rounded-2xl border border-neutral-500/30"></div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white drop-shadow-lg" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1 drop-shadow-lg">10+</div>
                <p className="text-xs text-neutral-200 font-medium drop-shadow-md">{t('hackathon')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action - Liquid Glass */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <div className="relative p-4 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-500 border border-neutral-600/20 group-hover:border-neutral-500/30 group-hover:shadow-neutral-900/20 group-hover:shadow-2xl">
            {/* Liquid Glass Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/40 via-neutral-800/30 to-neutral-700/20 backdrop-blur-3xl rounded-xl border border-neutral-600/20 shadow-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-neutral-800/20 via-transparent to-neutral-600/10 rounded-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 opacity-40 rounded-xl"></div>
              
              <div className="relative z-10">
              <div className="relative w-10 h-10 mx-auto mb-3">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/80 via-neutral-700/60 to-neutral-600/40 backdrop-blur-xl rounded-xl border border-neutral-500/30"></div>
                <div className="relative w-full h-full flex items-center justify-center">
                  <Github className="w-5 h-5 text-white drop-shadow-lg" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 drop-shadow-lg">{t('more_projects')}</h3>
              <p className="text-neutral-200 mb-4 max-w-xl mx-auto leading-relaxed drop-shadow-md text-sm">
                {t('more_projects_p')}
              </p>
              <a
                href="https://github.com/cankayablockchain"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-lg font-medium group/btn transition-all duration-300"
              >
                {/* Button Liquid Glass Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-800/70 via-neutral-700/60 to-neutral-600/50 backdrop-blur-xl rounded-lg border border-neutral-500/30 group-hover:border-neutral-400/50 transition-all duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                
                <Github size={12} className="relative text-white/90 group-hover:text-white transition-colors duration-300" />
                <span className="relative text-white/90 group-hover:text-white transition-colors duration-300 text-xs">{t('view_on_github')}</span>
                <ExternalLink size={10} className="relative text-white/90 group-hover:text-white group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 
