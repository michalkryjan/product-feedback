<script setup lang="ts">
export interface IListSummaryItemProps {
  label: string
  count: number
  markerColor?: number
}

const props = defineProps<IListSummaryItemProps>()

const classes = computed(() => {
  return [
    'inline-flex justify-between gap-x-20 w-full',
    props.markerColor ? useAccentColor(props.markerColor, 'textClass') : 'text-gray-1'
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