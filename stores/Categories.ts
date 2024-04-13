export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<FeedbackCategory[]>([])

  function fetchCategories () {
    // TODO: add api call

    categories.value = [
      {
        id: 1,
        name: 'enhancement'
      },
      {
        id: 2,
        name: 'feature'
      },
      {
        id: 3,
        name: 'bug'
      }
    ]
  }

  return {
    categories,
    fetchCategories
  }
})