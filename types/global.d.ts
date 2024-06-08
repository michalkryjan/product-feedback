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
  created_date: {
    seconds: number
    nanoseconds: number
  }
  category: ICategory['id']
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
  created_date: {
    seconds: number
    nanoseconds: number
  }
  replies: Array<IComment['id']>
}

interface IReply {
  id: string
  content: string
  created_by: IUser['id']
  created_date: {
    seconds: number
    nanoseconds: number
  }
  replying_to: IUser['id']
}

interface IUser {
  id: string
  created_date: {
    seconds: number
    nanoseconds: number
  }
  image_url: string
  fullname: string
  username: string
}

interface IFeedbackExtended extends Omit<IFeedback, 'category' | 'status'> {
  category?: ICategory
  status?: IStatus
}

interface ICommentExtended extends Omit<IComment, 'replies' | 'created_by'> {
  created_by: IUser
  replies: Array<ICommentExtended>
}

interface IFeedbacksGroup {
  feedbacks: IFeedbackExtended[]
  status: IStatus
}