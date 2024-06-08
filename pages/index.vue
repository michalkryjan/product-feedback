<script setup lang="ts">
const feedbacksStore = useFeedbacksStore()

useHead({
  title: 'Feedback board',
})
</script>

<template>
  <layout-page-inner
    width-type="l"
    vertical-padding-type="m">
    <div class="grid grid-cols-[26rem_1fr] w-full gap-x-30">
      <div class="col-start-1 col-end-1 flex flex-col gap-24">
        <block-product-info />
        <block-category-filters />
        <block-roadmap-summary />
      </div>

      <div class="col-start-2 col-end-2 h-fit flex flex-col">
        <block-board-header />
        <block-feedback-list-default v-if="feedbacksStore.feedbacksCountAll > 0" />
        <block-feedback-not-found v-else />
      </div>
    </div>
  </layout-page-inner>
</template>