import { addDoc, collection, doc, type CollectionReference, type DocumentReference, type Firestore } from 'firebase/firestore'
import { CommentsConverter } from './Converter'

interface ICommentsService {
  getCollection: () => CollectionReference<IComment | null, IComment>
  getDoc: (id: string) => DocumentReference<IComment | null, IComment>
  addNewDoc: (data: Omit<IComment, 'id'>) => Promise<DocumentReference<IComment, IComment>>
}

class CommentsService implements ICommentsService {
  private readonly firestore: Firestore
  private readonly converter: CommentsConverter

  constructor (firestore: Firestore) {
    this.firestore = firestore
    this.converter = new CommentsConverter()
  }

  public getCollection () {
    return collection(this.firestore, 'comments').withConverter(this.converter)
  }

  public getDoc (id: string) {
    return doc(this.firestore, 'comments', id).withConverter(this.converter)
  }

  public addNewDoc (data: Omit<IComment, 'id'>) {
    return addDoc(this.getCollection(), data) as Promise<DocumentReference<IComment, IComment>>
  }
}

export { CommentsService }
