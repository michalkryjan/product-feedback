import { collection, doc, type Firestore } from 'firebase/firestore'
import type { IUsers as UsersRepository } from 'types/firebase/repository'
import { userConverter } from '~/firebase/converters'

export default ($db: Firestore): UsersRepository => ({
  getCollection: () => getUsersCollection($db),
  getDoc: (id) => getUsersDoc($db, id)
})

function getUsersCollection ($db: Firestore) {
  return collection($db, 'users').withConverter(userConverter)
}

function getUsersDoc ($db: Firestore, id: string) {
  return doc($db, 'users', id).withConverter(userConverter)
}