<script setup lang="ts">
const currentFeedback = useCurrentRouteFeedback()
</script>

<template>
  <layout-page-inner
    width-type="m"
    vertical-padding-type="s">
    <layout-grid variant="1col-v2">
      <ui-feedback
        v-if="currentFeedback"
        :data="currentFeedback"
        :add-link-to-details="false" />

      <block-comment-list />

      <block-comment-create />
    </layout-grid>
  </layout-page-inner>
</template>