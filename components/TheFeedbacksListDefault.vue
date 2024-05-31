<script setup lang="ts">
const feedbacksStore = useFeedbacksStore()
</script>

<template>
  <feedback
    v-for="item in feedbacksStore.feedbacksFilteredAndSorted"
    :key="item.id"
    :data="item"
    class="mb-20 last:mb-0" />
</template>