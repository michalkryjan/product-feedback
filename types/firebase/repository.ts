import type { CollectionReference, DocumentReference } from 'firebase/firestore'

export interface IFirebaseRepository {
  collections: ICollectionsRepository
}

interface ICollectionsRepository {
  categories: ICategoriesRepository
  comments: ICommentsRepository
  feedbacks: IFeedbacksRepository
  replies: IRepliesRepository
  statuses: IStatusesRepository
  users: IUsersRepository
}

export interface ICategoriesRepository {
  getCollection: () => CollectionReference<ICategory, ICategory>
  getDoc: (id: string) => DocumentReference<ICategory, ICategory>
}

export interface ICommentsRepository {
  getCollection: () => CollectionReference<IComment, IComment>
  getDoc: (id: string) => DocumentReference<IComment, IComment>
  addNewDoc: (data: Omit<IComment, 'id'>) => Promise<DocumentReference<IComment, IComment>>
}

export interface IFeedbacksRepository {
  getCollection: () => CollectionReference<IFeedback, IFeedback>
  getDoc: (id: string) => DocumentReference<IFeedback, IFeedback>
  addNewDoc: (data: Omit<IFeedback, 'id'>) => Promise<DocumentReference<IFeedback, IFeedback>>
  updateDoc: (id: string, data: Pick<IFeedback, 'title' | 'categories' | 'description'>) => Promise<void>,
  deleteDoc: (id: string) => Promise<void>
}

export interface IRepliesRepository {
  getCollection: () => CollectionReference<IReply, IReply>
  getDoc: (id: string) => DocumentReference<IReply, IReply>
  addNewDoc: (data: Omit<IReply, 'id'>) => Promise<DocumentReference<IReply, IReply>>
}

export interface IStatusesRepository {
  getCollection: () => CollectionReference<IStatus, IStatus>
  getDoc: (id: string) => DocumentReference<IStatus, IStatus>
}

export interface IUsersRepository {
  getCollection: () => CollectionReference<IUser, IUser>
  getDoc: (id: string) => DocumentReference<IUser, IUser>
}
