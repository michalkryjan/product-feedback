import { type DocumentData, type FirestoreDataConverter, type QueryDocumentSnapshot, type SnapshotOptions } from 'firebase/firestore'
import { z } from 'zod'

class RepliesConverter implements FirestoreDataConverter<IReply | null, IReply> {
  private readonly SCHEMA = z.object({
    id: z.string(),
    content: z.string(),
    created_by: z.string()
  })

  public toFirestore (data: IReply) {
    return data
  }

  public fromFirestore (snapshot: QueryDocumentSnapshot<DocumentData, IReply>, options: SnapshotOptions) {
    const data = snapshot.data(options)

    return this.validateData({
      id: snapshot?.id,
      content: data?.content,
      created_by: data?.created_by
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

export { RepliesConverter }
