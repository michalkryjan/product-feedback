import { collection, type DocumentData, type Firestore } from 'firebase/firestore'
import * as Collections from 'types/firebase/collections'
import type { IComments } from 'types/repository'
import type { _RefFirestore } from 'vuefire'

export default ($db: Firestore): IComments => ({
  getCollection: () => {
    return useCollection(collection($db, 'comments')) as _RefFirestore<Array<DocumentData & Collections.Comment>>
  },
  addNewItem: (collection, options) => {

  }
})