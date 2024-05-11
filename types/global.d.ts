import { IRepository } from 'types/firebase/repository'

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
  'text-label-3' |
  'text-label-4'

type Feedback = {
  id: number
  title: string
  description: string
  upvotes: number
  category: FeedbackCategory
  status: FeedbackStatus
  comments?: Commentary[]
}

type FeedbackStatus = {
  id: string
  order: number
  name: string
  description: string
  color: string
}

type FeedbackCategory = {
  id: string
  name: string
}

type Commentary = {
  id: string
  content: string
  user: User
  replies?: CommentaryReply[]
}

type CommentaryReply = {
  content: string
  user: User
}

type User = {
  image: string
  name: string
  username: string
}

interface IPluginInjections {
  $repo: IRepository
}

declare module '#app' {
  interface NuxtApp extends IPluginInjections {}
}

declare module 'nuxt/dist/app/nuxt' {
  interface NuxtApp extends IPluginInjections {}
}