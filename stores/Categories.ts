import { getDocs } from 'firebase/firestore'
import type { Models } from 'types/models'
import { extractNonNullableDocs } from '~/firebase/helpers'

export const useCategoriesStore = defineStore('categories', () => {
  const { $firebase } = useNuxtApp()

  const categories = ref<Models.ICategory[]>([])

  async function updateCategories () {
    const querySnapshot = await getDocs($firebase.db.categories.getCollectionRef())
    categories.value = extractNonNullableDocs(querySnapshot.docs)
  }

  function findCategory (id: Models.ICategory['id']): Models.ICategory | undefined {
    return categories.value.find(cat => cat.id === id)
  }

  return {
    categories,
    updateCategories,
    findCategory
  }
})