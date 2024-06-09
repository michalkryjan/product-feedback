import { FirebaseRepository } from '~/firebase/repository'

export default defineNuxtPlugin((nuxtApp) => {
  const firestore = useFirestore()
  const firebaseStorage = useFirebaseStorage()

  const firebaseRepository = new FirebaseRepository(firestore, firebaseStorage)

  nuxtApp.provide('firebase', firebaseRepository)
})