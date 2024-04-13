<script setup lang="ts">
const feedbacksStore = useFeedbacksStore()

const { params } = useRoute()

const feedback = feedbacksStore.getFeedback(params?.id ? parseInt(params.id) : -1)
</script>

<template>
  <div>
    <card-feedback
      v-if="feedback"
      :data="feedback"
      :link-to-details="false" />
  </div>
</template>