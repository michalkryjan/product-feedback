import { CollectionReference, DocumentReference, Firestore, collection, doc } from 'firebase/firestore'
import type { Models } from 'types/models'
import { CategoryConverter } from './Converter'

interface IFirebaseCategoriesService {
  getCollectionRef: () => CollectionReference<Models.ICategory | null, Models.ICategory>
  getDocRef: (id: string) => DocumentReference<Models.ICategory | null, Models.ICategory>
}

export class FirebaseCategoriesService implements IFirebaseCategoriesService {
  private readonly firestore: Firestore
  private readonly converter: CategoryConverter

  private collectionRef: CollectionReference<Models.ICategory | null, Models.ICategory> | undefined

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