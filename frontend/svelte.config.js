import adapter from '@sveltejs/adapter-auto';
import { enhancedImages } from '@sveltejs/enhanced-img';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	plugins: [
		enhancedImages(), // must come before the SvelteKit plugin
	],
  compilerOptions: {
    experimental: {
      async: true
    }
  },
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
