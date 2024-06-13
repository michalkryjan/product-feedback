import type { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot, SnapshotOptions } from 'firebase/firestore'
import type { Models } from 'types/models'
import { validateUser } from '~/validators/models'

export class UserConverter implements FirestoreDataConverter<Models.IUser | null, Models.IUser> {
  public toFirestore (data: Models.IUser) {
    return data
  }

  public fromFirestore (snapshot: QueryDocumentSnapshot<DocumentData, Models.IUser>, options: SnapshotOptions) {
    const data = snapshot.data(options)

    return validateUser({
      id: snapshot.id,
      created_date: data?.created_date,
      image_url: data?.image_url,
      fullname: data?.fullname,
      username: data?.username
    })
  }
}