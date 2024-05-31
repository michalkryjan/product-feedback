<script setup lang="ts">
const currentFeedback = useCurrentRouteFeedback()
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