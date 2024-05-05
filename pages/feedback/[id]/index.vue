<script setup lang="ts">
const feedbacksStore = useFeedbacksStore()

const { params } = useRoute()

const feedback = feedbacksStore.getFeedback(params?.id ? parseInt(params.id) : -1)
</script>

<template>
  <layout-inner width-type="m">
    <card-feedback
      v-if="feedback"
      :data="feedback"
      :link-to-details="false" />
  </layout-inner>
</template>