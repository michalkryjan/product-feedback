<script setup lang="ts">
const feedbacksStore = useFeedbacksStore()
</script>

<template>
  <base-card
    layout="row"
    theme="darkNavy"
    class="items-center mb-24">
    <base-icon
      name="suggestions"
      class="w-24 h-24 mr-16" />
    <base-headline
      :level="2"
      typography="title-3"
      class="m-0">
      {{ `${ feedbacksStore.feedbacksCount } Suggestions` }}
    </base-headline>

    <base-button
      text="Add feedback"
      href="/feedback/create"
      size="s2"
      theme="purple"
      label-color="white"
      class="ml-auto">
      <template #icon-left>
        <base-icon name="plus" />
      </template>
    </base-button>
  </base-card>
</template>