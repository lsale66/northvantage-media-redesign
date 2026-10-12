# Your New Site Plan

> **Selected direction (2026-09-03): Direction 1 — Night Showing.** This is the production site going forward,
> served at `/` (`src/pages/index.astro`). Directions 2 (Vantage Point) and 3 (Blue Hour) and the concept
> picker are archived under `_archive/`. Components live in `src/components/direction-1/`.

## Brand Brief
Northvantage Media is a real estate media production company — photography, cinematic video, iGuide 3D tours, drone, and virtual staging — for luxury-listing agents ($1M+ properties) in Calgary and surrounding areas. Primary CTA is direct contact (call/text), with an equally-weighted "Book Online" option for agents who already know what they need. Differentiator is production quality — cinematic-grade work that's a step above typical listing photography. Positioning: Calgary's listing media partner for agents who sell homes that deserve more than a phone-camera walkthrough.

## Visual Direction
- Color/font constraints: None locked. Designer's choice within a dark navy + orange family; elegant serif display headings + sans body across all concepts.
- Vibe: Dark, luxury, cinematic, editorial, restrained. Not corporate/stock-photo-agency, not loud/glitzy luxury.

## Site Blueprint
- **Home** (v1) — hero, stat callout, services overview, portfolio preview, testimonials, pricing teaser, final CTA. Content ready.
- **Services** (v1) — per-service breakdown with sample media. Needs copy refresh.
- **Gallery** (v1) — full portfolio grid. Content ready (real images).
- **Pricing** (v1) — Essential $285+GST / Showcase $685+GST / Luxury $999+GST packages + add-on "starting from" pricing. Content ready.
- **Contact** (v1) — form, phone/email, booking link. Content ready.
- **Blog, Community/Instagram** (v2) — deferred.

## Concept Directions

### Direction 1: Night Showing
Palette: Deep Indigo-Navy #1B2A45 · Classic Navy #2E4877 · Warm Amber #E8843C on near-black #0A0E17
Fonts: Fraunces + Inter
Full-bleed twilight photography hero, generous whitespace, alternating photo/text sections, large pull-quote testimonials.
Why: Twilight photography is a real service — leading with it makes the hero itself proof of quality; navy continuity signals elevation, not rebrand-from-zero.

### Direction 2: Vantage Point
Palette: Steel Navy #21324D · Slate Blue #3D5578 · Tangerine #FF6A2C on graphite-black #0C1015
Fonts: Newsreader + Manrope
Split-screen hero, modular portfolio-card grid, pill CTAs, dramatic shadow elevation, stat callout front and center.
Why: Plays on the Northvantage name; studio-craft direction for agents who want volume/consistency proof.

### Direction 3: Blue Hour
Palette: Deep Navy #16233D · Royal Blue #24406B · Glowing Amber #F2802E on blue-black #070B14
Fonts: Literata + Work Sans
Full-bleed cinematic video hero, extreme headline size contrast, glow-blur depth instead of shadows, asymmetric rhythm, portfolio-grid proof.
Why: Boldest, most editorial-studio direction — reads as premium production house, not a real-estate-marketing vendor.

## What Gets Built
- Astro 5 project with Tailwind CSS v4 + React
- 3 homepage prototypes as Astro pages
- Git repo with initial commit
- Real images/logo pulled from northvantagemedia.com for use in prototypes

## How to View Your Prototypes
After approval, run: `npm run dev`
Then open:
- localhost:4321/direction-1-night-showing
- localhost:4321/direction-2-vantage-point
- localhost:4321/direction-3-blue-hour
