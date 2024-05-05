export type Feedback = {
  id: string
  title: string
  description: string
  upvotes: number
  createdBy: User['id']
  category: Category['id']
  status: Status['id']
  comments?: Array<Comment['id']>
}

export type Status = {
  id: string
  order: number
  name: string
  description: string
  color: string
}

export type Category = {
  id: string
  name: string
}

export type Comment = {
  id: string
  content: string
  createdBy: User['id']
  replies?: Array<Reply['id']>
}

export type Reply = {
  id: string
  content: string
  createdBy: User['id']
}

export type User = {
  id: string
  image: string
  name: string
  username: string
}