<script setup lang="ts">
const feedbacksStore = useFeedbacksStore()
</script>

<template>
  <div
    v-if="feedbacksStore.feedbacksGroupedByStatus?.length > 0"
    class="inline-flex gap-x-30">
    <section
      v-for="group in feedbacksStore.feedbacksGroupedByStatus.slice(1)"
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

      <div class="flex flex-col flex-nowrap gap-y-24">
        <ui-feedback
          v-for="feedback in group.feedbacks"
          :key="feedback.id"
          type="roadmap"
          :data="feedback" />
      </div>
    </section>
  </div>
</template>