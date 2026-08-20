/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FFD400',
          'yellow-dark': '#E6BF00',
          red: '#D71920',
          'red-dark': '#B5141A',
          black: '#141414',
        },
      },
      fontFamily: {
        display: ['"Poppins"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(0,0,0,0.15)',
        card: '0 8px 24px -8px rgba(0,0,0,0.18)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(3deg)' },
        },
        shine: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        confetti: {
          '0%': { transform: 'translateY(-10%) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(120%) rotate(360deg)', opacity: '0' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
        shine: 'shine 2.5s linear infinite',
        confetti: 'confetti 4s linear infinite',
      },
    },
  },
  plugins: [],
}
