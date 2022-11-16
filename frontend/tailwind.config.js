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
        'spaceMono-bold': 'SpaceMono-Bold'
      },
      colors: {
        'easy': '#06D6A0',
        'medium': '#FFD166',
        'hard': '#EF476F',
        'primary': '#118AB2',
        'secondary': '#073B4C',
        'screen-bg': '#F5F5F5',
        'passive': '#706D6D',
      },
    },
  },
  plugins: [],
}
