/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      './index.html',
    ],
    theme: {
      fontFamily: {
        'plus-jakarta': ['Plus Jakarta Sans', 'sans-serif']
      },
      fontSize: {
        18: '0.9375vw',
        24: '1.25vw',
        64: '3.333vw',
      },
      colors: {
        'white': '#FFFFFF',
        'black': {
          '100': '#020305',
          '200': '#0D0F12',
        },
        'blue': {
          '100': '#A9C2CB',
          '200': '#171E27',
        },
        'grad': {
          
        }
      },
      boxShadow: {
        'black': '0vw 1vw 2.34vw -0.52vw rgba(13, 15, 18, 0.50)',
        'grey': '0vw_1vw_2vw_-0.625vw_rgba(99,117,124,0.40)'
      },
      padding: {
        22: '1.145vw',
        52: '2.708vw',
        60: '3.125vw',
      },
      gap: {
        48: '2.5vw',
      },
      borderRadius: {
        20: '1vw',
      }
    }
  }