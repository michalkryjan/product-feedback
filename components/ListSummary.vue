<script setup lang="ts">
import type { Data } from 'types/data'

interface IBaseListSummaryProps {
  items: Data.Components.ListSummaryItem[]
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