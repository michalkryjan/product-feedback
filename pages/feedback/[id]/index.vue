<script setup lang="ts">
const { feedbacks } = storeToRefs(useFeedbacksStore())

const { params } = useRoute()

const currentFeedback = computed(() => params?.id ? feedbacks.value.find(feedback => feedback.id === params.id) : undefined)
</script>

<template>
  <layout-page-inner
    width-type="m"
    vertical-padding-type="s">
    <feedback
      v-if="currentFeedback"
      :data="currentFeedback"
      :add-link-to-details="false" />
  </layout-page-inner>
</template>