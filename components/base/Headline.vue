<script setup lang="ts">
export interface IBaseHeadlineProps {
  type?: 'h' | 'span' | 'label'
  level?: 1 | 2 | 3 | 4 | 5 | 6
  typography?: Typography
  color?: 'white' | 'navy'
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

const configColor: Record<NonNullable<IBaseHeadlineProps['color']>, string> = {
  white: 'text-white',
  navy: 'text-navy-1'
}

const configAlign = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right'
}

const classes = computed<string[]>(() => {
  return [
    'font-base',
    props.typography,
    configColor[props.color],
    configAlign[props.align],
    props.isOneLine ? 'u-text-nowrap' : '',
    props.isUppercase ? 'uppercase' : '',
    props.isUnderline ? 'underline underline-offset-2' : ''
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
    :class="classes">
    <slot />
  </component>
</template>