import { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot, SnapshotOptions } from 'firebase/firestore'
import { z } from 'zod'

class CommentsConverter implements FirestoreDataConverter<IComment | null, IComment> {
  private readonly SCHEMA = z.object({
    id: z.string(),
    content: z.string(),
    created_by: z.string(),
    replies: z.string().array()
  })

  public toFirestore (data: IComment) {
    return data
  }

  public fromFirestore (snapshot: QueryDocumentSnapshot<DocumentData, IComment>, options: SnapshotOptions) {
    const data = snapshot.data(options)

    return this.validateData({
      id: snapshot?.id,
      name: data?.name,
      created_by: data?.created_by,
      replies: data?.replies
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

export { CommentsConverter }
