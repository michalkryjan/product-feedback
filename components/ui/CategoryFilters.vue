<script setup lang="ts">
import type { Models } from 'types/models'

interface IUiCategoryFiltersProps {
  filterBy: Models.ICategory | undefined
  categories: Models.ICategory[]
}

interface IUiCategoryFiltersEmits {
  (e: 'update:filterBy', val: Models.ICategory | undefined): void
}

const props = defineProps<IUiCategoryFiltersProps>()
const emit = defineEmits<IUiCategoryFiltersEmits>()

const filterByModel = computed<Models.ICategory | undefined>({
  get: () => props.filterBy,
  set: (val: Models.ICategory | undefined) => {
    if (val?.id === 'all') {
      emit('update:filterBy', undefined)
    } else {
      emit('update:filterBy', val)
    }
  }
})
</script>

<template>
  <ui-card>
    <ui-filters
      v-model:value="filterByModel"
      :options="categories" />
  </ui-card>
</template>