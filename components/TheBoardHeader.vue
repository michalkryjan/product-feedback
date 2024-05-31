<script setup lang="ts">
import type { IDropdownSelectOption } from '~/components/DropdownSelect.vue'

const feedbacksStore = useFeedbacksStore()

const sortingOptions = [
  {
    id: 'upvotes-desc',
    name: 'Most Upvotes'
  },
  {
    id: 'upvotes-asc',
    name: 'Least Upvotes'
  },
  {
    id: 'comments-desc',
    name: 'Most Comments'
  },
  {
    id: 'comments-asc',
    name: 'Least Comments'
  }
]

const selectedSortingOption = ref<IDropdownSelectOption>(sortingOptions[0])
</script>

<template>
  <base-card
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
      {{ `${ feedbacksStore.feedbacksCount } Suggestions` }}
    </base-headline>

    <dropdown-select-sort-by
      v-model="selectedSortingOption"
      :options="sortingOptions" />

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
  </base-card>
</template>