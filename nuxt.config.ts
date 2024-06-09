import { useEnv } from './utils/useEnv'

export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  ssr: false,
  alias: {
    components: '/<srcDir>/components',
  },
  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          name: 'format-detection',
          content: 'telephone=no'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon/favicon-32x32.png',
          sizes: '32x32'
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon/favicon-16x16.png',
          sizes: '16x16'
        }
      ]
    }
  },
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-vuefire',
    'nuxt-lodash',
    'nuxt-icons'
  ],
  image: {
    format: ['webp'],
    screens: {
      mxs: 370,
      ms: 480,
      m: 670,
      tm: 980,
      t: 1200,
      ls: 1280,
      l: 1920
    }
  },
  vuefire: {
    auth: {
      enabled: false
    },
    config: {
      apiKey: useEnv().FIREBASE_API_KEY,
      projectId: useEnv().FIREBASE_PROJECT_ID,
      appId: useEnv().FIREBASE_APP_ID,
      storageBucket: useEnv().STORAGE_BUCKET_ID
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    exposeConfig: true
  },
  lodash: {
    prefix: 'ld_',
    upperAfterPrefix: false,
    prefixSkip: false
  }
})