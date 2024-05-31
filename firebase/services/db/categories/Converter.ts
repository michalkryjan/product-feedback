import { type DocumentData, type FirestoreDataConverter, type QueryDocumentSnapshot, type SnapshotOptions } from 'firebase/firestore'
import { z } from 'zod'

class CategoriesConverter implements FirestoreDataConverter<ICategory | null, ICategory> {
  private readonly SCHEMA = z.object({
    id: z.string(),
    name: z.string()
  })

  public toFirestore (data: ICategory) {
    return data
  }

  public fromFirestore (snapshot: QueryDocumentSnapshot<DocumentData, ICategory>, options: SnapshotOptions) {
    const data = snapshot.data(options)

    return this.validateData({
      id: snapshot?.id,
      name: data?.name
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

export { CategoriesConverter }
