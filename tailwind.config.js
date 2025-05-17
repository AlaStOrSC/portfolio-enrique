/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Habilita el modo oscuro basado en una clase
  theme: {
    extend: {
      colors: {
        primary: '#009999', // Mantenemos el turquesa como base
        secondary: '#FF6F61', // Coral suave, lo mantenemos por ahora
        accent: '#00C4C4', // Turquesa claro para detalles
        background: {
          light: '#E6F0FA',
          dark: '#1A2A44',
        },
        text: {
          light: '#0A1A2F',
          dark: '#DDE6F0',
        },
      },
      backgroundImage: {
        'generic-gradient': 'linear-gradient(to right, #008f7a, #00817d, #00737a, #136473, #265667, #2f4858)',
        'matching-gradient': 'linear-gradient(to right, #008f7a, #008d97, #0088b2, #007ec3, #4e6fc3, #8b5ab0)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Mantenemos la fuente
      },
    },
  },
  plugins: [],
}