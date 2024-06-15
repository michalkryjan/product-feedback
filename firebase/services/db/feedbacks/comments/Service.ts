import { addDoc, collection, doc, type CollectionReference, type DocumentReference, type Firestore } from 'firebase/firestore'
import type { Models } from 'types/models'
import { CommentConverter } from './Converter'
import { FirebaseRepliesService } from './replies/Service'

interface IFirebaseCommentsService {
  getCollectionRef: () => CollectionReference<Models.IComment | null, Models.IComment>
  getDocRef: (id: string) => DocumentReference<Models.IComment | null, Models.IComment>
  addNewDoc: (data: Omit<Models.IComment, 'id'>) => Promise<DocumentReference<Models.IComment, Models.IComment>>
}

export class FirebaseCommentsService implements IFirebaseCommentsService {
  private readonly firestore: Firestore
  private readonly converter: CommentConverter
  private collectionRef: CollectionReference<Models.IComment | null, Models.IComment> | undefined
  public readonly replies: FirebaseRepliesService

  constructor (firestore: Firestore) {
    this.firestore = firestore
    this.converter = new CommentConverter()
    this.collectionRef = undefined
    this.replies = new FirebaseRepliesService(firestore)
  }

  public getCollectionRef () {
    if (!this.collectionRef) {
      this.collectionRef = collection(this.firestore, 'comments').withConverter(this.converter)
    }

    return this.collectionRef
  }

  public getDocRef (id: string) {
    return doc(this.firestore, 'comments', id).withConverter(this.converter)
  }

  public addNewDoc (data: Omit<Models.IComment, 'id'>) {
    return addDoc(this.getCollectionRef(), data) as Promise<DocumentReference<Models.IComment, Models.IComment>>
  }
}