import type { Firestore } from 'firebase/firestore'
import type { FirebaseStorage } from 'firebase/storage'
import { FirebaseCategoriesService } from './services/db/CategoriesService'
import { FirebaseCommentsService } from './services/db/CommentsService'
import { FirebaseFeedbacksService } from './services/db/FeedbacksService'
import { FirebaseStatusesService } from './services/db/StatusesService'
import { FirebaseUsersService } from './services/db/UsersService'
import { FirebaseStorageService } from './services/storage/StorageService'

interface IFirebaseDbService {
  categories: FirebaseCategoriesService
  comments: FirebaseCommentsService
  feedbacks: FirebaseFeedbacksService
  statuses: FirebaseStatusesService
  users: FirebaseUsersService
}

interface IFirebaseRepository {
  db: IFirebaseDbService
  storage: FirebaseStorageService
}

export class FirebaseRepository implements IFirebaseRepository {
  public db: IFirebaseDbService
  public storage: FirebaseStorageService

  constructor (firestore: Firestore, firebaseStorage: FirebaseStorage) {
    this.db = {
      categories: new FirebaseCategoriesService(firestore),
      comments: new FirebaseCommentsService(firestore),
      feedbacks: new FirebaseFeedbacksService(firestore),
      statuses: new FirebaseStatusesService(firestore),
      users: new FirebaseUsersService(firestore)
    }
    this.storage = new FirebaseStorageService(firebaseStorage)
  }
}