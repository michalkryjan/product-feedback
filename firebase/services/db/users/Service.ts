import { collection, doc, type CollectionReference, type DocumentReference, type Firestore } from 'firebase/firestore'
import type { Models } from 'types/models'
import { UserConverter } from './Converter'

interface IFirebaseUsersService {
  getCollectionRef: () => CollectionReference<Models.IUser | null, Models.IUser>
  getDocRef: (id: Models.IUser['id']) => DocumentReference<Models.IUser | null, Models.IUser>
}

export class FirebaseUsersService implements IFirebaseUsersService {
  private readonly firestore: Firestore
  private readonly converter: UserConverter
  private collectionRef: CollectionReference<Models.IUser | null, Models.IUser> | undefined

  constructor (firestore: Firestore) {
    this.firestore = firestore
    this.converter = new UserConverter()
    this.collectionRef = undefined
  }

  public getCollectionRef () {
    if (!this.collectionRef) {
      this.collectionRef = collection(this.firestore, 'users').withConverter(this.converter)
    }

    return this.collectionRef
  }

  public getDocRef (id: Models.IUser['id']) {
    return doc(this.firestore, 'users', id).withConverter(this.converter)
  }
}
