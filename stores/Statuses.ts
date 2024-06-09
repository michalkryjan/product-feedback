export const useStatusesStore = defineStore('statuses', () => {
  const { $firebase } = useNuxtApp()

  const statuses = ref<IStatus[]>([])

  const initialStatus = computed(() => statuses.value.find(item => item?.order === 1))

  async function updateStatuses () {
    statuses.value = await $firebase.db.statuses.getStatuses()
  }

  function findStatus (id: IStatus['id']) {
    return statuses.value.find(status => status.id === id)
  }

  return {
    statuses,
    initialStatus,
    updateStatuses,
    findStatus
  }
})