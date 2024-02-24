<script setup lang="ts">
const colorConfig = { white: 'text-white' }

const alignConfig = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right'
}

interface IBaseHeadlineProps {
  value: string
  type?: 'h' | 'span' | 'label'
  level?: 1 | 2 | 3 | 4 | 5 | 6
  typography?: 'title-1' | 'title-2' | 'title-3' | 'title-4'
  color?: keyof typeof colorConfig
  align?: keyof typeof alignConfig
  isOneLine?: boolean
  isUppercase?: boolean
  isUnderline?: boolean
}

type BaseHeadlineTag = `h${NonNullable<IBaseHeadlineProps['level']>}` | 'span' | 'label'

const props = withDefaults(defineProps<IBaseHeadlineProps>(), {
  type: 'h',
  level: 2,
  typography: 'title-1',
  color: 'white',
  align: 'left',
  isOneLine: false,
  isUppercase: false,
  isUnderline: false
})

const classes = computed<string[]>(() => {
  return [
    'font-base',
    props.typography,
    props.color ? colorConfig[props.color] : '',
    props.align ? alignConfig[props.align] : '',
    props.isOneLine ? 'u-text-one-line' : '',
    props.isUppercase ? 'uppercase' : '',
    props.isUnderline ? 'underline' : ''
  ]
})

const tag = computed<BaseHeadlineTag>(() => {
  if (props.type === 'h') {
    return `h${props.level}`
  } else {
    return props.type
  }
})
</script>

<template>
  <component
    :is="tag"
    :class="classes"
    v-html="useOrphans(value)" />
</template>