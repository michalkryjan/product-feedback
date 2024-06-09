import { getDocs, query, type Firestore } from 'firebase/firestore'
import { FirebaseUsersCollection } from './collections/users/Main'
import { extractNonNullableDocsData } from './helpers'

interface IFirebaseUsersService {
  getUsers: () => Promise<IUser[]>
}

export class FirebaseUsersService implements IFirebaseUsersService {
  private readonly usersCollection: FirebaseUsersCollection

  constructor (firestore: Firestore) {
    this.usersCollection = new FirebaseUsersCollection(firestore)
  }

  public async getUsers () {
    try {
      const collectionRef = this.usersCollection.getCollectionRef()
      const docsSnapshot = await getDocs(query(collectionRef))
      const users = extractNonNullableDocsData(docsSnapshot.docs ?? [])

      return users
    } catch (e) {
      console.log(e)

      return []
    }
  }
}
