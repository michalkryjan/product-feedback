import type { QueryDocumentSnapshot, SnapshotOptions } from 'firebase/firestore'

class Category implements ICategory {
  readonly id
  readonly name

  constructor (data: ICategory) {
    this.id = data.id
    this.name = data.name
  }
}

export const categoryConverter = {
  toFirestore: (data: ICategory) => {
    return data
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot<ICategory, ICategory>, options: SnapshotOptions) => {
    const data = snapshot.data(options)

    return new Category({
      id: snapshot.id,
      name: data.name
    })
  }
}