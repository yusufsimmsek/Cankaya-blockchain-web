import { Calendar, Users, Sparkles, Trophy, Star, BookOpen, TrendingUp, Award, X, ChevronLeft, ChevronRight, Image, ExternalLink, Clock, MapPin, ArrowRight, ChevronDown, ChevronUp, Globe, Zap, Target, Lightbulb, Shield, Rocket, Heart, Briefcase, GraduationCap, Presentation, Building, Megaphone, Code, Database, Network, Cpu, Coins, BarChart3, Users2, Globe2, Monitor, Sun, Coffee, PartyPopper } from 'lucide-react'
import { useI18n } from '../i18n'
import { useState } from 'react'
import ibw1 from '../assets/ıbw1.jpeg'
import ibw2 from '../assets/ıbw2.jpeg'
import ibw3 from '../assets/ıbw3.jpeg'
import ibw4 from '../assets/ıbw4.jpeg'
import odtu1 from '../assets/odtü1.jpeg'
import odtu2 from '../assets/odtü2.jpeg'
import odtu3 from '../assets/odtü3.jpeg'
import odtu4 from '../assets/odtü4.jpeg'
import odtu5 from '../assets/odtü5.jpeg'
import odtu6 from '../assets/odtü6.jpeg'
import fest1 from '../assets/fest1.jpeg'
import fest2 from '../assets/fest2.jpeg'
import fest3 from '../assets/fest3.jpeg'
import fest4 from '../assets/fest4.jpeg'
import ift1 from '../assets/ift1.jpeg'
import ift2 from '../assets/ift2.jpeg'
import ift3 from '../assets/ift3.jpeg'
import ift4 from '../assets/ift4.jpeg'
import met2 from '../assets/met2.jpeg'
import mtp1 from '../assets/mtp1.jpeg'
import mtp3 from '../assets/mtp3.jpeg'
import mtp4 from '../assets/mtp4.jpeg'
import mtp5 from '../assets/mtp5.jpeg'
import tt1 from '../assets/tt1.jpeg'
import tt2 from '../assets/tt2.jpeg'
import tt3 from '../assets/tt3.jpeg'
import kas1 from '../assets/kas1.jpeg'
import kas2 from '../assets/kas2.jpeg'
import kas3 from '../assets/kas3.jpeg'
import blsm1 from '../assets/blsm1.jpeg'
import blsm2 from '../assets/blsm2.jpeg'
import blsm3 from '../assets/blsm3.jpeg'
import fst241 from '../assets/fst241.jpeg'
import fst242 from '../assets/fst242.jpeg'
import fst243 from '../assets/fst243.jpeg'
import fst244 from '../assets/fst244.jpeg'
import fst245 from '../assets/fst245.jpeg'
import edct1 from '../assets/edct1.jpeg'
import edct2 from '../assets/edct2.jpeg'
import edct3 from '../assets/edct3.jpeg'
import edct4 from '../assets/edct4.jpeg'
import edct5 from '../assets/edct5.jpeg'
import exl1 from '../assets/exl1.jpeg'
import exl2 from '../assets/exl2.jpeg'
import exl3 from '../assets/exl3.jpeg'
import exl4 from '../assets/exl4.jpeg'
import ıcrp1 from '../assets/ıcrp1.jpeg'
import ıcrp2 from '../assets/ıcrp2.jpeg'
import ıcrp3 from '../assets/ıcrp3.jpeg'
import dbi1 from '../assets/dbi1.jpeg'
import dbi2 from '../assets/dbi2.jpeg'
import dbi3 from '../assets/dbi3.jpeg'
import dbi4 from '../assets/dbi4.jpeg'
import okx1 from '../assets/okx1.jpeg'
import okx2 from '../assets/okx2.jpeg'
import bybıt1 from '../assets/bybıt1.jpeg'
import bybit2 from '../assets/bybit2.jpeg'
import bybıt3 from '../assets/bybıt3.jpeg'

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showAllEvents, setShowAllEvents] = useState(false)
  const { t, lang } = useI18n()

  const events = [
    {
      year: "2021",
      title: "Avalanche İstanbul",
      description: "İlk etkinlik, sektöre giriş",
      type: "Katılım",
      color: "from-blue-500 to-cyan-500",
      icon: Rocket,
      images: [], // Görseller daha sonra eklenecek
      date: "2021",
      location: "İstanbul",
      participants: "150+",
      duration: "2 gün"
    },
    {
      year: "2021",
      title: "Google Cloud & Bitci Hackathon",
      description: "2.lik, 15.000 ₺ ödül",
      type: "Ödül",
      color: "from-green-500 to-emerald-500",
      icon: Trophy,
      images: [],
      date: "2021",
      location: "Online",
      participants: "500+",
      duration: "48 saat"
    },
    {
      year: "2022",
      title: "Blockchain 101 Semineri",
      description: "3 Mart 2022 - Aybars Dorman (BiLira yöneticisi) ile çevrimiçi 'Blockchain 101' eğitimi",
      type: "Eğitim",
      color: "from-blue-500 to-cyan-500",
      icon: GraduationCap,
      link: "https://cankaya.edu.tr",
      images: [],
      date: "3 Mart 2022",
      location: "Online",
      participants: "200+",
      duration: "2 saat"
    },
    {
      year: "2022",
      title: "Web 3.0 Konferansı",
      description: "23 Mart 2022 - Web3 Derneği kurucusu Buğra Ayan'ın konuşmacı olduğu, kampüste düzenlenen Web3 semineri",
      type: "Eğitim",
      color: "from-blue-500 to-cyan-500",
      icon: Presentation,
      link: "https://cankaya.edu.tr",
      images: [],
      date: "23 Mart 2022",
      location: "Çankaya Üniversitesi",
      participants: "300+",
      duration: "3 saat"
    },
    {
      year: "2022",
      title: "Blockchain Hukuku ve Akıllı Kontratlar",
      description: "31 Mart 2022 - Av. Oğuz Kılıç'ın katılımıyla akıllı sözleşmeler ve blokzincir hukuku üzerine kampüs konferansı",
      type: "Eğitim",
      color: "from-blue-500 to-cyan-500",
      icon: Shield,
      link: "https://cankaya.edu.tr",
      images: [],
      date: "31 Mart 2022",
      location: "Çankaya Üniversitesi",
      participants: "250+",
      duration: "2.5 saat"
    },
    {
      year: "2022",
      title: "Anadolu Blockchain Buluşmaları (#1)",
      description: "25 Eylül 2022 (yaklaşık) - Ankara Kızılay'da düzenlenen ilk Anadolu Blockchain buluşmasında girişimciler, öğrenciler ve sektör temsilcileri bir araya geldi",
      type: "Organizasyon",
      color: "from-purple-500 to-violet-500",
      icon: Users2,
      link: "https://kriptokoin.com",
      images: [],
      date: "25 Eylül 2022",
      location: "Ankara Kızılay",
      participants: "400+",
      duration: "6 saat"
    },
    {
      year: "2022",
      title: "Anatolian Blockchain Meetup 2.0",
      description: "17 Aralık 2022 - Eskişehir'de gerçekleşen ikinci Anadolu Blockchain buluşması; Türkiye genelinden uzmanlar ve meraklılar katıldı",
      type: "Organizasyon",
      color: "from-purple-500 to-violet-500",
      icon: Building,
      link: "https://blockchaineventcentre.com",
      images: [],
      date: "17 Aralık 2022",
      location: "Eskişehir",
      participants: "350+",
      duration: "5 saat"
    },
    {
      year: "2022",
      title: "NFT Summit İstanbul",
      description: "Organizasyonda gönüllü ve partner olarak yer aldı",
      type: "Ortaklık",
      color: "from-pink-500 to-rose-500",
      icon: Users,
      images: [],
      date: "2022",
      location: "İstanbul",
      participants: "800+",
      duration: "2 gün"
    },
    {
      year: "2022",
      title: "Istanbul Blockchain Week 2022",
      description: "Kasım 2022 - İstanbul'daki geniş katılımlı blokzincir haftasına Metafluence sponsorluğunda katılım sağlandı",
      type: "Katılım",
      color: "from-blue-500 to-cyan-500",
      icon: Globe,
      link: "https://kriptobasin.com",
      images: [],
      date: "Kasım 2022",
      location: "İstanbul",
      participants: "2000+",
      duration: "5 gün"
    },
    {
      year: "2022-2023",
      title: "Anadolu Blockchain Zirveleri",
      description: "Ankara & Eskişehir'de düzenlendi",
      type: "Organizasyon",
      color: "from-purple-500 to-violet-500",
      icon: Megaphone,
      images: [],
      date: "2022-2023",
      location: "Ankara & Eskişehir",
      participants: "600+",
      duration: "2 gün"
    },
    {
      year: "2023",
      title: "Avalanche Summit II (Barcelona)",
      description: "Global zirvede topluluk temsili",
      type: "Katılım",
      color: "from-blue-500 to-cyan-500",
      icon: Globe2,
      images: [],
      date: "2023",
      location: "Barcelona",
      participants: "5000+",
      duration: "3 gün"
    },
    {
      year: "2023",
      title: "Solana Crossroads 2023 Konferansı",
      description: "31 Mart – 2 Nisan 2023 - İstanbul'daki Solana topluluk konferansında Çankaya Blockchain kurucusu ve ekibi panel konuşmacısı olarak yer aldı",
      type: "Katılım",
      color: "from-blue-500 to-cyan-500",
      icon: Zap,
      link: "https://tr.linkedin.com",
      images: [],
      date: "31 Mart – 2 Nisan 2023",
      location: "İstanbul",
      participants: "1500+",
      duration: "3 gün"
    },
    {
      year: "2023",
      title: "Çankaya Blockchain Education Summit II",
      description: "23 Haziran – 18 Temmuz 2023 - Binance Türkiye iş birliğiyle 4 hafta süren çevrimiçi eğitim zirvesinde Web3, Metaverse ve blockchain konularında seminerler verildi",
      type: "Eğitim",
      color: "from-blue-500 to-cyan-500",
      icon: Lightbulb,
      link: "https://kriptoetkinlik.com",
      images: [],
      date: "23 Haziran – 18 Temmuz 2023",
      location: "Online",
      participants: "800+",
      duration: "4 hafta"
    },
    {
      year: "2023",
      title: "Education Summit III",
      description: "9 – 16 Ağustos 2023 - Coinex sponsorluğunda 2 haftalık çevrimiçi eğitim serisinde ekonomiden NFT'lere kapsamlı blockchain eğitimleri düzenlendi",
      type: "Eğitim",
      color: "from-blue-500 to-cyan-500",
      icon: Target,
      link: "https://merkeziyetsizhaber.com",
      images: [],
      date: "9 – 16 Ağustos 2023",
      location: "Online",
      participants: "600+",
      duration: "2 hafta"
    },
    {
      year: "2023",
      title: "Education Summit IV",
      description: "🥳 Eğitimlerimize hız kesmeden devam ediyoruz 🎉. Bybit Türkiye ile birlikle düzenlediğimiz Education Summit VI eğitimimizin üçüncü haftasında Orhun Karasu (@KarasuFt) konuğumuz olacak. Google meet üzerinden gerçekleşecek etkinliğimize hepinizi bekliyoruz 🤩🎊.",
      type: "Eğitim",
      color: "from-blue-500 to-cyan-500",
      icon: Code,
      link: "https://x.com/BybitTurkiye",
      images: [bybıt1, bybit2, bybıt3],
      date: "11 Şubat 2024",
      location: "Online",
      participants: "—",
      duration: "1 gün"
    },
    {
      year: "2023",
      title: "Education Summit V",
      description: "Kasım 2023 (5, 12, 19, 23 Kasım) - CoinW ile birlikte düzenlenen eğitim zirvesinin beşinci serisi; son hafta 23 Kasım'da Çankaya Üni. kampüsünde uzman konuşmacılarla etkinlik yapıldı",
      type: "Eğitim",
      color: "from-blue-500 to-cyan-500",
      icon: Database,
      link: "https://kriptoetkinlik.com",
      images: [],
      date: "5, 12, 19, 23 Kasım 2023",
      location: "Online & Çankaya Üniversitesi",
      participants: "900+",
      duration: "4 hafta"
    },
    {
      year: "2023",
      title: "HackJuno Türkiye",
      description: "GameFi birinciliği, 5.000 Juno ödül",
      type: "Ödül",
      color: "from-green-500 to-emerald-500",
      icon: Award,
      images: [],
      date: "2023",
      location: "Online",
      participants: "300+",
      duration: "72 saat"
    },
    {
      year: "2023",
      title: "Topluluk Tanıtım Günleri",
      description: "CoinEx sponsorlu ödüllü stand",
      type: "Organizasyon",
      color: "from-purple-500 to-violet-500",
      icon: Sparkles,
      images: [],
      date: "2023",
      location: "Çankaya Üniversitesi",
      participants: "1000+",
      duration: "2 gün"
    },
    {
      year: "2023",
      title: "Blockchain Economy Istanbul",
      description: "İstanbul'da Türkiye'nin en büyük blockchain zirvesine katılım",
      type: "Katılım",
      color: "from-yellow-500 to-orange-500",
      icon: BarChart3,
      link: "https://blockchaineconomy.istanbul/tr",
      images: [],
      date: "2023",
      location: "İstanbul",
      participants: "5000+",
      duration: "2 gün"
    },
    {
      year: "2023-2024",
      title: "Istanbul Blockchain Week",
      description: "Topluluk partneri ve katılımcı",
      type: "Ortaklık",
      color: "from-pink-500 to-rose-500",
      icon: Network,
      images: [],
      date: "2023-2024",
      location: "İstanbul",
      participants: "3000+",
      duration: "5 gün"
    },
    {
      year: "2024",
      title: "Çankaya Blockchain Education Summit VI",
      description: "13 Mart 2024 - Bybit Türkiye desteğiyle Google Meet üzerinden çok haftalı eğitim serisinin son oturumunda Bertuğ Oymak konuk edildi",
      type: "Eğitim",
      color: "from-blue-500 to-cyan-500",
      icon: Cpu,
      link: "https://kriptoetkinlik.com",
      images: [],
      date: "13 Mart 2024",
      location: "Online",
      participants: "500+",
      duration: "2 saat"
    },
    {
      year: "2024",
      title: "Education Summit VII",
      description: "Eğitimlerimize hız kesmeden devam ediyoruz. WhiteBIT destekleri ile düzenlediğimiz Education Summit VII eğitim serimiz ile tekrardan karşınızdayız 🥳. Birbirinden değerli 4 konuşmacıyla, 8-28 Mayıs 2024 tarihleri arasında düzenlenecek eğitimlerimizin detayları için takipte kalın🤩",
      type: "Eğitim",
      color: "from-blue-500 to-cyan-500",
      icon: GraduationCap,
      link: "https://x.com/cankayachain/status/1787563928475615698",
      images: [edct1, edct2, edct3, edct4, edct5],
      date: "8-28 Mayıs 2024",
      location: "Online",
      participants: "—",
      duration: "3 hafta"
    },
    {
      year: "2025",
      title: "Blockchain Buluşması & Quiz Etkinliği",
      description: "Blockchain üzerine keyifli bir buluşma! Sıcak sohbetler, yeni bağlantılar ve bilgi dolu anlarla dopdolu bir gün geçirdik. Quizimizde kıyasıya rekabet yaşanırken kazananlar sürpriz hediyelerini kaptı! Bu daha başlangıç! Katılan ve destekleyen herkese teşekkürler.",
      type: "Organizasyon",
      color: "from-orange-500 to-yellow-500",
      icon: Coffee,
      link: "https://x.com/cankayachain/status/1906037437505094012",
      images: [met2, mtp1, mtp3, mtp4, mtp5],
      date: "15 Mart 2025",
      location: "Ankara",
      participants: "100+",
      duration: "1 gün"
    },
    {
      year: "2024",
      title: "ODTÜ Blockchain Days 2024",
      description: "9 Mart 2024 - ODTÜ Blockchain Topluluğu'nun Ankara'da düzenlediği konferansa Çankaya Blockchain partner olarak katıldı",
      type: "Katılım",
      color: "from-blue-500 to-cyan-500",
      icon: Briefcase,
      link: "https://tr.linkedin.com",
      images: [odtu1, odtu2, odtu3, odtu4, odtu5, odtu6],
      date: "9 Mart 2024",
      location: "ODTÜ Ankara",
      participants: "800+",
      duration: "1 gün"
    },
    {
      year: "2025",
      title: "Topluluk Tanıtım Günleri 2025",
      description: "3–4 Mart 2025 - Çankaya Üniversitesi'nde öğrenci kulüpleri tanıtım günlerinde Çankaya Blockchain stand açarak projelerini tanıttı (RealityX desteğiyle)",
      type: "Organizasyon",
      color: "from-purple-500 to-violet-500",
      icon: Monitor,
      link: "https://instagram.com",
      images: [tt1, tt2, tt3],
      date: "3–4 Mart 2025",
      location: "Çankaya Üniversitesi",
      participants: "1200+",
      duration: "2 gün"
    },
    {
      year: "2025",
      title: "Çankaya Üniversitesi Bahar Şenliği",
      description: "Üniversitemiz Bahar Şenliğinde Çankaya Blockchain ailesi olarak yerimizi aldık! Güneşli havada bol kahkaha, bol etkileşim ve dopdolu bir gün geçirdik. Standımıza uğrayan, sohbet eden, fotoğraf çektiren herkese kocaman teşekkürler. Daha nicelerinde buluşmak üzere, sizlerle tanışmak çok güzeldi! Ana destekçimiz WhiteBIT'e çok teşekkür ederiz.",
      type: "Organizasyon",
      color: "from-green-500 to-emerald-500",
      icon: Sun,
      link: "https://x.com/cankayachain/status/1926328220896407654",
      images: [fest1, fest2, fest3, fest4],
      date: "2025",
      location: "Çankaya Üniversitesi",
      participants: "500+",
      duration: "1 gün"
    },
    {
      year: "2025",
      title: "ODTÜ Blockchain Days 2025",
      description: "Çankaya Blockchain topluluğu olarak ODTÜ Blockchain Days 2025'e katıldık. Sektörden önemli isimlerle bilgi alışverişinde bulunduk. Etkinlikte emeği geçen herkese teşekkür ederiz.",
      type: "Katılım",
      color: "from-blue-500 to-cyan-500",
      icon: Briefcase,
      link: "https://x.com/cankayachain/status/1916914950099832926",
      images: [odtu1, odtu2, odtu3, odtu4, odtu5, odtu6],
      date: "2025",
      location: "ODTÜ Ankara",
      participants: "1000+",
      duration: "1 gün"
    },
    {
      year: "2025",
      title: "SuiFtar & Milli Maç Buluşması",
      description: "23 Mart 2025 - Sui, Çankaya Blockchain ve node101 iş birliğiyle iftar etkinliği ve Türkiye-Macaristan milli maç izleme buluşması gerçekleştirildi. Etkinlikte blockchain teknolojileri hakkında bilgi paylaşımı yapıldı ve topluluk üyeleri bir araya geldi.",
      type: "Organizasyon",
      color: "from-purple-500 to-violet-500",
      icon: Heart,
      link: "https://x.com/cankayachain/status/1916914950099832926",
      images: [ift1, ift2, ift3, ift4],
      date: "2025",
      location: "Ankara",
      participants: "150+",
      duration: "4 saat"
    },
    {
      year: "2025",
      title: "Istanbul Blockchain Week 2025",
      description: "26–27 Haziran 2025 - İstanbul'da düzenlenen uluslararası Web3 zirvesine Çankaya Blockchain topluluğu resmi partner olarak katılım sağladı",
      type: "Katılım",
      color: "from-blue-500 to-purple-500",
      icon: Coins,
      link: "/istanbul-blockchain-week-2025",
      images: [
        ibw1,
        ibw2, 
        ibw3,
        ibw4
      ],
      date: "2025",
      location: "İstanbul",
      participants: "4000+",
      duration: "2 gün"
    },
    {
      year: "2025",
      title: "Civilization Kaş 3.0",
      description: "Web3, DAO'lar ve oyunlaştırma üzerine ilham verici deneyimlerin paylaşıldığı bu eşsiz etkinlikte teknoloji ve topluluk ruhunu bir araya getirdik. Geleceği birlikte inşa etmeye devam ediyoruz! 💡",
      type: "Katılım",
      color: "from-blue-500 to-cyan-500",
      icon: Rocket,
      link: "https://x.com/cankayachain",
      images: [kas1, kas2, kas3],
      date: "26 Şubat 2025",
      location: "Kaş",
      participants: "—",
      duration: "1 gün"
    },
    {
      year: "2024",
      title: "Yeni Üyeler Tanışma Etkinliği",
      description: "Cumartesi günü gerçekleşen tanışma etkinliğimizde yeni üyelerimizle çok keyifli vakit geçirdik 🤩🤩. Destekleri için Bybit Türkiye'ye çok teşekkür ederiz 🥳🎉",
      type: "Organizasyon",
      color: "from-purple-500 to-violet-500",
      icon: Users,
      link: "https://x.com/cankayachain/status/1848419588666728512",
      images: [blsm1, blsm2, blsm3],
      date: "19 Ekim 2024",
      location: "Ankara",
      participants: "—",
      duration: "1 gün"
    },
    {
      year: "2024",
      title: "Çankaya Üniversitesi Bahar Şenliği 2024",
      description: "Çankaya Üniversitesi Bahar Şenliği'ndeki standımıza gösterdiğiniz yoğun ilgi için teşekkür ederiz! 🥳🎉 Eğlenceli oyunlar oynadık ve sürpriz ödüller dağıttık. Destekleri için Bybit Türkiye ve Gameness App'a teşekkür ederiz. Yeni etkinliklerimizde buluşmak üzere! 🤩🎊",
      type: "Organizasyon",
      color: "from-purple-500 to-violet-500",
      icon: PartyPopper,
      images: [fst241, fst242, fst243, fst244, fst245],
      date: "31 Mayıs 2024",
      location: "Çankaya Üniversitesi",
      participants: "—",
      duration: "1 gün"
    },
    {
      year: "2024",
      title: "Blockchain Meet Up Ankara",
      description: "EXOLO Türkiye ve ChainUp işbirliğiyle düzenlediğimiz Blockchain Meet Up Ankara buluşmamızda, sektörün önde gelen isimleriyle bir araya geldik 🚀💼 Katılan herkese teşekkürler 🤩",
      type: "Organizasyon",
      color: "from-purple-500 to-violet-500",
      icon: Users2,
      images: [exl1, exl2, exl3, exl4],
      date: "11 Mayıs 2024",
      location: "Ankara",
      participants: "—",
      duration: "1 gün"
    },
    {
      year: "2024",
      title: "Icrypex Kripto Semineri",
      description: "Çankaya Blockchain ekibi olarak 27 Nisan'da Hilton Garden Hotel Ankara'da düzenlenen Icrypex Kripto Semineri'nde çok keyifli vakit geçirdik 🤩. Emeği geçen herkese teşekkür ederiz😊.",
      type: "Katılım",
      color: "from-blue-500 to-cyan-500",
      icon: Presentation,
      images: [ıcrp1, ıcrp2, ıcrp3],
      date: "27 Nisan 2024",
      location: "Hilton Garden Hotel Ankara",
      participants: "—",
      duration: "1 gün"
    },
    {
      year: "2024",
      title: "Token2049 Dubai",
      description: "Kurucumuz Anıl Karaçay (@anilchain) Dubai'de gerçekleşen Token2049'a (@token2049) katılarak bizleri temsil etti. Blockchain Expo World'ün (@ExpoBlockchain) Dubai'de düzenlediği side event'te de konuşmacı oldu. 🥳🤩 🚨 Yakında çok güzel iş birlikleriyle karşınızda olabiliriz. 🤩🥳",
      type: "Katılım",
      color: "from-blue-500 to-cyan-500",
      icon: Globe2,
      link: "https://x.com/token2049",
      images: [dbi1, dbi2, dbi3, dbi4],
      date: "26-27 Nisan 2024",
      location: "Dubai",
      participants: "—",
      duration: "2 gün"
    },
    {
      year: "2024",
      title: "OKX TR İftar Yemeği",
      description: "Çankaya Blockchain ve Altcointurk Ankara ekibi olarak OKX TR iftar yemeğindeydik. Davetleri için teşekkür ederiz 😊",
      type: "Katılım",
      color: "from-blue-500 to-cyan-500",
      icon: Users2,
      link: "https://x.com/OKXTurkce",
      images: [okx1, okx2],
      date: "Nisan 2024",
      location: "Ankara",
      participants: "—",
      duration: "1 akşam"
    }
  ].sort((a, b) => {
    // Istanbul Blockchain Week 2025'yi en başa çek
    if (a.title === "Istanbul Blockchain Week 2025") return -1;
    if (b.title === "Istanbul Blockchain Week 2025") return 1;
    
    // Diğer etkinlikleri yıl bilgisine göre büyükten küçüğe sırala
    const getYear = (e: any) => parseInt((e.year || '').match(/\d{4}/)?.[0] || '0', 10);
    return getYear(b) - getYear(a);
  });

  // Localize events when language is EN (titles, descriptions, locations, types)
  if (lang === 'en') {
    const map: Record<string, { title?: string; description?: string; location?: string; type?: string; date?: string; participants?: string; duration?: string }> = {
      'Avalanche İstanbul': { title: 'Avalanche Istanbul', description: 'First event, entry into the sector', type: 'Participation', location: 'Istanbul', date: '2021' },
      'Google Cloud & Bitci Hackathon': { title: 'Google Cloud & Bitci Hackathon', description: '2nd place, ₺15,000 prize', type: 'Award', location: 'Online', date: '2021' },
      'Blockchain 101 Semineri': { title: 'Blockchain 101 Seminar', description: "3 March 2022 – Online 'Blockchain 101' with Aybars Dorman (BiLira executive)", type: 'Training', location: 'Online', date: '3 March 2022' },
      'Web 3.0 Konferansı': { title: 'Web 3.0 Conference', description: '23 March 2022 – On-campus Web3 seminar with Buğra Ayan, founder of the Web3 Association', type: 'Training', location: 'Cankaya University', date: '23 March 2022' },
      'Blockchain Hukuku ve Akıllı Kontratlar': { title: 'Blockchain Law and Smart Contracts', description: '31 March 2022 – On-campus conference on smart contracts and blockchain law with Atty. Oğuz Kılıç', type: 'Training', location: 'Cankaya University', date: '31 March 2022' },
      'Anadolu Blockchain Buluşmaları (#1)': { title: 'Anatolian Blockchain Meetups (#1)', description: 'First meetup in Ankara Kızılay bringing together entrepreneurs, students, and industry representatives', type: 'Organization', location: 'Ankara Kızılay', date: '25 September 2022' },
      'Anatolian Blockchain Meetup 2.0': { title: 'Anatolian Blockchain Meetup 2.0', description: 'Held in Eskişehir with participants from all around Turkey', type: 'Organization', location: 'Eskisehir', date: '17 December 2022' },
      'NFT Summit İstanbul': { title: 'NFT Summit Istanbul', description: 'Volunteer and partner in the organization', type: 'Partnership', location: 'Istanbul', date: '2022' },
      'Istanbul Blockchain Week 2022': { title: 'Istanbul Blockchain Week 2022', description: 'Participation in the large-scale blockchain week in Istanbul', type: 'Participation', location: 'Istanbul', date: 'November 2022' },
      'Anadolu Blockchain Zirveleri': { title: 'Anatolian Blockchain Summits', description: 'Organized in Ankara & Eskişehir', type: 'Organization', location: 'Ankara & Eskisehir', date: '2022-2023' },
      'Avalanche Summit II (Barcelona)': { title: 'Avalanche Summit II (Barcelona)', description: 'Community representation at the global summit', type: 'Participation', location: 'Barcelona', date: '2023' },
      'Solana Crossroads 2023 Konferansı': { title: 'Solana Crossroads 2023 Conference', description: '31 Mar – 2 Apr 2023 – Cankaya Blockchain founder and team as panel speakers; Istanbul community conference', type: 'Participation', location: 'Istanbul', date: '31 Mar – 2 Apr 2023' },
      'Çankaya Blockchain Education Summit II': { title: 'Cankaya Blockchain Education Summit II', description: '23 Jun – 18 Jul 2023 – Online education summit with Binance Turkey support', type: 'Training', location: 'Online', date: '23 Jun – 18 Jul 2023' },
      'Education Summit III': { title: 'Education Summit III', description: '9–16 Aug 2023 – Two-week online series sponsored by Coinex', type: 'Training', location: 'Online', date: '9–16 Aug 2023' },
      'Education Summit IV': { title: 'Education Summit IV', description: 'Bybit Turkey supported education session', type: 'Training', location: 'Online', date: '2024' },
      'Education Summit V': { title: 'Education Summit V', description: 'Series organized with CoinW; on-campus finale at Cankaya University', type: 'Training', location: 'Online & Cankaya University', date: 'Nov 2023' },
      'HackJuno Türkiye': { title: 'HackJuno Turkey', description: 'GameFi first place, 5,000 Juno award', type: 'Award', location: 'Online', date: '2023' },
      'Topluluk Tanıtım Günleri': { title: 'Community Promotion Days', description: 'Awarded booth sponsored by CoinEx', type: 'Organization', location: 'Cankaya University', date: '2023' },
      'Blockchain Economy Istanbul': { title: 'Blockchain Economy Istanbul', description: "Participation in Turkey's largest blockchain summit in Istanbul", type: 'Participation', location: 'Istanbul', date: '2023' },
      'Istanbul Blockchain Week': { title: 'Istanbul Blockchain Week', description: 'Community partner and participant', type: 'Partnership', location: 'Istanbul', date: '2023-2024' },
      'Çankaya Blockchain Education Summit VI': { title: 'Cankaya Blockchain Education Summit VI', description: '13 March 2024 – Final session of the multi-week online series supported by Bybit Turkey', type: 'Training', location: 'Online', date: '13 March 2024' },
      'Education Summit VII': { title: 'Education Summit VII', description: 'Education series supported by WhiteBIT – 8–28 May 2024', type: 'Training', location: 'Online', date: '8–28 May 2024' },
      'ODTÜ Blockchain Days 2024': { title: 'METU Blockchain Days 2024', description: 'Cankaya Blockchain participated as partner in Ankara', type: 'Participation', location: 'METU Ankara', date: '9 March 2024' },
      'Yeni Üyeler Tanışma Etkinliği': { title: 'New Members Meetup', description: 'A pleasant meetup with our new members', type: 'Organization', location: 'Ankara', date: '19 October 2024' },
      'Çankaya Üniversitesi Bahar Şenliği 2024': { title: 'Cankaya University Spring Festival 2024', description: 'Thank you for visiting our stand; fun games and prizes', type: 'Organization', location: 'Cankaya University', date: '31 May 2024' },
      'Blockchain Meet Up Ankara': { title: 'Blockchain Meet Up Ankara', description: 'With EXOLO Turkey and ChainUp; we met with leading names', type: 'Organization', location: 'Ankara', date: '11 May 2024' },
      'Icrypex Kripto Semineri': { title: 'Icrypex Crypto Seminar', description: 'A pleasant time at Hilton Garden Hotel Ankara', type: 'Participation', location: 'Hilton Garden Hotel Ankara', date: '27 April 2024' },
      'Token2049 Dubai': { title: 'Token2049 Dubai', description: 'Our founder represented us in Dubai; side event speaker at Blockchain Expo World', type: 'Participation', location: 'Dubai', date: '26–27 April 2024' },
      'OKX TR İftar Yemeği': { title: 'OKX TR Iftar Dinner', description: 'We attended the OKX TR iftar with Altcointurk Ankara team', type: 'Participation', location: 'Ankara', date: 'April 2024' },
      'Çankaya Üniversitesi Bahar Şenliği': { title: 'Cankaya University Spring Festival', description: 'We took our place at the spring festival of our university as the Cankaya Blockchain family. A day full of laughter, interaction and fun.', type: 'Organization', location: 'Cankaya University', participants: '500+', duration: '1 day', date: '2025' },
      'ODTÜ Blockchain Days 2025': { title: 'METU Blockchain Days 2025', description: 'Cankaya Blockchain community attended METU Blockchain Days 2025. We exchanged knowledge with important names from the industry.', type: 'Participation', location: 'METU Ankara', participants: '1000+', duration: '1 day', date: '2025' },
      'SuiFtar & Milli Maç Buluşması': { title: 'SuiFtar & National Match Gathering', description: '23 March 2025 – In collaboration with Sui and node101, an iftar event and Turkey–Hungary national match watch meetup was held. Blockchain topics were discussed during the event.', type: 'Organization', location: 'Ankara', participants: '150+', duration: '4 hours', date: '2025' },
    }
    for (const e of events) {
      const tr = map[e.title as keyof typeof map]
      if (tr) {
        if (tr.title) e.title = tr.title
        if (tr.description) e.description = tr.description
        if (tr.location) e.location = tr.location
        if (tr.type) e.type = tr.type
        if (tr.date) e.date = tr.date
        if (tr.participants) e.participants = tr.participants
        if (tr.duration) e.duration = tr.duration
      }
      if (e.title === 'Istanbul Blockchain Week 2025') {
        e.title = 'Istanbul Blockchain Week 2025'
        e.description = 'June 26–27, 2025 – The international Web3 summit in Istanbul. Cankaya Blockchain community participated as an official partner.'
        e.type = 'Participation'
        e.location = 'Istanbul'
        e.participants = '4000+'
        e.duration = '2 days'
      }
      if (e.title === 'Blockchain Buluşması & Quiz Etkinliği') {
        e.title = 'Blockchain Meetup & Quiz Event'
        e.description = 'A delightful meetup on blockchain! Warm conversations, new connections, and moments full of knowledge. We had a competitive quiz.'
        e.type = 'Organization'
        e.location = 'Ankara'
        e.participants = '100+'
        e.duration = '1 day'
      }
      if (e.title === 'Topluluk Tanıtım Günleri 2025') {
        e.title = 'Community Promotion Days 2025'
        e.description = "March 3–4, 2025 – At Cankaya University student club promotion days, Cankaya Blockchain introduced its projects at the stand (with RealityX support)."
        e.type = 'Organization'
        e.location = 'Cankaya University'
        e.participants = '1200+'
        e.duration = '2 days'
      }
    }
  }

  const educationActivities = [
    { name: t('ea1'), icon: BookOpen },
    { name: t('ea2'), icon: TrendingUp },
    { name: t('ea3'), icon: Award },
    { name: t('ea4'), icon: Star },
    { name: t('ea5'), icon: Trophy },
    { name: t('ea6'), icon: Users },
    { name: t('ea7'), icon: BookOpen },
    { name: t('ea8'), icon: TrendingUp }
  ]

  const typeColors: { [key: string]: string } = {
    "Katılım": "from-blue-500 to-cyan-500 text-white border-blue-400",
    "Ödül": "from-green-500 to-emerald-500 text-white border-green-400",
    "Organizasyon": "from-purple-500 to-violet-500 text-white border-purple-400",
    "Ortaklık": "from-pink-500 to-rose-500 text-white border-pink-400",
    "Eğitim": "from-blue-500 to-cyan-500 text-white border-blue-400",
    "Participation": "from-blue-500 to-cyan-500 text-white border-blue-400",
    "Award": "from-green-500 to-emerald-500 text-white border-green-400",
    "Organization": "from-purple-500 to-violet-500 text-white border-purple-400",
    "Partnership": "from-pink-500 to-rose-500 text-white border-pink-400",
    "Training": "from-blue-500 to-cyan-500 text-white border-blue-400"
  }

  const openEventModal = (index: number) => {
    setSelectedEvent(index)
    setCurrentImageIndex(0)
  }

  const closeEventModal = () => {
    setSelectedEvent(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedEvent !== null && events[selectedEvent].images.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === events[selectedEvent].images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedEvent !== null && events[selectedEvent].images.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? events[selectedEvent].images.length - 1 : prev - 1
      )
    }
  }

  const toggleShowAllEvents = () => {
    setShowAllEvents(!showAllEvents)
  }

  // İlk 6 etkinliği göster, geri kalanını "Daha Fazla" butonu ile
  const displayedEvents = showAllEvents ? events : events.slice(0, 6)



  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 text-gradient-primary">{t('events_title')}</h2>
          <p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 max-w-4xl mx-auto leading-relaxed">{t('events_subtitle')}</p>
        </div>

        {/* Events Grid */}
        <div className="max-w-7xl mx-auto mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedEvents.map((event, index) => (
                <div 
                  key={index} 
                className="group cursor-pointer animate-fade-in-up hover:animate-pulse"
                  style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => openEventModal(index)}
                >
                <div className="relative bg-white/40 dark:bg-neutral-800/30 backdrop-blur-xl border border-white/20 dark:border-neutral-500/20 rounded-3xl p-6 hover:shadow-2xl hover:shadow-primary-500/20 dark:hover:shadow-primary-400/20 transition-all duration-700 hover:scale-[1.02] hover:-translate-y-1 h-full group overflow-hidden">
                  {/* Glassmorphism Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent dark:from-neutral-700/10 dark:via-neutral-700/5 dark:to-transparent rounded-3xl"></div>
                  
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/3 via-secondary-500/3 to-primary-500/3 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl"></div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/8 via-transparent to-secondary-500/8 opacity-0 group-hover:opacity-100 transition-all duration-1000 blur-2xl scale-110 group-hover:scale-100"></div>
                  
                  {/* Border Glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-primary-500/20 opacity-0 group-hover:opacity-100 transition-all duration-700 p-[1.5px]">
                    <div className="bg-white/40 dark:bg-neutral-800/30 backdrop-blur-xl rounded-3xl h-full w-full"></div>
                  </div>
                  
                  {/* Modern Corner Accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary-500/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  
                  {/* Floating Particles */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-6 left-6 w-1 h-1 bg-gradient-to-r from-secondary-400 to-primary-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-gradient-to-r from-primary-300 to-secondary-300 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: '1.5s' }}></div>
                    
                    {/* Moving Particles */}
                    <div className="absolute top-2 left-1/2 w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                    <div className="absolute bottom-2 right-1/3 w-1 h-1 bg-secondary-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce" style={{ animationDelay: '0.7s' }}></div>
                  </div>

                  {/* Header */}
                  <div className="relative flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-r ${event.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-xl group-hover:shadow-2xl group-hover:shadow-primary-500/30 dark:group-hover:shadow-primary-400/30 relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      {(() => {
                        const IconComponent = event.icon;
                        return <IconComponent className="w-7 h-7 text-white group-hover:scale-110 transition-all duration-700 relative z-10" />;
                      })()}
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-3 group-hover:translate-x-0">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-primary-500/30">
                        <ArrowRight className="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover:scale-110 group-hover:translate-x-1 transition-all duration-700" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="relative flex items-center gap-3 mb-4">
                      <span className="text-sm font-semibold text-neutral-600 dark:text-neutral-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-all duration-700 group-hover:animate-pulse bg-white/50 dark:bg-neutral-800/50 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20 dark:border-neutral-700/20">{event.year}</span>
                      <span className={`text-xs px-3 py-1.5 rounded-full bg-gradient-to-r ${typeColors[event.type as keyof typeof typeColors]} border border-white/30 font-semibold group-hover:scale-105 transition-all duration-700 group-hover:animate-pulse shadow-lg backdrop-blur-sm`}>
                          {event.type}
                        </span>
                      </div>
                    
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 group-hover:text-gradient-primary transition-all duration-700 line-clamp-2 group-hover:scale-[1.01] transform group-hover:animate-pulse leading-tight">
                      {event.title}
                    </h3>
                    
                    <p className="text-sm text-black dark:text-white mb-6 line-clamp-3 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-all duration-700 leading-relaxed font-medium">
                        {event.description}
                      </p>

                    {/* Quick Info */}
                    <div className="space-y-3 text-xs text-neutral-500 dark:text-neutral-400">
                      <div className="flex items-center gap-3 group-hover:translate-x-2 transition-all duration-700 group-hover:animate-pulse bg-white/30 dark:bg-neutral-800/30 px-3 py-2 rounded-xl backdrop-blur-sm border border-white/20 dark:border-neutral-700/20" style={{ animationDelay: '0.1s' }}>
                        <div className="w-8 h-8 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center">
                          <Clock className="w-3 h-3 group-hover:text-primary-500 transition-all duration-700 group-hover:animate-spin" style={{ animationDuration: '2s' }} />
                        </div>
                        <span className="group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-all duration-700 font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 group-hover:translate-x-2 transition-all duration-700 group-hover:animate-pulse bg-white/30 dark:bg-neutral-800/30 px-3 py-2 rounded-xl backdrop-blur-sm border border-white/20 dark:border-neutral-700/20" style={{ transitionDelay: '0.1s', animationDelay: '0.2s' }}>
                        <div className="w-8 h-8 bg-gradient-to-r from-secondary-500/20 to-primary-500/20 rounded-lg flex items-center justify-center">
                          <MapPin className="w-3 h-3 group-hover:text-secondary-500 transition-all duration-700 group-hover:animate-bounce" />
                        </div>
                        <span className="group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-all duration-700 font-medium">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-3 group-hover:translate-x-2 transition-all duration-700 group-hover:animate-pulse bg-white/30 dark:bg-neutral-800/30 px-3 py-2 rounded-xl backdrop-blur-sm border border-white/20 dark:border-neutral-700/20" style={{ transitionDelay: '0.2s', animationDelay: '0.3s' }}>
                        <div className="w-8 h-8 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center">
                          <Users className="w-3 h-3 group-hover:text-primary-500 transition-all duration-700 group-hover:animate-pulse" />
                        </div>
                        <span className="text-black dark:text-white group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-all duration-700 font-bold">{event.participants} {t('participants')}</span>
                      </div>
                      <div className="flex items-center gap-3 group-hover:translate-x-2 transition-all duration-700 group-hover:animate-pulse bg-white/30 dark:bg-neutral-800/30 px-3 py-2 rounded-xl backdrop-blur-sm border border-white/20 dark:border-neutral-700/20" style={{ transitionDelay: '0.3s', animationDelay: '0.4s' }}>
                        <div className="w-8 h-8 bg-gradient-to-r from-secondary-500/20 to-primary-500/20 rounded-lg flex items-center justify-center">
                          <Calendar className="w-3 h-3 group-hover:text-secondary-500 transition-all duration-700 group-hover:animate-ping" />
                        </div>
                        <span className="group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-all duration-700 font-medium">{event.duration}</span>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Daha Fazla Butonu */}
            {!showAllEvents && events.length > 6 && (
              <div className="flex justify-center mt-12">
                <button
                  onClick={toggleShowAllEvents}
                  className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-2xl font-semibold hover:shadow-xl hover:shadow-primary-500/30 dark:hover:shadow-primary-400/30 transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-6 h-6 bg-gradient-to-bl from-white/30 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Floating Particles */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-2 right-2 w-1 h-1 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-2 left-2 w-1 h-1 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: '1s' }}></div>
                  </div>
                  
                  <span className="relative z-10 flex items-center gap-3">
                    <span>{t('events_more')}</span>
                    <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-500" />
                  </span>
                </button>
              </div>
            )}
            
            {/* Daha Az Butonu */}
            {showAllEvents && (
              <div className="flex justify-center mt-12">
                <button
                  onClick={toggleShowAllEvents}
                  className="group relative px-8 py-4 bg-gradient-to-r from-neutral-500 to-neutral-600 text-white rounded-2xl font-semibold hover:shadow-xl hover:shadow-neutral-500/30 dark:hover:shadow-neutral-400/30 transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-6 h-6 bg-gradient-to-bl from-white/30 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Floating Particles */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-2 right-2 w-1 h-1 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-2 left-2 w-1 h-1 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: '1s' }}></div>
                  </div>
                  
                  <span className="relative z-10 flex items-center gap-3">
                    <span>{t('events_less')}</span>
                    <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-500" />
                  </span>
                </button>
              </div>
            )}
          </div>

        {/* Education Activities Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">{t('education_activities')}</h3>
            <p className="text-black dark:text-white font-medium">{t('education_sub')}</p>
            </div>
            
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {educationActivities.map((activity, index) => (
                <div 
                  key={index} 
                className="relative group animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/8 to-secondary-600/8 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100"></div>
                <div className="relative bg-white/50 dark:bg-neutral-800/40 backdrop-blur-xl p-6 rounded-3xl border border-white/20 dark:border-neutral-600/20 shadow-xl hover:shadow-2xl hover:shadow-primary-500/20 dark:hover:shadow-primary-400/20 transition-all duration-700 group-hover:scale-105 group-hover:-translate-y-1 overflow-hidden h-48 flex flex-col justify-center">
                  {/* Glassmorphism Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent dark:from-neutral-700/10 dark:via-neutral-700/5 dark:to-transparent rounded-3xl"></div>
                  
                  {/* Modern Corner Accent */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-primary-500/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  
                  <div className="text-center relative z-10 flex flex-col items-center justify-center h-full">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-lg group-hover:shadow-xl border border-primary-500/30">
                      <activity.icon className="w-6 h-6 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-all duration-700" />
                    </div>
                    <span className="text-sm text-neutral-700 dark:text-neutral-300 font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-all duration-700 bg-white/50 dark:bg-neutral-800/50 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/20 dark:border-neutral-700/20 text-center">
                      {activity.name}
                    </span>
                  </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
            </div>

      {/* Event Modal */}
      {selectedEvent !== null && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xl z-50 flex items-center justify-center p-4">
          <div className="relative bg-white/90 dark:bg-neutral-800/90 backdrop-blur-2xl rounded-3xl max-w-5xl w-full max-h-[95vh] overflow-hidden shadow-2xl border border-white/20 dark:border-neutral-700/20">
            {/* Modal Header */}
            <div className="relative p-4 border-b border-neutral-200/50 dark:border-neutral-700/50 bg-gradient-to-r from-white/50 to-neutral-50/50 dark:from-neutral-800/50 dark:to-neutral-900/50 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${events[selectedEvent].color} rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-700 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    {(() => {
                      const IconComponent = events[selectedEvent].icon;
                      return <IconComponent className="w-6 h-6 text-white relative z-10" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                      {events[selectedEvent].title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 bg-white/50 dark:bg-neutral-800/50 px-2 py-0.5 rounded-full backdrop-blur-sm border border-white/20 dark:border-neutral-700/20">
                        {events[selectedEvent].year}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${typeColors[events[selectedEvent].type as keyof typeof typeColors]} border border-white/30 font-semibold shadow-lg backdrop-blur-sm`}>
                        {events[selectedEvent].type}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={closeEventModal}
                  className="w-10 h-10 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/70 dark:hover:bg-neutral-700/70 transition-all duration-300 border border-white/20 dark:border-neutral-700/20 shadow-lg hover:shadow-xl"
                >
                  <X className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-4 overflow-y-auto max-h-[70vh]">
              {/* Event Images - Modernized */}
              {events[selectedEvent].images.length > 0 ? (
                <div className="relative mb-8">
                  {/* Main Image Container */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-neutral-700/20 group">
                    {/* Image with enhanced quality */}
                    <img 
                      src={events[selectedEvent].images[currentImageIndex]} 
                      alt={`${events[selectedEvent].title} - Görsel ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    
                    {/* Image Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Image Counter */}
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-sm font-medium border border-white/20">
                      {currentImageIndex + 1} / {events[selectedEvent].images.length}
                    </div>
                    
                    {/* Image Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <h4 className="text-white font-semibold text-lg">
                        {events[selectedEvent].title}
                      </h4>
                      <p className="text-white/80 text-sm mt-1">
                        Görsel {currentImageIndex + 1}
                      </p>
                    </div>
                  </div>
                  
                  {/* Enhanced Navigation Controls */}
                  {events[selectedEvent].images.length > 1 && (
                    <>
                      {/* Previous Button */}
                      <button
                        onClick={prevImage}
                        className="absolute left-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-black/70 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-black/90 hover:scale-110 transition-all duration-300 border border-white/20 shadow-2xl group"
                      >
                        <ChevronLeft className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                      </button>
                      
                      {/* Next Button */}
                      <button
                        onClick={nextImage}
                        className="absolute right-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-black/70 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-black/90 hover:scale-110 transition-all duration-300 border border-white/20 shadow-2xl group"
                      >
                        <ChevronRight className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                      </button>
                      
                      {/* Enhanced Image Indicators */}
                      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
                        {events[selectedEvent].images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`transition-all duration-300 hover:scale-110 ${
                              index === currentImageIndex 
                                ? 'w-8 h-2 bg-white rounded-full shadow-lg' 
                                : 'w-2 h-2 bg-white/60 hover:bg-white/80 rounded-full'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                  
                  {/* Thumbnail Navigation */}
                  {events[selectedEvent].images.length > 1 && (
                    <div className="mt-6">
                      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                        {events[selectedEvent].images.map((image, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`flex-shrink-0 relative group transition-all duration-300 hover:scale-105 ${
                              index === currentImageIndex 
                                ? 'ring-4 ring-primary-500 ring-offset-2 ring-offset-white dark:ring-offset-neutral-800' 
                                : 'ring-2 ring-white/30 dark:ring-neutral-600/30'
                            }`}
                          >
                            <div className="w-20 h-16 bg-neutral-200 dark:bg-neutral-700 rounded-xl overflow-hidden">
                              <img 
                                src={image} 
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            
                            {/* Thumbnail Overlay */}
                            <div className={`absolute inset-0 bg-black/40 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ${
                              index === currentImageIndex ? 'opacity-100' : ''
                            }`}>
                              <div className="w-6 h-6 bg-white/90 rounded-full flex items-center justify-center">
                                <span className="text-xs font-bold text-neutral-900">
                                  {index + 1}
                                </span>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="aspect-[4/3] bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-3xl flex items-center justify-center mb-8 border-2 border-dashed border-primary-200 dark:border-primary-700">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <Image className="w-10 h-10 text-primary-500" />
                    </div>
                    <h4 className="text-lg font-semibold text-neutral-700 dark:text-neutral-300 mb-2">{t('img_soon_h')}</h4>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm">{t('img_soon_p')}</p>
                  </div>
                </div>
              )}

              {/* Event Details */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">{t('event_details')}</h4>
                  <p className="text-black dark:text-white leading-relaxed font-medium">
                    {events[selectedEvent].description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="relative bg-white/60 dark:bg-neutral-700/50 backdrop-blur-xl p-6 rounded-2xl border border-white/30 dark:border-neutral-600/30 shadow-lg hover:shadow-xl transition-all duration-500 group overflow-hidden">
                    {/* Glassmorphism Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent dark:from-neutral-700/20 dark:via-neutral-700/10 dark:to-transparent rounded-2xl"></div>
                    
                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-primary-500/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-primary-500/30">
                          <Clock className="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-all duration-500" />
                        </div>
                        <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">{t('date')}</span>
                      </div>
                      <p className="text-black dark:text-white font-bold group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-all duration-500">{events[selectedEvent].date}</p>
                    </div>
                  </div>
                  
                  <div className="relative bg-white/60 dark:bg-neutral-700/50 backdrop-blur-xl p-6 rounded-2xl border border-white/30 dark:border-neutral-600/30 shadow-lg hover:shadow-xl transition-all duration-500 group overflow-hidden">
                    {/* Glassmorphism Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent dark:from-neutral-700/20 dark:via-neutral-700/10 dark:to-transparent rounded-2xl"></div>
                    
                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-secondary-500/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-secondary-500/20 to-primary-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-secondary-500/30">
                          <MapPin className="w-5 h-5 text-secondary-600 dark:text-secondary-400 group-hover:scale-110 transition-all duration-500" />
                        </div>
                        <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">{t('location')}</span>
                      </div>
                      <p className="text-black dark:text-white font-bold group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-all duration-500">{events[selectedEvent].location}</p>
                    </div>
                  </div>
                  
                  <div className="relative bg-white/60 dark:bg-neutral-700/50 backdrop-blur-xl p-6 rounded-2xl border border-white/30 dark:border-neutral-600/30 shadow-lg hover:shadow-xl transition-all duration-500 group overflow-hidden">
                    {/* Glassmorphism Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent dark:from-neutral-700/20 dark:via-neutral-700/10 dark:to-transparent rounded-2xl"></div>
                    
                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-primary-500/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-primary-500/30">
                          <Users className="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-all duration-500" />
                        </div>
                        <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">{t('participants')}</span>
                      </div>
                      <p className="text-black dark:text-white font-bold group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-all duration-500">{events[selectedEvent].participants}</p>
                    </div>
                  </div>
                  
                  <div className="relative bg-white/60 dark:bg-neutral-700/50 backdrop-blur-xl p-6 rounded-2xl border border-white/30 dark:border-neutral-600/30 shadow-lg hover:shadow-xl transition-all duration-500 group overflow-hidden">
                    {/* Glassmorphism Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent dark:from-neutral-700/20 dark:via-neutral-700/10 dark:to-transparent rounded-2xl"></div>
                    
                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-secondary-500/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-secondary-500/20 to-primary-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-secondary-500/30">
                          <Calendar className="w-5 h-5 text-secondary-600 dark:text-secondary-400 group-hover:scale-110 transition-all duration-500" />
                        </div>
                        <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">{t('duration')}</span>
                      </div>
                      <p className="text-black dark:text-white font-bold group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-all duration-500">{events[selectedEvent].duration}</p>
                    </div>
                  </div>
                </div>

                {/* External Link */}
                {events[selectedEvent].link && (
                  <div className="pt-6 border-t border-neutral-200/50 dark:border-neutral-700/50">
                    <a
                      href={events[selectedEvent].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-2xl font-semibold hover:shadow-xl hover:shadow-primary-500/30 dark:hover:shadow-primary-400/30 transition-all duration-500 hover:scale-105 hover:-translate-y-1 group relative overflow-hidden"
                    >
                      {/* Background Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Corner Accent */}
                      <div className="absolute top-0 right-0 w-6 h-6 bg-gradient-to-bl from-white/30 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      
                      <ExternalLink className="w-5 h-5 relative z-10 group-hover:scale-110 group-hover:translate-x-1 transition-all duration-500" />
                      <span className="relative z-10">{t('view_details')}</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Events 