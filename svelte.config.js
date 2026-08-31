import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(), // Поддержка TypeScript и Tailwind (через PostCSS)
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
        fallback: '404.html', // опционально, для GitHub Pages
      strict: false
    }),
    prerender: {
      default: false 
    },
    paths: {
			base: process.env.BASE_PATH || ''
		}
  }
};

export default config;