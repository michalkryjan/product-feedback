<script setup lang="ts">
const feedbacksStore = useFeedbacksStore()
</script>

<template>
  <layout-page-inner
    width-type="l"
    vertical-padding-type="s">
    <ui-header-subpage
      page-title="Roadmap"
      tag="header"
      type="card"
      margin-bottom-type="m">
      <template #button>
        <base-button
          text="Add feedback"
          href="/feedback/create"
          size="s2"
          theme="purple"
          label-color="white">
          <template #icon-left>
            <base-icon name="plus" />
          </template>
        </base-button>
      </template>
    </ui-header-subpage>

    <ui-feedback-board-roadmap
      v-if="feedbacksStore.feedbacksGroupedByStatus?.length > 0"
      :feedbacks-groups="feedbacksStore.feedbacksGroupedByStatus" />
    <lazy-ui-feedback-not-found
      v-else
      title="There is no feedback yet."
      content="Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app." />
  </layout-page-inner>
</template>