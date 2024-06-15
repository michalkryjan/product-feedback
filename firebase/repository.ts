import type { Firestore } from 'firebase/firestore'
import type { FirebaseStorage } from 'firebase/storage'
import { FirebaseDbService } from './services/db/Service'
import { FirebaseStorageService } from './services/storage/Service'

interface IFirebaseRepository {
  db: FirebaseDbService
  storage: FirebaseStorageService
}

export class FirebaseRepository implements IFirebaseRepository {
  public db: FirebaseDbService
  public storage: FirebaseStorageService

  constructor (firestore: Firestore, firebaseStorage: FirebaseStorage) {
    this.db = new FirebaseDbService(firestore)
    this.storage = new FirebaseStorageService(firebaseStorage)
  }
}