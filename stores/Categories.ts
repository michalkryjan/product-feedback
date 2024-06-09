export const useCategoriesStore = defineStore('categories', () => {
  const { $firebase } = useNuxtApp()

  const categories = ref<ICategory[]>([])

  async function updateCategories () {
    categories.value = await $firebase.db.categories.getCategories()
  }

  function findCategory (id: ICategory['id']): ICategory | undefined {
    return categories.value.find(cat => cat.id === id)
  }

  return {
    categories,
    findCategory,
    updateCategories
  }
})