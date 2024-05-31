import { type DocumentData, type FirestoreDataConverter, type QueryDocumentSnapshot, type SnapshotOptions } from 'firebase/firestore'
import { z } from 'zod'

class StatusesConverter implements FirestoreDataConverter<IStatus | null, IStatus> {
  private readonly SCHEMA = z.object({
    id: z.string(),
    order: z.number(),
    name: z.string(),
    description: z.string()
  })

  public toFirestore (data: IStatus) {
    return data
  }

  public fromFirestore (snapshot: QueryDocumentSnapshot<DocumentData, IStatus>, options: SnapshotOptions) {
    const data = snapshot.data(options)

    return this.validateData({
      id: snapshot?.id,
      order: data?.order,
      name: data?.name,
      description: data?.description
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

export { StatusesConverter }
