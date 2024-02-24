<!-- eslint-disable @stylistic/quote-props -->
<script setup lang="ts">
const variantConfig = { '1': 'p-[2.4rem]' }

const themeConfig = {
  'white': 'bg-white',
  'gradient-1': 'bg-[url(/suggestions/background-header-mobile.png)] mob:bg-[url(/suggestions/background-header-tablet.png)] tm:bg-[url(/suggestions/background-header-desktop.png)] bg-cover bg-no-repeat'
}

interface IBaseCardProps {
  tag?: 'div'
  variant?: keyof typeof variantConfig
  theme?: keyof typeof themeConfig
}

const props = withDefaults(defineProps<IBaseCardProps>(), {
  tag: 'div',
  variant: '1',
  theme: 'white'
})

const classes = computed(() => {
  return [
    'flex w-full h-full rounded-primary',
    variantConfig[props.variant],
    themeConfig[props.theme]
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