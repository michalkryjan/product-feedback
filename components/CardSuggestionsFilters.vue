<script setup lang="ts">
import type { Data } from 'types/data'

interface IMainMenuSuggestionsFiltersProps {
  data: Data.Components.MainMenuSuggestionsFilters
}

const props = defineProps<IMainMenuSuggestionsFiltersProps>()

const optionsAvailable = computed<Data.Components.FiltersOption[]>(() => {
  return props.data.items.map(item => ({
    label: item.label,
    value: item.label.toLowerCase()
  }))
})

const optionsSelected = ref<string[]>([])
</script>

<template>
  <base-card>
    <filters
      :value="optionsSelected"
      :options="optionsAvailable"
      add-option-all
      @change="optionsSelected = ($event as string[])" />
  </base-card>
</template>