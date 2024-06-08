<script setup lang="ts">
interface IBlockFeedbackEditProps {
  feedback: IFeedbackExtended
}

const props = defineProps<IBlockFeedbackEditProps>()
</script>

<template>
  <form-feedback-edit :feedback="feedback" />
</template>