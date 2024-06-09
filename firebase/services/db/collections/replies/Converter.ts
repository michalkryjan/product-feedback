import { type DocumentData, type FirestoreDataConverter, type QueryDocumentSnapshot, type SnapshotOptions } from 'firebase/firestore'
import { ReplyValidator } from './Validator'

export class ReplyConverter implements FirestoreDataConverter<IReply | null, IReply> {
  private readonly validator: ReplyValidator

  constructor () {
    this.validator = new ReplyValidator()
  }

  public toFirestore (data: IReply) {
    return data
  }

  public fromFirestore (snapshot: QueryDocumentSnapshot<DocumentData, IReply>, options: SnapshotOptions) {
    const data = snapshot.data(options)

    return this.validator.validate({
      id: snapshot?.id,
      content: data?.content,
      created_by: data?.created_by,
      created_date: data?.created_date,
      replying_to: data?.replying_to
    })
  }
}
