import { addDoc, collection, deleteDoc, doc, updateDoc, type CollectionReference, type DocumentReference, type Firestore } from 'firebase/firestore'
import { FeedbackConverter } from './Converter'

interface IFeedbackService {
  getCollection: () => CollectionReference<IFeedback | null, IFeedback>
  getDoc: (id: string) => DocumentReference<IFeedback | null, IFeedback>
  addNewDoc: (data: Omit<IFeedback, 'id'>) => Promise<DocumentReference<IFeedback | null, IFeedback>>
  updateDoc: (id: string, data: Pick<IFeedback, 'title' | 'category' | 'description'>) => Promise<void>,
  deleteDoc: (id: string) => Promise<void>
}

class FeedbacksService implements IFeedbackService {
  private readonly firestore: Firestore
  private readonly converter: FeedbackConverter

  constructor (firestore: Firestore) {
    this.firestore = firestore
    this.converter = new FeedbackConverter()
  }

  public getCollection () {
    return collection(this.firestore, 'feedbacks').withConverter(this.converter)
  }

  public getDoc (id: string) {
    return doc(this.firestore, 'feedbacks', id).withConverter(this.converter)
  }

  public addNewDoc (data: Omit<IFeedback, 'id'>) {
    return addDoc(this.getCollection(), data) as Promise<DocumentReference<IFeedback | null, IFeedback>>
  }

  public updateDoc (id: string, data: Pick<IFeedback, 'title' | 'category' | 'description'>) {
    return updateDoc(this.getDoc(id), data)
  }

  public deleteDoc (id: string) {
    return deleteDoc(this.getDoc(id))
  }
}

export { FeedbacksService }
