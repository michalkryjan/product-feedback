import type { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot, SnapshotOptions } from 'firebase/firestore'
import type { Models } from 'types/models'
import { validateComment } from '~/validators/models/Comment'

export class CommentConverter implements FirestoreDataConverter<Models.IComment | null, Models.IComment> {
  public toFirestore (data: Models.IComment) {
    return data
  }

  public fromFirestore (snapshot: QueryDocumentSnapshot<DocumentData, Models.IComment>, options: SnapshotOptions) {
    const data = snapshot.data(options)

    return validateComment({
      id: snapshot.id,
      content: data?.title,
      created_by: data?.created_by,
      created_date: data?.created_date
    })
  }
}