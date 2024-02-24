<script setup lang="ts">
interface IBaseCardProps {
  tag?: 'div'
  variant?: '1'
  theme?: 'white' | 'gradient-1'
}

const props = withDefaults(defineProps<IBaseCardProps>(), {
  tag: 'div',
  variant: '1',
  theme: 'white'
})

const configVariant: Record<NonNullable<IBaseCardProps['variant']>, string> = { 1: 'p-[2.4rem]' }

const configTheme = {
  white: 'bg-white',
  'gradient-1': 'bg-[url(/suggestions/background-header-mobile.png)] mob:bg-[url(/suggestions/background-header-tablet.png)] tm:bg-[url(/suggestions/background-header-desktop.png)] bg-cover bg-no-repeat'
}

const classes = computed(() => {
  return [
    'flex w-full h-full rounded-primary',
    configVariant[props.variant],
    configTheme[props.theme]
  ]
})
</script>

<template>
  <component
    :is="tag"
    :class="classes">
    <slot />
  </component>
</template>