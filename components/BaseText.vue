<script setup lang="ts">
interface IBaseTextProps {
  value: string
  tag?: 'p' | 'div' | 'span' | 'label'
  variant?: 'text-body-1' | 'text-body-2' | 'text-body-3' | 'text-label-1'
  color?: 'white'
  align?: 'left' | 'center' | 'right'
  isOneLine?: boolean
  isUppercase?: boolean
  isUnderline?: boolean
}

const props = withDefaults(defineProps<IBaseTextProps>(), {
  tag: 'p',
  variant: 'text-body-1',
  color: 'white',
  align: 'left',
  isOneLine: false,
  isUppercase: false,
  isUnderline: false
})

const classes = computed<string[]>(() => {
  return [
    props.variant,
    `text-${props.color}`,
    `text-${props.align}`,
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