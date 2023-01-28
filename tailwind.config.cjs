/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'dark-300': '#444444',
        'dark-400': '#1E1E1E',
        'dark-500': '#070707',
        'light-400': '#CCC9C9',
        'light-500': '#fff',
        'accent-500': '#724CF9',
      },
    },
  },
  plugins: [],
};
