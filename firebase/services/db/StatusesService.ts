import { getDocs, orderBy, query, type Firestore } from 'firebase/firestore'
import { FirebaseStatusesCollection } from './collections/statuses/Main'
import { extractNonNullableDocsData } from './helpers'

interface IFirebaseStatusesService {
  getStatuses: () => Promise<IStatus[]>
}

export class FirebaseStatusesService implements IFirebaseStatusesService {
  private readonly statusesCollection: FirebaseStatusesCollection

  constructor (firestore: Firestore) {
    this.statusesCollection = new FirebaseStatusesCollection(firestore)
  }

  public async getStatuses () {
    try {
      const collectionRef = this.statusesCollection.getCollectionRef()
      const docsSnapshot = await getDocs(query(collectionRef, orderBy('order', 'asc')))
      const statuses = extractNonNullableDocsData(docsSnapshot.docs ?? [])

      return statuses
    } catch (e) {
      console.log(e)

      return []
    }
  }
}