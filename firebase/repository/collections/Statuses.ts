import { collection, doc, type Firestore } from 'firebase/firestore'
import type { IStatuses as StatusesRepository } from 'types/firebase/repository'
import { statusConverter } from '~/firebase/converters'

export default ($db: Firestore): StatusesRepository => ({
  getCollection: () => getStatusesCollection($db),
  getDoc: (id) => getStatusesDoc($db, id)
})

function getStatusesCollection ($db: Firestore) {
  return collection($db, 'statuses').withConverter(statusConverter)
}

function getStatusesDoc ($db: Firestore, id: string) {
  return doc($db, 'statuses', id).withConverter(statusConverter)
}
