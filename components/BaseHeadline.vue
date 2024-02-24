<script setup lang="ts">
interface IBaseHeadlineProps {
  value: string
  type?: 'h' | 'span' | 'label'
  level?: 1 | 2 | 3 | 4 | 5 | 6
  typography?: 'title-1' | 'title-2' | 'title-3' | 'title-4'
  color?: 'white'
  align?: 'left' | 'center' | 'right'
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

const configColor = { white: 'text-white' }

const configAlign = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right'
}

const classes = computed<string[]>(() => {
  return [
    'font-base',
    props.typography,
    props.color ? configColor[props.color] : '',
    props.align ? configAlign[props.align] : '',
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