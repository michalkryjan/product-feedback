import { addDoc, collection, deleteDoc, doc, updateDoc, type CollectionReference, type DocumentReference, type Firestore } from 'firebase/firestore'
import type { Models } from 'types/models'
import { FeedbackConverter } from './Converter'

interface IFirebaseFeedbacksService {
  getCollectionRef: () => CollectionReference<Models.IFeedback | null, Models.IFeedback>
  getDocRef: (id: string) => DocumentReference<Models.IFeedback | null, Models.IFeedback>
  addNewDoc: (data: Omit<Models.IFeedback, 'id'>) => Promise<DocumentReference<Models.IFeedback | null, Models.IFeedback>>
  updateDoc: (id: string, data: Pick<Models.IFeedback, 'title' | 'description' | 'category_name'>) => Promise<void>,
  deleteDoc: (id: string) => Promise<void>
}

export class FirebaseFeedbacksService implements IFirebaseFeedbacksService {
  private readonly firestore: Firestore
  private readonly converter: FeedbackConverter

  private collectionRef: CollectionReference<Models.IFeedback | null, Models.IFeedback> | undefined

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

  public addNewDoc (data: Omit<Models.IFeedback, 'id'>) {
    return addDoc(this.getCollectionRef(), data) as Promise<DocumentReference<Models.IFeedback | null, Models.IFeedback>>
  }

  public updateDoc (id: string, data: Pick<Models.IFeedback, 'title' | 'description' | 'category_name' >) {
    return updateDoc(this.getDocRef(id), data)
  }

  public deleteDoc (id: string) {
    return deleteDoc(this.getDocRef(id))
  }
}
