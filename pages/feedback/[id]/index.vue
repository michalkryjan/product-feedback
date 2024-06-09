<script setup lang="ts">
const currentFeedback = useCurrentRouteFeedback()
</script>

<template>
  <layout-page-inner
    width-type="m"
    vertical-padding-type="s">
    <layout-grid
      v-if="currentFeedback"
      type="1col-v2">
      <ui-feedback
        :data="currentFeedback"
        :link-to-details="false" />

      <block-comment-list :comments-ids="currentFeedback.comments" />

      <block-comment-create :feedback-id="currentFeedback.id" />
    </layout-grid>
  </layout-page-inner>
</template>