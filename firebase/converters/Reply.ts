import type { QueryDocumentSnapshot, SnapshotOptions } from 'firebase/firestore'

class Reply implements IReply {
  readonly id
  readonly content
  readonly created_by

  constructor (data: IReply) {
    this.id = data.id
    this.content = data.content
    this.created_by = data.created_by
  }
}

export const replyConverter = {
  toFirestore: (data: IReply) => {
    return data
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot<IReply, IReply>, options: SnapshotOptions) => {
    return new Reply({
      ...snapshot.data(options),
      id: snapshot.id
    })
  }
}