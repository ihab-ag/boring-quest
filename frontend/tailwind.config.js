/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': 'Inter',
        'inter-bold': 'Inter-Bold',
        'inter-medium': 'Inter-Medium',
        'inter-semibold': 'Inter-SemiBold',
      },
      colors: {
        'primary': '#118AB2',
        'secondary': '#073B4C',
        'easy': '#06D6A0',
        'medium': '#FFD166',
        'hard': '#EF476F',
        'screen-bg': '#F2F2F2'
      }
    },
  },
  plugins: [],
}
