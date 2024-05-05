import type { DocumentData } from 'firebase/firestore'
import * as Collections from 'types/firebase/collections'
import type { _RefFirestore } from 'vuefire'

export interface IRepository {
  feedbacks: IFeedbacks
  categories: ICategories
  statuses: IStatuses
  comments: IComments
  replies: IReplies
  users: IUsers
}

export interface IFeedbacks {
  getCollection: () => _RefFirestore<Array<DocumentData & Collections.Feedback>>
}

export interface ICategories {
  getCollection: () => _RefFirestore<Array<DocumentData & Collections.Category>>
}

export interface IStatuses {
  getCollection: () => _RefFirestore<Array<DocumentData & Collections.Status>>
}

export interface IComments {
  getCollection: () => _RefFirestore<Array<DocumentData & Collections.Comment>>
}

export interface IReplies {
  getCollection: () => _RefFirestore<Array<DocumentData & Collections.Reply>>
}

export interface IUsers {
  getCollection: () => _RefFirestore<Array<DocumentData & Collections.User>>
}
