<script setup lang="ts">
const currentFeedback = useCurrentRouteFeedback()
</script>

<template>
  <page-inner
    width-type="s"
    vertical-padding-type="m">
    <form-feedback-edit :feedback="currentFeedback" />
  </page-inner>
</template>