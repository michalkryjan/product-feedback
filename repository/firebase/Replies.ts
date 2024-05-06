import { collection, type DocumentData, type Firestore } from 'firebase/firestore'
import * as Collections from 'types/firebase/collections'
import type { IReplies } from 'types/repository'
import type { _RefFirestore } from 'vuefire'

export default ($db: Firestore): IReplies => ({
  getCollection: () => {
    return useCollection(collection($db, 'replies')) as _RefFirestore<Array<DocumentData & Collections.Reply>>
  },
  addNewItem: (collection, options) => {

  }
})