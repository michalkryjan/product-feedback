import * as Collections from 'types/data/firebase/collections'
import * as Docs from 'types/data/firebase/docs'
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
  getCollection: () => _RefFirestore<Collections.IFeedback>
  addNewItem: (collection: _RefFirestore<Collections.IFeedback>, options: Omit<Docs.IFeedback, 'id'>) => void
  updateItem: (collection: _RefFirestore<Collections.IFeedback>, options: Pick<Docs.IFeedback, 'title' | 'categories' | 'status' | 'description'>) => void
}

export interface ICategories {
  getCollection: () => _RefFirestore<Collections.ICategory>
}

export interface IStatuses {
  getCollection: () => _RefFirestore<Collections.IStatus>
}

export interface IComments {
  getCollection: () => _RefFirestore<Collections.IComment>
  addNewItem: (collection: _RefFirestore<Collections.IComment>, options: Omit<Docs.IComment, 'id'>) => void
}

export interface IReplies {
  getCollection: () => _RefFirestore<Collections.IReply>
  addNewItem: (collection: _RefFirestore<Collections.IReply>, options: Omit<Docs.IReply, 'id'>) => void
}

export interface IUsers {
  getCollection: () => _RefFirestore<Collections.IUser>
}
