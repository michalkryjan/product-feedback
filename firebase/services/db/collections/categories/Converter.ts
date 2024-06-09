import { type DocumentData, type FirestoreDataConverter, type QueryDocumentSnapshot, type SnapshotOptions } from 'firebase/firestore'
import { CategoryValidator } from './Validator'

class CategoryConverter implements FirestoreDataConverter<ICategory | null, ICategory> {
  private readonly validator: CategoryValidator

  constructor () {
    this.validator = new CategoryValidator()
  }

  public toFirestore (data: ICategory) {
    return data
  }

  public fromFirestore (snapshot: QueryDocumentSnapshot<DocumentData, ICategory>, options: SnapshotOptions) {
    const data = snapshot.data(options)

    return this.validator.validate({
      id: snapshot?.id,
      name: data?.name
    })
  }
}

export { CategoryConverter }
