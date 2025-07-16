import { ExternalLink, Award, Coins, Gamepad2, Image, Sparkles, Github, Star, Trophy, Zap, Target, Lightbulb, Shield, Rocket, Heart, Briefcase, GraduationCap, Presentation, Building, Megaphone, Code, Database, Network, Cpu, Wallet, BarChart3, Users2, Globe2, Monitor, Smartphone, Tablet, Server, Cloud, Lock, Unlock, Key, Eye, EyeOff, CheckCircle, AlertCircle, Info, HelpCircle, Settings, Wrench, Palette, Music, Video, Camera, FileText, Folder, Archive, Download, Upload, Share, Link, Mail, Phone, MessageCircle, MessageSquare, Send, Paperclip, Smile, ThumbsUp, ThumbsDown, Flag, Bell, Search, Filter, SortAsc, SortDesc, Grid, List, Menu, MoreHorizontal, MoreVertical, Plus, Minus, Edit, Trash2, Copy, Save, RefreshCw, RotateCcw, RotateCw, ZoomIn, ZoomOut, Maximize, Minimize, Move, Crop, Scissors, Type, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, Hash, AtSign, DollarSign, Percent } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "Çankaya Üniversitesi 25. Yıl NFT Koleksiyonu",
      description: "İlk defa bir üniversite adına yayımlanan NFT serisi. OpenSea üzerinden yayımlandı ve kampüste fiziksel sergisi yapıldı.",
      icon: Palette,
      color: "from-indigo-500 via-purple-500 to-pink-500",
      achievements: ["İlk Üniversite NFT'si", "OpenSea'de Yayımlandı", "Fiziksel Sergi"],
      featured: true,
      year: "2023",
      link: "https://www.instagram.com/reel/CbNmZArjSfn/?igsh=bmxzOTJybWE5Nm12"
    },
    {
      title: "Üniversite Token'ı (ÇankayaToken)",
      description: "Türkiye'de bir ilk. 25 milyon arzla yayımlandı. Kampüs içi ödüllendirme ve kullanım senaryolarına sahiptir.",
      icon: Coins,
      color: "from-amber-500 via-orange-500 to-red-500",
      achievements: ["25M Token Arzı", "Türkiye'de İlk", "Kampüs Kullanımı", "Pilot Proje"],
      featured: true,
      year: "2023",
      link: "https://www.instagram.com/p/CaxR6cZDSOz/?igsh=MXNncGFybmYwcTRweg=="
    },
    {
      title: "Gatecon Web3 Oyun Platformu",
      description: "HackJuno 2023'te GameFi kategorisi 1.'si. Web2 oyuncularını Web3'e adapte etmeye yönelik dApp.",
      icon: Gamepad2,
      color: "from-emerald-500 via-teal-500 to-cyan-500",
      achievements: ["HackJuno 1.'si", "5.000 Juno Ödül", "GameFi Platformu"],
      featured: true,
      year: "2023",
      link: "#"
    },
    {
      title: "Merkeziyetsiz NFT Platformu",
      description: "Google Cloud & Bitci Hackathon'unda ikincilik kazanan proje. Merkeziyetsiz NFT ticaret platformu.",
      icon: Database,
      color: "from-blue-500 via-indigo-500 to-purple-500",
      achievements: ["Hackathon 2.'si", "15.000 ₺ Ödül", "Google Cloud"],
      featured: false,
      year: "2022",
      link: "https://www.instagram.com/p/CsomVW1tAH8/?igsh=MXU3ZG16eGc5a29ocA=="
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            Ödüllü Projelerimiz
          </h2>
          <p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 max-w-4xl mx-auto leading-relaxed">
            Hackathon'larda ödül kazanan ve ekosisteme değer katan projelerimizle blockchain teknolojilerinin gerçek hayat uygulamalarını geliştiriyoruz.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`relative group animate-fade-in-up ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Glow effect for featured projects */}
              {project.featured && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100"></div>
              )}
              
              <div className={`relative bg-white/40 dark:bg-neutral-800/30 backdrop-blur-xl border border-white/20 dark:border-neutral-500/20 rounded-3xl overflow-hidden group-hover:shadow-2xl transition-all duration-700 hover:scale-[1.02] hover:-translate-y-1 group ${
                project.color.includes('indigo') 
                  ? 'hover:shadow-indigo-500/20 dark:hover:shadow-indigo-400/20'
                  : project.color.includes('amber') 
                  ? 'hover:shadow-amber-500/20 dark:hover:shadow-amber-400/20'
                  : project.color.includes('emerald') 
                  ? 'hover:shadow-emerald-500/20 dark:hover:shadow-emerald-400/20'
                  : project.color.includes('blue') 
                  ? 'hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20'
                  : 'hover:shadow-primary-500/20 dark:hover:shadow-primary-400/20'
              }`}>
                {/* Glassmorphism Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent dark:from-neutral-700/10 dark:via-neutral-700/5 dark:to-transparent rounded-3xl"></div>
                
                {/* Modern Corner Accent */}
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-bl-3xl ${
                  project.color.includes('indigo') 
                    ? 'from-indigo-500/20 to-transparent'
                    : project.color.includes('amber') 
                    ? 'from-amber-500/20 to-transparent'
                    : project.color.includes('emerald') 
                    ? 'from-emerald-500/20 to-transparent'
                    : project.color.includes('blue') 
                    ? 'from-blue-500/20 to-transparent'
                    : 'from-primary-500/20 to-transparent'
                }`}></div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-6 right-6 z-10">
                    <div className="flex items-center space-x-1 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm border border-white/20">
                      <Star size={12} className="fill-current" />
                      <span>Öne Çıkan</span>
                    </div>
                  </div>
                )}

                {/* Project Header */}
                <div className={`h-48 bg-gradient-to-r ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute bottom-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
                  
                  <div className="absolute bottom-6 left-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 border border-white/30">
                      <project.icon className="w-8 h-8 text-white group-hover:scale-110 transition-all duration-700" />
                    </div>
                  </div>
                  
                  {/* Year Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/30">
                      {project.year}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 relative z-10">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 group-hover:text-gradient-primary transition-all duration-700 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-all duration-700">
                    {project.description}
                  </p>

                  {/* Achievements */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <span
                        key={achievementIndex}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-full border shadow-sm backdrop-blur-sm group-hover:scale-105 transition-all duration-700 ${
                          project.color.includes('indigo') 
                            ? 'bg-indigo-100/80 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-200/50 dark:border-indigo-700/50'
                            : project.color.includes('amber') 
                            ? 'bg-amber-100/80 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border-amber-200/50 dark:border-amber-700/50'
                            : project.color.includes('emerald') 
                            ? 'bg-emerald-100/80 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200/50 dark:border-emerald-700/50'
                            : project.color.includes('blue') 
                            ? 'bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200/50 dark:border-blue-700/50'
                            : 'bg-primary-100/80 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border-primary-200/50 dark:border-primary-700/50'
                        }`}
                        style={{ animationDelay: `${achievementIndex * 100}ms` }}
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full backdrop-blur-sm border px-6 py-3 rounded-2xl font-semibold hover:shadow-xl transition-all duration-700 hover:scale-105 group-hover:from-opacity-30 group-hover:to-opacity-30 ${
                      project.color.includes('indigo') 
                        ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-700 dark:text-indigo-300 border-indigo-500/30 dark:border-indigo-400/30 hover:shadow-indigo-500/20 dark:hover:shadow-indigo-400/20'
                        : project.color.includes('amber') 
                        ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-700 dark:text-amber-300 border-amber-500/30 dark:border-amber-400/30 hover:shadow-amber-500/20 dark:hover:shadow-amber-400/20'
                        : project.color.includes('emerald') 
                        ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-500/30 dark:border-emerald-400/30 hover:shadow-emerald-500/20 dark:hover:shadow-emerald-400/20'
                        : project.color.includes('blue') 
                        ? 'bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-700 dark:text-blue-300 border-blue-500/30 dark:border-blue-400/30 hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20'
                        : 'bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-700 dark:text-primary-300 border-primary-500/30 dark:border-primary-400/30 hover:shadow-primary-500/20 dark:hover:shadow-primary-400/20'
                    }`}>
                    <span className="mr-2">Detayları Görüntüle</span>
                    <ExternalLink size={14} className="inline group-hover:translate-x-1 group-hover:scale-110 transition-all duration-700" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center animate-fade-in-up">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100"></div>
              <div className="relative w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-700 group-hover:scale-110">
                <Trophy className="w-8 h-8 text-white group-hover:scale-110 transition-all duration-700" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gradient-primary mb-2">4+</div>
            <p className="text-neutral-600 dark:text-neutral-400 font-semibold">Ödüllü Proje</p>
          </div>
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-600/20 to-primary-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100"></div>
              <div className="relative w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-700 group-hover:scale-110">
                <Award className="w-8 h-8 text-white group-hover:scale-110 transition-all duration-700" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gradient-secondary mb-2">50K+</div>
            <p className="text-neutral-600 dark:text-neutral-400 font-semibold">Toplam Ödül</p>
          </div>
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100"></div>
              <div className="relative w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-700 group-hover:scale-110">
                <Sparkles className="w-8 h-8 text-white group-hover:scale-110 transition-all duration-700" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gradient-primary mb-2">10+</div>
            <p className="text-neutral-600 dark:text-neutral-400 font-semibold">Hackathon</p>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100"></div>
            <div className="relative bg-white/50 dark:bg-neutral-800/40 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/20 dark:border-neutral-600/20 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-[1.01] overflow-hidden">
              {/* Glassmorphism Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent dark:from-neutral-700/10 dark:via-neutral-700/5 dark:to-transparent rounded-3xl"></div>
              
              {/* Modern Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary-500/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-700 group-hover:scale-110 border border-white/30">
                      <Github className="w-8 h-8 text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-700" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                Daha Fazla Proje
              </h3>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                GitHub hesabımızda daha fazla açık kaynak projemizi keşfedin ve toplulukla birlikte geliştirme sürecine katılın.
              </p>
              <a
                href="https://github.com/cankayablockchain"
                target="_blank"
                rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-2xl font-semibold hover:shadow-xl hover:shadow-primary-500/30 dark:hover:shadow-primary-400/30 transition-all duration-700 hover:scale-105 hover:-translate-y-1 group relative overflow-hidden"
                >
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-6 h-6 bg-gradient-to-bl from-white/30 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  <Github size={16} className="relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700" />
                  <span className="relative z-10">GitHub'da İncele</span>
                  <ExternalLink size={16} className="relative z-10 group-hover:scale-110 group-hover:translate-x-1 transition-all duration-700" />
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 