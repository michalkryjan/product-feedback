import { collection, doc, type CollectionReference, type DocumentReference, type Firestore } from 'firebase/firestore'
import { UsersConverter } from './Converter'

interface IUsersService {
  getCollection: () => CollectionReference<IUser | null, IUser>
  getDoc: (id: string) => DocumentReference<IUser | null, IUser>
}

class UsersService implements IUsersService {
  private readonly firestore: Firestore
  private readonly converter: UsersConverter

  constructor (firestore: Firestore) {
    this.firestore = firestore
    this.converter = new UsersConverter()
  }

  public getCollection () {
    return collection(this.firestore, 'users').withConverter(this.converter)
  }

  public getDoc (id: string) {
    return doc(this.firestore, 'users', id).withConverter(this.converter)
  }
}

export { UsersService }
