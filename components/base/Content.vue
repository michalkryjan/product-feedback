<script setup lang="ts">
export interface IBaseContentProps {
  tag?: 'p' | 'div' | 'span' | 'label' | 'strong'
  typography?: Typography
  color?: 'white' | 'blue' | 'gray' | 'red'
  align?: 'left' | 'center' | 'right'
  transition?: 'color'
  isOneLine?: boolean
  isUppercase?: boolean
  isUnderline?: boolean
}

const props = withDefaults(defineProps<IBaseContentProps>(), {
  tag: 'p',
  typography: 'text-body-1',
  color: 'white',
  align: 'left',
  transition: undefined,
  isOneLine: false,
  isUppercase: false,
  isUnderline: false
})

const configColor = {
  white: 'text-white',
  blue: 'text-blue-1',
  gray: 'text-gray-1',
  red: 'text-red-1'
}

const configAlign: Record<NonNullable<IBaseContentProps['align']>, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right'
}

const configTransition: Record<NonNullable<IBaseContentProps['transition']>, string> = {
  color: 'transition-color duration-200'
}

const classes = computed<string[]>(() => {
  return [
    'content font-base',
    props.typography,
    configColor[props.color],
    configAlign[props.align],
    props.transition ? configTransition[props.transition] : '',
    props.isOneLine ? 'u-text-one-line' : '',
    props.isUppercase ? 'uppercase' : '',
    props.isUnderline ? 'underline underline-offset-2' : '',
    props.tag === 'strong' ? 'font-bold' : ''
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