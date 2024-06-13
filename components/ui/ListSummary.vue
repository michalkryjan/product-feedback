<script setup lang="ts">
import type { IUiListSummaryItemProps } from '~/components/ui/ListSummaryItem.vue'

interface IUiListSummaryProps {
  items: IUiListSummaryItemProps[]
}

const props = defineProps<IUiListSummaryProps>()
</script>

<template>
  <base-list tag="ul">
    <ui-list-summary-item
      v-for="(item, index) in items"
      :key="index"
      :label="item.label"
      :count="item.count"
      :marker-color="item.markerColor" />
  </base-list>
</template>