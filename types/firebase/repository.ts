import type { CollectionReference, DocumentReference } from 'firebase/firestore'
import * as Docs from 'types/firebase/data/docs'

export interface IRepository {
  collections: ICollections
}

interface ICollections {
  categories: ICategories
  comments: IComments
  feedbacks: IFeedbacks
  replies: IReplies
  statuses: IStatuses
  users: IUsers
}

export interface ICategories {
  getCollection: () => CollectionReference<Docs.ICategory, Docs.ICategory>
  getDoc: (id: string) => DocumentReference<Docs.ICategory, Docs.ICategory>
}

export interface IComments {
  getCollection: () => CollectionReference<Docs.IComment, Docs.IComment>
  getDoc: (id: string) => DocumentReference<Docs.IComment, Docs.IComment>
  addNewDoc: (data: Docs.IComment) => Promise<DocumentReference<Docs.IComment, Docs.IComment>>
}

export interface IFeedbacks {
  getCollection: () => CollectionReference<Docs.IFeedback, Docs.IFeedback>
  getDoc: (id: string) => DocumentReference<Docs.IFeedback, Docs.IFeedback>
  addNewDoc: (data: Docs.IFeedback) => Promise<DocumentReference<Docs.IFeedback, Docs.IFeedback>>
  updateDoc: (id: string, data: Pick<Docs.IFeedback, 'title' | 'categories' | 'status' | 'description'>) => Promise<void>
}

export interface IReplies {
  getCollection: () => CollectionReference<Docs.IReply, Docs.IReply>
  getDoc: (id: string) => DocumentReference<Docs.IReply, Docs.IReply>
  addNewDoc: (data: Docs.IReply) => Promise<DocumentReference<Docs.IReply, Docs.IReply>>
}

export interface IStatuses {
  getCollection: () => CollectionReference<Docs.IStatus, Docs.IStatus>
  getDoc: (id: string) => DocumentReference<Docs.IStatus, Docs.IStatus>
}

export interface IUsers {
  getCollection: () => CollectionReference<Docs.IUser, Docs.IUser>
  getDoc: (id: string) => DocumentReference<Docs.IUser, Docs.IUser>
}
