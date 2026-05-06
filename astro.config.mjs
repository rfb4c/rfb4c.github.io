import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://rfb4c.github.io',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
  output: 'static',
});
