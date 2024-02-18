<script setup lang="ts">
interface IFormFieldErrorProps {
  message: string
}

const props = defineProps<IFormFieldErrorProps>()
</script>

<template>
  <base-text value="message" />
</template>
