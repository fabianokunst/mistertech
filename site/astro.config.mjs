// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { redirecionamentos } from './src/data/redirecionamentos';

const foraDoSitemap = ['design-system', ...Object.keys(redirecionamentos)];

// Produção: https://mistertech.com.br (base "/").
// Testes no GitHub Pages: o CI sobrescreve com --site e --base /mistertech.
export default defineConfig({
  site: 'https://mistertech.com.br',
  trailingSlash: 'always',
  build: { format: 'directory' },

  integrations: [
    sitemap({
      filter: (page) => !foraDoSitemap.some((slug) => page.endsWith(`/${slug}/`)),
    }),
  ],
});
