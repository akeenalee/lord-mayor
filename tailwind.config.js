/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 18px 45px -24px rgba(15, 23, 42, 0.28)',
      },
    },
  },
  plugins: [],
};
