import { getDocs, orderBy, query, where, type Firestore, type QueryFieldFilterConstraint, type QueryOrderByConstraint } from 'firebase/firestore'
import { FirebaseCategoriesCollection } from './collections/categories/Main'
import { FirebaseFeedbacksCollection } from './collections/feedbacks/Main'
import { FirebaseStatusesCollection } from './collections/statuses/Main'
import { extractNonNullableDocsData } from './helpers'

interface IGetFeedbacksOptions {
  orderBy?: Record<Partial<keyof IFeedback>, 'asc' | 'desc'>
  merge?: {
    category?: boolean
    status?: boolean
    user?: boolean
  }
}

interface IFirebaseFeedbacksService {
  getFeedbacks: (options: IGetFeedbacksOptions) => unknown
}

export class FirebaseFeedbacksService implements IFirebaseFeedbacksService {
  private readonly feedbacksCollection: FirebaseFeedbacksCollection
  private readonly categoriesCollection: FirebaseCategoriesCollection
  private readonly statusesCollection: FirebaseStatusesCollection

  constructor (firestore: Firestore) {
    this.feedbacksCollection = new FirebaseFeedbacksCollection(firestore)
    this.categoriesCollection = new FirebaseCategoriesCollection(firestore)
    this.statusesCollection = new FirebaseStatusesCollection(firestore)
  }

  public async getFeedbacks (options: IGetFeedbacksOptions) {
    try {
      const feedbacksCollectionRef = this.feedbacksCollection.getCollectionRef()
      const queryArgs: (QueryFieldFilterConstraint | QueryOrderByConstraint)[] = []

      if (options?.orderBy) {
        Object.entries(options.orderBy).forEach(item => {
          queryArgs.push(orderBy(item[0], item[1]))
        })
      }

      const feedbacksDocsSnapshot = await getDocs(query(feedbacksCollectionRef, ...queryArgs))
      let feedbacks = extractNonNullableDocsData(feedbacksDocsSnapshot.docs)

      if (options?.merge?.category === true) {
        feedbacks = await this.mergeCategoryIntoFeedbacks(feedbacks)
      }

      if (options?.merge?.status === true) {
        feedbacks = await this.mergeStatusIntoFeedbacks(feedbacks)
      }

      return feedbacks
    } catch (e) {
      console.log(e)

      return []
    }
  }

  private async mergeCategoryIntoFeedbacks (feedbacks: IFeedback[]) {
    let categoriesIds: ICategory['id'][] = []

    feedbacks.forEach(feedback => {
      categoriesIds.push(feedback.category)
    })

    categoriesIds = [... new Set(categoriesIds)]

    try {
      const categoriesCollectionRef = this.categoriesCollection.getCollectionRef()
      const categoriesDocsSnapshot = await getDocs(query(categoriesCollectionRef, where('__name__', 'in', categoriesIds)))
      const categories = extractNonNullableDocsData(categoriesDocsSnapshot.docs)

      const feedbacksMerged = feedbacks.map(feedback => ({
        ...feedback,
        category: categories.find(category => category?.id === feedback.category) as ICategory
      }))

      return feedbacksMerged
    } catch (e) {
      console.log(e)

      return feedbacks
    }
  }

  private async mergeStatusIntoFeedbacks (feedbacks: IFeedback[]) {
    let statusesIds: IStatus['id'][] = []

    feedbacks.forEach(feedback => {
      statusesIds.push(feedback.status)
    })

    statusesIds = [... new Set(statusesIds)]

    try {
      const statusesCollectionRef = this.statusesCollection.getCollectionRef()
      const statusesDocsSnapshot = await getDocs(query(statusesCollectionRef, where('__name__', 'in', statusesIds)))
      const statuses = extractNonNullableDocsData(statusesDocsSnapshot.docs)

      const feedbacksMerged = feedbacks.map(feedback => ({
        ...feedback,
        status: statuses.find(status => status?.id === feedback.status) as ICategory
      }))

      return feedbacksMerged
    } catch (e) {
      console.log(e)

      return feedbacks
    }
  }
}
