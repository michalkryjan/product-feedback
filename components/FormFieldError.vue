<script setup lang="ts">
interface IFormFieldErrorProps {
  message: string
}

const props = defineProps<IFormFieldErrorProps>()
</script>

<template>
  <base-content value="message" />
</template>
