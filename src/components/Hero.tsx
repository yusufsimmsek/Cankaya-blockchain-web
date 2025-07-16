import { ChevronDown, Github, Linkedin, ExternalLink, Sparkles, Zap, TrendingUp, Users } from 'lucide-react'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-28 px-4 sm:px-6 lg:px-8 pb-8 relative overflow-hidden">
      {/* Advanced Blockchain 3D Animation Background */}
      <div className="absolute inset-0 overflow-hidden">

        
        {/* Blockchain Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Dynamic Connection Lines */}
          <line 
            x1="10%" y1="20%" x2="20%" y2="40%" 
            stroke="url(#blueGradient)" 
            strokeWidth="2" 
            className="animate-pulse opacity-60"
          />
          <line 
            x1="80%" y1="40%" x2="90%" y2="20%" 
            stroke="url(#purpleGradient)" 
            strokeWidth="2" 
            className="animate-pulse opacity-60"
            style={{animationDelay: '0.5s'}}
          />
          <line 
            x1="20%" y1="60%" x2="10%" y2="80%" 
            stroke="url(#emeraldGradient)" 
            strokeWidth="2" 
            className="animate-pulse opacity-60"
            style={{animationDelay: '1s'}}
          />
          <line 
            x1="90%" y1="80%" x2="80%" y2="60%" 
            stroke="url(#roseGradient)" 
            strokeWidth="2" 
            className="animate-pulse opacity-60"
            style={{animationDelay: '1.5s'}}
          />
          <line 
            x1="33%" y1="33%" x2="25%" y2="67%" 
            stroke="url(#cyanGradient)" 
            strokeWidth="1.5" 
            className="animate-pulse opacity-50"
            style={{animationDelay: '0.3s'}}
          />
          <line 
            x1="75%" y1="67%" x2="67%" y2="33%" 
            stroke="url(#pinkGradient)" 
            strokeWidth="1.5" 
            className="animate-pulse opacity-50"
            style={{animationDelay: '0.8s'}}
          />
          
          {/* Data Flow Particles */}
          <circle cx="15%" cy="30%" r="2" fill="url(#blueGradient)" className="animate-ping opacity-80">
            <animateMotion dur="3s" repeatCount="indefinite">
              <mpath href="#dataPath1" />
            </animateMotion>
          </circle>
          <circle cx="85%" cy="30%" r="2" fill="url(#purpleGradient)" className="animate-ping opacity-80" style={{animationDelay: '0.5s'}}>
            <animateMotion dur="3s" repeatCount="indefinite">
              <mpath href="#dataPath2" />
            </animateMotion>
          </circle>
          <circle cx="15%" cy="70%" r="2" fill="url(#emeraldGradient)" className="animate-ping opacity-80" style={{animationDelay: '1s'}}>
            <animateMotion dur="3s" repeatCount="indefinite">
              <mpath href="#dataPath3" />
            </animateMotion>
          </circle>
          
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="emeraldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="roseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#EF4444" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EC4899" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
            </linearGradient>
            
            {/* Data Flow Paths */}
            <path id="dataPath1" d="M 10% 20% Q 15% 25% 20% 40%" fill="none" />
            <path id="dataPath2" d="M 80% 40% Q 85% 35% 90% 20%" fill="none" />
            <path id="dataPath3" d="M 20% 60% Q 15% 65% 10% 80%" fill="none" />
          </defs>
        </svg>
        

        
        {/* Digital Data Particles */}
        <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-blue-400/80 rounded-full animate-digital-pulse shadow-lg shadow-blue-400/60"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-purple-400/80 rounded-full animate-digital-pulse shadow-lg shadow-purple-400/60" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-cyan-400/80 rounded-full animate-digital-pulse shadow-lg shadow-cyan-400/60" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-3/4 left-3/4 w-2 h-2 bg-emerald-400/80 rounded-full animate-digital-pulse shadow-lg shadow-emerald-400/60" style={{animationDelay: '1.5s'}}></div>
        
        {/* Holographic Grid Network */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-grid-scan"></div>
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-grid-scan" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-grid-scan" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-grid-scan" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent animate-grid-scan" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Vertical Network Lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-grid-scan"></div>
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-grid-scan" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-grid-scan" style={{animationDelay: '1s'}}></div>
        </div>
        
        {/* Morphing Blockchain Blobs */}
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-morph-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-morph-blob" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl animate-morph-blob" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Hero Content */}
        <div className="space-y-8 animate-fade-in-up">
          {/* Badge kısmı kaldırıldı */}

          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-neutral-900 dark:text-neutral-100 leading-[1.25] sm:leading-[1.18] lg:leading-[1.15] pt-8 pb-4 animate-fade-in-up delay-100 drop-shadow-lg py-4">
              <span className="text-gradient-primary">Çankaya </span>
              <span className="text-gradient-secondary">Blockchain Topluluğu</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-neutral-700 dark:text-neutral-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200 drop-shadow-md">
              2021'den bu yana Ankara'da blockchain teknolojilerini öğreten, projeler geliştiren ve 
              ekosisteme nitelikli bireyler kazandıran lider topluluğuz.
            </p>
          </div>

          {/* Enhanced Stats */}
          <div className="w-full flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8 animate-fade-in-up delay-300 justify-items-center">
            <div className="card-hover p-6 text-center group bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gradient-primary">2021</div>
              <div className="text-sm text-neutral-600 font-medium">Kuruluş Yılı</div>
            </div>
            <div className="card-hover p-6 text-center group bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center">
                <Github className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gradient-primary">10+</div>
              <div className="text-sm text-neutral-600 font-medium">Büyük Proje</div>
            </div>
            <div className="card-hover p-6 text-center group bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-2xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gradient-secondary">100+</div>
              <div className="text-sm text-neutral-600 font-medium">Etkinlik</div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-500">
            <a
              href="#projects"
              className="btn-primary group shadow-glow backdrop-blur-sm"
            >
              <Sparkles size={16} className="mr-2 group-hover:rotate-12 transition-transform duration-200" />
              Projelerimizi İncele
              <ChevronDown size={16} className="ml-2 group-hover:translate-y-1 transition-transform duration-200" />
            </a>
            <a
              href="https://github.com/cankayablockchain"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline group backdrop-blur-sm"
            >
              <Github size={16} className="mr-2 group-hover:rotate-12 transition-transform duration-200" />
              GitHub'da Keşfet
              <ExternalLink size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-6 pt-8 animate-fade-in-up delay-700">
            <a
              href="https://www.linkedin.com/company/cankayablockchain"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl bg-gradient-to-r from-primary-100/90 to-secondary-100/90 backdrop-blur-sm flex items-center justify-center text-primary-600 hover:text-white hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/cankayablockchain"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl bg-gradient-to-r from-neutral-100/90 to-neutral-200/90 backdrop-blur-sm flex items-center justify-center text-neutral-600 hover:text-white hover:from-neutral-800 hover:to-neutral-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-10 border-2 border-primary-300 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
              <div className="w-1 h-3 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full mt-2 animate-pulse"></div>
            </div>
            <ChevronDown size={16} className="text-primary-400 animate-pulse drop-shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 