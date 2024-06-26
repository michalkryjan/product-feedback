import { addDoc, collection, deleteDoc, doc, updateDoc, type CollectionReference, type DocumentReference, type Firestore } from 'firebase/firestore'
import type { Models } from 'types/models'
import { FeedbackConverter } from './Converter'
import { FirebaseCommentsService } from './comments/Service'

interface IFirebaseFeedbacksService {
  getCollectionRef: () => CollectionReference<Models.IFeedback | null, Models.IFeedback>
  getDocRef: (id: Models.IFeedback['id']) => DocumentReference<Models.IFeedback | null, Models.IFeedback>
  addNewDoc: (data: Omit<Models.IFeedback, 'id'>) => Promise<DocumentReference<Models.IFeedback | null, Models.IFeedback>>
  updateDoc: (id: Models.IFeedback['id'], data: Omit<Models.IFeedback, 'id'>) => Promise<void>,
  deleteDoc: (id: Models.IFeedback['id']) => Promise<void>
}

export class FirebaseFeedbacksService implements IFirebaseFeedbacksService {
  private readonly firestore: Firestore
  private readonly converter: FeedbackConverter
  private collectionRef: CollectionReference<Models.IFeedback | null, Models.IFeedback> | undefined
  public comments: FirebaseCommentsService

  constructor (firestore: Firestore) {
    this.firestore = firestore
    this.converter = new FeedbackConverter()
    this.collectionRef = undefined
    this.comments = new FirebaseCommentsService(firestore)
  }

  public getCollectionRef () {
    if (!this.collectionRef) {
      this.collectionRef = collection(this.firestore, 'feedbacks').withConverter(this.converter)
    }

    return this.collectionRef
  }

  public getDocRef (id: Models.IFeedback['id']) {
    return doc(this.firestore, 'feedbacks', id).withConverter(this.converter)
  }

  public addNewDoc (data: Omit<Models.IFeedback, 'id'>) {
    return addDoc(this.getCollectionRef(), data) as Promise<DocumentReference<Models.IFeedback | null, Models.IFeedback>>
  }

  public updateDoc (id: Models.IFeedback['id'], data: Omit<Models.IFeedback, 'id'>) {
    return updateDoc(this.getDocRef(id), data)
  }

  public deleteDoc (id: Models.IFeedback['id']) {
    return deleteDoc(this.getDocRef(id))
  }
}
