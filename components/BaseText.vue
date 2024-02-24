<script setup lang="ts">
interface IBaseTextProps {
  value: string
  tag?: 'p' | 'div' | 'span' | 'label'
  typography?: 'text-body-1' | 'text-body-2' | 'text-body-3' | 'text-label-1'
  color?: 'white'
  align?: 'left' | 'center' | 'right'
  transition?: 'color'
  isOneLine?: boolean
  isUppercase?: boolean
  isUnderline?: boolean
}

const props = withDefaults(defineProps<IBaseTextProps>(), {
  tag: 'p',
  typography: 'text-body-1',
  color: 'white',
  align: 'left',
  transition: undefined,
  isOneLine: false,
  isUppercase: false,
  isUnderline: false
})

const configColor = { white: 'text-white' }

const configAlign = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right'
}

const configTransition = { color: 'transition-color duration-200' }

const classes = computed<string[]>(() => {
  return [
    'font-base',
    props.typography,
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