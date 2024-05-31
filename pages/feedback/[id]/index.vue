<script setup lang="ts">
const feedbacksStore = useFeedbacksStore()

const { params } = useRoute()

const currentFeedback = computed(() => params?.id ? feedbacksStore.getFeedback(params.id) : undefined)
</script>

<template>
  <page-inner
    width-type="m"
    vertical-padding-type="s">
    <feedback
      v-if="currentFeedback"
      :data="currentFeedback"
      :add-link-to-details="false" />
  </page-inner>
</template>