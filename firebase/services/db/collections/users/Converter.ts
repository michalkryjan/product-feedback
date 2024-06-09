import { type DocumentData, type FirestoreDataConverter, type QueryDocumentSnapshot, type SnapshotOptions } from 'firebase/firestore'
import { UserValidator } from './Validator'

class UserConverter implements FirestoreDataConverter<IUser | null, IUser> {
  private readonly validator: UserValidator

  constructor () {
    this.validator = new UserValidator()
  }

  public toFirestore (data: IUser) {
    return data
  }

  public fromFirestore (snapshot: QueryDocumentSnapshot<DocumentData, IUser>, options: SnapshotOptions) {
    const data = snapshot.data(options)

    return this.validator.validate({
      id: snapshot.id,
      created_date: data?.created_date,
      image_url: data?.image_url,
      fullname: data?.fullname,
      username: data?.username
    })
  }


}

export { UserConverter }
