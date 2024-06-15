<script setup lang="ts">
import type { IDropdownSelectOption } from './DropdownSelect.vue'

interface IUiHeaderBoardProps {
  feedbacksCount: number
  sortBy: IDropdownSelectOption | undefined
  sortByOptions: IDropdownSelectOption[]
}

interface IUiHeaderBoardEmits {
  (e: 'update:sortBy', val: IDropdownSelectOption | undefined): void
}

const props = defineProps<IUiHeaderBoardProps>()
const emit = defineEmits<IUiHeaderBoardEmits>()

const sortByModel = computed<IDropdownSelectOption | undefined>({
  get: () => props.sortBy,
  set: (val: IDropdownSelectOption | undefined) => emit('update:sortBy', val)
})
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
      {{ `${ feedbacksCount } Suggestions` }}
    </base-headline>

    <ui-dropdown-select-sort-by
      v-model="sortByModel"
      :options="sortByOptions" />

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