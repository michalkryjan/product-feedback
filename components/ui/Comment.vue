<script setup lang="ts">
import type { Models } from 'types/models'

interface IUiCommentProps {
  data: Models.IComment | Models.IReply
}

const props = defineProps<IUiCommentProps>()

const isReplyFormActive = ref<boolean>(false)

function toggleReplyForm (): void {
  if (isReplyFormActive.value) {
    isReplyFormActive.value = false
  } else {
    isReplyFormActive.value = true
  }
}
</script>

<template>
  <div class="flex flex-col">
    <div class="inline-flex gap-x-32">
      <div class="min-w-40 w-40 h-40">
        <!-- <base-image
          src-type="firebase"
          :src-desktop="data.created_by.image_url"
          :width="40"
          :height="40"
          rounded-type="full"
          :is-full-width="true" /> -->
      </div>

      <div class="flex-grow-1 flex flex-col flex-nowrap">
        <div class="inline-flex gap-x-32 items-center justify-between">
          <div class="flex flex-col flex-nowrap">
            <base-content
              tag="span"
              typography="title-4"
              color="navy">
              {{ data.created_by.fullname }}
            </base-content>
            <base-content
              typography="text-label-3"
              tag="span"
              color="gray">
              {{ '@' + data.created_by.username }}
            </base-content>
          </div>

          <base-button
            :text="isReplyFormActive ? 'Cancel replying' : 'Reply'"
            label-size="s2"
            theme="transparent"
            label-color="blue"
            @click="toggleReplyForm" />
        </div>

        <base-content
          tag="div"
          typography="text-body-2"
          color="gray"
          class="mt-18">
          <p v-html="useOrphans(data.content)" />
        </base-content>

        <lazy-form-reply-create
          v-if="isReplyFormActive"
          class="mt-24" />
      </div>
    </div>

    <template v-if="data?.replies && data.replies?.length > 0">
      <ui-comment
        v-for="reply in data.replies"
        :key="reply.id"
        :data="reply" />
    </template>
  </div>
</template>