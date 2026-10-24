# Work Case Studies (`/work/<slug>/`)

One page per real listing, showing everything a package produced, deliverable by deliverable. The reference build is [`/work/34-monterra-link/`](https://northvantagemedia.com/work/34-monterra-link/) (Luxury Package, shot for Jennifer Kinch).

**Audience: agents, not buyers.** An agent deciding whether to book should see exactly what they get for the money. That rules out property specs, price, feature lists and "book a showing". The listing is the proof, not the product.

## How It's Built

| Piece | Lives in |
|---|---|
| Template (layout, styles, lightbox) | `src/pages/work/[slug].astro` |
| One entry per listing | `work` array in `src/data/work.ts` |
| Images | `src/assets/work/<slug>/{photos,drone,plans,website}/` |
| Asset prep | `scripts/prep-work-assets.mjs` |
| Hub page (`/work/`) | `src/pages/work/index.astro` |
| Photo viewer | `Lightbox.astro` (shared with the hub) |
| Closing CTA | `FinalCta` with props (`eyebrow`, `copy`, `primary`, `secondary`, `title` slot) |

A new case study is a data entry plus an image folder. Don't copy the template. If a listing needs something the template can't do, extend the template so every case study gets it.

## The /work/ Hub

The nav's "Work" item, the footer and the old `/gallery` URL all lead to `/work/`. Its sections:

1. **Selected Works:** 3 columns of listing cards (hero photo, package tag, address, city). Built case studies come first and link to their page. Listings in the `upcoming` array in `src/data/work.ts` show as "Case study coming soon" and don't link anywhere. Each card uses the `hero` photo if it has one, or a placeholder tile if not. **When you build a case study, move its listing from `upcoming` to `work`.**
2. **Social Media Property Reels** and 3. **Cinematic Property Showcases:** the same videos as the videography page, from `src/data/videos.ts`. Edit them there and both pages update.
4. **Photography:** the 12 portfolio photos listed in `src/data/portfolio.ts` (shared with the home page and `/card/`), 3 columns on desktop, with the lightbox. The originals live in `public/images/photos/`, which Astro can't resize, so the hub makes its thumbnails from copies in `src/assets/portfolio/`. If you change a portfolio photo, update both folders.

## Page Layout

Sections render in this order. Every section except photos is optional: leave its field out of the data and the section, its row in the "what's included" list, its number and its mention in the CTA and meta description all drop out. The numbering always runs 01, 02, 03 and so on.

| # | Section | Data field | Copy |
|---|---|---|---|
| | **Hero**: full-bleed `hero` photo, "<Package> · Case Study", address with the last word accented, city, "Shot for <agent>" linked to the agent's site | `hero`, `address`, `city`, `agent` | Fixed |
| | **The Listing**: `summary`, then the numbered "what's included" list linking to each section | `summary` | 2–3 sentences of character, no spec sheet |
| 01 | **Social Media Reel**: Bunny vertical embed beside the copy | `reel: { src, copy }` | Per listing: say whether the agent was on camera or it was property-only. Never claim scripting or coaching the reel didn't have. Optional `result: { value, label }` adds a big stat callout (e.g. "30,000 views" / "In just 5 days"); only use numbers the founder supplied. |
| 02 | **Cinematic Property Video**: YouTube 16:9 | `youtubeId` | Fixed |
| 03 | **HDR Photos**: the full delivered set, 2-column grid, `wide` spans both columns, click opens the lightbox (see [Fast-Loading Galleries](#fast-loading-galleries)) | `photos`, `photosNote` | Fixed, plus an optional `photosNote` for extras such as twilight or virtual staging |
| 04 | **Drone Photos**: 2×2 grid, 4:3, lightbox | `drone` | Fixed |
| 05 | **Property Website**: desktop screenshot in a browser frame, linked to the live site | `website` | Fixed |
| 06 | **Floor Plans & RMS**: one white card per level, lightbox, optional PDF link | `floorplans`, `floorplanPdf` | Fixed |
| 07 | **iGuide 3D Tour**: live embed and a full-screen link | `iguide` | Fixed |
| | **CTA**: "Ready to Give Your Listing This Treatment?", **Book a Shoot** (HD Pics order form) and **See Pricing** (`/pricing#packages`) | `packageName`, `packageFrom` | Generated from what was delivered |

## Which Sections Each Package Gets

Package contents are defined in `src/components/direction-1/pricing/Packages.astro`. Include only what the shoot actually delivered.

| Package | Usual sections |
|---|---|
| Essential | Photos, floor plans, iGuide. Drone if it was added (+$35). |
| Showcase | Everything in Essential, plus the reel and drone. No cinematic video and no twilight: leave out `youtubeId`, and don't put twilight shots in `photos`. |
| Luxury | Everything in Showcase, plus the cinematic video. Twilight photos go in `photos` (mention them in `photosNote`). |

`packageFrom` must match the smallest-size price on `/pricing` (Essential $285, Showcase $685, Luxury $999 as of 2026-10-23). Update it when pricing changes.

**Property website:** none of the packages on `/pricing` lists a property website. 34 Monterra Link shows one, and the copy doesn't say it's included. Until the website appears in a package or as a priced add-on, keep that wording, and decide per listing whether to show it at all.

## Adding a Case Study

1. **Prep the assets** from the original exports:
   ```
   node scripts/prep-work-assets.mjs <slug> --photos "<photo dir>" --plans "<plan dir>" --site https://<listing-site>/
   ```
   Photos are resized to 2000px. Files with `DJI` in the name go to `drone/`, and files with `floor` in the name go to `plans/`, so an export that mixes everything in one folder sorts itself. Plans are resized to 2400px. The website screenshot is 1440×900 at 1.5x. The script warns about any photo that isn't 3:2 (or drone shot that isn't 4:3), because the grid crops to those ratios. Check the screenshot, since a cookie banner or slow-loading hero can ruin it. The slug is the address in kebab case (`34-monterra-link`).
2. **Add the entry** to `work` in `src/data/work.ts`. Paste the arrays the script printed and replace every `TODO` caption, because captions are the alt text and the lightbox labels.
3. **Lay out the photo grid.** Mark the strongest shots `wide: true`. Keep an even number of non-wide photos between wide ones, or the 2-column grid leaves a hole.
4. **Get the video IDs.** For the reel, use the Bunny embed URL (same format as the videography page). If its poster is blank, add the thumbnail filename to the `thumbs` map in `BunnyVideo.astro`; Bunny renames thumbnails when they're changed. For the video, use the YouTube ID.
5. **Check it** (see below), then commit. Pushing `main` deploys.

## Fast-Loading Galleries

Every grid on these pages (photos, drone and floor plans, plus the hub's Photography section) loads small thumbnails, and the full-size image only loads when someone opens it.

- **Thumbnails:** `THUMB` (400/640/800px) and `THUMB_WIDE` (800/1280px) at quality 70, set at the top of `src/pages/work/[slug].astro`. The browser picks the smallest one that fits the tile.
- **Full size:** a 2000px WebP made with `getImage()`. It's the link's `href`, so it opens in the lightbox, or as a plain link if JavaScript is off.
- **Result (as of 2026-10-24):** scrolling the whole Monterra page on a retina screen went from 7.7 MB of images to 3.5 MB, and the hub from 5.1 MB to 1.2 MB.

Don't put full-size images straight into a grid. If an image lives in `public/`, copy it into `src/assets/` so Astro can make thumbnails from it.

## Self-Hosting an iGuide After the Listing Sells

iGuide locks the live tour once a property sells, which breaks the embed. Download the tour's offline version from iGuide and host it on this site:

1. Put the unzipped folder at `public/tours/<slug>/` (the folder holding `index.html`, `assets/`, `doc/`, `gallery/` and `html_assets/`). Keep it as downloaded. A tour is roughly 100–150 MB, and Cloudflare's 25 MiB per-file limit is far above any single file in it.
2. **Patch one path in `html_assets/index.js`.** iGuide's 3D loader requests the floor logo disc (the cover over the tripod spot) from the site root, so under `/tours/<slug>/` it 404s and leaves a hole when you look down. Replace `e.exports=n.p+"a/3312e98fd0ff2b88d02c.png"` with `e.exports="/tours/<slug>/html_assets/a/3312e98fd0ff2b88d02c.png"`. The file hash may differ in other exports: find the 404 in the browser's network tab and patch that one.
3. In `src/data/work.ts` set `iguide: { embed: '/tours/<slug>/', url: '/tours/<slug>/' }`, and point `floorplanPdf` at `/tours/<slug>/doc/floorplan_imperial_en.pdf`.

Expected and harmless: 404s for `/api/v1/sessions/0` and `/apiro/v1/tags/icons` (the viewer checking iGuide's servers for a login). The export still loads Google Fonts and iGuide's Heap analytics from their CDNs.

## Checking a Page

`astro dev` currently fails on TypeScript in component `<script>` tags, which this page uses through `BunnyVideo`. Check the production build instead:

```
npx astro build
```

Then serve `dist/client` with any static file server and open `/work/<slug>/`. Check desktop and phone widths, every section's media, the lightbox (click a photo, step with the arrows, Esc to close) and the Book a Shoot link.

## SEO

- Title: `<address>: <package> — Northvantage Media`. Description: generated from what was delivered.
- Share image: the `hero` photo, generated at 1620×1080. Alt text comes from that photo's caption.
- Schema: `BreadcrumbList` only (Home › address). See [seo.md](seo.md).
- Pages are in the sitemap automatically and are linked from the `/work/` hub.
