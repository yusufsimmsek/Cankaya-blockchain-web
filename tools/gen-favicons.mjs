import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import pngToIco from 'png-to-ico'

const root = process.cwd()
const srcImage = path.join(root, 'src', 'assets', '3.png')

const targets = [
  // public
  { w: 16, h: 16, out: path.join(root, 'public', 'favicon-16x16.png') },
  { w: 32, h: 32, out: path.join(root, 'public', 'favicon-32x32.png') },
  { w: 180, h: 180, out: path.join(root, 'public', 'apple-touch-icon.png') },
  { w: 192, h: 192, out: path.join(root, 'public', 'android-chrome-192x192.png') },
  { w: 512, h: 512, out: path.join(root, 'public', 'android-chrome-512x512.png') },
  // docs
  { w: 16, h: 16, out: path.join(root, 'docs', 'favicon-16x16.png') },
  { w: 32, h: 32, out: path.join(root, 'docs', 'favicon-32x32.png') },
  { w: 180, h: 180, out: path.join(root, 'docs', 'apple-touch-icon.png') },
  { w: 192, h: 192, out: path.join(root, 'docs', 'android-chrome-192x192.png') },
  { w: 512, h: 512, out: path.join(root, 'docs', 'android-chrome-512x512.png') }
]

const ogTargets = [
  { w: 1200, h: 630, out: path.join(root, 'public', 'og-image.jpg') },
  { w: 1200, h: 630, out: path.join(root, 'docs', 'og-image.jpg') }
]

async function ensureDir(filePath) {
  const dir = path.dirname(filePath)
  await fs.promises.mkdir(dir, { recursive: true })
}

async function generate() {
  if (!fs.existsSync(srcImage)) {
    console.error('Kaynak görsel bulunamadı:', srcImage)
    process.exit(1)
  }

  const src = sharp(srcImage)
  for (const t of targets) {
    await ensureDir(t.out)
    await src
      .resize(t.w, t.h, { fit: 'cover' })
      .png({ quality: 90 })
      .toFile(t.out)
    console.log('✓', path.relative(root, t.out))
  }
  // Generate Open Graph images (1200x630)
  for (const t of ogTargets) {
    await ensureDir(t.out)
    await sharp(srcImage)
      .resize(t.w, t.h, { fit: 'contain', background: { r: 10, g: 15, b: 26, alpha: 1 } })
      .flatten({ background: { r: 10, g: 15, b: 26 } })
      .jpeg({ quality: 85 })
      .toFile(t.out)
    console.log('✓', path.relative(root, t.out))
  }
  console.log('Favicons güncellendi.')

  // Generate root-level favicon.ico for crawlers (Google, legacy)
  try {
    const icoBuffer = await pngToIco([
      path.join(root, 'public', 'favicon-16x16.png'),
      path.join(root, 'public', 'favicon-32x32.png')
    ])
    await fs.promises.writeFile(path.join(root, 'public', 'favicon.ico'), icoBuffer)
    await fs.promises.writeFile(path.join(root, 'docs', 'favicon.ico'), icoBuffer)
    console.log('✓ public/favicon.ico')
    console.log('✓ docs/favicon.ico')
  } catch (e) {
    console.warn('favicon.ico üretimi başarısız:', e?.message)
  }
}

generate().catch(err => {
  console.error(err)
  process.exit(1)
})


