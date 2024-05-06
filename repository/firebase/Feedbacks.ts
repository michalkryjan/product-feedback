import { collection, type DocumentData, type Firestore } from 'firebase/firestore'
import * as Collections from 'types/firebase/collections'
import type { IFeedbacks } from 'types/repository'
import type { _RefFirestore } from 'vuefire'

export default ($db: Firestore): IFeedbacks => ({
  getCollection: () => {
    return useCollection(collection($db, 'feedbacks')) as _RefFirestore<Array<DocumentData & Collections.Feedback>>
  },
  addNewItem: (collection, options) => {

  },
  updateItem: (collection, options) => {

  }
})