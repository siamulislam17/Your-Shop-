/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/Components/**/*.{js,jsx,ts,tsx}', // keep if you use capital C
  ],
  theme: { extend: {} },
  plugins: [],
};
