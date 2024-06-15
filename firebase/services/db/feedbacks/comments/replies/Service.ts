import { addDoc, collection, type CollectionReference, type DocumentReference, type Firestore } from 'firebase/firestore'
import type { Models } from 'types/models'
import { ReplyConverter } from './Converter'

interface IFirebaseRepliesService {
  getCollectionRef: (feedbackId: Models.IFeedback['id'], commentId: Models.IComment['id']) => CollectionReference<Models.IReply | null, Models.IReply>
  addNewDoc: (feedbackId: Models.IFeedback['id'], commentId: Models.IComment['id'], data: Omit<Models.IReply, 'id'>) => Promise<DocumentReference<Models.IReply | null, Models.IReply>>
}

export class FirebaseRepliesService implements IFirebaseRepliesService {
  private readonly firestore: Firestore
  private readonly converter: ReplyConverter

  constructor (firestore: Firestore) {
    this.firestore = firestore
    this.converter = new ReplyConverter()
  }

  public getCollectionRef (feedbackId: Models.IFeedback['id'], commentId: Models.IComment['id']) {
    return collection(this.firestore, 'feedbacks', feedbackId, 'comments', commentId, 'replies').withConverter(this.converter)
  }

  public addNewDoc (feedbackId: Models.IFeedback['id'], commentId: Models.IComment['id'], data: Omit<Models.IReply, 'id'>) {
    return addDoc(this.getCollectionRef(feedbackId, commentId), data) as Promise<DocumentReference<Models.IReply | null, Models.IReply>>
  }
}
