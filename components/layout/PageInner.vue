<script setup lang="ts">
interface IPageInnerProps {
  type?: 's' | 'm' | 'l'
}

const props = withDefaults(defineProps<IPageInnerProps>(), {
  type: 'l'
})

const configType: Record<NonNullable<IPageInnerProps['type']>, string> = {
  s: 'max-w-588 m:max-w-620',
  m: 'max-w-778 m:max-w-810',
  l: 'max-w-1158 m:max-w-1190'
}

const classes = computed(() => {
  return [
    'relative w-full px-24 m:px-40 pt-34 m:pt-56',
    configType[props.type]
  ]
})
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>