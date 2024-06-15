<script setup lang="ts">
import { getDocs } from 'firebase/firestore'
import type { Models } from 'types/models'
import type { ICommentWithReplies } from '~/components/ui/Comment.vue'
import { extractNonNullableDocs } from '~/firebase/helpers'

const { $firebase } = useNuxtApp()
const currentFeedback = useCurrentRouteFeedback()

const { data: commentsWithReplies } = useAsyncData(
  `feedback/${currentFeedback.value?.id}/comments`,
  () => getCommentsWithReplies()
)

const editFeedbackUrl = computed<string | undefined>(() => currentFeedback.value?.id ? `/feedback/${currentFeedback.value.id}/edit` : undefined)

async function getCommentsWithReplies () {
  if (!currentFeedback.value?.id) {
    return null
  }

  const comments = await getComments(currentFeedback.value.id)
  await addRepliesToComments(comments)

  return comments as ICommentWithReplies[]
}

async function getComments (feedbackId: Models.IFeedback['id']) {
  const querySnapshot = await getDocs($firebase.db.feedbacks.comments.getCollectionRef(feedbackId))
  return extractNonNullableDocs(querySnapshot.docs)
}

async function addRepliesToComments (comments: Models.IComment[]) {
  for (const comment of comments) {
    const replies = await getReplies(currentFeedback.value?.id as string, comment.id)

    Object.assign(comment, {
      replies
    })
  }
}

async function getReplies (feedbackId: Models.IFeedback['id'], commentId: Models.IComment['id']) {
  const querySnapshot = await getDocs($firebase.db.feedbacks.comments.replies.getCollectionRef(feedbackId, commentId))

  if (querySnapshot.empty) {
    return []
  }

  return extractNonNullableDocs(querySnapshot.docs)
}
</script>

<template>
  <layout-page-inner
    width-type="m"
    vertical-padding-type="s">
    <ui-header-subpage margin-bottom-type="s">
      <template #button>
        <base-button
          text="Edit feedback"
          :href="editFeedbackUrl"
          size="s2"
          theme="blue"
          label-color="white" />
      </template>
    </ui-header-subpage>

    <layout-grid
      v-if="currentFeedback"
      type="1col-v2">
      <ui-feedback
        :data="currentFeedback"
        :link-to-details="false" />

      <suspense>
        <ui-comment-list
          v-if="commentsWithReplies"
          :comments-count="currentFeedback.comments_count"
          :data="commentsWithReplies" />
      </suspense>

      <ui-comment-create
        title="Add comment"
        :feedback-id="currentFeedback.id" />
    </layout-grid>
  </layout-page-inner>
</template>