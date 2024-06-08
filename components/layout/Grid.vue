<script setup lang="ts">
interface ILayoutGridProps {
  type: '1col-v1' | '1col-v2'
}

const props = defineProps<ILayoutGridProps>()

const configType: Record<ILayoutGridProps['type'], string> = {
  '1col-v1': 'grid-cols-1 auto-rows-max gap-y-20',
  '1col-v2': 'grid-cols-1 auto-rows-max gap-y-24'
}

const classes = computed(() => {
  return [
    'grid',
    configType[props.type]
  ]
})
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>