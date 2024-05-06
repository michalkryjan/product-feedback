import { collection, type DocumentData, type Firestore } from 'firebase/firestore'
import * as Collections from 'types/firebase/collections'
import type { IUsers } from 'types/repository'
import type { _RefFirestore } from 'vuefire'

export default ($db: Firestore): IUsers => ({
  getCollection: () => {
    return useCollection(collection($db, 'users')) as _RefFirestore<Array<DocumentData & Collections.User>>
  }
})