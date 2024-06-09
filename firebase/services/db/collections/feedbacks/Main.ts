import { addDoc, collection, deleteDoc, doc, updateDoc, type CollectionReference, type DocumentReference, type Firestore } from 'firebase/firestore'
import { FeedbackConverter } from './Converter'

interface IFirebaseFeedbacksCollection {
  getCollectionRef: () => CollectionReference<IFeedback | null, IFeedback>
  getDocRef: (id: string) => DocumentReference<IFeedback | null, IFeedback>
  addNewDoc: (data: Omit<IFeedback, 'id'>) => Promise<DocumentReference<IFeedback | null, IFeedback>>
  updateDoc: (id: string, data: Pick<IFeedback, 'title' | 'category' | 'description'>) => Promise<void>,
  deleteDoc: (id: string) => Promise<void>
}

export class FirebaseFeedbacksCollection implements IFirebaseFeedbacksCollection {
  private readonly firestore: Firestore
  private readonly converter: FeedbackConverter

  private collectionRef: CollectionReference<IFeedback | null, IFeedback> | undefined

  constructor (firestore: Firestore) {
    this.firestore = firestore
    this.converter = new FeedbackConverter()

    this.collectionRef = undefined
  }

  public getCollectionRef () {
    if (!this.collectionRef) {
      this.collectionRef = collection(this.firestore, 'feedbacks').withConverter(this.converter)
    }

    return this.collectionRef
  }

  public getDocRef (id: string) {
    return doc(this.firestore, 'feedbacks', id).withConverter(this.converter)
  }

  public addNewDoc (data: Omit<IFeedback, 'id'>) {
    return addDoc(this.getCollectionRef(), data) as Promise<DocumentReference<IFeedback | null, IFeedback>>
  }

  public updateDoc (id: string, data: Pick<IFeedback, 'title' | 'category' | 'description'>) {
    return updateDoc(this.getDocRef(id), data)
  }

  public deleteDoc (id: string) {
    return deleteDoc(this.getDocRef(id))
  }
}
