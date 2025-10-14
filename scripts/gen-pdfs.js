import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';

const handouts = [
  'public/learn/handouts/quantum-touch.html',
  'public/learn/handouts/quantum-principles.html',
];

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  try {
    for (const file of handouts) {
      const htmlPath = path.resolve(file);
      if (!fs.existsSync(htmlPath)) {
        console.error('Missing handout:', htmlPath);
        continue;
      }
      const url = 'file://' + htmlPath;
      const page = await browser.newPage();
      await page.goto(url, { waitUntil: 'networkidle0' });
      const out = htmlPath.replace(/\.html$/, '.pdf');
      await page.pdf({ path: out, format: 'A4', printBackground: true });
      console.log('Wrote', out);
      await page.close();
    }
  } catch (err) {
    console.error(err);
  } finally {
    await browser.close();
  }
})();
