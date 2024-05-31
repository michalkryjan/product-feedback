export function useCurrentRouteFeedback () {
  const feedbacksStore = useFeedbacksStore()
  const { params } = useRoute()

  const feedback = computed(() => params?.id ? feedbacksStore.getFeedback(params.id) : undefined)

  return feedback
}