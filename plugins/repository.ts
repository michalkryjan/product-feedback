import createRepository from '~/firebase/repository'

export default defineNuxtPlugin((nuxtApp) => {
  const $db = useFirestore()
  const firebaseRepository = createRepository($db)

  nuxtApp.provide('firebase', firebaseRepository)
})