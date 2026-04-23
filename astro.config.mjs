import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://ojanti.github.io',
  base: '/token-nexus-docs',
  integrations: [mdx()],
  output: 'static',
});
