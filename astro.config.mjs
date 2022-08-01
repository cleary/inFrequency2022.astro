import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
	integrations: [preact()],
    site: "https://cleary.github.io";
    base: "/inFrequency2022.astro";
});
