<script setup lang="ts">
const feedbacksStore = useFeedbacksStore()
</script>

<template>
  <layout-grid variant="1col-v2">
    <ui-feedback
      v-for="item in feedbacksStore.feedbacksFilteredAndSorted"
      :key="item.id"
      :data="item" />
  </layout-grid>
</template>