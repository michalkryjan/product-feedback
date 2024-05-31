import { type Firestore } from 'firebase/firestore'
import { CategoriesService } from './services/db/categories/Service'
import { CommentsService } from './services/db/comments/Service'
import { FeedbacksService } from './services/db/feedbacks/Service'
import { RepliesService } from './services/db/replies/Service'
import { StatusesService } from './services/db/statuses/Service'
import { UsersService } from './services/db/users/Service'
import type { IFirebaseRepository } from './types'

export default (firestore: Firestore): IFirebaseRepository => ({
  db: {
    categories: new CategoriesService(firestore),
    comments: new CommentsService(firestore),
    feedbacks: new FeedbacksService(firestore),
    replies: new RepliesService(firestore),
    statuses: new StatusesService(firestore),
    users: new UsersService(firestore)
  }
})