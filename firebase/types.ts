import type { CategoriesService } from './services/db/categories/Service'
import type { CommentsService } from './services/db/comments/Service'
import type { FeedbacksService } from './services/db/feedbacks/Service'
import type { StatusesService } from './services/db/statuses/Service'
import type { UsersService } from './services/db/users/Service'

export interface IFirebaseRepository {
  db: IDbService
}

interface IDbService {
  categories: CategoriesService
  comments: CommentsService
  feedbacks: FeedbacksService
  statuses: StatusesService
  users: UsersService
}
