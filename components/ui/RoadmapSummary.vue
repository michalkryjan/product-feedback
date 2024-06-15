<script setup lang="ts">
import type { IUiListSummaryItemProps } from '~/components/ui/ListSummaryItem.vue'
import type { IFeedbacksGroupedByStatus } from '~/stores/Feedbacks'

interface IUiRoadmapSummaryProps {
  title: string
  feedbacksGroups: IFeedbacksGroupedByStatus[]
}

const props = defineProps<IUiRoadmapSummaryProps>()

const groupsMapped = computed<IUiListSummaryItemProps[]>(() => {
  if (props.feedbacksGroups) {
    return props.feedbacksGroups.filter(group => group.status.order !== 1).map(group => {
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
  groupsMapped.value.forEach(group => {
    if (group.count > 0) {
      return false
    }
  })

  return true
})
</script>

<template>
  <ui-card>
    <div class="mb-24 w-full inline-flex items-center justify-between">
      <base-headline
        :level="2"
        typography="title-3"
        color="navy">
        {{ title }}
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

    <ui-list-summary :items="groupsMapped" />
  </ui-card>
</template>