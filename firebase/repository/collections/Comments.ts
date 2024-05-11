import { addDoc, collection, doc, type Firestore } from 'firebase/firestore'
import type { IComment as CommentsDoc } from 'types/firebase/data/docs'
import type { IComments as CommentsRepository } from 'types/firebase/repository'
import { commentConverter } from '~/firebase/converters'

export default ($db: Firestore): CommentsRepository => ({
  getCollection: () => getCommentsCollection($db),
  getDoc: (id) => getCommentsDoc($db, id),
  addNewDoc: (data) => addNewCommentsDoc($db, data)
})

function getCommentsCollection ($db: Firestore) {
  return collection($db, 'comments').withConverter(commentConverter)
}

function getCommentsDoc ($db: Firestore, id: string) {
  return doc($db, 'comments', id).withConverter(commentConverter)
}

function addNewCommentsDoc ($db: Firestore, data: CommentsDoc) {
  return addDoc(getCommentsCollection($db), data)
}