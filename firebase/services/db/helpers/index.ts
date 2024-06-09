import type { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore'

export function extractNonNullableDocsData <T extends DocumentData>(docsSnapshots: QueryDocumentSnapshot<T | null, T>[]): T[] {
  return docsSnapshots
    .map(snapshot => snapshot.data())
    .filter(doc => doc !== null) as T[]
}