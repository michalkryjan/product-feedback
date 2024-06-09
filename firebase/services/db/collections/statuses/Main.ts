import { collection, doc, type CollectionReference, type DocumentReference, type Firestore } from 'firebase/firestore'
import { StatusConverter } from './Converter'

interface IFirebaseStatusesCollection {
  getCollectionRef: () => CollectionReference<IStatus | null, IStatus>
  getDocRef: (id: string) => DocumentReference<IStatus | null, IStatus>
}

export class FirebaseStatusesCollection implements IFirebaseStatusesCollection {
  private readonly firestore: Firestore
  private readonly converter: StatusConverter

  private collectionRef: CollectionReference<IStatus | null, IStatus> | undefined

  constructor (firestore: Firestore) {
    this.firestore = firestore
    this.converter = new StatusConverter()

    this.collectionRef = undefined
  }

  public getCollectionRef () {
    if (!this.collectionRef) {
      this.collectionRef = collection(this.firestore, 'statuses').withConverter(this.converter)
    }

    return this.collectionRef
  }

  public getDocRef (id: string) {
    return doc(this.firestore, 'statuses', id).withConverter(this.converter)
  }
}
