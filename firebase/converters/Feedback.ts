import type { QueryDocumentSnapshot, SnapshotOptions } from 'firebase/firestore'

class Feedback implements IFeedback {
  readonly id
  readonly title
  readonly description
  readonly upvotes
  readonly created_by
  readonly categories
  readonly status
  readonly comments

  constructor (data: IFeedback) {
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
  toFirestore: (data: IFeedback) => {
    return data
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot<IFeedback, IFeedback>, options: SnapshotOptions) => {
    const data = snapshot.data(options)

    return new Feedback({
      id: snapshot.id,
      title: data.title,
      description: data.description,
      upvotes: data.upvotes,
      created_by: data.created_by,
      categories: data.categories,
      status: data.status,
      comments: data.comments
    })
  }
}