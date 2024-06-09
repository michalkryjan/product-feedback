import { getDocs, orderBy, query, where, type Firestore, type QueryFieldFilterConstraint, type QueryOrderByConstraint } from 'firebase/firestore'
import { FirebaseCommentsCollection } from './collections/comments/Main'
import { FirebaseRepliesCollection } from './collections/replies/Main'
import { FirebaseUsersCollection } from './collections/users/Main'
import { extractNonNullableDocsData } from './helpers'

interface IGetCommentsOptions {
  filterBy?: {
    ids?: IComment['id'][]
  }
  orderBy?: Record<Partial<keyof IComment>, 'asc' | 'desc'>
  merge?: {
    user?: boolean
    replies?: boolean
  }
}

interface IFirebaseCommentsService {
  getComments: (options: IGetCommentsOptions) => unknown
}

export class FirebaseCommentsService implements IFirebaseCommentsService {
  private readonly commentsCollection: FirebaseCommentsCollection
  private readonly repliesCollection: FirebaseRepliesCollection
  private readonly usersCollection: FirebaseUsersCollection

  constructor (firestore: Firestore) {
    this.commentsCollection = new FirebaseCommentsCollection(firestore)
    this.repliesCollection = new FirebaseRepliesCollection(firestore)
    this.usersCollection = new FirebaseUsersCollection(firestore)
  }

  public async getComments (options: IGetCommentsOptions) {
    try {
      const commentsCollectionRef = this.commentsCollection.getCollectionRef()
      const queryArgs: (QueryFieldFilterConstraint | QueryOrderByConstraint)[] = []

      if (options?.filterBy?.ids) {
        queryArgs.push(where('__name__', 'in', options.filterBy.ids))
      }

      if (options?.orderBy) {
        Object.entries(options.orderBy).forEach(item => {
          queryArgs.push(orderBy(item[0], item[1]))
        })
      }

      const commentsDocsSnapshot = await getDocs(query(commentsCollectionRef, ...queryArgs))
      let comments = extractNonNullableDocsData(commentsDocsSnapshot.docs)

      if (options?.merge?.replies === true) {
        comments = await this.mergeRepliesIntoComments(comments)
      }

      if (options?.merge?.user === true) {
        comments = await this.mergeUserIntoItems(comments)
      }

      return comments
    } catch (e) {
      console.log(e)

      return []
    }
  }

  private async mergeRepliesIntoComments (comments: IComment[]) {
    let repliesIds: IReply['id'][] = []

    comments.forEach(comment => {
      repliesIds.push(...comment.replies)
    })

    repliesIds = [... new Set(repliesIds)]

    if (repliesIds.length > 0) {
      try {
        const repliesCollectionRef = this.repliesCollection.getCollectionRef()
        const repliesDocsSnapshot = await getDocs(query(repliesCollectionRef, where('__name__', 'in', repliesIds)))
        let replies = extractNonNullableDocsData(repliesDocsSnapshot.docs)

        replies = this.mergeUserIntoItems(replies)

        const commentsMerged = comments.map(comment => ({
          ...comment,
          replies: (comment?.replies ?? [])
            .map(replyId => replies.find(reply => reply?.id === replyId))
            .filter(reply => reply !== undefined) as IReply[]
        }))

        return commentsMerged
      } catch (e) {
        console.log(e)

        return comments
      }
    }

    return comments
  }

  private async mergeUserIntoItems (items: IComment[] | IReply[]) {
    let usersIds: IUser['id'][] = []

    items.forEach(item => {
      usersIds.push(item.created_by)
    })

    usersIds = [... new Set(usersIds)]

    try {
      const usersCollectionRef = this.usersCollection.getCollectionRef()
      const usersDocsSnapshot = await getDocs(query(usersCollectionRef, where('__name__', 'in', usersIds)))
      const users = extractNonNullableDocsData(usersDocsSnapshot.docs)

      const itemsMerged = items.map(item => ({
        ...item,
        created_by: users.find(user => user?.id === item.created_by) as IUser
      }))

      return itemsMerged
    } catch (e) {
      console.log(e)
      return items
    }
  }
}