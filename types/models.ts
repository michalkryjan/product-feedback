export interface IFeedback {
  id: string
  title: string
  description: string
  upvotes: number
  created_by: IUser['id']
  categories: Array<ICategory['id']>
  status: IStatus['id']
  comments?: Array<IComment['id']>
}

export interface IStatus {
  id: string
  order: number
  name: string
  description: string
  color: string
}

export interface ICategory {
  id: string
  name: string
}

export interface IComment {
  id: string
  content: string
  created_by: IUser['id']
  replies?: Array<IReply['id']>
}

export interface IReply {
  id: string
  content: string
  created_by: IUser['id']
}

export interface IUser {
  id: string
  image_url: string
  fullname: string
  username: string
}