import type { IFirebaseRepository } from '~/firebase/types'

interface IPluginInjections {
  $firebase: IFirebaseRepository
}

declare module '#app' {
  interface NuxtApp extends IPluginInjections {}
}

declare module 'nuxt/dist/app/nuxt' {
  interface NuxtApp extends IPluginInjections {}
}