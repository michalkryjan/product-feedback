<script setup lang="ts">
import type { IListSummaryItemProps } from './ListSummaryItem.vue'

const { feedbacksGroupedByStatus } = storeToRefs(useFeedbacksStore())

const listItems = computed<IListSummaryItemProps[]>(() => {
  if (feedbacksGroupedByStatus.value) {
    return feedbacksGroupedByStatus.value.filter(group => group.status.order !== 1).map(group => {
      return {
        label: group.status.name,
        count: group.feedbacks.length,
        markerColor: group.status.order
      }
    })
  } else {
    return []
  }
})

const isRoadmapDisabled = computed<boolean>(() => {
  listItems.value.forEach(group => {
    if (group.count > 0) {
      return false
    }
  })

  return true
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
        is-underline
        :disabled="isRoadmapDisabled" />
    </div>

    <list-summary :items="listItems" />
  </base-card>
</template>