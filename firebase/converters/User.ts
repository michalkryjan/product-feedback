import type { QueryDocumentSnapshot, SnapshotOptions } from 'firebase/firestore'
import type { IUser as UserDoc } from 'types/firebase/data/docs'

class User implements UserDoc {
  readonly id
  readonly image_url
  readonly fullname
  readonly username

  constructor (data: UserDoc) {
    this.id = data.id
    this.image_url = data.image_url
    this.fullname = data.fullname
    this.username = data.username
  }
}

export const userConverter = {
  toFirestore: (data: UserDoc) => {
    return data
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot<UserDoc, UserDoc>, options: SnapshotOptions) => {
    const data = snapshot.data(options)

    return new User(data)
  }
}