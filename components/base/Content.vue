<script setup lang="ts">
export interface IBaseContentProps {
  value: string
  tag?: 'p' | 'div' | 'span' | 'label' | 'strong'
  typography?: 'body-1' | 'body-2' | 'body-3' | 'label-1' | 'label-2'
  color?: 'white' | 'blue' | 'gray'
  align?: 'left' | 'center' | 'right'
  transition?: 'color'
  isOneLine?: boolean
  isUppercase?: boolean
  isUnderline?: boolean
}

const props = withDefaults(defineProps<IBaseContentProps>(), {
  tag: 'p',
  typography: 'body-1',
  color: 'white',
  align: 'left',
  transition: undefined,
  isOneLine: false,
  isUppercase: false,
  isUnderline: false
})

const configTypography: Record<NonNullable<IBaseContentProps['typography']>, string> = {
  'body-1': 'text-body-1',
  'body-2': 'text-body-2',
  'body-3': 'text-body-3',
  'label-1': 'text-label-1',
  'label-2': 'text-label-2'
}

const configColor = {
  white: 'text-white',
  blue: 'text-blue-1',
  gray: 'text-gray-1'
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
    configTypography[props.typography],
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
    :class="classes"
    v-html="useOrphans(value)" />
</template>