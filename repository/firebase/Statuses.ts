import { collection, type DocumentData, type Firestore } from 'firebase/firestore'
import * as Collections from 'types/firebase/collections'
import type { IStatuses } from 'types/repository'
import type { _RefFirestore } from 'vuefire'

export default ($db: Firestore): IStatuses => ({
  getCollection: () => {
    return useCollection(collection($db, 'statuses')) as _RefFirestore<Array<DocumentData & Collections.Status>>
  }
})