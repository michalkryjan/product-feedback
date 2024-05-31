<script setup lang="ts">
const categoriesStore = useCategoriesStore()

const selectedId = ref<string>('all')

watch(selectedId, (newId) => {
  if (newId === 'all') {
    categoriesStore.filterId = undefined
  } else {
    categoriesStore.filterId = newId
  }
})
</script>

<template>
  <base-card>
    <filters
      :value="selectedId"
      :options="categoriesStore.categories"
      add-option-all
      @change="selectedId = ($event as string)" />
  </base-card>
</template>