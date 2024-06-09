import type { CategoriesService } from './services/db/collections/categories/Service'
import type { CommentsService } from './services/db/collections/comments/Service'
import type { FeedbacksService } from './services/db/collections/feedbacks/Service'
import type { RepliesService } from './services/db/collections/replies/Service'
import type { StatusesService } from './services/db/collections/statuses/Service'
import type { UsersService } from './services/db/collections/users/Service'
import type { StorageService } from './services/storage/Service'

export interface IFirebaseRepository {
  db: IDbService
  storage: StorageService
}

interface IDbService {
  categories: CategoriesService
  comments: CommentsService
  replies: RepliesService
  feedbacks: FeedbacksService
  statuses: StatusesService
  users: UsersService
}
