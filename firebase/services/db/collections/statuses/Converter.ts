import { type DocumentData, type FirestoreDataConverter, type QueryDocumentSnapshot, type SnapshotOptions } from 'firebase/firestore'
import { StatusValidator } from './Validator'


class StatusConverter implements FirestoreDataConverter<IStatus | null, IStatus> {
  private readonly validator: StatusValidator

  constructor () {
    this.validator = new StatusValidator()
  }

  public toFirestore (data: IStatus) {
    return data
  }

  public fromFirestore (snapshot: QueryDocumentSnapshot<DocumentData, IStatus>, options: SnapshotOptions) {
    const data = snapshot.data(options)

    return this.validator.validate({
      id: snapshot?.id,
      order: data?.order,
      name: data?.name,
      description: data?.description
    })
  }
}

export { StatusConverter }
