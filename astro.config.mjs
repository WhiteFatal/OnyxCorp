// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';

import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: '6ajyc2a0',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-01-01',
    studioBasePath: '/studio',
  }), react()],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel()
});