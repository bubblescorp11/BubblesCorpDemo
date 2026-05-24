import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://yourgithubusername.github.io',

  base: '/BubblesCorpDemo',
  integrations: [react()],
  output: 'static',

  vite: {
    resolve: {
      alias: [
        {
          find: /^\/BubblesCorpDemo\/@react-refresh$/,
          replacement: '/@react-refresh',
        },
      ],
    },

    ssr: {
      external: ['react', 'react-dom']
    },

    plugins: [tailwindcss()]
  }
});