import type { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot, SnapshotOptions } from 'firebase/firestore'
import type { Models } from 'types/models'
import { validateReply } from '~/validators/models/Reply'

export class ReplyConverter implements FirestoreDataConverter<Models.IReply | null, Models.IReply> {
  public toFirestore (data: Models.IReply) {
    return data
  }

  public fromFirestore (snapshot: QueryDocumentSnapshot<DocumentData, Models.IReply>, options: SnapshotOptions) {
    const data = snapshot.data(options)

    return validateReply({
      id: snapshot.id,
      content: data?.content,
      replying_to: data?.replying_to,
      created_by: data?.created_by,
      created_date: data?.created_date
    })
  }
}