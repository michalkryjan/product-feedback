import type { Firestore } from 'firebase/firestore'
import type { FirebaseStorage } from 'firebase/storage'
import { CategoriesService } from './services/db/collections/categories/Service'
import { CommentsService } from './services/db/collections/comments/Service'
import { FeedbacksService } from './services/db/collections/feedbacks/Service'
import { RepliesService } from './services/db/collections/replies/Service'
import { StatusesService } from './services/db/collections/statuses/Service'
import { UsersService } from './services/db/collections/users/Service'
import { StorageService } from './services/storage/Service'
import type { IFirebaseRepository } from './types'

export default (firestore: Firestore, firebaseStorage: FirebaseStorage): IFirebaseRepository => ({
  db: {
    categories: new CategoriesService(firestore),
    comments: new CommentsService(firestore),
    replies: new RepliesService(firestore),
    feedbacks: new FeedbacksService(firestore),
    statuses: new StatusesService(firestore),
    users: new UsersService(firestore)
  },
  storage: new StorageService(firebaseStorage)
})