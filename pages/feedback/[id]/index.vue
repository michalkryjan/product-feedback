<script setup lang="ts">
const feedbacksStore = useFeedbacksStore()

const { params } = useRoute()

const feedback = feedbacksStore.getFeedback(params?.id ? parseInt(params.id) : -1)
</script>

<template>
  <layout-page-wrapper width-type="m">
    <card-feedback
      v-if="feedback"
      :data="feedback"
      :link-to-details="false" />
  </layout-page-wrapper>
</template>