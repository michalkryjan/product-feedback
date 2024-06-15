<script setup lang="ts">
import { getDocs } from 'firebase/firestore'
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

  const commentsQuerySnapshot = await getDocs($firebase.db.feedbacks.comments.getCollectionRef(currentFeedback.value.id))
  return extractNonNullableDocs(commentsQuerySnapshot.docs)
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
          :data="commentsWithReplies" />
      </suspense>

      <ui-comment-create
        title="Add comment"
        :feedback-id="currentFeedback.id" />
    </layout-grid>
  </layout-page-inner>
</template>