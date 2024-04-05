<script setup lang="ts">
</script>

<template>
  <base-card class="min-h-600 items-center justify-center">
    <base-img
      src="/svg/illustration-empty.svg"
      class="mb-54 max-w-130" />

    <base-headline
      typography="title-1"
      align="center"
      color="navy"
      class="mb-16">
      <span v-html="useOrphans('There is no feedback yet.')" />
    </base-headline>

    <base-content
      typography="text-body-1"
      align="center"
      color="gray"
      class="mb-48 max-w-430">
      <span v-html="useOrphans('Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.')" />
    </base-content>

    <base-button
      size="s2"
      theme="purple"
      label="Add feedback"
      href="/feedback/create">
      <template #iconLeft>
        <base-icon name="icon-plus" />
      </template>
    </base-button>
  </base-card>
</template>