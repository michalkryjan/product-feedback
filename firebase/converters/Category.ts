import type { QueryDocumentSnapshot, SnapshotOptions } from 'firebase/firestore'
import type { ICategory as CategoryDoc } from 'types/firebase/data/docs'

class Category implements CategoryDoc {
  readonly id
  readonly name

  constructor (data: CategoryDoc) {
    this.id = data.id
    this.name = data.name
  }
}

export const categoryConverter = {
  toFirestore: (data: CategoryDoc) => {
    return data
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot<CategoryDoc, CategoryDoc>, options: SnapshotOptions) => {
    return new Category({
      ...snapshot.data(options),
      id: snapshot.id
    })
  }
}