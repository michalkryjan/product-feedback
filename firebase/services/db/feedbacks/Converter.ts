import { type DocumentData, type FirestoreDataConverter, type QueryDocumentSnapshot, type SnapshotOptions } from 'firebase/firestore'
import { z } from 'zod'

class FeedbacksConverter implements FirestoreDataConverter<IFeedback | null, IFeedback> {
  private readonly SCHEMA = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    upvotes: z.number(),
    created_by: z.string(),
    category: z.string(),
    status: z.string(),
    comments: z.string().array().optional()
  })

  public toFirestore (data: IFeedback) {
    return data
  }

  public fromFirestore (snapshot: QueryDocumentSnapshot<DocumentData, IFeedback>, options: SnapshotOptions) {
    const data = snapshot.data(options)

    return this.validateData({
      id: snapshot.id,
      title: data?.title,
      description: data?.description,
      upvotes: data?.upvotes,
      created_by: data?.created_by,
      category: data?.category,
      status: data?.status,
      comments: data?.comments
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

export { FeedbacksConverter }
