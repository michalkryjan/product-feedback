import { type DocumentData, type FirestoreDataConverter, type QueryDocumentSnapshot, type SnapshotOptions } from 'firebase/firestore'
import { z } from 'zod'

class UsersConverter implements FirestoreDataConverter<IUser | null, IUser> {
  private readonly SCHEMA = z.object({
    id: z.string(),
    image_url: z.string(),
    fullname: z.string(),
    username: z.string()
  })

  public toFirestore (data: IUser) {
    return data
  }

  public fromFirestore (snapshot: QueryDocumentSnapshot<DocumentData, IUser>, options: SnapshotOptions) {
    const data = snapshot.data(options)

    return this.validateData({
      id: snapshot.id,
      image_url: data.image_url,
      fullname: data.fullname,
      username: data.username
    })
  }

  public validateData (data: unknown) {
    try {
      return this.SCHEMA.parse(data)
    } catch (e) {
      console.log(e)

      return null
    }
  }
}

export { UsersConverter }
