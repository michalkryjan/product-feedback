<script setup lang="ts">
const { categories, categoriesFilter } = storeToRefs(useCategoriesStore())

const selectedId = ref<string>('all')

watch(selectedId, (newId) => {
  if (newId === 'all') {
    categoriesFilter.value = undefined
  } else {
    categoriesFilter.value = newId
  }
})
</script>

<template>
  <base-card>
    <filters
      :value="selectedId"
      :options="categories"
      add-option-all
      @change="selectedId = ($event as string)" />
  </base-card>
</template>