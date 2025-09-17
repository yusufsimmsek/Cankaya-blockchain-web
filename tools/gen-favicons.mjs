import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

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
  console.log('Favicons güncellendi.')
}

generate().catch(err => {
  console.error(err)
  process.exit(1)
})


