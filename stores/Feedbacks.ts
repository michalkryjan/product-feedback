import { Timestamp, getDocs } from 'firebase/firestore'
import type { Models } from 'types/models'
import { extractNonNullableDocs } from '~/firebase/helpers'
import type { IFilterBy, ISortByOption } from '~/stores/Filters'

interface IFeedbacksGroupedByStatus {
  feedbacks: Models.IFeedback[]
  status: Models.IStatus
}

export const useFeedbacksStore = defineStore('feedbacks', () => {
  const { $firebase } = useNuxtApp()

  const statusesStore = useStatusesStore()
  const filtersStore = useFiltersStore()

  const feedbacks = ref<Models.IFeedback[]>([])

  const feedbacksGroupedByStatus = computed<IFeedbacksGroupedByStatus[]>(() => {
    return statusesStore.statuses.map(status => ({
      feedbacks: feedbacks.value.filter(feedback => feedback?.status_name === status.name),
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

  function findFeedback (id: Models.IFeedback['id']) {
    return feedbacks.value.find(feedback => feedback?.id === id)
  }

  async function updateFeedbacks () {
    const querySnapshot = await getDocs($firebase.db.feedbacks.getCollectionRef())
    feedbacks.value = extractNonNullableDocs(querySnapshot.docs)
  }

  async function addNewFeedback (data: Pick<Models.IFeedback, 'title' | 'description' | 'category_name' | 'status_name'>): Promise<boolean> {
    try {
      const result = await $firebase.db.feedbacks.addNewDoc({
        title: data.title,
        description: data.description,
        upvotes: 0,
        created_by: '0', // TO DO: add current user ID
        created_date: Timestamp.fromDate(new Date()),
        category: data.category_name,
        status: data.status_name,
        comments: []
      })

      console.log('New feedback created with id: ', result.id)

      return true
    } catch (e) {
      console.log(e)

      return false
    }
  }

  async function updateFeedback (id: Models.IFeedback['id'], data: Pick<Models.IFeedback, 'title' | 'description' | 'category_name'>): Promise<boolean> {
    try {
      await $firebase.db.feedbacks.updateDoc(id, {
        title: data.title,
        description: data.description,
        category: data.category_name
      })
      console.log('Feedback with id ', id, ' successfully updated.')
      return true
    } catch (e) {
      console.log(e)

      return false
    }
  }

  async function deleteFeedback (id: Models.IFeedback['id']): Promise<boolean> {
    try {
      await $firebase.db.feedbacks.deleteDoc(id)
      console.log('Feedback with id ', id, ' successfully updated.')
      return true
    } catch (e) {
      console.log(e)

      return false
    }
  }

  function filterFeedbacks (filters: IFilterBy, feedbacks: Models.IFeedback[]) {
    return feedbacks.filter(feedback => {
      if (!filters.category?.name) {
        return true
      }

      return feedback?.category_name === filters.category.name
    })
  }

  function sortFeedbacks (method: ISortByOption['id'], feedbacks: Models.IFeedback[]) {
    if (method === 'upvotes_count-desc') {
      return sortFeedbacksByUpvotesDesc(feedbacks)
    } else if (method === 'upvotes_count-asc') {
      return sortFeedbacksByUpvotesAsc(feedbacks)
    } else if (method === 'comments_count-desc') {
      return sortFeedbacksByCommentsDesc(feedbacks)
    } else if (method === 'comments_count-asc') {
      return sortFeedbacksByCommentsAsc(feedbacks)
    } else {
      return feedbacks
    }
  }

  function sortFeedbacksByUpvotesDesc (feedbacks: Models.IFeedback[]) {
    return feedbacks.sort((a, b) => b.upvotes_count - a.upvotes_count)
  }

  function sortFeedbacksByUpvotesAsc (feedbacks: Models.IFeedback[]) {
    return feedbacks.sort((a, b) => a.upvotes_count - b.upvotes_count)
  }

  function sortFeedbacksByCommentsDesc (feedbacks: Models.IFeedback[]) {
    return feedbacks.sort((a, b) => b.comments_count - a.comments_count)
  }

  function sortFeedbacksByCommentsAsc (feedbacks: Models.IFeedback[]) {
    return feedbacks.sort((a, b) => a.comments_count - b.comments_count)
  }

  return {
    feedbacks,
    feedbacksGroupedByStatus,
    feedbacksFiltered,
    feedbacksFilteredAndSorted,
    feedbacksCountAll,
    feedbacksCountFiltered,
    updateFeedbacks,
    findFeedback,
    addNewFeedback,
    deleteFeedback,
    updateFeedback
  }
})