import { type Firestore } from 'firebase/firestore'
import type { IRepository } from 'types/repository'
import Categories from '~/repository/partials/Categories'
import Comments from '~/repository/partials/Comments'
import Feedbacks from '~/repository/partials/Feedbacks'
import Replies from '~/repository/partials/Replies'
import Statuses from '~/repository/partials/Statuses'
import Users from '~/repository/partials/Users'

export default ($db: Firestore): IRepository => ({
  feedbacks: Feedbacks($db),
  categories: Categories($db),
  statuses: Statuses($db),
  comments: Comments($db),
  replies: Replies($db),
  users: Users($db)
})