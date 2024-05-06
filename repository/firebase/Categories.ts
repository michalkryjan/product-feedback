import { collection, type DocumentData, type Firestore } from 'firebase/firestore'
import * as Collections from 'types/firebase/collections'
import type { ICategories } from 'types/repository'
import type { _RefFirestore } from 'vuefire'

export default ($db: Firestore): ICategories => ({
  getCollection: () => {
    return useCollection(collection($db, 'categories')) as _RefFirestore<Array<DocumentData & Collections.Category>>
  }
})