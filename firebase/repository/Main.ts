import { type Firestore } from 'firebase/firestore'
import type { IFirebaseRepository } from 'types/firebase/repository'
import { Categories, Comments, Feedbacks, Replies, Statuses, Users } from '~/firebase/repository/collections'

export default ($db: Firestore): IFirebaseRepository => ({
  collections: {
    feedbacks: Feedbacks($db),
    categories: Categories($db),
    statuses: Statuses($db),
    comments: Comments($db),
    replies: Replies($db),
    users: Users($db)
  }
})