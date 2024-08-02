/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {},
	},
	plugins: [],
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	presets: [require("@navikt/ds-tailwind")],
};
