import { orderBy, query } from 'firebase/firestore'

export const useFeedbacksStore = defineStore('feedbacks', () => {
  const { $firebase } = useNuxtApp()

  const categoriesStore = useCategoriesStore()
  const statusesStore = useStatusesStore()

  const collection = useCollection(query($firebase.db.feedbacks.getCollection(), orderBy('upvotes', 'desc')))

  const feedbacks = computed<Array<Omit<IFeedback, 'categories' | 'status'> & {
    categories: ICategory[]
    status: IStatus
  }>>(() => {
    if (collection.value?.length > 0) {
      if (categoriesStore.categories?.length > 0) {
        return collection.value.map(doc => {
          return {
            ...doc,
            categories: doc.categories.map(catId => categoriesStore.getCategory(catId)),
            status: statusesStore.getStatus(doc.status)
          }
        })
      } else {
        return collection.value
      }
    }

    return []
  })

  const feedbacksGroupedByStatus = computed(() => {
    return statusesStore.statuses.map(status => ({
      status,
      feedbacks: feedbacks.value.filter(feedback => feedback.status.id === status.id)
    }))
  })

  async function addNewFeedback (data: Pick<IFeedback, 'title' | 'categories' | 'status' | 'description'>): Promise<boolean> {
    try {
      const result = await $firebase.db.feedbacks.addNewDoc({
        title: data.title,
        description: data.description,
        upvotes: 0,
        created_by: '0', // TO DO: add current user ID
        categories: data.categories,
        status: data.status,
        comments: []
      })

      console.log('New feedback created with id: ', result.id)

      return true
    } catch (e) {
      console.log(e)

      return false
    }
  }

  async function updateFeedback (id: IFeedback['id'], data: Pick<IFeedback, 'title' | 'categories' | 'description'>): Promise<boolean> {
    try {
      await $firebase.db.feedbacks.updateDoc(id, {
        title: data.title,
        description: data.description,
        categories: data.categories
      })

      console.log('Feedback with id ', id, ' successfully updated.')

      return true
    } catch (e) {
      console.log(e)

      return false
    }
  }

  async function deleteFeedback (id: IFeedback['id']): Promise<boolean> {
    try {
      await $firebase.db.feedbacks.deleteDoc(id)

      console.log('Feedback with id ', id, ' successfully updated.')

      return true
    } catch (e) {
      console.log(e)

      return false
    }
  }

  return {
    feedbacks,
    feedbacksGroupedByStatus,
    addNewFeedback,
    deleteFeedback,
    updateFeedback
  }
})