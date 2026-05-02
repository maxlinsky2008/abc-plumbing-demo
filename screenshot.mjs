import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const url   = process.argv[2];
const label = process.argv[3] || '';

if (!url) {
  console.error('Usage: node screenshot.mjs <url> [label]');
  process.exit(1);
}

const outDir = path.join(__dirname, 'temporary screenshots');
fs.mkdirSync(outDir, { recursive: true });

const existing = fs.readdirSync(outDir).filter(f => /^screenshot-\d+/.test(f));
const maxN = existing.reduce((m, f) => {
  const n = parseInt(f.match(/^screenshot-(\d+)/)?.[1] ?? '0', 10);
  return Math.max(m, n);
}, 0);

const filename = label ? `screenshot-${maxN + 1}-${label}.png` : `screenshot-${maxN + 1}.png`;
const outPath  = path.join(outDir, filename);

const browser = await puppeteer.launch({ headless: true });
const page    = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle2' });
await page.screenshot({ path: outPath, fullPage: true });
await browser.close();

console.log(`Saved: ${outPath}`);
