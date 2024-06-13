<script setup lang="ts">
import { Models } from 'types/models'

interface IBlockCommentListProps {
  data: Models.IComment[]
}

const props = defineProps<IBlockCommentListProps>()
</script>

<template>
  <ui-card>
    <base-headline
      :level="2"
      typography="title-3"
      color="navy"
      class="mb-28">
      {{ '4 comments' }}
    </base-headline>

    <ui-comment
      v-for="item in data"
      :key="item.id"
      :data="item" />
  </ui-card>
</template>