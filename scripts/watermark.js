#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Simple CLI: node scripts/watermark.js --src=public --out=public-watermarked --text="Happiness X"
const argv = Object.fromEntries(process.argv.slice(2).map(a=>a.split('=').map(s=>s.replace(/^--/,''))));
const src = argv.src || 'public';
const out = argv.out || 'public-watermarked';
const text = argv.text || 'Happiness X';

if (!fs.existsSync(out)) fs.mkdirSync(out, { recursive: true });

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(d => {
    const p = path.join(dir, d.name);
    if (d.isDirectory()) return walk(p);
    return [p];
  });
}

const imgs = walk(src).filter(p => /\.(jpe?g|png|webp)$/i.test(p));
console.log(`Found ${imgs.length} images in ${src}`);

(async ()=>{
  for (const img of imgs) {
    const rel = path.relative(src, img);
    const outPath = path.join(out, rel);
    const dir = path.dirname(outPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    try {
      const meta = await sharp(img).metadata();
      const svgText = `<svg width="${meta.width}" height="${meta.height}"><style>text{font-family:Arial,sans-serif;fill:rgba(255,255,255,0.6);font-size:${Math.max(14, Math.floor(meta.width/20))}px;}</style><text x="${meta.width-20}" y="${meta.height-20}" text-anchor="end" transform="rotate(-15 ${meta.width-20},${meta.height-20})">${text}</text></svg>`;
      await sharp(img)
        .composite([{ input: Buffer.from(svgText), gravity: 'southeast' }])
        .toFile(outPath);
      console.log('Watermarked', rel);
    } catch (err) {
      console.error('Failed', rel, err.message || err);
    }
  }
})();
