<script setup lang="ts">
const colorConfig = { white: 'text-white' }

const alignConfig = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right'
}

interface IBaseTextProps {
  value: string
  tag?: 'p' | 'div' | 'span' | 'label'
  typography?: 'text-body-1' | 'text-body-2' | 'text-body-3' | 'text-label-1'
  color?: keyof typeof colorConfig
  align?: keyof typeof alignConfig
  isOneLine?: boolean
  isUppercase?: boolean
  isUnderline?: boolean
}

const props = withDefaults(defineProps<IBaseTextProps>(), {
  tag: 'p',
  typography: 'text-body-1',
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