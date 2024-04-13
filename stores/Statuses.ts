export const useStatusesStore = defineStore('statuses', () => {
  const statuses = ref<FeedbackStatus[]>([])

  const initialStatus = computed(() => statuses.value.find(item => item?.order === 1))

  function fetchStatuses () {
    // TODO: add api call

    statuses.value = [
      {
        id: 1,
        order: 1,
        name: 'suggestion',
        color: '#CDD2EE'
      },
      {
        id: 2,
        order: 2,
        name: 'planned',
        color: '#F49F85'
      },
      {
        id: 3,
        order: 3,
        name: 'in-progress',
        color: '#AD1FEA'
      },
      {
        id: 4,
        order: 4,
        name: 'live',
        color: '#62BCFA'
      }
    ]
  }

  return {
    statuses,
    initialStatus,
    fetchStatuses
  }
})