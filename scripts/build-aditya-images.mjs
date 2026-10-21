import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

const src = 'aditya_portrait.jpg';

// Generate responsive webps
for (const w of [1100, 720, 420]) {
  await sharp(src)
    .resize({ width: w })
    .webp({ quality: 90 })
    .toFile(`${OUT}/portrait-${w}.webp`);
}

// Generate social share image (1200x630)
const portrait = await sharp(src).resize({ height: 600 }).png().toBuffer();
await sharp({
  create: { width: 1200, height: 630, channels: 4, background: '#07070a' },
})
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="g" cx="75%" cy="45%" r="50%">
            <stop offset="0" stop-color="#e5132b" stop-opacity="0.4"/>
            <stop offset="60%" stop-color="#7a1020" stop-opacity="0.15"/>
            <stop offset="100%" stop-color="#07070a" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="1200" height="630" fill="url(#g)"/>
      </svg>`),
    },
    { input: portrait, gravity: 'southeast' },
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <text x="72" y="270" font-family="Impact, 'Bebas Neue', Arial, sans-serif" font-size="120" fill="#f4f1ec" letter-spacing="4">ADITYA</text>
        <text x="76" y="325" font-family="Arial, sans-serif" font-weight="700" font-size="28" fill="#ff3d5a" letter-spacing="14">THE SERIES</text>
        <text x="76" y="380" font-family="Arial, sans-serif" font-weight="600" font-size="20" fill="#a7a6ad" letter-spacing="4">FULL STACK DEVELOPER • NEXT.JS</text>
        <text x="76" y="420" font-family="Arial, sans-serif" font-weight="500" font-size="16" fill="#6d6c75" letter-spacing="2">SIH 2026 • COLLIVRA • DSA IN C++</text>
      </svg>`),
    },
  ])
  .jpeg({ quality: 90 })
  .toFile(`${OUT}/og-image.jpg`);

console.log('Aditya images generated successfully!');
