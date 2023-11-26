/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        js: '#fbae17',
        dark: '#161616',
        'dark-light': '#242424',
        'dark-300': '#616162',
        light: '#f5f5f5',
        'light-2': '#ededed',
        css: '#0070ba'
      }
    }
  },
  plugins: []
}
