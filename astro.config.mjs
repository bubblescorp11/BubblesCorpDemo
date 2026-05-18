import react from '@astrojs/react';

export default {
  // GitHub Pages configuration
  site: 'https://yourgithubusername.github.io',
  base: '/BubblesCorpDemo',
  
  integrations: [react()],
  
  output: 'static',
  
  vite: {
    ssr: {
      external: ['react', 'react-dom']
    }
  }
};
