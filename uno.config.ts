import presetRemToPx from '@unocss/preset-rem-to-px'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetRemToPx({ baseFontSize: 4 })
  ],
  transformers: [
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
      white: '#FFFFFF',
      lightBlue: '#62BCFA',
      darkNavy: '#373F68',
      orange: '#F49F85',
      gray: {
        1: '#647196',
        2: '#F2F4FF',
        3: '#F7F8FD'
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
      }
    }
  },
  shortcuts: [
    {
      'title-h1': 'font-bold text-24 leading-35 -tracking-[0.033rem]',
      'title-h2': 'font-bold text-20 leading-29 -tracking-[0.025rem]',
      'title-h3': 'font-bold text-18 leading-26 -tracking-[0.025rem]',
      'title-h4': 'font-bold text-14 leading-20 -tracking-[0.02rem]'
    },
    {
      'text-body-1': 'font-regular text-16 leading-23',
      'text-body-2': 'font-regular text-15 leading-22',
      'text-body-3': 'font-semibold text-13 leading-19',
      'text-label-1': 'font-bold text-14 leading-14'
    },
    {
      'btn-small': 'p-15',
      'btn-big': 'p-20',
      'btn-fit-content': 'py-4'
    },
    {
      'btn-purple': 'bg-purple-1 hover:bg-purple-2',
      'btn-blue': 'bg-blue-1 hover:bg-blue-2',
      'btn-navy': 'bg-navy-1 hover:bg-navy-2',
      'btn-red': 'bg-red-1 hover:bg-red-2',
      'btn-darkNavy': 'bg-darkNavy-1'
    }
  ]
})
