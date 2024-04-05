<script setup lang="ts">
</script>

<template>
  <base-card class="min-h-600 items-center justify-center">
    <img
      src="/svg/illustration-empty.svg"
      class="mb-54 max-w-130">

    <base-headline
      typography="title-1"
      align="center"
      color="navy"
      value="There is no feedback yet."
      class="mb-16" />

    <base-content
      typography="body-1"
      align="center"
      color="gray"
      value="Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app."
      class="mb-48 max-w-430" />

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