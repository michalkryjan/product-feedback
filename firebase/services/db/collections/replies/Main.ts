import { addDoc, collection, doc, type CollectionReference, type DocumentReference, type Firestore } from 'firebase/firestore'
import { ReplyConverter } from './Converter'

interface IFirebaseRepliesCollection {
  getCollectionRef: () => CollectionReference<IReply | null, IReply>
  getDocRef: (id: string) => DocumentReference<IReply | null, IReply>
  addNewDoc: (data: Omit<IReply, 'id'>) => Promise<DocumentReference<IReply | null, IReply>>
}

export class FirebaseRepliesCollection implements IFirebaseRepliesCollection {
  private readonly firestore: Firestore
  private readonly converter: ReplyConverter

  private collectionRef: CollectionReference<IReply | null, IReply> | undefined

  constructor (firestore: Firestore) {
    this.firestore = firestore
    this.converter = new ReplyConverter()

    this.collectionRef = undefined
  }

  public getCollectionRef () {
    if (!this.collectionRef) {
      this.collectionRef = collection(this.firestore, 'replies').withConverter(this.converter)
    }

    return this.collectionRef
  }

  public getDocRef (id: string) {
    return doc(this.firestore, 'replies', id).withConverter(this.converter)
  }

  public addNewDoc (data: Omit<IReply, 'id'>) {
    return addDoc(this.getCollectionRef(), data) as Promise<DocumentReference<IReply | null, IReply>>
  }
}
