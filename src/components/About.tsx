import { Sparkles, Globe, Rocket, Shield, Heart, Cpu, Database, Network, Lock, Eye, Star, TrendingUp, Activity, GraduationCap, Share2, FileText, Target, Calendar, Users } from 'lucide-react'

const About = () => {
  const stats = [
    {
      icon: Globe,
      title: "Türkiye Geneli",
      value: "İlk 10",
      description: "Blockchain topluluğu",
      color: "from-blue-500 to-cyan-500",
      glowColor: "shadow-blue-500/50"
    },
    {
      icon: Rocket,
      title: "Kuruluş",
      value: "2021",
      description: "11 Kasım tarihinde",
      color: "from-purple-500 to-pink-500",
      glowColor: "shadow-purple-500/50"
    },
    {
      icon: Shield,
      title: "100+ İş Birliği",
      value: "100+",
      description: "Kurumsal partnerlik",
      color: "from-emerald-500 to-teal-500",
      glowColor: "shadow-emerald-500/50"
    },
    {
      icon: Heart,
      title: "500+ Aktif Üye",
      value: "500+",
      description: "Topluluk etkileşimi",
      color: "from-rose-500 to-red-500",
      glowColor: "shadow-rose-500/50"
    }
  ]

  const techStack = [
    {
      icon: Calendar,
      title: "Etkinlik Düzenleme",
      description: "Konferanslar & Seminerler",
      color: "from-orange-500 to-red-500",
      glowColor: "shadow-orange-500/50"
    },
    {
      icon: GraduationCap,
      title: "Eğitim",
      description: "Workshop & Atölyeler",
      color: "from-green-500 to-emerald-500",
      glowColor: "shadow-green-500/50"
    },
    {
      icon: TrendingUp,
      title: "Pazarlama",
      description: "Marka & İletişim",
      color: "from-purple-500 to-pink-500",
      glowColor: "shadow-purple-500/50"
    },
    {
      icon: Cpu,
      title: "Blockchain Geliştirme",
      description: "Smart Contracts & DApps",
      color: "from-blue-500 to-cyan-500",
      glowColor: "shadow-blue-500/50"
    },
    {
      icon: Users,
      title: "Topluluk Yönetimi",
      description: "Üye & İletişim",
      color: "from-rose-500 to-red-500",
      glowColor: "shadow-rose-500/50"
    },
    {
      icon: Share2,
      title: "Sosyal Medya Yönetimi",
      description: "Platform & İçerik",
      color: "from-indigo-500 to-blue-500",
      glowColor: "shadow-indigo-500/50"
    },
    {
      icon: FileText,
      title: "İçerik Üretimi",
      description: "Blog & Video İçerik",
      color: "from-teal-500 to-cyan-500",
      glowColor: "shadow-teal-500/50"
    },
    {
      icon: Target,
      title: "Stratejik Planlama",
      description: "Uzun Vadeli Gelişim",
      color: "from-amber-500 to-orange-500",
      glowColor: "shadow-amber-500/50"
    }
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with Holographic Effect */}
        <div className="text-center mb-16 animate-fade-in-up">
          
          {/* 3D Text Effect */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900 dark:text-neutral-100 mb-8 leading-tight relative py-4">
            <span className="text-gradient-primary">Blockchain Dünyasında </span>
            <span className="text-gradient-secondary">Öncüyüz</span>
            {/* 3D Shadow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent blur-sm opacity-30 -translate-y-1 -translate-x-1"></div>
          </h2>
          

        </div>

        {/* Enhanced Stats Section with Morphing Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Morphing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              
              {/* Holographic Card */}
              <div className="relative bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl p-6 rounded-3xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 overflow-hidden">
                {/* Holographic Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 relative z-10`}>
                  <stat.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-black text-neutral-900 dark:text-neutral-100 mb-1 group-hover:text-gradient-primary transition-all duration-300 relative z-10">
                  {stat.value}
                </h3>
                <p className="text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-1 relative z-10">
                  {stat.title}
                </p>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 relative z-10">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Section - New Premium Feature */}
        <div className="mb-24">
          <div className="text-center mb-16 animate-fade-in-up">
            <h3 className="text-3xl sm:text-4xl font-black text-neutral-900 dark:text-neutral-100 mb-6">
              <span className="text-gradient-primary">
                Yeteneklerimiz
              </span>
            </h3>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              Dinamik ekibimizle yapabildiklerimiz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
            {techStack.map((tech, index) => (
              <div 
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Neon Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-pulse`}></div>
                
                {/* Holographic Tech Card */}
                <div className="relative bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl p-8 rounded-3xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 overflow-hidden">
                  {/* Holographic Shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tech.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 relative z-10`}>
                    <tech.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h4 className="text-xl font-black text-neutral-900 dark:text-neutral-100 mb-4 group-hover:text-gradient-primary transition-all duration-300 relative z-10">
                    {tech.title}
                  </h4>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors duration-300 relative z-10 font-mono text-sm">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Mission & Vision with 3D Effects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="group relative animate-fade-in-up perspective-1000">
            {/* 3D Morphing Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            
            {/* 3D Mission Card */}
            <div className="relative bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl p-10 rounded-3xl border border-blue-200/50 dark:border-blue-800/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-y-3 overflow-hidden">
              {/* Holographic Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              <div className="flex items-center mb-8 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg mr-5 group-hover:shadow-xl transition-all duration-300">
                  <Target className="w-7 h-7 text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-black text-neutral-900 dark:text-neutral-100 group-hover:text-gradient-primary transition-all duration-300">
                  Misyonumuz
                </h3>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-lg group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors duration-300 relative z-10">
                Blockchain teknolojilerine ilgi duyan öğrencileri bir araya getirerek eğitim, proje ve etkinliklerle ekosisteme nitelikli bireyler kazandırmak ve Türkiye'deki blockchain ekosisteminin gelişimine katkıda bulunmak.
              </p>
            </div>
          </div>
          
          <div className="group relative animate-fade-in-up perspective-1000">
            {/* 3D Morphing Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            
            {/* 3D Vision Card */}
            <div className="relative bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl p-10 rounded-3xl border border-purple-200/50 dark:border-purple-800/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-y-3 overflow-hidden">
              {/* Holographic Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              <div className="flex items-center mb-8 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg mr-5 group-hover:shadow-xl transition-all duration-300">
                  <Eye className="w-7 h-7 text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-black text-neutral-900 dark:text-neutral-100 group-hover:text-gradient-primary transition-all duration-300">
                  Vizyonumuz
                </h3>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-lg group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors duration-300 relative z-10">
                Teknik bilgi birikimi, proje deneyimi ve geniş sektör ağıyla Türkiye'deki üniversiteler arası blockchain ekosisteminde öncü rolümüzü sürdürmek ve geleceği yazmak isteyenlerle blokzincirde buluşmak.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 