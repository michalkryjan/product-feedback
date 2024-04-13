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
        description: 'Ideas added by users',
        color: '#CDD2EE'
      },
      {
        id: 2,
        order: 2,
        name: 'planned',
        description: 'Ideas prioritized for research',
        color: '#F49F85'
      },
      {
        id: 3,
        order: 3,
        name: 'in-progress',
        description: 'Currently being developed',
        color: '#AD1FEA'
      },
      {
        id: 4,
        order: 4,
        name: 'live',
        description: 'Released features',
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