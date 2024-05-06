import type { DocumentData } from 'firebase/firestore'
import * as Collections from 'types/firebase/collections'
import * as Docs from 'types/firebase/docs'
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
  addNewItem: (
    collection: _RefFirestore<Array<DocumentData & Collections.Feedback>>,
    options: Omit<Docs.Feedback, 'id'>
  ) => void
  updateItem: (
    collection: _RefFirestore<Array<DocumentData & Collections.Feedback>>,
    options: Pick<Docs.Feedback, 'title' | 'categories' | 'status' | 'description'>
  ) => void
}

export interface ICategories {
  getCollection: () => _RefFirestore<Array<DocumentData & Collections.Category>>
}

export interface IStatuses {
  getCollection: () => _RefFirestore<Array<DocumentData & Collections.Status>>
}

export interface IComments {
  getCollection: () => _RefFirestore<Array<DocumentData & Collections.Comment>>
  addNewItem: (
    collection: _RefFirestore<Array<DocumentData & Collections.Comment>>,
    options: Omit<Docs.Comment, 'id'>
  ) => void
}

export interface IReplies {
  getCollection: () => _RefFirestore<Array<DocumentData & Collections.Reply>>
  addNewItem: (
    collection: _RefFirestore<Array<DocumentData & Collections.Reply>>,
    options: Omit<Docs.Reply, 'id'>
  ) => void
}

export interface IUsers {
  getCollection: () => _RefFirestore<Array<DocumentData & Collections.User>>
}
