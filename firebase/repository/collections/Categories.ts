import { collection, doc, type Firestore } from 'firebase/firestore'
import type { ICategories as CategoriesRepository } from 'types/firebase/repository'
import { categoryConverter } from '~/firebase/converters'

export default ($db: Firestore): CategoriesRepository => ({
  getCollection: () => getCategoriesCollection($db),
  getDoc: (id: string) => getCategoriesDoc($db, id)
})

function getCategoriesCollection ($db: Firestore) {
  return collection($db, 'categories').withConverter(categoryConverter)
}

function getCategoriesDoc ($db: Firestore, id: string) {
  return doc($db, 'categories', id).withConverter(categoryConverter)
}