<script setup lang="ts">
const feedbacksStore = useFeedbacksStore()

const { params } = useRoute()

const feedback = feedbacksStore.getFeedback(params?.id ? parseInt(params.id) : -1)
</script>

<template>
  <div>
    <nuxt-layout name="details">
      <card-feedback
        v-if="feedback"
        :data="feedback" />
    </nuxt-layout>
  </div>
</template>