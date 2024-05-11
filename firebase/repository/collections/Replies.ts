import { addDoc, collection, doc, type DocumentReference, type Firestore } from 'firebase/firestore'
import type { IRepliesRepository } from 'types/firebase/repository'
import { replyConverter } from '~/firebase/converters'

export default ($db: Firestore): IRepliesRepository => ({
  getCollection: () => getRepliesCollection($db),
  getDoc: (id) => getRepliesDoc($db, id),
  addNewDoc: (data) => addNewRepliesDoc($db, data)
})

function getRepliesCollection ($db: Firestore) {
  return collection($db, 'replies').withConverter(replyConverter)
}

function getRepliesDoc ($db: Firestore, id: string) {
  return doc($db, 'replies', id).withConverter(replyConverter)
}

function addNewRepliesDoc ($db: Firestore, data: Omit<IReply, 'id'>) {
  return addDoc(getRepliesCollection($db), data) as Promise<DocumentReference<IReply, IReply>>
}