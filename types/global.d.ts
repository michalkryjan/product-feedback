type Typography = |
  'title-1' |
  'title-2' |
  'title-3' |
  'title-4' |
  'text-body-1' |
  'text-body-2' |
  'text-body-3' |
  'text-label-1' |
  'text-label-2' |
  'text-label-3'

type Feedback = {
  id: number
  title: string
  category: FeedbackCategory
  upvotes: number
  status: FeedbackStatus
  description: string
  comments?: Commentary[]
}

type FeedbackStatus = {
  id: number
  order: number
  name: string
  color: string
}

type FeedbackCategory = {
  id: number
  name: string
}

type Commentary = {
  id: number
  content: string
  user: User
  replies?: CommentaryReply[]
}

type CommentaryReply = {
  content: string
  replyingTo: string
  user: User
}

type User = {
  image: string
  name: string
  username: string
}