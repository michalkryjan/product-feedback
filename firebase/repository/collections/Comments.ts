import { addDoc, collection, doc, type DocumentReference, type Firestore } from 'firebase/firestore'
import type { ICommentsRepository } from 'types/firebase/repository'
import { commentConverter } from '~/firebase/converters'

export default ($db: Firestore): ICommentsRepository => ({
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

function addNewCommentsDoc ($db: Firestore, data: Omit<IComment, 'id'>) {
  return addDoc(getCommentsCollection($db), data) as Promise<DocumentReference<IComment, IComment>>
}