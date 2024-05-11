<script setup lang="ts">
const { feedbacks } = storeToRefs(useFeedbacksStore())

const { params } = useRoute()

const currentFeedback = computed(() => params?.id ? feedbacks.value.find(feedback => feedback.id === params.id) : undefined)
</script>

<template>
  <layout-inner width-type="m">
    <feedback
      v-if="currentFeedback"
      :data="currentFeedback"
      :link-to-details="false" />
  </layout-inner>
</template>