import { addDoc, collection, doc, type CollectionReference, type DocumentReference, type Firestore } from 'firebase/firestore'
import { RepliesConverter } from './Converter'

interface IRepliesService {
  getCollection: () => CollectionReference<IReply | null, IReply>
  getDoc: (id: string) => DocumentReference<IReply | null, IReply>
  addNewDoc: (data: Omit<IReply, 'id'>) => Promise<DocumentReference<IReply | null, IReply>>
}

class RepliesService implements IRepliesService {
  private readonly firestore: Firestore
  private readonly converter: RepliesConverter

  constructor (firestore: Firestore) {
    this.firestore = firestore
    this.converter = new RepliesConverter()
  }

  public getCollection () {
    return collection(this.firestore, 'replies').withConverter(this.converter)
  }

  public getDoc (id: string) {
    return doc(this.firestore, 'replies', id).withConverter(this.converter)
  }

  public addNewDoc (data: Omit<IReply, 'id'>) {
    return addDoc(this.getCollection(), data) as Promise<DocumentReference<IReply | null, IReply>>
  }
}

export { RepliesService }
