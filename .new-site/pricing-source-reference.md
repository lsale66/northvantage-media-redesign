# Pricing page — source reference

Extracted from the live page **https://northvantagemedia.com/pricing/** on 2026-09-03.
Reproduced on the new site at `/pricing` (`src/pages/pricing.astro`,
`src/components/direction-1/pricing/`).

## Square-footage selector (JS-driven)

The live page swaps three `<span>` price values + the size label when a
`.tier-btn[data-tier]` is clicked. Data lifted verbatim from the inline script:

| Tier | Button label | Size label | Essential | Showcase | Luxury |
|---|---|---|---|---|---|
| 0 | Under 1,500 | For under 1,500 sq ft | $285 | $685 | $999 |
| 1 | 1,501 – 3,000 | For 1,501–3,000 sq ft | $365 | $785 | $1,099 |
| 2 | 3,001 – 4,500 | For 3,001–4,500 sq ft | $425 | $885 | $1,199 |
| 3 | 4,501 – 6,000 | For 4,501–6,000 sq ft | $495 | $985 | $1,299 |
| 4 | 6,000+ | For 6,000+ sq ft | Custom | Custom | Custom |

All prices **+ GST**. Every package CTA is "Book Now" → `https://northvantagemedia.hd.pics/order`.

## Packages

### Essential Package — icon: `fa-camera`
"Everything you need to launch your listing on MLS and Realtor.ca with eye-catching visuals — all in one streamlined service."
- HDR Photos — `fa-camera`
- RMS measurements — `fa-ruler-combined`
- Floor Plan — `fa-vector-square`
- Virtual Tour — `fa-street-view`
- Blue Sky Replacement — `fa-cloud`
- Drone Photos (+$35) — custom drone SVG
- Next Day Delivery — `fa-shipping-fast`

### Showcase Package — icon: video — badge "Most Popular"
"Combine stunning visuals and an impactful vertical video reel optimized for Facebook, Instagram, and TikTok."
- Everything From **The Essential Package** — `fa-check-circle`
- 45-Second Property Video Reel — `fa-video`
- Agent Introduction — `fa-portrait`
- Script writing + On-site coaching — `fa-clipboard-list`
- Drone Photos and Video — custom drone SVG

### Luxury Package — icon: `fa-video`
"The ultimate showcase for premium listings, including a MLS horizontal listing video, and stunning twilight photos and video."
- Everything From **The Essential Package** — `fa-check-circle`
- Everything From **The Showcase Package** — `fa-check-circle`
- Cinematic Property Showcase Video — `fa-video`
- Twilight Photography and Video — `fa-moon`

## Add-Ons & Standalone Services

| Service | Icon | Price |
|---|---|---|
| Photos Only | `fa-camera` | Starting from $149 |
| iGuide Services | `fa-vector-square` | Starting from $149 |
| Aerial Drone | custom drone SVG | Photos $125 · Video $150 · Photos + Video $250 |
| Twilight Photography | `fa-moon` | Starting from $199 |
| Virtual Staging | `fa-couch` | $6 / photo |

## Videography

| Service | Icon | Price |
|---|---|---|
| Social Media Property Reel | `fa-video` | Starting from $499 |
| Cinematic Property Showcase | `fa-home` | Starting from $499 |
| Agent Branding Videos | `fa-portrait` | From $399 · 4-video package from $1,199 |

## Icon mapping on the new site

Font Awesome isn't used on the redesign. `PriceIcon.astro` ships hand-drawn
line icons keyed to match each FA glyph 1:1 — `camera, ruler, floorplan, tour,
sky, drone, delivery, check, video, agent, script, twilight, staging, showcase`.
