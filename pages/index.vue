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
        <the-product-info />
        <the-category-filters />
        <the-roadmap-summary />
      </div>

      <div class="col-start-2 col-end-2 h-fit flex flex-col">
        <the-board-header />
        <the-feedbacks-list-default v-if="feedbacksStore.feedbacksCountAll > 0" />
        <the-feedbacks-not-found v-else />
      </div>
    </div>
  </layout-page-inner>
</template>