import { getDocs, type Firestore } from 'firebase/firestore'
import { FirebaseCategoriesCollection } from './collections/categories/Main'
import { extractNonNullableDocsData } from './helpers'

interface IFirebaseCategoriesService {
  getCategories: () => Promise<ICategory[]>
}

export class FirebaseCategoriesService implements IFirebaseCategoriesService {
  private readonly categoriesCollection: FirebaseCategoriesCollection

  constructor (firestore: Firestore) {
    this.categoriesCollection = new FirebaseCategoriesCollection(firestore)
  }

  public async getCategories () {
    try {
      const collectionRef = this.categoriesCollection.getCollectionRef()
      const docsSnapshot = await getDocs(collectionRef)
      const categories = extractNonNullableDocsData(docsSnapshot.docs ?? [])

      return categories
    } catch (e) {
      console.log(e)

      return []
    }
  }
}
