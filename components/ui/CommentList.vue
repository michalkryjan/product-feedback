<script setup lang="ts">
import type { Models } from 'types/models'

interface IUiCommentListProps {
  data: Models.IComment[]
}

const props = defineProps<IUiCommentListProps>()
</script>

<template>
  <ui-card>
    <base-headline
      :level="2"
      typography="title-3"
      color="navy"
      class="mb-28">
      {{ `${ data.length } comments` }}
    </base-headline>

    <ui-comment
      v-for="item in data"
      :key="item.id"
      :data="item" />
  </ui-card>
</template>