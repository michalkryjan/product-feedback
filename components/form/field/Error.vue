<script setup lang="ts">
interface IFormFieldErrorProps {
  message: string
}

const props = defineProps<IFormFieldErrorProps>()
</script>

<template>
  <base-content
    tag="span"
    typography="text-label-3"
    color="red">
    <span v-html="useOrphans(message)" />
  </base-content>
</template>