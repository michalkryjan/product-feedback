import createRepository from '~/firebase/repository'

export default defineNuxtPlugin((nuxtApp) => {
  const firestore = useFirestore()
  const firebaseStorage = useFirebaseStorage()
  const firebaseRepository = createRepository(firestore, firebaseStorage)

  nuxtApp.provide('firebase', firebaseRepository)
})