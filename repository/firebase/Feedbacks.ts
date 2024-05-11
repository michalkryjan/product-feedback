import { collection, type Firestore } from 'firebase/firestore'
import * as Collections from 'types/data/firebase/collections'
import type { IFeedbacks } from 'types/repository'
import type { _RefFirestore } from 'vuefire'

export default ($db: Firestore): IFeedbacks => ({
  getCollection: () => {
    return useCollection(collection($db, 'feedbacks')) as _RefFirestore<Collections.IFeedback>
  },
  addNewItem: (collectionRef, options) => {

  },
  updateItem: (collectionRef, options) => {

  }
})