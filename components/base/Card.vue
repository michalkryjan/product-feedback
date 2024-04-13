<script setup lang="ts">
export interface IBaseCardProps {
  tag?: 'div' | 'NuxtLink'
  variant?: '1' | '2'
  theme?: 'white' | 'gradient-1'
  layout?: 'col' | 'row'
}

const props = withDefaults(defineProps<IBaseCardProps>(), {
  tag: 'div',
  variant: '1',
  theme: 'white',
  layout: 'col'
})

const configVariant: Record<NonNullable<IBaseCardProps['variant']>, string> = {
  1: 'p-24',
  2: 'p-32'
}

const configTheme: Record<NonNullable<IBaseCardProps['theme']>, string> = {
  white: 'bg-white',
  'gradient-1': 'bg-gradientCardMobile mob:bg-gradientCardTablet tm:bg-gradientCardDesktop bg-cover bg-no-repeat'
}

const configLayout: Record<NonNullable<IBaseCardProps['layout']>, string> = {
  col: 'flex-col',
  row: 'flex-row'
}

const classes = computed<string[]>(() => {
  return [
    'relative overflow-hidden flex flex-nowrap w-full h-fit rounded-primary',
    configVariant[props.variant],
    configTheme[props.theme],
    configLayout[props.layout]
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