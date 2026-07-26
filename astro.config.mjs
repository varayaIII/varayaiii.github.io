// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Cuando compres el dominio, déjalo aquí (sin barra final).
  // Esto es lo que usa Astro para generar URLs absolutas correctas (RSS, sitemap, og:url, etc.)
  site: 'https://varaya.dev',
  vite: {
    plugins: [tailwindcss()]
  }
});