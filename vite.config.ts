import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		target: "esnext" // or "es2019",
	},
	server: {
		// Add the allowed paths
		fs: {
			strict: false,
		},
	},
});

