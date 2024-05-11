import { collection, type Firestore } from 'firebase/firestore'
import * as Collections from 'types/data/firebase/collections'
import type { IUsers } from 'types/repository'
import type { _RefFirestore } from 'vuefire'

export default ($db: Firestore): IUsers => ({
  getCollection: () => {
    return useCollection(collection($db, 'users')) as _RefFirestore<Collections.IUser>
  }
})