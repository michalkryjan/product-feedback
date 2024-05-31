import { collection, doc, type CollectionReference, type DocumentReference, type Firestore } from 'firebase/firestore'
import { StatusesConverter } from './Converter'

interface IStatusesService {
  getCollection: () => CollectionReference<IStatus | null, IStatus>
  getDoc: (id: string) => DocumentReference<IStatus | null, IStatus>
}

class StatusesService implements IStatusesService {
  private readonly firestore: Firestore
  private readonly converter: StatusesConverter

  constructor (firestore: Firestore) {
    this.firestore = firestore
    this.converter = new StatusesConverter()
  }

  public getCollection () {
    return collection(this.firestore, 'statuses').withConverter(this.converter)
  }

  public getDoc (id: string) {
    return doc(this.firestore, 'statuses', id).withConverter(this.converter)
  }
}

export { StatusesService }
