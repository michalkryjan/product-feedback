import { collection, doc, type CollectionReference, type DocumentReference, type Firestore } from 'firebase/firestore'
import { CategoriesConverter } from './Converter'

interface ICategoriesService {
  getCollection: () => CollectionReference<ICategory | null, ICategory>
  getDoc: (id: string) => DocumentReference<ICategory | null, ICategory>
}

class CategoriesService implements ICategoriesService {
  private readonly firestore: Firestore
  private readonly converter: CategoriesConverter

  constructor (firestore: Firestore) {
    this.firestore = firestore
    this.converter = new CategoriesConverter()
  }

  public getCollection () {
    return collection(this.firestore, 'categories').withConverter(this.converter)
  }

  public getDoc (id: string) {
    return doc(this.firestore, 'categories', id).withConverter(this.converter)
  }
}

export { CategoriesService }
