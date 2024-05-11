import type { QueryDocumentSnapshot, SnapshotOptions } from 'firebase/firestore'
import type { IFeedback as FeedbackDoc } from 'types/firebase/data/docs'

class Feedback implements FeedbackDoc {
  readonly id
  readonly title
  readonly description
  readonly upvotes
  readonly created_by
  readonly categories
  readonly status
  readonly comments

  constructor (data: FeedbackDoc) {
    this.id = data.id
    this.title = data.title
    this.description = data.description
    this.upvotes = data.upvotes
    this.created_by = data.created_by
    this.categories = data.categories
    this.status = data.status
    this.comments = data?.comments
  }
}

export const feedbackConverter = {
  toFirestore: (data: FeedbackDoc) => {
    return data
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot<FeedbackDoc, FeedbackDoc>, options: SnapshotOptions) => {
    const data = snapshot.data(options)

    return new Feedback(data)
  }
}