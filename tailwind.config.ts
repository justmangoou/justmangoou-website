import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',

	theme: {
		extend: {}
	},

	plugins: [typography]
} as Config;