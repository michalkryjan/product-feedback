<script setup lang="ts">
interface IBlockCommentListProps {
  feedbackId: IFeedback['id']
  commentsIds: IComment['id'][]
}

const props = defineProps<IBlockCommentListProps>()

const { $firebase } = useNuxtApp()

const { data } = await useAsyncData(`${props.feedbackId}/comments-list`, () => getCommentsData())

async function getCommentsData () {
  return $firebase.db.comments.getComments({
    filterBy: {
      ids: props.commentsIds
    },
    orderBy: {
      created_date: 'asc'
    },
    merge: {
      replies: true,
      user: true
    }
  })
}
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