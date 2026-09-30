// Рисует картинку лендинга для каждого языка и пересчитывает координаты кликабельных зон.
//   cd design && npm install && npm run render
// Результат: ../public/landing-<lang>.webp и ../config/landing.ts (перезаписывается целиком).
// Тексты — в texts.json, дизайн — в poster.html.

import { chromium } from 'playwright';
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const texts = JSON.parse(fs.readFileSync(path.join(here, 'texts.json'), 'utf8'));
const publicDir = path.join(here, '..', 'public');

const browser = await chromium.launch(process.env.CHROME ? { executablePath: process.env.CHROME } : {});
const page = await browser.newPage({ viewport: { width: 960, height: 1000 }, deviceScaleFactor: 2 });
await page.goto('file://' + path.join(here, 'poster.html'));

const out = {};
for (const [lang, t] of Object.entries(texts)) {
  const data = await page.evaluate(async ({ lang, t }) => {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-t]').forEach((el) => (el.textContent = t[el.dataset.t]));
    document.querySelectorAll('#lang span').forEach((s) => s.classList.toggle('on', s.dataset.l === lang));
    await document.fonts.ready;

    const P = document.getElementById('poster').getBoundingClientRect();
    const r3 = (n) => Math.round(n * 1000) / 1000;
    const pct = (r) => ({
      left: r3(((r.left - P.left) / P.width) * 100),
      top: r3(((r.top - P.top) / P.height) * 100),
      width: r3((r.width / P.width) * 100),
      height: r3((r.height / P.height) * 100),
    });
    // Языковые зоны растягиваем на всё пустое поле над карточкой — проще попасть пальцем.
    const cardTop = document.querySelector('.card').getBoundingClientRect().top;
    const langs = {};
    document.querySelectorAll('#lang span').forEach((s) => {
      const r = s.getBoundingClientRect();
      langs[s.dataset.l] = pct({ left: r.left, top: P.top + 8, width: r.width, height: cardTop - P.top - 16 });
    });
    return {
      langs,
      consultation: pct(document.getElementById('btn-consult').getBoundingClientRect()),
      catalog: pct(document.getElementById('btn-catalog').getBoundingClientRect()),
      alt: [...document.querySelectorAll('[data-t]')].slice(0, 7).map((e) => e.textContent).join(' ') + ' SLIMAX10',
    };
  }, { lang, t });

  await page.waitForTimeout(150);
  const png = await page.locator('#poster').screenshot({ type: 'png' });
  const file = `landing-${lang}.webp`;
  const img = sharp(png);
  const { width, height } = await img.metadata();
  await img.webp({ quality: 88 }).toFile(path.join(publicDir, file));
  out[lang] = { src: `/${file}`, width, height, ...data };
  console.log(lang, `${width}x${height}`, fs.statSync(path.join(publicDir, file)).size, 'bytes');
}
await browser.close();

const ts = `// СГЕНЕРИРОВАНО design/render.mjs — не редактируйте вручную, перезапустите рендер.
// Картинки лендинга по языкам и координаты кликабельных зон (в % от размеров картинки).

import type { Locale } from './site';

export type Zone = { left: number; top: number; width: number; height: number };

export type LandingImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  langs: Record<'pl' | 'cs' | 'sk' | 'en', Zone>;
  consultation: Zone;
  catalog: Zone;
};

export const LANDINGS: Record<Locale, LandingImage> = ${JSON.stringify(out, null, 2)};
`;
fs.writeFileSync(path.join(here, '..', 'config', 'landing.ts'), ts);
console.log('config/landing.ts updated');
