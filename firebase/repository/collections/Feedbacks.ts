import { addDoc, collection, doc, updateDoc, type Firestore } from 'firebase/firestore'
import type { IFeedback as FeedbackDoc } from 'types/firebase/data/docs'
import type { IFeedbacks as FeedbacksRepository } from 'types/firebase/repository'
import { feedbackConverter } from '~/firebase/converters'

export default ($db: Firestore): FeedbacksRepository => ({
  getCollection: () => getFeedbacksCollection($db),
  getDoc: (id) => getFeedbacksDoc($db, id),
  addNewDoc: (data) => addNewFeedbacksDoc($db, data),
  updateDoc: (id, data) => updateFeedbacksDoc($db, id, data)
})

function getFeedbacksCollection ($db: Firestore) {
  return collection($db, 'feedbacks').withConverter(feedbackConverter)
}

function getFeedbacksDoc ($db: Firestore, id: string) {
  return doc($db, 'feedbacks', id).withConverter(feedbackConverter)
}

function addNewFeedbacksDoc ($db: Firestore, data: FeedbackDoc) {
  return addDoc(getFeedbacksCollection($db), data)
}

function updateFeedbacksDoc ($db: Firestore, id: string, data: Pick<FeedbackDoc, 'title' | 'categories' | 'status' | 'description'>) {
  return updateDoc(getFeedbacksDoc($db, id), data)
}