import { collection, type Firestore } from 'firebase/firestore'
import * as Collections from 'types/data/firebase/collections'
import type { IStatuses } from 'types/repository'
import type { _RefFirestore } from 'vuefire'

export default ($db: Firestore): IStatuses => ({
  getCollection: () => {
    return useCollection(collection($db, 'statuses')) as _RefFirestore<Collections.IStatus>
  }
})