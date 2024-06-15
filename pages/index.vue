<script setup lang="ts">
const feedbacksStore = useFeedbacksStore()
const categoriesStore = useCategoriesStore()
const filtersStore = useFiltersStore()

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
        <ui-product-info
          title="Your app name"
          subtitle="Feedback Board" />

        <ui-category-filters
          v-model:filter-by="filtersStore.filterBy.category"
          :categories="categoriesStore.categories" />

        <block-roadmap-summary />
      </div>

      <div class="col-start-2 col-end-2 h-fit flex flex-col">
        <ui-header-board
          v-model:sort-by="filtersStore.sortBy"
          :sort-by-options="filtersStore.availableSortOptions"
          :feedbacks-count="feedbacksStore.feedbacksCountFiltered" />

        <block-feedback-list-default v-if="feedbacksStore.feedbacksCountAll > 0" />
        <block-feedback-not-found v-else />
      </div>
    </div>
  </layout-page-inner>
</template>