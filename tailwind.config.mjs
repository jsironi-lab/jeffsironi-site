import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        desert: {
          sky: '#5d8ea3',
          terra: '#c45e28',
          sage: '#8c9a7e',
          sand: '#d4a574',
          sunset: '#e8943a',
        },
      },
    },
  },
  plugins: [typography],
};
