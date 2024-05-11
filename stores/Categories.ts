export const useCategoriesStore = defineStore('categories', () => {
  const { $firebase } = useNuxtApp()

  const categories = useCollection($firebase.collections.categories.getCollection())

  function getCategory (id: ICategory['id']) {
    return categories.value.find(cat => cat.id === id)
  }

  return {
    categories,
    getCategory
  }
})