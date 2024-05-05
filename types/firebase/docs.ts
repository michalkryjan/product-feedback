export type Feedback = {
  id: string
  title: string
  description: string
  upvotes: number
  created_by: User['id']
  categories: Array<Category['id']>
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
  created_by: User['id']
  replies?: Array<Reply['id']>
}

export type Reply = {
  id: string
  content: string
  created_by: User['id']
}

export type User = {
  id: string
  image_url: string
  fullname: string
  username: string
}