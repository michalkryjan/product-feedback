import transformerVariantGroup from '@unocss/transformer-variant-group'
import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno()
  ],
  transformers: [
    transformerVariantGroup()
  ],
  theme: {
    breakpoints: {
      mob_xs: '370px',
      mob_s: '480px',
      mob: '670px',
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
  rules: [
    ['rounded-primary', { 'border-radius': '1rem' }]
  ],
  shortcuts: [
    {
      'title-h1': 'font-bold text-[2.4rem] leading-[3.5rem] -tracking-[0.033rem]',
      'title-h2': 'font-bold text-[2rem] leading-[2.9rem] -tracking-[0.025rem]',
      'title-h3': 'font-bold text-[1.8rem] leading-[2.6rem] -tracking-[0.025rem]',
      'title-h4': 'font-bold text-[1.4rem] leading-[2rem] -tracking-[0.02rem]'
    },
    {
      'text-body-1': 'font-normal text-[1.6rem] leading-[2.3rem]',
      'text-body-2': 'font-normal text-[1.5rem] leading-[2.2rem]',
      'text-body-3': 'font-semibold text-[1.3rem] leading-[1.9rem]',
      'text-label-1': 'font-bold text-[1.4rem] leading-[1.4rem]'
    },
    {
      'btn-small': 'p-[1.5rem]',
      'btn-big': 'p-[2rem]',
      'btn-fit-content': 'py-[0.4rem]'
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
