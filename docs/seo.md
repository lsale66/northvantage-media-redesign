# SEO Setup

How search and social metadata works on this site, and what to do when you add or change a page.

Four packages handle it. Nothing here needs a separate build step; `astro build` produces all of it.

| Piece | Package | Lives in | Output |
|---|---|---|---|
| Head tags (title, description, canonical, robots, Open Graph, Twitter) | [`astro-seo`](https://github.com/jonasmerlin/astro-seo#readme) | `src/layouts/Layout.astro` | `<head>` of every page |
| Schema markup (JSON-LD) | [`astro-seo-schema`](https://github.com/codiume/orbit/tree/main/packages/astro-seo-schema) + `schema-dts` types | `src/lib/schema.ts`, rendered by `Layout` | One `<script type="application/ld+json">` per page |
| Sitemap | [`@astrojs/sitemap`](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | `astro.config.mjs` | `/sitemap-index.xml` → `/sitemap-0.xml` |
| robots.txt | [`astro-robots-txt`](https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt#readme) | `astro.config.mjs` | `/robots.txt` |

All three build absolute URLs from `site` in `astro.config.mjs`, which is `https://northvantagemedia.com`. Keep it that way. The `*.workers.dev` URL serves the same build, but it must never become canonical.

## Page Metadata (`astro-seo`)

Pages never use `<SEO>` directly. They pass props to `Layout`, and `Layout` renders `<SEO>` with the site defaults.

```astro
<Layout
  title="Calgary Real Estate Photography — Northvantage Media"
  description="Professional real estate photography in Calgary. ..."
>
```

### Layout props

| Prop | Required | Default | Notes |
|---|---|---|---|
| `title` | yes | — | Use the format `<Page Topic> — Northvantage Media`. Keep it under ~60 characters so Google doesn't truncate it. It is also used as `og:title`. |
| `description` | recommended | `''` | Aim for 140–160 characters, written for the searcher. It is also used as `og:description`. |
| `image` | no | Twilight exterior (`/images/photos/001-twilight%20(Large).jpg`) | The social share image, as a site-root path. Encode spaces as `%20`. |
| `imageAlt` | no | Generic twilight alt text | Set this whenever you set `image`. |
| `noindex` | no | `false` | Adds `noindex, follow` and drops the canonical tag. Use it for utility pages such as the 404. It also drops the page's extra `schema` nodes. |
| `schema` | no | `[]` | Extra Schema.org nodes for this page. See [Schema Markup](#schema-markup). |

### What Layout sends to `<SEO>`

- **Canonical:** `site` + the page path, with a trailing slash (`https://northvantagemedia.com/services/iguide/`). It is left out when `noindex` is set.
- **Robots:** `index, follow`, or `noindex, follow`.
- **Open Graph:** `type: website`, `url`, `image`, `locale: en_CA`, `siteName: Northvantage Media`, plus the image `width`, `height` and `alt`.
- **Twitter:** `summary_large_image` with the image alt text.

`surpressWarnings` is on (the misspelling is the package's own). Without it, the build warns every time `title` and `og:title` match, and on this site they match on purpose.

### Examples

A page-specific share image:

```astro
<Layout
  title="Drone Photography & Video — Northvantage Media"
  description="..."
  image="/images/drone/hero-skyline.jpg"
  imageAlt="Aerial view of a Calgary neighbourhood with the downtown skyline behind"
>
```

**Note:** `Layout` hard-codes the share image size as 1620×1080, which matches the default twilight image. If a page uses an image with different dimensions, add `imageWidth`/`imageHeight` props to `Layout` rather than shipping the wrong size.

A page that should stay out of search:

```astro
<Layout title="Page Not Found — Northvantage Media" description="..." noindex>
```

### Changing something site-wide

Edit the `<SEO>` call in `src/layouts/Layout.astro`. Every option the component accepts is listed in the [astro-seo README](https://github.com/jonasmerlin/astro-seo#readme). For tags it has no prop for, use `extend: { meta: [...], link: [...] }`.

## Schema Markup

`Layout` renders one JSON-LD `@graph` per page with `<Schema item={...} />` from `astro-seo-schema`. Every node is typed with `schema-dts`, so a wrong property or value type fails type-checking instead of shipping.

### What every page gets

| Node | `@id` | Source |
|---|---|---|
| `ProfessionalService` (the business) | `https://northvantagemedia.com/#organization` | `business` in `src/lib/schema.ts` |
| `WebSite` | `https://northvantagemedia.com/#website` | `website` |
| `WebPage` (this page) | `<canonical>#webpage` | `webpage()`, built from the page's `title` and `description` |
| Anything in the `schema` prop | — | the page |

Nodes link to each other by `@id`; for example, a `Service` has `provider: { '@id': ids.business }`. Google therefore reads the whole graph as one business rather than as unrelated fragments.

**The business facts (name, phone, email, address, hours, social profiles) live only in `business` in `src/lib/schema.ts`.** Update them there when they change, and keep them identical to the Google Business Profile.

### Adding schema to a page

Import the helpers, build the array in the frontmatter, and pass it to `Layout`:

```astro
---
import Layout from '../../layouts/Layout.astro';
import { breadcrumbs, service } from '../../lib/schema';

const pageSchema = [
  service({
    path: '/services/iguide/',
    name: 'iGuide RMS Measurements & Virtual Tour',
    serviceType: 'RMS measurement, floor plans, and 3D virtual tour',
    description: 'RECA-standard RMS measurements, scaled floor plans, and an immersive iGuide 3D virtual tour for Calgary listings.',
  }),
  breadcrumbs([{ name: 'iGuide', path: '/services/iguide/' }]),
];
---

<Layout title="..." description="..." schema={pageSchema}>
```

| Helper | Use for | Notes |
|---|---|---|
| `service({ path, name, serviceType, description })` | `/services/*` pages | Linked to the business as `provider`; `areaServed` is Calgary. |
| `breadcrumbs([{ name, path }, ...])` | Every page except home | `Home` is prepended automatically. List the trail in order and end with the current page. |
| `webpage()`, `pageGraph()` | Used by `Layout` | Pages don't call these. |

### Current coverage

| Page | Extra nodes |
|---|---|
| Home | none (the business, site and page nodes are enough) |
| Photography, Videography, Drone, iGuide | `Service` + `BreadcrumbList` |
| Pricing, Contact | `BreadcrumbList` |
| Work case studies (`/work/<slug>/`) | `BreadcrumbList`; share image is the listing's hero photo, generated at 1620×1080 |
| 404 | none (`noindex`) |

### A new schema type

For anything the helpers don't cover (an `FAQPage`, an `Offer`, a `VideoObject`), write the node inline with its `schema-dts` type:

```ts
import type { VideoObject } from 'schema-dts';

const video: VideoObject = {
  '@type': 'VideoObject',
  name: 'Greenwich — Cinematic Showcase',
  // ...
};
```

If more than one page will use it, add a helper to `src/lib/schema.ts` instead.

- **Prices:** don't add `Offer` or price data unless it matches the Pricing page exactly. Stale prices in schema are worse than none.
- **FAQs:** Google only shows FAQ rich results for government and health sites, so `FAQPage` markup won't earn this site a rich result.

### Escaping is expected

`astro-seo-schema` HTML-escapes strings, so the raw source shows `Measurements &amp; Virtual Tour`. That is intentional; Google and the schema.org validator both decode it back to `&`. Don't "fix" it.

## Also in `<head>`

These sit next to `<SEO>` and `<Schema>` in `Layout.astro`:

- **Google Analytics 4:** `G-QMG4PY9CTN` (the `GA_ID` constant).
- **Favicons:** the icon tags plus `<link rel="sitemap" href="/sitemap-index.xml">`.

## Sitemap and robots.txt

Both are automatic. Every statically built page lands in the sitemap; the 404 is excluded by default.

- A `noindex` page other than the 404 still appears in the sitemap. Exclude it with `sitemap({ filter: (page) => ... })` in `astro.config.mjs`.
- `robots.txt` allows everything and points at `https://northvantagemedia.com/sitemap-index.xml`. Policy changes go in `robotsTxt({ policy: [...] })`.
- Don't add `public/robots.txt` or a hand-written sitemap; they would clash with the integrations.
- `astro-robots-txt` has had no release since 2023. If an Astro upgrade breaks it, replace it with a static `public/robots.txt` that contains the same three lines.

## Redirects

`public/_redirects` (Cloudflare format: `from  to  status`) holds the 301s from the old WordPress URLs.

- **Renaming or removing a page:** add a 301 from the old path to the closest live page, both with and without the trailing slash. Never let an indexed URL 404.
- **Temporary 302s:** `/card/` and `/virtual-staging/` currently 302 to Contact and Pricing. Delete those lines once the real pages exist.

## New Page Checklist

1. Pass `title` (in the `— Northvantage Media` format) and a real `description` to `Layout`.
2. If the page has a better share image than the default, set `image` and `imageAlt`.
3. Pass `schema`: `breadcrumbs(...)` at minimum, plus `service(...)` on a service page.
4. Run `npx astro build`, then confirm the page appears in `dist/client/sitemap-0.xml` and its `<head>` has exactly one `<title>`, one canonical, one description and one JSON-LD block.
5. If the page replaces an old URL, add the 301 in `public/_redirects`.
6. After deploying, check the live page, and run it through the schema.org validator (link below). Cloudflare can serve the previous version for about a minute.

## Verifying

```sh
npx astro build
grep -oE '<title>[^<]*|<link rel="canonical"[^>]*>|<meta name="robots"[^>]*>' dist/client/<page>/index.html
cat dist/client/robots.txt dist/client/sitemap-0.xml
```

TypeScript isn't a project dependency. To type-check the schema module, run the compiler once without installing it:

```sh
npx -y -p typescript@5.9.3 tsc --noEmit --strict --module esnext --moduleResolution bundler --target es2022 --skipLibCheck --types astro/client src/lib/schema.ts
```

Use `-p typescript@…`. A bare `npx tsc` downloads an unrelated placeholder package named `tsc` that type-checks nothing.

Live checks: the [Schema.org Validator](https://validator.schema.org/) and the [Rich Results Test](https://search.google.com/test/rich-results) (structured data), the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) (share previews), and Google Search Console (submit `sitemap-index.xml`).
