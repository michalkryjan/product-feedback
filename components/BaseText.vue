<script setup lang="ts">
interface IBaseTextProps {
  value: string
  tag?: 'p' | 'div' | 'span' | 'label'
  variant?: 'text-body-1' | 'text-body-2' | 'text-body-3' | 'text-label-1'
  align?: 'left' | 'center' | 'right'
  isOneLine?: boolean
  isUppercase?: boolean
  isUnderline?: boolean
}

const props = withDefaults(defineProps<IBaseTextProps>(), {
  tag: 'p',
  variant: 'text-body-1',
  align: 'left',
})

const classes = computed<string[]>(() => {
  return [
    props.variant,
    getAlignClass(props.align),
    props.isUppercase ? 'uppercase' : '',
    props.isUnderline ? 'underline' : ''
  ]
})

function getAlignClass (key: NonNullable<IBaseTextProps['align']>): string {
  const config: Record<NonNullable<IBaseTextProps['align']>, string> = {
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
    v-html="value" />
</template>