import type { FirebaseRepository } from '~/firebase/repository'

interface IPluginInjections {
  $firebase: FirebaseRepository
}

declare module '#app' {
  interface NuxtApp extends IPluginInjections {}
}

declare module 'nuxt/dist/app/nuxt' {
  interface NuxtApp extends IPluginInjections {}
}