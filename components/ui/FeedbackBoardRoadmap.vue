<script setup lang="ts">
import type { IFeedbacksGroupedByStatus } from '~/stores/Feedbacks'

interface IUiFeedbackBoardRoadmapProps {
  feedbacksGroups: IFeedbacksGroupedByStatus[]
}

const props = defineProps<IUiFeedbackBoardRoadmapProps>()

const groupsFiltered = computed(() => props.feedbacksGroups.filter(group => group.status.order !== 1))
</script>

<template>
  <div class="inline-flex gap-x-30 w-full">
    <section
      v-for="group in groupsFiltered"
      :key="group.status.id"
      class="flex-1">
      <base-header variant="2">
        <base-headline
          typography="title-3"
          color="navy"
          class="mb-4">
          <span v-html="`${ useCapitalized(group.status.name) } (${ group.feedbacks.length })`" />
        </base-headline>

        <base-content
          typography="text-body-1"
          color="gray">
          <span v-html="useOrphans(group.status.description)" />
        </base-content>
      </base-header>

      <ui-feedback-list
        type="roadmap"
        :items="group.feedbacks" />
    </section>
  </div>
</template>