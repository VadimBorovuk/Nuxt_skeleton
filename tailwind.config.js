/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
    './node_modules/@nuxt/ui/**/*.{js,vue,ts}', // Додайте шлях до Nuxt UI
  ],
  theme: {
    extend: {
      colors: {
        'atlantis': {
          DEFAULT: '#A2CC3E',
          50: '#E8F2CF',
          100: '#E0EEBF',
          200: '#D1E69F',
          300: '#C1DD7F',
          400: '#B2D55E',
          500: '#A2CC3E',
          600: '#82A62C',
          700: '#5F7A20',
          800: '#3C4D14',
          900: '#1A2109',
          950: '#080B03'
        },
      }
    },
  },
  plugins: [],
};
