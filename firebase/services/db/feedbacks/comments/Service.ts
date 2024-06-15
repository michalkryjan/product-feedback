import { addDoc, collection, doc, type CollectionReference, type DocumentReference, type Firestore } from 'firebase/firestore'
import type { Models } from 'types/models'
import { CommentConverter } from './Converter'
import { FirebaseRepliesService } from './replies/Service'

interface IFirebaseCommentsService {
  getCollectionRef: (feedbackId: Models.IFeedback['id']) => CollectionReference<Models.IComment | null, Models.IComment>
  getDocRef: (feedbackId: Models.IFeedback['id'], commentId: Models.IComment['id']) => DocumentReference<Models.IComment | null, Models.IComment>
  addNewDoc: (feedbackId: Models.IFeedback['id'], data: Omit<Models.IComment, 'id'>) => Promise<DocumentReference<Models.IComment | null, Models.IComment>>
}

export class FirebaseCommentsService implements IFirebaseCommentsService {
  private readonly firestore: Firestore
  private readonly converter: CommentConverter
  public readonly replies: FirebaseRepliesService

  constructor (firestore: Firestore) {
    this.firestore = firestore
    this.converter = new CommentConverter()
    this.replies = new FirebaseRepliesService(firestore)
  }

  public getCollectionRef (feedbackId: Models.IFeedback['id']) {
    return collection(this.firestore, 'feedbacks', feedbackId, 'comments').withConverter(this.converter)
  }

  public getDocRef (feedbackId: Models.IFeedback['id'], commentId: Models.IComment['id']) {
    return doc(this.firestore, 'feedbacks', feedbackId, 'comments', commentId).withConverter(this.converter)
  }

  public addNewDoc (feedbackId: Models.IFeedback['id'], data: Omit<Models.IComment, 'id'>) {
    return addDoc(this.getCollectionRef(feedbackId), data) as Promise<DocumentReference<Models.IComment | null, Models.IComment>>
  }
}