import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  // Canonical origin for SEO tags + sitemap. The workers.dev URL serves the
  // same build but must never be canonical.
  site: 'https://northvantagemedia.com',
  output: 'static',
  session: false,
  adapter: cloudflare({
    imageService: 'compile',
  }),
  integrations: [
    react(),
    // /card/ is a noindex QR landing page — keep it out of the sitemap too.
    sitemap({ filter: (page) => !page.endsWith('/card/') }),
    robotsTxt(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});