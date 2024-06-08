<script setup lang="ts">
const currentFeedback = useCurrentRouteFeedback()
</script>

<template>
  <layout-page-inner
    width-type="m"
    vertical-padding-type="s">
    <ui-feedback
      v-if="currentFeedback"
      :data="currentFeedback"
      :add-link-to-details="false" />

    <block-comment-list class="mt-24" />

    <block-comment-create class="mt-24" />
  </layout-page-inner>
</template>