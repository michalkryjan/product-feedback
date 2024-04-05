<script setup lang="ts">
import type { Data } from 'types/data'

interface IListSummaryItemProps {
  data: Data.Components.ListSummaryItem
}

const props = defineProps<IListSummaryItemProps>()

const configMarker: Record<Data.Components.ListSummaryItem['markerColor'], string> = {
  orange: 'text-orange-1',
  purple: 'text-purple-1',
  lightBlue: 'text-lightBlue-1'
}

const classes = computed(() => {
  return [
    'inline-flex justify-between gap-x-20 w-full',
    configMarker[props.data.markerColor]
  ]
})
</script>

<template>
  <li :class="classes">
    <base-content
      tag="span"
      typography="body-1"
      color="gray">
      <span v-html="useOrphans(data.label)" />
    </base-content>

    <base-content
      tag="strong"
      typography="body-1"
      color="gray">
      <span v-html="useOrphans(data.count.toString())" />
    </base-content>
  </li>
</template>