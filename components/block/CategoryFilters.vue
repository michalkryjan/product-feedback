<script setup lang="ts">
const categoriesStore = useCategoriesStore()
const filtersStore = useFiltersStore()

const selectedId = ref<string>('all')

watch(selectedId, (newId) => {
  if (newId === 'all') {
    filtersStore.filterBy.categoryId = undefined
  } else {
    filtersStore.filterBy.categoryId = newId
  }
})
</script>

<template>
  <ui-card>
    <ui-filters
      :value="selectedId"
      :options="categoriesStore.categories"
      add-option-all
      @change="selectedId = ($event as string)" />
  </ui-card>
</template>