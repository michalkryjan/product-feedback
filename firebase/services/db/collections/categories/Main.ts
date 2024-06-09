import { CollectionReference, DocumentReference, Firestore, collection, doc } from 'firebase/firestore'
import { CategoryConverter } from './Converter'

interface IFirebaseCategoriesCollection {
  getCollectionRef: () => CollectionReference<ICategory | null, ICategory>
  getDocRef: (id: string) => DocumentReference<ICategory | null, ICategory>
}

export class FirebaseCategoriesCollection implements IFirebaseCategoriesCollection {
  private readonly firestore: Firestore
  private readonly converter: CategoryConverter

  private collectionRef: CollectionReference<ICategory | null, ICategory> | undefined

  constructor (firestore: Firestore) {
    this.firestore = firestore
    this.converter = new CategoryConverter()

    this.collectionRef = undefined
  }

  public getCollectionRef () {
    if (!this.collectionRef) {
      this.collectionRef = collection(this.firestore, 'categories').withConverter(this.converter)
    }

    return this.collectionRef
  }

  public getDocRef (id: string) {
    return doc(this.firestore, 'categories', id).withConverter(this.converter)
  }
}
