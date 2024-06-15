import type { DocumentReference, Timestamp } from 'firebase/firestore'

export declare namespace Models {
  interface IFeedback {
    id: string
    title: string
    description: string
    category_name: string
    status_name: string
    upvotes_count: number
    comments_count: number
    created_by: DocumentReference<IUser | null, IUser>
    created_date: Timestamp
  }

  interface IStatus {
    id: string
    order: number
    name: string
    description: string
  }

  interface ICategory {
    id: string
    name: string
  }

  interface IComment {
    id: string
    content: string
    created_by: IUser
    created_date: Timestamp
  }

  interface IReply {
    id: string
    content: string
    replying_to: string
    created_by: IUser
    created_date: Timestamp
  }

  interface IUser {
    id: string
    image_url: string
    fullname: string
    username: string
    created_date: Timestamp
  }
}