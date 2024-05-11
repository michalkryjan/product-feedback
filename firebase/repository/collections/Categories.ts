import { collection, doc, type Firestore } from 'firebase/firestore'
import type { ICategoriesRepository } from 'types/firebase/repository'
import { categoryConverter } from '~/firebase/converters'

export default ($db: Firestore): ICategoriesRepository => ({
  getCollection: () => getCategoriesCollection($db),
  getDoc: (id: string) => getCategoriesDoc($db, id)
})

function getCategoriesCollection ($db: Firestore) {
  return collection($db, 'categories').withConverter(categoryConverter)
}

function getCategoriesDoc ($db: Firestore, id: string) {
  return doc($db, 'categories', id).withConverter(categoryConverter)
}