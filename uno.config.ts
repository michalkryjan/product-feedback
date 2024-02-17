import { defineConfig, presetUno } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  presets: [
    presetUno(),
    presetRemToPx({ baseFontSize: 4 }),
    transformerVariantGroup()
  ],
  theme: {
    breakpoints: {
      mob_s: '370px',
      mob_m: '480px',
      mob_l: '670px',
      tm: '980px',
      t: '1200px',
      ls: '1280px',
      l: '1920px'
    },
    colors: {
      neutral: {
        white: '#FFFFFF',
        lightGray: '#F2F4FF',
        veryLightGray: '#F7F8FD',
      },
      purple: '#AD1FEA',
      blue: '#4661E6',
      lightBlue: '#62BCFA',
      navy: '#3A4374',
      darkNavy: '#373F68',
      gray: '#647196',
      orange: '#F49F85',
    }
  },
  rules: [
    [/^leading-(\d+)$/, ([, d]) => ({ 'line-height': `${d}%` })],
  ]
})
