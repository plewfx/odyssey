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
        120: '6.25vw',
      },
      borderRadius: {
        12: '0.625vw',
        24: '1.250vw',
        20: '1vw',
        40: '2vw',
      },
      backgroundImage: {
        1: 'url(https://s3-alpha-sig.figma.com/img/8b99/8f26/42091bef618c8e50f365fc5f5bca433e?Expires=1695600000&Signature=WhaoTWwCROwMwe4IfjS~e3OzIYf2SGofiwCSUTKb015X6q22Q-mzeA5x7qeo8mh9jLZNal4BSiW2yQt-SI9kGNur5XZURr72whQV~WuIzYkx3wQ~FH8f-5-ENj-gSetYNICzcrffun0vg5fLoZ4v8-r-QeXeTSMj2scWS8AdQhefJALSEKC34K-ikhKQPsL1TOmI6I8HaHmZ~w21H7KjxRlz2V-hIL6-nXDrzXAZWditJhI4O2pEitbYA~xMw1TBl7EP7aKyay2wotTzqwle6iKfWQk~GEo48j21xT-Vulwov4~Xm~dSdUs4ZBxlf1rkBa0e8Op5pMiOeampfbP5lw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
        2: 'url(https://s3-alpha-sig.figma.com/img/3fb3/fa3b/b65916f7aba31f7c3b0dfd185840a24c?Expires=1695600000&Signature=KcHWXOcqmQMKkDC14xNrAreb2BUNFaxAzVfeNVwHB-7JwQRQjlP0fCY8YcyADxDUyaQlRbxDDKwA78Qm3HcBXem8JMjwZTJVD5pnxFac818padLxWLBdsyB14TDTTB-~WgAEGIhqjuLWdalcKZtUpzQoGiHERYtx-p6YLR963VGkq2QLlSHq6yiHOydNwtCP3fIhxczS0Q5KktFnrbD5dtpS0xFx3ye8DucJMQoHfrJPtYVjL0YgYDOHk2bQgnLsnz0ND8nObKEDTT3x6BTGaHmaLZhb3tdZ91Kr9frukShYibEVyNs0A50j3QuqqxFQTOludzc~J3luG~oWKKvVgA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
        'NASA': 'url(https://s3-alpha-sig.figma.com/img/231a/08fd/9264db461231c6b9cb6ae7d6b0bc49f3?Expires=1696204800&Signature=HnjLpXRF7Dxr4aigxPVJftmIcHYWLf7SAN5tLlIPPouTAEMhpdujWJACRKl25g4ljGl8d1K1fCvPExrabLSHZLaZwesWAO8F6PGWaBq2uZYhaZvVM-is~V5tUYmEQIpJD4dtVmhwfSP09m~S4JVySy~9e2Mw34XZqZx08CbdJi2n2UIRMxTdvx8Fur77MBctpD-iNTk075IUegDMWUiUgHN1gyfs1ZO3ScoWdL~K8~FokqFoSu8zHjUBBTvDdk1RrXFBpmDSpe69VZhnl8q64S9XaNVUGyZ45lhVas-eDnZdEk860FrKv4ZeQWvaE0hCtuZbTwUjuZksOJoTZKfoYA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
        'spaceX': 'url(https://s3-alpha-sig.figma.com/img/fab1/0f82/786cedef4fdb73453065f3db4978dac0?Expires=1696204800&Signature=NmleZXA9OJh4UEJH3PZ-mL8bg83pThr5PCPqSj2-QL1gg9SKoQr~LB3K-n7QG3v8J79wzeb-vz6LQjZCRD9otWaR4ortYyXLQWbomAYjWWDBZi3Cj4pAItQU3czxbPBUrxZl4HbDi3jauqoexy-h6HMroGhuVFInPr152R5GhV2fg4-q5pYJ9efDoaRPG8viBXQATHz4k8-JihBQ~IpDct3uuPLQmfF48SXD3VyZp0kOhTO5hYZg775t~wJKEt6t6bD9VfJmtAAMmYpakpHlzb6WAduh8eWay1ZpXixjUU9EG00DDfhGTAarlGySb6B4qw7tNp8CUmTvhkBgBlTDyQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
        'boeing': 'url(https://s3-alpha-sig.figma.com/img/5a68/9046/68970332847e84f7a52003657463139f?Expires=1696204800&Signature=EhozaQ5wcSYPqS9u1l1oRBC08-6VAzCXIYB0dZgczQGn53QUOdWgAQV2UUAqLdKNOwxD~RtolNAhmVGfCM4KZDiuLbu~OP5aFK1wWXiuxMR2V29giHXP6uL2H1hzYxzICYmwchCs1-nFGvQ3TPrr3UUAXCH7VOUwdbz377EGkLMItsdFqbXs9xMSfTyxKbUXUW63bxXpHgSYikdIlIk1ca5pCz81YfBFnvCXeKCMyPd0V5ebYLa6-ULQ3dfeITMl4yGuJF~Hz1CZPSB~f2yZIghgS~LwdJFkyU~H1GeqADFnuvfW4-Cak2NV8DMZyv3udRdJ7lWyhKvdtQpMrl46sg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
        'astro': 'url(https://s3-alpha-sig.figma.com/img/21b2/484b/59a1f346faa1db01cc455279e14c0bb2?Expires=1696204800&Signature=pUpRv5cxtaGTTw6sN6M6yPRAlH7vs6unaEiDFOZ-RkbkGEH1MfjmaDOQAb5Yc6uXwm20ZkNGyWQG5ppz~jCIPWp7RNdO61h6wBX8NoBfhZGAxsZAFp1~WlRMubkmq6m1RFXzBy~VZbPt9har5-AF566ceWoxuXpQswDHxntJlVTvfqHS5t6vgefdvph9DIOfSNmnIxCPwpxdhTYdV~h0D~ZhYiELi9c6J9X~yWtrZkQ-nDz8q3QidFl0p7AiNDSHkQnK8N8-FXP1tOnsXaqnKF4GRnA1zhxGOlZD26m72vtXgumcefPFJtCbyF4GqDQtEGK7RWf0SFncCvpSi~p4Iw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)'
      }
    }
  }