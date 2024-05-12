type TTypography = |
  'title-1' |
  'title-2' |
  'title-3' |
  'title-4' |
  'text-body-1' |
  'text-body-2' |
  'text-body-3' |
  'text-label-1' |
  'text-label-2' |
  'text-label-3' |
  'text-label-4'

interface IFeedback {
  id: string
  title: string
  description: string
  upvotes: number
  created_by: IUser['id']
  categories: Array<ICategory['id']>
  status: IStatus['id']
  comments?: Array<IComment['id']>
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
  created_by: IUser['id']
  replies?: Array<IReply['id']>
}

interface IReply {
  id: string
  content: string
  created_by: IUser['id']
}

interface IUser {
  id: string
  image_url: string
  fullname: string
  username: string
}