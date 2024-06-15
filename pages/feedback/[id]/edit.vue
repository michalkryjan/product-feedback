<script setup lang="ts">
const currentFeedback = useCurrentRouteFeedback()
</script>

<template>
  <layout-page-inner
    width-type="s"
    vertical-padding-type="m">
    <ui-header-subpage margin-bottom-type="l" />

    <block-feedback-edit :feedback="currentFeedback" />
  </layout-page-inner>
</template>