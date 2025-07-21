# Çankaya Blockchain Topluluğu - Web Sitesi

> Çankaya Üniversitesi Blockchain Topluluğu'nun resmi web sitesi. 2021'den beri blockchain, Web3, DeFi ve NFT alanlarında eğitimler, etkinlikler ve topluluk buluşmaları düzenliyoruz.

## 🚀 Canlı Demo

- **Production:** [https://cankayablockchain.com](https://cankayablockchain.com)
- **Staging:** [https://staging.cankayablockchain.com](https://staging.cankayablockchain.com)

## 📋 Özellikler

- ✨ Modern ve responsive tasarım
- 🎨 Glassmorphism ve 3D animasyonlar
- 🌙 Dark mode desteği
- 📱 PWA (Progressive Web App) uyumlu
- 🔍 SEO optimize edilmiş
- ⚡ Vite ile hızlı geliştirme
- 🔒 Güvenlik header'ları
- 📊 Performance monitoring
- 🌐 Multi-platform deployment

## 🛠️ Teknolojiler

- **Frontend:** React 18 + TypeScript
- **Build Tool:** Vite 4
- **Styling:** Tailwind CSS 3
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Deployment:** Vercel / Netlify

## 🚦 Başlangıç

### Gereksinimler

- Node.js 18+ 
- npm 9+ veya yarn

### Kurulum

```bash
# Repository'yi klonlayın
git clone https://github.com/cankayablockchain/web.git
cd web

# Bağımlılıkları yükleyin
npm install

# Development server'ı başlatın
npm run dev
```

### Environment Variables

Environment variables dosyalarını oluşturun:

```bash
# .env (development)
VITE_SITE_URL=http://localhost:3000
VITE_ENABLE_ANALYTICS=false

# .env.production (production)
VITE_SITE_URL=https://cankayablockchain.com
VITE_ENABLE_ANALYTICS=true
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
```

## 📦 Build ve Deployment

### Development

```bash
npm run dev          # Development server başlat
npm run preview      # Production preview
```

### Production Build

```bash
npm run build:prod   # Production build
npm run preview:prod # Production preview
```

### Type Checking & Linting

```bash
npm run type-check   # TypeScript kontrolü
npm run lint         # ESLint kontrolü
npm run lint:fix     # ESLint otomatik düzeltme
```

### Bundle Analysis

```bash
npm run analyze      # Bundle boyutunu analiz et
```

## 🌐 Deployment

### Vercel Deployment

```bash
# Manuel deployment
npm run deploy:vercel

# Veya Vercel CLI ile
vercel --prod
```

### Netlify Deployment

```bash
# Manuel deployment
npm run deploy:netlify

# Veya Netlify CLI ile
netlify deploy --prod
```

### Git-based Deployment

Her iki platform da Git integration destekler:

1. Repository'yi platform hesabınıza bağlayın
2. `main` branch'i production için seçin
3. Build command: `npm run build:prod`
4. Publish directory: `dist`

## 📁 Proje Yapısı

```
├── public/                 # Static assets
│   ├── manifest.json      # PWA manifest
│   ├── robots.txt         # SEO robots file
│   ├── sitemap.xml        # SEO sitemap
│   └── browserconfig.xml  # Microsoft tile config
├── src/
│   ├── assets/            # Images, fonts, etc.
│   ├── components/        # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Events.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Partners.tsx
│   │   └── Projects.tsx
│   ├── contexts/          # React contexts
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # App entry point
│   └── index.css         # Global styles
├── vercel.json           # Vercel configuration
├── netlify.toml          # Netlify configuration
├── vite.config.ts        # Vite configuration
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies & scripts
```

## 🔧 Konfigürasyon

### Vite Configuration

- Chunk splitting for optimal loading
- Asset optimization
- TypeScript path aliases
- Environment variable handling

### Security Headers

- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

### Performance Optimizations

- Static asset caching (1 year)
- Gzip/Brotli compression
- Code splitting
- Tree shaking
- Bundle size warnings

## 📱 PWA Features

- Offline capability
- App shortcuts
- Installable
- Custom splash screen
- Theme customization

## 🔍 SEO Optimizations

- Meta tags (Open Graph, Twitter Cards)
- Structured data (JSON-LD)
- Sitemap.xml
- Robots.txt
- Canonical URLs

## 🚨 Error Handling

Production ortamında error boundary ve monitoring:

- Graceful error handling
- User-friendly error messages
- Error reporting (opsiyonel)

## 📊 Analytics

Google Analytics 4 entegrasyonu (production):

```javascript
// Analytics configuration
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
```

## 🤝 Katkıda Bulunma

1. Repository'yi fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 📞 İletişim

- Website: [https://cankayablockchain.com](https://cankayablockchain.com)
- Twitter: [@cankayachain](https://twitter.com/cankayachain)
- Instagram: [@cankayablockchain](https://instagram.com/cankayablockchain)
- LinkedIn: [Çankaya Blockchain](https://linkedin.com/company/cankayablockchain)
- Email: info@cankayablockchain.com

## 🌟 Destek

Bu projeyi beğendiyseniz lütfen ⭐ verin!

---

**© 2024 Çankaya Blockchain Topluluğu. Tüm hakları saklıdır.**
