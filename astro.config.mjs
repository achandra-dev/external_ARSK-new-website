// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

const isBuild = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    ...(isBuild ? [] : [keystatic()])
  ],
  server: {
    allowedHosts: ['chapped-entree-deluge.ngrok-free.dev']
  }
});



