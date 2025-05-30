/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'], 
        sans: ['Poppins', 'sans-serif'], 
        oblique: 'oblique',
      },
      keyframes: {
        'netflix-in': {
          '0%': { opacity: 0, transform: 'translateY(50px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'netflix-in': 'netflix-in 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}



  
