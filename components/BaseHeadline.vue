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
  typography?: 'title-h1' | 'title-h2' | 'title-h3' | 'title-h4'
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
  typography: 'title-h1',
  color: 'white',
  align: 'left',
  isOneLine: false,
  isUppercase: false,
  isUnderline: false
})

const classes = computed<string[]>(() => {
  return [
    props.typography,
    props.color ? colorConfig[props.color] : '',
    props.align ? alignConfig[props.align] : '',
    props.isOneLine ? 'is-one-line' : '',
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

<style lang="postcss" scoped>
.is-one-line {
  @apply inline-flex;
  inline-size: max-content;
  text-wrap: nowrap;
}
</style>