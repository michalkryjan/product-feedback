<script setup lang="ts">
interface IBaseLabelProps {
  text: string
  fieldId?: string
  variant?: '1'
}

const props = withDefaults(defineProps<IBaseLabelProps>(), {
  fieldId: undefined,
  variant: '1'
})

const configVariant: Record<NonNullable<IBaseLabelProps['variant']>, string> = {
  1: 'text-label-3 text-gray-1'
}

const classes = computed(() => {
  return [
    'block',
    configVariant[props.variant]
  ]
})
</script>

<template>
  <label
    :for="fieldId"
    :class="classes"
    v-html="useOrphans(text)" />
</template>