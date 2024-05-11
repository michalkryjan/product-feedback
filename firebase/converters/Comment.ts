import type { QueryDocumentSnapshot, SnapshotOptions } from 'firebase/firestore'

class Comment implements IComment {
  readonly id
  readonly content
  readonly created_by
  readonly replies

  constructor (data: IComment) {
    this.id = data.id
    this.content = data.content
    this.created_by = data.created_by
    this.replies = data?.replies
  }
}

export const commentConverter = {
  toFirestore: (data: IComment) => {
    return data
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot<IComment, IComment>, options: SnapshotOptions) => {
    return new Comment({
      ...snapshot.data(options),
      id: snapshot.id
    })
  }
}