<script setup lang="ts">
const statusesStore = useStatusesStore()
const feedbacksStore = useFeedbacksStore()

const feedbacksGroupedByStatus = computed(() => {
  return statusesStore.statuses.map(status => ({
    status,
    feedbacks: feedbacksStore.getFeedbacksFilteredByStatus(status.id)
  }))
})
</script>

<template>
  <div class="inline-flex gap-x-30">
    <section
      v-for="group in feedbacksGroupedByStatus.slice(1)"
      :key="group.status.id"
      class="flex-1">
      <base-header variant="2">
        <base-headline
          typography="title-3"
          color="navy"
          class="mb-4">
          <span v-html="`${ useCapitalized(useOrphans(group.status.name)) } (${ group.feedbacks.length })`" />
        </base-headline>

        <base-content
          typography="text-body-1"
          color="gray">
          <span v-html="useOrphans(group.status.description)" />
        </base-content>
      </base-header>

      <div class="flex flex-col flex-nowrap gap-y-24">
        <card-feedback
          v-for="feedback in group.feedbacks"
          :key="feedback.id"
          type="roadmap"
          :data="feedback" />
      </div>
    </section>
  </div>
</template>