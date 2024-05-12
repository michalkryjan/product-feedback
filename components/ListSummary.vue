<script setup lang="ts">
import type { IListSummaryItemProps } from './ListSummaryItem.vue'

interface IBaseListSummaryProps {
  items: IListSummaryItemProps[]
}

const props = defineProps<IBaseListSummaryProps>()
</script>

<template>
  <base-list tag="ul">
    <list-summary-item
      v-for="(item, index) in items"
      :key="index"
      :label="item.label"
      :count="item.count"
      :marker-color="item.markerColor" />
  </base-list>
</template>