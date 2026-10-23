// Prepares a listing's files for a /work/<slug>/ case study page.
// See docs/work-case-studies.md for the whole workflow.
//
//   node scripts/prep-work-assets.mjs <slug> --photos <dir> [--plans <dir>] [--site <url>]
//
// - Photos are resized to 2000px wide into src/assets/work/<slug>/photos/.
//   Files whose name contains "DJI" go to drone/ instead.
// - Floor plan images are resized to 2400px wide into plans/.
// - --site takes a 1440×900 (1.5x) screenshot of the property website into
//   website/desktop.jpg with headless Chrome.
// - Prints starter `photos` / `drone` / `floorplans` arrays to paste into
//   src/data/work.ts. Captions are left as TODOs; write real ones.
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import sharp from 'sharp';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

const [slug, ...rest] = process.argv.slice(2);
const opt = (name) => {
  const i = rest.indexOf(`--${name}`);
  return i >= 0 ? rest[i + 1] : undefined;
};
if (!slug || !opt('photos')) {
  console.error('Usage: node scripts/prep-work-assets.mjs <slug> --photos <dir> [--plans <dir>] [--site <url>]');
  process.exit(1);
}

const out = path.join('src/assets/work', slug);
const isImage = (f) => /\.(jpe?g|png)$/i.test(f);

async function resizeInto(srcDir, files, destDir, width) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const f of files) {
    const name = f.replace(/\.(png|jpeg)$/i, '.jpg');
    await sharp(path.join(srcDir, f))
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .jpeg({ quality: 84, mozjpeg: true })
      .toFile(path.join(destDir, name));
  }
  return files.map((f) => f.replace(/\.(png|jpeg)$/i, '.jpg'));
}

const photoDir = opt('photos');
const all = fs.readdirSync(photoDir).filter(isImage).sort();
const photos = await resizeInto(photoDir, all.filter((f) => !/DJI/i.test(f)), path.join(out, 'photos'), 2000);
const drone = await resizeInto(photoDir, all.filter((f) => /DJI/i.test(f)), path.join(out, 'drone'), 2000);

let plans = [];
if (opt('plans')) {
  const planDir = opt('plans');
  plans = await resizeInto(planDir, fs.readdirSync(planDir).filter(isImage).sort(), path.join(out, 'plans'), 2400);
}

if (opt('site')) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'nv-shot-'));
  const png = path.join(tmp, 'desktop.png');
  execFileSync(CHROME, [
    '--headless=new', '--disable-gpu', '--hide-scrollbars', `--user-data-dir=${tmp}`,
    '--window-size=1440,900', '--force-device-scale-factor=1.5', '--virtual-time-budget=8000',
    `--screenshot=${png}`, opt('site'),
  ], { stdio: 'ignore' });
  fs.mkdirSync(path.join(out, 'website'), { recursive: true });
  await sharp(png).jpeg({ quality: 85, mozjpeg: true }).toFile(path.join(out, 'website', 'desktop.jpg'));
  console.log(`Screenshot saved. Open ${path.join(out, 'website', 'desktop.jpg')} and check it looks right.`);
}

// The photo grid crops to 3:2 and the drone grid to 4:3; flag anything else
// so it can be checked before it gets cropped.
for (const [folder, files] of [['photos', photos], ['drone', drone]]) {
  for (const f of files) {
    const { width, height } = await sharp(path.join(out, folder, f)).metadata();
    const ratio = width / height;
    if (folder === 'photos' && Math.abs(ratio - 1.5) > 0.02) console.warn(`! ${folder}/${f} is ${width}×${height}, not 3:2`);
    if (folder === 'drone' && Math.abs(ratio - 4 / 3) > 0.02) console.warn(`! ${folder}/${f} is ${width}×${height}, not 4:3`);
  }
}

const list = (files) => files.map((f) => `      { file: '${f}', caption: 'TODO' },`).join('\n');
console.log(`\n    photos: [\n${list(photos)}\n    ],`);
if (drone.length) console.log(`    drone: [\n${list(drone)}\n    ],`);
if (plans.length) console.log(`    floorplans: [\n${plans.map((f) => `      { file: '${f}', label: 'TODO' },`).join('\n')}\n    ],`);
