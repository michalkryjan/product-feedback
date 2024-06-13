import type { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot, SnapshotOptions } from 'firebase/firestore'
import type { Models } from 'types/models'
import { validateStatus } from '~/validators/models'

export class StatusConverter implements FirestoreDataConverter<Models.IStatus | null, Models.IStatus> {
  public toFirestore (data: Models.IStatus) {
    return data
  }

  public fromFirestore (snapshot: QueryDocumentSnapshot<DocumentData, Models.IStatus>, options: SnapshotOptions) {
    const data = snapshot.data(options)

    return validateStatus({
      id: snapshot?.id,
      order: data?.order,
      name: data?.name,
      description: data?.description
    })
  }
}
