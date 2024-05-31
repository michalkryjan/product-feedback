import { orderBy, query } from 'firebase/firestore'

export const useFeedbacksStore = defineStore('feedbacks', () => {
  const { $firebase } = useNuxtApp()

  const categoriesStore = useCategoriesStore()
  const statusesStore = useStatusesStore()

  const collection = useCollection<IFeedback>(query($firebase.db.feedbacks.getCollection(), orderBy('upvotes', 'desc')))
  const collectionNonNullable = computed<IFeedback[]>(() => collection.value.filter(item => item !== null))

  const feedbacks = computed<IFeedbackExtended[]>(() => {
    if (collectionNonNullable.value?.length > 0) {
      return collectionNonNullable.value.map(feedbackDoc => {
        const currentFeedbackCategories = feedbackDoc.categories.map(catId => categoriesStore.getCategory(catId)).filter(cat => cat !== undefined)

        return {
          ...feedbackDoc,
          categories: currentFeedbackCategories,
          status: statusesStore.getStatus(feedbackDoc.status)
        } as IFeedbackExtended
      })
    }
    return []
  })

  const feedbacksGroupedByStatus = computed<IFeedbacksGroup[]>(() => {
    return statusesStore.statuses.map(status => ({
      feedbacks: feedbacks.value.filter(feedback => feedback?.status?.id === status.id),
      status
    }))
  })

  const feedbacksFilteredByCategory = computed(() => {
    const categoryFilterId = categoriesStore.filterId

    return feedbacks.value.filter(feedback => {
      if (!categoryFilterId) {
        return true
      }

      return (feedback?.categories ?? []).some(cat => cat.id === categoryFilterId)
    })
  })

  const feedbacksCount = computed<number>(() => feedbacks.value?.length)

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
    feedbacksFilteredByCategory,
    feedbacksCount,
    addNewFeedback,
    deleteFeedback,
    updateFeedback
  }
})