<script setup lang="ts">
interface ILayoutGridProps {
  variant: '1col-v1' | '1col-v2'
}

const props = defineProps<ILayoutGridProps>()

const configVariant: Record<ILayoutGridProps['variant'], string> = {
  '1col-v1': 'grid-cols-1 auto-rows-max gap-y-20',
  '1col-v2': 'grid-cols-1 auto-rows-max gap-y-24'
}

const classes = computed(() => {
  return [
    'grid',
    configVariant[props.variant]
  ]
})
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>