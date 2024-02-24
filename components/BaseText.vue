<script setup lang="ts">
export interface IBaseTextProps {
  value: string
  tag?: 'p' | 'div' | 'span' | 'label'
  typography?: 'body-1' | 'body-2' | 'body-3' | 'label-1' | 'label-2'
  color?: 'white' | 'blue-1'
  align?: 'left' | 'center' | 'right'
  transition?: 'color'
  isOneLine?: boolean
  isUppercase?: boolean
  isUnderline?: boolean
}

const props = withDefaults(defineProps<IBaseTextProps>(), {
  tag: 'p',
  typography: 'body-1',
  color: 'white',
  align: 'left',
  transition: undefined,
  isOneLine: false,
  isUppercase: false,
  isUnderline: false
})

const configTypography: Record<NonNullable<IBaseTextProps['typography']>, string> = {
  'body-1': 'text-body-1',
  'body-2': 'text-body-2',
  'body-3': 'text-body-3',
  'label-1': 'text-label-1',
  'label-2': 'text-label-2'
}

const configColor = {
  white: 'text-white',
  'blue-1': 'blue-1'
}

const configAlign: Record<NonNullable<IBaseTextProps['align']>, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right'
}

const configTransition: Record<NonNullable<IBaseTextProps['transition']>, string> = {
  color: 'transition-color duration-200'
}

const classes = computed<string[]>(() => {
  return [
    'font-base',
    configTypography[props.typography],
    configColor[props.color],
    configAlign[props.align],
    props.transition ? configTransition[props.transition] : '',
    props.isOneLine ? 'u-text-one-line' : '',
    props.isUppercase ? 'uppercase' : '',
    props.isUnderline ? 'underline' : ''
  ]
})
</script>

<template>
  <component
    :is="tag"
    :class="classes"
    v-html="useOrphans(value)" />
</template>