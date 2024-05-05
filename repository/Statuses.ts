import { collection, type DocumentData, type Firestore } from 'firebase/firestore'
import * as FirestoreCollections from 'types/firestore/collections'
import { type _RefFirestore } from 'vuefire'

export default ($db: Firestore) => ({
  getCollection: (): _RefFirestore<Array<DocumentData & FirestoreCollections.Status>> => {
    return useCollection(collection($db, 'statuses')) as _RefFirestore<Array<DocumentData & FirestoreCollections.Status>>
  }
})