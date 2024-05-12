<script setup lang="ts">
export interface IListSummaryItemProps {
  label: string
  count: number
  markerColor?: number
}

const props = defineProps<IListSummaryItemProps>()

const configMarkerColor: Record<NonNullable<IListSummaryItemProps['markerColor']>, string> = {
  1: 'text-yellow-1',
  2: 'text-orange-1',
  3: 'text-purple-1',
  4: 'text-lightBlue-1'
}

const classes = computed(() => {
  return [
    'inline-flex justify-between gap-x-20 w-full',
    props.markerColor && Object.keys(configMarkerColor).includes(props.markerColor.toString()) ? configMarkerColor[props.markerColor] : 'text-gray-1'
  ]
})
</script>

<template>
  <li :class="classes">
    <base-content
      tag="span"
      typography="text-body-1"
      color="gray">
      {{ useCapitalized(label) }}
    </base-content>

    <base-content
      tag="strong"
      typography="text-body-1"
      color="gray">
      {{ count }}
    </base-content>
  </li>
</template>