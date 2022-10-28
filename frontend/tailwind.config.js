/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': 'Inter',
        'inter-bold': 'Inter-Bold',
        'inter-medium': 'Inter-Medium',
        'inter-semibold': 'Inter-SemiBold',
      }
    },
  },
  plugins: [],
}
