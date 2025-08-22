/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // <— IMPORTANT
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: { extend: {} },
  plugins: [],
};
