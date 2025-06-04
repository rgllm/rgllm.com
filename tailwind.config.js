/** @type {import('tailwindcss').Config} */
export default {
       content: ['./src/**/*.{ts,tsx}', './src/styles/tailwind.css'],
       safelist: ['text-blue-500', 'hover:text-blue-700', 'underline'],
       theme: {
		extend: {},
	},
	plugins: [],
}