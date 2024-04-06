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
  category: string
  upvotes: number
  status: FeedbackStatus
  description: string
  comments: Comment[]
}

type FeedbackStatus = {
  id: number
  name: string
  color: string
}

type Comment = {
  id: number
  content: string
  user: User
  replies?: CommentReply[]
}

type CommentReply = {
  content: string
  replyingTo: string
  user: string
}

type User = {
  image: string
  name: string
  username: string
}