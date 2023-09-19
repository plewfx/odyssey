/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      './index.html',
    ],
    theme: {
      screens: {
        'tablet': {'max': '1024px'},
        'mobile': {'max': '512px'},        
      },
      fontFamily: {
        'plus-jakarta': ['Plus Jakarta Sans', 'sans-serif']
      },
      fontSize: {
        18: '0.9375vw',
        24: '1.25vw',
        64: '3.333vw',
      },
      lineHeight: {
        180: '180%',
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
        'grey': '0vw 1vw 2vw -0.625vw rgba(99, 117, 124, 0.40)'
      },
      padding: {
        10: '0.5vw',
        20: '1vw',
        22: '1.145vw',
        26: '1.35vw',
        36: '1.875vw',
        50: '2.6vw',
        52: '2.708vw',
        54: '2.81vw',
        60: '3.125vw',
      },
      gap: {
        10: '0.5vw',
        20: '1vw',
        40: '2vw',
        48: '2.5vw',
      },
      margin: {
        10: '0.5vw',
        20: '1vw',
        40: '2vw',
        48: '2.5vw',
      },
      borderRadius: {
        12: '0.625vw',
        24: '1.250vw',
        20: '1vw',
        40: '2vw',
      },
      backgroundImage: {
        1: 'url(https://s3-alpha-sig.figma.com/img/8b99/8f26/42091bef618c8e50f365fc5f5bca433e?Expires=1695600000&Signature=WhaoTWwCROwMwe4IfjS~e3OzIYf2SGofiwCSUTKb015X6q22Q-mzeA5x7qeo8mh9jLZNal4BSiW2yQt-SI9kGNur5XZURr72whQV~WuIzYkx3wQ~FH8f-5-ENj-gSetYNICzcrffun0vg5fLoZ4v8-r-QeXeTSMj2scWS8AdQhefJALSEKC34K-ikhKQPsL1TOmI6I8HaHmZ~w21H7KjxRlz2V-hIL6-nXDrzXAZWditJhI4O2pEitbYA~xMw1TBl7EP7aKyay2wotTzqwle6iKfWQk~GEo48j21xT-Vulwov4~Xm~dSdUs4ZBxlf1rkBa0e8Op5pMiOeampfbP5lw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
        2: 'url(https://s3-alpha-sig.figma.com/img/3fb3/fa3b/b65916f7aba31f7c3b0dfd185840a24c?Expires=1695600000&Signature=KcHWXOcqmQMKkDC14xNrAreb2BUNFaxAzVfeNVwHB-7JwQRQjlP0fCY8YcyADxDUyaQlRbxDDKwA78Qm3HcBXem8JMjwZTJVD5pnxFac818padLxWLBdsyB14TDTTB-~WgAEGIhqjuLWdalcKZtUpzQoGiHERYtx-p6YLR963VGkq2QLlSHq6yiHOydNwtCP3fIhxczS0Q5KktFnrbD5dtpS0xFx3ye8DucJMQoHfrJPtYVjL0YgYDOHk2bQgnLsnz0ND8nObKEDTT3x6BTGaHmaLZhb3tdZ91Kr9frukShYibEVyNs0A50j3QuqqxFQTOludzc~J3luG~oWKKvVgA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)'
      }
    }
  }