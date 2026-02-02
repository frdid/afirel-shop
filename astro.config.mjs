// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://frdid.github.io',
  base: '/afirel-shop/',
  vite: {
    plugins: [tailwindcss()]
  }
});
