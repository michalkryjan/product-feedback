import { getDocs, orderBy, query } from 'firebase/firestore'
import type { Models } from 'types/models'
import { extractNonNullableDocs } from '~/firebase/helpers'

export const useStatusesStore = defineStore('statuses', () => {
  const { $firebase } = useNuxtApp()

  const statuses = ref<Models.IStatus[]>([])

  const initialStatus = computed(() => statuses.value.find(item => item?.order === 1))

  async function updateStatuses () {
    const querySnapshot = await getDocs(query($firebase.db.statuses.getCollectionRef(), orderBy('order', 'asc')))
    statuses.value = extractNonNullableDocs(querySnapshot.docs)
  }

  function findStatus (id: Models.IStatus['id']) {
    return statuses.value.find(status => status.id === id)
  }

  return {
    statuses,
    initialStatus,
    updateStatuses,
    findStatus
  }
})