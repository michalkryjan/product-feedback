import type { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot, SnapshotOptions } from 'firebase/firestore'
import type { Models } from 'types/models'
import { validateFeedback } from '~/validators/models/Feedback'

export class FeedbackConverter implements FirestoreDataConverter<Models.IFeedback | null, Models.IFeedback> {
  public toFirestore (data: Models.IFeedback) {
    return data
  }

  public fromFirestore (snapshot: QueryDocumentSnapshot<DocumentData, Models.IFeedback>, options: SnapshotOptions) {
    const data = snapshot.data(options)

    return validateFeedback({
      id: snapshot.id,
      title: data?.title,
      description: data?.description,
      category_name: data?.category_name,
      status_name: data?.status_name,
      upvotes_count: data?.upvotes_count,
      comments_count: data?.comments_count,
      created_by: data?.created_by,
      created_date: data?.created_date
    })
  }
}