import type { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore'

export function extractNonNullableDocs <T extends DocumentData>(docsSnapshots: QueryDocumentSnapshot<T | null, T>[]): T[] {
  return docsSnapshots
    .map(snapshot => snapshot.data())
    .filter(doc => doc !== null) as T[]
}