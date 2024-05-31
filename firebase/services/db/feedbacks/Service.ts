import { addDoc, collection, deleteDoc, doc, updateDoc, type CollectionReference, type DocumentReference, type Firestore } from 'firebase/firestore'
import { FeedbacksConverter } from './Converter'

interface IFeedbacksService {
  getCollection: () => CollectionReference<IFeedback | null, IFeedback>
  getDoc: (id: string) => DocumentReference<IFeedback | null, IFeedback>
  addNewDoc: (data: Omit<IFeedback, 'id'>) => Promise<DocumentReference<IFeedback | null, IFeedback>>
  updateDoc: (id: string, data: Pick<IFeedback, 'title' | 'categories' | 'description'>) => Promise<void>,
  deleteDoc: (id: string) => Promise<void>
}

class FeedbacksService implements IFeedbacksService {
  private readonly firestore: Firestore
  private readonly converter: FeedbacksConverter

  constructor (firestore: Firestore) {
    this.firestore = firestore
    this.converter = new FeedbacksConverter()
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

  public updateDoc (id: string, data: Pick<IFeedback, 'title' | 'categories' | 'description'>) {
    return updateDoc(this.getDoc(id), data)
  }

  public deleteDoc (id: string) {
    return deleteDoc(this.getDoc(id))
  }
}

export { FeedbacksService }
