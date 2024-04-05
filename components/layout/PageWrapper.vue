<script setup lang="ts">
interface ILayoutPageWrapperProps {
  widthType?: 's' | 'm' | 'l'
}

const props = withDefaults(defineProps<ILayoutPageWrapperProps>(), {
  widthType: 'l',
  paddingTopType: '1'
})

const configWidthType: Record<NonNullable<ILayoutPageWrapperProps['widthType']>, string> = {
  s: 'max-w-588 m:max-w-620',
  m: 'max-w-778 m:max-w-810',
  l: 'max-w-1158 m:max-w-1190'
}

const classes = computed<string[]>(() => {
  return [
    'relative w-full px-24 m:px-40 mx-auto',
    configWidthType[props.widthType]
  ]
})
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>