# Çankaya Blockchain Web - Deployment Guide

Bu guide projeyi production ortamına deploy etmek için gerekli adımları içerir.

## 🚀 Hızlı Deployment

### Vercel (Önerilen)

1. **GitHub'a Push**
   ```bash
   git add .
   git commit -m "Production ready deployment"
   git push origin main
   ```

2. **Vercel Dashboard**
   - [vercel.com](https://vercel.com) hesabına giriş yapın
   - "New Project" → GitHub repository'yi seçin
   - Build settings otomatik algılanacak:
     - Framework: Vite
     - Build Command: `npm run build:prod`
     - Output Directory: `dist`
   - Deploy butonuna tıklayın

3. **Custom Domain (Opsiyonel)**
   - Vercel dashboard → Settings → Domains
   - `cankayablockchain.com` domain'ini ekleyin

### Netlify

1. **GitHub'a Push** (yukarıdaki gibi)

2. **Netlify Dashboard**
   - [netlify.com](https://netlify.com) hesabına giriş yapın
   - "New site from Git" → GitHub repository
   - Build settings:
     - Build command: `npm run build:prod`
     - Publish directory: `dist`
   - Deploy site

3. **Custom Domain**
   - Site Settings → Domain management → Add custom domain

## 🔧 Manuel Deployment

### Build ve Upload

```bash
# Dependencies yükle
npm install

# Production build
npm run build:prod

# dist/ klasörünü hosting providerına upload edin
```

### FTP/SFTP Upload

```bash
# Build dosyalarını oluştur
npm run build:prod

# dist/ klasörünün içeriğini web server'ın root directory'sine upload et
# Örnek: public_html/, www/, htdocs/
```

## 🌍 Environment Variables

### Production Environment

Aşağıdaki environment variables'ları platform dashboard'unda ayarlayın:

```env
# Site Configuration
VITE_SITE_URL=https://cankayablockchain.com
VITE_SITE_NAME="Çankaya Blockchain"

# Analytics
VITE_ENABLE_ANALYTICS=true
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# Contact
VITE_EMAIL=info@cankayablockchain.com

# Features
VITE_ENABLE_PWA=true
VITE_ENABLE_SERVICE_WORKER=true
```

### Staging Environment

```env
# Site Configuration
VITE_SITE_URL=https://staging.cankayablockchain.com
VITE_SITE_NAME="Çankaya Blockchain [STAGING]"

# Analytics
VITE_ENABLE_ANALYTICS=true
VITE_GA_TRACKING_ID=G-STAGING-XXXX

# Debug
VITE_DEBUG_MODE=true
```

## 🔍 Pre-Deployment Checklist

- [ ] `npm run build:prod` çalışıyor
- [ ] `npm run preview:prod` test edildi
- [ ] Environment variables ayarlandı
- [ ] Domain/SSL sertifikası hazır
- [ ] Google Analytics kuruldu
- [ ] Favicon/manifest dosyaları mevcut
- [ ] Meta tags kontrol edildi
- [ ] Performance test yapıldı

## 📊 Post-Deployment Verification

### SEO & Performance

```bash
# Google PageSpeed Insights
https://pagespeed.web.dev/analysis?url=https://cankayablockchain.com

# GTmetrix
https://gtmetrix.com/

# Google Search Console
https://search.google.com/search-console
```

### PWA Checklist

```bash
# Chrome DevTools → Lighthouse → Progressive Web App
# Tüm PWA kriterleri yeşil olmalı:
- [ ] Web App Manifest
- [ ] Service Worker
- [ ] HTTPS
- [ ] Responsive Design
- [ ] Fast Loading
```

## 🔄 CI/CD Pipeline (Gelişmiş)

### GitHub Actions (.github/workflows/deploy.yml)

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm run type-check
    
    - name: Build
      run: npm run build:prod
      env:
        VITE_GA_TRACKING_ID: ${{ secrets.GA_TRACKING_ID }}
    
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        vercel-args: '--prod'
```

## 🚨 Troubleshooting

### Build Hataları

```bash
# TypeScript hataları
npm run type-check

# Linting hataları
npm run lint

# Dependencies problemleri
rm -rf node_modules package-lock.json
npm install
```

### Runtime Hataları

1. **Console Errors**: Chrome DevTools → Console
2. **Network Issues**: Chrome DevTools → Network
3. **Performance**: Chrome DevTools → Lighthouse

### Domain/SSL Problemleri

1. **DNS**: `nslookup cankayablockchain.com`
2. **SSL**: `openssl s_client -connect cankayablockchain.com:443`
3. **Redirects**: `curl -I https://cankayablockchain.com`

## 📞 Destek

Deployment sorunları için:
- GitHub Issues: [Repository Issues](https://github.com/cankayablockchain/web/issues)
- Email: info@cankayablockchain.com
- Discord: [Çankaya Blockchain Discord]

---

**Son güncelleme:** 2024-01-15  
**Sürüm:** 1.0.0 