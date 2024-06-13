import type { Firestore } from 'firebase/firestore'
import type { FirebaseStorage } from 'firebase/storage'

import { FirebaseCategoriesService } from './services/db/categories/Service'
import { FirebaseFeedbacksService } from './services/db/feedbacks/Service'
import { FirebaseStatusesService } from './services/db/statuses/Service'
import { FirebaseUsersService } from './services/db/users/Service'

import { FirebaseStorageService } from './services/storage/Service'

interface IFirebaseDbService {
  feedbacks: FirebaseFeedbacksService
  categories: FirebaseCategoriesService
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
      feedbacks: new FirebaseFeedbacksService(firestore),
      categories: new FirebaseCategoriesService(firestore),
      statuses: new FirebaseStatusesService(firestore),
      users: new FirebaseUsersService(firestore)
    }
    this.storage = new FirebaseStorageService(firebaseStorage)
  }
}