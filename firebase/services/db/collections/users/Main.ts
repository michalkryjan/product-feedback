import { collection, doc, type CollectionReference, type DocumentReference, type Firestore } from 'firebase/firestore'
import { UserConverter } from './Converter'

interface IFirebaseUsersCollection {
  getCollectionRef: () => CollectionReference<IUser | null, IUser>
  getDocRef: (id: string) => DocumentReference<IUser | null, IUser>
}

export class FirebaseUsersCollection implements IFirebaseUsersCollection {
  private readonly firestore: Firestore
  private readonly converter: UserConverter

  private collectionRef: CollectionReference<IUser | null, IUser> | undefined

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

  public getDocRef (id: string) {
    return doc(this.firestore, 'users', id).withConverter(this.converter)
  }
}
