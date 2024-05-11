import { QueryDocumentSnapshot, SnapshotOptions } from 'firebase/firestore'

class Status implements IStatus {
  readonly id
  readonly order
  readonly name
  readonly description
  readonly color

  constructor (data: IStatus) {
    this.id = data.id
    this.order = data.order
    this.name = data.name
    this.description = data.description
    this.color = data.color
  }
}

export const statusConverter = {
  toFirestore: (data: IStatus) => {
    return data
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot<IStatus, IStatus>, options: SnapshotOptions) => {
    return new Status({
      ...snapshot.data(options),
      id: snapshot.id
    })
  }
}