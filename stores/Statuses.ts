import { orderBy, query } from 'firebase/firestore'

export const useStatusesStore = defineStore('statuses', () => {
  const { $firebase } = useNuxtApp()

  const statuses = useCollection(query($firebase.collections.statuses.getCollection(), orderBy('order')))

  const initialStatus = computed(() => statuses.value.find(item => item?.order === 1))

  function getStatus (id: IStatus['id']) {
    return statuses.value.find(status => status.id === id)
  }

  return {
    statuses,
    initialStatus,
    getStatus
  }
})