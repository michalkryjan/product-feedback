<script setup lang="ts">
import type { Models } from 'types/models'

interface IUiCommentCreateProps {
  title?: string
  feedbackId?: Models.IFeedback['id']
}

const props = defineProps<IUiCommentCreateProps>()
</script>

<template>
  <ui-card>
    <base-headline
      v-if="title"
      :level="2"
      typography="title-3"
      color="navy">
      {{ title }}
    </base-headline>

    <form-comment-create class="mt-24" />
  </ui-card>
</template>