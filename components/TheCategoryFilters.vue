<script setup lang="ts">
import type { IFiltersOptionData } from '~/components/FiltersOption.vue'

interface ITheCategoryFiltersProps {
  data: IFiltersOptionData[]
}

const props = defineProps<ITheCategoryFiltersProps>()

const optionsSelected = ref<string[]>([])
</script>

<template>
  <base-card>
    <filters
      :value="optionsSelected"
      :options="data"
      add-option-all
      @change="optionsSelected = ($event as string[])" />
  </base-card>
</template>