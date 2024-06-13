import type { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot, SnapshotOptions } from 'firebase/firestore'
import type { Models } from 'types/models'
import { validateCategory } from '~/validators/models'

export class CategoryConverter implements FirestoreDataConverter<Models.ICategory | null, Models.ICategory> {
  public toFirestore (data: Models.ICategory) {
    return data
  }

  public fromFirestore (snapshot: QueryDocumentSnapshot<DocumentData, Models.ICategory>, options: SnapshotOptions) {
    const data = snapshot.data(options)

    return validateCategory({
      id: snapshot?.id,
      name: data?.name
    })
  }
}