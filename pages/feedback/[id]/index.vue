<script setup lang="ts">
const currentFeedback = useCurrentRouteFeedback()

const editFeedbackUrl = computed<string | undefined>(() =>
  currentFeedback.value?.id ? `/feedback/${currentFeedback.value.id}/edit` : undefined
)
</script>

<template>
  <layout-page-inner
    width-type="m"
    vertical-padding-type="s">
    <ui-header-subpage margin-bottom-type="s">
      <template #button>
        <base-button
          text="Edit feedback"
          :href="editFeedbackUrl"
          size="s2"
          theme="blue"
          label-color="white" />
      </template>
    </ui-header-subpage>

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