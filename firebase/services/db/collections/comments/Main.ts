import { addDoc, collection, doc, type CollectionReference, type DocumentReference, type Firestore } from 'firebase/firestore'
import { CommentConverter } from './Converter'

interface IFirebaseCommentsCollection {
  getCollectionRef: () => CollectionReference<IComment | null, IComment>
  getDocRef: (id: string) => DocumentReference<IComment | null, IComment>
  addNewDoc: (data: Omit<IComment, 'id'>) => Promise<DocumentReference<IComment, IComment>>
}

export class FirebaseCommentsCollection implements IFirebaseCommentsCollection {
  private readonly firestore: Firestore
  private readonly converter: CommentConverter

  private collectionRef: CollectionReference<IComment | null, IComment> | undefined

  constructor (firestore: Firestore) {
    this.firestore = firestore
    this.converter = new CommentConverter()

    this.collectionRef = undefined
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

  public addNewDoc (data: Omit<IComment, 'id'>) {
    return addDoc(this.getCollectionRef(), data) as Promise<DocumentReference<IComment, IComment>>
  }
}
