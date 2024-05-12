import type { QueryDocumentSnapshot, SnapshotOptions } from 'firebase/firestore'

class User implements IUser {
  readonly id
  readonly image_url
  readonly fullname
  readonly username

  constructor (data: IUser) {
    this.id = data.id
    this.image_url = data.image_url
    this.fullname = data.fullname
    this.username = data.username
  }
}

export const userConverter = {
  toFirestore: (data: IUser) => {
    return data
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot<IUser, IUser>, options: SnapshotOptions) => {
    const data = snapshot.data(options)

    return new User({
      id: snapshot.id,
      image_url: data.image_url,
      fullname: data.fullname,
      username: data.username
    })
  }
}