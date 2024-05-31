import { orderBy, query } from 'firebase/firestore'
import type { IFilterBy, ISortByOption } from '~/stores/Filters'

export const useFeedbacksStore = defineStore('feedbacks', () => {
  const { $firebase } = useNuxtApp()

  const categoriesStore = useCategoriesStore()
  const statusesStore = useStatusesStore()
  const filtersStore = useFiltersStore()

  const collection = useCollection<IFeedback>(query($firebase.db.feedbacks.getCollection(), orderBy('upvotes', 'desc')))
  const collectionNonNullable = computed<IFeedback[]>(() => collection.value.filter(item => item !== null))

  const feedbacks = computed<IFeedbackExtended[]>(() => {
    if (collectionNonNullable.value?.length > 0) {
      return collectionNonNullable.value.map(feedbackDoc => {
        return {
          ...feedbackDoc,
          categories: feedbackDoc.categories.map(catId => categoriesStore.getCategory(catId)).filter(cat => cat !== undefined),
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

  const feedbacksFiltered = computed(() => {
    return filterFeedbacks(filtersStore.filterBy, feedbacks.value)
  })

  const feedbacksFilteredAndSorted = computed(() => {
    return sortFeedbacks(filtersStore.sortBy.id, ld_cloneDeep(feedbacksFiltered.value))
  })

  const feedbacksCountAll = computed<number>(() => feedbacks.value?.length)
  const feedbacksCountFiltered = computed<number>(() => feedbacksFiltered.value?.length)

  function getFeedback (id: IFeedback['id']) {
    return feedbacks.value.find(feedback => feedback?.id === id)
  }

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

  function filterFeedbacks (filters: IFilterBy, feedbacks: IFeedbackExtended[]) {
    return feedbacks.filter(feedback => {
      if (!filters.categoryId) {
        return true
      }

      return (feedback?.categories ?? []).some(cat => cat.id === filters.categoryId)
    })
  }

  function sortFeedbacks (method: ISortByOption['id'], feedbacks: IFeedbackExtended[]) {
    if (method === 'upvotes-desc') {
      return sortFeedbacksByUpvotesDesc(feedbacks)
    } else if (method === 'upvotes-asc') {
      return sortFeedbacksByUpvotesAsc(feedbacks)
    } else if (method === 'comments-desc') {
      return sortFeedbacksByCommentsDesc(feedbacks)
    } else if (method === 'comments-asc') {
      return sortFeedbacksByCommentsAsc(feedbacks)
    } else {
      return feedbacks
    }
  }

  function sortFeedbacksByUpvotesDesc (feedbacks: IFeedbackExtended[]) {
    return feedbacks.sort((a, b) => b.upvotes - a.upvotes)
  }

  function sortFeedbacksByUpvotesAsc (feedbacks: IFeedbackExtended[]) {
    return feedbacks.sort((a, b) => a.upvotes - b.upvotes)
  }

  function sortFeedbacksByCommentsDesc (feedbacks: IFeedbackExtended[]) {
    return feedbacks.sort((a, b) => (b?.comments?.length ?? 0) - (a?.comments?.length ?? 0))
  }

  function sortFeedbacksByCommentsAsc (feedbacks: IFeedbackExtended[]) {
    return feedbacks.sort((a, b) => (a?.comments?.length ?? 0) - (b?.comments?.length ?? 0))
  }

  return {
    feedbacks,
    feedbacksGroupedByStatus,
    feedbacksFiltered,
    feedbacksFilteredAndSorted,
    feedbacksCountAll,
    feedbacksCountFiltered,
    getFeedback,
    addNewFeedback,
    deleteFeedback,
    updateFeedback
  }
})