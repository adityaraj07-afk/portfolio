import QRCode from 'qrcode';
import { mkdirSync, writeFileSync } from 'node:fs';

const TARGET_URL = 'https://github.com/adityaraj07-afk/portfolio';
const OUT_DIR = 'public/assets';

mkdirSync(OUT_DIR, { recursive: true });

async function generate() {
  console.log(`Generating QR code for: ${TARGET_URL}`);

  // 1. High-resolution PNG (Crisp 1024x1024, white background, black modules, high error correction)
  await QRCode.toFile(`${OUT_DIR}/portfolio-qr.png`, TARGET_URL, {
    errorCorrectionLevel: 'H',
    type: 'png',
    width: 1024,
    margin: 2,
    color: {
      dark: '#000000',
      light: '#ffffff',
    },
  });
  console.log(`✓ Generated ${OUT_DIR}/portfolio-qr.png (1024x1024)`);

  // 2. Vector SVG (Scalable to any size without loss of quality)
  const svgString = await QRCode.toString(TARGET_URL, {
    errorCorrectionLevel: 'H',
    type: 'svg',
    margin: 2,
    color: {
      dark: '#000000',
      light: '#ffffff',
    },
  });
  writeFileSync(`${OUT_DIR}/portfolio-qr.svg`, svgString, 'utf-8');
  console.log(`✓ Generated ${OUT_DIR}/portfolio-qr.svg`);

  // 3. Cinematic Dark-Themed PNG (Matching portfolio theme: #0a0a0c dark bg, crisp white modules)
  await QRCode.toFile(`${OUT_DIR}/portfolio-qr-dark.png`, TARGET_URL, {
    errorCorrectionLevel: 'H',
    type: 'png',
    width: 1024,
    margin: 2,
    color: {
      dark: '#ffffff',
      light: '#0a0a0c',
    },
  });
  console.log(`✓ Generated ${OUT_DIR}/portfolio-qr-dark.png`);

  // 4. Terminal string preview
  const terminalQR = await QRCode.toString(TARGET_URL, {
    type: 'terminal',
    small: true,
  });
  console.log('\nTerminal QR Preview:\n');
  console.log(terminalQR);
}

generate().catch(console.error);
