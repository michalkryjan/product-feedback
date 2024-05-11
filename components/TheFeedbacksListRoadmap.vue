<script setup lang="ts">
const { feedbacksGroupedByStatus } = storeToRefs(useFeedbacksStore())
</script>

<template>
  <div
    v-if="feedbacksGroupedByStatus"
    class="inline-flex gap-x-30">
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
        <feedback
          v-for="feedback in group.feedbacks"
          :key="feedback.id"
          type="roadmap"
          :data="feedback" />
      </div>
    </section>
  </div>
</template>