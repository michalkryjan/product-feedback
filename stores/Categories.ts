export const useCategoriesStore = defineStore('categories', () => {
  const { $firebase } = useNuxtApp()

  const collection = useCollection<ICategory | null>($firebase.db.categories.getCollection())
  const collectionNonNullable = computed<ICategory[]>(() => collection.value.filter(item => item !== null))

  const filterId = ref<ICategory['id'] | undefined>(undefined)

  function getCategory (id: ICategory['id']): ICategory | undefined {
    return collectionNonNullable.value.find(cat => cat.id === id)
  }

  return {
    categories: collectionNonNullable,
    filterId,
    getCategory
  }
})