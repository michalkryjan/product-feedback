import { collection, type Firestore } from 'firebase/firestore'
import * as Collections from 'types/data/firebase/collections'
import type { IReplies } from 'types/repository'
import type { _RefFirestore } from 'vuefire'

export default ($db: Firestore): IReplies => ({
  getCollection: () => {
    return useCollection(collection($db, 'replies')) as _RefFirestore<Collections.IReply>
  },
  addNewItem: (collectionRef, options) => {

  }
})