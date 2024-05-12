import { QueryDocumentSnapshot, SnapshotOptions } from 'firebase/firestore'

class Status implements IStatus {
  readonly id
  readonly order
  readonly name
  readonly description

  constructor (data: IStatus) {
    this.id = data.id
    this.order = data.order
    this.name = data.name
    this.description = data.description
  }
}

export const statusConverter = {
  toFirestore: (data: IStatus) => {
    return data
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot<IStatus, IStatus>, options: SnapshotOptions) => {
    const data = snapshot.data(options)

    return new Status({
      id: snapshot.id,
      order: data.order,
      name: data.name,
      description: data.description
    })
  }
}