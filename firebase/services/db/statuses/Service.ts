import { collection, doc, type CollectionReference, type DocumentReference, type Firestore } from 'firebase/firestore'
import type { Models } from 'types/models'
import { StatusConverter } from './Converter'

interface IFirebaseStatusesService {
  getCollectionRef: () => CollectionReference<Models.IStatus | null, Models.IStatus>
  getDocRef: (id: string) => DocumentReference<Models.IStatus | null, Models.IStatus>
}

export class FirebaseStatusesService implements IFirebaseStatusesService {
  private readonly firestore: Firestore
  private readonly converter: StatusConverter

  private collectionRef: CollectionReference<Models.IStatus | null, Models.IStatus> | undefined

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