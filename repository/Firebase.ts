import { type Firestore } from 'firebase/firestore'
import type { IRepository } from 'types/repository'
import Categories from '~/repository/firebase/Categories'
import Comments from '~/repository/firebase/Comments'
import Feedbacks from '~/repository/firebase/Feedbacks'
import Replies from '~/repository/firebase/Replies'
import Statuses from '~/repository/firebase/Statuses'
import Users from '~/repository/firebase/Users'

export default ($db: Firestore): IRepository => ({
  feedbacks: Feedbacks($db),
  categories: Categories($db),
  statuses: Statuses($db),
  comments: Comments($db),
  replies: Replies($db),
  users: Users($db)
})