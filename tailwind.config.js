/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./app/**/*.{ts,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/forms")],
};
