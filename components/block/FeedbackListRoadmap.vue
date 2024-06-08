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

      <ui-feedback-list
        type="roadmap"
        :items="group.feedbacks" />
    </section>
  </div>
</template>