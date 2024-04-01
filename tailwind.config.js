/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'green': '#8AFF2F',
        'dark-black': '#060606',
        'burger-bg': '#181818',
      },
      colors:{
        'green': '#8AFF2F',
        'silver-gray': '#99999D'
      },
      fontFamily:{
        inter: ['Inter Tight']
      },
      backgroundImage:{
        filial: "url('public/filial.svg')",
        pulse: 'url("public/pulse.svg")'
      }
    },
  },
  plugins: [
      require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

