import { orderBy, query } from 'firebase/firestore'

export const useStatusesStore = defineStore('statuses', () => {
  const { $firebase } = useNuxtApp()

  const collection = useCollection<IStatus>(query($firebase.db.statuses.getCollection(), orderBy('order')))
  const collectionNonNullable = computed<IStatus[]>(() => collection.value.filter(item => item !== null))

  const initialStatus = computed(() => collectionNonNullable.value.find(item => item?.order === 1))

  function getStatus (id: IStatus['id']) {
    return collectionNonNullable.value.find(status => status.id === id)
  }

  return {
    statuses: collectionNonNullable,
    initialStatus,
    getStatus
  }
})