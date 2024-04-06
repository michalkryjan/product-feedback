<script setup lang="ts">
interface IBaseErrorProps {
  type?: 'positive' | 'negative'
  message: string
}

const props = withDefaults(defineProps<IBaseErrorProps>(), {
  type: 'negative'
})

const classes = computed(() => {
  return [
    'text-label-3',
    props.type === 'positive' ? 'text-green-1' : 'text-red-1'
  ]
})
</script>

<template>
  <p
    :class="classes"
    v-html="useOrphans(message)" />
</template>