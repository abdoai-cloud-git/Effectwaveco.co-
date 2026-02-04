/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#000000',
        onyx: '#0A0A0A',
        accent: 'var(--color-accent)',
        silver: '#C0C0C0',
        'gray-surface': '#1A1A1A',
      },
      fontFamily: {
        heading: ['DIN Next Arabic', 'Cairo', 'sans-serif'],
        body: ['DIN Next Arabic', 'Tajawal', 'sans-serif'],
        english: ['DIN Next LT Pro', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'noise': "url('https://grainy-gradients.vercel.app/noise.svg')",
      },
      borderRadius: {
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}