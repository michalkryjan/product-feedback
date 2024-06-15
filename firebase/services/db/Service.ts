import type { Firestore } from 'firebase/firestore'
import { FirebaseCategoriesService } from './categories/Service'
import { FirebaseFeedbacksService } from './feedbacks/Service'
import { FirebaseStatusesService } from './statuses/Service'
import { FirebaseUsersService } from './users/Service'

export class FirebaseDbService {
  public readonly feedbacks: FirebaseFeedbacksService
  public readonly categories: FirebaseCategoriesService
  public readonly statuses: FirebaseStatusesService
  public readonly users: FirebaseUsersService

  constructor (firestore: Firestore) {
    this.feedbacks = new FirebaseFeedbacksService(firestore)
    this.categories = new FirebaseCategoriesService(firestore)
    this.statuses = new FirebaseStatusesService(firestore)
    this.users = new FirebaseUsersService(firestore)
  }
}