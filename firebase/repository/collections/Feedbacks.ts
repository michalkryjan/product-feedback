import { addDoc, collection, deleteDoc, doc, updateDoc, type DocumentReference, type Firestore } from 'firebase/firestore'
import type { IFeedbacksRepository } from 'types/firebase/repository'
import { feedbackConverter } from '~/firebase/converters'

export default ($db: Firestore): IFeedbacksRepository => ({
  getCollection: () => getFeedbacksCollection($db),
  getDoc: (id) => getFeedbacksDoc($db, id),
  addNewDoc: (data) => addNewFeedbacksDoc($db, data),
  updateDoc: (id, data) => updateFeedbacksDoc($db, id, data),
  deleteDoc: (id) => deleteFeedbacksDoc($db, id)
})

function getFeedbacksCollection ($db: Firestore) {
  return collection($db, 'feedbacks').withConverter(feedbackConverter)
}

function getFeedbacksDoc ($db: Firestore, id: string) {
  return doc($db, 'feedbacks', id).withConverter(feedbackConverter)
}

function addNewFeedbacksDoc ($db: Firestore, data: Omit<IFeedback, 'id'>) {
  return addDoc(getFeedbacksCollection($db), data) as Promise<DocumentReference<IFeedback, IFeedback>>
}

function updateFeedbacksDoc ($db: Firestore, id: string, data: Pick<IFeedback, 'title' | 'categories' | 'description'>) {
  return updateDoc(getFeedbacksDoc($db, id), data)
}

function deleteFeedbacksDoc ($db: Firestore, id: string) {
  return deleteDoc(getFeedbacksDoc($db, id))
}