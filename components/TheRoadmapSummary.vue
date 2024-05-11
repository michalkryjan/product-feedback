<script setup lang="ts">
const { feedbacksGroupedByStatus } = storeToRefs(useFeedbacksStore())

const listData = computed(() => {
  if (feedbacksGroupedByStatus.value) {
    return feedbacksGroupedByStatus.value.map(group => {
      return {
        label: group.status.name,
        count: group.feedbacks.length,
        markerColor: 'orange'
      }
    })
  } else {
    return []
  }
})
</script>

<template>
  <base-card>
    <div class="mb-24 w-full inline-flex items-center justify-between">
      <base-headline
        :level="2"
        typography="title-3"
        color="navy">
        <span>Roadmap</span>
      </base-headline>

      <base-button
        text="View"
        href="/roadmap"
        label-size="s2"
        theme="transparent"
        label-color="blue"
        is-underline />
    </div>

    <list-summary :items="listData" />
  </base-card>
</template>