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
        'mobile': {'max': '600px'},      
        'mobile-min': '600px',      
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
        140: '140%',
        170: '170%',
        180: '180%',
        190: '190%',
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
        'brown': {
          '100': '#5C5050'
        }
      },
      boxShadow: {
        'black': '0vw 1vw 2.34vw -0.52vw rgba(13, 15, 18, 0.50)',
        'grey': '0vw 1vw 2vw -0.625vw rgba(99, 117, 124, 0.40)',
        'grey-tablet': '0vw 2vw 4vw -1.2vw rgba(99, 117, 124, 0.40)',
        'grey-mobile': '0vw 5vw 10.4vw -3.2vw rgba(99, 117, 124, 0.40)',
      },
      padding: {
        10: '0.5vw',
        20: '1vw',
        22: '1.145vw',
        26: '1.35vw',
        30: '1.56vw',
        32: '1.66vw',
        36: '1.875vw',
        40: '2vw',
        50: '2.6vw',
        52: '2.708vw',
        54: '2.81vw',
        60: '3.125vw',
        80: '4.16vw',
        90: '4.68vw',
        100: '5vw',
        120: '6.25vw',
        170: '8.85vw',
        210: '11vw',
        230: '12vw',
      },
      gap: {
        10: '0.5vw',
        12: '0.625vw',
        20: '1vw',
        24: '1.25vw',
        40: '2vw',
        48: '2.5vw',
        52: '2.708vw',
        74: '3.85vw',
        77: '4vw',
        104: '5.41vw',
      },
      margin: {
        10: '0.5vw',
        20: '1vw',
        30: '1.56vw',
        40: '2vw',
        48: '2.5vw',
        110: '5.72vw',
        120: '6.25vw',
      },
      borderRadius: {
        12: '0.625vw',
        24: '1.250vw',
        20: '1vw',
        40: '2vw',
      },
      backgroundImage: {
        1: 'url(https://s3-alpha-sig.figma.com/img/8b99/8f26/42091bef618c8e50f365fc5f5bca433e?Expires=1697414400&Signature=bePVMB9P8KY-BFJGyJnjMqFcYlfUWJQNpo9gNX~Xskz~y1QczyTFHiUAClm6Q9RqCXnIEKjOIkqQ3iir7fIQWXeYHfm4FcEEVW3sQHR-ZJXvKacrFfLCqLA8zTyMm4AxQqgmKQuQDeUKwPcH~JIukImjKwHDtTJNba~ivoiS11sA4~KZd0xQtzaDL9Iz1XG6qL-1u740Lhk8lx9edwoumBsj2LdhTegeYI~f1VbVdSGCp8beyzOd0aGCB9i2I3oK~c9TqaPF6GkUmeDQllkuFc0PT6rxJttdobDev3qdmNMS7geGvXEJOE3MoQk7zdI3-mfKs6FNGepyPsYIBH0TVg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
        2: 'url(https://s3-alpha-sig.figma.com/img/3fb3/fa3b/b65916f7aba31f7c3b0dfd185840a24c?Expires=1697414400&Signature=YfE39uocSjFOm1Iyz9hpFatyxwm-momuvM0IOmw4piMD6tGSNyvNPfjQUqgzqOQgRhttnzD38T1tduop9eVA9YoZ03V-K2QG0VwE0ynAWkgp~otYCpSoDojQnICS3d8ErTG57ZI0H-GNhG6UEJFbZJekWvqD9bk4S6A0c6JxyvK-bXq3ryYWGJFIuy12iSvwTxMcXVuOj9eY6FJGSiGKwO3qrksQ4FzoyyfGAe62kEYQJaENr0VSeQOU6Cs6qjLHQZvbjf1XQRkq0ZW3gczkVWK5h8E0k2VcgtbjK4hw9j-oDX2eluuZUkhY2OzImSqINMDMLrroW2sCUE-tKLDYiQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
        3: 'url(https://s3-alpha-sig.figma.com/img/67a1/bb44/e2c703d9af5e1a1fe7e31889d5940702?Expires=1697414400&Signature=lJ4ke0qxVLj9l-Pfweax-pzhp~cwYE6vmJqLge1MxTPRPbHvzW86iHZNKFVqaEPfr1gpcIv1YD4o~0FXaXaf65W6is2ppm7wfkILs6W7f3Og52XEBYCaeGMSo9pgwhmPICG-uSk5bCSyQiQuM~rZJ8vQU5EiglcnoJIlAVrHL4mJvSYcfdKM5VPxxLskd~1oXroksscLwY7DvF7wzJla2a2zGcV1o3nKUkQRMElrXx3cFvhp5XmdGGhD3mJiU-dY7oFz6Hsggo7fLwrrc3wjk5OW5DbWXWYzEmI05WlzCmdI1l0OBeoaRTStAHWsc4JuEFbsvD43qKLbDD7XFvXLcQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
        4: 'url(https://s3-alpha-sig.figma.com/img/264f/dbd7/8d3519c9e55aa8b1c85e4d73c59a6638?Expires=1697414400&Signature=guQW2tgXRpBbvXTeIa-8Cwe57Mcg3~~F2~Cg8NsGjjNGV9WxddJ2qTBDYFesy4t93Y89g-JvMiHwMdb35xNV8HlaFMHxd8LO8dMaUs7tpCFGQePapI6AN19KbZwH29BciwdbY~D4sKfnD5RnHsnTLR2lVXnQkRpmSqKsz9NiUDQdrt2K1M5hK10HQ~RoRaDbz1QpD5EgbjXFnJuXXa9k3fd~eX-ZreyJTYNYbee2qKDecL2p3jYt536e--PBg5iQ5BxOkm2KVo23LEOyCGFTWoMsamiN-Dz5ZwHo9CQ5Tx2s5FU~bLnaxiAnZG52uW4oGRW2qpQSYx8NC3A1QhQUAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
        'NASA': 'url(https://s3-alpha-sig.figma.com/img/231a/08fd/9264db461231c6b9cb6ae7d6b0bc49f3?Expires=1697414400&Signature=f~sei5hOE9v6-yZy~jSK2zwiP-cGHWg~L5swJwJOTAdi-7ZehbFdy-kT2wCjikYtUkzOR77yI3l4Y6dIM7gwOgXM1BlrCbQWA4v1GJAhsgSSzE59Pms2hOBp1jEbh3jEWP4iJzq7dqBlsPoxXeIvyY2OatW~s~jITE~YlbGm~~peNglB2Q0cmP9IYDdxZcdYKLImU5HaE-U5veOkO3pa4Bdn5yOQ11eozIr8k3fZsofxmhOBa6wX0Y00yNZV3AYIgNk1aFZQvSgKNCR~lE-~MUoeHusYVy5ov-gilH2yW50nIqkHQKe5jhPFuRsgjl3fxl9O3sHPLsLFg7pW8SvMtA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
        'spaceX': 'url(https://s3-alpha-sig.figma.com/img/fab1/0f82/786cedef4fdb73453065f3db4978dac0?Expires=1697414400&Signature=nxDRvnfaBvk4rpdD1vA43d7S~VPz6rX9JsAwT3I8~72ImjSOlSOcgb5UmvF9mqYcW-PlnFFocD5cQosfEp-Ho8mxrPOW-KqdjCTefI429WYqYfkBmCtTampuL88T~NgXFSxwE9AGwT4u8Z2b-mAvjbEKsah0hjt0lCmtgWbURfETg2sP9Td791yiHvEZJwZhS0utWFFEX0iVleS8MvYdJtFS4jWvGLSHMP-k1~aHGlZJjv3GvNoxMXLKqNQsgmy87FyVylgygYiIOrSbPp1NC1SVVm2BXdrq-HJkILZkezBTCJ-Cza6pZb1TCmttC1KaK3s~WDZBLsY-xuzUFUdP1w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
        'boeing': 'url(https://s3-alpha-sig.figma.com/img/5a68/9046/68970332847e84f7a52003657463139f?Expires=1697414400&Signature=B1quSEMcuVDd-ZFzwei~xdX~4KhvarG2BdZEoRHZpuRSUfcaOxdipdGEJXMo7abLpb9tRYD5jSbjRo4JbL6wD5GyXzEP0muSH9OjcfIrqOF~TNDVHaIFZdmcMoGlNJ0j-Cf9UxCfeIB-zISOc5e~nImBzGbCuWrjgElW9ONJsbPm2AhacNyw1wxy6UAa~Iac-MLADoE5r8kpV-5X2WoEmfhRmUtNFzYuntd2nQuavO4s-OOJA5WPI7V7u2BdAMOfPpCwAGwGh-SGcRomoB3UuB1uITbm8t0ecnUGKlE-uIpKrYRttp3TrpfexGoRvNwrGzsJThD1WpTmTis~aGzMrg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
        'astro': 'url(https://s3-alpha-sig.figma.com/img/21b2/484b/59a1f346faa1db01cc455279e14c0bb2?Expires=1697414400&Signature=CGL1nEV9~NQF0fBuBIhG0LQ4GY6K-Am6M~D4fL9ZLcZVnKh4BAEis3qgtyAGB0v0TF18ictFfovejmFPguFrdeQetYpZk7FaUI0glRYs7D~4Nqmsrs95EnquqfktAcgDszOAuA670x3IBCwKeuIdNkd87GFzRFmGxjR4hI0RObHxqG8m4ZPS0wlLUL8p-QI-JtWyeS6RMi2rsNs1ohvlr6d8iecqxad-Jkn4YHFYDmlC12Pjzcs8EjR5g6HZ0AgIBdDWxofod37EDdYjT5Fm5G~EzVkS3fEV3gmllIq5eSdR~KMzgXHPW4QS39eVUO6X~uesVJqR6-~X6nk0ohCFWg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)'
      }
    }
  }