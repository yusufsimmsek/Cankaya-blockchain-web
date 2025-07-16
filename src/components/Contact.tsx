import { Mail, MapPin, Github, Linkedin, Sparkles, Star } from 'lucide-react'
import { Instagram } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 text-gradient-primary">
            Bize Ulaşın
          </h2>
          <p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Bizimle iletişime geçin. Sorularınız, işbirliği teklifleriniz veya 
            topluluğa katılmak istiyorsanız her zaman açığız.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 animate-fade-in-up">
            {/* Address Card */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-6 p-8 rounded-2xl border border-neutral-200/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <MapPin className="w-7 h-7 text-white" />
                    </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2 dark:text-neutral-100">Adres</h4>
                  <p className="text-neutral-600 dark:text-neutral-200 text-base">Ankara, Türkiye</p>
                    </div>
                  </div>
                </div>

            {/* Email Card */}
            <a 
              href="mailto:cankayablockchain@gmail.com"
              className="relative group block"
            >
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary-50 to-primary-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-6 p-8 rounded-2xl border border-neutral-200/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Mail className="w-7 h-7 text-white" />
                    </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2 dark:text-neutral-100">E-posta</h4>
                  <p className="text-neutral-600 dark:text-neutral-200 text-base">cankayablockchain@gmail.com</p>
                  <p className="text-sm text-primary-600 dark:text-primary-400 mt-1">E-posta göndermek için tıklayın</p>
                </div>
              </div>
            </a>
            </div>

          {/* Social Media Section */}
          <div className="text-center animate-fade-in-up delay-200">
            <h3 className="text-2xl font-bold text-neutral-900 mb-8 flex items-center justify-center dark:text-neutral-100">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mr-3">
                <Star className="w-4 h-4 text-white" />
                </div>
                Sosyal Medya
            </h3>
            <div className="flex justify-center gap-6">
                <a
                  href="https://www.linkedin.com/company/cankayablockchain"
                  target="_blank"
                  rel="noopener noreferrer"
                className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                >
                <Linkedin size={24} />
                </a>
                <a
                  href="https://www.instagram.com/cankayablockchain/"
                  target="_blank"
                  rel="noopener noreferrer"
                className="w-16 h-16 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-2xl flex items-center justify-center hover:from-pink-600 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                >
                <Instagram size={24} />
                </a>
                <a
                  href="https://github.com/cankayablockchain"
                  target="_blank"
                  rel="noopener noreferrer"
                className="w-16 h-16 bg-gradient-to-r from-neutral-800 to-neutral-900 text-white rounded-2xl flex items-center justify-center hover:from-neutral-900 hover:to-black transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 