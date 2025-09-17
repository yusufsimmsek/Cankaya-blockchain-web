import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react'

type Language = 'tr' | 'en'

type Translations = Record<string, { tr: string; en: string }>

const translations: Translations = {
  nav_about: { tr: 'Hakkımızda', en: 'About Us' },
  nav_events: { tr: 'Etkinlikler', en: 'Events' },
  nav_partners: { tr: 'Ortaklıklar', en: 'Partnerships' },
  nav_projects: { tr: 'Projeler', en: 'Projects' },
  nav_contact: { tr: 'İletişim', en: 'Contact' },
  hero_title_1: { tr: 'Çankaya ', en: 'Cankaya ' },
  hero_title_2: { tr: 'Blockchain Topluluğu & Labs', en: 'Blockchain Community & Labs' },
  hero_desc: { tr: "Çankaya Blockchain Topluluğu - 2021'den bu yana Ankara'da blockchain teknolojilerini öğreten, projeler geliştiren ve ekosisteme nitelikli bireyler kazandıran lider topluluğuz.", en: "Cankaya Blockchain Community & Labs - Since 2021 in Ankara, we teach blockchain technologies, build projects, and contribute qualified individuals to the ecosystem." },
  hero_stat_foundation: { tr: 'Kuruluş Yılı', en: 'Founded' },
  hero_stat_projects: { tr: 'Büyük Proje', en: 'Major Projects' },
  hero_stat_events: { tr: 'Etkinlik', en: 'Events' },
  hero_btn_projects: { tr: 'Projelerimizi İncele', en: 'Explore Our Projects' },
  hero_btn_github: { tr: "GitHub'da Keşfet", en: 'Explore on GitHub' },
  events_title: { tr: 'Etkinlikler & Eğitimler', en: 'Events & Trainings' },
  events_subtitle: { tr: "Çankaya Blockchain Topluluğu olarak 2021'den beri düzenlediğimiz etkinlikler ve katıldığımız zirvelerle blockchain ekosisteminde aktif rol oynuyoruz.", en: 'As Cankaya Blockchain Community & Labs, since 2021, we have actively taken part in the blockchain ecosystem with events and summits.' },
  events_more: { tr: 'Daha Fazla Etkinlik', en: 'More Events' },
  events_less: { tr: 'Daha Az Göster', en: 'Show Less' },
  img_soon_h: { tr: 'Görseller Yakında', en: 'Images Coming Soon' },
  img_soon_p: { tr: 'Bu etkinliğin görselleri yakında eklenecek', en: 'Images for this event will be added soon' },
  event_details: { tr: 'Etkinlik Detayları', en: 'Event Details' },
  date: { tr: 'Tarih', en: 'Date' },
  location: { tr: 'Konum', en: 'Location' },
  participants: { tr: 'Katılımcı', en: 'Participants' },
  duration: { tr: 'Süre', en: 'Duration' },
  view_details: { tr: 'Detayları Görüntüle', en: 'View Details' },
  education_activities: { tr: 'Eğitim Faaliyetleri', en: 'Education Activities' },
  education_sub: { tr: 'Blockchain ekosisteminde eğitim ve gelişim odaklı faaliyetlerimiz', en: 'Our education and development focused activities in the blockchain ecosystem' },
  partners_title: { tr: 'Sektör İşbirlikleri', en: 'Industry Collaborations' },
  partners_p: { tr: 'Çankaya Blockchain Topluluğu olarak blockchain ekosisteminin önde gelen kuruluşları ve topluluklarıyla stratejik ortaklıklar kurarak büyümeye devam ediyoruz.', en: 'As Cankaya Blockchain Community & Labs, we continue to grow by forming strategic partnerships with leading organizations and communities in the blockchain ecosystem.' },
  our_partners: { tr: 'Ortaklarımız', en: 'Our Partners' },
  trusted_partnerships: { tr: 'Güvenilir Ortaklıklar', en: 'Trusted Partnerships' },
  leading_orgs: { tr: 'Blockchain ekosisteminin önde gelen kuruluşları', en: 'Leading organizations of the blockchain ecosystem' },
  show_less: { tr: 'Daha az göster', en: 'Show less' },
  contact_cta_h: { tr: 'Bizimle Ortaklık Kurmak İster misiniz?', en: 'Want to Partner with Us?' },
  contact_cta_p: { tr: 'Çankaya Blockchain Topluluğu ile blockchain ekosisteminde birlikte değer yaratmak ve geleceği şekillendirmek için iletişime geçin.', en: 'Get in touch with Cankaya Blockchain Community & Labs to create value together and shape the future in the blockchain ecosystem.' },
  contact_cta_btn: { tr: 'İletişime Geç', en: 'Contact Us' },
  projects_title: { tr: 'Ödüllü Projelerimiz', en: 'Our Award-Winning Projects' },
  projects_p: { tr: "Çankaya Blockchain Topluluğu olarak hackathon'larda ödül kazanan ve ekosisteme değer katan projelerimizle blockchain teknolojilerinin gerçek hayat uygulamalarını geliştiriyoruz.", en: 'As Cankaya Blockchain Community & Labs, with award-winning projects, we develop real-life applications of blockchain technologies.' },
  featured: { tr: 'Öne Çıkan', en: 'Featured' },
  awards_count: { tr: 'Ödüllü Proje', en: 'Awarded Projects' },
  total_prize: { tr: 'Toplam Ödül', en: 'Total Prize' },
  hackathon: { tr: 'Hackathon', en: 'Hackathons' },
  more_projects: { tr: 'Daha Fazla Proje', en: 'More Projects' },
  more_projects_p: { tr: 'GitHub hesabımızda daha fazla açık kaynak projemizi keşfedin ve toplulukla birlikte geliştirme sürecine katılın.', en: 'Discover more open-source projects on our GitHub and join development with the community.' },
  view_on_github: { tr: "GitHub'da İncele", en: 'View on GitHub' },
  about_heading_1: { tr: 'Blockchain Dünyasında ', en: 'In the Blockchain World ' },
  about_heading_2: { tr: 'Öncüyüz', en: 'We Lead' },
  skills: { tr: 'Yeteneklerimiz', en: 'Our Skills' },
  skills_p: { tr: 'Dinamik ekibimizle yapabildiklerimiz', en: 'What we can do with our dynamic team' },
  mission: { tr: 'Misyonumuz', en: 'Our Mission' },
  mission_p: { tr: "Blockchain teknolojilerine ilgi duyan öğrencileri bir araya getirerek eğitim, proje ve etkinliklerle ekosisteme nitelikli bireyler kazandırmak ve Türkiye'deki blockchain ekosisteminin gelişimine katkıda bulunmak.", en: 'Bring together students interested in blockchain and contribute to the ecosystem with education, projects, and events.' },
  vision: { tr: 'Vizyonumuz', en: 'Our Vision' },
  vision_p: { tr: "Teknik bilgi birikimi, proje deneyimi ve geniş sektör ağıyla Türkiye'deki üniversiteler arası blockchain ekosisteminde öncü rolümüzü sürdürmek ve geleceği yazmak isteyenlerle blokzincirde buluşmak.", en: 'Maintain our leading role in the inter-university blockchain ecosystem with technical know-how and projects, and meet those who want to build the future on-chain.' },
  contact_title: { tr: 'Bize Ulaşın', en: 'Contact Us' },
  contact_p: { tr: 'Bizimle iletişime geçin. Sorularınız, işbirliği teklifleriniz veya topluluğa katılmak istiyorsanız her zaman açığız.', en: 'Get in touch with us. We are open to questions, partnership offers, and new members.' },
  address: { tr: 'Adres', en: 'Address' },
  ankara_turkey: { tr: 'Ankara, Türkiye', en: 'Ankara, Turkey' },
  email: { tr: 'E-posta', en: 'Email' },
  click_to_email: { tr: 'E-posta göndermek için tıklayın', en: 'Click to send email' },
  social_media: { tr: 'Sosyal Medya', en: 'Social Media' },
  footer_brand_p: { tr: "Çankaya Blockchain Topluluğu - 2021'den beri Ankara'da blockchain teknolojilerini öğreten, projeler geliştiren ve ekosisteme nitelikli bireyler kazandıran öncü topluluk.", en: 'Cankaya Blockchain Community & Labs - Since 2021 in Ankara, we teach blockchain, build projects, and contribute skilled people to the ecosystem.' },
  quick_links: { tr: 'Hızlı Linkler', en: 'Quick Links' },
  footer_contact: { tr: 'İletişim', en: 'Contact' },
  copyright: { tr: '© 2025 Çankaya Blockchain Topluluğu. Tüm hakları saklıdır.', en: '© 2025 Cankaya Blockchain Community & Labs. All rights reserved.' },
  footer_stats_events: { tr: 'Etkinlik', en: 'Events' },
  footer_stats_members: { tr: 'Üye', en: 'Members' },
  footer_stats_awards: { tr: 'Ödül', en: 'Awards' },
  footer_stats_projects: { tr: 'Proje', en: 'Projects' },
  error_title: { tr: 'Bir Hata Oluştu', en: 'An Error Occurred' },
  error_p: { tr: 'Üzgünüz, beklenmeyen bir hata oluştu. Lütfen sayfayı yenilemeyi deneyin veya ana sayfaya dönün.', en: 'Sorry, an unexpected error occurred. Please refresh the page or go home.' },
  error_details_dev: { tr: 'Hata Detayları (Geliştirici Modu)', en: 'Error Details (Developer Mode)' },
  refresh_page: { tr: 'Sayfayı Yenile', en: 'Refresh Page' },
  home: { tr: 'Ana Sayfa', en: 'Home' },
  support_p: { tr: 'Sorun devam ederse, lütfen', en: 'If the issue persists, please contact us at' },
  ibw2025_title: { tr: 'Istanbul Blockchain Week 2025', en: 'Istanbul Blockchain Week 2025' },
  partners_stat_exchanges: { tr: 'Borsa Ortağı', en: 'Exchange Partners' },
  partners_stat_ecosystem: { tr: 'Ekosistem Partneri', en: 'Ecosystem Partners' },
  partners_stat_community: { tr: 'Topluluk Ortağı', en: 'Community Partners' },
  partners_stat_education: { tr: 'Eğitim Ortağı', en: 'Education Partners' },
  partners_cat_exchanges: { tr: 'Borsalar & Platformlar', en: 'Exchanges & Platforms' },
  partners_cat_ecosystem: { tr: 'Ekosistem Partnerlikleri', en: 'Ecosystem Partnerships' },
  partners_cat_community: { tr: 'Topluluk Ortaklıkları', en: 'Community Partnerships' },
  partners_cat_education: { tr: 'Eğitim Ortaklıkları', en: 'Education Partnerships' },
  about_stat1_title: { tr: 'Türkiye Geneli', en: 'Nationwide' },
  about_stat1_desc: { tr: 'Blockchain topluluğu', en: 'Blockchain community' },
  about_stat1_value: { tr: 'İlk 10', en: 'Top 10' },
  about_stat2_title: { tr: 'Kuruluş', en: 'Founded' },
  about_stat2_desc: { tr: '11 Kasım tarihinde', en: 'On November 11' },
  about_stat3_title: { tr: '100+ İş Birliği', en: '100+ Partnerships' },
  about_stat3_desc: { tr: 'Kurumsal partnerlik', en: 'Corporate partnerships' },
  about_stat4_title: { tr: '500+ Aktif Üye', en: '500+ Active Members' },
  about_stat4_desc: { tr: 'Topluluk etkileşimi', en: 'Community engagement' },
  tech_event_title: { tr: 'Etkinlik Düzenleme', en: 'Event Organization' },
  tech_event_desc: { tr: 'Konferanslar & Seminerler', en: 'Conferences & Seminars' },
  tech_edu_title: { tr: 'Eğitim', en: 'Education' },
  tech_edu_desc: { tr: 'Workshop & Atölyeler', en: 'Workshops & Bootcamps' },
  tech_marketing_title: { tr: 'Pazarlama', en: 'Marketing' },
  tech_marketing_desc: { tr: 'Marka & İletişim', en: 'Brand & Communications' },
  tech_dev_title: { tr: 'Blockchain Geliştirme', en: 'Blockchain Development' },
  tech_dev_desc: { tr: 'Smart Contracts & DApps', en: 'Smart Contracts & DApps' },
  tech_community_title: { tr: 'Topluluk Yönetimi', en: 'Community Management' },
  tech_community_desc: { tr: 'Üye & İletişim', en: 'Members & Communication' },
  tech_social_title: { tr: 'Sosyal Medya Yönetimi', en: 'Social Media Management' },
  tech_social_desc: { tr: 'Platform & İçerik', en: 'Platforms & Content' },
  tech_content_title: { tr: 'İçerik Üretimi', en: 'Content Production' },
  tech_content_desc: { tr: 'Blog & Video İçerik', en: 'Blog & Video Content' },
  tech_strategy_title: { tr: 'Stratejik Planlama', en: 'Strategic Planning' },
  tech_strategy_desc: { tr: 'Uzun Vadeli Gelişim', en: 'Long-term Growth' },
  ea1: { tr: 'Blockchain 101 Seminerleri', en: 'Blockchain 101 Seminars' },
  ea2: { tr: 'Education Summit Serileri', en: 'Education Summit Series' },
  ea3: { tr: 'Anadolu Blockchain Zirveleri', en: 'Anatolian Blockchain Summits' },
  ea4: { tr: 'Solidity Atölyeleri', en: 'Solidity Workshops' },
  ea5: { tr: 'Akıllı Sözleşmeler Eğitimi', en: 'Smart Contracts Training' },
  ea6: { tr: "DeFi Workshop'ları", en: 'DeFi Workshops' },
  ea7: { tr: 'Web3 Hukuku Seminerleri', en: 'Web3 Law Seminars' },
  ea8: { tr: 'Online Eğitim İçerikleri', en: 'Online Education Content' },
  proj1_title: { tr: 'Çankaya Üniversitesi 25. Yıl NFT Koleksiyonu', en: 'Cankaya University 25th Anniversary NFT Collection' },
  proj1_desc: { tr: "İlk defa bir üniversite adına yayımlanan NFT serisi. OpenSea üzerinden yayımlandı ve kampüste fiziksel sergisi yapıldı.", en: 'The first NFT series published on behalf of a university. Released on OpenSea and physically exhibited on campus.' },
  proj1_a1: { tr: "İlk Üniversite NFT'si", en: 'First University NFT' },
  proj1_a2: { tr: "OpenSea'de Yayımlandı", en: 'Published on OpenSea' },
  proj1_a3: { tr: 'Fiziksel Sergi', en: 'Physical Exhibition' },
  proj2_title: { tr: "Üniversite Token'ı (ÇankayaToken)", en: 'University Token (CankayaToken)' },
  proj2_desc: { tr: "Türkiye'de bir ilk. 25 milyon arzla yayımlandı. Kampüs içi ödüllendirme ve kullanım senaryolarına sahiptir.", en: 'A first in Turkey. Issued with a supply of 25 million. Has on-campus reward and usage scenarios.' },
  proj2_a1: { tr: '25M Token Arzı', en: '25M Token Supply' },
  proj2_a2: { tr: "Türkiye'de ilk", en: 'First in Turkey' },
  proj2_a3: { tr: 'Kampüs Kullanımı', en: 'Campus Usage' },
  proj2_a4: { tr: 'Pilot Proje', en: 'Pilot Project' },
  proj3_title: { tr: 'Gatecon Web3 Oyun Platformu', en: 'Gatecon Web3 Gaming Platform' },
  proj3_desc: { tr: "HackJuno 2023'te GameFi kategorisi 1.'si. Web2 oyuncularını Web3'e adapte etmeye yönelik dApp.", en: 'GameFi winner at HackJuno 2023. A dApp to onboard Web2 gamers to Web3.' },
  proj3_a1: { tr: "HackJuno 1.'si", en: 'HackJuno Winner' },
  proj3_a2: { tr: '5.000 Juno Ödül', en: '5,000 Juno Prize' },
  proj3_a3: { tr: 'GameFi Platformu', en: 'GameFi Platform' },
  proj4_title: { tr: 'Merkeziyetsiz NFT Platformu', en: 'Decentralized NFT Platform' },
  proj4_desc: { tr: "Google Cloud & Bitci Hackathon'unda ikincilik kazanan proje. Merkeziyetsiz NFT ticaret platformu.", en: 'Runner-up at Google Cloud & Bitci Hackathon. A decentralized NFT trading platform.' },
  proj4_a1: { tr: "Hackathon 2.'si", en: 'Hackathon Runner-up' },
  proj4_a2: { tr: '15.000 ₺ Ödül', en: '₺15,000 Prize' },
  proj4_a3: { tr: 'Google Cloud', en: 'Google Cloud' },
}

type I18nContextType = {
  lang: Language
  setLang: (l: Language) => void
  t: (key: keyof typeof translations) => string
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    const stored = localStorage.getItem('lang') as Language | null
    return stored || 'en'
  })

  const setLang = (l: Language) => {
    setLangState(l)
    localStorage.setItem('lang', l)
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const t = useMemo(() => {
    return (key: keyof typeof translations) => translations[key][lang]
  }, [lang])

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return ctx
}


