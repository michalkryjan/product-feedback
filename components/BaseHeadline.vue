<script setup lang="ts">
interface IBaseHeadlineProps {
  value: string
  type?: 'h' | 'span' | 'label'
  level?: 1 | 2 | 3 | 4 | 5 | 6
  variant?: 'title-h1' | 'title-h2' | 'title-h3' | 'title-h4'
  align?: 'left' | 'center' | 'right'
  isOneLine?: boolean
  isUppercase?: boolean
  isUnderline?: boolean
}

type BaseHeadlineTag = `h${NonNullable<IBaseHeadlineProps['level']>}` | 'span' | 'label'

const props = withDefaults(defineProps<IBaseHeadlineProps>(), {
  type: 'h',
  level: 2,
  variant: 'title-h1',
  align: 'left',
  isUppercase: false,
  isUnderline: false
})

const classes = computed<string[]>(() => {
  return [
    props.variant,
    getAlignClass(props.align),
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

function getAlignClass (key: NonNullable<IBaseHeadlineProps['align']>): string {
  const config: Record<NonNullable<IBaseHeadlineProps['align']>, string> = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  return config[key]
}
</script>

<template>
  <component
    :is="tag"
    :class="classes"
    v-html="useOrphans(value)" />
</template>