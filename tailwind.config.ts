import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  mode: 'jit',
  content: {
    relative: true,
    files: [
      './assets/**/*.{vue,js,ts}',
      './components/**/*.{vue,js,ts}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
    ]
  },
  theme: {
    fontFamily: {
      base: ['Jost', 'sans-serif']
    },
    screens: {
      mxs: '370px',
      ms: '480px',
      m: '670px',
      tm: '980px',
      t: '1200px',
      ls: '1280px',
      l: '1920px'
    },
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000000',
      lightBlue: {
        1: '#62BCFA',
        2: '#8397F8'
      },
      darkNavy: '#373F68',
      orange: {
        1: '#F49F85'
      },
      gray: {
        1: '#647196',
        2: '#F2F4FF',
        3: '#F7F8FD',
        4: '#CFD7FF'
      },
      purple: {
        1: '#AD1FEA',
        2: '#C75AF6'
      },
      blue: {
        1: '#4661E6',
        2: '#7C91F9'
      },
      navy: {
        1: '#3A4374',
        2: '#656EA3'
      },
      red: {
        1: '#D73737',
        2: '#E98888'
      },
      green: {
        1: '#4EDA64'
      }
    },
    fontSize: {
      13: '1.3rem',
      14: '1.4rem',
      15: '1.5rem',
      16: '1.6rem',
      18: '1.8rem',
      20: '2rem',
      24: '2.4rem',
    },
    lineHeight: {
      100: '100%',
      120: '120%',
      145: '145%',
    },
    letterSpacing: {
      '020': '0.02rem',
      '025': '0.025rem',
      '033': '0.033rem'
    },
    spacing: {
      0: '0rem',
      4: '0.4rem',
      5: '0.5rem',
      6: '0.6rem',
      8: '0.8rem',
      9: '0.9rem',
      11: '1.1rem',
      12: '1.2rem',
      14: '1.4rem',
      16: '1.6rem',
      20: '2rem',
      24: '2.4rem',
      30: '3rem',
      32: '3.2rem',
      34: '3.4rem',
      40: '4rem',
      48: '4.8rem',
      52: '5.2rem',
      54: '5.4rem',
      56: '5.6rem',
      90: '9rem',
      min: 'min-content',
      max: 'max-content'
    },
    top: {
      6: '0.6rem'
    },
    maxHeight: {
      full: '100%',
      fit: 'fit-content',
      max: 'max-content'
    },
    minHeight: {
      fit: 'fit-content',
      min: 'min-content',
      max: 'max-content',
      30: '3rem',
      600: '60rem'
    },
    height: {
      full: '100%',
      fit: 'fit-content',
      max: 'max-content',
      4: '0.4rem',
      8: '0.8rem',
      48: '4.8rem',
      56: '5.6rem',
      96: '9.6rem'
    },
    maxWidth: {
      full: '100%',
      fit: 'fit-content',
      max: 'max-content',
      130: '13rem',
      320: '32rem',
      430: '43rem',
      588: '58.8rem',
      620: '62rem',
      778: '77.8rem',
      810: '81rem',
      1158: '115.8rem',
      1190: '119rem'
    },
    minWidth: {
      full: '100%',
      fit: 'fit-content',
      max: 'max-content',
      42: '4.2rem'
    },
    width: {
      full: '100%',
      fit: 'fit-content',
      max: 'max-content',
      8: '0.8rem',
      56: '5.6rem'
    },
    backgroundImage: {
      none: 'unset',
      gradientCardMobile: 'url(/suggestions/background-header-mobile.png)',
      gradientCardTablet: 'url(/suggestions/background-header-tablet.png)',
      gradientCardDesktop: 'url(/suggestions/background-header-desktop.png)'
    },
    aspectRatio: {
      auto: 'auto',
      square: '1/1',
      video: '16/9'
    },
    transitionDuration: {
      DEFAULT: '300ms',
      100: '100ms',
      200: '200ms'
    },
    flexGrow: {
      1: '1',
      2: '2',
      3: '3'
    },
    flexShrink: {
      1: '1',
      2: '2',
      3: '3'
    },
    variants: {
      margin: ['last', 'first', 'first-of-type', 'responsive'],
      padding: ['last', 'first', 'responsive'],
      borderWidth: ['last'],
      background: ['hover'],
      text: ['hover']
    },
    plugins: [
      require('@savvywombat/tailwindcss-grid-areas')
    ],
    extend: {
      borderRadius: {
        5: '0.5rem',
        primary: '1rem'
      },
    }
  },

} satisfies Config
