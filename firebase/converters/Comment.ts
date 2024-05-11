import type { QueryDocumentSnapshot, SnapshotOptions } from 'firebase/firestore'
import type { IComment as CommentDoc } from 'types/firebase/data/docs'

class Comment implements CommentDoc {
  readonly id
  readonly content
  readonly created_by
  readonly replies

  constructor (data: CommentDoc) {
    this.id = data.id
    this.content = data.content
    this.created_by = data.created_by
    this.replies = data?.replies
  }
}

export const commentConverter = {
  toFirestore: (data: CommentDoc) => {
    return data
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot<CommentDoc, CommentDoc>, options: SnapshotOptions) => {
    const data = snapshot.data(options)

    return new Comment(data)
  }
}