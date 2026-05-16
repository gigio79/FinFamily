const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

const svgIcon = `
<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1e3a5f;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0f172a;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="80" fill="url(#bg)"/>
  <circle cx="256" cy="200" r="80" fill="#22c55e"/>
  <path d="M180 200 L240 260 L340 160" stroke="white" stroke-width="24" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="120" y="320" width="180" height="40" rx="8" fill="#3b82f6"/>
  <rect x="212" y="320" width="180" height="40" rx="8" fill="#8b5cf6"/>
  <text x="256" y="450" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="white" text-anchor="middle">FinFamily</text>
</svg>
`;

async function generateIcons() {
  const svgBuffer = Buffer.from(svgIcon);
  
  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'icon-192.png'));
  
  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'icon-512.png'));
  
  console.log('Icones gerados com sucesso!');
}

generateIcons().catch(console.error);
