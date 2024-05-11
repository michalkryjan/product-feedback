<script setup lang="ts">
export interface IListSummaryItemData {
  label: string
  count: number
  markerColor: 'orange' | 'purple' | 'lightBlue'
}

interface IListSummaryItemProps {
  data: IListSummaryItemData
}

const props = defineProps<IListSummaryItemProps>()

const configMarker: Record<IListSummaryItemData['markerColor'], string> = {
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
      typography="text-body-1"
      color="gray">
      {{ data.label }}
    </base-content>

    <base-content
      tag="strong"
      typography="text-body-1"
      color="gray">
      {{ data.count.toString() }}
    </base-content>
  </li>
</template>