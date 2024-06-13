<script setup lang="ts">
import type { Models } from 'types/models'

interface IBlockFeedbackEditProps {
  feedback: Models.IFeedback
}

const props = defineProps<IBlockFeedbackEditProps>()
</script>

<template>
  <form-feedback-edit :feedback="feedback" />
</template>