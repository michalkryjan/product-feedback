<script setup lang="ts">
export interface IUiCardProps {
  tag?: 'div' | 'NuxtLink'
  variant?: '1' | '2'
  theme?: 'white' | 'darkNavy' | 'gradient-1'
  layout?: 'col' | 'row'
  overflow?: 'visible' | 'hidden'
}

const props = withDefaults(defineProps<IUiCardProps>(), {
  tag: 'div',
  variant: '1',
  theme: 'white',
  layout: 'col',
  overflow: 'hidden'
})

const configVariant: Record<NonNullable<IUiCardProps['variant']>, string> = {
  1: 'p-24',
  2: 'p-32'
}

const configTheme: Record<NonNullable<IUiCardProps['theme']>, string> = {
  white: 'bg-white',
  darkNavy: 'bg-darkNavy',
  'gradient-1': 'bg-gradientCardMobile mob:bg-gradientCardTablet tm:bg-gradientCardDesktop bg-cover bg-no-repeat'
}

const configLayout: Record<NonNullable<IUiCardProps['layout']>, string> = {
  col: 'flex-col',
  row: 'flex-row'
}

const classes = computed<string[]>(() => {
  return [
    'relative flex flex-nowrap w-full h-fit rounded-primary',
    configVariant[props.variant],
    configTheme[props.theme],
    configLayout[props.layout],
    props.overflow === 'hidden' ? 'overflow-hidden' : 'overflow-visible'
  ]
})

const resolvedTag = computed(() => props.tag === 'NuxtLink' ? resolveComponent('NuxtLink') : props.tag)
</script>

<template>
  <component
    :is="resolvedTag"
    :class="classes">
    <slot />
  </component>
</template>