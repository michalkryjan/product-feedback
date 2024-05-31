import type { ICategoriesService } from './services/db/categories/types'
import type { ICommentsService } from './services/db/comments/types'
import type { IFeedbacksService } from './services/db/feedbacks/types'
import type { IRepliesService } from './services/db/replies/types'
import type { IStatusesService } from './services/db/statuses/types'
import type { IUsersService } from './services/db/users/types'

export interface IFirebaseRepository {
  db: IDbService
}

interface IDbService {
  categories: ICategoriesService
  comments: ICommentsService
  feedbacks: IFeedbacksService
  replies: IRepliesService
  statuses: IStatusesService
  users: IUsersService
}
