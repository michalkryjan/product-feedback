<script setup lang="ts">
import { IListSummaryItemData } from './ListSummaryItem.vue'

interface IBaseListSummaryProps {
  items: IListSummaryItemData[]
}

const props = defineProps<IBaseListSummaryProps>()
</script>

<template>
  <base-list tag="ul">
    <list-summary-item
      v-for="(item, index) in items"
      :key="index"
      :data="item" />
  </base-list>
</template>