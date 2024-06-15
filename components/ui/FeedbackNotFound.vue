<script setup lang="ts">
interface IUiFeedbackNotFoundProps {
  title: string
  content?: string
}

const props = defineProps<IUiFeedbackNotFoundProps>()
</script>

<template>
  <ui-card class="min-h-600 items-center justify-center">
    <base-image
      src-desktop="/svg/illustration-empty.svg"
      :width="130"
      :is-full-width="false"
      picture-class="mb-54" />

    <base-headline
      typography="title-1"
      align="center"
      color="navy"
      class="mb-16">
      <span v-html="useOrphans(title)" />
    </base-headline>

    <base-content
      v-if="content"
      typography="text-body-1"
      align="center"
      color="gray"
      class="mb-48 max-w-430">
      <span v-html="useOrphans(content)" />
    </base-content>

    <base-button
      text="Add feedback"
      href="/feedback/create"
      size="s2"
      theme="purple"
      label-color="white">
      <template #icon-left>
        <base-icon name="plus" />
      </template>
    </base-button>
  </ui-card>
</template>