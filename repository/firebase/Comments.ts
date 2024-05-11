import { collection, type Firestore } from 'firebase/firestore'
import * as Collections from 'types/data/firebase/collections'
import type { IComments } from 'types/repository'
import type { _RefFirestore } from 'vuefire'

export default ($db: Firestore): IComments => ({
  getCollection: () => {
    return useCollection(collection($db, 'comments')) as _RefFirestore<Collections.IComment>
  },
  addNewItem: (collectionRef, options) => {

  }
})