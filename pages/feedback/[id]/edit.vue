<script setup lang="ts">
const currentFeedback = useCurrentRouteFeedback()
</script>

<template>
  <layout-page-inner
    width-type="s"
    vertical-padding-type="m">
    <ui-header-subpage margin-bottom-type="l" />

    <form-feedback-edit
      v-if="currentFeedback"
      :feedback="currentFeedback" />
  </layout-page-inner>
</template>