<script setup lang="ts">
const feedbacksStore = useFeedbacksStore()
const filtersStore = useFiltersStore()
</script>

<template>
  <ui-card
    layout="row"
    theme="darkNavy"
    overflow="visible"
    class="items-center mb-24">
    <base-icon
      name="suggestions"
      class="w-24 h-24 mr-16" />

    <base-headline
      :level="2"
      typography="title-3"
      class="mr-40">
      {{ `${ feedbacksStore.feedbacksCountFiltered } Suggestions` }}
    </base-headline>

    <ui-dropdown-select-sort-by
      v-model="filtersStore.sortBy"
      :options="filtersStore.availableSortOptions" />

    <base-button
      text="Add feedback"
      href="/feedback/create"
      size="s2"
      theme="purple"
      label-color="white"
      class="ml-auto">
      <template #icon-left>
        <base-icon name="plus" />
      </template>
    </base-button>
  </ui-card>
</template>