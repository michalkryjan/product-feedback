import { QueryDocumentSnapshot, SnapshotOptions } from 'firebase/firestore'
import type { IStatus as StatusDoc } from 'types/firebase/data/docs'

class Status implements StatusDoc {
  readonly id
  readonly order
  readonly name
  readonly description
  readonly color

  constructor (data: StatusDoc) {
    this.id = data.id
    this.order = data.order
    this.name = data.name
    this.description = data.description
    this.color = data.color
  }
}

export const statusConverter = {
  toFirestore: (data: StatusDoc) => {
    return data
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot<StatusDoc, StatusDoc>, options: SnapshotOptions) => {
    const data = snapshot.data(options)

    return new Status(data)
  }
}