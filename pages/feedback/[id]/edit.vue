<script setup lang="ts">
const currentFeedback = useCurrentRouteFeedback()
</script>

<template>
  <layout-page-inner
    width-type="s"
    vertical-padding-type="m">
    <block-feedback-edit :feedback="currentFeedback" />
  </layout-page-inner>
</template>