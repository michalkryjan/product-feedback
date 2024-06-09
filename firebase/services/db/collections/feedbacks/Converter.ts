import { type DocumentData, type FirestoreDataConverter, type QueryDocumentSnapshot, type SnapshotOptions } from 'firebase/firestore'
import { FeedbackValidator } from './Validator'

export class FeedbackConverter implements FirestoreDataConverter<IFeedback | null, IFeedback> {
  private readonly validator: FeedbackValidator

  constructor () {
    this.validator = new FeedbackValidator()
  }

  public toFirestore (data: IFeedback) {
    return data
  }

  public fromFirestore (snapshot: QueryDocumentSnapshot<DocumentData, IFeedback>, options: SnapshotOptions) {
    const data = snapshot.data(options)

    return this.validator.validate({
      id: snapshot.id,
      title: data?.title,
      description: data?.description,
      upvotes: data?.upvotes,
      created_by: data?.created_by,
      created_date: data?.created_date,
      category: data?.category,
      status: data?.status,
      comments: data?.comments
    })
  }
}