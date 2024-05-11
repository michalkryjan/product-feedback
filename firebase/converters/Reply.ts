import type { QueryDocumentSnapshot, SnapshotOptions } from 'firebase/firestore'
import type { IReply as ReplyDoc } from 'types/firebase/data/docs'

class Reply implements ReplyDoc {
  readonly content
  readonly created_by

  constructor (data: ReplyDoc) {
    this.content = data.content
    this.created_by = data.created_by
  }
}

export const replyConverter = {
  toFirestore: (data: ReplyDoc) => {
    return data
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot<ReplyDoc, ReplyDoc>, options: SnapshotOptions) => {
    return new Reply({
      ...snapshot.data(options),
      id: snapshot.id
    })
  }
}