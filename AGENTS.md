## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## SEO

Head tags, schema markup (JSON-LD), sitemap, robots.txt, and redirects: **[docs/seo.md](docs/seo.md)**. Read it before adding a page, changing a title or description, or renaming a URL. Pages set SEO through `Layout` props (`title`, `description`, `image`, `imageAlt`, `noindex`, `schema`), not by using `<SEO>` or `<Schema>` directly. Schema helpers and business facts live in `src/lib/schema.ts`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
