import { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot, SnapshotOptions } from 'firebase/firestore'
import { CommentValidator } from './Validator'

class CommentConverter implements FirestoreDataConverter<IComment | null, IComment> {
  validator: CommentValidator

  constructor () {
    this.validator = new CommentValidator()
  }

  public toFirestore (data: IComment) {
    return data
  }

  public fromFirestore (snapshot: QueryDocumentSnapshot<DocumentData, IComment>, options: SnapshotOptions) {
    const data = snapshot.data(options)

    return this.validator.validate({
      id: snapshot?.id,
      name: data?.name,
      created_by: data?.created_by,
      created_date: data?.created_date,
      replies: data?.replies
    })
  }
}

export { CommentConverter }
