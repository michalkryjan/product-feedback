import { addDoc, collection, doc, type CollectionReference, type DocumentReference, type Firestore } from 'firebase/firestore'
import type { Models } from 'types/models'
import { ReplyConverter } from './Converter'

interface IFirebaseRepliesService {
  getCollectionRef: () => CollectionReference<Models.IReply | null, Models.IReply>
  getDocRef: (id: string) => DocumentReference<Models.IReply | null, Models.IReply>
  addNewDoc: (data: Omit<Models.IReply, 'id'>) => Promise<DocumentReference<Models.IReply | null, Models.IReply>>
}

export class FirebaseRepliesService implements IFirebaseRepliesService {
  private readonly firestore: Firestore
  private readonly converter: ReplyConverter
  private collectionRef: CollectionReference<Models.IReply | null, Models.IReply> | undefined

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

  public addNewDoc (data: Omit<Models.IReply, 'id'>) {
    return addDoc(this.getCollectionRef(), data) as Promise<DocumentReference<Models.IReply | null, Models.IReply>>
  }
}
