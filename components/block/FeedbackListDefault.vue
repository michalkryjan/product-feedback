<script setup lang="ts">
const feedbacksStore = useFeedbacksStore()
</script>

<template>
  <ui-feedback-list
    type="default"
    :items="feedbacksStore.feedbacksFilteredAndSorted" />
</template>