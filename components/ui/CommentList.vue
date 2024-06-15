<script setup lang="ts">
import type { ICommentWithReplies } from './Comment.vue'

interface IUiCommentListProps {
  data: ICommentWithReplies[]
  commentsCount: number
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
      {{ `${ commentsCount } comments` }}
    </base-headline>

    <div class="flex flex-col flex-nowrap">
      <ui-comment
        v-for="item in data"
        :key="item.id"
        type="comment"
        :data="item"
        class="after:w-full after:h-1 after:bg-gray-7 after:bg-opacity-25 after:my-32 last:after:hidden" />
    </div>
  </ui-card>
</template>