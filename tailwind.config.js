/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#080808',
        'bg-secondary': '#111111',
        'bg-card': '#161616',
        accent: '#FFFFFF',
        'accent-light': '#CCCCCC',
        'text-primary': '#FFFFFF',
        'text-secondary': '#8A8680',
        'border-gold': 'rgba(255, 255, 255, 0.15)',
      },
      fontFamily: {
        display: ['"Montserrat"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        label: ['"Montserrat"', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0px',
        sm: '2px',
      },
      letterSpacing: {
        widest: '0.25em',
        'ultra': '0.4em',
      },
      maxWidth: {
        container: '1440px',
      },
      transitionTimingFunction: {
        'luxe': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
