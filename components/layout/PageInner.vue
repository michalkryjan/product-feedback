<script setup lang="ts">
interface ILayoutPageInnerProps {
  widthType?: 's' | 'm' | 'l'
  verticalPaddingType?: 's' | 'm'
}

const props = withDefaults(defineProps<ILayoutPageInnerProps>(), {
  widthType: 'l',
  verticalPaddingType: 's'
})

const configWidthType: Record<NonNullable<ILayoutPageInnerProps['widthType']>, string> = {
  s: 'max-w-588 m:max-w-620',
  m: 'max-w-778 m:max-w-810',
  l: 'max-w-1158 m:max-w-1190'
}

const configVerticalPaddingType: Record<NonNullable<ILayoutPageInnerProps['verticalPaddingType']>, string> = {
  s: 'py-80',
  m: 'py-90'
}

const classes = computed<string[]>(() => {
  return [
    'relative w-full px-24 m:px-40 mx-auto',
    configWidthType[props.widthType],
    configVerticalPaddingType[props.verticalPaddingType]
  ]
})
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>