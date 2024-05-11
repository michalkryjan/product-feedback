import { addDoc, collection, doc, type Firestore } from 'firebase/firestore'
import type { IReply as ReplyDoc } from 'types/firebase/data/docs'
import type { IReplies as RepliesRepository } from 'types/firebase/repository'
import { replyConverter } from '~/firebase/converters'

export default ($db: Firestore): RepliesRepository => ({
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

function addNewRepliesDoc ($db: Firestore, data: ReplyDoc) {
  return addDoc(getRepliesCollection($db), data)
}