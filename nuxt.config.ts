export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  ssr: false,
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
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'nuxt-icons'
  ],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    exposeConfig: true
  },
})
