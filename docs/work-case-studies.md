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
| Closing CTA | `FinalCta` with props (`eyebrow`, `copy`, `primary`, `secondary`, `title` slot) |

A new case study is a data entry plus an image folder. Don't copy the template. If a listing needs something the template can't do, extend the template so every case study gets it.

## Page Layout

Sections render in this order. Every section except photos is optional: leave its field out of the data and the section, its row in the "what's included" list, its number and its mention in the CTA and meta description all drop out. The numbering always runs 01, 02, 03 and so on.

| # | Section | Data field | Copy |
|---|---|---|---|
| | **Hero**: full-bleed `hero` photo, "<Package> · Case Study", address with the last word accented, city, "Shot for <agent>" linked to the agent's site | `hero`, `address`, `city`, `agent` | Fixed |
| | **The Listing**: `summary`, then the numbered "what's included" list linking to each section | `summary` | 2–3 sentences of character, no spec sheet |
| 01 | **Social Media Reel**: Bunny vertical embed beside the copy | `reel: { src, copy }` | Per listing: say whether the agent was on camera or it was property-only. Never claim scripting or coaching the reel didn't have. |
| 02 | **Cinematic Property Video**: YouTube 16:9 | `youtubeId` | Fixed |
| 03 | **HDR Photos**: the full delivered set, 2-column grid, `wide` spans both columns, click opens the lightbox | `photos`, `photosNote` | Fixed, plus an optional `photosNote` for extras such as twilight or virtual staging |
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
| Showcase | Everything in Essential, plus the reel and drone. |
| Luxury | Everything in Showcase, plus the cinematic video. Twilight photos go in `photos` (mention them in `photosNote`). |

`packageFrom` must match the smallest-size price on `/pricing` (Essential $285, Showcase $685, Luxury $999 as of 2026-10-23). Update it when pricing changes.

**Property website:** none of the packages on `/pricing` lists a property website. 34 Monterra Link shows one, and the copy doesn't say it's included. Until the website appears in a package or as a priced add-on, keep that wording, and decide per listing whether to show it at all.

## Adding a Case Study

1. **Prep the assets** from the original exports:
   ```
   node scripts/prep-work-assets.mjs <slug> --photos "<photo dir>" --plans "<plan dir>" --site https://<listing-site>/
   ```
   Photos are resized to 2000px. Files with `DJI` in the name go to `drone/`. Plans are resized to 2400px. The website screenshot is 1440×900 at 1.5x. The script warns about any photo that isn't 3:2 (or drone shot that isn't 4:3), because the grid crops to those ratios. Check the screenshot, since a cookie banner or slow-loading hero can ruin it. The slug is the address in kebab case (`34-monterra-link`).
2. **Add the entry** to `work` in `src/data/work.ts`. Paste the arrays the script printed and replace every `TODO` caption, because captions are the alt text and the lightbox labels.
3. **Lay out the photo grid.** Mark the strongest shots `wide: true`. Keep an even number of non-wide photos between wide ones, or the 2-column grid leaves a hole.
4. **Get the video IDs.** For the reel, use the Bunny embed URL (same format as the videography page). If its poster is blank, add the thumbnail filename to the `thumbs` map in `BunnyVideo.astro`; Bunny renames thumbnails when they're changed. For the video, use the YouTube ID.
5. **Check it** (see below), then commit. Pushing `main` deploys.

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
- Pages are in the sitemap automatically. Nothing in the nav links to them yet. Once there are a few, add a `/work/` index page and point the nav's "Work" item at it.
